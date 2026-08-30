"use client";
import Hero from "@/components/Hero";
import BookingFlow from "@/components/booking/BookingFlow";
import Finder from "@/components/Finder";
import ServicesExplorer from "@/components/ServicesExplorer";
import Team from "@/components/Team";
import Lookbook from "@/components/Lookbook";
import Space from "@/components/Space";
import Appointments from "@/components/Appointments";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // handle external reserve requests (from Finder, Services, Team)
    const handler = (e: Event) => {
      const detail = (e as CustomEvent).detail as { serviceIds?: string[]; specialistId?: string };
      // store pending in localStorage draft and scroll to booking
      try {
        const raw = localStorage.getItem("lumina_draft_v2");
        const draft = raw ? JSON.parse(raw) : { serviceIds: [], specialistId: null, date: null, time: null, firstVisit: null, note: "", referenceImage: null };
        if (detail.serviceIds && detail.serviceIds.length > 0) draft.serviceIds = detail.serviceIds;
        if (detail.specialistId) draft.specialistId = detail.specialistId;
        localStorage.setItem("lumina_draft_v2", JSON.stringify(draft));
      } catch {}
      const el = document.getElementById("reservar");
      if (el) el.scrollIntoView({ behavior: "smooth" });
      // reload to reflect draft (BookingFlow reads on mount; dispatch event to reload)
      setTimeout(() => window.dispatchEvent(new Event("lumina:external-reserve")), 300);
      // also reload page draft via storage event
      window.dispatchEvent(new Event("storage"));
    };
    window.addEventListener("lumina:reserve" as any, handler);
    return () => window.removeEventListener("lumina:reserve" as any, handler);
  }, []);

  function triggerReserve(serviceIds: string[], specialistId?: string) {
    window.dispatchEvent(new CustomEvent("lumina:reserve", { detail: { serviceIds, specialistId } }));
    // fallback: if listener not yet, scroll
    setTimeout(() => {
      window.location.hash = "#reservar";
    }, 100);
  }

  return (
    <div>
      <Hero />

      {/* BookingFlow listens to external reserve via draft reload - we need to enhance BookingFlow to listen */}
      <BookingFlowWrapper />

      <Finder onReserve={(ids) => triggerReserve(ids)} />
      <ServicesExplorer onReserve={(ids) => triggerReserve(ids)} />
      <Team onReserve={(id) => triggerReserve([], id)} />
      <Lookbook />
      <Space />
      <Appointments />

      {/* subtle newsletter / contact strip */}
      <section className="border-t border-[var(--line)] bg-white">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-8 py-10 grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6">
            <div className="font-display text-[26px] leading-none">¿Dudas antes de reservar?</div>
            <p className="mt-2 text-[13px] leading-6 text-[var(--stone)]">
              Escríbenos por WhatsApp y te orientamos sin compromiso. Respuesta en el día.
            </p>
          </div>
          <div className="lg:col-span-6 flex flex-col sm:flex-row gap-3 lg:justify-end">
            <a
              href="https://wa.me/34910000000"
              target="_blank"
              className="h-11 px-6 border border-[var(--ink)] inline-flex items-center justify-center text-[12px] tracking-[0.12em] uppercase hover:bg-[var(--ink)] hover:text-white transition"
            >
              WhatsApp — 91 000 00 00
            </a>
            <a
              href="mailto:hola@luminastudio.es"
              className="h-11 px-6 bg-[var(--sand)] border border-[var(--line)] inline-flex items-center justify-center text-[12px] tracking-[0.1em] uppercase"
            >
              hola@luminastudio.es
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

// Wrapper to re-mount BookingFlow when external reserve happens, so it reloads draft
import { useState } from "react";
function BookingFlowWrapper() {
  const [key, setKey] = useState(0);
  useEffect(() => {
    const h = () => setKey((k) => k + 1);
    window.addEventListener("lumina:external-reserve" as any, h);
    return () => window.removeEventListener("lumina:external-reserve" as any, h);
  }, []);
  return <BookingFlow key={key} />;
}

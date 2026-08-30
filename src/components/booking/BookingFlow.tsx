"use client";
import { useState, useMemo, useEffect } from "react";
import { specialists } from "@/data/specialists";
import { BookingDraft, Appointment } from "@/types";
import { calcTotals, generateCode, addAppointment, saveDraft, loadDraft } from "@/lib/storage";
import StepServices from "./StepServices";
import StepSpecialist from "./StepSpecialist";
import StepCalendar from "./StepCalendar";
import StepTime from "./StepTime";
import StepPersonalize from "./StepPersonalize";
import StepSummary from "./StepSummary";
import StepConfirmation from "./StepConfirmation";

const steps = [
  { id: 1, label: "Servicio" },
  { id: 2, label: "Especialista" },
  { id: 3, label: "Fecha" },
  { id: 4, label: "Hora" },
  { id: 5, label: "Detalles" },
  { id: 6, label: "Resumen" },
];

export default function BookingFlow() {
  const [current, setCurrent] = useState(1);
  const [draft, setDraft] = useState<BookingDraft>({
    serviceIds: [],
    specialistId: null,
    date: null,
    time: null,
    firstVisit: null,
    note: "",
    referenceImage: null,
  });
  const [confirmed, setConfirmed] = useState<Appointment | null>(null);

  // load draft once
  useEffect(() => {
    const d = loadDraft();
    if (d) setDraft(d);
  }, []);
  useEffect(() => {
    saveDraft(draft);
  }, [draft]);

  const { totalDuration, totalPrice } = useMemo(() => calcTotals(draft), [draft]);

  const canNext = useMemo(() => {
    if (current === 1) return draft.serviceIds.length > 0;
    if (current === 2) return draft.specialistId !== undefined; // allow null (= sin preferencia) but must have visited step
    if (current === 3) return !!draft.date;
    if (current === 4) return !!draft.time;
    if (current === 5) return true;
    return true;
  }, [current, draft]);

  // specialist availability: filter by services
  const availableSpecialists = useMemo(() => {
    if (draft.serviceIds.length === 0) return specialists;
    return specialists.filter((s) => s.serviceIds.some((id) => draft.serviceIds.includes(id)));
  }, [draft.serviceIds]);

  // if selected specialist no longer valid for chosen services, reset to "sin preferencia"
  useEffect(() => {
    if (draft.specialistId && !availableSpecialists.some((s) => s.id === draft.specialistId)) {
      setDraft((prev) => ({ ...prev, specialistId: null }));
    }
  }, [availableSpecialists, draft.specialistId]);

  function next() {
    if (current < 6) setCurrent((c) => c + 1);
  }
  function back() {
    if (current > 1) setCurrent((c) => c - 1);
  }
  function goTo(step: number) {
    setCurrent(step);
  }

  function confirm() {
    const code = generateCode();
    const appointment: Appointment = {
      ...draft,
      id: `${Date.now()}`,
      code,
      createdAt: new Date().toISOString(),
      status: "upcoming",
      totalDuration,
      totalPrice,
    };
    addAppointment(appointment);
    setConfirmed(appointment);
    // reset draft after a moment? keep for display
    window.dispatchEvent(new Event("lumina:appointments-updated"));
  }

  if (confirmed) {
    return <StepConfirmation appointment={confirmed} onNew={() => { setConfirmed(null); setCurrent(1); setDraft({ serviceIds: [], specialistId: null, date: null, time: null, firstVisit: null, note: "", referenceImage: null}); }} />;
  }

  return (
    <section id="reservar" className="scroll-mt-16 border-t border-[var(--line)] bg-white">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8 py-10 lg:py-14">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div>
            <div className="text-[11px] tracking-[0.18em] uppercase text-[var(--stone)]">Reserva</div>
            <h2 className="font-display text-[34px] lg:text-[42px] leading-none mt-2">Agenda tu cita</h2>
            <p className="mt-3 text-[14px] leading-6 text-[var(--stone)] max-w-[48ch]">
              Un proceso pensado para hacerlo con calma. Elige a tu ritmo — puedes volver atrás en cualquier momento.
            </p>
          </div>
          <div className="flex items-center gap-3 text-[13px]">
            {draft.serviceIds.length > 0 && (
              <div className="hidden sm:flex items-center gap-2 border border-[var(--line)] px-4 h-9">
                <span className="text-[var(--stone)]">{draft.serviceIds.length} servicio{draft.serviceIds.length>1?"s":""}</span>
                <span className="w-px h-3 bg-[var(--line)]" />
                <span>{totalDuration} min</span>
                <span className="w-px h-3 bg-[var(--line)]" />
                <span className="font-[500]">desde {totalPrice} €</span>
              </div>
            )}
            <div className="text-[11px] tracking-[0.14em] uppercase text-[var(--stone)]">
              Paso {current} de 6
            </div>
          </div>
        </div>

        {/* Progress bar */}
        <div className="mt-8">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2">
            {steps.map((s) => (
              <button
                key={s.id}
                onClick={() => (s.id < current ? goTo(s.id) : undefined)}
                disabled={s.id > current}
                className={`flex items-center gap-3 shrink-0 group ${s.id <= current ? "" : "opacity-40"}`}
              >
                <span
                  className={`w-7 h-7 grid place-items-center rounded-full text-[12px] border ${
                    s.id === current
                      ? "bg-[var(--ink)] text-white border-[var(--ink)]"
                      : s.id < current
                        ? "bg-[var(--accent)] text-white border-[var(--accent)]"
                        : "border-[var(--line)] text-[var(--stone)]"
                  }`}
                >
                  {s.id < current ? "✓" : s.id}
                </span>
                <span className={`text-[12px] tracking-[0.1em] uppercase hidden sm:inline ${s.id === current ? "text-[var(--ink)] font-[500]" : "text-[var(--stone)]"}`}>
                  {s.label}
                </span>
                {s.id < steps.length && <span className="w-6 sm:w-10 h-px bg-[var(--line)] ml-1" />}
              </button>
            ))}
          </div>
          <div className="h-px bg-[var(--line)] mt-2">
            <div className="h-px bg-[var(--ink)] transition-all duration-500" style={{ width: `${(current / 6) * 100}%` }} />
          </div>
        </div>

        {/* Step content */}
        <div className="mt-8 lg:mt-10 min-h-[420px]">
          {current === 1 && <StepServices draft={draft} setDraft={setDraft} />}
          {current === 2 && <StepSpecialist draft={draft} setDraft={setDraft} available={availableSpecialists} />}
          {current === 3 && <StepCalendar draft={draft} setDraft={setDraft} />}
          {current === 4 && <StepTime draft={draft} setDraft={setDraft} totalDuration={totalDuration} />}
          {current === 5 && <StepPersonalize draft={draft} setDraft={setDraft} />}
          {current === 6 && (
            <StepSummary draft={draft} onEdit={goTo} totalDuration={totalDuration} totalPrice={totalPrice} />
          )}
        </div>

        {/* Nav */}
        <div className="mt-8 flex items-center justify-between border-t border-[var(--line)] pt-6">
          <button
            onClick={back}
            disabled={current === 1}
            className="h-11 px-6 border border-[var(--line)] text-[13px] tracking-[0.1em] uppercase disabled:opacity-30 hover:bg-[var(--sand)] transition"
          >
            Atrás
          </button>
          <div className="flex items-center gap-3">
            {current < 6 ? (
              <button
                onClick={next}
                disabled={!canNext}
                className="h-11 px-8 bg-[var(--ink)] text-white text-[13px] tracking-[0.12em] uppercase font-[500] disabled:opacity-30 hover:bg-black transition"
              >
                Continuar
              </button>
            ) : (
              <button
                onClick={confirm}
                disabled={!draft.date || !draft.time || draft.serviceIds.length===0}
                className="h-11 px-8 bg-[var(--accent)] text-white text-[13px] tracking-[0.12em] uppercase font-[500] disabled:opacity-30 hover:bg-[var(--accent-hover)] transition"
              >
                Confirmar cita
              </button>
            )}
          </div>
        </div>

        <p className="mt-4 text-center text-[12px] text-[var(--stone)]">
          Sin pago anticipado · Cancelación gratuita hasta 24h antes
        </p>
      </div>
    </section>
  );
}

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
  { id: 1, label: "Qué hacer", friendly: "¿Qué te gustaría hacer hoy?" },
  { id: 2, label: "Con quién", friendly: "¿Con quién te gustaría atenderte?" },
  { id: 3, label: "Cuándo", friendly: "Elige tu día" },
  { id: 4, label: "Hora", friendly: "¿A qué hora te viene bien?" },
  { id: 5, label: "Detalles", friendly: "Cuéntanos un poco más" },
  { id: 6, label: "Listo", friendly: "Revisamos todo" },
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
    privacyAccepted: false,
  });
  const [confirmed, setConfirmed] = useState<Appointment | null>(null);

  useEffect(() => {
    const d = loadDraft();
    if (d) setDraft((prev) => ({ ...prev, ...d }));
  }, []);
  useEffect(() => {
    saveDraft(draft);
  }, [draft]);

  const { totalDuration, totalPrice } = useMemo(() => calcTotals(draft), [draft]);

  const canNext = useMemo(() => {
    if (current === 1) return draft.serviceIds.length > 0;
    if (current === 2) return draft.specialistId !== undefined;
    if (current === 3) return !!draft.date;
    if (current === 4) return !!draft.time;
    if (current === 5) return true;
    return true;
  }, [current, draft]);

  const availableSpecialists = useMemo(() => {
    if (draft.serviceIds.length === 0) return specialists;
    return specialists.filter((s) => s.serviceIds.some((id) => draft.serviceIds.includes(id)));
  }, [draft.serviceIds]);

  useEffect(() => {
    if (draft.specialistId && !availableSpecialists.some((s) => s.id === draft.specialistId)) {
      setDraft((prev) => ({ ...prev, specialistId: null }));
    }
  }, [availableSpecialists, draft.specialistId]);

  function next() {
    if (current < 6) setCurrent((c) => c + 1);
    document.getElementById("reservar")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  function back() {
    if (current > 1) setCurrent((c) => c - 1);
  }
  function goTo(step: number) {
    setCurrent(step);
  }

  function fillDemo() {
    const tomorrow = new Date(); tomorrow.setDate(tomorrow.getDate() + 1);
    // evitar domingo/lunes
    while (tomorrow.getDay() === 0 || tomorrow.getDay() === 1) tomorrow.setDate(tomorrow.getDate() + 1);
    const demo: BookingDraft = {
      serviceIds: ["corte-presicion", "tratamiento-nutricion"],
      specialistId: null,
      date: tomorrow.toISOString().slice(0, 10),
      time: "11:00",
      firstVisit: true,
      note: "Simulación — quiero algo natural para el calor de Cuernavaca",
      referenceImage: null,
      privacyAccepted: true,
    };
    setDraft(demo);
    setCurrent(6);
  }

  function confirm() {
    // Simulación: siempre permite confirmar, si falta fecha/hora usa demo
    const finalDraft = { ...draft };
    if (!finalDraft.date) {
      const d = new Date(); d.setDate(d.getDate() + 2);
      while (d.getDay() === 0 || d.getDay() === 1) d.setDate(d.getDate() + 1);
      finalDraft.date = d.toISOString().slice(0, 10);
    }
    if (!finalDraft.time) finalDraft.time = "11:00";
    if (finalDraft.serviceIds.length === 0) finalDraft.serviceIds = ["corte-presicion"];
    const { totalDuration: dur, totalPrice: price } = calcTotals(finalDraft);
    const code = generateCode();
    const appointment: Appointment = {
      ...finalDraft,
      id: `${Date.now()}`,
      code,
      createdAt: new Date().toISOString(),
      status: "upcoming",
      totalDuration: dur,
      totalPrice: price,
      privacyAccepted: true,
    };
    addAppointment(appointment);
    setConfirmed(appointment);
    window.dispatchEvent(new Event("lumina:appointments-updated"));
    localStorage.removeItem("lumina_draft_v2");
  }

  if (confirmed) {
    return <StepConfirmation appointment={confirmed} onNew={() => { setConfirmed(null); setCurrent(1); setDraft({ serviceIds: [], specialistId: null, date: null, time: null, firstVisit: null, note: "", referenceImage: null, privacyAccepted: false}); }} />;
  }

  const friendlyTitle = steps[current - 1]?.friendly ?? "";
  const progress = (current / 6) * 100;

  return (
    <section suppressHydrationWarning id="reservar" className="scroll-mt-16 bg-[var(--paper)]">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8 py-8 lg:py-12">
        {/* Warm header block - terracotta / sand rhythm */}
        <div className="bg-white border border-[var(--line)] overflow-hidden">
          <div className="grid lg:grid-cols-12">
            <div className="lg:col-span-7 p-6 lg:p-8">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-2 text-[11px] tracking-[0.1em] uppercase font-[700] text-[var(--terracotta)]">
                  <span className="w-2 h-2 rounded-full bg-[var(--terracotta)]" /> Reserva en segundos
                </span>
                <span className="hidden sm:inline-flex px-2 py-1 bg-[var(--mustard)] text-[10px] font-[700] tracking-[0.06em] uppercase text-[var(--brown)]">Simulación</span>
              </div>
              <h2 className="font-display text-[32px] lg:text-[40px] leading-[0.9] mt-3">
                {friendlyTitle}
              </h2>
              <button onClick={fillDemo} className="mt-3 inline-flex items-center gap-1.5 text-[12px] font-[600] underline underline-offset-4 text-[var(--terracotta)] hover:text-[var(--brown)]">
                Probar simulación → llena datos de prueba
              </button>
              <p className="mt-3 text-[14px] leading-6 text-[var(--stone)] max-w-[42ch]">
                {current === 1 && "Elige lo que necesitas, nosotros nos encargamos del resto. Puedes combinar varios."}
                {current === 2 && "Elige a tu persona favorita o deja que te recomendemos la mejor disponibilidad."}
                {current === 3 && "Cuéntanos qué día te viene bien. Si no ves tu día, escríbenos por WhatsApp."}
                {current === 4 && "Te mostramos solo los huecos reales según lo que elegiste."}
                {current === 5 && "¿Es tu primera vez? ¿Tienes una idea en mente? Todo ayuda."}
                {current === 6 && "Dale una última revisada. Puedes editar cualquier parte."}
              </p>
            </div>
            <div className="lg:col-span-5 bg-[var(--blush)] p-6 lg:p-8 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-[var(--line)]">
              <div className="flex items-center justify-between">
                <span className="text-[11px] tracking-[0.12em] uppercase font-[700] text-[var(--brown)]">Tu selección</span>
                <span className="text-[11px] tracking-[0.12em] uppercase text-[var(--stone)]">Paso {current} de 6</span>
              </div>
              {draft.serviceIds.length > 0 ? (
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 bg-white border border-[var(--line)] text-[12px] font-[600]">{draft.serviceIds.length} servicio{draft.serviceIds.length > 1 ? "s" : ""}</span>
                  <span className="px-3 py-1.5 bg-[var(--brown)] text-white text-[12px] font-[600]">{totalDuration} min</span>
                  <span className="px-3 py-1.5 bg-white border border-[var(--line)] text-[12px] font-[600]">desde ${totalPrice} MXN</span>
                </div>
              ) : (
                <p className="mt-3 text-[13px] leading-5 text-[var(--brown)]/70">Aún no eliges nada — empieza por lo que más te apetece hoy.</p>
              )}
              <div className="mt-4 h-1.5 bg-white/60 overflow-hidden">
                <div className="h-full bg-[var(--terracotta)] transition-all duration-500" style={{ width: `${progress}%` }} />
              </div>
              <p className="mt-2 text-[11px] text-[var(--brown)]/60">Sin llamadas. Sin complicaciones. · Te avisamos por WhatsApp</p>
            </div>
          </div>

          {/* Progress stepper - friendly pills, not corporate */}
          <div className="border-t border-[var(--line)] bg-[var(--sand)] px-4 lg:px-8 py-3">
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar" role="tablist" aria-label="Progreso">
              {steps.map((s) => (
                <button
                  key={s.id}
                  role="tab"
                  aria-selected={s.id === current}
                  onClick={() => (s.id < current ? goTo(s.id) : undefined)}
                  disabled={s.id > current}
                  className={`shrink-0 flex items-center gap-2 px-3 py-1.5 border text-[12px] font-[600] transition ${
                    s.id === current
                      ? "bg-[var(--brown)] text-white border-[var(--brown)]"
                      : s.id < current
                        ? "bg-[var(--terracotta)] text-white border-[var(--terracotta)]"
                        : "bg-white border-[var(--line)] text-[var(--stone)]"
                  } ${s.id <= current ? "cursor-pointer" : "opacity-50 cursor-not-allowed"}`}
                >
                  <span className={`w-5 h-5 grid place-items-center text-[10px] leading-none border ${s.id === current ? "bg-white text-[var(--brown)] border-white" : s.id < current ? "bg-white/20 border-white/30 text-white" : "bg-[var(--sand)] border-[var(--line)] text-[var(--stone)]"}`}>
                    {s.id < current ? "✓" : s.id}
                  </span>
                  <span className="hidden sm:inline">{s.label}</span>
                  <span className="sm:hidden">{s.label.split(" ")[0]}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Content card */}
        <div className="mt-6 bg-white border border-[var(--line)] p-6 lg:p-8">
          <div className="min-h-[420px]">
            {current === 1 && <StepServices draft={draft} setDraft={setDraft} />}
            {current === 2 && <StepSpecialist draft={draft} setDraft={setDraft} available={availableSpecialists} />}
            {current === 3 && <StepCalendar draft={draft} setDraft={setDraft} />}
            {current === 4 && <StepTime draft={draft} setDraft={setDraft} totalDuration={totalDuration} />}
            {current === 5 && <StepPersonalize draft={draft} setDraft={setDraft} />}
            {current === 6 && <StepSummary draft={draft} onEdit={goTo} totalDuration={totalDuration} totalPrice={totalPrice} />}
          </div>

          {current === 6 && (
            <div className="mt-8 bg-[var(--paper)] border border-[var(--line)] p-4 flex gap-3 items-start">
              <input
                id="privacy"
                type="checkbox"
                checked={!!draft.privacyAccepted}
                onChange={(e) => setDraft({ ...draft, privacyAccepted: e.target.checked })}
                className="mt-1 w-4 h-4 accent-[var(--terracotta)]"
              />
              <label htmlFor="privacy" className="text-[12px] leading-5 text-[var(--ink-soft)]">
                He leído el <a href="/privacidad" target="_blank" className="underline underline-offset-4 font-[600]">Aviso de Privacidad</a> y <a href="/terminos" target="_blank" className="underline underline-offset-4 font-[600]">Términos</a>. Autorizo que me contacten por WhatsApp para mi cita. <span className="text-[var(--stone)]">(en simulación se marca automático)</span>
              </label>
            </div>
          )}

          <div className="mt-8 flex items-center justify-between border-t border-[var(--line)] pt-6">
            <button
              onClick={back}
              disabled={current === 1}
              className="h-11 px-6 border border-[var(--line)] bg-[var(--sand)] text-[13px] font-[600] disabled:opacity-30 hover:bg-white transition"
            >
              ← Atrás
            </button>
            {current < 6 ? (
              <button
                onClick={next}
                disabled={!canNext}
                className="h-11 px-7 bg-[var(--terracotta)] text-white text-[13px] font-[700] disabled:opacity-40 hover:bg-[var(--terracotta-hover)] transition"
              >
                Continuar →
              </button>
            ) : (
              <button
                onClick={confirm}
                className="h-11 px-7 bg-[var(--brown)] text-white text-[13px] font-[700] hover:bg-[var(--ink)] transition"
              >
                Confirmar cita ✦ {draft.serviceIds.length === 0 ? "(simulación)" : ""}
              </button>
            )}
          </div>

          <p className="mt-4 text-center text-[12px] text-[var(--stone)]">
            Date un rato para ti · Sin pago anticipado &lt; $1,000 MXN ·{" "}
            <a href="/cancelaciones" className="underline underline-offset-4">
              Ver políticas
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

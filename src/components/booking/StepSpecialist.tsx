"use client";
import { BookingDraft } from "@/types";
import { Specialist } from "@/types";

export default function StepSpecialist({ draft, setDraft, available }: { draft: BookingDraft; setDraft: (d: BookingDraft)=>void; available: Specialist[] }) {
  return (
    <div>
      <div className="text-[11px] tracking-[0.16em] uppercase text-[var(--stone)]">Elige a tu especialista</div>
      <div className="mt-4 grid gap-4">
        {/* Sin preferencia */}
        <button
          onClick={() => setDraft({ ...draft, specialistId: null })}
          className={`text-left border p-5 flex gap-4 items-center hover:bg-[var(--sand)] transition ${draft.specialistId===null ? "border-[var(--ink)] bg-[var(--sand)]" : "border-[var(--line)] bg-white"}`}
        >
          <div className={`w-12 h-12 rounded-full grid place-items-center border shrink-0 ${draft.specialistId===null ? "bg-[var(--ink)] text-white border-[var(--ink)]" : "bg-[var(--sand)] border-[var(--line)]"}`}>◎</div>
          <div className="flex-1">
            <div className="font-[500] text-[15px]">Sin preferencia</div>
            <div className="text-[13px] leading-5 text-[var(--stone)]">Te asignamos la mejor disponibilidad ese día. Ideal si buscas rapidez.</div>
          </div>
          <div className={`w-5 h-5 rounded-full border grid place-items-center ${draft.specialistId===null ? "border-[var(--ink)]" : "border-[var(--line-strong)]"}`}>
            {draft.specialistId===null && <span className="w-2.5 h-2.5 rounded-full bg-[var(--ink)]" />}
          </div>
        </button>

        {/* Specialists editorial */}
        <div className="grid md:grid-cols-2 gap-4">
          {available.map((s) => {
            const selected = draft.specialistId===s.id;
            return (
              <button
                key={s.id}
                onClick={() => setDraft({ ...draft, specialistId: s.id })}
                className={`text-left border overflow-hidden flex gap-4 p-0 hover:bg-[var(--sand)] transition ${selected ? "border-[var(--ink)] bg-[var(--sand)]" : "border-[var(--line)] bg-white"}`}
              >
                <div className="w-[112px] h-[140px] shrink-0 bg-[var(--sand-deep)] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={s.image} alt={s.name} className="w-full h-full object-cover" />
                </div>
                <div className="py-4 pr-4 flex-1 min-w-0 flex flex-col">
                  <div className="font-display text-[18px] leading-none">{s.name}</div>
                  <div className="text-[11px] tracking-[0.08em] uppercase text-[var(--stone)] mt-1">{s.role}</div>
                  <div className="mt-2 text-[13px] leading-5 text-[var(--stone)] line-clamp-2">{s.bio}</div>
                  <div className="mt-auto flex items-center gap-2 text-[11px] tracking-[0.08em] uppercase text-[var(--stone-light)]">
                    <span className={`w-2 h-2 rounded-full ${selected ? "bg-[var(--ink)]" : "bg-[var(--line-strong)]"}`} />
                    {selected ? "Seleccionado" : "Ver disponibilidad"}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
        {available.length===0 && <div className="text-sm text-[var(--stone)]">Ningún especialista disponible para esa combinación.</div>}
      </div>
    </div>
  );
}

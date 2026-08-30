"use client";
import { BookingDraft, Specialist } from "@/types";

export default function StepSpecialist({ draft, setDraft, available }: { draft: BookingDraft; setDraft: (d: BookingDraft) => void; available: Specialist[] }) {
  const personalNote: Record<string, string> = {
    "sofia-reyes": "No cree que todos necesitemos el mismo corte.",
    "marco-duran": "Mezcla color como si fuera para él mismo.",
    "ines-calvo": "Peinados que aguantan calor, fotos y baile.",
    "yuki-tanaka": "Manos lentas, productos silenciosos.",
    "carla-mora": "Uñas que duran, aunque laves trastes diario.",
  };

  return (
    <div>
      <p className="text-[13px] leading-5 text-[var(--stone)]">Tú eliges. Si no tienes preferencia, te asignamos el mejor hueco.</p>

      <div className="mt-4 grid gap-3">
        <button
          onClick={() => setDraft({ ...draft, specialistId: null })}
          className={`text-left border p-4 flex gap-4 items-center transition ${draft.specialistId === null ? "bg-[var(--brown)] text-white border-[var(--brown)]" : "bg-[var(--sand)] border-[var(--line)] hover:bg-white"}`}
        >
          <div className={`w-12 h-12 grid place-items-center border shrink-0 text-[16px] ${draft.specialistId === null ? "bg-white text-[var(--brown)] border-white" : "bg-white border-[var(--line)]"}`}>◎</div>
          <div className="flex-1">
            <div className="font-[700] text-[15px]">Sin preferencia</div>
            <div className={`text-[13px] leading-5 ${draft.specialistId === null ? "text-white/80" : "text-[var(--stone)]"}`}>La opción más rápida — te asignamos quien tenga hueco.</div>
          </div>
          <span className={`w-6 h-6 grid place-items-center border text-xs ${draft.specialistId === null ? "bg-white text-[var(--brown)] border-white" : "bg-white border-[var(--line)]"}`}>{draft.specialistId === null ? "✓" : ""}</span>
        </button>

        <div className="grid md:grid-cols-2 gap-3">
          {available.map((s) => {
            const selected = draft.specialistId === s.id;
            return (
              <button
                key={s.id}
                onClick={() => setDraft({ ...draft, specialistId: s.id })}
                className={`text-left border overflow-hidden flex gap-3 p-3 transition ${selected ? "bg-[var(--blush)] border-[var(--terracotta)]" : "bg-white border-[var(--line)] hover:border-[var(--terracotta)]/50"}`}
              >
                <div className="w-[96px] h-[112px] shrink-0 overflow-hidden border border-[var(--line)] bg-[var(--sand)]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={s.image} alt={s.name} className="w-full h-full object-cover" />
                </div>
                <div className="py-1 pr-1 flex-1 min-w-0 flex flex-col">
                  <div className="font-display text-[17px] leading-none">{s.name}</div>
                  <div className="text-[10px] tracking-[0.08em] uppercase font-[700] text-[var(--terracotta)] mt-1">{s.role.split("·")[0]}</div>
                  <div className="mt-2 text-[12px] leading-4 italic text-[var(--ink-soft)]">“{personalNote[s.id] ?? s.bio}”</div>
                  <div className="mt-auto flex items-center gap-2">
                    <span className={`px-2 py-0.5 text-[10px] font-[700] tracking-[0.06em] uppercase border ${selected ? "bg-[var(--terracotta)] text-white border-[var(--terracotta)]" : "bg-white border-[var(--line)] text-[var(--stone)]"}`}>
                      {selected ? "Elegida" : "Elegir"}
                    </span>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

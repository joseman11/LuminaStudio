"use client";
import { useMemo } from "react";
import { BookingDraft } from "@/types";
import { getSlotsForDate } from "@/lib/availability";

export default function StepTime({ draft, setDraft, totalDuration }: { draft: BookingDraft; setDraft:(d:BookingDraft)=>void; totalDuration:number }) {
  const slots = useMemo(()=>{
    if(!draft.date) return [];
    return getSlotsForDate(draft.date, draft.specialistId, totalDuration);
  }, [draft.date, draft.specialistId, totalDuration]);

  if(!draft.date) return <div className="text-sm text-[var(--stone)]">Primero elige un día.</div>;

  return (
    <div>
      <div className="flex items-baseline justify-between flex-wrap gap-3">
        <p className="text-[13px] text-[var(--ink-soft)]">
          Para el <span className="font-[700] capitalize">{new Date(draft.date+"T12:00:00").toLocaleDateString("es-MX",{ weekday:"long", day:"numeric", month:"long" })}</span> · {totalDuration} min
        </p>
        <span className="px-2.5 py-1 bg-[var(--blush)] border border-[var(--line)] text-[11px] font-[700] tracking-[0.06em] uppercase text-[var(--terracotta)]">{slots.length} huecos</span>
      </div>

      <div className="mt-4 grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-2.5">
        {slots.map(time=>{
          const selected = draft.time===time;
          return (
            <button
              key={time}
              onClick={()=>setDraft({...draft, time})}
              className={`h-[52px] border text-[15px] font-[700] tracking-[-0.01em] transition
                ${selected ? "bg-[var(--terracotta)] text-white border-[var(--terracotta)] scale-[0.98]" : "bg-white border-[var(--line)] hover:border-[var(--terracotta)] hover:bg-[var(--blush)]"}`}
            >
              {time}
            </button>
          );
        })}
      </div>

      <div className="mt-6 bg-[var(--sand)] border border-[var(--line)] p-4 flex gap-3 items-start">
        <span className="hidden sm:grid w-8 h-8 place-items-center bg-white border border-[var(--line)] text-[var(--terracotta)] font-[700]">✦</span>
        <p className="text-[13px] leading-5 text-[var(--ink-soft)]">
          Si es tu primera vez, llega 5 min antes para conocernos. ¿Necesitas otro horario? Déjanos una nota y lo buscamos.
        </p>
      </div>

      {draft.time && (
        <div className="mt-4 inline-flex items-center gap-2 bg-[var(--brown)] text-white px-4 py-2 text-[13px] font-[600]">
          Has elegido las <span className="font-[800]">{draft.time}</span> · {totalDuration} min
        </div>
      )}
    </div>
  );
}

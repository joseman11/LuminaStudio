"use client";
import { useMemo } from "react";
import { BookingDraft } from "@/types";
import { getSlotsForDate } from "@/lib/availability";

export default function StepTime({ draft, setDraft, totalDuration }: { draft: BookingDraft; setDraft:(d:BookingDraft)=>void; totalDuration:number }) {
  const slots = useMemo(()=>{
    if(!draft.date) return [];
    return getSlotsForDate(draft.date, draft.specialistId, totalDuration);
  }, [draft.date, draft.specialistId, totalDuration]);

  if(!draft.date){
    return <div className="text-sm text-[var(--stone)]">Selecciona primero una fecha.</div>;
  }

  return (
    <div>
      <div className="flex items-baseline justify-between flex-wrap gap-3">
        <div className="text-[11px] tracking-[0.16em] uppercase text-[var(--stone)]">Elige horario</div>
        <div className="text-[13px] text-[var(--stone)]">
          {new Date(draft.date+"T12:00:00").toLocaleDateString("es-ES",{ weekday:"long", day:"numeric", month:"long" })} · {totalDuration} min
        </div>
      </div>

      <div className="mt-4 grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-3">
        {slots.map(time=>{
          const selected = draft.time===time;
          return (
            <button
              key={time}
              onClick={()=>setDraft({...draft, time})}
              className={`h-[48px] border text-[15px] font-[500] tracking-[0.02em] transition
                ${selected ? "bg-[var(--ink)] text-white border-[var(--ink)]" : "bg-white border-[var(--line)] hover:border-[var(--ink)] hover:bg-[var(--sand)]"}`}
            >
              {time}
            </button>
          );
        })}
      </div>

      <div className="mt-6 border border-[var(--line)] bg-[var(--sand)] p-4 flex items-center gap-4">
        <div className="hidden sm:block w-10 h-10 rounded-full bg-white border border-[var(--line)] grid place-items-center text-[var(--stone)]">◷</div>
        <div className="text-[13px] leading-5 text-[var(--stone)]">
          Llega 5 minutos antes si es tu primera visita. Si necesitas cambiar la hora después, podrás hacerlo desde “Mis citas”.
        </div>
      </div>

      {draft.time && (
        <div className="mt-4 text-[13px] text-[var(--ink)]">
          Has elegido las <span className="font-[600]">{draft.time}</span> · Duración estimada <span className="font-[600]">{totalDuration} min</span>
        </div>
      )}
    </div>
  );
}

"use client";
import { useState, useMemo } from "react";
import { BookingDraft } from "@/types";
import { getDayAvailability } from "@/lib/availability";

function startOfMonth(d: Date) { return new Date(d.getFullYear(), d.getMonth(), 1); }
function addMonths(d: Date, n: number) { return new Date(d.getFullYear(), d.getMonth()+n, 1); }
function daysInMonth(d: Date) { return new Date(d.getFullYear(), d.getMonth()+1, 0).getDate(); }

export default function StepCalendar({ draft, setDraft }: { draft: BookingDraft; setDraft: (d: BookingDraft)=>void }) {
  const [view, setView] = useState(() => {
    const now = new Date();
    return startOfMonth(now);
  });

  const today = useMemo(()=>{ const t=new Date(); t.setHours(0,0,0,0); return t;},[]);

  const cells = useMemo(()=>{
    const first = startOfMonth(view);
    const startDay = (first.getDay()+6)%7; // Mon=0
    const total = daysInMonth(view);
    const arr: (Date|null)[] = [];
    for(let i=0;i<startDay;i++) arr.push(null);
    for(let d=1; d<=total; d++) arr.push(new Date(view.getFullYear(), view.getMonth(), d));
    while(arr.length %7 !==0) arr.push(null);
    return arr;
  }, [view]);

  function isSelected(d: Date){
    if(!draft.date) return false;
    const iso = d.toISOString().slice(0,10);
    return iso===draft.date;
  }

  return (
    <div className="grid lg:grid-cols-12 gap-8">
      <div className="lg:col-span-7">
        <div className="flex items-center justify-between">
          <div className="font-display text-[22px] capitalize">
            {view.toLocaleDateString("es-ES", { month:"long", year:"numeric" })}
          </div>
          <div className="flex gap-2">
            <button onClick={()=>setView(addMonths(view,-1))} className="w-9 h-9 border border-[var(--line)] grid place-items-center hover:bg-[var(--sand)]">‹</button>
            <button onClick={()=>setView(addMonths(view,1))} className="w-9 h-9 border border-[var(--line)] grid place-items-center hover:bg-[var(--sand)]">›</button>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-7 gap-px bg-[var(--line)] border border-[var(--line)]">
          {["Lun","Mar","Mié","Jue","Vie","Sáb","Dom"].map(d=>(
            <div key={d} className="bg-[var(--sand)] text-center py-2 text-[11px] tracking-[0.12em] uppercase text-[var(--stone)]">{d}</div>
          ))}
          {cells.map((d,i)=>{
            if(!d) return <div key={i} className="bg-white h-[48px] lg:h-[56px]" />;
            const isPast = d < today;
            const { available } = getDayAvailability(d);
            const disabled = isPast || !available;
            const sel = isSelected(d);
            return (
              <button
                key={i}
                disabled={disabled}
                onClick={()=> setDraft({ ...draft, date: d.toISOString().slice(0,10), time: null })}
                className={`h-[48px] lg:h-[56px] bg-white grid place-items-center relative text-sm hover:bg-[var(--sand)] disabled:opacity-30 disabled:cursor-not-allowed
                  ${sel ? "!bg-[var(--ink)] !text-white" : ""}
                  ${!disabled && !sel ? "hover:border hover:border-[var(--ink)]" : ""}
                `}
              >
                <span className={sel ? "font-[500]" : ""}>{d.getDate()}</span>
                {!disabled && !sel && <span className="absolute bottom-1 w-1 h-1 rounded-full bg-[var(--success)]" />}
              </button>
            );
          })}
        </div>
        <div className="mt-3 flex gap-4 text-[12px] text-[var(--stone)]">
          <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-[var(--success)]"/> Disponible</span>
          <span className="flex items-center gap-1.5"><span className="w-3 h-px bg-[var(--line-strong)]"/> No disponible</span>
        </div>
      </div>

      <div className="lg:col-span-5">
        <div className="border border-[var(--line)] bg-[var(--sand)] p-6">
          <div className="text-[11px] tracking-[0.14em] uppercase text-[var(--stone)]">Tu selección</div>
          {draft.date ? (
            <>
              <div className="font-display text-[22px] mt-2 capitalize">
                {new Date(draft.date+"T12:00:00").toLocaleDateString("es-ES", { weekday:"long", day:"numeric", month:"long" })}
              </div>
              <div className="mt-2 text-[13px] leading-5 text-[var(--stone)]">
                Horario de ese día se mostrará en el siguiente paso según el profesional y la duración.
              </div>
              <div className="mt-4 inline-flex items-center gap-2 text-[12px] tracking-[0.08em] uppercase border border-[var(--line-strong)] px-3 py-1.5 bg-white">
                <span className="w-2 h-2 rounded-full bg-[var(--success)]"/> Hay huecos
              </div>
            </>
          ) : (
            <div className="mt-3 text-[14px] leading-6 text-[var(--stone)]">Elige un día en el calendario. Los lunes y domingos cerramos.</div>
          )}
          <div className="mt-6 pt-4 border-t border-[var(--line)] text-[12px] leading-5 text-[var(--stone)]">
            Si necesitas un hueco muy concreto, déjanos una nota en el paso de detalles y haremos lo posible.
          </div>
        </div>
      </div>
    </div>
  );
}

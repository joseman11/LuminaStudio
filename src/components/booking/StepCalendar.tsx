"use client";
import { useState, useMemo, useEffect } from "react";
import { BookingDraft } from "@/types";
import { getDayAvailability } from "@/lib/availability";

function startOfMonth(d: Date) { return new Date(d.getFullYear(), d.getMonth(), 1); }
function addMonths(d: Date, n: number) { return new Date(d.getFullYear(), d.getMonth()+n, 1); }
function daysInMonth(d: Date) { return new Date(d.getFullYear(), d.getMonth()+1, 0).getDate(); }

export default function StepCalendar({ draft, setDraft }: { draft: BookingDraft; setDraft: (d: BookingDraft)=>void }) {
  const [view, setView] = useState<Date | null>(null);
  const [today, setToday] = useState<Date | null>(null);
  useEffect(() => {
    setView(startOfMonth(new Date()));
    const t = new Date(); t.setHours(0,0,0,0); setToday(t);
  }, []);
  const cells = useMemo(()=>{
    if (!view) return [];
    const first = startOfMonth(view);
    const startDay = (first.getDay()+6)%7;
    const total = daysInMonth(view);
    const arr: (Date|null)[] = [];
    for(let i=0;i<startDay;i++) arr.push(null);
    for(let d=1; d<=total; d++) arr.push(new Date(view.getFullYear(), view.getMonth(), d));
    while(arr.length %7 !==0) arr.push(null);
    return arr;
  }, [view]);

  function isSelected(d: Date){
    if(!draft.date) return false;
    return d.toISOString().slice(0,10)===draft.date;
  }

  if (!view || !today) {
    return (
      <div className="grid lg:grid-cols-12 gap-6">
        <div className="lg:col-span-7 h-[320px] bg-white border border-[var(--line)] animate-pulse" />
        <div className="lg:col-span-5 h-[200px] bg-[var(--blush)] border border-[var(--line)] animate-pulse" />
      </div>
    );
  }

  return (
    <div className="grid lg:grid-cols-12 gap-6" suppressHydrationWarning>
      <div className="lg:col-span-7">
        <div className="flex items-center justify-between">
          <div className="font-display text-[22px] capitalize" suppressHydrationWarning>{view.toLocaleDateString("es-MX", { month:"long", year:"numeric" })}</div>
          <div className="flex gap-2">
            <button onClick={()=>setView(addMonths(view,-1))} className="w-9 h-9 border border-[var(--line)] bg-white hover:bg-[var(--sand)] grid place-items-center">‹</button>
            <button onClick={()=>setView(addMonths(view,1))} className="w-9 h-9 border border-[var(--line)] bg-[var(--brown)] text-white grid place-items-center">›</button>
          </div>
        </div>

        <div className="mt-4 border border-[var(--line)] overflow-hidden">
          <div className="grid grid-cols-7 gap-px bg-[var(--line)]">
            {["Lun","Mar","Mié","Jue","Vie","Sáb","Dom"].map(d=>(
              <div key={d} className="bg-[var(--sand)] text-center py-2 text-[11px] font-[700] tracking-[0.08em] uppercase text-[var(--ink-soft)]">{d}</div>
            ))}
            {cells.map((d,i)=>{
              if(!d) return <div key={i} className="bg-white h-[48px] lg:h-[54px]" />;
              const isPast = d < today;
              const { available } = getDayAvailability(d);
              const disabled = isPast || !available;
              const sel = isSelected(d);
              return (
                <button
                  key={i}
                  disabled={disabled}
                  onClick={()=> setDraft({ ...draft, date: d.toISOString().slice(0,10), time: null })}
                  className={`h-[48px] lg:h-[54px] grid place-items-center relative text-[14px] font-[500] border border-transparent
                    ${sel ? "bg-[var(--terracotta)] text-white border-[var(--terracotta)]" : "bg-white hover:bg-[var(--blush)]"}
                    disabled:opacity-30 disabled:cursor-not-allowed`}
                >
                  {d.getDate()}
                  {!disabled && !sel && <span className="absolute bottom-1 w-1 h-1 rounded-full bg-[var(--terracotta)]" />}
                </button>
              );
            })}
          </div>
        </div>
        <div className="mt-3 flex gap-4 text-[12px]">
          <span className="flex items-center gap-1.5 text-[var(--ink-soft)]"><span className="w-2 h-2 rounded-full bg-[var(--terracotta)]"/> Disponible</span>
          <span className="flex items-center gap-1.5 text-[var(--stone)]"><span className="w-3 h-px bg-[var(--line)]"/> Cerrado</span>
        </div>
      </div>

      <div className="lg:col-span-5">
        <div className="bg-[var(--blush)] border border-[var(--line)] p-6">
          <div className="text-[11px] tracking-[0.1em] uppercase font-[700] text-[var(--terracotta)]">Tu día</div>
          {draft.date ? (
            <>
              <div className="font-display text-[22px] mt-2 capitalize leading-none">
                {new Date(draft.date+"T12:00:00").toLocaleDateString("es-MX", { weekday:"long", day:"numeric", month:"long" })}
              </div>
              <p className="mt-2 text-[13px] leading-5 text-[var(--ink-soft)]">Perfecto — en el siguiente paso te mostramos los huecos reales para ese día.</p>
              <div className="mt-4 inline-flex items-center gap-2 bg-[var(--terracotta)] text-white px-3 py-1.5 text-[12px] font-[700]">Hay huecos ✦</div>
            </>
          ) : (
            <p className="mt-3 text-[14px] leading-6 text-[var(--ink-soft)]">Toca un día. Cerramos domingos y lunes para descansar.</p>
          )}
          <div className="mt-6 pt-4 border-t border-[var(--brown)]/10 text-[12px] leading-5 text-[var(--ink-soft)]">
            ¿Necesitas un hueco muy puntual? Déjanos una notita más adelante.
          </div>
        </div>
      </div>
    </div>
  );
}

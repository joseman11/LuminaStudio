"use client";
import { useState } from "react";
import { specialists } from "@/data/specialists";

export default function Team({ onReserve }: { onReserve:(id:string)=>void }){
  const [active, setActive] = useState(specialists[0].id);
  const person = specialists.find(s=>s.id===active)!;

  return (
    <section id="equipo" className="mx-auto max-w-[1280px] px-6 lg:px-8 py-12 lg:py-16">
      <div className="flex items-baseline justify-between gap-4">
        <h2 className="font-display text-[36px] lg:text-[44px] leading-none">Nuestro equipo</h2>
        <span className="hidden sm:block text-[11px] tracking-[0.14em] uppercase text-[var(--stone)]">5 especialistas · agenda propia</span>
      </div>

      {/* Editorial: large feature + list */}
      <div className="mt-8 grid lg:grid-cols-12 gap-6">
        <div className="lg:col-span-7">
          <div className="relative aspect-[4/3] lg:aspect-[5/4] overflow-hidden bg-[var(--sand)] border border-[var(--line)]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={person.image} alt={person.name} className="w-full h-full object-cover" />
            <div className="absolute bottom-0 left-0 bg-white border-t border-r border-[var(--line)] p-5 max-w-[85%]">
              <div className="font-display text-[22px] leading-none">{person.name}</div>
              <div className="text-[11px] tracking-[0.08em] uppercase text-[var(--stone)] mt-1">{person.role}</div>
            </div>
          </div>
          <div className="mt-4 border border-[var(--line)] bg-[var(--sand)] p-6">
            <div className="text-[11px] tracking-[0.12em] uppercase text-[var(--stone)]">{person.experience}</div>
            <p className="mt-2 text-[14px] leading-6 text-[var(--ink-soft)]">{person.longBio}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {person.specialties.map(s=> <span key={s} className="text-[11px] tracking-[0.08em] uppercase border border-[var(--line)] bg-white px-2.5 py-1">{s}</span>)}
            </div>
            <button onClick={()=>onReserve(person.id)} className="mt-6 h-10 px-6 bg-[var(--ink)] text-white text-[11px] tracking-[0.12em] uppercase">Reservar con {person.name.split(" ")[0]}</button>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="border border-[var(--line)] bg-white divide-y divide-[var(--line)]">
            {specialists.map(s=>{
              const isActive = s.id===active;
              return (
                <button key={s.id} onClick={()=>setActive(s.id)} className={`w-full text-left flex gap-4 p-4 items-center hover:bg-[var(--sand)]/50 transition ${isActive ? "bg-[var(--sand)]" : ""}`}>
                  <div className="w-14 h-14 rounded-full overflow-hidden border border-[var(--line)] shrink-0">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={s.image} alt={s.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-[14px] font-[500] leading-none">{s.name}</div>
                    <div className="text-[11px] tracking-[0.06em] uppercase text-[var(--stone)] truncate">{s.role}</div>
                    <div className="text-[12px] text-[var(--stone)] line-clamp-1 mt-1 hidden sm:block">{s.bio}</div>
                  </div>
                  <span className={`hidden sm:grid w-7 h-7 place-items-center border text-xs ${isActive ? "bg-[var(--ink)] text-white border-[var(--ink)]" : "border-[var(--line)]"}`}>→</span>
                </button>
              );
            })}
          </div>
          <div className="mt-4 p-4 border border-dashed border-[var(--line-strong)] text-[12px] leading-5 text-[var(--stone)] bg-[var(--paper)]">
            ¿Prefieres no elegir? En la reserva puedes marcar “Sin preferencia” y te mostramos la primera disponibilidad.
          </div>
        </div>
      </div>
    </section>
  );
}

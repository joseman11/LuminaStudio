"use client";
import { useState } from "react";
import { specialists } from "@/data/specialists";

const humanNote: Record<string, string> = {
  "sofia-reyes": "No cree que todos necesitemos el mismo corte. Corta pensando en cómo te peinas tú en casa.",
  "marco-duran": "Formula cada color como si fuera para él. Obsesionado con que no se vea “teñido”.",
  "ines-calvo": "Prueba dos caminos, fotografía, y deciden juntas. Nada acartonado.",
  "yuki-tanaka": "Manos lentas, productos silenciosos. Su facial es el más pedido los viernes.",
  "carla-mora": "Trabaja en seco, sin torno agresivo. Sus uñas duran semanas de verdad.",
};

export default function Team({ onReserve }: { onReserve:(id:string)=>void }){
  const [active, setActive] = useState(specialists[0].id);
  const person = specialists.find(s=>s.id===active)!;

  return (
    <section suppressHydrationWarning id="equipo" className="bg-[var(--sand)] border-y border-[var(--line)]">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8 py-10 lg:py-14">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
          <div>
            <div className="text-[11px] tracking-[0.12em] uppercase font-[700] text-[var(--terracotta)]">Conócenos</div>
            <h2 className="font-display text-[36px] lg:text-[44px] leading-[0.9] mt-2">Gente real,<br/>manos expertas.</h2>
          </div>
          <p className="text-[13px] leading-5 text-[var(--stone)] max-w-[36ch]">5 personas, 5 estilos. Elige con quien te sientas más cómoda o déjanos recomendarte.</p>
        </div>

        <div className="mt-8 grid lg:grid-cols-12 gap-6">
          <div className="lg:col-span-7">
            <div className="bg-white border border-[var(--line)] overflow-hidden">
              <div className="grid sm:grid-cols-12">
                <div className="sm:col-span-5 aspect-[4/5] sm:aspect-[3/4] overflow-hidden bg-[var(--blush)]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={person.image} alt={person.name} className="w-full h-full object-cover" />
                </div>
                <div className="sm:col-span-7 p-6 flex flex-col">
                  <div className="text-[11px] tracking-[0.1em] uppercase font-[700] text-[var(--terracotta)]">{person.role}</div>
                  <div className="font-display text-[26px] leading-none mt-1">{person.name}</div>
                  <div className="mt-3 text-[13px] leading-5 italic bg-[var(--sand)] border border-[var(--line)] p-3">“{humanNote[person.id]}”</div>
                  <p className="mt-3 text-[13px] leading-6 text-[var(--ink-soft)]">{person.longBio}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {person.specialties.map(s=> <span key={s} className="px-2.5 py-1 bg-[var(--paper)] border border-[var(--line)] text-[11px] font-[600]">{s}</span>)}
                  </div>
                  <button onClick={()=>onReserve(person.id)} className="mt-6 h-10 px-5 bg-[var(--terracotta)] text-white text-[12px] font-[700] hover:bg-[var(--terracotta-hover)] self-start">
                    Reservar con {person.name.split(" ")[0]} →
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="grid grid-cols-1 gap-2">
              {specialists.map(s=>{
                const isActive = s.id===active;
                return (
                  <button key={s.id} onClick={()=>setActive(s.id)} className={`text-left flex gap-3 p-3 border items-center transition ${isActive ? "bg-[var(--brown)] text-white border-[var(--brown)]" : "bg-white border-[var(--line)] hover:bg-[var(--paper)]"}`}>
                    <div className="w-12 h-12 overflow-hidden border border-[var(--line)] shrink-0">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={s.image} alt={s.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-[14px] font-[700] leading-none">{s.name}</div>
                      <div className={`text-[11px] truncate ${isActive ? "text-white/70" : "text-[var(--stone)]"}`}>{s.role}</div>
                    </div>
                    <span className={`w-7 h-7 grid place-items-center border text-xs shrink-0 ${isActive ? "bg-white text-[var(--brown)] border-white" : "bg-[var(--sand)] border-[var(--line)]"}`}>→</span>
                  </button>
                );
              })}
            </div>
            <div className="mt-3 bg-[var(--blush)] border border-[var(--line)] p-4 text-[12px] leading-5 text-[var(--ink-soft)]">
              ¿Dudas? En la reserva puedes elegir <span className="font-[700]">Sin preferencia</span> y te mostramos el primer hueco disponible.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

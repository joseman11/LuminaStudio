"use client";
import { useState } from "react";
import { services, categories } from "@/data/services";

export default function ServicesExplorer({ onReserve }: { onReserve: (ids: string[])=>void }){
  const [cat, setCat]=useState<string>("cabello");
  const filtered = services.filter(s=>s.category===cat);
  const active = categories.find(c=>c.id===cat)!;

  return (
    <section id="servicios" className="border-t border-[var(--line)] bg-[var(--sand)]">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8 py-12 lg:py-16">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div>
            <div className="text-[11px] tracking-[0.18em] uppercase text-[var(--stone)]">Servicios</div>
            <h2 className="font-display text-[36px] lg:text-[44px] leading-none mt-2">Lo que hacemos, <span className="font-display-italic">bien hecho.</span></h2>
          </div>
          <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
            {categories.map(c=>(
              <button key={c.id} onClick={()=>setCat(c.id)} className={`shrink-0 h-9 px-4 border text-[12px] tracking-[0.1em] uppercase ${cat===c.id ? "bg-[var(--ink)] text-white border-[var(--ink)]" : "bg-white border-[var(--line)] hover:bg-[var(--paper)]"}`}>
                {c.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4">
            <div className="bg-white border border-[var(--line)] p-6 lg:sticky lg:top-[80px]">
              <div className="text-[11px] tracking-[0.14em] uppercase text-[var(--stone)]">{active.note}</div>
              <div className="font-display text-[28px] mt-1">{active.label}</div>
              <p className="mt-3 text-[13px] leading-6 text-[var(--stone)]">
                {cat==="cabello" && "Cortes que crecen bien. Sin capas innecesarias, sin peso donde no toca."}
                {cat==="color" && "Color medido. Buscamos que a las tres semanas siga pareciendo tuyo."}
                {cat==="unas" && "Manicura seca, respeto por la cutícula y esmaltes que duran de verdad."}
                {cat==="skincare" && "Piel tranquila. Productos botánicos, masaje lento, sin perfume agresivo."}
                {cat==="styling" && "Peinados que aguantan fotos, viento y pista de baile."}
              </p>
              <div className="mt-6 h-px bg-[var(--line)]" />
              <div className="mt-4 text-[12px] text-[var(--stone)]">Precios “desde” según largo y técnica. Diagnóstico sin compromiso.</div>
            </div>
          </div>

          <div className="lg:col-span-8">
            {/* Non-uniform layout: first item large, rest list */}
            <div className="bg-white border border-[var(--line)]">
              {filtered.map((s,i)=>(
                <div key={s.id} className={`grid md:grid-cols-12 gap-4 p-6 items-center ${i!==0 ? "border-t border-[var(--line)]" : ""} ${i===0 ? "bg-[var(--paper)]" : ""}`}>
                  <div className="md:col-span-7">
                    <div className="flex items-baseline gap-3">
                      <span className="font-mono text-[11px] tracking-[0.12em] text-[var(--stone-light)]">0{i+1}</span>
                      <span className={`font-display ${i===0 ? "text-[24px]" : "text-[20px]"} leading-none`}>{s.name}</span>
                    </div>
                    <div className="mt-2 text-[13px] leading-6 text-[var(--stone)]">{s.description}</div>
                    <div className="mt-1 text-[12px] text-[var(--stone-light)] hidden md:block">{s.detail}</div>
                  </div>
                  <div className="md:col-span-5 flex md:flex-col lg:flex-row md:items-end lg:items-center justify-between md:justify-end gap-3">
                    <div className="text-[13px]">
                      <span className="font-[500]">{s.duration} min</span>
                      <span className="text-[var(--stone)]"> · desde {s.priceFrom} €</span>
                    </div>
                    <button onClick={()=>onReserve([s.id])} className="h-9 px-4 border border-[var(--ink)] text-[11px] tracking-[0.12em] uppercase hover:bg-[var(--ink)] hover:text-white transition shrink-0">
                      Reservar
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

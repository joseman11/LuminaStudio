"use client";
import { useState } from "react";
import { services, categories } from "@/data/services";

const catImage: Record<string, string> = {
  cabello: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&h=800&fit=crop",
  color: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=800&h=800&fit=crop",
  unas: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=800&h=800&fit=crop",
  skincare: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&h=800&fit=crop",
  styling: "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=800&h=800&fit=crop",
};

export default function ServicesExplorer({ onReserve }: { onReserve: (ids: string[])=>void }){
  const [cat, setCat]=useState<string>("cabello");
  const filtered = services.filter(s=>s.category===cat);
  const active = categories.find(c=>c.id===cat)!;

  return (
    <section suppressHydrationWarning id="servicios" className="bg-[var(--paper-2)] border-y border-[var(--line)]">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8 py-10 lg:py-14">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-[11px] tracking-[0.12em] uppercase font-[700] text-[var(--terracotta)]">
              <span className="w-6 h-[2px] bg-[var(--terracotta)]" /> Servicios
            </div>
            <h2 className="font-display text-[36px] lg:text-[48px] leading-[0.9] mt-3">Lo que hacemos,<br/><span className="font-display-italic text-[var(--terracotta)]">bien hecho.</span></h2>
            <p className="mt-3 text-[13px] leading-5 text-[var(--stone)] max-w-[42ch]">Explora por categoría. Cada servicio con foto, duración y precio desde. Elige lo que necesitas, nosotros nos encargamos del resto.</p>
          </div>
          <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
            {categories.map(c=>(
              <button key={c.id} onClick={()=>setCat(c.id)} className={`shrink-0 h-9 px-4 border text-[13px] font-[700] ${cat===c.id ? "bg-[var(--brown)] text-white border-[var(--brown)]" : "bg-white border-[var(--line)] hover:bg-[var(--sand)]"}`}>
                {c.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 grid lg:grid-cols-12 gap-6">
          <div className="lg:col-span-4">
            <div className="bg-[var(--brown)] text-white p-6 lg:sticky lg:top-[80px] overflow-hidden relative">
              <div className="absolute -right-6 -top-6 w-20 h-20 bg-[var(--terracotta)] rotate-12 hidden lg:block" aria-hidden />
              <div className="relative">
                <div className="text-[11px] tracking-[0.12em] uppercase opacity-60">{active.note}</div>
                <div className="font-display text-[28px] mt-1">{active.label}</div>
                <div className="mt-4 aspect-[4/3] overflow-hidden border border-white/20">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={catImage[cat]} alt={active.label} className="w-full h-full object-cover" />
                </div>
                <p className="mt-4 text-[13px] leading-6 opacity-80">
                  {cat==="cabello" && "Cortes que crecen bien. Sin peso donde no toca, con el clima de Cuernavaca en mente."}
                  {cat==="color" && "Color que a las 3 semanas sigue pareciendo tuyo. Sin naranjas indeseados."}
                  {cat==="unas" && "Manicura seca, respeto total por la cutícula. Esmaltes que duran de verdad."}
                  {cat==="skincare" && "Piel tranquila. Botánicos, masaje lento, sin perfume agresivo."}
                  {cat==="styling" && "Peinados que aguantan humedad, fotos y pista."}
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="grid sm:grid-cols-2 gap-3">
              {filtered.map((s,i)=>(
                <div key={s.id} className={`bg-white border border-[var(--line)] p-5 flex flex-col ${i===0 ? "sm:col-span-2 bg-[var(--blush)]" : ""}`}>
                  <div className="flex items-start justify-between gap-3">
                    <span className="font-mono text-[11px] tracking-[0.1em] text-[var(--stone)]">0{i+1}</span>
                    <span className="text-[11px] px-2 py-1 bg-[var(--sand)] border border-[var(--line)] font-[600]">{s.duration} min · ${s.priceFrom} MXN</span>
                  </div>
                  <div className={`font-display leading-none mt-3 ${i===0 ? "text-[26px]" : "text-[20px]"}`}>{s.name}</div>
                  <div className="mt-2 text-[13px] leading-6 text-[var(--stone)]">{s.description}</div>
                  <div className="mt-1 text-[12px] text-[var(--ink-soft)]/70 hidden sm:block">{s.detail}</div>
                  <button onClick={()=>onReserve([s.id])} className={`mt-4 h-9 px-4 border text-[12px] font-[700] self-start ${i===0 ? "bg-[var(--terracotta)] text-white border-[var(--terracotta)] hover:bg-[var(--terracotta-hover)]" : "bg-white border-[var(--line)] hover:bg-[var(--sand)]"}`}>
                    Reservar →
                  </button>
                </div>
              ))}
            </div>
            <p className="mt-3 text-[11px] text-[var(--stone)] text-center">Precios “desde” según largo y técnica. Diagnóstico sin compromiso en el estudio.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

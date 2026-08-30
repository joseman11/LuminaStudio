"use client";
import { useState } from "react";
import { lookbook } from "@/data/lookbook";

export default function Lookbook(){
  const [active, setActive] = useState<string | null>(null);
  const item = lookbook.find(l=>l.id===active);

  return (
    <section id="lookbook" className="border-t border-[var(--line)] bg-white">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
          <h2 className="font-display text-[36px] leading-none">Lookbook</h2>
          <p className="text-[13px] leading-5 text-[var(--stone)] max-w-[46ch]">Trabajo real, luz natural. Sin filtros agresivos. Haz clic para ampliar.</p>
        </div>

        {/* Masonry-like asymmetric grid */}
        <div className="mt-8 grid grid-cols-12 gap-3 lg:gap-4 auto-rows-[180px] lg:auto-rows-[220px]">
          {/* manual placement to avoid uniform grid */}
          <button onClick={()=>setActive("1")} className="col-span-12 md:col-span-5 row-span-2 relative overflow-hidden border border-[var(--line)] group">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={lookbook[0].image} alt={lookbook[0].title} className="w-full h-full object-cover group-hover:scale-[1.02] transition duration-700" />
            <span className="absolute bottom-0 left-0 bg-white/90 backdrop-blur px-3 py-2 text-[11px] tracking-[0.08em] uppercase">{lookbook[0].title}</span>
          </button>

          <button onClick={()=>setActive("2")} className="col-span-12 md:col-span-7 row-span-1 relative overflow-hidden border border-[var(--line)] group">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={lookbook[1].image} alt={lookbook[1].title} className="w-full h-full object-cover group-hover:scale-[1.02] transition duration-700" />
            <span className="absolute bottom-0 left-0 bg-white/90 px-3 py-2 text-[11px] tracking-[0.08em] uppercase">{lookbook[1].title}</span>
          </button>

          <button onClick={()=>setActive("3")} className="col-span-6 md:col-span-3 row-span-1 relative overflow-hidden border border-[var(--line)] group">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={lookbook[2].image} alt={lookbook[2].title} className="w-full h-full object-cover" />
            <span className="absolute bottom-0 left-0 bg-white/90 px-2 py-1.5 text-[10px] tracking-[0.08em] uppercase">{lookbook[2].title}</span>
          </button>

          <button onClick={()=>setActive("4")} className="col-span-6 md:col-span-4 row-span-1 relative overflow-hidden border border-[var(--line)] group">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={lookbook[3].image} alt={lookbook[3].title} className="w-full h-full object-cover" />
            <span className="absolute bottom-0 left-0 bg-white/90 px-2 py-1.5 text-[10px] tracking-[0.08em] uppercase">{lookbook[3].title}</span>
          </button>

          <button onClick={()=>setActive("6")} className="col-span-12 md:col-span-7 row-span-1 relative overflow-hidden border border-[var(--line)] group">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={lookbook[5].image} alt={lookbook[5].title} className="w-full h-full object-cover" />
            <span className="absolute bottom-0 left-0 bg-white/90 px-3 py-2 text-[11px] tracking-[0.08em] uppercase">{lookbook[5].title}</span>
          </button>

          <button onClick={()=>setActive("5")} className="col-span-6 md:col-span-3 row-span-1 relative overflow-hidden border border-[var(--line)] group">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={lookbook[4].image} alt={lookbook[4].title} className="w-full h-full object-cover" />
          </button>

          <button onClick={()=>setActive("7")} className="col-span-6 md:col-span-2 row-span-1 relative overflow-hidden border border-[var(--line)] group">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={lookbook[6].image} alt={lookbook[6].title} className="w-full h-full object-cover" />
          </button>

          <button onClick={()=>setActive("8")} className="hidden md:block col-span-5 md:col-span-5 row-span-1 relative overflow-hidden border border-[var(--line)] group">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={lookbook[7].image} alt={lookbook[7].title} className="w-full h-full object-cover" />
            <span className="absolute bottom-0 left-0 bg-white/90 px-3 py-2 text-[11px] tracking-[0.08em] uppercase">{lookbook[7].title}</span>
          </button>
        </div>
      </div>

      {item && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm grid place-items-center p-4" onClick={()=>setActive(null)}>
          <div className="bg-white max-w-[900px] w-full border border-[var(--line)] overflow-hidden" onClick={e=>e.stopPropagation()}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={item.image} alt={item.title} className="w-full max-h-[70vh] object-cover" />
            <div className="p-5 flex justify-between items-center">
              <div>
                <div className="text-[11px] tracking-[0.12em] uppercase text-[var(--stone)]">{item.category}</div>
                <div className="font-display text-xl">{item.title}</div>
              </div>
              <button onClick={()=>setActive(null)} className="h-9 px-4 border border-[var(--line)] text-[11px] tracking-[0.1em] uppercase">Cerrar</button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

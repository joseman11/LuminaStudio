"use client";
import { useState } from "react";
import { lookbook } from "@/data/lookbook";

export default function Lookbook(){
  const [active, setActive] = useState<string | null>(null);
  const item = lookbook.find(l=>l.id===active);

  return (
    <section suppressHydrationWarning id="lookbook" className="bg-[var(--paper)]">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8 py-10 lg:py-14">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2">
              <span className="w-8 h-[2px] bg-[var(--terracotta)]" />
              <span className="text-[11px] tracking-[0.14em] uppercase font-[700] text-[var(--terracotta)]">Inspiración real</span>
            </div>
            <h2 className="font-display text-[36px] lg:text-[48px] leading-[0.9] mt-3">Lookbook</h2>
          </div>
          <p className="text-[13px] leading-5 text-[var(--stone)] max-w-[40ch]">Moodboard vivo — vertical, horizontal, grande, pequeño. Trabajo real con luz natural. Toca para ampliar.</p>
        </div>

        <div className="mt-8 grid grid-cols-12 gap-3 lg:gap-4 auto-rows-[160px] lg:auto-rows-[200px]">
          <button onClick={()=>setActive("1")} className="col-span-12 md:col-span-5 row-span-2 relative overflow-hidden border border-[var(--line)] group bg-white">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={lookbook[0].image} alt={lookbook[0].title} className="w-full h-full object-cover group-hover:scale-[1.02] transition duration-500" />
            <span className="absolute bottom-0 left-0 bg-[var(--brown)] text-white px-3 py-1.5 text-[11px] font-[600]">{lookbook[0].title}</span>
            <span className="absolute top-2 right-2 bg-[var(--mustard)] text-[10px] font-[700] px-2 py-1">Corte</span>
          </button>

          <button onClick={()=>setActive("2")} className="col-span-12 md:col-span-7 row-span-1 relative overflow-hidden border border-[var(--line)] group bg-[var(--blush)]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={lookbook[1].image} alt={lookbook[1].title} className="w-full h-full object-cover" />
            <span className="absolute bottom-2 left-2 bg-white px-3 py-1.5 text-[11px] font-[600] border border-[var(--line)]">{lookbook[1].title}</span>
          </button>

          <button onClick={()=>setActive("3")} className="col-span-6 md:col-span-3 row-span-1 relative overflow-hidden border border-[var(--line)] group">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={lookbook[2].image} alt={lookbook[2].title} className="w-full h-full object-cover" />
            <span className="absolute bottom-0 left-0 bg-white px-2 py-1 text-[10px] font-[600] border-t border-r border-[var(--line)]">{lookbook[2].title}</span>
          </button>

          <button onClick={()=>setActive("4")} className="col-span-6 md:col-span-4 row-span-1 relative overflow-hidden border border-[var(--line)] group bg-[var(--sand)] p-2">
            <div className="w-full h-full overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={lookbook[3].image} alt={lookbook[3].title} className="w-full h-full object-cover" />
            </div>
            <span className="absolute bottom-2 left-2 bg-[var(--terracotta)] text-white px-2 py-1 text-[10px] font-[700]">{lookbook[3].title}</span>
          </button>

          <button onClick={()=>setActive("6")} className="col-span-12 md:col-span-7 row-span-1 relative overflow-hidden border border-[var(--line)] group">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={lookbook[5].image} alt={lookbook[5].title} className="w-full h-full object-cover" />
            <span className="absolute bottom-2 left-2 bg-white px-3 py-1.5 text-[11px] font-[600] border border-[var(--line)]">{lookbook[5].title}</span>
          </button>

          <button onClick={()=>setActive("5")} className="col-span-6 md:col-span-3 row-span-1 relative overflow-hidden border border-[var(--line)] group bg-white">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={lookbook[4].image} alt={lookbook[4].title} className="w-full h-full object-cover" />
            <span className="absolute top-2 left-2 bg-[var(--blush)] border border-[var(--line)] px-2 py-1 text-[10px] font-[700]">Uñas</span>
          </button>

          <button onClick={()=>setActive("7")} className="col-span-6 md:col-span-2 row-span-1 relative overflow-hidden border border-[var(--line)] group">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={lookbook[6].image} alt={lookbook[6].title} className="w-full h-full object-cover" />
          </button>

          <button onClick={()=>setActive("8")} className="hidden md:block col-span-5 row-span-1 relative overflow-hidden border border-[var(--line)] group bg-[var(--sand)]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={lookbook[7].image} alt={lookbook[7].title} className="w-full h-full object-cover opacity-90" />
            <span className="absolute bottom-2 left-2 bg-[var(--brown)] text-white px-3 py-1.5 text-[11px] font-[600]">{lookbook[7].title}</span>
          </button>
        </div>

        <div className="mt-4 flex justify-center">
          <span className="text-[11px] tracking-[0.08em] uppercase text-[var(--stone)]">Toca cualquier imagen para verla grande ✦ Síguenos en Instagram</span>
        </div>
      </div>

      {item && (
        <div className="fixed inset-0 z-50 bg-[var(--brown)]/80 backdrop-blur-sm grid place-items-center p-4" onClick={()=>setActive(null)}>
          <div className="bg-white max-w-[900px] w-full border border-[var(--line)] overflow-hidden" onClick={e=>e.stopPropagation()}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={item.image} alt={item.title} className="w-full max-h-[70vh] object-cover" />
            <div className="p-5 flex justify-between items-center gap-4">
              <div>
                <div className="text-[11px] tracking-[0.1em] uppercase font-[700] text-[var(--terracotta)]">{item.category}</div>
                <div className="font-display text-xl leading-none mt-1">{item.title}</div>
              </div>
              <button onClick={()=>setActive(null)} className="h-9 px-4 bg-[var(--brown)] text-white text-[11px] font-[700]">Cerrar</button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

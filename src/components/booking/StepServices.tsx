"use client";
import { services, categories } from "@/data/services";
import { BookingDraft } from "@/types";
import { useState } from "react";

export default function StepServices({ draft, setDraft }: { draft: BookingDraft; setDraft: (d: BookingDraft) => void }) {
  const [filter, setFilter] = useState<string>("todos");

  const list = filter === "todos" ? services : services.filter((s) => s.category === filter);

  function toggle(id: string) {
    const exists = draft.serviceIds.includes(id);
    setDraft({
      ...draft,
      serviceIds: exists ? draft.serviceIds.filter((x) => x !== id) : [...draft.serviceIds, id],
    });
  }

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setFilter("todos")}
          className={`h-8 px-4 text-[12px] tracking-[0.1em] uppercase border ${filter==="todos" ? "bg-[var(--ink)] text-white border-[var(--ink)]" : "border-[var(--line)] hover:bg-[var(--sand)]"}`}
        >
          Todos
        </button>
        {categories.map((c) => (
          <button
            key={c.id}
            onClick={() => setFilter(c.id)}
            className={`h-8 px-4 text-[12px] tracking-[0.1em] uppercase border ${filter===c.id ? "bg-[var(--ink)] text-white border-[var(--ink)]" : "border-[var(--line)] hover:bg-[var(--sand)]"}`}
          >
            {c.label}
          </button>
        ))}
      </div>

      <div className="mt-6">
        <div className="text-[11px] tracking-[0.16em] uppercase text-[var(--stone)] mb-3">¿Qué quieres hacer hoy? Elige uno o varios</div>
        {/* Editorial list, not uniform cards */}
        <div className="divide-y divide-[var(--line)] border-y border-[var(--line)]">
          {list.map((s, idx) => {
            const selected = draft.serviceIds.includes(s.id);
            return (
              <button
                key={s.id}
                onClick={() => toggle(s.id)}
                className={`w-full text-left grid grid-cols-12 gap-4 py-5 items-center hover:bg-[var(--sand)]/50 transition text-left ${selected ? "bg-[var(--sand)]" : ""}`}
              >
                <div className="col-span-1 hidden sm:block text-[11px] tracking-[0.12em] text-[var(--stone)] font-mono">
                  {(idx + 1).toString().padStart(2, "0")}
                </div>
                <div className="col-span-8 sm:col-span-6 lg:col-span-5">
                  <div className="flex items-center gap-3">
                    <span className={`w-5 h-5 grid place-items-center border text-[11px] shrink-0 ${selected ? "bg-[var(--ink)] text-white border-[var(--ink)]" : "border-[var(--line-strong)] bg-white"}`}>
                      {selected ? "✓" : ""}
                    </span>
                    <span className="font-display text-[20px] lg:text-[22px] leading-none">{s.name}</span>
                    {s.featured && <span className="hidden sm:inline text-[10px] tracking-[0.14em] uppercase bg-[var(--accent-soft)] text-[var(--accent)] px-2 py-0.5">Recomendado</span>}
                  </div>
                  <div className="mt-1.5 text-[13px] leading-5 text-[var(--stone)] max-w-[46ch] pl-8">{s.description}</div>
                  <div className="mt-1 pl-8 text-[12px] text-[var(--stone-light)] hidden sm:block">{s.detail}</div>
                </div>
                <div className="col-span-4 sm:col-span-5 lg:col-span-6 flex flex-col sm:flex-row sm:items-center justify-end gap-2 sm:gap-6 text-right">
                  <div className="text-[12px] tracking-[0.08em] uppercase text-[var(--stone)]">
                    {s.duration} min <span className="hidden sm:inline">·</span> <span className="sm:hidden"><br /></span>desde {s.priceFrom} €
                  </div>
                  <span className={`hidden lg:inline text-[12px] tracking-[0.1em] uppercase ${selected ? "text-[var(--ink)] underline underline-offset-4" : "text-[var(--stone)]"}`}>
                    {selected ? "Seleccionado" : "Añadir"}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
        {draft.serviceIds.length>0 && (
          <div className="mt-4 text-[13px] text-[var(--stone)]">
            Has elegido <span className="text-[var(--ink)] font-[500]">{draft.serviceIds.length} servicio{draft.serviceIds.length>1?"s":""}</span> · Puedes combinar corte + color o añadir un tratamiento.
          </div>
        )}
      </div>
    </div>
  );
}

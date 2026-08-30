"use client";
import { services, categories } from "@/data/services";
import { BookingDraft } from "@/types";
import { useState } from "react";

const imageFor = (id: string) => {
  const map: Record<string, string> = {
    "corte-presicion": "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&h=600&fit=crop",
    "corte-transformacion": "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?w=600&h=600&fit=crop",
    "color-luz": "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=600&h=600&fit=crop",
    "color-total": "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&h=600&fit=crop",
    "tratamiento-nutricion": "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&h=600&fit=crop",
    "tratamiento-scalp": "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=600&h=600&fit=crop",
    "styling-evento": "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=600&h=600&fit=crop",
    "styling-novias": "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&h=600&fit=crop",
    "manicura-lumina": "https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=600&h=600&fit=crop",
    "pedicura-restaurativa": "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&h=600&fit=crop",
    "facial-essencial": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&h=600&fit=crop",
    "facial-contorno": "https://images.unsplash.com/photo-1515688594390-b649af70d282?w=600&h=600&fit=crop",
  };
  return map[id] || "https://images.unsplash.com/photo-1560869713-7d0a29430803?w=600&h=600&fit=crop";
};

export default function StepServices({ draft, setDraft }: { draft: BookingDraft; setDraft: (d: BookingDraft) => void }) {
  const [filter, setFilter] = useState<string>("todos");
  const list = filter === "todos" ? services : services.filter((s) => s.category === filter);

  function toggle(id: string) {
    const exists = draft.serviceIds.includes(id);
    setDraft({ ...draft, serviceIds: exists ? draft.serviceIds.filter((x) => x !== id) : [...draft.serviceIds, id] });
  }

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setFilter("todos")}
          className={`h-9 px-4 text-[13px] font-[600] border ${filter === "todos" ? "bg-[var(--brown)] text-white border-[var(--brown)]" : "bg-white border-[var(--line)] hover:bg-[var(--sand)]"}`}
        >
          Todos
        </button>
        {categories.map((c) => (
          <button
            key={c.id}
            onClick={() => setFilter(c.id)}
            className={`h-9 px-4 text-[13px] font-[600] border ${filter === c.id ? "bg-[var(--terracotta)] text-white border-[var(--terracotta)]" : "bg-white border-[var(--line)] hover:bg-[var(--sand)]"}`}
          >
            {c.label}
          </button>
        ))}
      </div>

      <div className="mt-6">
        <p className="text-[13px] leading-5 text-[var(--stone)]">Toca lo que te apetece hoy — puedes elegir varios y combinar.</p>

        {/* Visual grid, not uniform list - different sizes */}
        <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {list.map((s) => {
            const selected = draft.serviceIds.includes(s.id);
            const isFeatured = s.featured;
            return (
              <button
                key={s.id}
                onClick={() => toggle(s.id)}
                className={`text-left group relative overflow-hidden border bg-white flex flex-col hover:border-[var(--terracotta)] transition ${selected ? "border-[var(--terracotta)] ring-1 ring-[var(--terracotta)]" : "border-[var(--line)]"} ${isFeatured ? "sm:col-span-2 lg:col-span-1" : ""}`}
              >
                <div className="relative h-36 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={imageFor(s.id)} alt="" className="w-full h-full object-cover group-hover:scale-[1.03] transition duration-500" />
                  <div className="absolute top-2 left-2 flex gap-1.5">
                    {isFeatured && <span className="px-2 py-1 bg-[var(--mustard)] text-[10px] font-[700] tracking-[0.08em] uppercase text-[var(--brown)]">Favorito</span>}
                    <span className="px-2 py-1 bg-white/90 backdrop-blur text-[11px] font-[600]">{s.duration}′ · ${s.priceFrom} MXN</span>
                  </div>
                  <span
                    className={`absolute top-2 right-2 w-6 h-6 grid place-items-center border text-[12px] leading-none ${selected ? "bg-[var(--terracotta)] text-white border-[var(--terracotta)]" : "bg-white border-[var(--line)] text-[var(--stone)]"}`}
                  >
                    {selected ? "✓" : "+"}
                  </span>
                </div>
                <div className="p-4 flex-1 flex flex-col">
                  <div className="font-display text-[18px] leading-none">{s.name}</div>
                  <div className="mt-1.5 text-[13px] leading-5 text-[var(--stone)] line-clamp-2">{s.description}</div>
                  <div className={`mt-3 inline-flex self-start px-2.5 py-1 text-[11px] font-[600] tracking-[0.04em] ${selected ? "bg-[var(--brown)] text-white" : "bg-[var(--sand)] text-[var(--ink-soft)]"}`}>
                    {selected ? "Añadido ✦" : "Añadir"}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {draft.serviceIds.length > 0 && (
          <div className="mt-4 inline-flex items-center gap-2 bg-[var(--blush)] border border-[var(--line)] px-4 py-2 text-[13px]">
            <span className="w-2 h-2 rounded-full bg-[var(--terracotta)]" />
            Has elegido <span className="font-[700]">{draft.serviceIds.length} servicio{draft.serviceIds.length > 1 ? "s" : ""}</span> — combinables entre sí
          </div>
        )}
        {draft.serviceIds.length === 0 && (
          <p className="mt-4 text-[12px] text-[var(--stone)]">Tip: corte + tratamiento es el combo más pedido en Cuernavaca.</p>
        )}
      </div>
    </div>
  );
}

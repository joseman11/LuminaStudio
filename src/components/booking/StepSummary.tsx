"use client";
import { BookingDraft } from "@/types";
import { services } from "@/data/services";
import { specialists } from "@/data/specialists";
import { formatDateLong } from "@/lib/availability";

export default function StepSummary({ draft, onEdit, totalDuration, totalPrice }: { draft: BookingDraft; onEdit:(n:number)=>void; totalDuration:number; totalPrice:number }) {
  const selectedServices = services.filter(s=>draft.serviceIds.includes(s.id));
  const specialist = specialists.find(s=>s.id===draft.specialistId);
  return (
    <div className="grid lg:grid-cols-12 gap-6">
      <div className="lg:col-span-7 space-y-3">
        <div className="bg-white border border-[var(--line)] divide-y divide-[var(--line)]">
          <div className="p-5 flex justify-between items-start gap-4">
            <div>
              <div className="text-[11px] font-[700] tracking-[0.1em] uppercase text-[var(--terracotta)]">Servicios · {totalDuration} min</div>
              <div className="mt-2 space-y-1.5">
                {selectedServices.map(s=>(
                  <div key={s.id} className="flex justify-between gap-4 text-sm">
                    <span className="font-[600]">{s.name}</span>
                    <span className="text-[var(--stone)]">{s.duration}′ · ${s.priceFrom} MXN</span>
                  </div>
                ))}
              </div>
            </div>
            <button onClick={()=>onEdit(1)} className="text-[11px] font-[700] tracking-[0.08em] uppercase underline underline-offset-4 shrink-0">Editar</button>
          </div>
          <div className="p-5 flex justify-between items-start gap-4">
            <div>
              <div className="text-[11px] font-[700] tracking-[0.1em] uppercase text-[var(--terracotta)]">Con quién</div>
              <div className="mt-1 text-[15px] font-[700]">{specialist ? specialist.name : "Sin preferencia"}</div>
              <div className="text-[13px] text-[var(--stone)]">{specialist ? specialist.role : "Te asignamos el mejor hueco"}</div>
            </div>
            <button onClick={()=>onEdit(2)} className="text-[11px] font-[700] tracking-[0.08em] uppercase underline underline-offset-4 shrink-0">Editar</button>
          </div>
          <div className="p-5 flex justify-between items-start gap-4">
            <div>
              <div className="text-[11px] font-[700] tracking-[0.1em] uppercase text-[var(--terracotta)]">Cuándo</div>
              <div className="mt-1 text-[15px] font-[700] capitalize">{draft.date ? formatDateLong(draft.date) : "—"}</div>
              <div className="text-[13px] text-[var(--stone)]">{draft.time ? `${draft.time} · ${totalDuration} min` : "—"}</div>
            </div>
            <button onClick={()=>onEdit(3)} className="text-[11px] font-[700] tracking-[0.08em] uppercase underline underline-offset-4 shrink-0">Editar</button>
          </div>
          <div className="p-5 flex justify-between items-start gap-4">
            <div>
              <div className="text-[11px] font-[700] tracking-[0.1em] uppercase text-[var(--terracotta)]">Detalles</div>
              <div className="mt-1 text-[13px] leading-5">
                <div>{draft.firstVisit===null ? "—" : draft.firstVisit ? "Primera vez ✨" : "Ya vine antes"}</div>
                {draft.note && <div className="mt-1 italic bg-[var(--sand)] border border-[var(--line)] p-2 text-[12px]">“{draft.note}”</div>}
                {!draft.note && <div className="text-[var(--stone)] text-[12px]">Sin notas</div>}
              </div>
            </div>
            <button onClick={()=>onEdit(5)} className="text-[11px] font-[700] tracking-[0.08em] uppercase underline underline-offset-4 shrink-0">Editar</button>
          </div>
        </div>
      </div>
      <div className="lg:col-span-5">
        <div className="bg-[var(--brown)] text-white p-6">
          <div className="text-[11px] tracking-[0.1em] uppercase font-[700] opacity-60">Resumen</div>
          <div className="mt-4 flex justify-between text-sm">
            <span className="opacity-70">Duración</span><span className="font-[700]">{totalDuration} min</span>
          </div>
          <div className="mt-2 flex justify-between text-sm">
            <span className="opacity-70">Precio estimado</span><span className="font-[700]">desde ${totalPrice} MXN</span>
          </div>
          <div className="mt-2 text-[11px] opacity-60">IVA incluido. Precio final según diagnóstico.</div>
          {draft.referenceImage && (
            <div className="mt-4 bg-white p-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={draft.referenceImage} alt="Referencia" className="w-full h-[160px] object-cover" />
              <div className="text-[11px] text-center text-[var(--stone)] mt-1">Imagen de referencia</div>
            </div>
          )}
          <div className="mt-6 text-[12px] leading-5 opacity-80 border-t border-white/10 pt-4">
            Al confirmar aceptas la <a href="/cancelaciones" className="underline underline-offset-4">política de cancelación</a> y el <a href="/privacidad" className="underline underline-offset-4">Aviso de Privacidad</a>.
          </div>
        </div>
      </div>
    </div>
  );
}

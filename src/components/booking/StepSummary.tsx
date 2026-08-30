"use client";
import { BookingDraft } from "@/types";
import { services } from "@/data/services";
import { specialists } from "@/data/specialists";
import { formatDateLong } from "@/lib/availability";

export default function StepSummary({ draft, onEdit, totalDuration, totalPrice }: { draft: BookingDraft; onEdit:(n:number)=>void; totalDuration:number; totalPrice:number }) {
  const selectedServices = services.filter(s=>draft.serviceIds.includes(s.id));
  const specialist = specialists.find(s=>s.id===draft.specialistId);

  return (
    <div className="grid lg:grid-cols-12 gap-8">
      <div className="lg:col-span-7 space-y-4">
        <div className="border border-[var(--line)] divide-y divide-[var(--line)] bg-white">
          <div className="p-5 flex justify-between items-start gap-4">
            <div>
              <div className="text-[11px] tracking-[0.14em] uppercase text-[var(--stone)]">Servicios · {totalDuration} min</div>
              <div className="mt-2 space-y-2">
                {selectedServices.map(s=>(
                  <div key={s.id} className="flex justify-between gap-4 text-sm">
                    <span className="font-[500]">{s.name}</span>
                    <span className="text-[var(--stone)]">{s.duration} min · {s.priceFrom} €</span>
                  </div>
                ))}
              </div>
            </div>
            <button onClick={()=>onEdit(1)} className="text-[11px] tracking-[0.12em] uppercase underline underline-offset-4">Editar</button>
          </div>

          <div className="p-5 flex justify-between items-start gap-4">
            <div>
              <div className="text-[11px] tracking-[0.14em] uppercase text-[var(--stone)]">Especialista</div>
              <div className="mt-1 text-[15px] font-[500]">{specialist ? specialist.name : "Sin preferencia"}</div>
              <div className="text-[13px] text-[var(--stone)]">{specialist ? specialist.role : "Asignación según disponibilidad"}</div>
            </div>
            <button onClick={()=>onEdit(2)} className="text-[11px] tracking-[0.12em] uppercase underline underline-offset-4">Editar</button>
          </div>

          <div className="p-5 flex justify-between items-start gap-4">
            <div>
              <div className="text-[11px] tracking-[0.14em] uppercase text-[var(--stone)]">Fecha y hora</div>
              <div className="mt-1 text-[15px] font-[500] capitalize">{draft.date ? formatDateLong(draft.date) : "—"}</div>
              <div className="text-[13px] text-[var(--stone)]">{draft.time ? `${draft.time} · ${totalDuration} min estimados` : "—"}</div>
            </div>
            <button onClick={()=>onEdit(3)} className="text-[11px] tracking-[0.12em] uppercase underline underline-offset-4">Editar</button>
          </div>

          <div className="p-5 flex justify-between items-start gap-4">
            <div>
              <div className="text-[11px] tracking-[0.14em] uppercase text-[var(--stone)]">Detalles</div>
              <div className="mt-1 text-[13px] leading-5">
                <div>{draft.firstVisit===null ? "—" : draft.firstVisit ? "Primera visita" : "Clienta habitual"}</div>
                {draft.note && <div className="mt-1 text-[var(--stone)]">“{draft.note}”</div>}
                {!draft.note && <div className="text-[var(--stone-light)]">Sin notas</div>}
              </div>
            </div>
            <button onClick={()=>onEdit(5)} className="text-[11px] tracking-[0.12em] uppercase underline underline-offset-4">Editar</button>
          </div>
        </div>
      </div>

      <div className="lg:col-span-5">
        <div className="border border-[var(--ink)] bg-[var(--paper)] p-6">
          <div className="text-[11px] tracking-[0.14em] uppercase text-[var(--stone)]">Resumen</div>
          <div className="mt-4 flex justify-between text-sm">
            <span className="text-[var(--stone)]">Duración</span>
            <span className="font-[500]">{totalDuration} min</span>
          </div>
          <div className="mt-2 flex justify-between text-sm">
            <span className="text-[var(--stone)]">Precio estimado</span>
            <span className="font-[500]">desde {totalPrice} €</span>
          </div>
          <div className="mt-2 text-[11px] leading-4 text-[var(--stone-light)]">Precio final según diagnóstico en estudio. Sin sorpresas.</div>

          {draft.referenceImage && (
            <div className="mt-4 border border-[var(--line)] p-2 bg-white">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={draft.referenceImage} alt="Referencia" className="w-full h-[160px] object-cover" />
              <div className="text-[11px] text-center text-[var(--stone)] mt-1">Imagen de referencia adjunta</div>
            </div>
          )}

          <div className="mt-6 text-[12px] leading-5 text-[var(--stone)] border-t border-[var(--line)] pt-4">
            Al confirmar aceptas la política de cancelación con 24h de antelación. Te enviaremos recordatorio.
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";
import { useEffect, useState } from "react";
import { Appointment } from "@/types";
import { loadAppointments, cancelAppointment } from "@/lib/storage";
import { services } from "@/data/services";
import { specialists } from "@/data/specialists";
import { formatDateLong } from "@/lib/availability";

export default function Appointments(){
  const [list, setList]=useState<Appointment[]>([]);
  const [filter, setFilter]=useState<"upcoming"|"all">("upcoming");
  function refresh(){ setList(loadAppointments()); }
  useEffect(()=>{
    refresh();
    window.addEventListener("lumina:appointments-updated", refresh);
    window.addEventListener("storage", refresh);
    return ()=>{ window.removeEventListener("lumina:appointments-updated", refresh); window.removeEventListener("storage", refresh); };
  },[]);
  const upcoming = list.filter(a=>a.status==="upcoming");
  const display = filter==="upcoming" ? upcoming : list;
  function onCancel(id:string){ if(!confirm("¿Cancelar esta cita?")) return; cancelAppointment(id); refresh(); }

  return (
    <section suppressHydrationWarning id="citas" className="bg-[var(--paper)] border-t border-[var(--line)]">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8 py-10 lg:py-12">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-[11px] font-[700] tracking-[0.1em] uppercase text-[var(--terracotta)]">
              <span className="w-6 h-[2px] bg-[var(--terracotta)]" /> Mis citas
            </div>
            <h2 className="font-display text-[34px] leading-none mt-2">Tus visitas</h2>
            <p className="mt-2 text-[13px] text-[var(--stone)]">Guardadas en este cel · Sin cuenta, sin contraseñas · Todo queda entre tú y nosotras</p>
          </div>
          <div className="flex gap-2">
            <button onClick={()=>setFilter("upcoming")} className={`h-9 px-4 text-[13px] font-[700] border ${filter==="upcoming" ? "bg-[var(--brown)] text-white border-[var(--brown)]" : "bg-white border-[var(--line)]"}`}>Próximas ({upcoming.length})</button>
            <button onClick={()=>setFilter("all")} className={`h-9 px-4 text-[13px] font-[700] border ${filter==="all" ? "bg-[var(--terracotta)] text-white border-[var(--terracotta)]" : "bg-white border-[var(--line)]"}`}>Historial ({list.length})</button>
          </div>
        </div>

        {display.length===0 ? (
          <div className="mt-8 bg-[var(--blush)] border border-[var(--line)] p-8 lg:p-10 text-center">
            <div className="font-display text-[22px]">Aún no tienes citas</div>
            <p className="mt-2 text-[13px] text-[var(--ink-soft)]">Cuando reserves, aparecerán aquí. Puedes cancelar con un toque, sin dramas.</p>
            <a href="#reservar" className="mt-4 inline-flex h-10 px-6 bg-[var(--terracotta)] text-white text-[12px] font-[700] items-center hover:bg-[var(--terracotta-hover)]">Reservar ahora →</a>
          </div>
        ) : (
          <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {display.map(a=>{
              const sels = services.filter(s=>a.serviceIds.includes(s.id));
              const spec = specialists.find(s=>s.id===a.specialistId);
              const isCancelled = a.status==="cancelled";
              return (
                <div key={a.id} className={`border p-5 flex flex-col ${isCancelled ? "bg-[var(--sand)] border-[var(--line)] opacity-60" : "bg-white border-[var(--line)]"}`}>
                  <div className="flex justify-between items-start gap-3">
                    <div className="font-mono text-[12px] font-[700] tracking-[0.06em]">{a.code}</div>
                    <span className={`text-[10px] font-[700] tracking-[0.08em] uppercase px-2 py-1 border ${isCancelled ? "bg-white border-[var(--line)] text-[var(--stone)]" : a.status==="upcoming" ? "bg-[var(--terracotta)] text-white border-[var(--terracotta)]" : "bg-white"}`}>{isCancelled ? "Cancelada" : a.status==="upcoming" ? "Próxima ✦" : "Pasada"}</span>
                  </div>
                  <div className="mt-3">
                    <div className="text-[13px] font-[700] leading-5">{sels.map(s=>s.name).join(" · ")}</div>
                    <div className="text-[12px] text-[var(--stone)] mt-1">{spec ? spec.name : "Sin preferencia"}</div>
                  </div>
                  <div className="mt-3 text-[13px] leading-5 border-t border-[var(--line)] pt-3">
                    <div className="capitalize font-[700]">{a.date ? formatDateLong(a.date) : "—"}</div>
                    <div className="text-[var(--stone)]">{a.time} · {a.totalDuration} min · ${a.totalPrice} MXN</div>
                  </div>
                  {a.note && <div className="mt-3 text-[12px] italic bg-[var(--sand)] border border-[var(--line)] p-2 line-clamp-2">“{a.note}”</div>}
                  <div className="mt-4 flex gap-2">
                    {!isCancelled && a.status==="upcoming" && (
                      <button onClick={()=>onCancel(a.id)} className="flex-1 h-9 border border-[var(--line)] bg-white text-[12px] font-[600] hover:bg-[var(--sand)]">Cancelar</button>
                    )}
                    <a href="#reservar" className="flex-1 h-9 bg-[var(--brown)] text-white grid place-items-center text-[12px] font-[700] hover:bg-black">Duplicar</a>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}

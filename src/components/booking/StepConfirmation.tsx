"use client";
import { Appointment } from "@/types";
import { services } from "@/data/services";
import { specialists } from "@/data/specialists";
import { formatDateLong } from "@/lib/availability";

export default function StepConfirmation({ appointment, onNew }: { appointment: Appointment; onNew:()=>void }) {
  const selected = services.filter(s=>appointment.serviceIds.includes(s.id));
  const spec = specialists.find(s=>s.id===appointment.specialistId);
  function addToCalendar(){
    const date = appointment.date!; const time = appointment.time!;
    const [h,m] = time.split(":").map(Number);
    const start = new Date(date + "T" + String(h).padStart(2,"0")+":"+String(m).padStart(2,"0")+":00");
    const end = new Date(start.getTime() + appointment.totalDuration*60000);
    const fmt = (d:Date)=> d.toISOString().replace(/[-:]/g,"").split(".")[0]+"Z";
    const ics = `BEGIN:VCALENDAR\nVERSION:2.0\nBEGIN:VEVENT\nDTSTART:${fmt(start)}\nDTEND:${fmt(end)}\nSUMMARY:LÚMINA — ${selected.map(s=>s.name).join(", ")}\nLOCATION:Av. Teopanzolco 408, Cuernavaca\nDESCRIPTION:Código ${appointment.code}\nEND:VEVENT\nEND:VCALENDAR`;
    const blob = new Blob([ics], { type:"text/calendar" }); const url = URL.createObjectURL(blob);
    const a = document.createElement("a"); a.href=url; a.download=`lumina-${appointment.code}.ics`; a.click(); URL.revokeObjectURL(url);
  }
  return (
    <section id="reservar" className="bg-[var(--blush)] border-t border-[var(--line)]">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8 py-10 lg:py-14">
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 bg-[var(--terracotta)] text-white px-3 py-1 text-[11px] font-[700] tracking-[0.08em] uppercase">Reserva confirmada ✦</div>
            <h2 className="font-display text-[44px] lg:text-[48px] leading-[0.85] mt-4">Todo<br/><span className="font-display-italic text-[var(--terracotta)]">está listo.</span></h2>
            <p className="mt-4 text-[15px] leading-7 text-[var(--ink-soft)]">
              Te espera {spec ? spec.name.split(" ")[0] : "el equipo"} el <span className="font-[700] capitalize">{appointment.date ? formatDateLong(appointment.date) : ""} a las {appointment.time}</span>. Te mandamos recordatorio por WhatsApp.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <button onClick={addToCalendar} className="h-10 px-5 bg-[var(--brown)] text-white text-[12px] font-[700] hover:bg-black">Agregar al calendario</button>
              <button onClick={()=>{ if(navigator.share) navigator.share({ title:"Mi cita en LÚMINA", text:`Cita ${appointment.code} el ${appointment.date} a las ${appointment.time}`}).catch(()=>{})}} className="h-10 px-5 bg-white border border-[var(--line)] text-[12px] font-[700] hover:bg-[var(--sand)]">Compartir</button>
            </div>
            <div className="mt-6 bg-white border border-[var(--line)] p-4 text-[13px] leading-5">
              <div className="font-[700]">¿Qué sigue?</div>
              <div className="text-[var(--stone)] mt-1">Llega 5 min antes si es tu primera vez. Si necesitas cambiar, cancela con 24h sin costo.</div>
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="bg-white border border-[var(--line)] p-6 lg:p-7">
              <div className="flex justify-between items-start gap-4">
                <div>
                  <div className="text-[11px] font-[700] tracking-[0.1em] uppercase text-[var(--terracotta)]">Código</div>
                  <div className="font-mono text-[28px] font-[700] tracking-[0.06em]">{appointment.code}</div>
                </div>
                <span className="px-3 py-1 bg-[var(--terracotta)] text-white text-[11px] font-[700] uppercase">Próxima ✦</span>
              </div>
              <div className="mt-6 grid sm:grid-cols-2 gap-6 border-t border-[var(--line)] pt-6 text-sm">
                <div>
                  <div className="text-[11px] font-[700] tracking-[0.08em] uppercase text-[var(--stone)]">Servicios</div>
                  <div className="mt-2 space-y-1">
                    {selected.map(s=> <div key={s.id} className="flex justify-between"><span className="font-[600]">{s.name}</span><span className="text-[var(--stone)]">{s.duration}′</span></div>)}
                  </div>
                  <div className="mt-3 text-[12px] font-[600]">{appointment.totalDuration} min · ${appointment.totalPrice} MXN</div>
                </div>
                <div>
                  <div className="text-[11px] font-[700] tracking-[0.08em] uppercase text-[var(--stone)]">Cuándo y dónde</div>
                  <div className="mt-2 leading-6 text-[13px]">
                    <div className="capitalize font-[700]">{appointment.date ? formatDateLong(appointment.date) : ""}</div>
                    <div>{appointment.time} · Lúmina</div>
                    <div className="text-[var(--stone)]">Av. Teopanzolco 408 — Reforma</div>
                  </div>
                </div>
              </div>
              <div className="mt-6 bg-[var(--sand)] border border-[var(--line)] p-4 text-[13px] leading-5">
                <div className="font-[700]">{spec ? spec.name : "Sin preferencia"}</div>
                <div className="text-[var(--stone)] text-[12px]">{spec ? spec.role : "Te asignamos el mejor hueco"}</div>
                {appointment.note && <div className="mt-2 italic bg-white border border-[var(--line)] p-2 text-[12px]">“{appointment.note}”</div>}
              </div>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a href="#citas" className="h-11 px-6 bg-[var(--brown)] text-white grid place-items-center text-[12px] font-[700]">Ver mis citas</a>
                <button onClick={onNew} className="h-11 px-6 border border-[var(--line)] bg-[var(--sand)] text-[12px] font-[700]">Reservar otra</button>
              </div>
            </div>
            <p className="mt-3 text-center text-[11px] text-[var(--stone)]">Te llegará recordatorio 24h antes por WhatsApp</p>
          </div>
        </div>
      </div>
    </section>
  );
}

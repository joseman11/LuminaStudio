"use client";
import { Appointment } from "@/types";
import { services } from "@/data/services";
import { specialists } from "@/data/specialists";
import { formatDateLong } from "@/lib/availability";

export default function StepConfirmation({ appointment, onNew }: { appointment: Appointment; onNew:()=>void }) {
  const selected = services.filter(s=>appointment.serviceIds.includes(s.id));
  const spec = specialists.find(s=>s.id===appointment.specialistId);

  function addToCalendar(){
    const date = appointment.date!;
    const time = appointment.time!;
    const [h,m] = time.split(":").map(Number);
    const start = new Date(date + "T" + String(h).padStart(2,"0")+":"+String(m).padStart(2,"0")+":00");
    const end = new Date(start.getTime() + appointment.totalDuration*60000);
    const fmt = (d:Date)=> d.toISOString().replace(/[-:]/g,"").split(".")[0]+"Z";
    const ics = `BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
DTSTART:${fmt(start)}
DTEND:${fmt(end)}
SUMMARY:LÚMINA STUDIO — ${selected.map(s=>s.name).join(", ")}
LOCATION:Calle de Almagro 22, Madrid
DESCRIPTION:Código ${appointment.code}
END:VEVENT
END:VCALENDAR`;
    const blob = new Blob([ics], { type:"text/calendar" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href=url; a.download=`lumina-${appointment.code}.ics`; a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <section id="reservar" className="border-t border-[var(--line)] bg-[var(--sand)]">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 text-[11px] tracking-[0.16em] uppercase text-[var(--success)]">
              <span className="w-2 h-2 rounded-full bg-[var(--success)]"/> Reserva confirmada
            </div>
            <h2 className="font-display text-[44px] leading-[0.9] mt-3">Todo está<br/>listo.</h2>
            <p className="mt-4 text-[15px] leading-7 text-[var(--stone)]">
              Hemos guardado tu cita. Te espera {spec ? spec.name.split(" ")[0] : "el equipo"} el{" "}
              <span className="text-[var(--ink)] font-[500] capitalize">{appointment.date ? formatDateLong(appointment.date) : ""} a las {appointment.time}</span>.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <button onClick={addToCalendar} className="h-10 px-5 bg-[var(--ink)] text-white text-[12px] tracking-[0.1em] uppercase">Agregar al calendario</button>
              <button onClick={()=>{ if(navigator.share) navigator.share({ title:"Mi cita en LÚMINA", text:`Cita ${appointment.code} el ${appointment.date} a las ${appointment.time}`}).catch(()=>{})}} className="h-10 px-5 border border-[var(--line)] bg-white text-[12px] tracking-[0.1em] uppercase">Compartir</button>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-white border border-[var(--line)] p-6 lg:p-8">
              <div className="flex justify-between items-start gap-4">
                <div>
                  <div className="text-[11px] tracking-[0.14em] uppercase text-[var(--stone)]">Código de reserva</div>
                  <div className="font-mono text-[28px] tracking-[0.08em]">{appointment.code}</div>
                </div>
                <div className="text-right">
                  <div className="text-[11px] tracking-[0.14em] uppercase text-[var(--stone)]">Estado</div>
                  <div className="inline-flex items-center gap-1.5 mt-1 text-[12px] tracking-[0.08em] uppercase bg-[var(--sand)] border border-[var(--line)] px-3 py-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--success)]"/> Próxima
                  </div>
                </div>
              </div>

              <div className="mt-6 grid sm:grid-cols-2 gap-6 border-t border-[var(--line)] pt-6 text-sm">
                <div>
                  <div className="text-[11px] tracking-[0.12em] uppercase text-[var(--stone)]">Servicios</div>
                  <div className="mt-2 space-y-1">
                    {selected.map(s=> <div key={s.id} className="flex justify-between"><span>{s.name}</span><span className="text-[var(--stone)]">{s.duration}′</span></div>)}
                  </div>
                  <div className="mt-3 text-[12px] text-[var(--stone)]">{appointment.totalDuration} min · desde {appointment.totalPrice} €</div>
                </div>
                <div>
                  <div className="text-[11px] tracking-[0.12em] uppercase text-[var(--stone)]">Cuándo y dónde</div>
                  <div className="mt-2 leading-6">
                    <div className="capitalize font-[500]">{appointment.date ? formatDateLong(appointment.date) : ""}</div>
                    <div>{appointment.time} · Lúmina Studio</div>
                    <div className="text-[var(--stone)]">C/ Almagro 22 — Chamberí</div>
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-[var(--sand)] border border-[var(--line)] p-4 text-[13px] leading-5">
                <div className="font-[500]">Especialista</div>
                <div className="text-[var(--stone)]">{spec ? `${spec.name} · ${spec.role}` : "Sin preferencia — asignación según disponibilidad"}</div>
                {appointment.note && <div className="mt-2 italic text-[var(--stone)]">“{appointment.note}”</div>}
              </div>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a href="#citas" className="h-11 px-6 bg-[var(--ink)] text-white grid place-items-center text-[12px] tracking-[0.12em] uppercase">Ver mis citas</a>
                <button onClick={onNew} className="h-11 px-6 border border-[var(--line)] bg-white text-[12px] tracking-[0.12em] uppercase">Reservar otra cita</button>
              </div>
            </div>
            <p className="mt-3 text-center text-[11px] text-[var(--stone-light)]">Recibirás un recordatorio 24h antes. Cancela sin coste hasta ese momento.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

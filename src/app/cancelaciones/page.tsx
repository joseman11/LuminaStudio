import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = { title: "Política de Cancelación — Lúmina Studio" };

export default function CancelacionesPage() {
  return (
    <div className="mx-auto max-w-[860px] px-6 lg:px-8 py-12 lg:py-16">
      <div className="text-[11px] tracking-[0.18em] uppercase text-[var(--stone)]">Política · Clara y justa</div>
      <h1 className="font-display text-[36px] lg:text-[44px] leading-none mt-2">Cancelaciones y reprogramación</h1>

      <div className="mt-8 grid gap-6">
        <div className="bg-white border border-[var(--line)] p-6">
          <div className="text-[11px] tracking-[0.12em] uppercase text-[var(--success)]">✓ Sin costo</div>
          <div className="font-[500] mt-1">Más de 24 horas antes</div>
          <p className="text-[13px] leading-5 text-[var(--stone)] mt-2">Cancela o cambia tu cita por WhatsApp al 777 310 5678 sin penalización. Te ayudamos a encontrar nuevo horario.</p>
        </div>
        <div className="bg-white border border-[var(--line)] p-6">
          <div className="text-[11px] tracking-[0.12em] uppercase text-[var(--accent)]">— Anticipo retenido</div>
          <div className="font-[500] mt-1">Menos de 24 horas / no show</div>
          <p className="text-[13px] leading-5 text-[var(--stone)] mt-2">Se retiene el anticipo (si hubo). Si no hubo anticipo, pediremos prepago del 30% para tu próxima reserva. Entendemos emergencias: escríbenos y buscamos solución.</p>
        </div>
        <div className="bg-[var(--sand)] border border-[var(--line)] p-6">
          <div className="text-[11px] tracking-[0.12em] uppercase text-[var(--stone)]">Retrasos</div>
          <div className="font-[500] mt-1">Tolerancia 15 minutos</div>
          <p className="text-[13px] leading-5 text-[var(--stone)] mt-2">Si llegas 15 min tarde, haremos lo que alcance en el tiempo restante o reprogramamos sin costo la primera vez. Después de 15 min sin aviso, la cita se considera no show.</p>
        </div>
      </div>

      <div className="mt-10 text-[14px] leading-7 text-[var(--ink-soft)] space-y-4">
        <p>
          <strong>¿Cómo cancelar?</strong> Solo por WhatsApp 777 310 5678 o al 777 310 5678 llamada. No tomamos cancelaciones por Instagram DM para evitar confusiones. Guarda tu código (ej. LM-4821) para agilizar.
        </p>
        <p>
          <strong>Reembolsos:</strong> anticipos reembolsables solo si cancelas con &gt;24h. Reembolso por transferencia en 3–5 días hábiles. Si pagaste con tarjeta en terminal, el reembolso puede tardar hasta 10 días según tu banco.
        </p>
        <p>
          <strong>Casos especiales:</strong> si tu estilista se enferma, te avisamos lo antes posible y te ofrecemos reprogramar con la misma persona o con alguien de igual nivel, o reembolso total del anticipo.
        </p>
      </div>

      <div className="mt-10 flex gap-3">
        <a href="https://wa.me/527773105678" target="_blank" className="h-10 px-6 bg-[var(--ink)] text-white inline-flex items-center text-[11px] tracking-[0.12em] uppercase">
          Escribir por WhatsApp
        </a>
        <Link href="/" className="h-10 px-6 border border-[var(--line)] inline-flex items-center text-[11px] tracking-[0.12em] uppercase">
          Volver
        </Link>
      </div>
    </div>
  );
}

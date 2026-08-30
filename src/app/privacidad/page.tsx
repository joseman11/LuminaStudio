import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = {
  title: "Aviso de Privacidad — Lúmina Studio Cuernavaca",
  description: "Aviso de privacidad integral conforme a la LFPDPPP para Lúmina Studio Cuernavaca, Morelos.",
};

export default function PrivacidadPage() {
  return (
    <div className="mx-auto max-w-[860px] px-6 lg:px-8 py-12 lg:py-16">
      <div className="text-[11px] tracking-[0.18em] uppercase text-[var(--stone)]">Legal · Actualizado 15 mayo 2026</div>
      <h1 className="font-display text-[36px] lg:text-[44px] leading-none mt-2">Aviso de Privacidad Integral</h1>
      <p className="mt-4 text-[13px] leading-6 text-[var(--stone)]">
        Lúmina Studio Cuernavaca, S. de R.L. de C.V. — Av. Teopanzolco 408, Col. Reforma, 62260 Cuernavaca, Morelos, México. Responsable del tratamiento de tus datos personales conforme a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP).
      </p>

      <div className="mt-10 space-y-8 text-[14px] leading-7 text-[var(--ink-soft)]">
        <section>
          <h2 className="font-[600] text-[16px] text-[var(--ink)]">1. Datos que recabamos</h2>
          <p className="mt-2">
            Nombre, teléfono, correo (si lo proporcionas), fecha y servicios reservados, notas que escribas e imagen de referencia que subas (almacenada solo en tu dispositivo y no enviada a servidores externos salvo que la compartas por WhatsApp). No recabamos datos sensibles ni financieros en esta plataforma (los pagos se procesan en terminal física en el estudio).
          </p>
        </section>
        <section>
          <h2 className="font-[600] text-[16px] text-[var(--ink)]">2. Finalidades</h2>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Gestionar tu cita, recordatorios por WhatsApp y cambios de horario.</li>
            <li>Personalizar el servicio (ej. nota “quiero balayage cenizo” la ve tu estilista).</li>
            <li>Facturación, si solicitas CFDI (requiere RFC y constancia).</li>
            <li>Mejora del servicio y estadísticas anónimas de uso.</li>
          </ul>
        </section>
        <section>
          <h2 className="font-[600] text-[16px] text-[var(--ink)]">3. Base legal y consentimiento</h2>
          <p className="mt-2">
            Al reservar y aceptar este aviso otorgas consentimiento tácito. Puedes revocar en cualquier momento escribiendo a <a href="mailto:privacidad@luminacuernavaca.mx" className="underline underline-offset-4">privacidad@luminacuernavaca.mx</a>.
          </p>
        </section>
        <section>
          <h2 className="font-[600] text-[16px] text-[var(--ink)]">4. Derechos ARCO</h2>
          <p className="mt-2">
            Acceso, Rectificación, Cancelación y Oposición: envía solicitud con copia de INE y descripción clara a privacidad@luminacuernavaca.mx. Respondemos en máximo 20 días hábiles. También puedes limitar el uso enviando “BAJA” por WhatsApp al 777 310 5678.
          </p>
        </section>
        <section>
          <h2 className="font-[600] text-[16px] text-[var(--ink)]">5. Transferencias</h2>
          <p className="mt-2">No vendemos ni transferimos tus datos a terceros, salvo requerimiento de autoridad competente.</p>
        </section>
        <section>
          <h2 className="font-[600] text-[16px] text-[var(--ink)]">6. Conservación y almacenamiento</h2>
          <p className="mt-2">
            Tus citas se guardan en tu navegador (localStorage). Si borras datos del navegador, se eliminan. Conservamos respaldos de facturación 5 años por obligación fiscal (Art. 30 CFF).
          </p>
        </section>
        <section>
          <h2 className="font-[600] text-[16px] text-[var(--ink)]">7. Cookies y tecnologías similares</h2>
          <p className="mt-2">
            Usamos cookies técnicas (sesión, preferencias) y almacenamiento local. Puedes bloquearlas en tu navegador, pero la reserva no funcionará sin localStorage. No usamos píxeles de rastreo de terceros sin tu consentimiento.
          </p>
        </section>
        <section>
          <h2 className="font-[600] text-[16px] text-[var(--ink)]">8. Menores de edad</h2>
          <p className="mt-2">
            Servicios a menores solo con consentimiento del tutor presente. No recabamos datos de menores sin ese consentimiento.
          </p>
        </section>
        <section>
          <h2 className="font-[600] text-[16px] text-[var(--ink)]">9. Cambios al aviso</h2>
          <p className="mt-2">Publicaremos actualizaciones en esta página y en el estudio. Última actualización: 15 mayo 2026.</p>
        </section>
        <section className="border-t border-[var(--line)] pt-6">
          <p className="text-[12px] text-[var(--stone)]">
            Domicilio para oír y recibir notificaciones: Av. Teopanzolco 408, Col. Reforma, Cuernavaca, Mor. 62260. Tel. 777 310 5678. INAI: 800-835-4324 www.inai.org.mx
          </p>
        </section>
      </div>

      <div className="mt-10 flex gap-3">
        <Link href="/" className="h-10 px-6 bg-[var(--ink)] text-white inline-flex items-center text-[11px] tracking-[0.12em] uppercase">
          Volver al inicio
        </Link>
        <Link href="/terminos" className="h-10 px-6 border border-[var(--line)] inline-flex items-center text-[11px] tracking-[0.12em] uppercase">
          Ver Términos
        </Link>
      </div>
    </div>
  );
}

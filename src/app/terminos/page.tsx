import type { Metadata } from "next";
export const metadata: Metadata = { title: "Términos y Condiciones — Lúmina Studio Cuernavaca" };

export default function TerminosPage() {
  return (
    <div className="mx-auto max-w-[860px] px-6 lg:px-8 py-12 lg:py-16">
      <div className="text-[11px] tracking-[0.18em] uppercase text-[var(--stone)]">Legal · Vigente desde 1 junio 2025</div>
      <h1 className="font-display text-[36px] lg:text-[44px] leading-none mt-2">Términos y Condiciones</h1>
      <p className="mt-4 text-[13px] leading-6 text-[var(--stone)]">
        Al reservar en Lúmina Studio Cuernavaca aceptas estos términos. Operamos como establecimiento de servicios de belleza en Cuernavaca, Morelos, conforme a la Ley Federal de Protección al Consumidor (PROFECO).
      </p>

      <div className="mt-10 space-y-8 text-[14px] leading-7 text-[var(--ink-soft)]">
        <section>
          <h2 className="font-[600] text-[var(--ink)]">1. Reservas</h2>
          <p className="mt-2">
            La reserva en línea es una solicitud sujeta a confirmación por WhatsApp. Recibirás confirmación en máximo 2 horas hábiles. Si no recibes mensaje, llámanos al 777 310 5678. Debes llegar 5–10 min antes. Tolerancia de 15 min; pasado ese tiempo la cita puede recortarse o reprogramarse.
          </p>
        </section>
        <section>
          <h2 className="font-[600] text-[var(--ink)]">2. Precios y pagos</h2>
          <p className="mt-2">
            Precios en MXN con IVA incluido. El precio “desde” depende de largo, densidad y técnica; se confirma en diagnóstico presencial. No cobramos anticipo para servicios &lt; $1,000 MXN. Para color completo, novias y paquetes &gt; $1,500 MXN podemos solicitar anticipo del 30% por transferencia. Facturación con constancia fiscal vigente dentro del mes del servicio.
          </p>
        </section>
        <section>
          <h2 className="font-[600] text-[var(--ink)]">3. Cancelaciones y cambios</h2>
          <p className="mt-2">
            Cambios o cancelaciones sin costo con al menos 24 horas de anticipación. Cancelación tardía (&lt;24h) o no show: se retiene el anticipo. Dos no-shows consecutivos requieren prepago del 50% para futuras reservas. Ver detalle en <a href="/cancelaciones" className="underline underline-offset-4">Política de Cancelación</a>.
          </p>
        </section>
        <section>
          <h2 className="font-[600] text-[var(--ink)]">4. Salud y seguridad</h2>
          <p className="mt-2">
            Informa alergias, embarazo, tratamientos médicos del cuero cabelludo o keratinas recientes. Nos reservamos el derecho de no realizar servicios químicos si detectamos riesgo. Seguimos normas COFEPRIS de higiene: esterilización, desinfección y uso de material desechable cuando aplica.
          </p>
        </section>
        <section>
          <h2 className="font-[600] text-[var(--ink)]">5. Garantías</h2>
          <p className="mt-2">
            Si no quedas conforme dentro de 7 días, ofrecemos ajuste sin costo para corte y retoque de color (mismo tono). No aplica si te realizaste otro servicio químico fuera del estudio en ese lapso. Manicura/pedicura: garantía 5 días por desprendimiento (uso normal).
          </p>
        </section>
        <section>
          <h2 className="font-[600] text-[var(--ink)]">6. Propiedad intelectual y fotos</h2>
          <p className="mt-2">Solo publicamos fotos de tu resultado con tu consentimiento escrito. Puedes revocar en cualquier momento.</p>
        </section>
        <section>
          <h2 className="font-[600] text-[var(--ink)]">7. Jurisdicción</h2>
          <p className="mt-2">Para cualquier controversia, te atendemos primero en el estudio y, si es necesario, ante PROFECO Morelos, Av. Diana 22, Cuernavaca. Ley aplicable: Estados Unidos Mexicanos.</p>
        </section>
      </div>

      <div className="mt-10 border border-[var(--line)] bg-[var(--sand)] p-5 text-[12px] leading-5 text-[var(--stone)]">
        Dudas: hola@luminacuernavaca.mx · 777 310 5678 · Av. Teopanzolco 408, Reforma, Cuernavaca, Mor.
      </div>
    </div>
  );
}

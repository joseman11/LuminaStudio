import type { Metadata } from "next";
export const metadata: Metadata = { title: "Facturación — Lúmina Studio Cuernavaca" };

export default function FacturacionPage() {
  return (
    <div className="mx-auto max-w-[860px] px-6 lg:px-8 py-12 lg:py-16">
      <div className="text-[11px] tracking-[0.18em] uppercase text-[var(--stone)]">Administración</div>
      <h1 className="font-display text-[36px] lg:text-[44px] leading-none mt-2">Facturación</h1>
      <p className="mt-4 text-[14px] leading-7 text-[var(--stone)]">
        Emitimos CFDI 4.0. Solicítala el mismo día de tu servicio. Conforme al SAT, solo facturamos dentro del mes en que se realizó el pago.
      </p>

      <div className="mt-8 bg-white border border-[var(--line)] p-6 space-y-4 text-[14px] leading-6">
        <div>
          <div className="text-[11px] tracking-[0.12em] uppercase text-[var(--stone)]">Requisitos</div>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Constancia de Situación Fiscal (PDF) vigente</li>
            <li>Uso de CFDI (ej. G03 Gastos en general)</li>
            <li>Régimen fiscal y código postal</li>
            <li>Ticket o código de reserva (LM-XXXX)</li>
          </ul>
        </div>
        <div className="border-t border-[var(--line)] pt-4">
          <div className="text-[11px] tracking-[0.12em] uppercase text-[var(--stone)]">Envía a</div>
          <div className="mt-1 font-[500]">facturacion@luminacuernavaca.mx</div>
          <div className="text-[13px] text-[var(--stone)]">Asunto: Factura + tu código · Respuesta en 24h hábiles</div>
        </div>
        <div className="border-t border-[var(--line)] pt-4 text-[12px] text-[var(--stone)]">
          Lúmina Studio Cuernavaca, S. de R.L. de C.V. · RFC LSC180315MN3 · Av. Teopanzolco 408, 62260 Cuernavaca, Mor. · Régimen: RESICO · Lugar de expedición 62260
        </div>
      </div>

      <div className="mt-6 text-[12px] leading-5 text-[var(--stone)]">
        Nota: el IVA ya está incluido en los precios mostrados. Si necesitas factura con propina separada, indícalo al pagar.
      </div>
    </div>
  );
}

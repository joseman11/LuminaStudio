import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--line)]">
      <div className="bg-[var(--sand)]">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-8 py-10">
          <div className="grid md:grid-cols-12 gap-8">
            <div className="md:col-span-5">
              <Logo size="large" />
              <p className="mt-3 text-[14px] leading-6 text-[var(--ink-soft)] max-w-sm">Estudio cercano en Reforma, Cuernavaca. Citas tranquilas, sin prisa, con buena música y café.</p>
              <div className="mt-4 text-[13px] leading-5 text-[var(--ink-soft)]">
                <div>Av. Teopanzolco 408, Col. Reforma</div>
                <div>62260 Cuernavaca, Morelos</div>
                <div className="mt-2 flex flex-wrap gap-2">
                  <a href="tel:+527773105678" className="px-2.5 py-1 bg-white border border-[var(--line)] text-[12px] font-[700] hover:bg-[var(--blush)]">777 310 5678</a>
                  <a href="https://wa.me/527773105678" target="_blank" className="px-2.5 py-1 bg-[var(--terracotta)] text-white text-[12px] font-[700]">WhatsApp</a>
                </div>
                <a href="mailto:hola@luminacuernavaca.mx" className="mt-2 inline-block text-[12px] underline underline-offset-4">hola@luminacuernavaca.mx</a>
              </div>
            </div>
            <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-6 text-sm">
              <div>
                <div className="text-[11px] font-[700] tracking-[0.1em] uppercase text-[var(--terracotta)] mb-3">Horario</div>
                <div className="space-y-1.5 leading-6">
                  <div>Mar–Vie 10–19h</div>
                  <div>Sábado 09–18h</div>
                  <div className="text-[var(--stone)]">Dom–Lun cerrado</div>
                </div>
              </div>
              <div>
                <div className="text-[11px] font-[700] tracking-[0.1em] uppercase text-[var(--terracotta)] mb-3">Explorar</div>
                <div className="flex flex-col gap-1.5">
                  <a href="#servicios" className="hover:underline underline-offset-4">Servicios</a>
                  <a href="#equipo" className="hover:underline underline-offset-4">Equipo</a>
                  <a href="#lookbook" className="hover:underline underline-offset-4">Lookbook</a>
                  <a href="#reservar" className="hover:underline underline-offset-4 font-[700]">Reservar</a>
                </div>
              </div>
              <div>
                <div className="text-[11px] font-[700] tracking-[0.1em] uppercase text-[var(--terracotta)] mb-3">Legal</div>
                <div className="flex flex-col gap-1.5">
                  <a href="/privacidad" className="hover:underline underline-offset-4">Aviso de Privacidad</a>
                  <a href="/terminos" className="hover:underline underline-offset-4">Términos</a>
                  <a href="/cancelaciones" className="hover:underline underline-offset-4">Cancelaciones</a>
                  <a href="/facturacion" className="hover:underline underline-offset-4">Facturación</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[var(--brown)] text-white">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-8 py-4 flex flex-col sm:flex-row justify-between gap-2 text-[11px]">
          <span className="tracking-[0.08em] uppercase opacity-70">© 2026 Lúmina Cuernavaca · Hecho con calma</span>
          <span className="opacity-60">Precios en MXN · IVA incluido · Aceptamos transferencia y tarjeta</span>
        </div>
      </div>
    </footer>
  );
}

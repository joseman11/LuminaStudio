export default function Footer() {
  return (
    <footer className="border-t border-[var(--line)] bg-[var(--sand)]">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8 py-14">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <div className="font-display text-3xl tracking-[0.12em]">LÚMINA</div>
            <p className="mt-4 text-[14px] leading-6 text-[var(--stone)] max-w-sm">
              Estudio contemporáneo en Chamberí. Citas con calma, sin prisa, con atención plena. Abierto de martes a sábado.
            </p>
            <div className="mt-6 text-[13px] leading-5 text-[var(--ink-soft)]">
              <div>Calle de Almagro 22, 28010 Madrid</div>
              <div className="mt-1">
                <a href="tel:+34910000000" className="underline decoration-[var(--line-strong)] underline-offset-4">
                  91 000 00 00
                </a>{" "}
                · hola@luminastudio.es
              </div>
            </div>
          </div>
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 text-sm">
            <div>
              <div className="text-[11px] tracking-[0.16em] uppercase text-[var(--stone)] mb-4">Horario</div>
              <div className="space-y-2 leading-6 text-[var(--ink-soft)]">
                <div>Mar–Vie 10:00 – 20:00</div>
                <div>Sábado 09:30 – 19:00</div>
                <div className="text-[var(--stone)]">Dom–Lun cerrado</div>
              </div>
            </div>
            <div>
              <div className="text-[11px] tracking-[0.16em] uppercase text-[var(--stone)] mb-4">Explorar</div>
              <div className="flex flex-col gap-2">
                <a href="#servicios" className="hover:underline underline-offset-4">Servicios</a>
                <a href="#equipo" className="hover:underline underline-offset-4">Equipo</a>
                <a href="#lookbook" className="hover:underline underline-offset-4">Lookbook</a>
                <a href="#reservar" className="hover:underline underline-offset-4">Reservar</a>
              </div>
            </div>
            <div>
              <div className="text-[11px] tracking-[0.16em] uppercase text-[var(--stone)] mb-4">Nota</div>
              <p className="text-[13px] leading-5 text-[var(--stone)]">
                Este es un proyecto ficticio — marca Lúmina Studio creada para demostrar una experiencia de reserva real.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-[var(--line)] flex flex-col sm:flex-row justify-between gap-3 text-[12px] tracking-[0.08em] uppercase text-[var(--stone)]">
          <span>© 2026 Lúmina Studio</span>
          <span className="normal-case tracking-normal text-[12px]">Diseño editorial · Hecho con cuidado en Madrid</span>
        </div>
      </div>
    </footer>
  );
}

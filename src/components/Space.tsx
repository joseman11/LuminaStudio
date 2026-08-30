export default function Space() {
  return (
    <section suppressHydrationWarning id="espacio" className="bg-[var(--brown)] text-white overflow-hidden">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8 py-10 lg:py-14">
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5">
            <div className="text-[11px] tracking-[0.12em] uppercase font-[700] text-[var(--blush)]">El espacio</div>
            <h2 className="font-display text-[36px] lg:text-[42px] leading-[0.9] mt-3">
              Luz natural,<br />
              patio con <br />
              <span className="font-display-italic text-[var(--blush)]">bugambilias.</span>
            </h2>
            <div className="mt-6 space-y-4 text-[14px] leading-7 text-white/80">
              <p>
                Una casa de Reforma con techos altos y patio interior. No hay música alta ni prisa. Puedes venir sola, con tu hija después de la escuela, y estar a gusto con el aire fresco.
              </p>
              <p>
                Productos botánicos cuando podemos: Davines, Aveda y Xoco de Morelos. Tijeras japonesas, toallas suaves, café de Coatepec. Lo esencial, bien elegido.
              </p>
            </div>

            <div className="mt-6 bg-white text-[var(--brown)] p-5 border border-white/20">
              <div className="font-[700] text-[13px]">Av. Teopanzolco 408, Col. Reforma</div>
              <div className="text-[12px] leading-5 text-[var(--ink-soft)]">Entre Río Mayo y Plan de Ayala · A 1 cuadra de Plaza Cuernavaca</div>
              <div className="mt-3 flex flex-wrap gap-2">
                <a href="https://maps.google.com/?q=Av+Teopanzolco+408+Cuernavaca" target="_blank" className="h-8 px-3 bg-[var(--terracotta)] text-white inline-flex items-center text-[11px] font-[700] hover:bg-[var(--terracotta-hover)]">
                  Ver en Maps →
                </a>
                <span className="inline-flex h-8 px-3 bg-[var(--sand)] border border-[var(--line)] items-center text-[11px] font-[600] text-[var(--brown)]">Ruta 14 y 18 en la esquina</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3">
              <div className="bg-white/10 border border-white/10 p-3 text-center">
                <div className="text-[11px] tracking-[0.08em] uppercase opacity-60">Productos</div>
                <div className="text-[12px] font-[600] mt-1">Aveda · Davines</div>
              </div>
              <div className="bg-white/10 border border-white/10 p-3 text-center">
                <div className="text-[11px] tracking-[0.08em] uppercase opacity-60">Capacidad</div>
                <div className="text-[12px] font-[600] mt-1">4 puestos</div>
              </div>
              <div className="bg-[var(--mustard)] p-3 text-center text-[var(--brown)]">
                <div className="text-[11px] tracking-[0.08em] uppercase opacity-60">Wi-Fi</div>
                <div className="text-[12px] font-[700] mt-1">+ revistas</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-12 gap-3">
            <div className="col-span-8 aspect-[4/5] overflow-hidden border border-white/20">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&h=1000&fit=crop" alt="Interior Lúmina Cuernavaca" className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div className="col-span-4 flex flex-col gap-3">
              <div className="aspect-square overflow-hidden border border-white/20">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=600&h=600&fit=crop" alt="Productos" className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="flex-1 bg-[var(--blush)] text-[var(--brown)] p-5 flex flex-col justify-center">
                <div className="text-[11px] tracking-[0.08em] uppercase font-[700] opacity-60">Filosofía</div>
                <div className="mt-2 text-[13px] leading-6 font-[500] italic">“Hacer poco, pero hacerlo muy bien. Y tratar a cada persona como si fuera la única del día.”</div>
                <div className="mt-2 text-[11px] font-[700] tracking-[0.06em] uppercase">— Sofía, directora</div>
              </div>
            </div>
            <div className="col-span-12 aspect-[16/7] overflow-hidden border border-white/20">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1200&h=500&fit=crop" alt="Salón amplio" className="w-full h-full object-cover" loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

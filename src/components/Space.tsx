export default function Space(){
  return (
    <section id="espacio" className="mx-auto max-w-[1280px] px-6 lg:px-8 py-12 lg:py-16">
      <div className="grid lg:grid-cols-12 gap-8">
        <div className="lg:col-span-5">
          <div className="text-[11px] tracking-[0.18em] uppercase text-[var(--stone)]">El espacio</div>
          <h2 className="font-display text-[36px] leading-[0.95] mt-3">Luz natural,<br/>silencio justo, <br/><span className="font-display-italic">café recién hecho.</span></h2>
          <div className="mt-6 space-y-4 text-[14px] leading-7 text-[var(--stone)]">
            <p>Abrimos en 2018 en un piso de Chamberí con techos altos. Queríamos un salón donde no haya prisa ni música alta. Donde puedas venir sola y estar a gusto.</p>
            <p>Trabajamos con productos de origen botánico, sin testado en animales. Tijeras japonesas, capas limpias, toallas suaves. Lo esencial, bien elegido.</p>
          </div>
          <div className="mt-8 grid grid-cols-3 gap-4 border-t border-[var(--line)] pt-6">
            <div>
              <div className="text-[12px] font-[500]">Productos</div>
              <div className="text-[12px] leading-4 text-[var(--stone)] mt-1">Aveda, Davines, E.Mi</div>
            </div>
            <div>
              <div className="text-[12px] font-[500]">Capacidad</div>
              <div className="text-[12px] leading-4 text-[var(--stone)] mt-1">4 puestos, sin agobio</div>
            </div>
            <div>
              <div className="text-[12px] font-[500]">Wi-Fi</div>
              <div className="text-[12px] leading-4 text-[var(--stone)] mt-1">Y revistas, no pantallas</div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 grid grid-cols-12 gap-3">
          <div className="col-span-8 aspect-[4/5] overflow-hidden border border-[var(--line)] bg-[var(--sand)]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://images.unsplash.com/photo-1634449571010-02389ed0f357?w=800&h=1000&fit=crop" alt="Interior Lúmina" className="w-full h-full object-cover" />
          </div>
          <div className="col-span-4 flex flex-col gap-3">
            <div className="aspect-square overflow-hidden border border-[var(--line)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=600&h=600&fit=crop" alt="Detalle producto" className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 bg-[var(--sand)] border border-[var(--line)] p-5 flex flex-col justify-center">
              <div className="text-[11px] tracking-[0.12em] uppercase text-[var(--stone)]">Filosofía</div>
              <div className="mt-2 text-[13px] leading-6 italic">“Hacer poco, pero hacerlo muy bien. Y tratar a cada persona como si fuera la única del día.”</div>
              <div className="mt-2 text-[11px] tracking-[0.08em] uppercase text-[var(--stone)]">— Sofía, directora</div>
            </div>
          </div>
          <div className="col-span-12 aspect-[16/7] overflow-hidden border border-[var(--line)]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1200&h=500&fit=crop" alt="Salón amplio" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}

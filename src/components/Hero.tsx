"use client";

export default function Hero() {
  return (
    <section suppressHydrationWarning className="relative overflow-hidden bg-[var(--sand)]">
      {/* soft paper block behind */}
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8 pt-8 lg:pt-12 pb-10 lg:pb-0">
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-0 items-start">
          {/* Text - asymmetric, editorial */}
          <div className="lg:col-span-6 lg:pr-6 flex flex-col justify-center lg:min-h-[640px] py-2 relative z-10">
            <div className="inline-flex items-center gap-3">
              <span className="px-3 py-1 bg-white border border-[var(--line)] text-[11px] tracking-[0.12em] uppercase font-[600] text-[var(--ink-soft)]">
                Reforma · Cuernavaca · desde 2018
              </span>
              <span className="hidden sm:inline-flex items-center gap-1.5 text-[12px] font-[500] text-[var(--ink-soft)]">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--terracotta)]" /> Abierto hoy 10–19h
              </span>
            </div>

            <h1 className="mt-6 font-display text-[54px] sm:text-[62px] lg:text-[74px] leading-[0.85] tracking-[-0.04em]">
              <span className="block">Date</span>
              <span className="block font-display-italic font-[700] text-[var(--terracotta)]">un rato</span>
              <span className="block">para ti.</span>
            </h1>

            <p className="mt-5 max-w-[40ch] text-[15px] leading-7 text-[var(--ink-soft)]">
              Sin llamadas. Sin complicaciones. Elige lo que necesitas, nosotros nos encargamos del resto. Tu próximo cambio empieza aquí.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="#reservar"
                className="inline-flex items-center justify-center gap-2 bg-[var(--brown)] text-white px-7 h-[52px] text-[14px] font-[600] hover:bg-[var(--ink)] transition-colors"
              >
                Reservar una cita <span aria-hidden>→</span>
              </a>
              <a
                href="#finder"
                className="inline-flex items-center justify-center bg-white border border-[var(--line)] px-6 h-[52px] text-[13px] font-[600] hover:bg-[var(--paper)] transition-colors"
              >
                No sé qué elegir
              </a>
            </div>

            <div className="mt-6 flex items-center gap-6 text-[13px] text-[var(--stone)]">
              <span className="hidden sm:flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[var(--success)]" /> Citas hoy disponibles
              </span>
              <span className="flex items-center gap-1.5">
                ★ 4.9 <span className="text-[var(--stone)]">· 342 reseñas</span>
              </span>
            </div>

            {/* little handmade note - desktop */}
            <div className="hidden lg:block mt-10 rotate-[-0.5deg] bg-white border border-[var(--line)] p-4 max-w-[300px]">
              <div className="text-[13px] leading-5 italic text-[var(--ink-soft)]">
                “Salí con el mismo corte, pero mejor. Se nota cuando alguien corta pensando en cómo te peinas en casa.”
              </div>
              <div className="mt-2 text-[11px] font-[600] tracking-[0.08em] uppercase text-[var(--stone)]">— Elena · Jiutepec, clienta desde 2021</div>
            </div>
          </div>

          {/* Visual - big photo with solid blocks */}
          <div className="lg:col-span-6 relative lg:min-h-[640px] flex flex-col justify-end">
            {/* blush block behind */}
            <div className="absolute inset-0 lg:left-6 top-6 lg:top-10 bottom-0 bg-[var(--blush)] hidden lg:block" aria-hidden />
            <div className="absolute -right-6 -top-6 w-24 h-24 bg-[var(--mustard)] hidden lg:grid place-items-center rotate-3" aria-hidden>
              <span className="font-display text-[11px] leading-[1] text-center text-[var(--brown)]">
                ETERNA
                <br />
                PRIMAVERA
              </span>
            </div>

            <div className="relative grid grid-cols-12 gap-3 lg:gap-4 lg:pl-10 items-end">
              <div className="col-span-8">
                <div className="relative aspect-[4/5.2] overflow-hidden bg-white border border-[var(--line)]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://images.unsplash.com/photo-1560869713-7d0a29430803?w=900&h=1100&fit=crop"
                    alt="Corte bob pulido - clienta Lúmina"
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                  <div className="absolute top-3 left-3 bg-[var(--brown)] text-white px-3 py-1 text-[11px] tracking-[0.08em] uppercase font-[600]">Nuevo en Cuernavaca</div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-white/95 backdrop-blur-sm border-t border-[var(--line)] flex justify-between items-end">
                    <div>
                      <div className="text-[11px] tracking-[0.12em] uppercase text-[var(--stone)]">Editorial primavera</div>
                      <div className="font-display text-[18px] leading-none mt-1">Precisión tranquila</div>
                    </div>
                    <span className="hidden sm:inline text-[12px] underline underline-offset-4">Ver lookbook</span>
                  </div>
                </div>
              </div>

              <div className="col-span-4 flex flex-col gap-3">
                <div className="aspect-[3/3.8] overflow-hidden bg-white border border-[var(--line)]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&h=800&fit=crop"
                    alt="Manicura nude detalle"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="bg-[var(--brown)] text-white p-4 lg:p-5">
                  <div className="text-[11px] tracking-[0.12em] uppercase opacity-60">Esta semana</div>
                  <div className="mt-2 space-y-1 text-[13px] leading-5">
                    <div className="flex justify-between">
                      <span>Mar–Vie</span>
                      <span className="opacity-80">10–19h</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sábado</span>
                      <span className="opacity-80">09–18h</span>
                    </div>
                  </div>
                  <a href="#espacio" className="mt-3 inline-flex text-[11px] tracking-[0.08em] uppercase underline underline-offset-4 opacity-90 hover:opacity-100">
                    Ver espacio →
                  </a>
                </div>
                <div className="hidden lg:block aspect-square overflow-hidden bg-[var(--sand)] border border-[var(--line)] grid place-items-center p-4 text-center">
                  <div>
                    <div className="font-display text-2xl leading-none">8</div>
                    <div className="text-[11px] tracking-[0.1em] uppercase text-[var(--stone)]">años en Reforma</div>
                    <div className="mt-2 text-[12px] leading-4 text-[var(--ink-soft)]">A 5 min de Galerías, con patio y café</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* mobile bottom note - subtle */}
        <div className="lg:hidden mt-6 border-t border-[var(--line)] pt-4 flex justify-between text-[11px] tracking-[0.08em] uppercase text-[var(--stone)]">
          <span>Reforma · 8 años</span>
          <span>777 310 5678</span>
        </div>
      </div>
    </section>
  );
}

"use client";

export default function Hero() {
  return (
    <section className="mx-auto max-w-[1280px] px-6 lg:px-8 pt-8 lg:pt-12 pb-10">
      <div className="grid lg:grid-cols-12 gap-8 lg:gap-6 items-start">
        {/* Left editorial */}
        <div className="lg:col-span-5 flex flex-col justify-between lg:min-h-[640px] py-2">
          <div>
            <div className="inline-flex items-center gap-2 text-[11px] tracking-[0.18em] uppercase text-[var(--stone)]">
              <span className="w-6 h-px bg-[var(--line-strong)]" /> Chamberí · desde 2018
            </div>
            <h1 className="font-display mt-6 text-[46px] sm:text-[56px] lg:text-[68px] leading-[0.9]">
              Tu tiempo
              <br />
              <span className="font-display-italic">también</span>
              <br />
              merece
              <br />
              atención.
            </h1>
            <p className="mt-6 max-w-[36ch] text-[15px] leading-7 text-[var(--stone)]">
              No es solo un corte o un color. Es una hora para ti, sin interrupciones, con alguien que te mira y te escucha. Reserva con calma.
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-4">
            <a
              href="#reservar"
              className="inline-flex items-center justify-between bg-[var(--ink)] text-white px-6 h-[52px] max-w-[340px] group"
            >
              <span className="text-[13px] tracking-[0.14em] uppercase font-[500]">Reservar una cita</span>
              <span className="text-lg leading-none group-hover:translate-x-1 transition-transform">→</span>
            </a>
            <div className="flex items-center gap-6 text-[13px] text-[var(--stone)]">
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--success)]" /> Citas hoy disponibles
              </span>
              <a href="#finder" className="underline decoration-[var(--line-strong)] underline-offset-4 hover:text-[var(--ink)]">
                No sé qué reservar
              </a>
            </div>
          </div>

          <div className="hidden lg:flex gap-10 mt-10 pt-8 border-t border-[var(--line)]">
            <div>
              <div className="font-display text-3xl">4.9</div>
              <div className="text-[11px] tracking-[0.12em] uppercase text-[var(--stone)]">200+ reseñas</div>
            </div>
            <div>
              <div className="font-display text-3xl">12 min</div>
              <div className="text-[11px] tracking-[0.12em] uppercase text-[var(--stone)]">Respuesta media</div>
            </div>
            <div>
              <div className="font-display text-3xl">5</div>
              <div className="text-[11px] tracking-[0.12em] uppercase text-[var(--stone)]">Especialistas</div>
            </div>
          </div>
        </div>

        {/* Right image editorial with offset */}
        <div className="lg:col-span-7 relative">
          <div className="grid grid-cols-12 gap-3 lg:gap-4">
            <div className="col-span-8">
              <div className="relative aspect-[4/5] overflow-hidden bg-[var(--sand)]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1560869713-7d0a29430803?w=900&h=1100&fit=crop"
                  alt="Mujer con corte bob pulido, editorial"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/40 to-transparent">
                  <div className="text-white text-[11px] tracking-[0.14em] uppercase">Editorial — Otoño 2025</div>
                  <div className="text-white font-display text-xl leading-none mt-1">Precisión tranquila</div>
                </div>
              </div>
            </div>
            <div className="col-span-4 flex flex-col gap-3 lg:gap-4">
              <div className="aspect-[3/4] overflow-hidden bg-[var(--sand-deep)]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&h=800&fit=crop"
                  alt="Detalle manicura"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-[var(--sand)] p-5 flex-1 flex flex-col justify-center">
                <div className="text-[11px] tracking-[0.14em] uppercase text-[var(--stone)]">Horario esta semana</div>
                <div className="mt-3 space-y-1.5 text-[13px] leading-5">
                  <div className="flex justify-between">
                    <span>Mar–Vie</span>
                    <span className="text-[var(--stone)]">10–20h</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sábado</span>
                    <span className="text-[var(--stone)]">09:30–19h</span>
                  </div>
                </div>
                <a href="#espacio" className="mt-4 text-[12px] tracking-[0.1em] uppercase underline underline-offset-4">
                  Ver el espacio
                </a>
              </div>
              <div className="hidden lg:block aspect-square overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1634449571010-02389ed0f357?w=600&h=600&fit=crop"
                  alt="Interior salón"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Floating quote - desktop only */}
          <div className="hidden lg:block absolute -left-10 bottom-10 bg-white border border-[var(--line)] p-6 max-w-[280px] shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
            <div className="text-[13px] leading-6 italic text-[var(--ink-soft)]">
              “Salí con el mismo corte, pero mejor. Se nota cuando alguien corta pensando en cómo te peinas tú en casa.”
            </div>
            <div className="mt-3 text-[11px] tracking-[0.12em] uppercase text-[var(--stone)]">— Elena · clienta desde 2021</div>
          </div>
        </div>
      </div>
    </section>
  );
}

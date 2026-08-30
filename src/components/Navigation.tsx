"use client";
import { useState, useEffect } from "react";

const links = [
  { href: "#servicios", label: "Servicios" },
  { href: "#equipo", label: "Equipo" },
  { href: "#lookbook", label: "Lookbook" },
  { href: "#espacio", label: "Espacio" },
  { href: "#citas", label: "Mis citas" },
];

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`sticky top-0 z-40 backdrop-blur-md border-b transition-colors ${
        scrolled ? "bg-[var(--paper)]/90 border-[var(--line)]" : "bg-[var(--paper)]/60 border-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8 h-[64px] flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <span className="font-display text-[22px] tracking-[0.18em] font-[400]">LÚMINA</span>
          <span className="hidden sm:inline h-4 w-px bg-[var(--line-strong)]" />
          <span className="hidden sm:inline text-[11px] tracking-[0.16em] text-[var(--stone)] font-[500]">STUDIO · MADRID</span>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[13px] tracking-[0.14em] uppercase text-[var(--ink-soft)] hover:text-[var(--ink)] transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#reservar"
            className="hidden sm:inline-flex items-center justify-center h-9 px-6 bg-[var(--ink)] text-white text-[13px] tracking-[0.1em] uppercase font-[500] hover:bg-black transition-colors"
          >
            Reservar
          </a>
          <button
            aria-label="Abrir menú"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className="lg:hidden w-9 h-9 grid place-items-center border border-[var(--line)]"
          >
            <span className="space-y-1.5">
              <span className={`block w-4 h-px bg-[var(--ink)] transition ${open ? "rotate-45 translate-y-1" : ""}`} />
              <span className={`block w-4 h-px bg-[var(--ink)] transition ${open ? "-rotate-45 -translate-y-1" : ""}`} />
            </span>
          </button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden border-t border-[var(--line)] bg-[var(--paper)]">
          <nav className="px-6 py-6 flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-[14px] tracking-[0.12em] uppercase py-2 border-b border-[var(--line)]/60"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#reservar"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex justify-center h-11 items-center bg-[var(--ink)] text-white tracking-[0.12em] uppercase text-sm"
            >
              Reservar cita
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

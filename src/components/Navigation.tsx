"use client";
import { useState, useEffect } from "react";
import Logo from "./Logo";

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
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-40 border-b transition-colors ${
        scrolled ? "bg-[var(--paper)] border-[var(--line)]" : "bg-[var(--paper)] border-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8 h-[68px] flex items-center justify-between gap-6">
        <a href="#" aria-label="Lúmina Studio Cuernavaca - Inicio" className="shrink-0">
          <Logo />
        </a>

        <nav className="hidden lg:flex items-center gap-7" aria-label="Navegación principal">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[13px] font-[500] tracking-[-0.01em] text-[var(--ink-soft)] hover:text-[var(--ink)] transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <span className="hidden lg:flex items-center gap-2 text-[12px] text-[var(--stone)] mr-2">
            <span className="w-2 h-2 rounded-full bg-[var(--success)] animate-pulse" />
            Hay citas hoy
          </span>
          <a
            href="#reservar"
            className="inline-flex items-center justify-center h-[40px] px-6 bg-[var(--terracotta)] text-white text-[13px] font-[600] tracking-[-0.01em] hover:bg-[var(--terracotta-hover)] transition-colors"
          >
            Reservar cita
          </a>
          <button
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className="lg:hidden w-10 h-10 grid place-items-center border border-[var(--line)] bg-white"
          >
            <span className="relative w-4 h-3 block">
              <span className={`absolute left-0 w-4 h-[2px] bg-[var(--ink)] transition-all ${open ? "top-1.5 rotate-45" : "top-0"}`} />
              <span className={`absolute left-0 top-1.5 w-4 h-[2px] bg-[var(--ink)] transition-opacity ${open ? "opacity-0" : "opacity-100"}`} />
              <span className={`absolute left-0 w-4 h-[2px] bg-[var(--ink)] transition-all ${open ? "top-1.5 -rotate-45" : "top-3"}`} />
            </span>
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden absolute inset-x-0 top-[68px] bg-[var(--blush)] border-t border-[var(--line)] max-h-[calc(100dvh-68px)] overflow-auto">
          <nav className="px-6 py-8 flex flex-col" aria-label="Navegación móvil">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-display text-[28px] leading-none py-3 border-b border-[var(--ink)]/10"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#reservar"
              onClick={() => setOpen(false)}
              className="mt-6 inline-flex justify-center h-12 items-center bg-[var(--brown)] text-white text-[14px] font-[600]"
            >
              Reservar ahora →
            </a>
            <div className="mt-6 flex items-center gap-3 text-[13px] text-[var(--ink-soft)]">
              <span>Av. Teopanzolco 408</span>
              <span className="w-1 h-1 rounded-full bg-[var(--ink)]" />
              <a href="tel:+527773105678" className="underline underline-offset-4">
                777 310 5678
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

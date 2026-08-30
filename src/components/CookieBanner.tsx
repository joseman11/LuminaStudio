"use client";
import { useEffect, useState } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const v = localStorage.getItem("lumina_cookie_consent");
    if (!v) setVisible(true);
  }, []);
  if (!visible) return null;
  return (
    <div className="fixed bottom-0 inset-x-0 z-50 p-4 lg:p-6 pointer-events-none">
      <div className="mx-auto max-w-[640px] pointer-events-auto">
        <div className="bg-white border border-[var(--line)] p-5 flex flex-col gap-4 shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
          <div>
            <div className="text-[11px] tracking-[0.12em] uppercase text-[var(--stone)]">Cookies esenciales</div>
            <p className="mt-1 text-[13px] leading-5 text-[var(--ink-soft)]">
              Usamos almacenamiento local para recordar tus citas y mejorar tu experiencia. Consulta nuestro{" "}
              <a href="/privacidad" className="underline underline-offset-4">
                Aviso de Privacidad
              </a>
              .
            </p>
          </div>
          <div className="flex gap-3 justify-end">
            <button
              onClick={() => {
                localStorage.setItem("lumina_cookie_consent", "necessary");
                setVisible(false);
              }}
              className="h-9 px-4 border border-[var(--line)] bg-[var(--sand)] text-[11px] tracking-[0.1em] uppercase hover:bg-white"
            >
              Solo necesarias
            </button>
            <button
              onClick={() => {
                localStorage.setItem("lumina_cookie_consent", "all");
                setVisible(false);
              }}
              className="h-9 px-5 bg-[var(--ink)] text-white text-[11px] tracking-[0.1em] uppercase hover:bg-black"
            >
              Aceptar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

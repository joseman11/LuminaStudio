"use client";
import { BookingDraft } from "@/types";
import { useRef } from "react";

export default function StepPersonalize({ draft, setDraft }: { draft: BookingDraft; setDraft: (d:BookingDraft)=>void }) {
  const fileRef = useRef<HTMLInputElement>(null);

  function onFile(e: React.ChangeEvent<HTMLInputElement>){
    const f = e.target.files?.[0];
    if(!f) return;
    const reader = new FileReader();
    reader.onload = ()=> setDraft({ ...draft, referenceImage: reader.result as string });
    reader.readAsDataURL(f);
  }

  return (
    <div className="grid lg:grid-cols-12 gap-8">
      <div className="lg:col-span-7 space-y-8">
        <div>
          <div className="text-[13px] font-[500]">¿Es tu primera visita?</div>
          <div className="mt-3 flex gap-3">
            {[
              { v: true, label: "Sí, es la primera vez" },
              { v: false, label: "No, ya he venido" },
            ].map(o=>(
              <button
                key={String(o.v)}
                onClick={()=>setDraft({...draft, firstVisit: o.v})}
                className={`flex-1 h-12 border text-[13px] ${draft.firstVisit===o.v ? "bg-[var(--ink)] text-white border-[var(--ink)]" : "bg-white border-[var(--line)] hover:bg-[var(--sand)]"}`}
              >
                {o.label}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="text-[13px] font-[500]">¿Tienes una idea en mente?</label>
          <p className="text-[12px] text-[var(--stone)] mt-1">Cuéntanos qué te gustaría o qué te preocupa. Lo leerá tu especialista antes de la cita.</p>
          <textarea
            value={draft.note}
            onChange={(e)=>setDraft({...draft, note: e.target.value})}
            rows={4}
            placeholder="Ej: Quiero aclarar un tono pero sin perder naturalidad. Llevo mechas de hace 4 meses..."
            className="mt-3 w-full border border-[var(--line)] bg-white p-4 text-[14px] leading-6 placeholder:text-[var(--stone-light)] focus:outline-none focus:border-[var(--ink)]"
          />
          <div className="mt-1 text-right text-[11px] text-[var(--stone-light)]">{draft.note.length}/300</div>
        </div>
      </div>

      <div className="lg:col-span-5">
        <div className="border border-[var(--line)] bg-[var(--sand)] p-6">
          <div className="text-[13px] font-[500]">Imagen de referencia</div>
          <p className="text-[12px] leading-5 text-[var(--stone)] mt-1">Opcional. Sube una foto de inspiración. Se guarda solo en tu dispositivo.</p>

          <div className="mt-4">
            {!draft.referenceImage ? (
              <button onClick={()=>fileRef.current?.click()} className="w-full h-[180px] border border-dashed border-[var(--line-strong)] bg-white grid place-items-center hover:bg-[var(--paper)] transition">
                <span className="text-center">
                  <span className="block text-[13px] tracking-[0.08em] uppercase">Subir imagen</span>
                  <span className="block text-[12px] text-[var(--stone)] mt-1">JPG o PNG · máx 5MB</span>
                </span>
              </button>
            ) : (
              <div className="relative bg-white border border-[var(--line)] p-2">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={draft.referenceImage} alt="Referencia" className="w-full h-[180px] object-cover" />
                <button onClick={()=>setDraft({...draft, referenceImage: null})} className="absolute top-3 right-3 bg-white border border-[var(--line)] px-3 h-7 text-[11px] tracking-[0.08em] uppercase">Quitar</button>
              </div>
            )}
            <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={onFile} />
          </div>

          <div className="mt-4 text-[11px] leading-4 text-[var(--stone)]">
            La imagen no se envía a ningún servidor. Solo se usa como vista previa local para tu cita.
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";
import { BookingDraft } from "@/types";
import { useRef } from "react";

export default function StepPersonalize({ draft, setDraft }: { draft: BookingDraft; setDraft: (d:BookingDraft)=>void }) {
  const fileRef = useRef<HTMLInputElement>(null);
  function onFile(e: React.ChangeEvent<HTMLInputElement>){
    const f = e.target.files?.[0];
    if(!f) return;
    if (f.size > 5 * 1024 * 1024) { alert("La imagen no debe superar 5MB."); return; }
    if (!f.type.startsWith("image/")) { alert("Solo JPG o PNG."); return; }
    const reader = new FileReader();
    reader.onload = ()=> setDraft({ ...draft, referenceImage: reader.result as string });
    reader.readAsDataURL(f);
  }
  return (
    <div className="grid lg:grid-cols-12 gap-6">
      <div className="lg:col-span-7 space-y-6">
        <div className="bg-[var(--blush)] border border-[var(--line)] p-5">
          <div className="text-[13px] font-[700]">¿Es tu primera vez por aquí?</div>
          <p className="text-[12px] text-[var(--ink-soft)] mt-1">Así te recibimos con más calma y te explicamos todo.</p>
          <div className="mt-4 grid grid-cols-2 gap-3">
            {[{v:true,l:"Sí, primera vez ✨"},{v:false,l:"No, ya vine"}].map(o=>(
              <button key={String(o.v)} onClick={()=>setDraft({...draft, firstVisit: o.v})}
                className={`h-12 border text-[13px] font-[600] ${draft.firstVisit===o.v ? "bg-[var(--brown)] text-white border-[var(--brown)]" : "bg-white border-[var(--line)] hover:bg-[var(--sand)]"}`}>
                {o.l}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label htmlFor="idea" className="text-[13px] font-[700]">¿Tienes una idea en mente?</label>
          <p className="text-[12px] text-[var(--stone)] mt-1">Lo que sea — una foto, una duda, un “quiero algo más claro pero natural”. Lo lee tu especialista antes de la cita.</p>
          <textarea id="idea" value={draft.note} onChange={(e)=>setDraft({...draft, note: e.target.value})} rows={4} maxLength={300}
            placeholder="Ej: Llevo mechas de hace 4 meses y el sol de Cuernavaca me las puso naranjas..."
            className="mt-3 w-full border border-[var(--line)] bg-white p-4 text-[14px] leading-6 placeholder:text-[var(--stone-light)] focus:outline-none focus:border-[var(--terracotta)] focus:ring-1 focus:ring-[var(--terracotta)]"
            aria-describedby="idea-count" />
          <div id="idea-count" className="mt-1 text-right text-[11px] text-[var(--stone-light)]" aria-live="polite">{draft.note.length}/300</div>
        </div>
      </div>

      <div className="lg:col-span-5">
        <div className="border border-[var(--line)] bg-[var(--sand)] p-5">
          <div className="text-[13px] font-[700]">Foto de inspiración <span className="font-[400] text-[var(--stone)]">· opcional</span></div>
          <p className="text-[12px] leading-5 text-[var(--stone)] mt-1">Si tienes una referencia, súbela. Se queda solo en tu cel, no se sube a ningún servidor.</p>
          <div className="mt-4">
            {!draft.referenceImage ? (
              <button onClick={()=>fileRef.current?.click()} className="w-full h-[180px] border border-dashed border-[var(--terracotta)]/40 bg-white grid place-items-center hover:bg-[var(--blush)] transition group">
                <span className="text-center">
                  <span className="inline-flex w-8 h-8 bg-[var(--terracotta)] text-white place-items-center justify-center text-lg leading-none group-hover:scale-105 transition">+</span>
                  <span className="block mt-2 text-[12px] font-[700] tracking-[0.06em] uppercase">Subir imagen</span>
                  <span className="block text-[11px] text-[var(--stone)]">JPG o PNG · máx 5MB</span>
                </span>
              </button>
            ) : (
              <div className="relative bg-white border border-[var(--line)] p-2">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={draft.referenceImage} alt="Referencia" className="w-full h-[180px] object-cover" />
                <button onClick={()=>setDraft({...draft, referenceImage: null})} className="absolute top-3 right-3 bg-white border border-[var(--line)] px-3 h-7 text-[11px] font-[700] uppercase">Quitar</button>
              </div>
            )}
            <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={onFile} />
          </div>
        </div>
      </div>
    </div>
  );
}

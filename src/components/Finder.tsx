"use client";
import { useState } from "react";
import { FinderAnswer } from "@/types";

function recommend(ans: FinderAnswer): { title:string; desc:string; serviceIds:string[] }{
  if(ans.intent==="evento") return { title:"Peinado Evento + Mirada & Contorno", desc:"Preparación completa sin improvisar. Peinado que aguanta y mirada descansada para fotos que duran.", serviceIds:["styling-evento","facial-contorno"] };
  if(ans.intent==="cambio" && ans.time==="tiempo") return { title:"Corte Transformación + Color Luz", desc:"Cambio meditado. Corte que redefine y luz que acompaña. Dos horas para verte distinta sin perderte.", serviceIds:["corte-transformacion","color-luz"] };
  if(ans.intent==="cambio") return { title:"Corte Precisión + Ritual Nutrición", desc:"Un corte que se entiende con tu textura y un tratamiento que devuelve cuerpo.", serviceIds:["corte-presicion","tratamiento-nutricion"] };
  if(ans.intent==="cuidado") return { title:"Ritual Nutrición + Facial Esencial", desc:"Pausa real. Cabello y piel cuidados con productos silenciosos y manos lentas.", serviceIds:["tratamiento-nutricion","facial-essencial"] };
  if(ans.time==="menos1h") return { title:"Manicura Lúmina o Mirada & Contorno", desc:"Menos de una hora, efecto inmediato. Elige manos impecables o mirada descansada.", serviceIds:["manicura-lumina"] };
  if(ans.intent==="mantenimiento") return { title:"Corte Precisión", desc:"Mantenimiento limpio. Ajuste de forma, lavado ritual y acabado que crece bien.", serviceIds:["corte-presicion"] };
  return { title:"Corte Precisión + Equilibrio Cuero Cabelludo", desc:"Puesta a punto honesta. Corte y calma para cuero cabelludo.", serviceIds:["corte-presicion","tratamiento-scalp"] };
}

export default function Finder({ onReserve }: { onReserve:(ids:string[])=>void }){
  const [step, setStep]=useState(1);
  const [ans, setAns]=useState<Partial<FinderAnswer>>({});
  const [result, setResult]=useState<ReturnType<typeof recommend> | null>(null);

  function next(){
    if(step===3){
      const r= recommend(ans as FinderAnswer);
      setResult(r);
    } else setStep(s=>s+1);
  }

  return (
    <section id="finder" className="mx-auto max-w-[1280px] px-6 lg:px-8 py-14">
      <div className="grid lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-5">
          <div className="text-[11px] tracking-[0.18em] uppercase text-[var(--stone)]">Encuentra tu servicio</div>
          <h2 className="font-display text-[36px] leading-[0.95] mt-3">¿No sabes<br/>qué reservar?</h2>
          <p className="mt-3 text-[14px] leading-6 text-[var(--stone)]">Tres preguntas. Te proponemos un punto de partida — siempre podrás ajustarlo en la reserva.</p>
          <div className="hidden lg:block mt-8 border border-[var(--line)] bg-[var(--sand)] p-6">
            <div className="text-[12px] leading-5 italic text-[var(--ink-soft)]">“Vine sin idea. Me propusieron corte + tratamiento y fue justo lo que necesitaba. Sin vender nada de más.”</div>
            <div className="mt-2 text-[11px] tracking-[0.12em] uppercase text-[var(--stone)]">— Laura, 34</div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="border border-[var(--line)] bg-white p-6 lg:p-8">
            {!result ? (
              <>
                <div className="flex items-center gap-2 text-[11px] tracking-[0.14em] uppercase text-[var(--stone)]">
                  <span>Pregunta {step} de 3</span>
                  <span className="flex-1 h-px bg-[var(--line)] ml-2" />
                </div>

                {step===1 && (
                  <div className="mt-6">
                    <div className="text-[18px] font-[500]">¿Qué buscas hoy?</div>
                    <div className="mt-4 grid gap-2">
                      {[
                        {v:"cambio", l:"Un cambio", d:"Verte distinto, con criterio"},
                        {v:"mantenimiento", l:"Mantenimiento", d:"Mantener lo que ya funciona"},
                        {v:"evento", l:"Prepararme para un evento", d:"Boda, sesión, ocasión especial"},
                        {v:"cuidado", l:"Cuidado personal", d:"Pausa, mimo, respiro"},
                        {v:"duda", l:"No estoy seguro", d:"Exploramos juntos"},
                      ].map(o=>(
                        <button key={o.v} onClick={()=>setAns({...ans, intent:o.v as any})} className={`text-left border p-4 flex justify-between items-center ${ans.intent===o.v ? "border-[var(--ink)] bg-[var(--sand)]" : "border-[var(--line)] hover:bg-[var(--sand)]/50"}`}>
                          <div>
                            <div className="text-[14px] font-[500]">{o.l}</div>
                            <div className="text-[12px] text-[var(--stone)]">{o.d}</div>
                          </div>
                          <span className={`w-5 h-5 rounded-full border grid place-items-center ${ans.intent===o.v ? "border-[var(--ink)]" : "border-[var(--line-strong)]"}`}>{ans.intent===o.v && <span className="w-2.5 h-2.5 rounded-full bg-[var(--ink)]"/>}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {step===2 && (
                  <div className="mt-6">
                    <div className="text-[18px] font-[500]">¿Cuánto tiempo tienes?</div>
                    <div className="mt-4 grid gap-2">
                      {[
                        {v:"menos1h", l:"Menos de una hora"},
                        {v:"1-2h", l:"1–2 horas"},
                        {v:"tiempo", l:"Tengo tiempo"},
                      ].map(o=>(
                        <button key={o.v} onClick={()=>setAns({...ans, time:o.v as any})} className={`text-left border p-4 flex justify-between items-center ${ans.time===o.v ? "border-[var(--ink)] bg-[var(--sand)]" : "border-[var(--line)]"}`}>
                          <span className="text-[14px] font-[500]">{o.l}</span>
                          <span className={`w-5 h-5 rounded-full border grid place-items-center ${ans.time===o.v ? "border-[var(--ink)]" : "border-[var(--line-strong)]"}`}>{ans.time===o.v && <span className="w-2.5 h-2.5 rounded-full bg-[var(--ink)]"/>}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {step===3 && (
                  <div className="mt-6">
                    <div className="text-[18px] font-[500]">¿Es tu primera visita?</div>
                    <div className="mt-4 grid grid-cols-2 gap-3">
                      <button onClick={()=>setAns({...ans, firstVisit:true})} className={`h-12 border ${ans.firstVisit===true ? "bg-[var(--ink)] text-white border-[var(--ink)]" : "bg-white border-[var(--line)]"}`}>Sí</button>
                      <button onClick={()=>setAns({...ans, firstVisit:false})} className={`h-12 border ${ans.firstVisit===false ? "bg-[var(--ink)] text-white border-[var(--ink)]" : "bg-white border-[var(--line)]"}`}>No</button>
                    </div>
                  </div>
                )}

                <div className="mt-6 flex justify-between">
                  <button disabled={step===1} onClick={()=>setStep(s=>s-1)} className="text-[12px] tracking-[0.1em] uppercase underline underline-offset-4 disabled:opacity-30">Atrás</button>
                  <button
                    disabled={ (step===1 && !ans.intent) || (step===2 && !ans.time) || (step===3 && ans.firstVisit===undefined) }
                    onClick={next}
                    className="h-10 px-6 bg-[var(--ink)] text-white text-[12px] tracking-[0.12em] uppercase disabled:opacity-30"
                  >
                    {step===3 ? "Ver recomendación" : "Continuar"}
                  </button>
                </div>
              </>
            ) : (
              <div>
                <div className="text-[11px] tracking-[0.14em] uppercase text-[var(--accent)]">Recomendación para ti</div>
                <div className="font-display text-[26px] leading-none mt-2">{result.title}</div>
                <p className="mt-3 text-[14px] leading-6 text-[var(--stone)]">{result.desc}</p>
                <div className="mt-6 flex gap-3">
                  <button onClick={()=>onReserve(result.serviceIds)} className="h-11 px-6 bg-[var(--accent)] text-white text-[12px] tracking-[0.12em] uppercase">Reservar esta recomendación</button>
                  <button onClick={()=>{setResult(null); setStep(1); setAns({});}} className="h-11 px-6 border border-[var(--line)] text-[12px] tracking-[0.12em] uppercase">Empezar de nuevo</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

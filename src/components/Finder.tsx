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
    if(step===3){ const r= recommend(ans as FinderAnswer); setResult(r); } else setStep(s=>s+1);
  }

  return (
    <section suppressHydrationWarning id="finder" className="bg-[var(--blush)] border-y border-[var(--line)]">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8 py-10 lg:py-14">
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 bg-white border border-[var(--line)] px-3 py-1 text-[11px] font-[700] tracking-[0.08em] uppercase text-[var(--terracotta)]">¿No sabes qué elegir?</div>
            <h2 className="font-display text-[36px] lg:text-[42px] leading-[0.9] mt-4">Te ayudamos<br/>a decidir.</h2>
            <p className="mt-3 text-[14px] leading-6 text-[var(--ink-soft)]">Tres preguntas rápidas. Te proponemos un punto de partida — siempre puedes ajustarlo.</p>
            <div className="hidden lg:block mt-6 bg-white border border-[var(--line)] p-5 rotate-[0.5deg]">
              <div className="text-[13px] leading-5 italic">“Vine sin idea, con el cabello maltratado por el sol. Me propusieron corte + tratamiento y fue justo lo que necesitaba.”</div>
              <div className="mt-2 text-[11px] font-[700] tracking-[0.08em] uppercase text-[var(--stone)]">— Laura, 34 · Cuernavaca Centro</div>
            </div>
            <div className="hidden lg:flex mt-4 items-center gap-2 text-[12px] text-[var(--ink-soft)]">
              <span className="w-2 h-2 rounded-full bg-[var(--terracotta)]" /> 2 minutos · sin compromiso
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-white border border-[var(--line)] p-6 lg:p-7">
              {!result ? (
                <>
                  <div className="flex items-center gap-3">
                    <span className="px-2.5 py-1 bg-[var(--brown)] text-white text-[11px] font-[700]">Paso {step} / 3</span>
                    <div className="flex-1 h-1.5 bg-[var(--sand)] overflow-hidden">
                      <div className="h-full bg-[var(--terracotta)] transition-all" style={{ width: `${(step/3)*100}%` }} />
                    </div>
                  </div>

                  {step===1 && (
                    <div className="mt-6">
                      <div className="font-display text-[22px] leading-none">¿Qué buscas hoy?</div>
                      <div className="mt-4 grid gap-2">
                        {[
                          {v:"cambio", l:"Un cambio", d:"Verte distinto, con criterio"},
                          {v:"mantenimiento", l:"Mantenimiento", d:"Mantener lo que ya funciona"},
                          {v:"evento", l:"Prepararme para un evento", d:"Boda, sesión, ocasión especial"},
                          {v:"cuidado", l:"Cuidado personal", d:"Pausa, mimo, respiro"},
                          {v:"duda", l:"No estoy seguro", d:"Exploramos juntos"},
                        ].map(o=>(
                          <button key={o.v} onClick={()=>setAns({...ans, intent:o.v as any})} className={`text-left border p-4 flex justify-between items-center ${ans.intent===o.v ? "bg-[var(--terracotta)] text-white border-[var(--terracotta)]" : "bg-white border-[var(--line)] hover:bg-[var(--sand)]"}`}>
                            <div>
                              <div className="text-[14px] font-[700]">{o.l}</div>
                              <div className={`text-[12px] ${ans.intent===o.v ? "text-white/80" : "text-[var(--stone)]"}`}>{o.d}</div>
                            </div>
                            <span className={`w-6 h-6 grid place-items-center border text-xs ${ans.intent===o.v ? "bg-white text-[var(--terracotta)] border-white" : "bg-white border-[var(--line)]"}`}>{ans.intent===o.v ? "✓" : "+"}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {step===2 && (
                    <div className="mt-6">
                      <div className="font-display text-[22px] leading-none">¿Cuánto tiempo tienes?</div>
                      <div className="mt-4 grid gap-2">
                        {[
                          {v:"menos1h", l:"Menos de una hora", d:"Algo rápido y efectivo"},
                          {v:"1-2h", l:"1–2 horas", d:"Con calma"},
                          {v:"tiempo", l:"Tengo tiempo", d:"Me quiero dedicar la mañana"},
                        ].map(o=>(
                          <button key={o.v} onClick={()=>setAns({...ans, time:o.v as any})} className={`text-left border p-4 flex justify-between items-center ${ans.time===o.v ? "bg-[var(--brown)] text-white border-[var(--brown)]" : "bg-white border-[var(--line)] hover:bg-[var(--sand)]"}`}>
                            <div>
                              <div className="text-[14px] font-[700]">{o.l}</div>
                              <div className={`text-[12px] ${ans.time===o.v ? "text-white/70" : "text-[var(--stone)]"}`}>{o.d}</div>
                            </div>
                            <span className={`w-6 h-6 grid place-items-center border ${ans.time===o.v ? "bg-white text-[var(--brown)] border-white" : "bg-[var(--sand)] border-[var(--line)]"}`}>{ans.time===o.v ? "✓" : ""}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {step===3 && (
                    <div className="mt-6">
                      <div className="font-display text-[22px] leading-none">¿Es tu primera visita?</div>
                      <p className="text-[12px] text-[var(--stone)] mt-1">Te recibimos con más explicación si es la primera vez.</p>
                      <div className="mt-4 grid grid-cols-2 gap-3">
                        <button onClick={()=>setAns({...ans, firstVisit:true})} className={`h-14 border text-[14px] font-[700] ${ans.firstVisit===true ? "bg-[var(--terracotta)] text-white border-[var(--terracotta)]" : "bg-white border-[var(--line)] hover:bg-[var(--sand)]"}`}>Sí, primera vez</button>
                        <button onClick={()=>setAns({...ans, firstVisit:false})} className={`h-14 border text-[14px] font-[700] ${ans.firstVisit===false ? "bg-[var(--brown)] text-white border-[var(--brown)]" : "bg-white border-[var(--line)] hover:bg-[var(--sand)]"}`}>No, ya vine</button>
                      </div>
                    </div>
                  )}

                  <div className="mt-6 flex justify-between items-center">
                    <button disabled={step===1} onClick={()=>setStep(s=>s-1)} className="text-[13px] font-[600] underline underline-offset-4 disabled:opacity-30">← Atrás</button>
                    <button disabled={ (step===1 && !ans.intent) || (step===2 && !ans.time) || (step===3 && ans.firstVisit===undefined) }
                      onClick={next} className="h-10 px-6 bg-[var(--terracotta)] text-white text-[13px] font-[700] disabled:opacity-30 hover:bg-[var(--terracotta-hover)]">
                      {step===3 ? "Ver mi recomendación →" : "Continuar →"}
                    </button>
                  </div>
                </>
              ) : (
                <div>
                  <div className="inline-flex px-3 py-1 bg-[var(--mustard)] text-[11px] font-[700] tracking-[0.08em] uppercase text-[var(--brown)]">Recomendación para ti</div>
                  <div className="font-display text-[26px] leading-none mt-3">{result.title}</div>
                  <p className="mt-3 text-[14px] leading-6 text-[var(--ink-soft)]">{result.desc}</p>
                  <div className="mt-6 flex flex-col sm:flex-row gap-3">
                    <button onClick={()=>onReserve(result.serviceIds)} className="h-11 px-6 bg-[var(--brown)] text-white text-[13px] font-[700] hover:bg-black">Reservar esto →</button>
                    <button onClick={()=>{setResult(null); setStep(1); setAns({});}} className="h-11 px-6 border border-[var(--line)] bg-[var(--sand)] text-[13px] font-[600]">Empezar de nuevo</button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

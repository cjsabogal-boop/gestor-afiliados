"use client";

import { useState } from 'react';
import { Users, Video, Activity, Gavel, Hand, BarChart3, CheckCircle2, PlayCircle, Settings, X, Search, StopCircle, ArrowRight, ShieldAlert, Cpu } from 'lucide-react';

export default function AsambleasPage() {
  const [quorum, setQuorum] = useState(65.4);

  return (
    <div className="max-w-6xl mx-auto space-y-8 pb-20">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse shadow-[0_0_10px_#ef4444]" />
            <span className="text-red-500 text-xs font-black tracking-widest uppercase">En Vivo</span>
            <span className="text-white/40 text-xs">• Iniciada hace 45 mins</span>
          </div>
          <h1 className="text-3xl font-black text-white tracking-tight">Asamblea General Ordinaria 2026</h1>
          <p className="text-white/40 text-sm mt-1">Sala de control principal para moderación de intervenciones y votaciones.</p>
        </div>
        <div className="flex gap-3">
           <button className="px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm font-semibold transition-all flex items-center gap-2">
            <Settings size={16} /> Ajustes
          </button>
          <button className="px-5 py-2.5 rounded-xl bg-red-500/10 hover:bg-red-500/20 text-red-500 text-sm font-bold border border-red-500/20 transition-all flex items-center gap-2">
            <StopCircle size={16} />
            Finalizar Sesión
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Quorum & Activity */}
        <div className="space-y-6 lg:col-span-1">
          {/* Quorum Monitor */}
           <div className="bg-[#020617] border border-white/10 rounded-2xl p-6 relative overflow-hidden group shadow-2xl">
             <div className="absolute right-0 top-0 w-32 h-32 bg-[#0D9488]/10 rounded-full blur-[40px] opacity-100" />
             <div className="relative z-10 flex flex-col items-center text-center">
               <Activity size={32} className="text-[#0D9488] mb-4" />
               <p className="text-[10px] text-white/50 font-bold uppercase tracking-[0.2em] mb-1">Quórum Verificado</p>
               <h2 className="text-5xl font-black text-white">{quorum}%</h2>
               <div className="mt-6 w-full space-y-2">
                 <div className="w-full bg-white/5 rounded-full h-2 overflow-hidden shadow-inner">
                   <div className="bg-gradient-to-r from-[#01a877] to-[#0D9488] h-full relative transition-all duration-1000" style={{ width: `${quorum}%` }}>
                      <div className="absolute inset-0 bg-white/20 animate-pulse" />
                   </div>
                 </div>
                 <div className="flex justify-between text-xs font-bold text-white/40 px-1">
                   <span>Mínimo 51%</span>
                   <span className="text-[#0D9488]">Aprobado</span>
                 </div>
               </div>
             </div>
           </div>

           {/* AI Moderation Assistant */}
           <div className="bg-gradient-to-b from-[#2563EB]/10 to-transparent border border-[#2563EB]/20 rounded-2xl p-6 relative overflow-hidden group shadow-2xl">
             <div className="flex items-center gap-3 mb-4">
               <Cpu size={20} className="text-[#2563EB]" />
               <h3 className="text-sm font-bold text-white">AI Moderador</h3>
             </div>
             <p className="text-xs text-white/60 leading-relaxed font-medium">
               Análisis en tiempo real indica que la asamblea lleva <strong className="text-white">12 minutos retrasada</strong> vs la agenda. 
               Se sugiere pausar las intervenciones del <em>"Punto 2"</em> y proceder.
             </p>
             <button className="mt-4 w-full py-2 bg-[#2563EB] hover:bg-[#3B82F6] text-white text-xs font-bold rounded-xl transition-colors">
               Lanzar Aviso a Sala
             </button>
           </div>
        </div>

        {/* Center / Right - Queue and Voting */}
        <div className="lg:col-span-2 space-y-6">
           {/* Active Vote Banner */}
          <div className="rounded-2xl bg-gradient-to-r from-[#0D9488]/20 via-[#0D9488]/10 to-transparent p-[1px]">
             <div className="bg-[#020617] rounded-2xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4 h-full relative overflow-hidden">
                <div className="absolute left-0 top-0 w-2 h-full bg-[#0D9488]" />
                <div className="pl-4">
                   <div className="flex items-center gap-2 mb-1">
                      <BarChart3 size={16} className="text-[#0D9488]" />
                      <p className="text-[10px] text-[#0D9488] font-black uppercase tracking-widest">Votación Activa</p>
                   </div>
                   <h3 className="text-lg font-bold text-white">Aprobación Estados Financieros 2025</h3>
                   <p className="text-xs text-white/50">El 45% de los presentes ya ha emitido su voto en blockchain.</p>
                </div>
                <div className="flex gap-2 w-full sm:w-auto">
                   <button className="flex-1 sm:flex-none px-6 py-3 rounded-xl bg-[#0D9488] hover:bg-[#0D9488]/90 text-[#020617] text-sm font-black transition-all text-center">
                     Ver Resultados
                   </button>
                </div>
             </div>
          </div>

          {/* Speakers Queue */}
          <div className="bg-[#020617] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
             <div className="p-5 border-b border-white/10 flex justify-between items-center bg-white/[0.02]">
                <div className="flex items-center gap-2">
                   <Hand size={18} className="text-[#F59E0B]" />
                   <h3 className="font-bold text-white text-base">Cola de Intervenciones</h3>
                </div>
                <span className="text-[10px] px-2 py-1 rounded bg-[#F59E0B]/10 text-[#F59E0B] font-black uppercase tracking-widest">
                  4 Esperando
                </span>
             </div>

             <div className="divide-y divide-white/5">
                {/* Active Speaker */}
                <div className="p-5 bg-gradient-to-r from-[#0D9488]/5 to-transparent flex items-center justify-between border-l-2 border-[#0D9488]">
                  <div className="flex items-center gap-4">
                     <div className="relative">
                        <div className="w-12 h-12 rounded-full bg-white/5 border border-[#0D9488] flex items-center justify-center p-1">
                          <img src="https://i.pravatar.cc/150?u=a042581f4e29026024d" className="w-full h-full rounded-full object-cover" />
                        </div>
                        <div className="absolute -bottom-1 -right-1 bg-[#0D9488] w-4 h-4 rounded-full border-2 border-[#020617] flex items-center justify-center">
                           <PlayCircle size={10} className="text-[#020617]" />
                        </div>
                     </div>
                     <div>
                        <p className="text-sm font-black text-[#0D9488] mb-0.5">Carlos Salamanca <span className="text-white/30 text-xs font-normal">(Hablando)</span></p>
                        <p className="text-xs text-white/50 font-semibold">Propietario • Apto 402 • 1.2% Coef</p>
                     </div>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-black text-white relative flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" /> 02:45
                    </p>
                    <p className="text-[10px] text-white/30 uppercase tracking-widest">Límite 3:00</p>
                  </div>
                </div>

                {/* Queue */}
                {[
                  { name: 'Maria Rodriguez', prop: 'Apto 205', wait: 'Esperando hace 2 min', img: '150?u=a042581f4e29026704d' },
                  { name: 'Felipe Jaramillo', prop: 'Apto 801', wait: 'Esperando hace 5 min', img: '150?u=a042581f4e29026703d' },
                ].map((q, i) => (
                   <div key={i} className="p-4 pl-6 flex items-center justify-between hover:bg-white/[0.02] transition-colors group">
                      <div className="flex items-center gap-4">
                         <img src={`https://i.pravatar.cc/${q.img}`} className="w-10 h-10 rounded-full border border-white/10 opacity-50 group-hover:opacity-100 transition-opacity" />
                         <div>
                            <p className="text-sm font-bold text-white/80 group-hover:text-white transition-colors">{q.name}</p>
                            <p className="text-xs text-white/40">{q.prop} • {q.wait}</p>
                         </div>
                      </div>
                      <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-white text-xs font-bold transition-colors">Dar Palabra</button>
                        <button className="p-1.5 rounded-lg text-white/40 hover:text-red-500 hover:bg-red-500/10 transition-colors"><X size={16}/></button>
                      </div>
                   </div>
                ))}
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}

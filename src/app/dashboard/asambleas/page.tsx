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
            <span className="w-3 h-3 rounded-full bg-red-500 animate-pulse shadow-[0_0_10px_rgba(239,68,68,0.5)] border-2 border-white" />
            <span className="text-red-500 text-xs font-black tracking-widest uppercase bg-red-50 px-2.5 py-1 rounded-md border border-red-100">En Vivo</span>
            <span className="text-slate-500 text-xs font-bold flex items-center gap-1.5"><Activity size={14} className="text-slate-400"/> Iniciada hace 45 mins</span>
          </div>
          <h1 className="text-3xl font-black text-slate-900 tracking-tight">Asamblea General de Asociados 2026</h1>
          <p className="text-slate-500 text-sm mt-1 font-medium">Sala de control principal para moderación de intervenciones y votaciones en tiempo real.</p>
        </div>
        <div className="flex gap-3">
           <button className="px-5 py-2.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 text-sm font-bold transition-all flex items-center gap-2 shadow-sm">
            <Settings size={16} /> Ajustes
          </button>
          <button className="px-5 py-2.5 rounded-xl bg-red-50 hover:bg-red-100 text-red-600 text-sm font-bold border border-red-200 transition-all flex items-center gap-2 shadow-sm">
            <StopCircle size={16} />
            Finalizar Sesión
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Quorum & Activity */}
        <div className="space-y-6 lg:col-span-1">
          {/* Quorum Monitor */}
           <div className="bg-white border border-slate-200 rounded-3xl p-6 relative overflow-hidden group shadow-sm hover:shadow-md transition-shadow">
             <div className="absolute right-0 top-0 w-32 h-32 bg-[#0D9488]/10 rounded-full blur-[40px] opacity-0 group-hover:opacity-100 transition-all duration-500" />
             <div className="relative z-10 flex flex-col items-center text-center">
               <div className="p-3 bg-[#0D9488]/5 rounded-2xl mb-4 border border-[#0D9488]/10 group-hover:scale-110 transition-transform">
                 <Activity size={32} className="text-[#0D9488]" />
               </div>
               <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em] mb-1">Quórum Verificado</p>
               <h2 className="text-5xl font-black text-slate-900 tracking-tight">{quorum}%</h2>
               <div className="mt-6 w-full space-y-2">
                 <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden shadow-inner">
                   <div className="bg-gradient-to-r from-[#01a877] to-[#0D9488] h-full relative transition-all duration-1000" style={{ width: `${quorum}%` }}>
                      <div className="absolute inset-0 bg-white/20 animate-pulse" />
                   </div>
                 </div>
                 <div className="flex justify-between text-xs font-bold text-slate-500 px-1">
                   <span>Mínimo 51%</span>
                   <span className="text-[#0D9488]">Aprobado ✓</span>
                 </div>
               </div>
             </div>
           </div>

           {/* AI Moderation Assistant */}
           <div className="bg-gradient-to-b from-blue-50 to-white border border-blue-100 rounded-3xl p-6 relative overflow-hidden group shadow-sm">
             <div className="flex items-center gap-3 mb-4">
               <div className="p-2 bg-blue-100 rounded-lg">
                 <Cpu size={20} className="text-blue-600" />
               </div>
               <h3 className="text-sm font-bold text-slate-900">AI Moderador</h3>
             </div>
             <p className="text-xs text-slate-600 leading-relaxed font-medium">
               Análisis en tiempo real indica que la asamblea lleva <strong className="text-slate-900 bg-yellow-100 px-1 rounded">12 minutos retrasada</strong> vs la agenda. 
               Se sugiere pausar las intervenciones sobre el <em>"Punto 2"</em> y someter a votación.
             </p>
             <button className="mt-4 w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl transition-colors shadow-sm shadow-blue-600/20">
               Lanzar Aviso a Sala
             </button>
           </div>
        </div>

        {/* Center / Right - Queue and Voting */}
        <div className="lg:col-span-2 space-y-6">
           {/* Active Vote Banner */}
          <div className="rounded-3xl bg-gradient-to-r from-[#0D9488] to-teal-400 p-[2px] shadow-md shadow-[#0D9488]/20 group">
             <div className="bg-white rounded-[22px] p-6 flex flex-col sm:flex-row items-center justify-between gap-4 h-full relative overflow-hidden">
                <div className="absolute left-0 top-0 w-2 h-full bg-[#0D9488]" />
                <div className="absolute right-0 top-0 w-64 h-64 bg-[#0D9488]/5 rounded-full blur-[40px] opacity-100" />
                
                <div className="pl-4 relative z-10 w-full sm:w-auto">
                   <div className="flex items-center gap-2 mb-2">
                      <div className="p-1.5 bg-[#0D9488]/10 rounded-lg border border-[#0D9488]/20">
                        <BarChart3 size={16} className="text-[#0D9488]" />
                      </div>
                      <p className="text-[10px] text-[#0D9488] font-black uppercase tracking-widest">Votación Activa</p>
                   </div>
                   <h3 className="text-xl font-black text-slate-900 tracking-tight">Aprobación Estados Financieros 2025</h3>
                   <p className="text-sm text-slate-500 font-medium mt-1">El 45% de los presentes ya ha emitido su voto en blockchain.</p>
                </div>
                <div className="flex gap-2 w-full sm:w-auto relative z-10">
                   <button className="flex-1 sm:flex-none px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-sm font-black transition-all text-center shadow-lg group-hover:scale-105">
                     Ver Resultados en Vivo
                   </button>
                </div>
             </div>
          </div>

          {/* Speakers Queue */}
          <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm">
             <div className="p-5 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
                <div className="flex items-center gap-3">
                   <div className="p-2 bg-amber-50 rounded-xl border border-amber-100">
                     <Hand size={18} className="text-amber-500" />
                   </div>
                   <h3 className="font-bold text-slate-900 text-lg">Turnos de Intervención</h3>
                </div>
                <span className="text-[10px] px-3 py-1.5 rounded-lg bg-amber-100 text-amber-700 font-black uppercase tracking-widest border border-amber-200 shadow-sm">
                  4 Esperando
                </span>
             </div>

             <div className="divide-y divide-slate-100">
                {/* Active Speaker */}
                <div className="p-5 bg-gradient-to-r from-[#0D9488]/5 to-transparent flex items-center justify-between border-l-4 border-[#0D9488] relative overflow-hidden">
                  <div className="absolute right-0 top-0 w-32 h-32 bg-[#0D9488]/5 rounded-full blur-[30px]" />
                  <div className="flex items-center gap-4 relative z-10">
                     <div className="relative">
                        <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200 flex items-center justify-center p-1 shadow-sm">
                          <img src="https://i.pravatar.cc/150?u=a042581f4e29026024d" className="w-full h-full rounded-xl object-cover" />
                        </div>
                        <div className="absolute -bottom-2 -right-2 bg-[#0D9488] w-6 h-6 rounded-full border-2 border-white flex items-center justify-center shadow-md animate-bounce">
                           <PlayCircle size={14} className="text-white" />
                        </div>
                     </div>
                     <div>
                        <p className="text-base font-black text-slate-900 flex items-center gap-2">
                           Dr. Carlos Salamanca 
                           <span className="px-2 py-0.5 rounded text-[10px] bg-[#0D9488]/10 text-[#0D9488] border border-[#0D9488]/20 font-bold uppercase tracking-widest">Hablando</span>
                        </p>
                        <p className="text-xs text-slate-500 font-bold mt-0.5 flex items-center gap-1.5">
                           Asociado Activo <span className="text-slate-300">•</span> ID: ACM-402 <span className="text-slate-300">•</span> 1.2% Votos
                        </p>
                     </div>
                  </div>
                  <div className="text-right relative z-10 bg-white px-4 py-2 rounded-xl border border-slate-200 shadow-sm">
                    <p className="text-3xl font-black text-slate-900 flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.5)]" /> 02:45
                    </p>
                    <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold mt-1">Límite 3:00 min</p>
                  </div>
                </div>

                {/* Queue */}
                {[
                  { name: 'Dra. Maria Rodriguez', prop: 'ID: ACM-205', wait: 'Esperando hace 2 min', img: '150?u=a042581f4e29026704d' },
                  { name: 'Dr. Felipe Jaramillo', prop: 'ID: ACM-801', wait: 'Esperando hace 5 min', img: '150?u=a042581f4e29026703d' },
                ].map((q, i) => (
                   <div key={i} className="p-4 pl-6 flex items-center justify-between hover:bg-slate-50 transition-colors group">
                      <div className="flex items-center gap-4">
                         <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 overflow-hidden shadow-sm opacity-70 group-hover:opacity-100 transition-opacity">
                            <img src={`https://i.pravatar.cc/${q.img}`} className="w-full h-full object-cover" />
                         </div>
                         <div>
                            <p className="text-sm font-bold text-slate-700 group-hover:text-slate-900 transition-colors">{q.name}</p>
                            <p className="text-xs text-slate-500 font-medium mt-0.5">{q.prop} • {q.wait}</p>
                         </div>
                      </div>
                      <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="px-4 py-2 rounded-xl bg-white border border-slate-200 hover:border-[#0D9488] hover:text-[#0D9488] text-slate-600 text-xs font-bold transition-colors shadow-sm">
                           Dar Palabra
                        </button>
                        <button className="w-9 h-9 flex items-center justify-center rounded-xl bg-white border border-slate-200 text-slate-400 hover:text-red-500 hover:border-red-200 hover:bg-red-50 transition-colors shadow-sm">
                           <X size={16}/>
                        </button>
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

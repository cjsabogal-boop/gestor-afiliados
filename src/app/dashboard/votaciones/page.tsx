"use client";

import { PieChart, ListChecks, CheckSquare, Clock, Plus, BarChart3, AlertCircle } from 'lucide-react';

export default function VotacionesPage() {
  return (
    <div className="max-w-6xl mx-auto space-y-8 pb-20">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-slate-900 tracking-tight">Votaciones y Decisiones</h1>
          <p className="text-slate-500 text-sm mt-1 font-medium">Lanzamiento de encuestas y votaciones con registro de opciones respaldadas por blockchain.</p>
        </div>
        <button className="px-5 py-2.5 rounded-xl bg-[#0D9488] hover:bg-[#0f766c] text-white text-sm font-bold shadow-[0_4px_15px_rgba(13,148,136,0.3)] transition-all flex items-center gap-2">
          <Plus size={16} /> Crear Votación
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Active Voting */}
        <div className="lg:col-span-2 bg-gradient-to-r from-teal-50 to-[#0D9488]/5 border border-[#0D9488]/20 rounded-3xl p-6 md:p-8 relative overflow-hidden shadow-sm">
           <div className="absolute right-0 top-0 w-64 h-64 bg-[#0D9488]/10 rounded-full blur-[60px]" />
           <div className="relative z-10 flex flex-col h-full justify-between gap-6">
             <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.5)]" />
                  <span className="text-[10px] text-green-700 font-black tracking-widest uppercase bg-green-100 px-2 py-1 rounded border border-green-200">En Curso</span>
                  <span className="text-slate-500 text-xs font-bold flex items-center gap-1"><Clock size={12}/> Restan 2 Días</span>
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-2">Aprobación Presupuesto General 2026</h3>
                <p className="text-sm font-medium text-slate-600">Votación estatutaria para aprobar el presupuesto de egresos e inversiones de la Asociación para la vigencia 2026.</p>
             </div>
             
             <div className="bg-white rounded-2xl p-5 border border-[#0D9488]/20 shadow-sm">
                <div className="flex justify-between items-end mb-3">
                   <div>
                     <p className="text-3xl font-black text-slate-900">45%</p>
                     <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-0.5">Participación Mínima: 51%</p>
                   </div>
                   <div className="text-right">
                     <p className="text-sm font-black text-[#0D9488]">560 / 1245</p>
                     <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Asociados han votado</p>
                   </div>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden shadow-inner font-mono text-[8px] flex items-center">
                  <div className="bg-gradient-to-r from-[#01a877] to-[#0D9488] w-[45%] h-full relative" />
                </div>
             </div>

             <div className="flex gap-3">
               <button className="px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-bold text-sm shadow-md transition-all flex items-center gap-2">
                 <BarChart3 size={16}/> Ver Resultados Preliminares
               </button>
               <button className="px-6 py-3 bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 rounded-xl font-bold text-sm shadow-sm transition-all flex items-center gap-2">
                 Enviar Recordatorio
               </button>
             </div>
           </div>
        </div>

        {/* Action Items */}
        <div className="space-y-6">
           <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm hover:border-[#0D9488]/30 transition-colors">
             <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 bg-blue-50 text-blue-600 rounded-xl border border-blue-100">
                  <ListChecks size={20} />
                </div>
                <h4 className="font-bold text-slate-900">Encuestas Flash</h4>
             </div>
             <p className="text-xs text-slate-500 font-medium mb-4">Sondeos rápidos sin valor estatutario para medir el pulso de los asociados sobre temas específicos.</p>
             <button className="w-full py-2 bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 font-bold text-xs rounded-xl transition-all shadow-sm">
               Crear Sondeo Rápido
             </button>
           </div>
           
           <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm hover:border-[#0D9488]/30 transition-colors">
             <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 bg-amber-50 text-amber-600 rounded-xl border border-amber-100">
                  <CheckSquare size={20} />
                </div>
                <h4 className="font-bold text-slate-900">Voto por Coeficiente</h4>
             </div>
             <p className="text-xs text-slate-500 font-medium mb-4">Calcula votaciones ponderadas automáticamente usando los coeficientes importados del directorio asociativo.</p>
             <div className="text-[10px] font-black uppercase text-amber-600 tracking-widest flex items-center gap-1">
               <AlertCircle size={12}/> Configuración Activa
             </div>
           </div>
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-3xl p-6 md:p-8 shadow-sm">
         <h3 className="font-bold text-slate-900 text-lg mb-6 flex items-center gap-2">
           <PieChart size={20} className="text-slate-400" /> Historial de Decisiones
         </h3>

         <div className="space-y-4">
            {[
              { id: 'VOT-042', title: 'Elección de Nueva Junta Directiva (2025-2027)', date: '10 Nov 2025', part: '82%', result: 'Plancha 2 Elegida', status: 'Cerrada' },
              { id: 'VOT-041', title: 'Aprobación Reforma Estatutaria', date: '15 Oct 2025', part: '91%', result: 'Aprobada (95% a favor)', status: 'Cerrada' },
              { id: 'VOT-040', title: 'Aprobación Cuota Extraordinaria Congreso', date: '05 Sep 2025', part: '76%', result: 'Aprobada (88% a favor)', status: 'Cerrada' },
            ].map((v, i) => (
               <div key={i} className="flex flex-col md:flex-row md:items-center justify-between p-4 bg-slate-50 border border-slate-100 hover:border-slate-300 rounded-2xl transition-all cursor-pointer group">
                  <div className="mb-4 md:mb-0">
                     <p className="text-[10px] font-black uppercase tracking-widest text-[#0D9488] mb-1">{v.id}</p>
                     <h4 className="text-sm font-bold text-slate-900 group-hover:text-[#0D9488] transition-colors">{v.title}</h4>
                     <p className="text-xs text-slate-500 font-medium mt-1">Finalizó: {v.date}</p>
                  </div>
                  <div className="flex items-center gap-4 md:gap-8">
                     <div className="text-right">
                       <p className="text-xs font-bold text-slate-800">{v.part}</p>
                       <p className="text-[10px] uppercase text-slate-400 font-bold tracking-widest">Participación</p>
                     </div>
                     <div className="hidden md:block w-px h-8 bg-slate-200" />
                     <div className="text-left md:text-right min-w-[120px]">
                       <p className="text-xs font-bold text-[#0D9488]">{v.result}</p>
                       <p className="text-[10px] uppercase text-slate-400 font-bold tracking-widest">{v.status}</p>
                     </div>
                     <button className="hidden md:flex p-2 bg-white border border-slate-200 text-slate-400 hover:text-[#0D9488] hover:border-[#0D9488]/30 rounded-xl transition-colors shadow-sm">
                       <BarChart3 size={16} />
                     </button>
                  </div>
               </div>
            ))}
         </div>
      </div>
    </div>
  );
}

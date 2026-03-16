"use client";

import { BarChart3, PieChart, TrendingUp, Download, Calendar, ArrowUpRight, ArrowDownRight, Users, Wallet, ShieldCheck } from 'lucide-react';
import { useSector } from '../SectorProvider';
import { getSectorData } from '../mockData';

export default function ReportesPage() {
  const { sector } = useSector();
  const data = getSectorData(sector);

  return (
    <div className="max-w-6xl mx-auto space-y-8 pb-20">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-slate-900 tracking-tight">Finanzas y Reportes</h1>
          <p className="text-slate-500 text-sm mt-1 font-medium">Análisis detallado de ingresos, egresos, cartera vencida y proyecciones presupuestales.</p>
        </div>
        <div className="flex gap-3">
          <button className="px-5 py-2.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 text-sm font-bold shadow-sm transition-all flex items-center gap-2">
            <Calendar size={16} /> Este Mes
          </button>
          <button className="px-5 py-2.5 rounded-xl bg-[#0D9488] hover:bg-[#0f766c] text-white text-sm font-bold shadow-md transition-all flex items-center gap-2">
            <Download size={16} /> Exportar Consolidado
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
         {[
           { icon: Wallet, label: 'Ingresos Operacionales', val: '$145.2M', trend: '+12%', color: 'from-[#0D9488]/20 to-[#0D9488]/5', txt: 'text-[#0D9488]' },
           { icon: ArrowDownRight, label: 'Gastos Ejecutados', val: '$92.4M', trend: '-2.4%', color: 'from-orange-500/20 to-orange-500/5', txt: 'text-orange-600' },
           { icon: TrendingUp, label: 'Excedente (EBITDA)', val: '$52.8M', trend: '+15%', color: 'from-blue-500/20 to-blue-500/5', txt: 'text-blue-600' },
           { icon: Users, label: 'Cartera Vencida', val: '$12.5M', trend: '-8.1%', color: 'from-red-500/20 to-red-500/5', txt: 'text-red-600' },
         ].map((k, i) => (
           <div key={i} className={`bg-gradient-to-br ${k.color} border border-white/50 bg-white shadow-sm rounded-3xl p-5 relative overflow-hidden group hover:scale-[1.02] transition-transform cursor-default`}>
             <div className="flex justify-between items-start mb-4 relative z-10">
               <div className={`p-2.5 bg-white rounded-xl shadow-sm ${k.txt}`}>
                 <k.icon size={20} />
               </div>
               <span className={`text-[10px] font-black tracking-widest px-2 py-1 rounded bg-white shadow-sm ${k.trend.startsWith('+') ? 'text-green-600' : 'text-slate-600'}`}>
                 {k.trend}
               </span>
             </div>
             <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-1 relative z-10">{k.label}</p>
             <p className="text-2xl font-black text-slate-900 tracking-tight relative z-10">{k.val}</p>
           </div>
         ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white border border-slate-200 rounded-3xl p-6 md:p-8 shadow-sm">
           <div className="flex justify-between items-center mb-8">
              <h3 className="font-bold text-slate-900 text-lg flex items-center gap-2">
                <BarChart3 size={20} className="text-[#0D9488]" /> Ejecución Presupuestal Mensual
              </h3>
              <div className="flex gap-2 text-xs font-bold border border-slate-200 rounded-lg p-1">
                 <button className="px-3 py-1.5 rounded bg-slate-100 text-slate-800 shadow-sm">Ingresos</button>
                 <button className="px-3 py-1.5 rounded text-slate-500 hover:text-slate-800 hover:bg-slate-50 transition-colors">Egresos</button>
              </div>
           </div>
           
           <div className="h-64 flex items-end justify-between gap-2 border-b border-slate-100 pb-2 relative">
              {/* Reference line */}
              <div className="absolute top-1/4 left-0 w-full border-t border-dashed border-slate-200" />
              <div className="absolute top-1/2 left-0 w-full border-t border-dashed border-slate-200" />
              <div className="absolute top-3/4 left-0 w-full border-t border-dashed border-slate-200" />
              
              {/* Bars */}
              {['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'].map((m, i) => {
                 const h1 = 30 + Math.random() * 60;
                 return (
                   <div key={m} className="flex flex-col items-center gap-2 flex-1 group z-10">
                      <div className="w-full max-w-[24px] rounded-t-lg bg-slate-100 relative group-hover:bg-slate-200 transition-colors" style={{ height: `${h1}%` }}>
                         <div className="absolute bottom-0 w-full rounded-t-lg bg-gradient-to-t from-[#01a877] to-[#0D9488]" style={{ height: `${h1 * 0.8}%` }} />
                      </div>
                      <span className="text-[10px] font-bold text-slate-400 group-hover:text-slate-700 uppercase">{m}</span>
                   </div>
                 )
              })}
           </div>
        </div>

        <div className="space-y-6">
           <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm">
             <h3 className="font-bold text-slate-900 mb-6 flex items-center gap-2">
               <PieChart size={18} className="text-[#3B82F6]" /> Origen de Ingresos
             </h3>
             <div className="space-y-5">
               {[
                 { label: `${data.roles.payments.charAt(0).toUpperCase() + data.roles.payments.slice(1)} Ordinarias`, val: '65%', amt: '$94.3M', color: 'bg-[#0D9488]' },
                 { label: `${data.roles.payments.charAt(0).toUpperCase() + data.roles.payments.slice(1)} Institucionales`, val: '20%', amt: '$29.0M', color: 'bg-[#3B82F6]' },
                 { label: 'Eventos y Congresos', val: '10%', amt: '$14.5M', color: 'bg-indigo-500' },
                 { label: 'Otros Recaudos', val: '5%', amt: '$7.4M', color: 'bg-slate-300' },
               ].map((c, i) => (
                 <div key={i}>
                   <div className="flex justify-between items-end mb-1">
                      <span className="text-[11px] font-bold text-slate-600 flex items-center gap-2">
                        <span className={`w-2 h-2 rounded-full ${c.color}`} /> {c.label}
                      </span>
                      <span className="text-xs font-black text-slate-900">{c.amt}</span>
                   </div>
                   <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
                      <div className={`h-full ${c.color}`} style={{ width: c.val }} />
                   </div>
                 </div>
               ))}
             </div>
           </div>

           <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-lg relative overflow-hidden text-center group">
             <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-[#0D9488]/20 group-hover:opacity-100 opacity-50 transition-opacity" />
             <ShieldCheck size={32} className="text-[#0D9488] mx-auto mb-3 relative z-10" />
             <h3 className="font-black text-white text-lg relative z-10">Auditoría Blockchain</h3>
             <p className="text-xs text-slate-400 font-medium mt-2 mb-4 relative z-10">Genera un reporte inmutable con todas las transacciones verificadas por contrato inteligente.</p>
             <button className="w-full py-2.5 bg-[#0D9488] hover:bg-[#0f766c] text-white font-bold text-xs uppercase tracking-widest rounded-xl transition-all shadow-[0_4px_15px_rgba(13,148,136,0.3)] relative z-10">
               Generar Hash SHA-256
             </button>
           </div>
        </div>
      </div>
    </div>
  );
}

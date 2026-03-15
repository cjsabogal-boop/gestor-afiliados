"use client";

import { useState } from 'react';
import { Search, Filter, MoreVertical, FileText, Download, CheckCircle, Clock, AlertTriangle, ArrowRight, Wallet, Receipt, TrendingUp } from 'lucide-react';

const MOCK_CUOTAS = [
  { id: 'FAC-2026-005', property: 'ID: ACM-402', unitOwner: 'Dr. Carlos E. Salamanca', amount: '$350,000', period: 'Marzo 2026', date: '01 Mar 2026', status: 'Pendiente', type: 'Membresía Mensual', method: '-', badge: 'Nuevo' },
  { id: 'FAC-2026-004', property: 'ID: ACM-801', unitOwner: 'Dr. Felipe Jaramillo', amount: '$420,000', period: 'Marzo 2026', date: '01 Mar 2026', status: 'Pendiente', type: 'Membresía + Congreso', method: '-' },
  { id: 'FAC-2026-003', property: 'ID: ACM-205', unitOwner: 'Dra. Mariana Rodriguez', amount: '$350,000', period: 'Febrero 2026', date: '01 Feb 2026', status: 'Vencida', type: 'Membresía Mensual', method: '-', badge: 'Mora' },
  { id: 'FAC-2026-002', property: 'ID: ACM-101', unitOwner: 'Dr. Juan Perez', amount: '$350,000', period: 'Febrero 2026', date: '02 Feb 2026', status: 'Pagada', type: 'Membresía Mensual', method: 'Wompi' },
  { id: 'FAC-2026-001', property: 'ID: ACM-Corp', unitOwner: 'Fundación Cardio Vid', amount: '$850,000', period: 'Febrero 2026', date: '01 Feb 2026', status: 'Pagada', type: 'Membresía Corporativa', method: 'PSE' },
];

export default function CuotasPage() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="max-w-6xl mx-auto space-y-8 pb-20">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-slate-900 tracking-tight">Cobro de Membresías</h1>
          <p className="text-slate-500 text-sm mt-1 font-medium">Generación de cuotas sindicales, conciliación bancaria y estados de cuenta.</p>
        </div>
        <div className="flex gap-3 flex-wrap">
          <button className="px-5 py-2.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 text-sm font-bold transition-all flex items-center gap-2 shadow-sm">
            <Download size={16} />
            Exportar XLS
          </button>
          <button className="px-5 py-2.5 rounded-xl bg-[#0D9488] hover:bg-[#0f766c] text-white text-sm font-bold shadow-[0_4px_15px_rgba(13,148,136,0.3)] transition-all flex items-center gap-2">
            <Receipt size={16} />
            Generar Mes (Marzo)
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white border border-slate-200 rounded-3xl p-6 relative overflow-hidden group shadow-sm hover:shadow-md transition-shadow col-span-1 lg:col-span-2">
           <div className="absolute right-0 top-0 w-64 h-64 bg-[#0D9488]/5 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-all duration-500" />
           <div className="relative z-10">
             <div className="flex justify-between items-center mb-6">
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em]">Recaudo Esperado (Marzo)</p>
                <span className="text-[10px] px-2.5 py-1.5 rounded-lg bg-slate-50 text-slate-500 border border-slate-100 font-bold uppercase tracking-widest">1 AL 31 MAR</span>
             </div>
             
             <div className="flex flex-col md:flex-row gap-6 md:gap-16 items-start md:items-center">
                <div>
                  <div className="flex items-end gap-3 mb-1">
                    <p className="text-5xl font-black text-slate-900 tracking-tight">$85.5M</p>
                  </div>
                  <p className="text-sm font-bold text-[#0D9488] flex items-center gap-1.5"><TrendingUp size={16} strokeWidth={3} /> +2.4% vs Mes Anterior</p>
                </div>

                <div className="flex-1 w-full space-y-3">
                  <div className="flex justify-between text-xs font-bold text-slate-500">
                    <span>Recaudado ($24.8M)</span>
                    <span className="text-[#0D9488] font-black">29%</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden shadow-inner">
                    <div className="bg-gradient-to-r from-[#01a877] to-[#0D9488] w-[29%] h-full relative" />
                  </div>
                </div>
             </div>
           </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-3xl p-6 relative overflow-hidden group shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
           <div className="absolute -right-8 -top-8 w-32 h-32 bg-[#ef4444]/10 rounded-full blur-[40px] opacity-0 group-hover:opacity-100 transition-all duration-500" />
           <div className="relative z-10">
            <div className="flex justify-between items-start mb-4">
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em] whitespace-nowrap">Déficit por Mora</p>
              <div className="p-3 bg-red-50 rounded-xl text-red-500 border border-red-100 group-hover:bg-red-500 group-hover:text-white transition-colors">
                <Wallet size={20} />
              </div>
            </div>
            <p className="text-3xl font-black text-[#ef4444] tracking-tight mb-1">$4.2M</p>
            <p className="text-xs text-slate-500 font-bold flex items-center gap-1.5 mt-2">
               <AlertTriangle size={14} className="text-[#ef4444]" /> 12 Miembros Vencidos
            </p>
           </div>
           
           <button className="w-full mt-6 py-3 bg-slate-50 border border-slate-200 hover:border-slate-300 hover:bg-slate-100 rounded-xl text-xs font-bold text-slate-700 uppercase tracking-widest transition-colors relative z-10 flex items-center justify-center gap-2">
             Gestionar Cartera <ArrowRight size={16} />
           </button>
        </div>
      </div>

      {/* Recibos Table */}
      <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm">
        <div className="p-6 border-b border-slate-100 flex flex-col md:flex-row justify-between items-center bg-slate-50/50 gap-4">
           <h3 className="font-bold text-slate-900 text-lg">Historial de Cobros</h3>
           <div className="flex items-center gap-2 text-xs font-bold bg-white p-1 rounded-xl border border-slate-200 shadow-sm">
              <span className="px-4 py-2 rounded-lg bg-slate-100 text-slate-800 cursor-pointer transition-colors shadow-sm">Todos</span>
              <span className="px-4 py-2 rounded-lg text-slate-500 hover:text-slate-800 hover:bg-slate-50 cursor-pointer transition-colors">Pendientes</span>
              <span className="px-4 py-2 rounded-lg text-slate-500 hover:text-slate-800 hover:bg-slate-50 cursor-pointer transition-colors">Vencidos</span>
           </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-100 text-[10px] uppercase tracking-[0.1em] text-slate-400 font-bold">
                <th className="p-5 pl-8 font-black">Factura</th>
                <th className="p-5 font-black">Asociado / Especialidad</th>
                <th className="p-5 font-black text-right">Monto</th>
                <th className="p-5 font-black">Estado & Período</th>
                <th className="p-5 font-black">Método de Pago</th>
                <th className="p-5 font-black text-right pr-8"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {MOCK_CUOTAS.map((cuota, i) => (
                <tr key={cuota.id} className="hover:bg-slate-50 transition-colors group cursor-pointer">
                  <td className="p-5 pl-8">
                     <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-center group-hover:border-[#0D9488]/30 transition-colors">
                          <FileText size={20} className="text-slate-400 group-hover:text-[#0D9488] transition-colors" />
                        </div>
                        <div>
                           <p className="text-sm font-bold text-slate-900 group-hover:text-[#0D9488] transition-colors">{cuota.id}</p>
                           <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest mt-0.5">{cuota.type}</p>
                        </div>
                     </div>
                  </td>
                  <td className="p-5">
                     <p className="text-sm font-bold text-slate-800">{cuota.unitOwner}</p>
                     <p className="text-[11px] text-slate-400 font-bold uppercase tracking-widest flex items-center gap-1 mt-0.5">
                       {cuota.property}
                     </p>
                  </td>
                  <td className="p-5 text-right">
                     <p className="text-lg font-black text-slate-900 tracking-tight">{cuota.amount}</p>
                  </td>
                  <td className="p-5">
                     <div className="flex flex-col gap-1.5 items-start">
                        <div className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest
                          ${cuota.status === 'Pagada' ? 'bg-green-50 text-green-700 border border-green-200' : 
                            cuota.status === 'Vencida' ? 'bg-red-50 text-red-700 border border-red-200' : 
                            'bg-amber-50 text-amber-700 border border-amber-200'}`}>
                          {cuota.status === 'Pagada' && <CheckCircle size={14} />}
                          {cuota.status === 'Vencida' && <AlertTriangle size={14} />}
                          {cuota.status === 'Pendiente' && <Clock size={14} />}
                          {cuota.status}
                        </div>
                        <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest flex items-center gap-1 ml-1">
                          Período: {cuota.period}
                        </span>
                     </div>
                  </td>
                  <td className="p-5">
                    {cuota.method !== '-' ? (
                      <span className="text-xs font-black text-slate-700 uppercase px-3 py-1.5 rounded-lg bg-white border border-slate-200 shadow-sm">
                        {cuota.method}
                      </span>
                    ) : (
                      <span className="text-xl text-slate-300">-</span>
                    )}
                  </td>
                  <td className="p-5 pr-8 text-right">
                     <div className="flex items-center justify-end gap-2 text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="p-2 hover:bg-white hover:text-[#0D9488] border border-transparent hover:border-slate-200 rounded-xl transition-all shadow-sm" title="Descargar PDF">
                          <Download size={18} />
                        </button>
                        <button className="p-2 hover:bg-white hover:text-slate-800 border border-transparent hover:border-slate-200 rounded-xl transition-all shadow-sm">
                          <MoreVertical size={18} />
                        </button>
                     </div>
                     <button className="p-2 text-slate-300 group-hover:hidden transition-opacity">
                        <MoreVertical size={18} />
                     </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

"use client";

import { useState } from 'react';
import { Search, Filter, MoreVertical, FileText, Download, CheckCircle, Clock, AlertTriangle, ArrowRight, Wallet, Receipt, TrendingUp } from 'lucide-react';

const MOCK_CUOTAS = [
  { id: 'FAC-2026-005', property: 'Apto 402', unitOwner: 'Carlos E. Salamanca', amount: '$350,000', period: 'Marzo 2026', date: '01 Mar 2026', status: 'Pendiente', type: 'Administración', method: '-', badge: 'Nuevo' },
  { id: 'FAC-2026-004', property: 'Apto 801', unitOwner: 'Felipe Jaramillo', amount: '$420,000', period: 'Marzo 2026', date: '01 Mar 2026', status: 'Pendiente', type: 'Admin + Extra', method: '-' },
  { id: 'FAC-2026-003', property: 'Apto 205', unitOwner: 'Mariana Rodriguez', amount: '$350,000', period: 'Febrero 2026', date: '01 Feb 2026', status: 'Vencida', type: 'Administración', method: '-', badge: 'Mora' },
  { id: 'FAC-2026-002', property: 'Apto 101', unitOwner: 'Juan Perez', amount: '$350,000', period: 'Febrero 2026', date: '02 Feb 2026', status: 'Pagada', type: 'Administración', method: 'Wompi' },
  { id: 'FAC-2026-001', property: 'Local 01', unitOwner: 'Inmobiliaria S.A.', amount: '$850,000', period: 'Febrero 2026', date: '01 Feb 2026', status: 'Pagada', type: 'Locales Comerciales', method: 'PSE' },
];

export default function CuotasPage() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="max-w-6xl mx-auto space-y-8 pb-20">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-white tracking-tight">Cuotas de Administración</h1>
          <p className="text-white/40 text-sm mt-1">Generación de expensas, conciliación bancaria y estados de cuenta.</p>
        </div>
        <div className="flex gap-3 flex-wrap">
          <button className="px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm font-semibold transition-all flex items-center gap-2">
            <Download size={16} />
            Exportar XLS
          </button>
          <button className="px-5 py-2.5 rounded-xl bg-[#0D9488] hover:bg-[#0D9488]/90 text-[#020617] text-sm font-bold shadow-[0_0_20px_rgba(0,229,160,0.2)] transition-all flex items-center gap-2">
            <Receipt size={16} />
            Generar Mes (Marzo)
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-[#020617] border border-white/10 rounded-2xl p-6 relative overflow-hidden group shadow-2xl col-span-1 lg:col-span-2">
           <div className="absolute right-0 top-0 w-64 h-64 bg-[#0D9488]/5 rounded-full blur-[60px] opacity-100 group-hover:bg-[#0D9488]/10 transition-all duration-500" />
           <div className="relative z-10">
             <div className="flex justify-between items-center mb-6">
                <p className="text-[10px] text-white/50 font-bold uppercase tracking-[0.2em]">Recaudo Esperado (Marzo)</p>
                <span className="text-[10px] px-2 py-1 rounded bg-white/5 text-white/50 border border-white/10 font-bold">1 AL 31 MAR</span>
             </div>
             
             <div className="flex flex-col md:flex-row gap-6 md:gap-16 items-start md:items-center">
                <div>
                  <div className="flex items-end gap-3 mb-1">
                    <p className="text-5xl font-black text-white tracking-tight">$42.5M</p>
                  </div>
                  <p className="text-sm font-semibold text-[#0D9488] flex items-center gap-1"><TrendingUp size={14}/> +1.2% vs Mes Anterior</p>
                </div>

                <div className="flex-1 w-full space-y-3">
                  <div className="flex justify-between text-xs font-bold text-white/40">
                    <span>Recaudado ($12.4M)</span>
                    <span className="text-[#0D9488]">29%</span>
                  </div>
                  <div className="w-full bg-white/5 rounded-full h-3 overflow-hidden shadow-inner">
                    <div className="bg-gradient-to-r from-[#01a877] to-[#0D9488] w-[29%] h-full relative">
                       <div className="absolute inset-0 bg-white/20 animate-pulse" />
                    </div>
                  </div>
                </div>
             </div>
           </div>
        </div>

        <div className="bg-[#020617] border border-white/10 rounded-2xl p-6 relative overflow-hidden group shadow-2xl flex flex-col justify-between">
           <div className="absolute -right-8 -top-8 w-32 h-32 bg-[#EF4444]/10 rounded-full blur-[40px] opacity-100 group-hover:bg-[#EF4444]/20 transition-all duration-500" />
           <div className="relative z-10">
            <div className="flex justify-between items-start mb-4">
              <p className="text-[10px] text-white/50 font-bold uppercase tracking-[0.2em] whitespace-nowrap">Déficit por Mora</p>
              <div className="p-2 bg-[#EF4444]/10 rounded-lg text-[#EF4444] border border-[#EF4444]/20">
                <Wallet size={16} />
              </div>
            </div>
            <p className="text-3xl font-black text-[#EF4444] tracking-tight mb-1">$4.2M</p>
            <p className="text-xs text-white/40 font-semibold flex items-center gap-1">
               <AlertTriangle size={12}/> 12 Predios Vencidos
            </p>
           </div>
           
           <button className="w-full mt-4 py-2 border border-white/10 hover:border-white/20 hover:bg-white/5 rounded-xl text-xs font-bold text-white uppercase tracking-wider transition-colors relative z-10 flex items-center justify-center gap-2">
             Gestionar Cartera <ArrowRight size={14} />
           </button>
        </div>
      </div>

      {/* Recibos Table */}
      <div className="bg-[#020617] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
        <div className="p-5 border-b border-white/10 flex justify-between items-center bg-white/[0.02]">
           <h3 className="font-bold text-white text-lg">Historial de Exigencias</h3>
           <div className="flex items-center gap-2 text-xs font-semibold">
              <span className="px-3 py-1.5 rounded-lg bg-white/10 text-white cursor-pointer hover:bg-white/20 transition-colors">Todos</span>
              <span className="px-3 py-1.5 rounded-lg text-white/40 cursor-pointer hover:text-white transition-colors">Pendientes</span>
              <span className="px-3 py-1.5 rounded-lg text-white/40 cursor-pointer hover:text-white transition-colors">Vencidos</span>
           </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-white/[0.01] border-b border-white/10 text-[10px] uppercase tracking-[0.1em] text-white/40 font-bold">
                <th className="p-5 pl-8 font-black">Factura</th>
                <th className="p-5 font-black">Destinatario</th>
                <th className="p-5 font-black text-right">Monto</th>
                <th className="p-5 font-black">Estado & Período</th>
                <th className="p-5 font-black">Método</th>
                <th className="p-5 font-black text-right pr-8"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {MOCK_CUOTAS.map((cuota, i) => (
                <tr key={cuota.id} className="hover:bg-white/[0.02] transition-colors group cursor-pointer">
                  <td className="p-5 pl-8">
                     <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 flex items-center justify-center">
                          <FileText size={18} className="text-white/60" />
                        </div>
                        <div>
                           <p className="text-sm font-bold text-white group-hover:text-[#0D9488] transition-colors">{cuota.id}</p>
                           <p className="text-[10px] text-white/40 uppercase font-semibold mt-0.5">{cuota.type}</p>
                        </div>
                     </div>
                  </td>
                  <td className="p-5">
                     <p className="text-sm font-bold text-white">{cuota.property}</p>
                     <p className="text-[11px] text-white/40 font-semibold flex items-center gap-1 mt-0.5">
                       {cuota.unitOwner}
                     </p>
                  </td>
                  <td className="p-5 text-right">
                     <p className="text-base font-black text-white tracking-tight">{cuota.amount}</p>
                  </td>
                  <td className="p-5">
                     <div className="flex flex-col gap-1.5 items-start">
                        <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-[10px] font-black uppercase tracking-widest
                          ${cuota.status === 'Pagada' ? 'bg-[#0D9488]/10 text-[#0D9488] border border-[#0D9488]/20' : 
                            cuota.status === 'Vencida' ? 'bg-[#EF4444]/10 text-[#EF4444] border border-[#EF4444]/20' : 
                            'bg-[#F59E0B]/10 text-[#F59E0B] border border-[#F59E0B]/20'}`}>
                          {cuota.status === 'Pagada' && <CheckCircle size={12} />}
                          {cuota.status === 'Vencida' && <AlertTriangle size={12} />}
                          {cuota.status === 'Pendiente' && <Clock size={12} />}
                          {cuota.status}
                        </div>
                        <span className="text-[11px] text-white/40 font-bold flex items-center gap-1">
                          Periodo: {cuota.period}
                        </span>
                     </div>
                  </td>
                  <td className="p-5">
                    {cuota.method !== '-' ? (
                      <span className="text-xs font-black text-white/80 uppercase px-3 py-1 rounded-lg bg-white/5 border border-white/10">
                        {cuota.method}
                      </span>
                    ) : (
                      <span className="text-xl text-white/20">-</span>
                    )}
                  </td>
                  <td className="p-5 pr-8 text-right">
                     <div className="flex items-center justify-end gap-2 text-white/30 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="p-2 hover:bg-white/10 hover:text-white rounded-lg transition-colors" title="Descargar PDF">
                          <Download size={16} />
                        </button>
                        <button className="p-2 hover:bg-white/10 hover:text-white rounded-lg transition-colors">
                          <MoreVertical size={16} />
                        </button>
                     </div>
                     <button className="p-2 text-white/30 group-hover:hidden transition-opacity">
                        <MoreVertical size={16} />
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

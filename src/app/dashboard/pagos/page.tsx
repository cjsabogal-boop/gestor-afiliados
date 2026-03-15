"use client";

import { CreditCard, ArrowRightLeft, ArrowDownCircle, Banknote, Search, Filter, ShieldCheck, Download } from 'lucide-react';

const MOCK_PAGOS = [
  { id: 'TXN-9081', user: 'Dr. Carlos E. Salamanca', id_user: 'ACM-402', amount: '$350,000', date: '15 Mar 2026, 14:30', method: 'Wompi - Tarjeta de Crédito **** 4590', status: 'Aprobado' },
  { id: 'TXN-9080', user: 'Fundación Cardio Vid', id_user: 'ACM-Corp', amount: '$850,000', date: '15 Mar 2026, 10:15', method: 'PSE - Bancolombia', status: 'Aprobado' },
  { id: 'TXN-9079', user: 'Dra. Mariana Rodriguez', id_user: 'ACM-205', amount: '$350,000', date: '14 Mar 2026, 18:45', method: 'Wompi - Nequi', status: 'Rechazado (Fondos)' },
  { id: 'TXN-9078', user: 'Dr. Juan Perez', id_user: 'ACM-101', amount: '$700,000', date: '12 Mar 2026, 09:20', method: 'Transferencia Bancaria (Manual)', status: 'Conciliado' },
];

export default function PagosPage() {
  return (
    <div className="max-w-6xl mx-auto space-y-8 pb-20">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-slate-900 tracking-tight">Pagos & Transacciones</h1>
          <p className="text-slate-500 text-sm mt-1 font-medium">Visualización en tiempo real de transacciones vía pasarela y conciliaciones manuales.</p>
        </div>
        <button className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-sm font-bold shadow-md transition-all flex items-center gap-2">
          <Banknote size={16} /> Registrar Pago Manual
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
         <div className="bg-white border border-slate-200 rounded-3xl p-6 relative overflow-hidden group shadow-sm hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-4 relative z-10">
               <div>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-1">Total Procesado (Mes)</p>
                  <p className="text-3xl font-black text-slate-900">$24.8M</p>
               </div>
               <div className="p-3 bg-green-50 rounded-xl text-green-600 border border-green-100">
                 <ArrowDownCircle size={24} />
               </div>
            </div>
            <div className="relative z-10 flex items-center gap-2 mt-4">
               <span className="text-xs font-black text-green-600 bg-green-50 px-2.5 py-1 rounded-lg border border-green-100">+12.5% vs Mes Pasado</span>
            </div>
         </div>
         
         <div className="bg-white border border-slate-200 rounded-3xl p-6 relative overflow-hidden group shadow-sm hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-4 relative z-10">
               <div>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-1">Volumen Wompi / PSE</p>
                  <p className="text-3xl font-black text-slate-900">142 Txns</p>
               </div>
               <div className="p-3 bg-blue-50 rounded-xl text-blue-600 border border-blue-100">
                 <CreditCard size={24} />
               </div>
            </div>
            <div className="relative z-10 flex items-center gap-2 mt-4">
               <span className="text-xs font-bold text-slate-500">Tasa de aprobación: <strong className="text-slate-900 font-black">94%</strong></span>
            </div>
         </div>
         
         <div className="bg-white border border-slate-200 rounded-3xl p-6 relative overflow-hidden group shadow-sm hover:shadow-md transition-shadow border-dashed">
            <div className="flex justify-between items-start mb-4 relative z-10">
               <div>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-1">Pagos Manuales a Conciliar</p>
                  <p className="text-3xl font-black text-amber-600">8</p>
               </div>
               <div className="p-3 bg-amber-50 rounded-xl text-amber-600 border border-amber-100 animate-pulse">
                 <ArrowRightLeft size={24} />
               </div>
            </div>
            <div className="relative z-10">
               <button className="w-full mt-2 py-2 bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 font-bold text-xs uppercase tracking-widest rounded-xl transition-all shadow-sm">
                 Revisar Soportes
               </button>
            </div>
         </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm">
        <div className="p-5 border-b border-slate-100 flex flex-col md:flex-row justify-between items-center bg-slate-50 gap-4">
           <div className="relative w-full md:max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text" 
              placeholder="Buscar por ID de transacción, asociado..." 
              className="w-full bg-white border border-slate-200 rounded-xl pl-12 pr-4 py-3 text-sm text-slate-800 focus:outline-none focus:ring-4 focus:ring-[#0D9488]/10  focus:border-[#0D9488] transition-all placeholder:text-slate-400 font-medium shadow-sm"
            />
          </div>
          <div className="flex items-center gap-3 w-full md:w-auto">
             <button className="flex-1 md:flex-none flex justify-center items-center gap-2 px-5 py-3 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 text-sm font-bold shadow-sm transition-all">
                <Filter size={16} /> Filtros
             </button>
             <button className="flex-1 md:flex-none flex justify-center items-center gap-2 px-5 py-3 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-[#0D9488] text-sm font-bold shadow-sm transition-all">
                <Download size={16} /> Reporte
             </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-white border-b border-slate-100 text-[10px] uppercase tracking-[0.1em] text-slate-400 font-bold">
                <th className="p-5 pl-8 font-black">ID Ref</th>
                <th className="p-5 font-black">Asociado Origen</th>
                <th className="p-5 font-black text-right">Monto</th>
                <th className="p-5 font-black">Método</th>
                <th className="p-5 font-black">Estado & Fecha</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {MOCK_PAGOS.map((tx) => (
                <tr key={tx.id} className="hover:bg-slate-50 transition-colors group">
                  <td className="p-5 pl-8">
                     <p className="text-sm font-black text-slate-900 group-hover:text-[#0D9488] transition-colors">{tx.id}</p>
                  </td>
                  <td className="p-5">
                     <p className="text-sm font-bold text-slate-800">{tx.user}</p>
                     <p className="text-[10px] text-slate-400 uppercase font-bold tracking-widest mt-0.5">ID: {tx.id_user}</p>
                  </td>
                  <td className="p-5 text-right">
                     <p className="text-base font-black text-slate-900">{tx.amount}</p>
                  </td>
                  <td className="p-5">
                     <span className="text-xs font-bold text-slate-600 bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200">
                        {tx.method}
                     </span>
                  </td>
                  <td className="p-5">
                     <div className="flex flex-col items-start gap-1">
                       <span className={`px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest border shadow-sm
                          ${tx.status.includes('Aprobado') || tx.status.includes('Conciliado') ? 'bg-green-50 text-green-700 border-green-200' : 
                            tx.status.includes('Rechazado') ? 'bg-red-50 text-red-700 border-red-200' : 
                            'bg-amber-50 text-amber-700 border-amber-200'}`}>
                          {tx.status}
                       </span>
                       <span className="text-[10px] text-slate-500 font-bold ml-1 mt-0.5 whitespace-nowrap">
                          {tx.date}
                       </span>
                     </div>
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

"use client";

import { useState } from 'react';
import { Bot, MessageSquare, Send, Mail, Smartphone, Users, Zap, Clock, ShieldCheck, Plus } from 'lucide-react';

const MOCK_CAMPAIGNS = [
  { id: 'CAM-001', title: 'Convocatoria Asamblea General 2026', channels: ['WhatsApp', 'Email'], reach: '95%', date: 'Hoy, 10:00 AM', status: 'Enviado', type: 'Estatutario' },
  { id: 'CAM-002', title: 'Boletín Científico - Marzo', channels: ['Email'], reach: '42%', date: 'Ayer, 18:00 PM', status: 'En Curso', type: 'Informativo' },
  { id: 'CAM-003', title: 'Alerta Morosidad (Trimestre 1)', channels: ['WhatsApp', 'Push'], reach: '0%', date: 'Mañana, 08:00 AM', status: 'Programado', type: 'Administrativo' },
];

export default function AnunciosPage() {
  return (
    <div className="max-w-6xl mx-auto space-y-8 pb-20">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-slate-900 tracking-tight">Centro de Comunicaciones</h1>
          <p className="text-slate-500 text-sm mt-1 font-medium">Notifica a tus asociados por WhatsApp (API Oficial), Email y Alertas Push.</p>
        </div>
        <button className="px-5 py-2.5 rounded-xl bg-[#0D9488] hover:bg-[#0f766c] text-white text-sm font-bold shadow-[0_4px_15px_rgba(13,148,136,0.3)] transition-all flex items-center gap-2">
          <Send size={16} /> Redactar Mensaje
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
         <div className="bg-white border border-[#25D366]/20 rounded-3xl p-6 flex flex-col justify-between shadow-sm relative overflow-hidden group">
            <div className="absolute -right-4 -bottom-4 bg-[#25D366]/10 w-24 h-24 rounded-full blur-2xl group-hover:bg-[#25D366]/20 transition-all" />
            <div className="flex justify-between items-start mb-4 relative z-10">
               <div className="p-2.5 bg-[#25D366]/10 rounded-xl">
                 <MessageSquare size={24} className="text-[#25D366]" />
               </div>
               <span className="flex items-center gap-1 text-[10px] font-black uppercase text-green-600 bg-green-50 px-2 py-1 rounded border border-green-100">
                 Online <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
               </span>
            </div>
            <div className="relative z-10">
               <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-1">Cuentas API WhatsApp</p>
               <p className="text-2xl font-black text-slate-900">Activo</p>
            </div>
         </div>
         
         <div className="bg-white border border-[#0ea5e9]/20 rounded-3xl p-6 flex flex-col justify-between shadow-sm relative overflow-hidden group">
            <div className="absolute -right-4 -bottom-4 bg-[#0ea5e9]/10 w-24 h-24 rounded-full blur-2xl group-hover:bg-[#0ea5e9]/20 transition-all" />
            <div className="flex justify-between items-start mb-4 relative z-10">
               <div className="p-2.5 bg-[#0ea5e9]/10 rounded-xl">
                 <Mail size={24} className="text-[#0ea5e9]" />
               </div>
               <span className="flex items-center gap-1 text-[10px] font-black uppercase text-green-600 bg-green-50 px-2 py-1 rounded border border-green-100">
                 Online <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
               </span>
            </div>
            <div className="relative z-10">
               <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-1">Email Transaccional</p>
               <p className="text-2xl font-black text-slate-900">Activo</p>
            </div>
         </div>
         
         <div className="bg-white border border-indigo-200 rounded-3xl p-6 flex flex-col justify-between shadow-sm relative overflow-hidden group">
            <div className="absolute -right-4 -bottom-4 bg-indigo-100 w-24 h-24 rounded-full blur-2xl group-hover:bg-indigo-200 transition-all" />
            <div className="flex justify-between items-start mb-4 relative z-10">
               <div className="p-2.5 bg-indigo-50 rounded-xl border border-indigo-100">
                 <Smartphone size={24} className="text-indigo-600" />
               </div>
               <span className="flex items-center gap-1 text-[10px] font-black uppercase text-green-600 bg-green-50 px-2 py-1 rounded border border-green-100">
                 Online <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
               </span>
            </div>
            <div className="relative z-10">
               <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-1">App Push (FCM)</p>
               <p className="text-2xl font-black text-slate-900">Activo</p>
            </div>
         </div>
         
         <div className="bg-slate-50 border border-slate-200 border-dashed rounded-3xl p-6 flex flex-col items-center justify-center gap-3 hover:bg-slate-100 hover:border-slate-300 transition-colors cursor-pointer group shadow-inner">
             <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm border border-slate-200 group-hover:scale-110 transition-transform">
               <Plus size={24} className="text-slate-400 group-hover:text-[#0D9488]" />
             </div>
             <p className="text-sm font-bold text-slate-500 group-hover:text-slate-700">Conectar Nuevo Canal</p>
         </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm">
        <div className="p-6 border-b border-slate-100 bg-slate-50/50 flex items-center justify-between">
           <h3 className="font-bold text-slate-900 text-lg">Campañas Recientes</h3>
           <button className="text-xs font-bold text-[#0D9488] hover:text-[#0f766c] bg-[#0D9488]/5 px-3 py-1.5 rounded-lg border border-[#0D9488]/10">Ver Todas</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-100 text-[10px] uppercase tracking-[0.1em] text-slate-400 font-bold">
                <th className="p-5 pl-8 font-black">Campaña / Asunto</th>
                <th className="p-5 font-black">Canales Usados</th>
                <th className="p-5 font-black">Tasa de Apertura (Alcance)</th>
                <th className="p-5 font-black">Estado & Fecha</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {MOCK_CAMPAIGNS.map((camp) => (
                <tr key={camp.id} className="hover:bg-slate-50 transition-colors group cursor-pointer">
                  <td className="p-5 pl-8">
                     <p className="text-sm font-bold text-slate-800 group-hover:text-[#0D9488] transition-colors">{camp.title}</p>
                     <p className="text-[10px] text-slate-400 uppercase font-black tracking-widest mt-0.5">{camp.type}</p>
                  </td>
                  <td className="p-5">
                    <div className="flex gap-2">
                      {camp.channels.map(ch => (
                        <span key={ch} className="px-2.5 py-1.5 rounded-lg bg-white border border-slate-200 shadow-sm text-[10px] font-black text-slate-500 uppercase tracking-widest">
                          {ch}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="p-5">
                     <div className="flex items-center gap-3">
                        <div className="w-24 h-2 bg-slate-100 rounded-full overflow-hidden shadow-inner">
                           <div className="h-full bg-gradient-to-r from-teal-400 to-[#0D9488]" style={{ width: camp.reach }} />
                        </div>
                        <span className="text-xs font-black text-slate-700">{camp.reach}</span>
                     </div>
                  </td>
                  <td className="p-5">
                     <div className="flex flex-col items-start gap-1">
                       <span className={`px-2 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest border
                          ${camp.status === 'Enviado' ? 'bg-green-50 text-green-700 border-green-200' : 
                            camp.status === 'Programado' ? 'bg-blue-50 text-blue-700 border-blue-200' : 
                            'bg-amber-50 text-amber-700 border-amber-200'}`}>
                          {camp.status}
                       </span>
                       <span className="text-[10px] text-slate-500 font-bold flex items-center gap-1 mt-0.5">
                          <Clock size={12} className="text-slate-400" /> {camp.date}
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

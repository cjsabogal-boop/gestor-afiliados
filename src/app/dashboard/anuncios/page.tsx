"use client";

import { useState } from 'react';
import { Bot, MessageSquare, Send, Mail, Smartphone, Users, Zap, Clock, ShieldCheck, Plus } from 'lucide-react';

const MOCK_CAMPAIGNS = [
  { id: 'CAM-001', title: 'Corte de Agua Programado', channels: ['WhatsApp', 'Email'], reach: '95%', date: 'Hoy, 10:00 AM', status: 'Enviado', type: 'Alerta' },
  { id: 'CAM-002', title: 'Boletín Mensual Marzo', channels: ['Email'], reach: '42%', date: 'Ayer, 18:00 PM', status: 'En Curso', type: 'Informativo' },
  { id: 'CAM-003', title: 'Recordatorio Asamblea', channels: ['WhatsApp', 'Push'], reach: '0%', date: 'Mañana, 08:00 AM', status: 'Programado', type: 'Comunidad' },
];

export default function AnunciosPage() {
  return (
    <div className="max-w-6xl mx-auto space-y-8 pb-20">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-white tracking-tight">Comunicaciones OmniCanal</h1>
          <p className="text-white/40 text-sm mt-1">Notifica a tu comunidad por WhatsApp (Meta), SendGrid o Alertas Push.</p>
        </div>
        <button className="px-5 py-2.5 rounded-xl bg-[#0D9488] hover:bg-[#0D9488]/90 text-[#020617] text-sm font-bold shadow-[0_0_20px_rgba(0,229,160,0.2)] transition-all flex items-center gap-2">
          <Send size={16} /> Redactar Mensaje
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
         <div className="bg-gradient-to-br from-[#25D366]/20 to-[#25D366]/5 border border-[#25D366]/20 rounded-2xl p-5 flex items-center justify-between">
            <div>
               <p className="text-[10px] text-[#25D366] font-bold uppercase tracking-widest mb-1">WhatsApp API</p>
               <p className="text-2xl font-black text-white">Activo</p>
            </div>
            <MessageSquare size={32} className="text-[#25D366]/50" />
         </div>
         <div className="bg-gradient-to-br from-[#0ea5e9]/20 to-[#0ea5e9]/5 border border-[#0ea5e9]/20 rounded-2xl p-5 flex items-center justify-between">
            <div>
               <p className="text-[10px] text-[#0ea5e9] font-bold uppercase tracking-widest mb-1">SendGrid Emails</p>
               <p className="text-2xl font-black text-white">Activo</p>
            </div>
            <Mail size={32} className="text-[#0ea5e9]/50" />
         </div>
         <div className="bg-gradient-to-br from-[#ec4899]/20 to-[#ec4899]/5 border border-[#ec4899]/20 rounded-2xl p-5 flex items-center justify-between">
            <div>
               <p className="text-[10px] text-[#ec4899] font-bold uppercase tracking-widest mb-1">FCM Push</p>
               <p className="text-2xl font-black text-white">Activo</p>
            </div>
            <Smartphone size={32} className="text-[#ec4899]/50" />
         </div>
         <div className="bg-[#020617] border border-white/10 rounded-2xl p-5 flex items-center justify-center gap-3 hover:bg-white/5 transition-colors cursor-pointer border-dashed">
             <Plus size={20} className="text-white/40" />
             <p className="text-sm font-bold text-white/50">Conectar Canal</p>
         </div>
      </div>

      <div className="bg-[#020617] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
        <div className="p-5 border-b border-white/10 bg-white/[0.02]">
           <h3 className="font-bold text-white text-lg">Campañas Recientes</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-white/[0.01] border-b border-white/10 text-[10px] uppercase tracking-[0.1em] text-white/40 font-bold">
                <th className="p-5 pl-8 font-black">Asunto</th>
                <th className="p-5 font-black">Canales</th>
                <th className="p-5 font-black">Alcance</th>
                <th className="p-5 font-black">Estado & Fecha</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {MOCK_CAMPAIGNS.map((camp) => (
                <tr key={camp.id} className="hover:bg-white/[0.02] transition-colors group cursor-pointer">
                  <td className="p-5 pl-8">
                     <p className="text-sm font-bold text-white group-hover:text-[#0D9488] transition-colors">{camp.title}</p>
                     <p className="text-[10px] text-white/40 uppercase font-semibold mt-0.5">{camp.type}</p>
                  </td>
                  <td className="p-5">
                    <div className="flex gap-2">
                      {camp.channels.map(ch => (
                        <span key={ch} className="px-2 py-1 rounded bg-white/5 border border-white/10 text-[10px] font-bold text-white/70 uppercase">
                          {ch}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="p-5">
                     <div className="flex items-center gap-2">
                        <div className="w-16 h-1.5 bg-white/10 rounded-full overflow-hidden">
                           <div className="h-full bg-[#0D9488]" style={{ width: camp.reach }} />
                        </div>
                        <span className="text-xs font-bold text-white">{camp.reach}</span>
                     </div>
                  </td>
                  <td className="p-5">
                     <div className="flex flex-col items-start gap-1">
                       <span className={`px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-widest
                          ${camp.status === 'Enviado' ? 'bg-[#0D9488]/10 text-[#0D9488]' : 
                            camp.status === 'Programado' ? 'bg-[#3B82F6]/10 text-[#3B82F6]' : 
                            'bg-[#F59E0B]/10 text-[#F59E0B]'}`}>
                          {camp.status}
                       </span>
                       <span className="text-[10px] text-white/40 font-semibold flex items-center gap-1">
                          <Clock size={10} /> {camp.date}
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

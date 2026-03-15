"use client";

import { useState } from 'react';
import { Calendar as CalendarIcon, Clock, CheckCircle, XCircle, MapPin, Users } from 'lucide-react';

const MOCK_RESERVAS = [
  { id: 'RES-001', espacio: 'Auditorio Principal', usuario: 'Dr. Carlos E. Salamanca', fecha: '15 Mar 2026', hora: '14:00 - 18:00', estado: 'Confirmada', asistentes: 120 },
  { id: 'RES-002', espacio: 'Sala de Juntas B', usuario: 'Dra. Mariana Rodriguez', fecha: '16 Mar 2026', hora: '09:00 - 11:00', estado: 'Pendiente', asistentes: 12 },
  { id: 'RES-003', espacio: 'Cancha de Tenis', usuario: 'Dr. Felipe Jaramillo', fecha: '16 Mar 2026', hora: '18:00 - 20:00', estado: 'Confirmada', asistentes: 4 },
  { id: 'RES-004', espacio: 'Salón de Eventos', usuario: 'Fundación Cardio Vid', fecha: '20 Mar 2026', hora: '08:00 - 17:00', estado: 'Confirmada', asistentes: 350 },
  { id: 'RES-005', espacio: 'Auditorio Principal', usuario: 'Dra. Andrea Gómez', fecha: '22 Mar 2026', hora: '10:00 - 12:00', estado: 'Rechazada', asistentes: 50 },
];

export default function EspaciosPage() {
  const [filter, setFilter] = useState('Todas');

  return (
    <div className="max-w-6xl mx-auto space-y-8 pb-20">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-slate-900 tracking-tight">Sedes y Reservas</h1>
          <p className="text-slate-500 text-sm mt-1 font-medium">Gestión de calendarios, auditorios, salones y zonas sociales de la asociación.</p>
        </div>
        <button className="px-5 py-2.5 rounded-xl bg-[#0D9488] hover:bg-[#0f766c] text-white text-sm font-bold shadow-[0_4px_15px_rgba(13,148,136,0.3)] transition-all flex items-center gap-2">
          <CalendarIcon size={16} /> Nuevo Espacio
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Espacios List */}
        <div className="lg:col-span-1 space-y-4">
          <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-4">Espacios Activos</h3>
          
          {[
            { nombre: 'Auditorio Principal', ubicacion: 'Sede Norte', capacidad: 200, status: 'Disponible' },
            { nombre: 'Salón de Eventos', ubicacion: 'Sede Campestre', capacidad: 400, status: 'Ocupado' },
            { nombre: 'Sala de Juntas B', ubicacion: 'Sede Norte', capacidad: 15, status: 'Disponible' },
            { nombre: 'Canchas (Múltiples)', ubicacion: 'Sede Campestre', capacidad: 24, status: 'Mantenimiento' }
          ].map((espacio, i) => (
            <div key={i} className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm hover:border-[#0D9488]/30 transition-colors cursor-pointer group">
              <h4 className="font-bold text-slate-800 group-hover:text-[#0D9488] transition-colors">{espacio.nombre}</h4>
              <div className="flex flex-col gap-1.5 mt-2 text-xs text-slate-500 font-medium">
                <span className="flex items-center gap-1.5"><MapPin size={12}/> {espacio.ubicacion}</span>
                <span className="flex items-center gap-1.5"><Users size={12}/> Capacidad: {espacio.capacidad} pax</span>
              </div>
              <div className="mt-3">
                <span className={`text-[10px] font-black uppercase tracking-widest px-2 py-1.5 rounded-lg border ${
                  espacio.status === 'Disponible' ? 'bg-green-50 text-green-700 border-green-200' :
                  espacio.status === 'Ocupado' ? 'bg-red-50 text-red-700 border-red-200' :
                  'bg-orange-50 text-orange-700 border-orange-200'
                }`}>
                  {espacio.status}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Reservas Table */}
        <div className="lg:col-span-3">
          <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm">
            <div className="p-5 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
               <h3 className="font-bold text-slate-900 text-lg">Historial de Reservas</h3>
               <div className="flex items-center gap-2 text-xs font-bold bg-white p-1 rounded-xl border border-slate-200 shadow-sm">
                  {['Todas', 'Confirmadas', 'Pendientes'].map(f => (
                    <span 
                      key={f}
                      onClick={() => setFilter(f)}
                      className={`px-4 py-2 rounded-lg cursor-pointer transition-colors ${filter === f ? 'bg-slate-100 text-slate-800 shadow-sm' : 'text-slate-500 hover:text-slate-800 hover:bg-slate-50'}`}
                    >
                      {f}
                    </span>
                  ))}
               </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-100 text-[10px] uppercase tracking-[0.1em] text-slate-400 font-bold">
                    <th className="p-5 pl-8 font-black">Reserva</th>
                    <th className="p-5 font-black">Espacio</th>
                    <th className="p-5 font-black">Fecha y Hora</th>
                    <th className="p-5 font-black">Estado</th>
                    <th className="p-5 font-black text-right pr-8">Acciones</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {MOCK_RESERVAS.map((reserva, i) => (
                    <tr key={i} className="hover:bg-slate-50 transition-colors group cursor-pointer">
                      <td className="p-5 pl-8">
                         <div className="flex flex-col">
                            <span className="text-sm font-bold text-slate-900">{reserva.id}</span>
                            <span className="text-[11px] text-slate-500 font-medium mt-0.5">{reserva.usuario}</span>
                         </div>
                      </td>
                      <td className="p-5">
                         <div className="flex flex-col">
                            <span className="text-sm font-bold text-[#0D9488]">{reserva.espacio}</span>
                            <span className="text-[11px] text-slate-400 font-semibold mt-0.5 flex items-center gap-1">
                              <Users size={12}/> {reserva.asistentes} PAX
                            </span>
                         </div>
                      </td>
                      <td className="p-5">
                         <div className="flex flex-col text-sm text-slate-800 font-bold gap-0.5">
                            <span className="flex items-center gap-1.5"><CalendarIcon size={14} className="text-slate-400"/> {reserva.fecha}</span>
                            <span className="flex items-center gap-1.5 text-slate-500"><Clock size={14} className="text-slate-400"/> {reserva.hora}</span>
                         </div>
                      </td>
                      <td className="p-5">
                        <div className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest
                          ${reserva.estado === 'Confirmada' ? 'bg-green-50 text-green-700 border border-green-200' : 
                            reserva.estado === 'Pendiente' ? 'bg-amber-50 text-amber-700 border border-amber-200' : 
                            'bg-red-50 text-red-700 border border-red-200'}`}>
                          {reserva.estado === 'Confirmada' && <CheckCircle size={14} />}
                          {reserva.estado === 'Pendiente' && <Clock size={14} />}
                          {reserva.estado === 'Rechazada' && <XCircle size={14} />}
                          {reserva.estado}
                        </div>
                      </td>
                      <td className="p-5 pr-8 text-right">
                         {reserva.estado === 'Pendiente' && (
                           <div className="flex items-center justify-end gap-2">
                              <button className="p-2 bg-green-50 text-green-600 hover:bg-green-100 rounded-xl transition-all border border-green-200">
                                 <CheckCircle size={16} />
                              </button>
                              <button className="p-2 bg-red-50 text-red-600 hover:bg-red-100 rounded-xl transition-all border border-red-200">
                                 <XCircle size={16} />
                              </button>
                           </div>
                         )}
                         {reserva.estado !== 'Pendiente' && (
                           <button className="px-4 py-2 text-xs font-bold text-slate-500 hover:text-slate-800 bg-white border border-slate-200 hover:border-slate-300 rounded-xl transition-colors shadow-sm">
                             Ver Detalles
                           </button>
                         )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="p-5 border-t border-slate-100 bg-slate-50 flex justify-center">
              <button className="text-sm font-bold text-[#0D9488] hover:text-[#0f766c] transition-colors">Ver Reservas Anteriores</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

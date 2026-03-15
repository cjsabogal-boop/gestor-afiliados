"use client";

import { useState } from 'react';
import { Search, Filter, MoreVertical, Mail, Phone, ShieldCheck, AlertCircle, Building, User } from 'lucide-react';

const MOCK_AFILIADOS = [
  { id: 'A-101', name: 'Carlos E. Salamanca', property: 'Apto 402', type: 'Propietario', phone: '+57 300 123 4567', email: 'carlos@ejemplo.com', status: 'Al Día', lastPayment: '12 Feb 2026' },
  { id: 'A-102', name: 'Mariana Rodriguez', property: 'Apto 205', type: 'Residente', phone: '+57 311 987 6543', email: 'mariana.r@ejemplo.com', status: 'Moroso', lastPayment: '10 Ene 2026' },
  { id: 'A-103', name: 'Felipe Jaramillo', property: 'Apto 801', type: 'Propietario', phone: '+57 320 456 7890', email: 'felipe.jaramillo@ejemplo.com', status: 'Al Día', lastPayment: '15 Feb 2026' },
  { id: 'A-104', name: 'Inmobiliaria S.A.', property: 'Local 01', type: 'Inmobiliaria', phone: '+57 601 555 1234', email: 'admin@inmobiliaria.com', status: 'Al Día', lastPayment: '01 Feb 2026' },
  { id: 'A-105', name: 'Andrea Gómez', property: 'Apto 304', type: 'Propietario', phone: '+57 315 789 0123', email: 'agomez@ejemplo.com', status: 'Acuerdo', lastPayment: '28 Ene 2026' },
  { id: 'A-106', name: 'Luis C. Sarmiento', property: 'Apto PH-1', type: 'Propietario', phone: '+57 310 222 3333', email: 'luis.ph@ejemplo.com', status: 'Al Día', lastPayment: '10 Feb 2026' },
];

export default function AfiliadosPage() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="max-w-6xl mx-auto space-y-8 pb-20">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-white tracking-tight">Coproprietarios & Afiliados</h1>
          <p className="text-white/40 text-sm mt-1">Gestión del directorio, altas, bajas y grupos familiares.</p>
        </div>
        <div className="flex gap-3">
          <button className="px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm font-semibold transition-all">
            Importar Excel
          </button>
          <button className="px-5 py-2.5 rounded-xl bg-[#0D9488] hover:bg-[#0D9488]/90 text-[#020617] text-sm font-bold shadow-[0_0_20px_rgba(0,229,160,0.2)] transition-all gap-2 flex items-center">
            <User size={16} />
            Nuevo Afiliado
          </button>
        </div>
      </div>

      {/* KPI Cards for Demo */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-[#020617] border border-white/10 rounded-2xl p-6 relative overflow-hidden group shadow-2xl">
          <div className="absolute right-0 top-0 w-32 h-32 bg-[#0D9488]/10 rounded-full blur-[40px] opacity-100 group-hover:bg-[#0D9488]/20 transition-all duration-500" />
          <div className="relative z-10 flex justify-between items-start">
            <div>
              <p className="text-[10px] text-white/50 font-bold mb-2 uppercase tracking-[0.2em] whitespace-nowrap">Total Afiliados</p>
              <div className="flex items-end gap-2">
                <p className="text-4xl font-black text-white">245</p>
                <div className="text-[10px] bg-green-500/20 text-green-400 px-2 py-1 rounded-md mb-1 font-bold">+12%</div>
              </div>
            </div>
            <div className="p-3 bg-[#0D9488]/10 rounded-xl text-[#0D9488] border border-[#0D9488]/20">
              <User size={24} />
            </div>
          </div>
        </div>

        <div className="bg-[#020617] border border-white/10 rounded-2xl p-6 relative overflow-hidden group shadow-2xl">
          <div className="absolute right-0 top-0 w-32 h-32 bg-[#3B82F6]/10 rounded-full blur-[40px] opacity-100 group-hover:bg-[#3B82F6]/20 transition-all duration-500" />
          <div className="relative z-10 flex justify-between items-start">
            <div>
              <p className="text-[10px] text-white/50 font-bold mb-2 uppercase tracking-[0.2em] whitespace-nowrap">Ocupación</p>
              <div className="flex items-end gap-2">
                <p className="text-4xl font-black text-white">98%</p>
                <div className="text-xs text-white/40 mb-1 font-semibold">120 Unidades</div>
              </div>
            </div>
            <div className="p-3 bg-[#3B82F6]/10 rounded-xl text-[#3B82F6] border border-[#3B82F6]/20">
              <Building size={24} />
            </div>
          </div>
        </div>

        <div className="bg-[#020617] border border-white/10 rounded-2xl p-6 relative overflow-hidden group shadow-2xl">
          <div className="absolute right-0 top-0 w-32 h-32 bg-[#EF4444]/10 rounded-full blur-[40px] opacity-100 group-hover:bg-[#EF4444]/20 transition-all duration-500" />
          <div className="relative z-10 flex justify-between items-start">
            <div>
               <p className="text-[10px] text-white/50 font-bold mb-2 uppercase tracking-[0.2em] whitespace-nowrap">Cartera Vencida</p>
              <div className="flex items-end gap-2">
                <p className="text-4xl font-black text-[#EF4444]">12</p>
                <div className="text-xs text-white/40 mb-1 font-semibold">Alertas</div>
              </div>
            </div>
            <div className="p-3 bg-[#EF4444]/10 rounded-xl text-[#EF4444] border border-[#EF4444]/20">
              <AlertCircle size={24} />
            </div>
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div className="bg-[#020617] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
        <div className="p-5 border-b border-white/10 flex flex-col md:flex-row justify-between gap-4 items-center bg-white/[0.02]">
          <div className="relative w-full md:max-w-sm">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" size={18} />
            <input 
              type="text" 
              placeholder="Buscar por nombre, apto, correo..." 
              className="w-full bg-[#020617] border border-white/10 rounded-xl pl-12 pr-4 py-3 text-sm text-white focus:outline-none focus:border-[#0D9488]/50 focus:bg-white/5 transition-all placeholder:text-white/30 font-medium"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white text-sm font-semibold transition-colors border border-white/10 w-full md:w-auto justify-center">
            <Filter size={16} /> Filtros Avanzados
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-white/[0.01] border-b border-white/10 text-[10px] uppercase tracking-[0.1em] text-white/40 font-bold">
                <th className="p-5 pl-8 font-black">Afiliado</th>
                <th className="p-5 font-black">Propiedad / Unidad</th>
                <th className="p-5 font-black">Contacto Rápido</th>
                <th className="p-5 font-black">Situación Financiera</th>
                <th className="p-5 font-black text-right pr-8">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {MOCK_AFILIADOS.map((afiliado) => (
                <tr key={afiliado.id} className="hover:bg-white/[0.02] transition-colors group cursor-pointer">
                  <td className="p-5 pl-8">
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-sm font-black text-white shadow-lg ${
                          afiliado.status === 'Moroso' ? 'bg-gradient-to-br from-red-500 to-rose-600' : 'bg-gradient-to-br from-[#0D9488] to-teal-600'
                        }`}>
                          {afiliado.name.split(' ').map(n => n[0]).join('').substring(0, 2)}
                        </div>
                        {afiliado.status === 'Al Día' && (
                          <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-green-500 rounded-full border-2 border-[#020617]" />
                        )}
                         {afiliado.status === 'Moroso' && (
                          <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-red-500 rounded-full border-2 border-[#020617] animate-pulse" />
                        )}
                      </div>
                      <div>
                        <p className="text-sm font-bold text-white group-hover:text-[#0D9488] transition-colors">{afiliado.name}</p>
                        <p className="text-[11px] text-white/40 uppercase tracking-widest mt-0.5">{afiliado.id}</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-5">
                    <div className="flex flex-col">
                      <span className="text-sm text-white font-bold">{afiliado.property}</span>
                      <span className="text-[11px] text-white/40 uppercase tracking-wider font-semibold mt-0.5 flex items-center gap-1">
                        <Building size={10} className="text-[#3B82F6]" />
                        {afiliado.type}
                      </span>
                    </div>
                  </td>
                  <td className="p-5">
                    <div className="flex items-center gap-3">
                      <button className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#0D9488]/10 text-white/50 hover:text-[#0D9488] border border-white/5 hover:border-[#0D9488]/20 flex items-center justify-center transition-all">
                        <Mail size={14} />
                      </button>
                      <button className="w-8 h-8 rounded-full bg-white/5 hover:bg-green-500/10 text-white/50 hover:text-green-400 border border-white/5 hover:border-green-500/20 flex items-center justify-center transition-all">
                        <Phone size={14} />
                      </button>
                    </div>
                  </td>
                  <td className="p-5">
                    <div className="flex flex-col gap-1.5 items-start">
                      <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-[10px] font-black uppercase tracking-widest
                        ${afiliado.status === 'Al Día' ? 'bg-[#0D9488]/10 text-[#0D9488] border border-[#0D9488]/20 shadow-[0_0_10px_rgba(13,148,136,0.1)]' : 
                          afiliado.status === 'Moroso' ? 'bg-[#EF4444]/10 text-[#EF4444] border border-[#EF4444]/20 shadow-[0_0_10px_rgba(239,68,68,0.1)]' : 
                          'bg-[#F59E0B]/10 text-[#F59E0B] border border-[#F59E0B]/20 shadow-[0_0_10px_rgba(245,158,11,0.1)]'}`}>
                        {afiliado.status === 'Al Día' && <ShieldCheck size={12} />}
                        {afiliado.status === 'Moroso' && <AlertCircle size={12} />}
                        {afiliado.status}
                      </div>
                      <span className="text-[10px] text-white/30 font-semibold pl-1 whitespace-nowrap">
                        Último: {afiliado.lastPayment}
                      </span>
                    </div>
                  </td>
                  <td className="p-5 pr-8 text-right">
                    <button className="p-2 text-white/30 hover:text-white hover:bg-white/10 rounded-lg transition-colors border border-transparent hover:border-white/10">
                      <MoreVertical size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination */}
        <div className="p-5 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center bg-white/[0.01] gap-4">
          <span className="text-xs text-white/40 font-semibold tracking-wider">Mostrando <strong className="text-white">1</strong> a <strong className="text-white">6</strong> de <strong className="text-white">245</strong> registros</span>
          <div className="flex gap-2">
            <button className="px-4 py-2 rounded-lg bg-white/5 text-white/30 text-xs font-bold uppercase tracking-wider cursor-not-allowed border border-white/5">
              Anterior
            </button>
            <div className="hidden sm:flex items-center gap-1">
              <button className="w-8 h-8 rounded-lg bg-[#0D9488] text-[#020617] text-xs font-black flex items-center justify-center">1</button>
              <button className="w-8 h-8 rounded-lg bg-white/5 text-white/50 hover:bg-white/10 text-xs font-bold flex items-center justify-center transition-colors">2</button>
              <button className="w-8 h-8 rounded-lg bg-white/5 text-white/50 hover:bg-white/10 text-xs font-bold flex items-center justify-center transition-colors">3</button>
              <span className="text-white/30 mx-1">...</span>
              <button className="w-8 h-8 rounded-lg bg-white/5 text-white/50 hover:bg-white/10 text-xs font-bold flex items-center justify-center transition-colors">41</button>
            </div>
            <button className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white text-xs font-bold uppercase tracking-wider transition-colors border border-white/10">
              Siguiente
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

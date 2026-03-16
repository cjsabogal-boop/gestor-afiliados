"use client";

import { useState } from 'react';
import { Search, Filter, MoreVertical, Mail, Phone, ShieldCheck, AlertCircle, Building, User, Award } from 'lucide-react';
import { useSector } from '../SectorProvider';
import { getSectorData } from '../mockData';

export default function AfiliadosPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const { sector } = useSector();
  const data = getSectorData(sector);

  const mockAfiliados = data.mockUsers;

  return (
    <div className="max-w-6xl mx-auto space-y-8 pb-20">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-slate-900 tracking-tight">Directorio de {data.roles.users}</h1>
          <p className="text-slate-500 text-sm mt-1 font-medium">Gestión del directorio general, altas y bajas institucionales.</p>
        </div>
        <div className="flex gap-3">
          <button className="px-5 py-2.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 text-sm font-bold transition-all shadow-sm">
            Importar Excel
          </button>
          <button className="px-5 py-2.5 rounded-xl bg-[#0D9488] hover:bg-[#0f766c] text-white text-sm font-bold shadow-[0_4px_15px_rgba(13,148,136,0.3)] transition-all gap-2 flex items-center">
            <User size={16} />
            Nuevo {data.roles.userSingular}
          </button>
        </div>
      </div>

      {/* KPI Cards for Demo */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white border border-slate-200 rounded-3xl p-6 relative overflow-hidden group shadow-sm hover:shadow-md transition-shadow">
          <div className="absolute right-0 top-0 w-32 h-32 bg-[#0D9488]/10 rounded-full blur-[40px] opacity-0 group-hover:opacity-100 transition-all duration-500" />
          <div className="relative z-10 flex justify-between items-start">
            <div>
              <p className="text-[10px] text-slate-400 font-bold mb-2 uppercase tracking-[0.2em] whitespace-nowrap">Total Registrados</p>
              <div className="flex items-end gap-2">
                <p className="text-4xl font-black text-slate-900">1,245</p>
                <div className="text-[10px] bg-green-50 text-green-600 px-2 py-1.5 border border-green-100 rounded-lg mb-1 font-black tracking-widest">+12%</div>
              </div>
            </div>
            <div className="p-3 bg-slate-50 rounded-xl text-slate-500 border border-slate-100 group-hover:text-[#0D9488] group-hover:border-[#0D9488]/20 transition-colors">
              <User size={24} />
            </div>
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-3xl p-6 relative overflow-hidden group shadow-sm hover:shadow-md transition-shadow">
          <div className="absolute right-0 top-0 w-32 h-32 bg-[#3B82F6]/10 rounded-full blur-[40px] opacity-0 group-hover:opacity-100 transition-all duration-500" />
          <div className="relative z-10 flex justify-between items-start">
            <div>
              <p className="text-[10px] text-slate-400 font-bold mb-2 uppercase tracking-[0.2em] whitespace-nowrap">Asistencia / Quórum Promedio</p>
              <div className="flex items-end gap-2">
                <p className="text-4xl font-black text-slate-900">74%</p>
                <div className="text-xs text-slate-500 mb-1 font-bold">Histórico</div>
              </div>
            </div>
            <div className="p-3 bg-slate-50 rounded-xl text-slate-500 border border-slate-100 group-hover:text-[#3B82F6] group-hover:border-[#3B82F6]/20 transition-colors">
              <Award size={24} />
            </div>
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-3xl p-6 relative overflow-hidden group shadow-sm hover:shadow-md transition-shadow">
          <div className="absolute right-0 top-0 w-32 h-32 bg-[#ef4444]/10 rounded-full blur-[40px] opacity-0 group-hover:opacity-100 transition-all duration-500" />
          <div className="relative z-10 flex justify-between items-start">
            <div>
               <p className="text-[10px] text-slate-400 font-bold mb-2 uppercase tracking-[0.2em] whitespace-nowrap">Con Novedades</p>
              <div className="flex items-end gap-2">
                <p className="text-4xl font-black text-[#ef4444]">12</p>
                <div className="text-xs text-slate-500 mb-1 font-bold">En Revisión</div>
              </div>
            </div>
            <div className="p-3 bg-slate-50 rounded-xl text-slate-500 border border-slate-100 group-hover:text-[#ef4444] group-hover:border-[#ef4444]/20 transition-colors">
              <AlertCircle size={24} />
            </div>
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm">
        <div className="p-5 border-b border-slate-100 flex flex-col md:flex-row justify-between gap-4 items-center bg-slate-50/50">
          <div className="relative w-full md:max-w-sm">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text" 
              placeholder="Buscar por nombre o ID..." 
              className="w-full bg-white border border-slate-200 rounded-xl pl-12 pr-4 py-3 text-sm text-slate-800 focus:outline-none focus:border-[#0D9488] focus:ring-4 focus:ring-[#0D9488]/10 transition-all placeholder:text-slate-400 font-medium shadow-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white hover:bg-slate-50 text-slate-700 text-sm font-bold transition-colors border border-slate-200 shadow-sm w-full md:w-auto justify-center">
            <Filter size={16} /> Filtros Avanzados
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-100 text-[10px] uppercase tracking-[0.1em] text-slate-400 font-bold">
                <th className="p-5 pl-8 font-black">Información Personal</th>
                <th className="p-5 font-black">{data.roles.subLabel}</th>
                <th className="p-5 font-black">Contacto Rápido</th>
                <th className="p-5 font-black">Estado Institucional</th>
                <th className="p-5 font-black text-right pr-8">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {mockAfiliados.map((afiliado: any) => (
                <tr key={afiliado.id} className="hover:bg-slate-50 transition-colors group cursor-pointer">
                  <td className="p-5 pl-8">
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-sm font-black text-white shadow-sm border border-black/5 ${
                          afiliado.status.includes('Moroso') ? 'bg-gradient-to-br from-red-500 to-rose-600' : 'bg-gradient-to-br from-[#0D9488] to-teal-600'
                        }`}>
                          {afiliado.name.replace('Dr. ', '').replace('Dra. ', '').replace('Cap. ', '').replace('PO. ', '').split(' ').map((n: string) => n[0]).join('').substring(0, 2)}
                        </div>
                        {afiliado.status === 'Al Día' && (
                          <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-green-500 rounded-full border-2 border-white shadow-sm" />
                        )}
                         {afiliado.status.includes('Moroso') && (
                          <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-red-500 rounded-full border-2 border-white shadow-sm animate-pulse" />
                        )}
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-800 group-hover:text-[#0D9488] transition-colors">{afiliado.name}</p>
                        <p className="text-[11px] text-slate-400 font-bold uppercase tracking-widest mt-0.5">{afiliado.id}</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-5">
                    <div className="flex flex-col">
                      <span className="text-sm text-slate-800 font-bold">{afiliado.property}</span>
                      <span className="text-[11px] text-slate-500 uppercase tracking-widest font-bold mt-0.5 flex items-center gap-1">
                        {afiliado.type.includes('Corporativo') ? <Building size={10} className="text-[#3B82F6]" /> : <Award size={10} className="text-[#0D9488]" />}
                        {afiliado.type}
                      </span>
                    </div>
                  </td>
                  <td className="p-5">
                    <div className="flex items-center gap-3">
                      <button className="w-8 h-8 rounded-xl bg-slate-100 hover:bg-[#0D9488]/10 text-slate-400 hover:text-[#0D9488] border border-slate-200 hover:border-[#0D9488]/20 flex items-center justify-center transition-all shadow-sm">
                        <Mail size={14} />
                      </button>
                      <button className="w-8 h-8 rounded-xl bg-slate-100 hover:bg-green-50 text-slate-400 hover:text-green-600 border border-slate-200 hover:border-green-200 flex items-center justify-center transition-all shadow-sm">
                        <Phone size={14} />
                      </button>
                    </div>
                  </td>
                  <td className="p-5">
                    <div className="flex flex-col gap-1.5 items-start">
                      <div className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest
                        ${afiliado.status === 'Al Día' ? 'bg-green-50 text-green-700 border border-green-200 shadow-sm' : 
                          afiliado.status.includes('Moroso') ? 'bg-red-50 text-red-700 border border-red-200 shadow-sm' : 
                          'bg-amber-50 text-amber-700 border border-amber-200 shadow-sm'}`}>
                        {afiliado.status === 'Al Día' && <ShieldCheck size={12} />}
                        {afiliado.status.includes('Moroso') && <AlertCircle size={12} />}
                        {afiliado.status}
                      </div>
                      <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest pl-1 whitespace-nowrap">
                        Vlr Prox: {afiliado.amount}
                      </span>
                    </div>
                  </td>
                  <td className="p-5 pr-8 text-right">
                    <button className="p-2 text-slate-400 hover:text-slate-800 hover:bg-slate-100 rounded-xl transition-colors border border-transparent hover:border-slate-200">
                      <MoreVertical size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination */}
        <div className="p-5 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center bg-slate-50 gap-4">
          <span className="text-xs text-slate-500 font-medium">Mostrando <strong className="text-slate-800">1</strong> a <strong className="text-slate-800">{mockAfiliados.length}</strong> de <strong className="text-slate-800">1,245</strong> registros</span>
          <div className="flex gap-2">
            <button className="px-4 py-2 rounded-xl bg-white text-slate-400 text-xs font-bold uppercase tracking-widest cursor-not-allowed border border-slate-200">
              Anterior
            </button>
            <div className="hidden sm:flex items-center gap-1">
              <button className="w-8 h-8 rounded-xl bg-[#0D9488] text-white text-xs font-black flex items-center justify-center shadow-md border border-[#0D9488]">1</button>
              <button className="w-8 h-8 rounded-xl bg-white text-slate-500 hover:bg-slate-50 text-xs font-bold flex items-center justify-center transition-colors border border-slate-200">2</button>
              <button className="w-8 h-8 rounded-xl bg-white text-slate-500 hover:bg-slate-50 text-xs font-bold flex items-center justify-center transition-colors border border-slate-200">3</button>
              <span className="text-slate-400 mx-1 font-bold">...</span>
              <button className="w-8 h-8 rounded-xl bg-white text-slate-500 hover:bg-slate-50 text-xs font-bold flex items-center justify-center transition-colors border border-slate-200">41</button>
            </div>
            <button className="px-4 py-2 rounded-xl bg-white hover:bg-slate-50 text-slate-700 text-xs font-bold uppercase tracking-widest transition-colors border border-slate-200 shadow-sm">
              Siguiente
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

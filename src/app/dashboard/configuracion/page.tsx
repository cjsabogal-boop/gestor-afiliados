"use client";

import { Settings, User, CreditCard, Bell, Shield, Key, Save, Smartphone, MapPin, Building2, Eye, EyeOff } from 'lucide-react';

export default function ConfiguracionPage() {
  return (
    <div className="max-w-6xl mx-auto space-y-8 pb-20">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-slate-900 tracking-tight">Configuración del Sistema</h1>
          <p className="text-slate-500 text-sm mt-1 font-medium">Gestiona preferencias de la asociación, seguridad, roles e integraciones API.</p>
        </div>
        <button className="px-5 py-2.5 rounded-xl bg-[#0D9488] hover:bg-[#0f766c] text-white text-sm font-bold shadow-[0_4px_15px_rgba(13,148,136,0.3)] transition-all flex items-center gap-2">
          <Save size={16} /> Guardar Cambios
        </button>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar Nav */}
        <div className="lg:w-64 flex-shrink-0 space-y-2">
          {[
            { id: 'general', icon: Building2, label: 'Perfil de Asociación', active: true },
            { id: 'security', icon: Shield, label: 'Seguridad & Roles', active: false },
            { id: 'billing', icon: CreditCard, label: 'Facturación & Pagos', active: false },
            { id: 'notifications', icon: Bell, label: 'Alertas', active: false },
            { id: 'api', icon: Key, label: 'Integraciones API', active: false },
          ].map((item) => (
            <button key={item.id} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-sm transition-all shadow-sm ${item.active ? 'bg-[#0D9488] text-white shadow-[#0D9488]/20' : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-200'}`}>
              <item.icon size={18} />
              {item.label}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="flex-1 space-y-6">
          <div className="bg-white border border-slate-200 rounded-3xl p-6 md:p-8 shadow-sm">
            <h3 className="font-bold text-slate-900 text-lg mb-6 flex items-center gap-2 pb-4 border-b border-slate-100">
              <Building2 size={20} className="text-[#0D9488]" /> Información Corporativa
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Nombre Comercial</label>
                <input type="text" defaultValue="Asociación Médica Nacional" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-800 font-medium focus:outline-none focus:ring-2 focus:ring-[#0D9488]/20 focus:border-[#0D9488] transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Razón Social / NIT</label>
                <input type="text" defaultValue="900.123.456-7" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-800 font-medium focus:outline-none focus:ring-2 focus:ring-[#0D9488]/20 focus:border-[#0D9488] transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Correo de Contacto</label>
                <input type="email" defaultValue="admin@asociacion.org" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-800 font-medium focus:outline-none focus:ring-2 focus:ring-[#0D9488]/20 focus:border-[#0D9488] transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Teléfono Principal</label>
                <div className="relative">
                  <Smartphone className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                  <input type="text" defaultValue="+57 300 123 4567" className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-sm text-slate-800 font-medium focus:outline-none focus:ring-2 focus:ring-[#0D9488]/20 focus:border-[#0D9488] transition-all" />
                </div>
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Dirección Comercial</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                  <input type="text" defaultValue="Cra. 43A #1-50, Torre Médica, Oficina 402, Medellín" className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-sm text-slate-800 font-medium focus:outline-none focus:ring-2 focus:ring-[#0D9488]/20 focus:border-[#0D9488] transition-all" />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-3xl p-6 md:p-8 shadow-sm">
            <h3 className="font-bold text-slate-900 text-lg mb-6 flex items-center gap-2 pb-4 border-b border-slate-100">
              <User size={20} className="text-[#3B82F6]" /> Configuración de Recaudos
            </h3>

            <div className="space-y-6">
              <div className="flex items-center justify-between p-4 bg-slate-50 border border-slate-100 rounded-2xl">
                <div>
                  <h4 className="font-bold text-slate-800 text-sm">Cuota Base Mensual</h4>
                  <p className="text-xs text-slate-500 mt-1 font-medium">Valor por defecto que se cobrará a los afiliados a fin de mes.</p>
                </div>
                <div className="w-32">
                  <input type="text" defaultValue="$ 350,000" className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-sm text-slate-800 font-black text-right shadow-sm focus:outline-none focus:border-[#0D9488] transition-all" />
                </div>
              </div>

              <div className="flex items-center justify-between p-4 bg-slate-50 border border-slate-100 rounded-2xl">
                <div>
                  <h4 className="font-bold text-slate-800 text-sm">Moneda del Sistema</h4>
                  <p className="text-xs text-slate-500 mt-1 font-medium">Moneda principal para reportes financieros y facturación.</p>
                </div>
                <select className="bg-white border border-slate-200 rounded-xl px-4 py-2 text-sm text-slate-800 font-bold shadow-sm focus:outline-none focus:border-[#0D9488] transition-all">
                  <option>COP (Pesos Colombianos)</option>
                  <option>USD (Dólares)</option>
                </select>
              </div>
            </div>
          </div>
          
          <div className="bg-white border border-red-200 rounded-3xl p-6 md:p-8 shadow-sm relative overflow-hidden group">
            <div className="absolute right-0 top-0 w-32 h-32 bg-red-100 rounded-full blur-[40px] -z-10 group-hover:bg-red-200 transition-colors" />
            <div className="relative z-10">
              <h3 className="font-bold text-red-700 text-lg mb-2">Zona de Peligro</h3>
              <p className="text-sm font-medium text-slate-600 mb-6">Acciones destructivas y reseteo completo del módulo asociado. Requiere verificación en dos pasos (2FA).</p>
              
              <button className="px-5 py-2.5 rounded-xl bg-white hover:bg-red-50 border border-red-200 text-red-600 font-bold text-sm shadow-sm transition-all">
                Pausar Recaudos Temporales
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

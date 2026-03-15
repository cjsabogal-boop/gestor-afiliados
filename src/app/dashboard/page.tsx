"use client";

import { Users, Bot, Shield, Wallet, Activity, Flame } from 'lucide-react';

export default function DashboardPage() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Header & Main Stats */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-white tracking-tight">Consola Administrativa</h1>
          <p className="text-white/40 text-sm mt-1">Supervisando cartera, reservas de espacios y actividad de residentes.</p>
        </div>
        <div className="flex gap-3">
          <button className="px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm font-semibold transition-all">
            Exportar Balance
          </button>
          <button className="px-5 py-2.5 rounded-xl bg-[#0D9488] hover:bg-[#0D9488]/90 text-[#020617] text-sm font-bold shadow-[0_0_20px_rgba(0,229,160,0.2)] transition-all">
            + Nueva Cuota
          </button>
        </div>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <StatCard title="Recaudo Mes" value="$18.5M" change="+12%" icon={<Wallet size={20} className="text-[#0D9488]" />} gradient="from-[#0D9488]/20 to-transparent" />
        <StatCard title="Residentes Activos" value="245" change="+340" icon={<Users size={20} className="text-[#2563EB]" />} gradient="from-[#2563EB]/20 to-transparent" />
        <StatCard title="Reservas Pendientes" value="12" change="Este mes" icon={<Bot size={20} className="text-[#3B82F6]" />} gradient="from-[#3B82F6]/20 to-transparent" />
        <StatCard title="Morosidad Global" value="14.5%" change="-0.5%" icon={<Activity size={20} className="text-[#0ea5e9]" />} gradient="from-[#0ea5e9]/20 to-transparent" alert />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Actividad Transaccional */}
        <div className="lg:col-span-2 bg-gradient-to-b from-white/5 to-white/[0.01] border border-white/10 rounded-2xl p-6 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#0D9488] via-[#3B82F6] to-[#2563EB]" />
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-white">Actividad Reciente en la Comunidad</h3>
            <button className="text-xs text-[#0D9488] font-semibold hover:underline">Ver Trazabilidad ➔</button>
          </div>
          
          <div className="space-y-4">
            {[
              { type: 'Reserva Confirmada (BBQ)', user: 'Apto 402 - Juan D.', time: 'Hace 5 min', amount: '$150,000', color: 'text-[#0D9488]' },
              { type: 'Pago de Administración', user: 'Apto 105 - Marta Gomez', time: 'Hace 15 min', amount: '$350,000', color: 'text-[#3B82F6]' },
              { type: 'Check-in Asamblea', user: 'Apto 801 - Carlos Ruiz', time: 'Hace 1 hora', amount: 'Quórum +1.2%', color: 'text-[#2563EB]' },
              { type: 'Alerta Morosidad (Wompi)', user: 'Apto 204 - Sin pago', time: 'Hace 2 horas', amount: 'Vencido', color: 'text-[#EF4444]' },
            ].map((evt, i) => (
              <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors">
                <div className="flex items-center gap-4">
                  <div className={`w-2 h-2 rounded-full ${evt.color.replace('text', 'bg')} shadow-[0_0_10px_currentColor]`} />
                  <div>
                    <p className="text-sm font-semibold text-white">{evt.type}</p>
                    <p className="text-xs text-white/40">{evt.user}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className={`text-sm font-bold ${evt.color}`}>{evt.amount}</p>
                  <p className="text-[10px] text-white/30 tracking-wider uppercase">{evt.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Módulos Activos & Blockchain */}
        <div className="space-y-6">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h3 className="font-bold text-white mb-4 flex items-center gap-2">
              <Shield size={16} className="text-[#0ea5e9]" /> Estado Operativo
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-white/60">Quórum Asamblea Ordinaria</span>
                <span className="text-xs font-bold px-2 py-1 rounded bg-[#0D9488]/10 text-[#0D9488]">Activa</span>
              </div>
              <div className="w-full bg-white/5 rounded-full h-1.5 overflow-hidden">
                <div className="bg-[#0D9488] w-[65%] h-full shadow-[0_0_10px_#0D9488]" />
              </div>
              <p className="text-[10px] text-white/40 text-right">Coeficiente actual: 65%</p>
            </div>
            
            <div className="mt-6 pt-6 border-t border-white/10 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-white/60">Integración Bancaria Wompi</span>
                <span className="text-xs font-bold text-[#3B82F6]">Estable (99.9%)</span>
              </div>
                <div className="flex items-center justify-between">
                <span className="text-sm text-white/60">Sincronización Accesos QR</span>
                <span className="text-xs font-bold text-[#2563EB]">Sync Hace 1m</span>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-gradient-to-br from-[#0D9488]/20 via-[#3B82F6]/20 to-[#2563EB]/20 p-[1px]">
            <div className="bg-[#020617] rounded-2xl p-6 h-full text-center space-y-3">
              <Flame className="mx-auto text-[#0ea5e9]" size={32} />
              <h4 className="font-bold text-white">Asamblea Virtual en Vivo</h4>
              <p className="text-xs text-white/50 leading-relaxed">
                Las votaciones de presupuesto inician en 10 minutos. Controla el acceso, intervenciones de voz y muestra el tablero de resultados.
              </p>
              <button className="w-full mt-2 py-2 rounded-xl bg-white text-[#020617] text-xs font-black uppercase tracking-widest hover:bg-gray-200 transition-colors">
                Abrir Consola de Control
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({ title, value, change, icon, gradient, alert = false }: { title: string, value: string, change: string, icon: React.ReactNode, gradient: string, alert?: boolean }) {
  return (
    <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-5 relative overflow-hidden group hover:border-white/10 transition-colors">
      <div className={`absolute -right-10 -top-10 w-32 h-32 bg-gradient-to-br ${gradient} rounded-full blur-[40px] opacity-50 group-hover:opacity-100 transition-opacity`} />
      
      <div className="flex justify-between items-start mb-4 relative z-10">
        <div className="p-2 bg-white/5 rounded-xl">
          {icon}
        </div>
        <div className={`text-xs font-bold px-2 py-1 rounded-md ${alert ? 'bg-red-500/10 text-red-400' : 'bg-green-500/10 text-green-400'}`}>
          {change}
        </div>
      </div>
      <div className="relative z-10">
        <h4 className="text-xs text-white/40 font-semibold mb-1 uppercase tracking-wider">{title}</h4>
        <p className="text-2xl font-black text-white">{value}</p>
      </div>
    </div>
  );
}

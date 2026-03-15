"use client";

import { Users, Bot, Shield, Wallet, Activity, Flame } from 'lucide-react';

export default function DashboardPage() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Header & Main Stats */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-slate-900 tracking-tight">Consola Administrativa</h1>
          <p className="text-slate-500 text-sm mt-1 font-medium">Supervisando cartera, cuotas sindicales y actividad de asociados.</p>
        </div>
        <div className="flex gap-3">
          <button className="px-5 py-2.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 text-sm font-bold transition-all shadow-sm">
            Exportar Balance
          </button>
          <button className="px-5 py-2.5 rounded-xl bg-[#0D9488] hover:bg-[#0f766c] text-white text-sm font-bold shadow-[0_4px_15px_rgba(13,148,136,0.3)] transition-all">
            + Nueva Facturación
          </button>
        </div>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <StatCard title="Recaudo Mes" value="$85.4M" change="+12%" icon={<Wallet size={20} className="text-[#0D9488]" />} gradient="from-[#0D9488]/10 to-transparent" />
        <StatCard title="Miembros Activos" value="1,245" change="+34" icon={<Users size={20} className="text-[#2563EB]" />} gradient="from-[#2563EB]/10 to-transparent" />
        <StatCard title="Reservas / Eventos" value="18" change="Este mes" icon={<Bot size={20} className="text-[#3B82F6]" />} gradient="from-[#3B82F6]/10 to-transparent" />
        <StatCard title="Morosidad Global" value="4.2%" change="-1.5%" icon={<Activity size={20} className="text-[#ef4444]" />} gradient="from-[#ef4444]/10 to-transparent" alert />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Actividad Transaccional */}
        <div className="lg:col-span-2 bg-white border border-slate-200 rounded-3xl p-6 md:p-8 relative overflow-hidden shadow-sm">
          <div className="flex justify-between items-center mb-8">
            <h3 className="font-bold text-slate-900 text-lg">Actividad Reciente en la Asociación</h3>
            <button className="text-xs text-[#0D9488] font-bold hover:underline bg-[#0D9488]/5 px-3 py-1.5 rounded-lg border border-[#0D9488]/10">Ver Trazabilidad ➔</button>
          </div>
          
          <div className="space-y-4">
            {[
              { type: 'Reserva Confirmada (Auditorio)', user: 'ID: ACM-402 - Dr. Juan D.', time: 'Hace 5 min', amount: '$150,000', color: 'text-[#0D9488]' },
              { type: 'Pago de Membresía (Anual)', user: 'ID: ACM-105 - Dra. Marta Gomez', time: 'Hace 15 min', amount: '$3,500,000', color: 'text-[#3B82F6]' },
              { type: 'Check-in Asamblea General', user: 'ID: ACM-801 - Dr. Carlos Ruiz', time: 'Hace 1 hora', amount: 'Quórum +0.5%', color: 'text-[#2563EB]' },
              { type: 'Alerta Morosidad Emitida (SMS)', user: 'ID: ACM-204 - Pendiente', time: 'Hace 2 horas', amount: 'Vencido', color: 'text-[#ef4444]' },
            ].map((evt, i) => (
              <div key={i} className="flex items-center justify-between p-4 rounded-2xl bg-slate-50/50 border border-slate-100 hover:border-slate-200 transition-colors">
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 flex items-center justify-center rounded-xl bg-white border border-slate-100 shadow-sm ${evt.color}`}>
                     <div className={`w-2 h-2 rounded-full ${evt.color.replace('text', 'bg')} shadow-sm`} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-800">{evt.type}</p>
                    <p className="text-xs text-slate-500 mt-0.5 font-medium">{evt.user}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className={`text-sm font-black ${evt.color}`}>{evt.amount}</p>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">{evt.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modules Status */}
        <div className="space-y-6">
          <div className="bg-white border border-slate-200 rounded-3xl p-6 md:p-8 shadow-sm">
            <h3 className="font-bold text-slate-900 mb-6 flex items-center gap-2">
              <Shield size={18} className="text-[#0ea5e9]" /> Estado Operativo
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-600 font-medium">Quórum Asamblea Ordinaria</span>
                <span className="text-xs font-black px-2.5 py-1 rounded bg-[#0D9488]/10 text-[#0D9488] border border-[#0D9488]/20">ACTIVA</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden shadow-inner">
                <div className="bg-gradient-to-r from-[#01a877] to-[#0D9488] w-[65%] h-full" />
              </div>
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest text-right">Quórum actual: 65%</p>
            </div>
            
            <div className="mt-6 pt-6 border-t border-slate-100 space-y-4">
              <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100">
                <span className="text-xs text-slate-600 font-semibold">Pasarela Pagos Wompi</span>
                <span className="text-[10px] font-black tracking-widest uppercase text-[#3B82F6]">100% Online</span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100">
                <span className="text-xs text-slate-600 font-semibold">Sincronización Accesos QR</span>
                <span className="text-[10px] font-black tracking-widest uppercase text-[#2563EB]">Hace 1 min</span>
              </div>
            </div>
          </div>

          <div className="rounded-3xl bg-gradient-to-br from-[#0D9488] via-[#3B82F6] to-[#2563EB] p-[2px] shadow-lg shadow-blue-500/20">
            <div className="bg-white rounded-[22px] p-6 text-center space-y-4 relative overflow-hidden">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#0ea5e9]/10 rounded-full blur-xl" />
              <Flame className="mx-auto text-[#0ea5e9] relative z-10" size={32} />
              <div className="relative z-10">
                 <h4 className="font-bold text-slate-900">Asamblea Virtual en Vivo</h4>
                 <p className="text-xs text-slate-500 mt-2 font-medium leading-relaxed">
                   Las votaciones de presupuesto inician en 10 minutos. Controla el acceso, intervenciones de voz y muestra el tablero de resultados.
                 </p>
              </div>
              <button className="w-full relative z-10 mt-4 py-3 rounded-xl bg-slate-900 text-white text-xs font-black uppercase tracking-widest hover:bg-slate-800 transition-colors shadow-md">
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
    <div className="bg-white border border-slate-200 rounded-3xl p-6 relative overflow-hidden group hover:border-[#0D9488]/30 transition-all shadow-sm hover:shadow-md">
      <div className={`absolute -right-6 -top-6 w-32 h-32 bg-gradient-to-br ${gradient} rounded-full blur-[30px] opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
      
      <div className="flex justify-between items-start mb-6 relative z-10">
        <div className="p-2.5 bg-slate-50 border border-slate-100 rounded-xl shadow-sm">
          {icon}
        </div>
        <div className={`text-[10px] font-black px-2 py-1 rounded-lg border ${alert ? 'bg-red-50 text-red-600 border-red-100' : 'bg-green-50 text-green-600 border-green-100'}`}>
          {change}
        </div>
      </div>
      <div className="relative z-10">
        <h4 className="text-[11px] text-slate-400 font-bold mb-1 uppercase tracking-widest">{title}</h4>
        <p className="text-3xl font-black text-slate-900 tracking-tight">{value}</p>
      </div>
    </div>
  );
}

"use client";

import { 
  Building2, Users, Flame, Link as LinkIcon, Bot, Shield, Wallet, Gamepad2, 
  ArrowUpRight, LayoutGrid, Search, Bell, Settings, ChevronRight, Activity, Globe
} from 'lucide-react';
import Link from 'next/link';

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-[#060B14] text-[#E8EDF5] font-sans selection:bg-[#00E5A0]/30 flex">
      {/* Sidebar */}
      <aside className="w-64 border-r border-white/10 bg-[#060B14]/80 backdrop-blur-xl hidden md:flex flex-col flex-shrink-0 relative overflow-hidden">
        {/* Glow */}
        <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-[#00E5A0]/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="h-20 flex items-center px-6 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#00E5A0] to-[#01a877] flex items-center justify-center shadow-[0_0_15px_rgba(0,229,160,0.3)]">
              <Globe className="text-[#060B14]" size={16} strokeWidth={3} />
            </div>
            <span className="text-lg font-bold tracking-tight text-white">
              SaaS<span className="text-[#00E5A0]">Admin</span>
            </span>
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto py-6 px-4 space-y-1 relative z-10">
          <div className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em] mb-4 pl-2">Módulos Core</div>
          <SidebarItem icon={<LayoutGrid size={18} />} label="Centro de Control" active />
          <SidebarItem icon={<Users size={18} />} label="Afiliados & KYC" />
          <SidebarItem icon={<Globe size={18} />} label="Portal Empleadores" badge="B2B" />
          
          <div className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em] mb-4 mt-8 pl-2">Motor Fintech</div>
          <SidebarItem icon={<ArrowUpRight size={18} />} label="Open Finance (Crédito)" />
          <SidebarItem icon={<Wallet size={18} />} label="Pagos & Recaudos" />
          <SidebarItem icon={<Shield size={18} />} label="Seguros Embebidos" badge="IA" />
          
          <div className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em] mb-4 mt-8 pl-2">Engagement</div>
          <SidebarItem icon={<Bot size={18} />} label="IA Transaccional" />
          <SidebarItem icon={<Gamepad2 size={18} />} label="Gamificación & Tokens" />
          <SidebarItem icon={<LinkIcon size={18} />} label="Votación Blockchain" />
        </nav>

        <div className="p-4 border-t border-white/10">
          <div className="flex items-center gap-3 p-2 rounded-xl bg-white/5 hover:bg-white/10 transition-colors cursor-pointer">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-xs font-bold text-white">
              FE
            </div>
            <div className="flex-1 overflow-hidden">
              <p className="text-xs font-semibold text-white truncate">Fondo Empleados</p>
              <p className="text-[10px] text-[#00E5A0] truncate">Plan Enterprise • Pro</p>
            </div>
            <Settings size={14} className="text-white/50" />
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 relative">
        <div className="absolute top-[10%] left-[20%] w-[500px] h-[500px] bg-[#A855F7]/5 rounded-full blur-[150px] pointer-events-none" />

        {/* Header */}
        <header className="h-20 border-b border-white/10 bg-[#060B14]/60 backdrop-blur-lg flex items-center justify-between px-8 sticky top-0 z-20">
          <div className="flex items-center gap-4 flex-1">
            <div className="relative w-full max-w-md hidden md:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30" size={16} />
              <input 
                type="text" 
                placeholder="Buscar afiliados, créditos, empresas con Inteligencia Artificial..." 
                className="w-full bg-white/5 border border-white/10 rounded-full pl-10 pr-4 py-2 text-sm text-white focus:outline-none focus:border-[#00E5A0]/50 focus:bg-white/10 transition-all placeholder:text-white/20"
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="relative p-2 text-white/60 hover:text-white transition-colors">
              <Bell size={20} />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-[#FF6B35] animate-pulse" />
            </button>
            <div className="flex items-center gap-2 pl-4 border-l border-white/10 text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#00E5A0] animate-pulse shadow-[0_0_10px_#00E5A0]" />
              <span className="text-[#00E5A0] tracking-widest uppercase">Operativo</span>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="flex-1 overflow-y-auto p-8 relative z-10">
          <div className="max-w-6xl mx-auto space-y-8">
            {/* Header & Main Stats */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <h1 className="text-3xl font-black text-white tracking-tight">Terminal de Control</h1>
                <p className="text-white/40 text-sm mt-1">Supervisando operaciones, flujos de crédito e inteligencia artificial.</p>
              </div>
              <div className="flex gap-3">
                <button className="px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm font-semibold transition-all">
                  Generar Reporte Regulatorio
                </button>
                <button className="px-5 py-2.5 rounded-xl bg-[#00E5A0] hover:bg-[#00E5A0]/90 text-[#060B14] text-sm font-bold shadow-[0_0_20px_rgba(0,229,160,0.2)] transition-all">
                  + Acciones IA
                </button>
              </div>
            </div>

            {/* KPIs */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <StatCard title="Capital Colocado (Open Finance)" value="$4.2M" change="+12%" icon={<Wallet size={20} className="text-[#00E5A0]" />} gradient="from-[#00E5A0]/20 to-transparent" />
              <StatCard title="Afiliados KYC Bio" value="12,450" change="+340" icon={<Users size={20} className="text-[#A855F7]" />} gradient="from-[#A855F7]/20 to-transparent" />
              <StatCard title="Consultas IA Resueltas" value="8,920" change="98% auto." icon={<Bot size={20} className="text-[#3B82F6]" />} gradient="from-[#3B82F6]/20 to-transparent" />
              <StatCard title="Riesgo de Deserción (ML)" value="1.2%" change="-0.5%" icon={<Activity size={20} className="text-[#FF6B35]" />} gradient="from-[#FF6B35]/20 to-transparent" alert />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Actividad Transaccional */}
              <div className="lg:col-span-2 bg-gradient-to-b from-white/5 to-white/[0.01] border border-white/10 rounded-2xl p-6 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#00E5A0] via-[#3B82F6] to-[#A855F7]" />
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-bold text-white">Flujo Neuronal Financiero</h3>
                  <button className="text-xs text-[#00E5A0] font-semibold hover:underline">Ver Trazabilidad ➔</button>
                </div>
                
                <div className="space-y-4">
                  {[
                    { type: 'IA Aprobó Microcrédito', user: 'Carlos M.', time: 'Hace 2 min', amount: '$500,000', color: 'text-[#00E5A0]' },
                    { type: 'Conciliación B2B Nómina', user: 'Empresa ACME', time: 'Hace 15 min', amount: '145 Pagos', color: 'text-[#3B82F6]' },
                    { type: 'Contrato Seguro Vida (1-Clic)', user: 'María J.', time: 'Hace 1 hora', amount: '$45,000/mes', color: 'text-[#A855F7]' },
                    { type: 'Token Reward Reclamado', user: 'Nivel Oro', time: 'Hace 2 horas', amount: '150 Tokens', color: 'text-[#EAB308]' },
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
                    <Shield size={16} className="text-[#FF6B35]" /> Estado de Red
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-white/60">Votación Blockchain en curso</span>
                      <span className="text-xs font-bold px-2 py-1 rounded bg-[#00E5A0]/10 text-[#00E5A0]">Activa</span>
                    </div>
                    <div className="w-full bg-white/5 rounded-full h-1.5 overflow-hidden">
                      <div className="bg-[#00E5A0] w-[65%] h-full shadow-[0_0_10px_#00E5A0]" />
                    </div>
                    <p className="text-[10px] text-white/40 text-right">Quórum actual: 65%</p>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-white/10 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-white/60">Conexión Open Finance</span>
                      <span className="text-xs font-bold text-[#3B82F6]">Estable (99.9%)</span>
                    </div>
                     <div className="flex items-center justify-between">
                      <span className="text-sm text-white/60">API Empleadores (RRHH)</span>
                      <span className="text-xs font-bold text-[#A855F7]">Sync Hace 1m</span>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl bg-gradient-to-br from-[#00E5A0]/20 via-[#3B82F6]/20 to-[#A855F7]/20 p-[1px]">
                  <div className="bg-[#060B14] rounded-2xl p-6 h-full text-center space-y-3">
                    <Flame className="mx-auto text-[#FF6B35]" size={32} />
                    <h4 className="font-bold text-white">Desbloquear Seguros de Vehículos</h4>
                    <p className="text-xs text-white/50 leading-relaxed">
                      Lanza el nuevo módulo de seguros vehiculares a 1-clic embebido en el app móvil.
                    </p>
                    <button className="w-full mt-2 py-2 rounded-xl bg-white text-[#060B14] text-xs font-black uppercase tracking-widest hover:bg-gray-200 transition-colors">
                      Instalar Módulo
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Mobile Nav */}
      <nav className="fixed bottom-0 w-full border-t border-white/10 bg-[#060B14]/80 backdrop-blur-xl md:hidden z-50 flex justify-around p-4 text-white/50">
        <LayoutGrid className="text-[#00E5A0]" />
        <Users />
        <ArrowUpRight />
        <Bot />
        <Gamepad2 />
      </nav>
    </div>
  );
}

function SidebarItem({ icon, label, active = false, badge = null }: { icon: React.ReactNode, label: string, active?: boolean, badge?: string | null }) {
  return (
    <a href="#" className={`flex items-center justify-between px-3 py-2.5 rounded-xl transition-all group ${active ? 'bg-[#00E5A0]/10 text-[#00E5A0]' : 'text-white/50 hover:bg-white/5 hover:text-white'}`}>
      <div className="flex items-center gap-3">
        <span className={active ? '' : 'group-hover:scale-110 transition-transform'}>{icon}</span>
        <span className="text-sm font-semibold">{label}</span>
      </div>
      {badge && (
        <span className="text-[9px] font-black tracking-widest uppercase px-1.5 py-0.5 rounded bg-white/10 text-white group-hover:bg-[#00E5A0] group-hover:text-[#060B14] transition-colors">
          {badge}
        </span>
      )}
    </a>
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

"use client";

import { 
  Building2, Users, Link as LinkIcon, Bot, Shield, Wallet, Gamepad2, 
  ArrowUpRight, LayoutGrid, Search, Bell, Settings, Globe
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname();

  const navItems = [
    { section: "Gestión", items: [
      { id: "dashboard", icon: <LayoutGrid size={18} />, label: "Dashboard", href: "/dashboard" },
      { id: "afiliados", icon: <Users size={18} />, label: "Coproprietarios & Afiliados", href: "/dashboard/afiliados" },
      { id: "espacios", icon: <Building2 size={18} />, label: "Zonas Comunes", href: "/dashboard/espacios" },
    ]},
    { section: "Finanzas & Cobros", items: [
      { id: "cuotas", icon: <Wallet size={18} />, label: "Cuotas de Administración", href: "/dashboard/cuotas" },
      { id: "pagos", icon: <ArrowUpRight size={18} />, label: "Pagos (Wompi/PSE)", href: "/dashboard/pagos" },
      { id: "reportes", icon: <Shield size={18} />, label: "Reportes & Cartera", href: "/dashboard/reportes" },
    ]},
    { section: "Comunidad", items: [
      { id: "asambleas", icon: <Users size={18} />, label: "Asambleas / Quórum", badge: "LIVE", href: "/dashboard/asambleas" },
      { id: "anuncios", icon: <Bot size={18} />, label: "Tablero de Anuncios", href: "/dashboard/anuncios" },
      { id: "votaciones", icon: <LinkIcon size={18} />, label: "Votaciones (Tiempo Real)", href: "/dashboard/votaciones" },
    ]}
  ];

  return (
    <div className="min-h-screen bg-[#020617] text-[#E8EDF5] font-sans selection:bg-[#0D9488]/30 flex">
      {/* Sidebar */}
      <aside className="w-64 border-r border-white/10 bg-[#020617]/80 backdrop-blur-xl hidden md:flex flex-col flex-shrink-0 relative overflow-hidden">
        {/* Glow */}
        <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-[#0D9488]/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="h-20 flex items-center px-6 border-b border-white/10">
          <Link href="/dashboard" className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#0D9488] to-[#01a877] flex items-center justify-center shadow-[0_0_15px_rgba(0,229,160,0.3)]">
              <Globe className="text-[#020617]" size={16} strokeWidth={3} />
            </div>
            <span className="text-lg font-bold tracking-tight text-white hover:opacity-80 transition-opacity">
              Afiliados<span className="text-[#0D9488]">OS</span>
            </span>
          </Link>
        </div>

        <nav className="flex-1 overflow-y-auto py-6 px-4 relative z-10 w-full">
          {navItems.map((group, i) => (
            <div key={i} className={i !== 0 ? "mt-8" : ""}>
              <div className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em] mb-4 pl-2">
                {group.section}
              </div>
              <div className="space-y-1 w-full">
                {group.items.map((item) => (
                  <Link 
                    key={item.id}
                    href={item.href}
                    className={`flex items-center justify-between w-full px-3 py-2.5 rounded-xl transition-all group ${pathname === item.href ? 'bg-[#0D9488]/10 text-[#0D9488]' : 'text-white/50 hover:bg-white/5 hover:text-white'}`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={pathname === item.href ? '' : 'group-hover:scale-110 transition-transform'}>{item.icon}</span>
                      <span className="text-sm font-semibold truncate leading-tight">{item.label}</span>
                    </div>
                    {item.badge && (
                      <span className="text-[9px] font-black tracking-widest uppercase px-1.5 py-0.5 rounded bg-white/10 text-white group-hover:bg-[#0D9488] group-hover:text-[#020617] transition-colors ml-1">
                        {item.badge}
                      </span>
                    )}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </nav>

        <div className="p-4 border-t border-white/10">
          <Link href="/dashboard/configuracion" className="flex items-center gap-3 p-2 rounded-xl bg-white/5 hover:bg-white/10 transition-colors cursor-pointer w-full text-left">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-xs font-bold text-white">
              FE
            </div>
            <div className="flex-1 overflow-hidden">
              <p className="text-xs font-semibold text-white truncate">Torres del Parque</p>
              <p className="text-[10px] text-[#0D9488] truncate">Edificio • ID: TdP-402</p>
            </div>
            <Settings size={14} className="text-white/50" />
          </Link>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0 relative">
        <div className="absolute top-[10%] left-[20%] w-[500px] h-[500px] bg-[#2563EB]/5 rounded-full blur-[150px] pointer-events-none" />

        {/* Header */}
        <header className="h-20 border-b border-white/10 bg-[#020617]/60 backdrop-blur-lg flex items-center justify-between px-8 sticky top-0 z-20">
          <div className="flex items-center gap-4 flex-1">
            <div className="relative w-full max-w-md hidden md:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30" size={16} />
              <input 
                type="text" 
                placeholder="Buscar apartamentos, afiliados, asambleas..." 
                className="w-full bg-white/5 border border-white/10 rounded-full pl-10 pr-4 py-2 text-sm text-white focus:outline-none focus:border-[#0D9488]/50 focus:bg-white/10 transition-all placeholder:text-white/20"
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="relative p-2 text-white/60 hover:text-white transition-colors">
              <Bell size={20} />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-[#0ea5e9] animate-pulse" />
            </button>
            <div className="flex items-center gap-2 pl-4 border-l border-white/10 text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#0D9488] animate-pulse shadow-[0_0_10px_#0D9488]" />
              <span className="text-[#0D9488] tracking-widest uppercase">Operativo</span>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="flex-1 overflow-y-auto p-8 relative z-10">
          {children}
        </div>
      </main>

      {/* Mobile Nav */}
      <nav className="fixed bottom-0 w-full border-t border-white/10 bg-[#020617]/80 backdrop-blur-xl md:hidden z-50 flex justify-around p-4 text-white/50">
        <Link href="/dashboard"><LayoutGrid className={pathname === "/dashboard" ? "text-[#0D9488]" : ""} /></Link>
        <Link href="/dashboard/afiliados"><Users className={pathname === "/dashboard/afiliados" ? "text-[#0D9488]" : ""} /></Link>
        <Link href="/dashboard/pagos"><ArrowUpRight className={pathname === "/dashboard/pagos" ? "text-[#0D9488]" : ""} /></Link>
        <Link href="/dashboard/anuncios"><Bot className={pathname === "/dashboard/anuncios" ? "text-[#0D9488]" : ""} /></Link>
        <Link href="/dashboard/configuracion"><Settings className={pathname === "/dashboard/configuracion" ? "text-[#0D9488]" : ""} /></Link>
      </nav>
    </div>
  );
}

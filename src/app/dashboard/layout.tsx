"use client";

import { 
  Building2, Users, Link as LinkIcon, Bot, Shield, Wallet, Gamepad2, 
  ArrowUpRight, LayoutGrid, Search, Bell, Settings, ChevronDown
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SectorProvider, useSector, Sector } from './SectorProvider';
import { getSectorData } from './mockData';
import { useState } from 'react';

function DashboardInnerLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { sector, setSector } = useSector();
  const data = getSectorData(sector);
  const [showSelector, setShowSelector] = useState(false);

  const navItems = [
    { section: "Gestión", items: [
      { id: "dashboard", icon: <LayoutGrid size={18} />, label: "Dashboard", href: "/dashboard" },
      { id: "afiliados", icon: <Users size={18} />, label: `${data.roles.users}`, href: "/dashboard/afiliados" },
      { id: "espacios", icon: <Building2 size={18} />, label: `${data.roles.spaces}`, href: "/dashboard/espacios" },
    ]},
    { section: "Finanzas & Cobros", items: [
      { id: "cuotas", icon: <Wallet size={18} />, label: `${data.roles.payments}`, href: "/dashboard/cuotas" },
      { id: "pagos", icon: <ArrowUpRight size={18} />, label: "Pasarela (Wompi/PSE)", href: "/dashboard/pagos" },
      { id: "reportes", icon: <Shield size={18} />, label: "Reportes & Cartera", href: "/dashboard/reportes" },
    ]},
    { section: "Comunidad", items: [
      { id: "asambleas", icon: <Users size={18} />, label: "Asambleas", badge: "LIVE", href: "/dashboard/asambleas" },
      { id: "anuncios", icon: <Bot size={18} />, label: "Centro de Mensajes", href: "/dashboard/anuncios" },
      { id: "votaciones", icon: <LinkIcon size={18} />, label: "Elecciones Ad-Hoc", href: "/dashboard/votaciones" },
    ]}
  ];

  const SECTORS: { id: Sector, label: string }[] = [
    { id: 'medicos', label: 'Asociación Médica' },
    { id: 'club', label: 'Club Social' },
    { id: 'pilotos', label: 'Asociación de Pilotos' },
    { id: 'fondo', label: 'Fondo de Empleados' }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-[#0D9488]/30 flex">
      {/* Sidebar */}
      <aside className="w-64 border-r border-slate-200 bg-white hidden md:flex flex-col flex-shrink-0 relative overflow-hidden">
        {/* Subtle top glow */}
        <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-[#0D9488]/5 rounded-full blur-[80px] pointer-events-none" />

        <div className="h-20 flex items-center px-6 border-b border-slate-100">
          <Link href="/dashboard" className="flex items-center gap-3">
            <img src="/afiliadosos_logo.png" alt="AfiliadosOS Logo" className="h-8 w-auto" />
            <span className="text-lg font-bold tracking-tight text-slate-900 hover:opacity-80 transition-opacity">
              Afiliados<span className="text-[#0D9488]">OS</span>
            </span>
          </Link>
        </div>

        <nav className="flex-1 overflow-y-auto py-6 px-4 relative z-10 w-full">
          {navItems.map((group, i) => (
            <div key={i} className={i !== 0 ? "mt-8" : ""}>
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-4 pl-2">
                {group.section}
              </div>
              <div className="space-y-1 w-full">
                {group.items.map((item) => (
                  <Link 
                    key={item.id}
                    href={item.href}
                    className={`flex items-center justify-between w-full px-3 py-2.5 rounded-xl transition-all group ${
                      pathname === item.href 
                        ? 'bg-[#0D9488]/10 text-[#0D9488] font-bold' 
                        : 'text-slate-500 font-semibold hover:bg-slate-50 hover:text-slate-800'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={pathname === item.href ? '' : 'group-hover:scale-110 transition-transform'}>{item.icon}</span>
                      <span className="text-sm truncate leading-tight">{item.label}</span>
                    </div>
                    {item.badge && (
                      <span className={`text-[9px] font-black tracking-widest uppercase px-1.5 py-0.5 rounded transition-colors ml-1 ${
                        pathname === item.href 
                          ? 'bg-[#0D9488] text-white' 
                          : 'bg-red-100 text-red-600 group-hover:bg-red-500 group-hover:text-white'
                      }`}>
                        {item.badge}
                      </span>
                    )}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </nav>

        <div className="p-4 border-t border-slate-100 bg-slate-50/50">
          <Link href="/dashboard/configuracion" className="flex items-center gap-3 p-2 rounded-xl bg-white border border-slate-200 hover:border-slate-300 hover:shadow-sm transition-all cursor-pointer w-full text-left">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center text-xs font-bold text-white shadow-sm">
               {data.orgName.substring(0,2)}
            </div>
            <div className="flex-1 overflow-hidden">
              <p className="text-xs font-bold text-slate-800 truncate">{data.orgName}</p>
              <p className="text-[10px] text-slate-500 font-medium truncate">ID: {data.orgId}</p>
            </div>
            <Settings size={14} className="text-slate-400" />
          </Link>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0 relative bg-slate-50/50 overflow-hidden">
        <div className="absolute top-[10%] left-[20%] w-[500px] h-[500px] bg-[#3B82F6]/5 rounded-full blur-[120px] pointer-events-none" />

        {/* Header */}
        <header className="h-20 border-b border-slate-200 bg-white/80 backdrop-blur-xl flex items-center justify-between px-8 sticky top-0 z-20">
          <div className="flex items-center gap-4 flex-1">
            <div className="relative w-full max-w-md hidden md:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
              <input 
                type="text" 
                placeholder="Buscar socios, transacciones, asambleas..." 
                className="w-full bg-slate-100/50 border border-slate-200 rounded-full pl-10 pr-4 py-2 text-sm text-slate-800 font-medium focus:outline-none focus:border-[#0D9488] focus:bg-white focus:ring-4 focus:ring-[#0D9488]/10 transition-all placeholder:text-slate-400 shadow-sm"
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
             {/* Sector Selector */}
             <div className="relative">
                <button 
                  onClick={() => setShowSelector(!showSelector)}
                  className="flex items-center gap-2 pr-4 border-r border-slate-200 text-xs font-bold hover:text-[#0D9488] transition-colors"
                >
                  <span className="bg-[#0D9488]/10 text-[#0D9488] px-2 py-1 rounded shadow-sm border border-[#0D9488]/20 flex items-center gap-1">
                     Simulando: {SECTORS.find(s => s.id === sector)?.label} <ChevronDown size={14} />
                  </span>
                </button>
                {showSelector && (
                  <div className="absolute top-full mt-2 right-4 w-48 bg-white border border-slate-200 rounded-xl shadow-xl overflow-hidden z-50 animate-in fade-in slide-in-from-top-2">
                    {SECTORS.map(s => (
                       <button 
                          key={s.id}
                          onClick={() => { setSector(s.id); setShowSelector(false); }}
                          className={`w-full text-left px-4 py-3 text-xs font-bold transition-colors ${sector === s.id ? 'bg-[#0D9488] text-white' : 'hover:bg-slate-50 text-slate-600'}`}
                       >
                          {s.label}
                       </button>
                    ))}
                  </div>
                )}
             </div>

            <button className="relative p-2 text-slate-400 hover:text-slate-600 transition-colors bg-slate-100 rounded-full shadow-sm ml-2">
              <Bell size={18} />
              <span className="absolute top-1 right-1 w-2.5 h-2.5 rounded-full bg-red-500 border-2 border-white animate-pulse" />
            </button>
            <div className="flex items-center gap-2 pl-4 border-l border-slate-200 text-xs font-bold">
              <span className="w-2 h-2 rounded-full bg-[#0D9488] shadow-[0_0_8px_rgba(13,148,136,0.5)]" />
              <span className="text-[#0D9488] tracking-widest uppercase">Operativo</span>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="flex-1 overflow-y-auto p-4 md:p-8 relative z-10 w-full">
          {children}
        </div>
      </main>

      {/* Mobile Nav */}
      <nav className="fixed bottom-0 w-full border-t border-slate-200 bg-white/90 backdrop-blur-xl md:hidden z-50 flex justify-around p-4 text-slate-400 drop-shadow-[0_-10px_20px_rgba(0,0,0,0.05)]">
        <Link href="/dashboard"><LayoutGrid className={pathname === "/dashboard" ? "text-[#0D9488]" : ""} /></Link>
        <Link href="/dashboard/afiliados"><Users className={pathname === "/dashboard/afiliados" ? "text-[#0D9488]" : ""} /></Link>
        <Link href="/dashboard/pagos"><ArrowUpRight className={pathname === "/dashboard/pagos" ? "text-[#0D9488]" : ""} /></Link>
        <Link href="/dashboard/anuncios"><Bot className={pathname === "/dashboard/anuncios" ? "text-[#0D9488]" : ""} /></Link>
        <Link href="/dashboard/configuracion"><Settings className={pathname === "/dashboard/configuracion" ? "text-[#0D9488]" : ""} /></Link>
      </nav>
    </div>
  );
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SectorProvider>
      <DashboardInnerLayout>{children}</DashboardInnerLayout>
    </SectorProvider>
  )
}


"use client";

import { 
  Building2, 
  ArrowRight,
  Shield,
  Zap,
  TrendingDown,
  Clock,
  CheckCircle2,
  PlayCircle,
  BarChart3,
  Smartphone,
  ChevronRight,
  Users,
  Award,
  CreditCard,
  Building,
  Menu,
  Activity,
  CalendarDays,
  Gavel,
  PieChart,
  Megaphone,
  Hand,
  Search,
  Check,
  Star
} from 'lucide-react';
import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 selection:bg-[#0D9488]/30 font-sans antialiased overflow-x-hidden">
      {/* Background Gradients */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-[#0D9488]/10 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#2563EB]/10 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute inset-0 opacity-[0.02] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-2xl border-b border-white/50 bg-white/70 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/afiliadosos_logo.png" alt="AfiliadosOS Logo" className="h-10 w-auto" />
            <span className="text-xl font-bold tracking-tight text-slate-900">
              Afiliados<span className="text-[#0D9488]">OS</span>
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-[13px] font-bold text-slate-500 uppercase tracking-wider">
            <a href="#solucion" className="hover:text-[#0D9488] transition-colors">La Solución</a>
            <a href="#modulos" className="hover:text-[#0D9488] transition-colors">Módulos</a>
            <a href="#testimonios" className="hover:text-[#0D9488] transition-colors">Testimonios</a>
          </div>

          <div className="flex items-center gap-4">
             <Link href="/dashboard" className="hidden md:block text-sm font-bold text-slate-600 hover:text-[#0D9488] transition-colors">
               Iniciar Sesión
             </Link>
             <Link 
               href="/dashboard" 
               className="px-6 py-2.5 rounded-xl bg-slate-900 text-white text-sm font-bold hover:bg-slate-800 transition-all shadow-md group flex items-center gap-2"
             >
               Ver Demo <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform"/>
             </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-32 pb-20 px-6 z-10 w-full flex flex-col items-center justify-center text-center">
        <div className="max-w-5xl mx-auto space-y-6 relative z-20 mt-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#0D9488]/20 bg-[#0D9488]/5 text-[#0D9488] text-xs font-bold tracking-widest uppercase shadow-sm animate-fade-in">
            <Zap size={14} fill="currentColor" /> El Sistema Operativo para Asociaciones y Clubes
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[1] text-slate-900 animate-slide-up">
            Gestiona tu Organización. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#01a877] via-[#0D9488] to-[#0f766c]">
              Sin dolores de cabeza.
            </span>
          </h1>
          
          <p className="max-w-3xl mx-auto text-lg md:text-2xl text-slate-500 font-medium leading-relaxed animate-slide-up animation-delay-100">
            Desde recaudos y reservas hasta asambleas virtuales con votación protegida. AfiliadosOS unifica toda tu operación en un portal espectacular para ti y tus asociados.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8 animate-slide-up animation-delay-200">
            <Link 
               href="/dashboard" 
               className="group relative px-8 py-4 rounded-xl bg-[#0D9488] text-white font-bold text-sm uppercase tracking-widest overflow-hidden transition-all hover:scale-105 shadow-[0_8px_30px_rgba(13,148,136,0.3)] flex items-center justify-center gap-2"
            >
               Comenzar Prueba Gratis <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <button className="px-8 py-4 rounded-xl bg-white hover:bg-slate-50 text-slate-700 font-bold text-sm transition-all border border-slate-200 flex items-center justify-center gap-2 shadow-sm">
               <PlayCircle size={18} className="text-[#0D9488]" /> Ver Video Demostrativo
            </button>
          </div>
        </div>

        {/* Dashboard Realistic Mockup (Hero Image) */}
        <div className="w-full max-w-6xl mx-auto mt-20 relative z-20 animate-slide-up animation-delay-300">
           <div className="relative rounded-[2rem] border-[10px] border-slate-900/90 bg-slate-900/90 shadow-[0_30px_100px_rgba(0,0,0,0.2)] aspect-[16/10] md:aspect-[16/9] overflow-hidden backdrop-blur-3xl group">
              {/* Toolbar */}
              <div className="absolute top-0 w-full h-8 bg-slate-900/90 flex items-center px-4 gap-2 z-30">
                 <div className="w-3 h-3 rounded-full bg-red-400" />
                 <div className="w-3 h-3 rounded-full bg-amber-400" />
                 <div className="w-3 h-3 rounded-full bg-green-400" />
                 <div className="mx-auto w-32 h-4 rounded-full bg-slate-800" />
              </div>
              
              {/* Fake App Interface */}
              <div className="absolute inset-0 top-8 bg-slate-50 flex">
                 {/* Sidebar */}
                 <div className="hidden md:flex w-64 bg-slate-900 flex-col pt-6 pb-4 border-r border-slate-800">
                    <div className="px-6 flex items-center gap-3 mb-10">
                       <img src="/afiliadosos_logo.png" alt="Logo" className="w-8 h-8 object-contain" />
                       <div>
                          <p className="text-white font-bold text-sm">AfiliadosOS</p>
                          <p className="text-slate-500 text-[10px] uppercase font-black tracking-widest">Club Demo</p>
                       </div>
                    </div>
                    
                    <div className="px-4 space-y-2 flex-1">
                       {[
                         { icon: PieChart, name: 'Dashboard', active: true },
                         { icon: Users, name: 'Asociados', active: false },
                         { icon: CreditCard, name: 'Finanzas', active: false },
                         { icon: CalendarDays, name: 'Reservas', active: false },
                         { icon: Gavel, name: 'Asambleas', active: false },
                       ].map((item, i) => (
                         <div key={i} className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-bold ${item.active ? 'bg-[#0D9488]/20 text-[#0D9488]' : 'text-slate-400 hover:text-white hover:bg-slate-800'}`}>
                            <item.icon size={18} />
                            <span>{item.name}</span>
                         </div>
                       ))}
                    </div>
                 </div>
                 
                 {/* Main Content */}
                 <div className="flex-1 flex flex-col bg-slate-50 relative overflow-hidden">
                    {/* Header */}
                    <div className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8">
                       <div className="w-48 h-4 bg-slate-100 rounded-full" />
                       <div className="flex gap-4">
                          <div className="w-8 h-8 rounded-full bg-slate-100" />
                          <div className="w-8 h-8 rounded-full bg-[#0D9488]/10 text-[#0D9488] font-black flex items-center justify-center text-xs border border-[#0D9488]/20">AD</div>
                       </div>
                    </div>
                    
                    {/* Content area */}
                    <div className="p-4 md:p-8 space-y-4 md:space-y-6 flex-1 opacity-90 transition-opacity group-hover:opacity-100 overflow-y-auto">
                       {/* KPIs */}
                       <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                           {[
                             { title: 'Recaudo Mes', val: '$145M', color: 'from-[#0D9488]/20' },
                             { title: 'Cartera Vencida', val: '$12.5M', color: 'from-orange-500/20' },
                             { title: 'Asociados', val: '1,245', color: 'from-blue-500/20' },
                           ].map((kpi, i) => (
                              <div key={i} className={`${i===2 ? 'hidden md:block' : ''} bg-gradient-to-br ${kpi.color} to-white bg-white p-6 rounded-2xl border border-slate-200 shadow-sm`}>
                                 <p className="text-[10px] text-slate-500 font-bold tracking-widest uppercase mb-2">{kpi.title}</p>
                                 <p className="text-3xl font-black text-slate-900">{kpi.val}</p>
                              </div>
                           ))}
                       </div>
                       
                       {/* Middle section */}
                       <div className="flex flex-col md:flex-row gap-6 h-auto md:h-48">
                          <div className="flex-[2] bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between shadow-sm">
                             <div className="flex justify-between items-center">
                               <p className="text-xs font-bold uppercase tracking-widest text-[#0D9488]">Participación Asamblea</p>
                               <div className="w-16 h-4 rounded-full bg-green-100" />
                             </div>
                             <div className="flex gap-4 items-end h-24 pt-4">
                                {[40, 60, 45, 80, 55, 90, 75].map((h, i) => (
                                   <div key={i} className="flex-1 bg-slate-100 rounded-t-lg relative group-hover:bg-slate-200 transition-colors" style={{ height: '100%' }}>
                                      <div className="absolute bottom-0 w-full bg-[#0D9488] rounded-t-lg" style={{ height: `${h}%` }} />
                                   </div>
                                ))}
                             </div>
                          </div>
                          <div className="flex-1 bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-6 text-white flex flex-col justify-between shadow-md min-h-[160px]">
                             <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest border-b border-slate-700/50 pb-2 mb-2">Alerta de Sistema</p>
                             <div>
                                <h4 className="text-lg md:text-xl font-bold mb-1">Cierre Contable</h4>
                                <p className="text-xs text-slate-400">Restan 2 días para el cierre mensual automático.</p>
                             </div>
                             <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden mt-4">
                                <div className="w-3/4 h-full bg-[#01a877]" />
                             </div>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
           
           {/* Decorative elements behind mockup */}
           <div className="absolute -inset-10 bg-gradient-to-tr from-[#0D9488]/10 via-transparent to-[#3B82F6]/10 blur-3xl -z-10" />
        </div>
      </header>

      {/* Logos Section */}
      <section className="py-12 border-y border-slate-200 bg-white relative z-10 hidden md:block">
         <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 text-center md:text-left shrink-0">
               +500 CLUBES Y ASOCIACIONES CONFÍAN EN NOSOTROS
            </p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center grayscale opacity-40 mix-blend-multiply">
               <h3 className="text-xl md:text-2xl font-black tracking-tighter text-slate-800">Country Club <span className="font-light">S.D</span></h3>
               <h3 className="text-xl md:text-2xl font-black tracking-tighter text-slate-800">ASOCIACIÓN <span className="text-slate-600 opacity-80">PRO</span></h3>
               <h3 className="text-xl md:text-2xl font-black tracking-tighter text-slate-800 flex items-center gap-2"><Building2 size={24}/> Real Estate</h3>
            </div>
         </div>
      </section>

      {/* Main Benefits ROI */}
      <section id="solucion" className="py-24 px-6 relative z-10 bg-slate-50">
         <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
               <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
                  Resultados que se pagan solos
               </h2>
               <p className="text-lg text-slate-500 font-medium">Automatiza la gestión tediosa y libera tiempo para lo que importa: crear valor para tu comunidad.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
               <div className="space-y-4 p-10 rounded-[2.5rem] bg-white border border-slate-200 hover:border-[#0D9488] transition-all duration-500 hover:-translate-y-2 group shadow-lg shadow-slate-200/50">
                  <div className="w-16 h-16 rounded-2xl bg-[#0D9488]/10 text-[#0D9488] flex items-center justify-center mx-auto md:mx-0 group-hover:scale-110 transition-transform">
                     <TrendingDown size={32} />
                  </div>
                  <h3 className="text-5xl font-black text-slate-900">-45% Cartera</h3>
                  <p className="text-slate-600 font-medium leading-relaxed text-lg">
                    Recuperación contundente de cartera vencida automatizando cobros masivos con links de pago Wompi y PSE.
                  </p>
               </div>
               
               <div className="space-y-4 p-10 rounded-[2.5rem] bg-white border border-slate-200 hover:border-[#2563EB] transition-all duration-500 hover:-translate-y-2 group shadow-lg shadow-slate-200/50">
                  <div className="w-16 h-16 rounded-2xl bg-[#2563EB]/10 text-[#2563EB] flex items-center justify-center mx-auto md:mx-0 group-hover:scale-110 transition-transform">
                     <Clock size={32} />
                  </div>
                  <h3 className="text-5xl font-black text-slate-900">40h Ahorradas</h3>
                  <p className="text-slate-600 font-medium leading-relaxed text-lg">
                    Ahorro mensual eliminando conciliaciones manuales, verificación de abonos y respondiendo PQRs repetitivas.
                  </p>
               </div>

               <div className="space-y-4 p-10 rounded-[2.5rem] bg-white border border-slate-200 hover:border-[#F59E0B] transition-all duration-500 hover:-translate-y-2 group shadow-lg shadow-slate-200/50">
                  <div className="w-16 h-16 rounded-2xl bg-[#F59E0B]/10 text-[#F59E0B] flex items-center justify-center mx-auto md:mx-0 group-hover:scale-110 transition-transform">
                     <Shield size={32} />
                  </div>
                  <h3 className="text-5xl font-black text-slate-900">100% Legal</h3>
                  <p className="text-slate-600 font-medium leading-relaxed text-lg">
                    Control de quórum exacto y votaciones inalterables auditadas en Blockchain. Generación de actas al instante.
                  </p>
               </div>
            </div>
         </div>
      </section>

      {/* CORE MODULES (Real screens simulation) */}
      <section id="modulos" className="py-24 px-6 relative z-10 bg-white">
         <div className="max-w-7xl mx-auto space-y-40">
            
            {/* Feature 1: Cuotas / Finanzas (Text Left, UI Right) */}
            <div className="flex flex-col lg:flex-row items-center gap-16">
               <div className="flex-1 space-y-8">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0ea5e9]/10 text-[#0ea5e9] text-xs font-bold uppercase tracking-widest border border-[#0ea5e9]/20">
                     <CreditCard size={16} /> Módulo Financiero
                  </div>
                  <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-[1.1]">
                     Conciliación en piloto automático.
                  </h2>
                  <p className="text-xl text-slate-500 font-medium leading-relaxed">
                     Deja de cruzar extractos bancarios a mano. Genera facturación masiva, envía links de cobro automático y permite que tus afiliados paguen con Nequi, PSE o Tarjeta. Todo se concilia solo.
                  </p>
                  <ul className="space-y-5 pt-4">
                     {['Pasarela nativa Wompi integrada sin salir del app.', 'Generación automática de recibos de caja y estado de cuenta.', 'Sincronización API con Siigo, Alegra y otros.'].map((item, i) => (
                        <li key={i} className="flex items-start gap-4 text-slate-700 font-bold text-lg">
                           <div className="p-1 rounded bg-[#0ea5e9]/10 mt-0.5"><Check size={18} className="text-[#0ea5e9]" /></div> {item}
                        </li>
                     ))}
                  </ul>
                  <Link href="/dashboard/cuotas" className="inline-flex text-[#0ea5e9] font-bold text-lg items-center gap-2 hover:gap-3 transition-all pt-4">
                     Ver recaudos interactivos <ArrowRight size={20} />
                  </Link>
               </div>
               
               {/* UI Mockup Financial */}
               <div className="flex-1 w-full lg:w-auto relative bg-slate-50 rounded-[3rem] p-6 border border-slate-200 shadow-[0_20px_50px_rgba(14,165,233,0.05)] group">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-[#0ea5e9]/10 blur-[80px] rounded-full pointer-events-none" />
                  
                  {/* Dashboard Cards Inside */}
                  <div className="relative z-10 space-y-6">
                     <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm flex items-center justify-between group-hover:-translate-y-1 transition-transform duration-300">
                        <div>
                           <p className="text-[10px] font-black tracking-widest uppercase text-slate-400 mb-1">Déficit por Mora</p>
                           <p className="text-4xl font-black text-slate-900">$12,450,000</p>
                           <p className="text-[11px] font-bold text-red-500 mt-2 bg-red-50 inline-block px-2 py-1 rounded">12 Usuarios en mora</p>
                        </div>
                        <div className="w-16 h-16 rounded-2xl bg-red-50 flex items-center justify-center border border-red-100">
                           <TrendingDown className="text-red-500 w-8 h-8" />
                        </div>
                     </div>
                     
                     <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden group-hover:-translate-y-2 transition-transform duration-500 delay-100">
                        <div className="p-4 border-b border-slate-100 bg-slate-50/50 font-bold text-sm text-slate-800 flex justify-between">
                           <span>Transacciones Recientes</span>
                           <span className="text-[#0ea5e9] text-xs uppercase tracking-widest">Wompi Auto</span>
                        </div>
                        <div className="p-2 space-y-1">
                           {[
                             { name: 'Dr. Alejandro Posada', type: 'PSE', amt: '+$450,000', stat: 'Aprobado' },
                             { name: 'Ing. Maria Camila', type: 'Nequi', amt: '+$450,000', stat: 'Aprobado' }
                           ].map((t, i) => (
                              <div key={i} className="p-3 bg-white rounded-xl flex justify-between items-center hover:bg-slate-50 border border-transparent hover:border-slate-100 cursor-default">
                                 <div className="flex gap-3 items-center">
                                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-xs shadow-sm ${t.stat === 'Aprobado' ? 'bg-green-50 text-green-600 border border-green-100' : 'bg-red-50 text-red-600 border border-red-100'}`}>
                                       {t.type}
                                    </div>
                                    <div>
                                       <p className="font-bold text-sm text-slate-800">{t.name}</p>
                                       <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest">{t.stat}</p>
                                    </div>
                                 </div>
                                 <p className={`font-black ${t.stat === 'Aprobado' ? 'text-slate-900' : 'text-slate-300 line-through'}`}>{t.amt}</p>
                              </div>
                           ))}
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            {/* Feature 2: Asambleas (UI Left, Text Right) */}
            <div className="flex flex-col-reverse lg:flex-row items-center gap-16">
               {/* UI Mockup Asambleas */}
               <div className="flex-1 w-full lg:w-auto relative bg-slate-900 rounded-[3rem] p-6 shadow-[0_30px_60px_rgba(0,0,0,0.3)] group overflow-hidden border border-slate-800">
                  <div className="absolute top-0 right-0 w-80 h-80 bg-[#ef4444]/20 blur-[100px] rounded-full pointer-events-none" />
                  
                  {/* Dashboard Cards Inside */}
                  <div className="relative z-10 space-y-6">
                     <div className="bg-slate-800/80 backdrop-blur-md p-6 rounded-3xl border border-slate-700/50 shadow-xl flex items-center justify-between group-hover:scale-[1.02] transition-transform duration-500">
                        <div>
                           <div className="flex items-center gap-2 mb-2">
                             <div className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse shadow-[0_0_10px_rgba(239,68,68,0.8)]" />
                             <p className="text-[10px] font-black tracking-widest uppercase text-red-400">En Vivo</p>
                           </div>
                           <p className="text-2xl font-black text-white">Quórum Validado</p>
                        </div>
                        <div className="text-right">
                           <p className="text-5xl font-black text-[#01a877]">65.4%</p>
                           <p className="text-[10px] uppercase font-bold text-slate-400 tracking-widest mt-1">Mínimo 51%</p>
                        </div>
                     </div>
                     
                     <div className="bg-slate-800/80 backdrop-blur-md rounded-3xl border border-slate-700/50 shadow-xl overflow-hidden group-hover:-translate-y-2 transition-transform duration-500 delay-100">
                        <div className="p-5 border-b border-slate-700/50 flex justify-between items-center text-white">
                           <span className="font-bold flex items-center gap-2"><div className="p-1.5 bg-amber-500/20 rounded"><Hand size={16} className="text-amber-400" /></div> Intervención Activa</span>
                        </div>
                        <div className="p-6 flex gap-4 items-center bg-gradient-to-r from-slate-800 to-slate-900">
                           <div className="relative">
                              <div className="w-16 h-16 rounded-2xl bg-slate-700 flex items-center justify-center font-bold text-white text-xl border border-slate-600">
                                 CS
                              </div>
                              <div className="absolute -bottom-2 -right-2 bg-[#0D9488] w-6 h-6 rounded-full flex items-center justify-center border-2 border-slate-900 animate-bounce">
                                 <PlayCircle size={12} className="text-white" />
                              </div>
                           </div>
                           <div className="flex-1">
                              <p className="text-lg font-black text-white">Dr. Carlos Salamanca</p>
                              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1.5 bg-slate-800 inline-block px-2 py-1 rounded">1.2% Votos</p>
                           </div>
                           <div className="text-right text-white">
                              <p className="text-3xl font-black text-amber-500">02:45</p>
                           </div>
                        </div>
                     </div>

                     <button className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#01a877] to-[#0D9488] text-white font-black uppercase tracking-widest shadow-lg hover:shadow-[#0D9488]/50 transition-shadow">
                        Activar Votación Estatutaria
                     </button>
                  </div>
               </div>

               <div className="flex-1 space-y-8">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ef4444]/10 text-[#ef4444] text-xs font-bold uppercase tracking-widest border border-[#ef4444]/20">
                     <Users size={16} /> Asambleas Virtuales & Mixtas
                  </div>
                  <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-[1.1]">
                     Control legal total.<br/> Cero dolores de cabeza.
                  </h2>
                  <p className="text-xl text-slate-500 font-medium leading-relaxed">
                     Realiza tus asambleas anuales de forma centralizada. Tus afiliados levantan la mano, votan pliegos interactivos y delegan poderes desde su equipo personal.
                  </p>
                  <ul className="space-y-5 pt-4">
                     {['Cálculo de Quórum instantáneo por coeficiente nominal o propiedad.', 'Votaciones anónimas o públicas blindadas con encriptación.', 'Generación automatizada de reportes y actas certificadas.'].map((item, i) => (
                        <li key={i} className="flex items-start gap-4 text-slate-700 font-bold text-lg">
                           <div className="p-1 rounded bg-[#ef4444]/10 mt-0.5"><Check size={18} className="text-[#ef4444]" /></div> {item}
                        </li>
                     ))}
                  </ul>
                  <Link href="/dashboard/asambleas" className="inline-flex text-[#ef4444] font-bold text-lg items-center gap-2 hover:gap-3 transition-all pt-4">
                     Ver asamblea en vivo <ArrowRight size={20} />
                  </Link>
               </div>
            </div>

            {/* Feature 3: Reservas / Espacios (Text Left, UI Right) */}
            <div className="flex flex-col lg:flex-row items-center gap-16">
               <div className="flex-1 space-y-8">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#8b5cf6]/10 text-[#8b5cf6] text-xs font-bold uppercase tracking-widest border border-[#8b5cf6]/20">
                     <CalendarDays size={16} /> Gestión de Espacios
                  </div>
                  <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-[1.1]">
                     Reservas de escenarios 24/7 sin intermediarios.
                  </h2>
                  <p className="text-xl text-slate-500 font-medium leading-relaxed">
                     Canchas de tenis, salones de eventos, zonas VIP o kioskos. Tus usuarios ingresan, verifican disponibilidad, pagan el alquiler si aplica, y reservan automáticamente.
                  </p>
                  <ul className="space-y-5 pt-4">
                     {['Bloqueo de cartera: morosos no pueden realizar reservas.', 'Check-in y validación de invitados mediante códigos QR.', 'Control de aforos y cancelación automática'].map((item, i) => (
                        <li key={i} className="flex items-start gap-4 text-slate-700 font-bold text-lg">
                           <div className="p-1 rounded bg-[#8b5cf6]/10 mt-0.5"><Check size={18} className="text-[#8b5cf6]" /></div> {item}
                        </li>
                     ))}
                  </ul>
                  <Link href="/dashboard/espacios" className="inline-flex text-[#8b5cf6] font-bold text-lg items-center gap-2 hover:gap-3 transition-all pt-4">
                     Ver módulo de reservas <ArrowRight size={20} />
                  </Link>
               </div>
               
               {/* UI Mockup Spaces */}
               <div className="flex-1 w-full lg:w-auto relative bg-slate-50 rounded-[3rem] p-6 border border-slate-200 shadow-[0_20px_50px_rgba(139,92,246,0.05)] group">
                  <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#8b5cf6]/10 blur-[80px] rounded-full pointer-events-none" />
                  
                  <div className="relative z-10 space-y-6">
                     <div className="flex gap-4 overflow-hidden py-2" style={{ transform: 'translateX(-20px)' }}>
                        {[
                           { n: 'Cancha Tenis', s: 'Disponible', c: 'bg-green-500' },
                           { n: 'Salón VIP', s: 'Ocupado', c: 'bg-red-500' },
                           { n: 'Zona BBQ 1', s: 'Disponible', c: 'bg-green-500' }
                        ].map((s, i) => (
                           <div key={i} className="min-w-[180px] p-5 bg-white rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between group-hover:translate-x-4 transition-transform duration-700">
                              <p className="font-black text-slate-900 text-sm whitespace-nowrap">{s.n}</p>
                              <div className="mt-4 flex items-center justify-between">
                                 <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Estado</span>
                                 <span className="flex items-center gap-1.5 text-[10px] font-black uppercase bg-slate-50 px-2 py-1 rounded text-slate-600">
                                    <span className={`w-2 h-2 rounded-full ${s.c}`} /> {s.s}
                                 </span>
                              </div>
                           </div>
                        ))}
                     </div>
                     
                     <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 space-y-6">
                        <div className="flex justify-between items-center text-sm font-bold text-slate-800 border-b border-slate-100 pb-4">
                           <span>Agenda del Día</span>
                           <span className="p-2 border border-slate-200 rounded-lg text-[#8b5cf6] bg-[#8b5cf6]/10"><CalendarDays size={16}/></span>
                        </div>

                        <div className="space-y-4 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 before:to-transparent">
                           {[
                              { time: '14:00', name: 'Reserva Confirmada', tag: 'Cancha Tenis' },
                              { time: '16:30', name: 'Reserva Opcional', tag: 'BBQ 2' }
                           ].map((r, i) => (
                              <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group/item is-active">
                                 <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-50 shadow shrink-0 md:order-1 md:group-odd/item:-ml-5 md:group-even/item:-mr-5 z-10 text-[10px] font-black text-[#8b5cf6]">
                                    {r.time}
                                 </div>
                                 <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-2xl border border-slate-200 bg-white shadow-sm group-hover:border-[#8b5cf6]/30 transition-colors">
                                    <p className="font-bold text-slate-800 text-sm">{r.tag}</p>
                                    <p className="text-[10px] uppercase font-bold tracking-widest text-[#0D9488] mt-1">{r.name}</p>
                                 </div>
                              </div>
                           ))}
                        </div>
                     </div>
                  </div>
               </div>
            </div>

         </div>
      </section>

      {/* Testimonials */}
      <section id="testimonios" className="py-24 px-6 bg-slate-800 relative z-10 overflow-hidden text-white rounded-[3rem] mx-4 md:mx-10 mb-20 shadow-2xl">
         <div className="absolute top-0 right-[20%] w-[500px] h-[500px] bg-[#0D9488]/10 rounded-full blur-[100px] pointer-events-none" />
         
         <div className="max-w-7xl mx-auto space-y-16 relative z-10">
            <div className="text-center space-y-4">
               <h2 className="text-4xl md:text-5xl font-black">
                  Respaldado por Juntas y Administradores
               </h2>
               <p className="text-xl text-slate-400 font-medium">No tomes nuestra palabra. Mira lo que han logrado.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
               <div className="bg-slate-900 border border-slate-700/50 rounded-3xl p-8 space-y-6 shadow-sm hover:-translate-y-2 transition-transform">
                  <div className="flex gap-1 text-amber-400">
                     {[1,2,3,4,5].map(i => <Star key={i} size={18} fill="currentColor" />)}
                  </div>
                  <p className="text-slate-300 text-lg leading-relaxed font-medium">
                     "La recuperación de cartera ha sido monumental. Los socios del club ahora pagan la membresía desde su celular en segundos. El sistema se paga solo."
                  </p>
                  <div className="pt-4 flex items-center gap-4">
                     <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0D9488] to-[#3B82F6] flex items-center justify-center font-black text-white">CJ</div>
                     <div>
                        <p className="font-bold text-white text-sm">Carlos Jaramillo</p>
                        <p className="text-xs text-[#01a877] font-bold uppercase tracking-widest mt-1">Gerente Deportivo</p>
                     </div>
                  </div>
               </div>
               
               <div className="bg-slate-900 border border-slate-700/50 rounded-3xl p-8 space-y-6 shadow-sm hover:-translate-y-2 transition-transform">
                  <div className="flex gap-1 text-amber-400">
                     {[1,2,3,4,5].map(i => <Star key={i} size={18} fill="currentColor" />)}
                  </div>
                  <p className="text-slate-300 text-lg leading-relaxed font-medium">
                     "La asamblea virtual de este año fue perfecta. Todos votaron desde la tablet en el dashboard, se generó el acta y listo. Cero estrés, 100% elegancia."
                  </p>
                  <div className="pt-4 flex items-center gap-4">
                     <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#ef4444] to-[#f59e0b] flex items-center justify-center font-black text-white">MP</div>
                     <div>
                        <p className="font-bold text-white text-sm">Mariana Pérez</p>
                        <p className="text-xs text-[#01a877] font-bold uppercase tracking-widest mt-1">Junta Directiva Asociación</p>
                     </div>
                  </div>
               </div>

               <div className="bg-slate-900 border border-slate-700/50 rounded-3xl p-8 space-y-6 shadow-sm hover:-translate-y-2 transition-transform md:col-span-2 lg:col-span-1">
                  <div className="flex gap-1 text-amber-400">
                     {[1,2,3,4,5].map(i => <Star key={i} size={18} fill="currentColor" />)}
                  </div>
                  <p className="text-slate-300 text-lg leading-relaxed font-medium">
                     "Ahorro al menos 40 horas al mes. Las conciliaciones bancarias llegan automatizadas y enviar notificaciones cambió nuestra operatividad por completo."
                  </p>
                  <div className="pt-4 flex items-center gap-4">
                     <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#8b5cf6] to-[#ec4899] flex items-center justify-center font-black text-white">RS</div>
                     <div>
                        <p className="font-bold text-white text-sm">Roberto Sánchez</p>
                        <p className="text-xs text-[#01a877] font-bold uppercase tracking-widest mt-1">Contador Titular</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Extreme CTA Section */}
      <section className="py-24 px-6 relative z-10 overflow-hidden bg-white">
         <div className="absolute inset-0 bg-[#0D9488]/5 blur-[150px] rounded-full pointer-events-none" />
         <div className="max-w-5xl mx-auto text-center relative z-20 space-y-10 p-12 md:p-20 rounded-[3rem] border border-slate-200 bg-white shadow-[0_20px_80px_rgba(0,0,0,0.05)]">
            <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-[#0D9488]/10 text-[#0D9488] text-sm font-black tracking-widest uppercase">
               Lleva tu comunidad a la era digital
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter leading-[1.05]">
               Prueba la Diferencia <br/> Hoy Mismo.
            </h2>
            <p className="text-xl md:text-2xl text-slate-500 font-medium max-w-3xl mx-auto">
               Explora nuestra demostración interactiva gratuita. Descubre cómo centralizar las finanzas, miembros y reportes en segundos. Puede probar con cualquier industria.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
               <Link 
                  href="/dashboard" 
                  className="px-12 py-6 rounded-2xl bg-[#0D9488] text-white font-black text-lg uppercase tracking-widest transition-all hover:scale-105 shadow-[0_10px_40px_rgba(13,148,136,0.4)] flex items-center justify-center gap-3"
               >
                  Abrir Demo Interactiva <ArrowRight size={24} />
               </Link>
               <button className="px-12 py-6 rounded-2xl bg-white hover:bg-slate-50 text-slate-700 font-bold text-lg uppercase tracking-widest transition-all border border-slate-300 shadow-sm">
                  Contactar Asesor
               </button>
            </div>
         </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t border-slate-200 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 text-slate-500 text-sm font-medium">
          <div className="col-span-1 md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
               <img src="/afiliadosos_logo.png" alt="AfiliadosOS Logo" className="h-8 w-auto" />
               <span className="text-lg font-bold tracking-tight text-slate-900">
                 Afiliados<span className="text-[#0D9488]">OS</span>
               </span>
            </div>
            <p className="max-w-sm leading-relaxed text-slate-400">
               El ecosistema digital más potente de Latinoamérica para la administración de clubes sociales, asociaciones y copropiedades exclusivas. Software robusto para organizaciones extraordinarias.
            </p>
          </div>
          <div className="space-y-4">
             <h4 className="text-slate-800 font-bold uppercase tracking-widest mb-6">Módulos</h4>
             <ul className="space-y-3">
                <li><Link href="/dashboard/cuotas" className="hover:text-[#0D9488] transition-colors">Sistema Contable & Conciliación</Link></li>
                <li><Link href="/dashboard/asambleas" className="hover:text-[#0D9488] transition-colors">Asambleas en Vivo & Quórum</Link></li>
                <li><Link href="/dashboard/espacios" className="hover:text-[#0D9488] transition-colors">Booking de Instalaciones VIP</Link></li>
                <li><Link href="/dashboard/anuncios" className="hover:text-[#0D9488] transition-colors">Módulo Omnicanal</Link></li>
             </ul>
          </div>
          <div className="space-y-4">
             <h4 className="text-slate-800 font-bold uppercase tracking-widest mb-6">Empresa</h4>
             <ul className="space-y-3">
                <li><a href="#" className="hover:text-[#0D9488] transition-colors">Casos de Éxito Reales</a></li>
                <li><a href="#" className="hover:text-[#0D9488] transition-colors">Soporte Técnico Especializado</a></li>
                <li><a href="#" className="hover:text-[#0D9488] transition-colors">Contacto Ventas Corportivas</a></li>
             </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-400 text-xs font-bold uppercase tracking-widest">
           <p>© {new Date().getFullYear()} Proyector Software Colombia.</p>
           <div className="flex gap-6">
             <span>Todos los derechos reservados.</span>
             <span>Seguridad Nivel Bancario</span>
           </div>
        </div>
      </footer>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=Inter:wght@400;500;600;700;900&display=swap');
        
        .font-sans {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        }
        h1, h2, h3, h4, .font-display {
          font-family: 'Syne', sans-serif;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }

        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }

        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.05); opacity: 0.8; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }
        
        @keyframes slide-up {
           0% { transform: translateY(30px); opacity: 0; }
           100% { transform: translateY(0); opacity: 1; }
        }
        .animate-slide-up {
           animation: slide-up 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
           opacity: 0;
        }
        .animation-delay-100 { animation-delay: 100ms; }
        .animation-delay-200 { animation-delay: 200ms; }
        .animation-delay-300 { animation-delay: 300ms; }
        .animation-delay-400 { animation-delay: 400ms; }
      `}</style>
    </div>
  );
}

// Internal generic Icons
function LayersIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-white">
      <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
      <polyline points="2 17 12 22 22 17"></polyline>
      <polyline points="2 12 17 22 12"></polyline>
    </svg>
  );
}

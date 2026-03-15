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
  Users
} from 'lucide-react';
import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#020617] text-[#E8EDF5] selection:bg-[#0D9488]/30 font-sans antialiased overflow-x-hidden">
      {/* Background Gradients */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-[#0D9488]/15 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#2563EB]/15 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-2xl border-b border-white/5 bg-[#020617]/80 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-[#0D9488] to-[#01a877] rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(0,229,160,0.3)]">
              <Building2 className="text-[#020617]" size={20} strokeWidth={2.5} />
            </div>
            <span className="text-xl font-bold tracking-tight text-white">
              Afiliados<span className="text-[#0D9488]">OS</span>
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-[13px] font-bold text-white/70 uppercase tracking-wider">
            <a href="#roi" className="hover:text-[#0D9488] transition-colors">ROI</a>
            <a href="#modulos" className="hover:text-[#0D9488] transition-colors">Características</a>
            <a href="#testimonios" className="hover:text-[#0D9488] transition-colors">Testimonios</a>
          </div>

          <div className="flex items-center gap-4">
             <Link href="/dashboard" className="hidden md:block text-sm font-bold text-white hover:text-[#0D9488] transition-colors">
               Iniciar Sesión
             </Link>
             <Link 
               href="/dashboard" 
               className="px-6 py-2.5 rounded-xl bg-[#0D9488] text-[#020617] text-sm font-black border border-transparent hover:bg-white transition-all shadow-[0_0_20px_rgba(0,229,160,0.2)]"
             >
               Ver Demo
             </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-40 pb-20 px-6 z-10 w-full flex flex-col items-center justify-center text-center min-h-[90vh]">
        <div className="max-w-5xl mx-auto space-y-8 relative z-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#0D9488]/30 bg-[#0D9488]/10 text-[#0D9488] text-xs font-bold tracking-widest uppercase shadow-[0_0_15px_rgba(0,229,160,0.15)] animate-bounce-slow">
            <Zap size={14} fill="currentColor" /> El Software Definitivo para Propiedad Horizontal
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[1.05] text-white">
            Automatiza tu Copropiedad. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0D9488] via-[#3B82F6] to-[#0ea5e9]">
              Multiplica tu Recaudo.
            </span>
          </h1>
          
          <p className="max-w-3xl mx-auto text-lg md:text-2xl text-white/60 font-medium leading-relaxed">
            Elimina el Excel, los correos perdidos y las asambleas caóticas. AfiliadosOS es el ecosistema Premium que conecta a los administradores, contadores y residentes en una sola plataforma en tiempo real.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Link 
               href="/dashboard" 
               className="group relative px-8 py-4 rounded-xl bg-[#0D9488] text-[#020617] font-black text-sm uppercase tracking-widest overflow-hidden transition-all hover:scale-105 shadow-[0_0_30px_rgba(0,229,160,0.4)] flex items-center justify-center gap-2"
            >
               Entrar al Demo <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <button className="px-8 py-4 rounded-xl bg-white/5 hover:bg-white/10 text-white font-bold text-sm transition-all border border-white/10 flex items-center justify-center gap-2 backdrop-blur-sm">
               <PlayCircle size={18} /> Ver Casos de Éxito
            </button>
          </div>

          <div className="pt-16 flex flex-col items-center gap-4 opacity-70">
             <p className="text-xs font-bold uppercase tracking-widest text-white/50">CONFIADO POR MÁS DE 500 CONJUNTOS, CLUBES Y ASOCIACIONES</p>
             <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center grayscale opacity-60 mix-blend-screen">
                <h3 className="text-2xl font-black tracking-tighter">Constructora <span className="font-light">Marvil</span></h3>
                <h3 className="text-2xl font-black tracking-tighter">INMOBILIARIA <span className="text-[#0D9488] opacity-80">PRO</span></h3>
                <h3 className="text-2xl font-black tracking-tighter">Torres <span className="italic font-serif">del Sol</span></h3>
             </div>
          </div>
        </div>
      </header>

      {/* Main Benefits ROI (The "Vendedora" part) */}
      <section id="roi" className="py-24 px-6 relative z-10 border-y border-white/5 bg-[#020617]/50">
         <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 text-center md:text-left shadow-2xl">
               <div className="space-y-4 p-10 rounded-[2rem] bg-[#020617] border border-white/5 hover:border-[#0D9488]/30 transition-all duration-500 hover:-translate-y-2 group shadow-xl">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0D9488]/20 to-transparent text-[#0D9488] flex items-center justify-center mx-auto md:mx-0 group-hover:scale-110 transition-transform">
                     <TrendingDown size={32} />
                  </div>
                  <h3 className="text-5xl font-black text-white">-45% Cartera</h3>
                  <p className="text-white/60 font-medium leading-relaxed text-lg">
                    Recuperación contundente de cartera vencida automatizando cobros vía canales digitales como PSE, TC y Wompi por WhatsApp.
                  </p>
               </div>
               
               <div className="space-y-4 p-10 rounded-[2rem] bg-[#020617] border border-white/5 hover:border-[#2563EB]/30 transition-all duration-500 hover:-translate-y-2 group shadow-xl">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#2563EB]/20 to-transparent text-[#2563EB] flex items-center justify-center mx-auto md:mx-0 group-hover:scale-110 transition-transform">
                     <Clock size={32} />
                  </div>
                  <h3 className="text-5xl font-black text-white">40h Ahorradas</h3>
                  <p className="text-white/60 font-medium leading-relaxed text-lg">
                    Horas operativas ahorradas al mes eliminando conciliaciones manuales y reduciendo radicalmente los PQRs.
                  </p>
               </div>

               <div className="space-y-4 p-10 rounded-[2rem] bg-[#020617] border border-white/5 hover:border-[#F59E0B]/30 transition-all duration-500 hover:-translate-y-2 group shadow-xl">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#F59E0B]/20 to-transparent text-[#F59E0B] flex items-center justify-center mx-auto md:mx-0 group-hover:scale-110 transition-transform">
                     <Shield size={32} />
                  </div>
                  <h3 className="text-5xl font-black text-white">100% Legal</h3>
                  <p className="text-white/60 font-medium leading-relaxed text-lg">
                    Asambleas y quórums verificados electrónicamente con cálculos de coeficientes transparentes. Evita impugnaciones al 100%.
                  </p>
               </div>
            </div>
         </div>
      </section>

      {/* Core Features Showcase */}
      <section id="modulos" className="py-40 px-6 relative z-10">
         <div className="max-w-7xl mx-auto space-y-40">
            
            {/* Feature 1: Cuotas */}
            <div className="flex flex-col md:flex-row items-center gap-16">
               <div className="flex-1 space-y-8">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#3B82F6]/10 text-[#3B82F6] text-xs font-bold uppercase tracking-widest border border-[#3B82F6]/20">
                     <BarChart3 size={16} /> Módulo Financiero
                  </div>
                  <h2 className="text-4xl md:text-5xl font-black text-white leading-[1.1]">
                     Dile adiós al Excel y a conciliar recibos a mano.
                  </h2>
                  <p className="text-xl text-white/50 font-medium leading-relaxed">
                     Nuestro módulo de facturación masiva genera las cuotas de administración automáticamente. Los residentes pagan online y el dashboard de AfiliadosOS se concilia en el acto.
                  </p>
                  <ul className="space-y-5 pt-4">
                     {['Integración nativa con Wompi, Nequi y transferencias PSE', 'Alertas automáticas de mora e intereses al teléfono del residente', 'Sincronización bidireccional con Siigo, Loggro o tu software contable'].map((item, i) => (
                        <li key={i} className="flex items-start gap-4 text-white/70 font-semibold text-lg">
                           <CheckCircle2 className="text-[#0D9488] shrink-0 mt-0.5" size={24} /> {item}
                        </li>
                     ))}
                  </ul>
                  <button className="text-[#3B82F6] font-bold text-lg flex items-center gap-2 hover:gap-3 transition-all pt-4">
                     Explorar módulo financiero <ArrowRight size={20} />
                  </button>
               </div>
               
               {/* Visual Presentation */}
               <div className="flex-1 relative w-full aspect-square md:aspect-auto md:h-[600px] rounded-[3rem] bg-gradient-to-br from-[#3B82F6]/10 to-transparent border border-[#3B82F6]/20 flex items-center justify-center overflow-hidden group shadow-2xl">
                  <div className="absolute inset-0 bg-[#020617]/40 backdrop-blur-md" />
                  
                  {/* Floating Elements (Mock UI) */}
                  <div className="relative z-10 w-[85%] bg-[#020617] border border-white/10 rounded-3xl shadow-[0_0_50px_rgba(59,130,246,0.15)] p-8 space-y-6 transform group-hover:-translate-y-2 transition-transform duration-500">
                     <div className="flex justify-between items-center border-b border-white/10 pb-6">
                        <div>
                           <p className="text-xs text-white/50 font-bold uppercase tracking-[0.2em] mb-1">Recaudo Estimado Marzo</p>
                           <p className="text-5xl font-black text-white">$42.5M</p>
                        </div>
                        <div className="px-4 py-2 bg-green-500/10 text-green-400 rounded-xl text-sm font-black border border-green-500/20">
                          98% Efectividad
                        </div>
                     </div>
                     <div className="space-y-4 pt-4">
                        {[
                          { apt: '402', name: 'Al Día', val: '+$350,000' },
                          { apt: '801', name: 'Al Día', val: '+$350,000' },
                          { apt: 'Local', name: 'Al Día', val: '+$850,000' }
                        ].map((m, i) => (
                           <div key={i} className="flex justify-between items-center p-4 bg-gradient-to-r from-white/5 to-transparent rounded-2xl border border-white/5 hover:border-white/10 transition-colors">
                              <div className="flex items-center gap-4">
                                 <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center font-bold text-white/50 border border-white/5">
                                   {m.apt}
                                 </div>
                                 <div>
                                    <p className="text-sm font-black text-white">Pago Conciliado</p>
                                    <p className="text-xs text-green-400 font-bold tracking-widest uppercase mt-0.5">{m.name} Wompi</p>
                                 </div>
                              </div>
                              <p className="text-lg font-black text-white">{m.val}</p>
                           </div>
                        ))}
                     </div>
                  </div>
               </div>
            </div>

            {/* Feature 2: Asambleas */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-16">
               <div className="flex-1 space-y-8">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ef4444]/10 text-[#ef4444] text-xs font-bold uppercase tracking-widest border border-[#ef4444]/20">
                     <Users size={16} /> Sala de Asambleas Live
                  </div>
                  <h2 className="text-4xl md:text-5xl font-black text-white leading-[1.1]">
                     Control total de reuniones de consorcio.
                  </h2>
                  <p className="text-xl text-white/50 font-medium leading-relaxed">
                     Convierte asambleas presenciales o virtuales en experiencias dinámicas, ordenadas y legalmente auditables. Nuestra sala en vivo permite votaciones inmediatas sin contar manos alzadas.
                  </p>
                  <ul className="space-y-5 pt-4">
                     {['Cálculo de Quórum en tiempo real ponderado por coeficiente de copropiedad', 'Votaciones secretas o públicas con resultados infalsificables (Blockchain Ready)', 'Generación automática del acta al cerrar la sesión'].map((item, i) => (
                        <li key={i} className="flex items-start gap-4 text-white/70 font-semibold text-lg">
                           <CheckCircle2 className="text-[#0D9488] shrink-0 mt-0.5" size={24} /> {item}
                        </li>
                     ))}
                  </ul>
                  <button className="text-[#ef4444] font-bold text-lg flex items-center gap-2 hover:gap-3 transition-all pt-4">
                     Explorar módulo de asambleas <ArrowRight size={20} />
                  </button>
               </div>
               
               {/* Visual Presentation */}
               <div className="flex-1 relative w-full aspect-square md:aspect-auto md:h-[600px] rounded-[3rem] bg-gradient-to-br from-[#ef4444]/10 to-transparent border border-[#ef4444]/20 flex items-center justify-center overflow-hidden group shadow-2xl">
                  <div className="absolute inset-0 bg-[#020617]/40 backdrop-blur-md" />
                  
                   {/* Mock UI snippet */}
                   <div className="relative z-10 w-[75%] bg-[#020617] border border-white/10 rounded-3xl shadow-[0_0_50px_rgba(239,68,68,0.15)] p-10 space-y-8 text-center transform group-hover:scale-105 transition-transform duration-500">
                     <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-red-500/10 mb-2 border border-red-500/20">
                        <Users size={32} className="text-red-500" />
                     </div>
                     <div className="space-y-2">
                        <p className="text-xs text-[#ef4444] font-black uppercase tracking-[0.3em] animate-pulse">Quórum Confirmado</p>
                        <p className="text-7xl font-black text-white tracking-tighter">65.4%</p>
                     </div>
                     
                     <div className="w-full bg-white/5 rounded-full h-4 overflow-hidden shadow-inner relative">
                        <div className="bg-gradient-to-r from-[#01a877] to-[#0D9488] w-[65%] h-full relative transition-all duration-1000">
                           <div className="absolute top-0 right-0 w-8 h-full bg-white/30 blur-sm animate-pulse" />
                        </div>
                        <div className="absolute left-[51%] top-0 bottom-0 w-0.5 bg-red-500 z-10" />
                     </div>
                     
                     <button className="w-full py-5 bg-white text-[#020617] hover:bg-gray-200 transition-colors font-black uppercase tracking-widest text-sm rounded-2xl shadow-xl">
                        Lanzar Votación General
                     </button>
                  </div>
               </div>
            </div>

            {/* Feature 3: Comunicaciones */}
            <div className="flex flex-col md:flex-row items-center gap-16">
               <div className="flex-1 space-y-8">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0D9488]/10 text-[#0D9488] text-xs font-bold uppercase tracking-widest border border-[#0D9488]/20">
                     <Smartphone size={16} /> Omnicanalidad
                  </div>
                  <h2 className="text-4xl md:text-5xl font-black text-white leading-[1.1]">
                     Llega al celular del residente en segundos.
                  </h2>
                  <p className="text-xl text-white/50 font-medium leading-relaxed">
                     El cartel de corcho en la portería pasó a la historia. Comunica cortes de agua, arreglos de ascensor o encuestas directamente a la app, WhatsApp y correo personal.
                  </p>
                  <ul className="space-y-5 pt-4">
                     {['Tablero de notificaciones vía API oficial de Meta (WhatsApp)', 'Alertas Push en los celulares de los residentes (iOS/Android)', 'Emails masivos a través de SendGrid con hermosas plantillas'].map((item, i) => (
                        <li key={i} className="flex items-start gap-4 text-white/70 font-semibold text-lg">
                           <CheckCircle2 className="text-[#0D9488] shrink-0 mt-0.5" size={24} /> {item}
                        </li>
                     ))}
                  </ul>
                  <button className="text-[#0D9488] font-bold text-lg flex items-center gap-2 hover:gap-3 transition-all pt-4">
                     Explorar módulo de comunicaciones <ArrowRight size={20} />
                  </button>
               </div>
               
               {/* Visual Presentation */}
               <div className="flex-1 relative w-full aspect-square md:aspect-auto md:h-[600px] rounded-[3rem] bg-gradient-to-br from-[#0D9488]/10 to-transparent border border-[#0D9488]/20 flex items-center justify-center overflow-hidden group shadow-2xl">
                  <div className="absolute inset-0 bg-[#020617]/40 backdrop-blur-md" />
                  
                  {/* Floating Elements (Mock UI) */}
                  <div className="relative z-10 w-[70%] bg-[#020617] border border-white/10 rounded-3xl shadow-[0_0_50px_rgba(13,148,136,0.15)] p-2">
                     <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                        <div className="flex items-center gap-3 mb-6">
                           <div className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center animate-bounce-slow">
                              <Smartphone size={20} className="text-white" />
                           </div>
                           <h4 className="font-bold text-white uppercase tracking-widest text-sm">Alerta de Edificio</h4>
                        </div>
                        <div className="bg-[#111B21] rounded-2xl rounded-tl-none p-4 w-[90%] border border-white/5 shadow-xl relative overflow-hidden">
                           <div className="absolute right-0 top-0 w-16 h-16 bg-[#25D366]/20 blur-xl" />
                           <p className="text-white/90 text-sm leading-relaxed relative z-10">
                              ⚠️ <strong className="text-white">Aviso Importante:</strong> El día de mañana a las 10:00 AM se realizará el mantenimiento de la red principal de acueducto.
                              <br/><br/>
                              Agradecemos su comprensión.
                           </p>
                           <p className="text-right text-[10px] text-white/40 mt-2 font-bold">14:26 ✓✓</p>
                        </div>
                        
                        <div className="mt-8 pt-6 border-t border-white/10 flex justify-between items-center text-xs">
                           <span className="text-white/40 font-bold uppercase tracking-widest">Enviado por API</span>
                           <span className="text-[#0D9488] font-black uppercase tracking-widest">95% Tasa de Apertura</span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

         </div>
      </section>

      {/* Testimonials */}
      <section id="testimonios" className="py-24 px-6 bg-gradient-to-b from-[#020617] via-[#020617] to-white/[0.02] relative z-10 border-t border-white/5 overflow-hidden">
         <div className="absolute top-0 right-[20%] w-[500px] h-[500px] bg-[#3B82F6]/5 rounded-full blur-[100px] pointer-events-none" />
         
         <div className="max-w-7xl mx-auto space-y-16 relative z-10">
            <div className="text-center space-y-4">
               <h2 className="text-4xl md:text-5xl font-black text-white">
                  Respaldado por Administradores de Élite
               </h2>
               <p className="text-xl text-white/50 font-medium">No tomes nuestra palabra. Mira lo que han logrado.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
               <div className="bg-white/5 border border-white/10 rounded-3xl p-8 space-y-6 hover:bg-white/10 transition-colors backdrop-blur-sm">
                  <div className="flex gap-1 text-[#F59E0B]">
                     {[1,2,3,4,5].map(i => <Zap key={i} size={18} fill="currentColor" />)}
                  </div>
                  <p className="text-white/70 text-lg italic leading-relaxed font-medium">
                     "La recuperación de cartera ha sido monumental. Los dueños ahora pagan la administración desde su celular en segundos con Nequi. El sistema se paga solo."
                  </p>
                  <div className="pt-4 flex items-center gap-4">
                     <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0D9488] to-[#3B82F6] flex items-center justify-center font-black text-white">CJ</div>
                     <div>
                        <p className="font-bold text-white text-sm">Carlos Jaramillo</p>
                        <p className="text-xs text-[#0D9488] font-bold uppercase tracking-widest mt-1">Torres del Parque</p>
                     </div>
                  </div>
               </div>
               
               <div className="bg-white/5 border border-white/10 rounded-3xl p-8 space-y-6 hover:bg-white/10 transition-colors backdrop-blur-sm">
                  <div className="flex gap-1 text-[#F59E0B]">
                     {[1,2,3,4,5].map(i => <Zap key={i} size={18} fill="currentColor" />)}
                  </div>
                  <p className="text-white/70 text-lg italic leading-relaxed font-medium">
                     "La asamblea virtual de este año fue perfecta. Todos votaron desde la tablet en el dashboard, se generó el acta y listo. Cero estrés, 100% elegancia."
                  </p>
                  <div className="pt-4 flex items-center gap-4">
                     <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#ef4444] to-[#f59e0b] flex items-center justify-center font-black text-white">MP</div>
                     <div>
                        <p className="font-bold text-white text-sm">Mariana Pérez</p>
                        <p className="text-xs text-[#0D9488] font-bold uppercase tracking-widest mt-1">Club Los Lagartos</p>
                     </div>
                  </div>
               </div>

               <div className="bg-white/5 border border-white/10 rounded-3xl p-8 space-y-6 hover:bg-white/10 transition-colors backdrop-blur-sm md:col-span-2 lg:col-span-1">
                  <div className="flex gap-1 text-[#F59E0B]">
                     {[1,2,3,4,5].map(i => <Zap key={i} size={18} fill="currentColor" />)}
                  </div>
                  <p className="text-white/70 text-lg italic leading-relaxed font-medium">
                     "Ahorro al menos 40 horas mensuales como contadora. Las conciliaciones llegan automatizadas a Siigo y enviar notificaciones vía WhatsApp con un click cambia la vida."
                  </p>
                  <div className="pt-4 flex items-center gap-4">
                     <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#8b5cf6] to-[#ec4899] flex items-center justify-center font-black text-white">RS</div>
                     <div>
                        <p className="font-bold text-white text-sm">Roberto Sánchez</p>
                        <p className="text-xs text-[#0D9488] font-bold uppercase tracking-widest mt-1">Inmobiliaria Sur</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Extreme CTA Section */}
      <section className="py-32 px-6 relative z-10 overflow-hidden bg-white/[0.02] border-t border-white/5">
         <div className="absolute inset-0 bg-[#0D9488]/10 blur-[150px] rounded-full pointer-events-none" />
         <div className="max-w-5xl mx-auto text-center relative z-20 space-y-10 p-12 md:p-20 rounded-[3rem] border border-[#0D9488]/30 bg-[#020617]/90 backdrop-blur-3xl shadow-[0_0_100px_rgba(0,229,160,0.2)]">
            <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white text-[#020617] text-sm font-black tracking-widest uppercase">
               No hay inversión inicial • Cancela cuando quieras
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-[1.05]">
               Lleva tu Administración <br/> al Siguiente Nivel.
            </h2>
            <p className="text-xl md:text-2xl text-white/60 font-medium max-w-3xl mx-auto">
               Agenda una demo de 15 minutos. Te mostraremos el dashboard y cotizaremos un plan exacto según la cantidad de unidades de tu ecosistema.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
               <Link 
                  href="/dashboard" 
                  className="px-12 py-6 rounded-2xl bg-[#0D9488] text-[#020617] font-black text-lg uppercase tracking-widest transition-all hover:scale-105 shadow-[0_0_40px_rgba(0,229,160,0.5)] flex items-center justify-center gap-3"
               >
                  Probar Demo Interactive <ArrowRight size={24} />
               </Link>
               <button className="px-12 py-6 rounded-2xl bg-transparent hover:bg-white/5 text-white font-bold text-lg uppercase tracking-widest transition-all border border-white/20">
                  Contactar a Ventas
               </button>
            </div>
         </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t border-white/5 bg-[#020617]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 text-white/50 text-sm font-medium">
          <div className="col-span-1 md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
               <div className="w-8 h-8 bg-gradient-to-br from-[#0D9488] to-[#01a877] rounded flex items-center justify-center">
                 <Building2 className="text-[#020617]" size={16} strokeWidth={3} />
               </div>
               <span className="text-lg font-bold tracking-tight text-white">
                 Afiliados<span className="text-[#0D9488]">OS</span>
               </span>
            </div>
            <p className="max-w-sm leading-relaxed">
               El ecosistema digital más potente de Latinoamérica para la administración de copropiedades, clubes y asociaciones.
            </p>
          </div>
          <div className="space-y-4">
             <h4 className="text-white font-bold uppercase tracking-widest mb-6">Módulos</h4>
             <ul className="space-y-3">
                <li><a href="#" className="hover:text-white transition-colors">Sistema Contable</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Asambleas Online</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Control de Acceso QR</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cobranza y Wompi</a></li>
             </ul>
          </div>
          <div className="space-y-4">
             <h4 className="text-white font-bold uppercase tracking-widest mb-6">Empresa</h4>
             <ul className="space-y-3">
                <li><a href="#" className="hover:text-white transition-colors">Precios y Planes</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Casos de Éxito</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Seguridad de Datos</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contacto Ventas</a></li>
             </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-white/30 text-xs font-bold uppercase tracking-widest">
           <p>© 2026 Proyector Software de Colombia.</p>
           <div className="flex gap-6">
             <span>Todos los derechos reservados.</span>
           </div>
        </div>
      </footer>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=Inter:wght@400;500;600&display=swap');
        
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
      `}</style>
    </div>
  );
}

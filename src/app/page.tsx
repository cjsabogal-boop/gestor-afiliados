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
  Building
} from 'lucide-react';
import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-slate-800 selection:bg-[#0D9488]/30 font-sans antialiased overflow-x-hidden">
      {/* Background Gradients */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-[#0D9488]/10 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#2563EB]/10 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute inset-0 opacity-[0.01] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-2xl border-b border-slate-200/50 bg-white/80 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-[#0D9488] to-[#01a877] rounded-xl flex items-center justify-center shadow-[0_4px_15px_rgba(13,148,136,0.2)]">
              <LayersIcon />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">
              Afiliados<span className="text-[#0D9488]">OS</span>
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-[13px] font-bold text-slate-500 uppercase tracking-wider">
            <a href="#roi" className="hover:text-[#0D9488] transition-colors">ROI</a>
            <a href="#modulos" className="hover:text-[#0D9488] transition-colors">Características</a>
            <a href="#testimonios" className="hover:text-[#0D9488] transition-colors">Testimonios</a>
          </div>

          <div className="flex items-center gap-4">
             <Link href="/dashboard" className="hidden md:block text-sm font-bold text-slate-600 hover:text-[#0D9488] transition-colors">
               Iniciar Sesión
             </Link>
             <Link 
               href="/dashboard" 
               className="px-6 py-2.5 rounded-xl bg-[#0D9488] text-white text-sm font-bold hover:bg-[#0f766c] transition-all shadow-[0_4px_15px_rgba(13,148,136,0.3)]"
             >
               Ver Demo
             </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-40 pb-20 px-6 z-10 w-full flex flex-col items-center justify-center text-center min-h-[90vh]">
        <div className="max-w-5xl mx-auto space-y-8 relative z-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#0D9488]/20 bg-[#0D9488]/5 text-[#0D9488] text-xs font-bold tracking-widest uppercase shadow-sm">
            <Zap size={14} fill="currentColor" /> El Software Definitivo para Clubes y Comunidades
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[1.05] text-slate-900">
            Administra tu Comunidad. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0D9488] via-[#3B82F6] to-[#0ea5e9]">
              Revoluciona tu Gestión.
            </span>
          </h1>
          
          <p className="max-w-3xl mx-auto text-lg md:text-2xl text-slate-500 font-medium leading-relaxed">
            Elimina el Excel, los correos perdidos y las asambleas caóticas. AfiliadosOS es el ecosistema moderno diseñado para Clubes Sociales, Asociaciones y Copropiedades excepcionales.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Link 
               href="/dashboard" 
               className="group relative px-8 py-4 rounded-xl bg-[#0D9488] text-white font-bold text-sm uppercase tracking-widest overflow-hidden transition-all hover:scale-105 shadow-[0_8px_30px_rgba(13,148,136,0.3)] flex items-center justify-center gap-2"
            >
               Entrar al Demo <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <button className="px-8 py-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-sm transition-all border border-slate-200 flex items-center justify-center gap-2">
               <PlayCircle size={18} /> Ver Casos de Éxito
            </button>
          </div>

          <div className="pt-16 flex flex-col items-center gap-4 opacity-80">
             <p className="text-xs font-bold uppercase tracking-widest text-slate-400">CONFIADO POR MÁS DE 500 CLUBES, ASOCIACIONES Y CONJUNTOS</p>
             <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center grayscale opacity-50 mix-blend-multiply">
                <h3 className="text-2xl font-black tracking-tighter text-slate-800">Country Club <span className="font-light">San Diego</span></h3>
                <h3 className="text-2xl font-black tracking-tighter text-slate-800">ASOCIACIÓN <span className="text-slate-600 opacity-80">PRO</span></h3>
                <h3 className="text-2xl font-black tracking-tighter text-slate-800">Condominio <span className="italic font-serif">El Valle</span></h3>
             </div>
          </div>
        </div>
      </header>

      {/* Main Benefits ROI (The "Vendedora" part) */}
      <section id="roi" className="py-24 px-6 relative z-10 border-y border-slate-100 bg-slate-50/50">
         <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
               <div className="space-y-4 p-10 rounded-[2rem] bg-white border border-slate-100 hover:border-[#0D9488]/30 transition-all duration-500 hover:-translate-y-2 group shadow-xl shadow-slate-200/50">
                  <div className="w-16 h-16 rounded-2xl bg-[#0D9488]/10 text-[#0D9488] flex items-center justify-center mx-auto md:mx-0 group-hover:scale-110 transition-transform">
                     <TrendingDown size={32} />
                  </div>
                  <h3 className="text-5xl font-black text-slate-900">-45% Cartera</h3>
                  <p className="text-slate-600 font-medium leading-relaxed text-lg">
                    Recuperación contundente de cartera vencida automatizando cobros de membresías y cuotas vía PSE y tarjetas.
                  </p>
               </div>
               
               <div className="space-y-4 p-10 rounded-[2rem] bg-white border border-slate-100 hover:border-[#2563EB]/30 transition-all duration-500 hover:-translate-y-2 group shadow-xl shadow-slate-200/50">
                  <div className="w-16 h-16 rounded-2xl bg-[#2563EB]/10 text-[#2563EB] flex items-center justify-center mx-auto md:mx-0 group-hover:scale-110 transition-transform">
                     <Clock size={32} />
                  </div>
                  <h3 className="text-5xl font-black text-slate-900">40h Ahorradas</h3>
                  <p className="text-slate-600 font-medium leading-relaxed text-lg">
                    Horas operativas ahorradas al mes eliminando conciliaciones manuales y reduciendo radicalmente los PQRs de los socios.
                  </p>
               </div>

               <div className="space-y-4 p-10 rounded-[2rem] bg-white border border-slate-100 hover:border-[#F59E0B]/30 transition-all duration-500 hover:-translate-y-2 group shadow-xl shadow-slate-200/50">
                  <div className="w-16 h-16 rounded-2xl bg-[#F59E0B]/10 text-[#F59E0B] flex items-center justify-center mx-auto md:mx-0 group-hover:scale-110 transition-transform">
                     <Shield size={32} />
                  </div>
                  <h3 className="text-5xl font-black text-slate-900">100% Legal</h3>
                  <p className="text-slate-600 font-medium leading-relaxed text-lg">
                    Asambleas y quórums verificados electrónicamente. Historial de votaciones inalterable y generación automática de actas.
                  </p>
               </div>
            </div>
         </div>
      </section>

      {/* Core Features Showcase */}
      <section id="modulos" className="py-40 px-6 relative z-10">
         <div className="max-w-7xl mx-auto space-y-40">
            
            {/* Feature 1: Cuotas / Finanzas */}
            <div className="flex flex-col md:flex-row items-center gap-16">
               <div className="flex-1 space-y-8">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#3B82F6]/10 text-[#3B82F6] text-xs font-bold uppercase tracking-widest border border-[#3B82F6]/20">
                     <CreditCard size={16} /> Finanzas & Pagos
                  </div>
                  <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-[1.1]">
                     Dile adiós al Excel y a conciliar recibos a mano.
                  </h2>
                  <p className="text-xl text-slate-500 font-medium leading-relaxed">
                     Genera facturación masiva de cuotas sociales o de administración con un clic. Tus afiliados pagan online y el dashboard se concilia al instante.
                  </p>
                  <ul className="space-y-5 pt-4">
                     {['Pasarela nativa vía Wompi: tarjetas, Nequi y transferencias PSE', 'Alertas automáticas de mora al teléfono móvil de los afiliados', 'Sincronización automatizada con tu software contable actual'].map((item, i) => (
                        <li key={i} className="flex items-start gap-4 text-slate-600 font-semibold text-lg">
                           <CheckCircle2 className="text-[#0D9488] shrink-0 mt-0.5" size={24} /> {item}
                        </li>
                     ))}
                  </ul>
                  <button className="text-[#3B82F6] font-bold text-lg flex items-center gap-2 hover:gap-3 transition-all pt-4">
                     Explorar módulo financiero <ArrowRight size={20} />
                  </button>
               </div>
               
               {/* Visual Presentation */}
               <div className="flex-1 relative w-full aspect-square md:aspect-auto md:h-[600px] rounded-[3rem] bg-slate-50 border border-slate-200 flex items-center justify-center overflow-hidden group shadow-[0_20px_50px_rgba(59,130,246,0.1)]">
                  {/* Floating Elements (Mock UI) */}
                  <div className="relative z-10 w-[85%] bg-white border border-slate-100 rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.05)] p-8 space-y-6 transform group-hover:-translate-y-2 transition-transform duration-500">
                     <div className="flex justify-between items-center border-b border-slate-100 pb-6">
                        <div>
                           <p className="text-xs text-slate-400 font-bold uppercase tracking-[0.2em] mb-1">Recaudo Estimado Marzo</p>
                           <p className="text-5xl font-black text-slate-900">$42.5M</p>
                        </div>
                        <div className="px-4 py-2 bg-green-50 text-green-600 rounded-xl text-sm font-black border border-green-100">
                          98% Efectividad
                        </div>
                     </div>
                     <div className="space-y-4 pt-4">
                        {[
                          { apt: 'MB-102', name: 'Al Día', val: '+$350,000' },
                          { apt: 'MB-45', name: 'Al Día', val: '+$350,000' },
                          { apt: 'VIP-12', name: 'Al Día', val: '+$850,000' }
                        ].map((m, i) => (
                           <div key={i} className="flex justify-between items-center p-4 bg-slate-50/50 rounded-2xl border border-slate-100 hover:border-slate-200 transition-colors">
                              <div className="flex items-center gap-4">
                                 <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center font-bold text-slate-600 border border-slate-100 text-xs">
                                   {m.apt}
                                 </div>
                                 <div>
                                    <p className="text-sm font-black text-slate-800">Pago Conciliado</p>
                                    <p className="text-xs text-green-600 font-bold tracking-widest uppercase mt-0.5">{m.name} Wompi</p>
                                 </div>
                              </div>
                              <p className="text-lg font-black text-slate-900">{m.val}</p>
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
                     <Users size={16} /> Asambleas Live
                  </div>
                  <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-[1.1]">
                     Control total de las reuniones de socios.
                  </h2>
                  <p className="text-xl text-slate-500 font-medium leading-relaxed">
                     Convierte asambleas presenciales o virtuales en experiencias dinámicas, ordenadas y estrictamente legales. Modera participaciones y obtén el acta lista al cerrar.
                  </p>
                  <ul className="space-y-5 pt-4">
                     {['Cálculo de Quórum en tiempo real ponderado por coeficiente o membresía', 'Votaciones secretas o públicas con resultados inmediatos certificados', 'Generación automatizada de reportes y actas oficiales'].map((item, i) => (
                        <li key={i} className="flex items-start gap-4 text-slate-600 font-semibold text-lg">
                           <CheckCircle2 className="text-[#0D9488] shrink-0 mt-0.5" size={24} /> {item}
                        </li>
                     ))}
                  </ul>
                  <button className="text-[#ef4444] font-bold text-lg flex items-center gap-2 hover:gap-3 transition-all pt-4">
                     Explorar módulo de asambleas <ArrowRight size={20} />
                  </button>
               </div>
               
               {/* Visual Presentation */}
               <div className="flex-1 relative w-full aspect-square md:aspect-auto md:h-[600px] rounded-[3rem] bg-slate-50 border border-slate-200 flex items-center justify-center overflow-hidden group shadow-[0_20px_50px_rgba(239,68,68,0.1)]">
                   {/* Mock UI snippet */}
                   <div className="relative z-10 w-[75%] bg-white border border-slate-100 rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.05)] p-10 space-y-8 text-center transform group-hover:scale-105 transition-transform duration-500">
                     <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-red-50 mb-2 border border-red-100">
                        <Users size={32} className="text-red-500" />
                     </div>
                     <div className="space-y-2">
                        <p className="text-xs text-[#ef4444] font-black uppercase tracking-[0.3em]">Quórum Confirmado</p>
                        <p className="text-7xl font-black text-slate-900 tracking-tighter">65.4%</p>
                     </div>
                     
                     <div className="w-full bg-slate-100 rounded-full h-4 overflow-hidden shadow-inner relative">
                        <div className="bg-gradient-to-r from-[#01a877] to-[#0D9488] w-[65%] h-full relative transition-all duration-1000"></div>
                        <div className="absolute left-[51%] top-0 bottom-0 w-0.5 bg-red-500 z-10" />
                     </div>
                     
                     <button className="w-full py-4 bg-slate-900 text-white hover:bg-slate-800 transition-colors font-black uppercase tracking-widest text-sm rounded-2xl shadow-xl">
                        Aprobar Estados Financieros
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
                  <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-[1.1]">
                     Llega al celular de tus miembros en segundos.
                  </h2>
                  <p className="text-xl text-slate-500 font-medium leading-relaxed">
                     El cartel de corcho pasó a la historia. Comunica eventos, reserva de zonas (tenis, salones) o boletines directamente a WhatsApp, app y correo personal.
                  </p>
                  <ul className="space-y-5 pt-4">
                     {['Conexión directa vía API oficial de WhatsApp para avisos urgentes', 'Alertas Push interactivas en los celulares de los miembros', 'Emails masivos, dinámicos y medibles con herramientas como SendGrid'].map((item, i) => (
                        <li key={i} className="flex items-start gap-4 text-slate-600 font-semibold text-lg">
                           <CheckCircle2 className="text-[#0D9488] shrink-0 mt-0.5" size={24} /> {item}
                        </li>
                     ))}
                  </ul>
                  <button className="text-[#0D9488] font-bold text-lg flex items-center gap-2 hover:gap-3 transition-all pt-4">
                     Explorar módulo de comunicaciones <ArrowRight size={20} />
                  </button>
               </div>
               
               {/* Visual Presentation */}
               <div className="flex-1 relative w-full aspect-square md:aspect-auto md:h-[600px] rounded-[3rem] bg-slate-50 border border-slate-200 flex items-center justify-center overflow-hidden group shadow-[0_20px_50px_rgba(13,148,136,0.1)]">
                  {/* Floating Elements (Mock UI) */}
                  <div className="relative z-10 w-[70%] bg-white border border-slate-100 rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.08)] p-2">
                     <div className="bg-slate-50/50 rounded-2xl p-6 border border-slate-100">
                        <div className="flex items-center gap-3 mb-6">
                           <div className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center animate-bounce-slow shadow-[0_4px_15px_rgba(37,211,102,0.3)]">
                              <Smartphone size={20} className="text-white" />
                           </div>
                           <h4 className="font-bold text-slate-800 uppercase tracking-widest text-sm">Alerta Comunidad</h4>
                        </div>
                        <div className="bg-[#E1F6F4] rounded-2xl rounded-tl-none p-5 w-[90%] border border-[#b8ebe6] shadow-sm relative overflow-hidden">
                           <p className="text-slate-700 text-sm leading-relaxed relative z-10">
                              ⚠️ <strong className="text-slate-900">Aviso Importante:</strong> El torneo anual de tenis ha modificado sus horarios por limpieza de canchas. Revisa la nueva agenda en la app.
                              <br/><br/>
                              Agradecemos su comprensión.
                           </p>
                           <p className="text-right text-[10px] text-slate-400 mt-2 font-bold">14:26 ✓✓</p>
                        </div>
                        
                        <div className="mt-8 pt-6 border-t border-slate-200 flex justify-between items-center text-xs">
                           <span className="text-slate-400 font-bold uppercase tracking-widest">Enviado por API</span>
                           <span className="text-[#0D9488] font-black uppercase tracking-widest">95% Tasa de Apertura</span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

         </div>
      </section>

      {/* Testimonials */}
      <section id="testimonios" className="py-24 px-6 bg-slate-100 relative z-10 overflow-hidden">
         <div className="absolute top-0 right-[20%] w-[500px] h-[500px] bg-[#3B82F6]/5 rounded-full blur-[100px] pointer-events-none" />
         
         <div className="max-w-7xl mx-auto space-y-16 relative z-10">
            <div className="text-center space-y-4">
               <h2 className="text-4xl md:text-5xl font-black text-slate-900">
                  Respaldado por Juntas y Administradores
               </h2>
               <p className="text-xl text-slate-500 font-medium">No tomes nuestra palabra. Mira lo que han logrado.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
               <div className="bg-white border border-slate-200 rounded-3xl p-8 space-y-6 shadow-sm hover:shadow-lg transition-shadow">
                  <div className="flex gap-1 text-[#F59E0B]">
                     {[1,2,3,4,5].map(i => <Zap key={i} size={18} fill="currentColor" />)}
                  </div>
                  <p className="text-slate-600 text-lg italic leading-relaxed font-medium">
                     "La recuperación de cartera ha sido monumental. Los socios del club ahora pagan la membresía desde su celular en segundos. El sistema se paga solo."
                  </p>
                  <div className="pt-4 flex items-center gap-4">
                     <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0D9488] to-[#3B82F6] flex items-center justify-center font-black text-white">CJ</div>
                     <div>
                        <p className="font-bold text-slate-900 text-sm">Carlos Jaramillo</p>
                        <p className="text-xs text-[#0D9488] font-bold uppercase tracking-widest mt-1">Gerente Deportivo</p>
                     </div>
                  </div>
               </div>
               
               <div className="bg-white border border-slate-200 rounded-3xl p-8 space-y-6 shadow-sm hover:shadow-lg transition-shadow">
                  <div className="flex gap-1 text-[#F59E0B]">
                     {[1,2,3,4,5].map(i => <Zap key={i} size={18} fill="currentColor" />)}
                  </div>
                  <p className="text-slate-600 text-lg italic leading-relaxed font-medium">
                     "La asamblea virtual de este año fue perfecta. Todos votaron desde la tablet en el dashboard, se generó el acta y listo. Cero estrés, 100% elegancia."
                  </p>
                  <div className="pt-4 flex items-center gap-4">
                     <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#ef4444] to-[#f59e0b] flex items-center justify-center font-black text-white">MP</div>
                     <div>
                        <p className="font-bold text-slate-900 text-sm">Mariana Pérez</p>
                        <p className="text-xs text-[#0D9488] font-bold uppercase tracking-widest mt-1">Junta Directiva Asociación</p>
                     </div>
                  </div>
               </div>

               <div className="bg-white border border-slate-200 rounded-3xl p-8 space-y-6 shadow-sm hover:shadow-lg transition-shadow md:col-span-2 lg:col-span-1">
                  <div className="flex gap-1 text-[#F59E0B]">
                     {[1,2,3,4,5].map(i => <Zap key={i} size={18} fill="currentColor" />)}
                  </div>
                  <p className="text-slate-600 text-lg italic leading-relaxed font-medium">
                     "Ahorro al menos 40 horas al mes. Las conciliaciones bancarias llegan automatizadas y enviar notificaciones vía WhatsApp cambió nuestra operatividad."
                  </p>
                  <div className="pt-4 flex items-center gap-4">
                     <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#8b5cf6] to-[#ec4899] flex items-center justify-center font-black text-white">RS</div>
                     <div>
                        <p className="font-bold text-slate-900 text-sm">Roberto Sánchez</p>
                        <p className="text-xs text-[#0D9488] font-bold uppercase tracking-widest mt-1">Contador General</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Extreme CTA Section */}
      <section className="py-32 px-6 relative z-10 overflow-hidden bg-white">
         <div className="absolute inset-0 bg-[#0D9488]/5 blur-[150px] rounded-full pointer-events-none" />
         <div className="max-w-5xl mx-auto text-center relative z-20 space-y-10 p-12 md:p-20 rounded-[3rem] border border-slate-200 bg-white shadow-[0_20px_80px_rgba(0,0,0,0.05)]">
            <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-[#0D9488]/10 text-[#0D9488] text-sm font-black tracking-widest uppercase">
               Lleva tu comunidad a la era digital
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter leading-[1.05]">
               Prueba la Diferencia <br/> Hoy Mismo.
            </h2>
            <p className="text-xl md:text-2xl text-slate-500 font-medium max-w-3xl mx-auto">
               Explora nuestra demostración interactiva gratuita. Descubre cómo centralizar las finanzas, miembros y reportes en segundos.
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
               <div className="w-8 h-8 bg-gradient-to-br from-[#0D9488] to-[#01a877] rounded flex items-center justify-center">
                 <Building className="text-white" size={16} strokeWidth={3} />
               </div>
               <span className="text-lg font-bold tracking-tight text-slate-900">
                 Afiliados<span className="text-[#0D9488]">OS</span>
               </span>
            </div>
            <p className="max-w-sm leading-relaxed text-slate-400">
               El ecosistema digital más potente de Latinoamérica para la administración de clubes sociales, asociaciones y copropiedades exclusivas.
            </p>
          </div>
          <div className="space-y-4">
             <h4 className="text-slate-800 font-bold uppercase tracking-widest mb-6">Módulos</h4>
             <ul className="space-y-3">
                <li><a href="#" className="hover:text-[#0D9488] transition-colors">Sistema Contable</a></li>
                <li><a href="#" className="hover:text-[#0D9488] transition-colors">Asambleas Online</a></li>
                <li><a href="#" className="hover:text-[#0D9488] transition-colors">Reservas de Zonas</a></li>
                <li><a href="#" className="hover:text-[#0D9488] transition-colors">Pasarela Wompi</a></li>
             </ul>
          </div>
          <div className="space-y-4">
             <h4 className="text-slate-800 font-bold uppercase tracking-widest mb-6">Empresa</h4>
             <ul className="space-y-3">
                <li><a href="#" className="hover:text-[#0D9488] transition-colors">Nuestros Valores</a></li>
                <li><a href="#" className="hover:text-[#0D9488] transition-colors">Casos de Éxito</a></li>
                <li><a href="#" className="hover:text-[#0D9488] transition-colors">Soporte Técnico</a></li>
                <li><a href="#" className="hover:text-[#0D9488] transition-colors">Contacto Ventas</a></li>
             </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-400 text-xs font-bold uppercase tracking-widest">
           <p>© 2026 Proyector Software C.A.</p>
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
// Adding Custom Icons for modern aesthetics
function LayersIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-white">
      <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
      <polyline points="2 17 12 22 22 17"></polyline>
      <polyline points="2 12 17 22 12"></polyline>
    </svg>
  );
}

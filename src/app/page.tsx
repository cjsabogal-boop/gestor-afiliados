"use client";

import { 
  Building2, 
  ArrowRight,
  Shield,
  Zap,
  Layers,
  Bot,
  Link as LinkIcon,
  Gamepad2,
  Wallet
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#020617] text-[#E8EDF5] selection:bg-[#0D9488]/30 font-sans antialiased overflow-x-hidden">
      {/* Dynamic Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-[#0D9488]/10 rounded-full blur-[150px] animate-pulse-slow" />
        <div className="absolute bottom-[-10%] left-[-20%] w-[600px] h-[600px] bg-[#2563EB]/10 rounded-full blur-[150px] animate-pulse-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute top-[40%] left-[30%] w-[400px] h-[400px] bg-[#0ea5e9]/5 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: '4s' }} />
        
        {/* Subtle noise pattern */}
        <div className="absolute inset-0 opacity-[0.02] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-50 mix-blend-overlay" />
      </div>

      {/* Modern Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-2xl border-b border-white/5 bg-[#020617]/60">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-[#0D9488] to-[#01a877] rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(0,229,160,0.3)]">
              <Layers className="text-[#020617]" size={20} strokeWidth={2.5} />
            </div>
            <span className="text-xl font-bold tracking-tight text-white">
              Afiliados<span className="text-[#0D9488]">OS</span>
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-[13px] font-semibold text-white/60">
            <a href="#vision" className="hover:text-white transition-colors">Visión</a>
            <a href="#modulos" className="hover:text-white transition-colors">Super Módulos</a>
            <a href="#tecnologia" className="hover:text-white transition-colors">Tecnología</a>
          </div>

          <Link 
            href="/dashboard" 
            className="px-6 py-2.5 rounded-full bg-white/5 text-white text-sm font-semibold border border-white/10 hover:bg-[#0D9488] hover:text-[#020617] hover:border-transparent transition-all shadow-lg backdrop-blur-md"
          >
            Abrir App
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-24 pb-20 px-6 z-10 w-full flex flex-col items-center justify-center text-center">
        <div className="max-w-5xl mx-auto space-y-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#0D9488]/30 bg-[#0D9488]/10 text-[#0D9488] text-xs font-bold tracking-widest uppercase shadow-[0_0_15px_rgba(0,229,160,0.15)] animate-float">
            <Zap size={14} fill="currentColor" /> El Sistema Operativo para Comunidades
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] text-white">
            GESTIÓN DE AFILIADOS <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0D9488] via-[#2563EB] to-[#0ea5e9]">
              NIVEL MONSTRUO
            </span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-xl md:text-2xl text-white/50 font-medium leading-relaxed">
            Reemplaza tu software legacy, Excel y WhatsApp por un ecosistema unificado para Clubes, Edificios y Asociaciones. 
            Carné digital, votaciones en línea, reservas de espacios y cobranza automática.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center pt-8">
            <Link 
              href="/dashboard" 
              className="group relative px-10 py-5 rounded-2xl bg-[#0D9488] text-[#020617] font-bold text-sm uppercase tracking-wide overflow-hidden transition-all hover:scale-105 shadow-[0_0_40px_rgba(0,229,160,0.3)]"
            >
              <div className="absolute inset-0 w-1/4 h-full bg-white/30 -skew-x-12 -translate-x-full group-hover:translate-x-[500%] transition-transform duration-700 ease-out" />
              Ingresar al Demo Interactivo
            </Link>
          </div>
        </div>

        {/* Dashboard Preview mockup */}
        <div className="mt-28 relative w-full max-w-6xl mx-auto perspective-1000 group">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0D9488]/20 to-transparent blur-3xl opacity-50 transition-opacity group-hover:opacity-70" />
          
          <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#020617]/80 backdrop-blur-xl shadow-2xl transform rotate-x-12 scale-100 transition-transform duration-700 ease-out group-hover:rotate-x-0 group-hover:scale-[1.02]">
            {/* Fake Mac Header */}
            <div className="h-8 bg-white/5 border-b border-white/10 flex items-center px-4 gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            
            <div className="p-8 grid grid-cols-12 gap-6 opacity-80 group-hover:opacity-100 transition-opacity">
              {/* Fake Sidebar */}
              <div className="col-span-3 space-y-4">
                <div className="h-8 w-32 bg-white/10 rounded" />
                <div className="space-y-2 mt-8">
                  {[1,2,3,4,5].map(i => <div key={i} className="h-10 w-full bg-white/5 rounded-lg" />)}
                </div>
              </div>
              {/* Fake Content */}
              <div className="col-span-9 space-y-6">
                <div className="flex gap-4">
                  <div className="flex-1 h-32 bg-gradient-to-br from-[#0D9488]/20 to-transparent border border-[#0D9488]/20 rounded-2xl" />
                  <div className="flex-1 h-32 bg-gradient-to-br from-[#2563EB]/20 to-transparent border border-[#2563EB]/20 rounded-2xl" />
                  <div className="flex-1 h-32 bg-gradient-to-br from-[#0ea5e9]/20 to-transparent border border-[#0ea5e9]/20 rounded-2xl" />
                </div>
                <div className="h-64 w-full bg-white/5 border border-white/10 rounded-2xl" />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Módulos Killer */}
      <section id="modulos" className="py-32 px-6 relative z-10 bg-[#020617]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-4xl md:text-5xl font-black text-white">
              7 Módulos de <span className="text-[#0D9488]">Próxima Generación</span>
            </h2>
            <p className="text-white/50 text-xl font-medium max-w-2xl mx-auto">
              Diseñado para la vida en comunidad y el control administrativo absoluto. 
              Convierte tu organización en un referente de tecnología.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Module 1 */}
            <div className="group p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-[#EAB308]/5 hover:border-[#EAB308]/30 transition-all duration-300">
              <div className="w-14 h-14 bg-[#EAB308]/10 rounded-2xl flex items-center justify-center text-[#EAB308] mb-6 group-hover:scale-110 transition-transform">
                <Bot size={28} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Asambleas y Votaciones</h3>
              <p className="text-white/50 leading-relaxed text-sm">
                Quórums automáticos y actas exportables con 1 clic. Votaciones en tiempo real con ponderación por coeficiente (copropiedad).
              </p>
            </div>

            {/* Module 2 */}
            <div className="group p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-[#3B82F6]/5 hover:border-[#3B82F6]/30 transition-all duration-300">
              <div className="w-14 h-14 bg-[#3B82F6]/10 rounded-2xl flex items-center justify-center text-[#3B82F6] mb-6 group-hover:scale-110 transition-transform">
                <Building2 size={28} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Cobranza y Facturación</h3>
              <p className="text-white/50 leading-relaxed text-sm">
                Generación automática de cuotas de administración. Integración nativa con Wompi para pago por PSE, Nequi y tarjetas.
              </p>
            </div>

            {/* Module 3 */}
            <div className="group p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-[#0D9488]/5 hover:border-[#0D9488]/30 transition-all duration-300">
              <div className="w-14 h-14 bg-[#0D9488]/10 rounded-2xl flex items-center justify-center text-[#0D9488] mb-6 group-hover:scale-110 transition-transform">
                <LinkIcon size={28} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Carné Digital (QR)</h3>
              <p className="text-white/50 leading-relaxed text-sm">
                Carné virtual en la app del afiliado para control de acceso en portería. Códigos QR dinámicos y actualizados en tiempo real.
              </p>
            </div>

            {/* Module 4 */}
            <div className="group p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-[#2563EB]/5 hover:border-[#2563EB]/30 transition-all duration-300">
              <div className="w-14 h-14 bg-[#2563EB]/10 rounded-2xl flex items-center justify-center text-[#2563EB] mb-6 group-hover:scale-110 transition-transform">
                <Gamepad2 size={28} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Reservas de Espacios</h3>
              <p className="text-white/50 leading-relaxed text-sm">
                Calendario interactivo para zonas comunes (BBQ, Salón Comunal, Cancha). Self-service total para los residentes o socios.
              </p>
            </div>

            {/* Module 5 */}
            <div className="group p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-[#0ea5e9]/5 hover:border-[#0ea5e9]/30 transition-all duration-300">
              <div className="w-14 h-14 bg-[#0ea5e9]/10 rounded-2xl flex items-center justify-center text-[#0ea5e9] mb-6 group-hover:scale-110 transition-transform">
                <Shield size={28} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Tablero Comunitario</h3>
              <p className="text-white/50 leading-relaxed text-sm">
                Segmentación de comunicados vitales. Reemplaza el corcho de la recepción con notificaciones Push y SMS directos al celular.
              </p>
            </div>

            {/* Module 6 */}
            <div className="group p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-[#EC4899]/5 hover:border-[#EC4899]/30 transition-all duration-300">
              <div className="w-14 h-14 bg-[#EC4899]/10 rounded-2xl flex items-center justify-center text-[#EC4899] mb-6 group-hover:scale-110 transition-transform">
                <Wallet size={28} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Seguros Embebidos</h3>
              <p className="text-white/50 leading-relaxed text-sm">
                Integración insurtech. Permite a los afiliados contratar seguros a 1 clic, debitados de su cuota, creando una enorme línea de revenue.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 bg-[#020617]">
        <div className="max-w-7xl mx-auto px-6 text-center text-white/40 text-sm font-medium">
          <p>© 2026 AfiliadosOS. Tecnología de Proyector 2026.</p>
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

        .rotate-x-12 {
          transform: perspective(1000px) rotateX(12deg);
        }
        .group:hover .group-hover\:rotate-x-0 {
          transform: perspective(1000px) rotateX(0deg);
        }
      `}</style>
    </div>
  );
}

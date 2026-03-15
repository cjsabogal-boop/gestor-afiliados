export default function PagosPage() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-white tracking-tight">Pagos & Transacciones</h1>
          <p className="text-white/40 text-sm mt-1">Historial de pagos por Wompi, PSE y conciliaciones manuales.</p>
        </div>
        <button className="px-5 py-2.5 rounded-xl bg-[#0D9488] hover:bg-[#0D9488]/90 text-[#020617] text-sm font-bold shadow-[0_0_20px_rgba(0,229,160,0.2)] transition-all">
          Registrar Pago Manual
        </button>
      </div>
      <div className="bg-white/5 border border-white/10 rounded-2xl p-6 h-[500px] flex items-center justify-center text-white/30 font-mono text-sm">
        [Historial de Pagos en Construcción]
      </div>
    </div>
  );
}

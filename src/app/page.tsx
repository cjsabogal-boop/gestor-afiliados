/**
 * GestorAfiliados - Dashboard del Administrador
 * Vista principal mobile-first para gestión de cobranza
 */

import { Building2, Users, AlertTriangle, Clock, CheckCircle } from 'lucide-react';
import { getDashboardStats, getAffiliatesWithDebt } from '@/app/actions/dashboard';
import { AffiliateCard } from '@/components/AffiliateCard';

export default async function DashboardPage() {
  // Obtener datos del servidor
  const [stats, affiliates] = await Promise.all([
    getDashboardStats(),
    getAffiliatesWithDebt(),
  ]);

  // Formatear monto total de deuda
  const totalDebtFormatted = stats.totalDebtAmount.toLocaleString('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="app-header">
        <div className="container flex items-center justify-between py-0">
          <div className="flex items-center gap-2">
            <Building2 className="text-primary" size={24} />
            <div>
              <h1 className="text-lg font-bold leading-none">GestorAfiliados</h1>
              <p className="text-xs text-gray-500">Edificio Torres del Parque</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="badge badge-success">
              <Users size={12} />
              {stats.totalAffiliates}
            </span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container py-4">
        {/* Stats Grid */}
        <section className="card mb-4" aria-label="Resumen de cartera">
          <div className="stats-grid">
            {/* Vencidas */}
            <div className="stat-card">
              <div className="stat-value text-red-500 flex items-center justify-center gap-1">
                <AlertTriangle size={20} />
                {stats.totalOverdue}
              </div>
              <p className="stat-label">Vencidas</p>
            </div>

            {/* Pendientes */}
            <div className="stat-card">
              <div className="stat-value text-amber-500 flex items-center justify-center gap-1">
                <Clock size={20} />
                {stats.totalPending}
              </div>
              <p className="stat-label">Pendientes</p>
            </div>

            {/* Pagadas */}
            <div className="stat-card">
              <div className="stat-value text-green-500 flex items-center justify-center gap-1">
                <CheckCircle size={20} />
                {stats.totalPaid}
              </div>
              <p className="stat-label">Pagadas</p>
            </div>
          </div>

          {/* Total por cobrar */}
          <div className="border-t border-gray-200 dark:border-gray-700 mt-3 pt-3 text-center">
            <p className="text-xs text-gray-500 uppercase tracking-wide">Total Por Cobrar</p>
            <p className="text-2xl font-bold text-red-600 money-cop">
              {totalDebtFormatted}
            </p>
          </div>
        </section>

        {/* Título de sección */}
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-lg font-semibold">Afiliados</h2>
          <span className="text-sm text-gray-500">
            {affiliates.filter(a => a.status !== 'PAID').length} con deuda
          </span>
        </div>

        {/* Lista de Afiliados (Tarjetas) */}
        <section className="cards-list" aria-label="Lista de afiliados">
          {affiliates.length === 0 ? (
            <div className="card p-8 text-center">
              <Users className="mx-auto mb-2 text-gray-400" size={40} />
              <p className="text-gray-500">No hay afiliados registrados</p>
            </div>
          ) : (
            affiliates.map((affiliate) => (
              <AffiliateCard key={affiliate.id} affiliate={affiliate} />
            ))
          )}
        </section>

        {/* Botón flotante para agregar */}
        <div className="fixed bottom-6 right-6">
          <button
            className="btn btn-primary shadow-lg"
            style={{
              width: '56px',
              height: '56px',
              borderRadius: '50%',
              padding: 0,
              fontSize: '24px'
            }}
            aria-label="Agregar nuevo afiliado"
          >
            +
          </button>
        </div>
      </main>

      {/* Footer con espacio para el botón flotante */}
      <div className="h-24" aria-hidden="true" />
    </div>
  );
}

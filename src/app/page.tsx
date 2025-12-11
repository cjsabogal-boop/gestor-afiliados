/**
 * GestorAfiliados - Dashboard del Administrador
 * Vista principal mobile-first para gestión de cobranza
 */

import { Building2, Users, AlertTriangle, Clock, CheckCircle, Bell, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { getOrganizations, getOrganizationsStats } from '@/app/actions/organizations';
import { formatCOP } from '@/lib/utils';

export default async function DashboardPage() {
  // Obtener datos del servidor
  const [organizations, stats] = await Promise.all([
    getOrganizations(),
    getOrganizationsStats(),
  ]);

  // Calcular resúmenes
  const totalOverdue = organizations.reduce((sum, org) => sum + org.overdueCount, 0);
  const totalPending = organizations.reduce((sum, org) => sum + org.pendingCount, 0);
  const orgsWithDebt = organizations.filter(org => org.totalDebt > 0);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="app-header">
        <div className="container flex items-center justify-between py-0">
          <div className="flex items-center gap-2">
            <Building2 className="text-primary" size={24} />
            <div>
              <h1 className="text-lg font-bold leading-none">GestorAfiliados</h1>
              <p className="text-xs text-gray-500">Panel SaaS</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/alertas" className="relative">
              <Bell size={20} className="text-gray-500" />
              {totalOverdue > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  {totalOverdue > 9 ? '9+' : totalOverdue}
                </span>
              )}
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container py-4">
        {/* Stats Grid General */}
        <section className="card mb-4" aria-label="Resumen general del SaaS">
          <div className="p-4">
            <h2 className="text-sm font-medium text-gray-500 mb-3 uppercase tracking-wide">
              Resumen General
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {/* Organizaciones */}
              <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
                <div className="flex items-center justify-center gap-2 text-blue-600 mb-1">
                  <Building2 size={24} />
                  <span className="text-3xl font-bold">{stats.totalOrganizations}</span>
                </div>
                <p className="text-xs text-gray-500">Organizaciones</p>
              </div>

              {/* Afiliados */}
              <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-xl">
                <div className="flex items-center justify-center gap-2 text-green-600 mb-1">
                  <Users size={24} />
                  <span className="text-3xl font-bold">{stats.totalAffiliates}</span>
                </div>
                <p className="text-xs text-gray-500">Afiliados</p>
              </div>
            </div>

            {/* Cartera */}
            <div className="mt-4 p-4 bg-gradient-to-r from-red-50 to-amber-50 dark:from-red-900/20 dark:to-amber-900/20 rounded-xl">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide">Cartera Total</p>
                  <p className="text-2xl font-bold text-red-600">
                    {formatCOP(stats.totalDebt)}
                  </p>
                </div>
                <div className="flex gap-4 text-center">
                  <div>
                    <div className="flex items-center justify-center gap-1 text-red-500">
                      <AlertTriangle size={16} />
                      <span className="font-bold text-lg">{totalOverdue}</span>
                    </div>
                    <p className="text-xs text-gray-500">Vencidas</p>
                  </div>
                  <div>
                    <div className="flex items-center justify-center gap-1 text-amber-500">
                      <Clock size={16} />
                      <span className="font-bold text-lg">{totalPending}</span>
                    </div>
                    <p className="text-xs text-gray-500">Pendientes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Acceso Rápido a Organizaciones */}
        <section className="mb-4">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-semibold">Organizaciones</h2>
            <Link
              href="/organizaciones"
              className="text-sm text-primary hover:underline flex items-center gap-1"
            >
              Ver todas <ChevronRight size={14} />
            </Link>
          </div>

          <div className="cards-list">
            {organizations.slice(0, 3).map((org) => {
              const typeEmoji = {
                EDIFICIO: '🏢',
                CLUB: '⛳',
                FONDO: '💼',
                OTRO: '🏛️',
              }[org.type];

              const hasUrgentDebt = org.overdueCount > 0;

              return (
                <Link
                  key={org.id}
                  href={`/organizaciones/${org.id}`}
                  className={`card p-4 flex items-center justify-between hover:border-blue-300 transition-colors ${hasUrgentDebt ? 'border-l-4 border-l-red-500' : ''
                    }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{typeEmoji}</span>
                    <div>
                      <h3 className="font-semibold text-sm">{org.name}</h3>
                      <p className="text-xs text-gray-500">
                        {org.affiliatesCount} afiliados
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    {org.totalDebt > 0 ? (
                      <>
                        <p className="font-bold text-red-600 text-sm">
                          {formatCOP(org.totalDebt)}
                        </p>
                        <p className="text-xs text-gray-500">
                          {org.overdueCount} vencidas
                        </p>
                      </>
                    ) : (
                      <div className="flex items-center gap-1 text-green-600">
                        <CheckCircle size={14} />
                        <span className="text-xs">Al día</span>
                      </div>
                    )}
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Organizaciones con Deuda Urgente */}
        {orgsWithDebt.length > 0 && (
          <section>
            <div className="flex items-center gap-2 mb-3">
              <AlertTriangle className="text-red-500" size={18} />
              <h2 className="text-lg font-semibold">Requieren Atención</h2>
            </div>

            <div className="cards-list">
              {orgsWithDebt
                .sort((a, b) => b.overdueCount - a.overdueCount)
                .slice(0, 5)
                .map((org) => (
                  <Link
                    key={org.id}
                    href={`/organizaciones/${org.id}`}
                    className="card p-3 flex items-center justify-between bg-red-50 dark:bg-red-900/20 border-red-200 hover:border-red-400"
                  >
                    <div>
                      <h3 className="font-medium text-sm">{org.name}</h3>
                      <p className="text-xs text-red-600">
                        {org.overdueCount} facturas vencidas
                      </p>
                    </div>
                    <span className="font-bold text-red-600">
                      {formatCOP(org.totalDebt)}
                    </span>
                  </Link>
                ))}
            </div>
          </section>
        )}
      </main>

      {/* Quick Actions */}
      <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 p-4">
        <div className="container flex gap-3">
          <Link
            href="/organizaciones"
            className="btn btn-outline flex-1"
          >
            <Building2 size={18} />
            Organizaciones
          </Link>
          <button className="btn btn-primary flex-1">
            <Bell size={18} />
            Enviar Alertas
          </button>
        </div>
      </div>

      {/* Spacer for bottom nav */}
      <div className="h-24" aria-hidden="true" />
    </div>
  );
}

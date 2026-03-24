/**
 * Página de Organizaciones - Vista del Admin SaaS
 * Lista todas las organizaciones (edificios, clubes, fondos) del administrador
 */

import { Building2, Plus, TrendingUp, Users, AlertTriangle } from 'lucide-react';
import { getOrganizations, getOrganizationsStats } from '@/app/actions/organizations';
import { OrganizationCard } from '@/components/OrganizationCard';
import { formatCOP } from '@/lib/utils';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

export default async function OrganizacionesPage() {
    const [organizations, stats] = await Promise.all([
        getOrganizations(),
        getOrganizationsStats(),
    ]);

    return (
        <div className="min-h-screen bg-background">
            {/* Header */}
            <header className="app-header">
                <div className="container flex items-center justify-between py-0">
                    <div className="flex items-center gap-3">
                        <img src="/afiliadosos_logo.png" alt="AfiliadosOS Logo" className="h-8 w-auto" />
                        <div>
                            <h1 className="text-lg font-bold leading-none tracking-tight">
                                Afiliados<span className="text-[#0D9488]">OS</span>
                            </h1>
                            <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Panel de Administración</p>
                        </div>
                    </div>
                    <Link href="/" className="text-sm text-primary hover:underline">
                        ← Dashboard
                    </Link>
                </div>
            </header>

            {/* Main Content */}
            <main className="container py-4">
                {/* Stats Grid */}
                <section className="card mb-4" aria-label="Resumen general">
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4">
                        <div className="text-center">
                            <div className="flex items-center justify-center gap-2 text-blue-600 mb-1">
                                <Building2 size={20} />
                                <span className="text-2xl font-bold">{stats.totalOrganizations}</span>
                            </div>
                            <p className="text-xs text-gray-500">Organizaciones</p>
                        </div>
                        <div className="text-center">
                            <div className="flex items-center justify-center gap-2 text-green-600 mb-1">
                                <Users size={20} />
                                <span className="text-2xl font-bold">{stats.totalAffiliates}</span>
                            </div>
                            <p className="text-xs text-gray-500">Afiliados</p>
                        </div>
                        <div className="text-center col-span-2">
                            <div className="flex items-center justify-center gap-2 text-red-600 mb-1">
                                <TrendingUp size={20} />
                                <span className="text-xl font-bold">{formatCOP(stats.totalDebt)}</span>
                            </div>
                            <p className="text-xs text-gray-500">Cartera Total</p>
                        </div>
                    </div>
                </section>

                {/* Título + Botón agregar */}
                <div className="flex items-center justify-between mb-3">
                    <h2 className="text-lg font-semibold">Mis Organizaciones</h2>
                    <button className="btn btn-primary text-sm py-2">
                        <Plus size={16} />
                        Nueva
                    </button>
                </div>

                {/* Lista de Organizaciones */}
                <section className="cards-list" aria-label="Lista de organizaciones">
                    {organizations.length === 0 ? (
                        <div className="card p-8 text-center">
                            <Building2 className="mx-auto mb-2 text-gray-400" size={40} />
                            <p className="text-gray-500">No hay organizaciones registradas</p>
                            <button className="btn btn-primary mt-4">
                                <Plus size={16} />
                                Agregar primera organización
                            </button>
                        </div>
                    ) : (
                        organizations.map((org) => (
                            <OrganizationCard key={org.id} organization={org} />
                        ))
                    )}
                </section>
            </main>

            {/* Footer spacing */}
            <div className="h-8" aria-hidden="true" />
        </div>
    );
}

/**
 * Página de Detalle de Organización
 * Muestra afiliados y configuración de alertas
 */

import { Building2, Users, Bell, Settings, ArrowLeft, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getOrganizationById } from '@/app/actions/organizations';
import { getDashboardStats, getAffiliatesWithDebt } from '@/app/actions/dashboard';
import { getAlertConfigs } from '@/app/actions/alerts';
import { AffiliateCard } from '@/components/AffiliateCard';
import { AlertConfigCard } from '@/components/AlertConfigCard';
import { formatCOP } from '@/lib/utils';

interface PageProps {
    params: Promise<{ id: string }>;
}

export const dynamic = 'force-dynamic';

export default async function OrganizacionDetailPage({ params }: PageProps) {
    const { id } = await params;

    const [organization, alertConfigs] = await Promise.all([
        getOrganizationById(id),
        getAlertConfigs(id),
    ]);

    if (!organization) {
        notFound();
    }

    // Obtener afiliados de esta organización
    const affiliates = await getAffiliatesWithDebt();
    const orgAffiliates = affiliates.filter(a =>
        // Por ahora mostramos todos ya que el filtro por orgId se hará en una versión futura
        true
    );

    const typeEmoji = {
        EDIFICIO: '🏢',
        CLUB: '⛳',
        FONDO: '💼',
        OTRO: '🏛️',
    }[organization.type];

    return (
        <div className="min-h-screen bg-background">
            {/* Header */}
            <header className="app-header">
                <div className="container py-0">
                    <Link
                        href="/organizaciones"
                        className="flex items-center gap-1 text-sm text-primary hover:underline mb-2"
                    >
                        <ArrowLeft size={14} />
                        Organizaciones
                    </Link>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <span className="text-2xl">{typeEmoji}</span>
                            <div>
                                <h1 className="text-lg font-bold leading-none">{organization.name}</h1>
                                <p className="text-xs text-gray-500">{organization.address}</p>
                            </div>
                        </div>
                        <button className="btn btn-outline btn-icon">
                            <Settings size={18} />
                        </button>
                    </div>
                </div>
            </header>

            {/* Tabs */}
            <div className="border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 sticky top-[72px] z-40">
                <div className="container">
                    <nav className="flex gap-4" aria-label="Tabs">
                        <button className="py-3 px-1 text-sm font-medium border-b-2 border-primary text-primary">
                            <Users size={14} className="inline mr-1" />
                            Afiliados
                        </button>
                        <Link
                            href={`/organizaciones/${id}/alertas`}
                            className="py-3 px-1 text-sm font-medium text-gray-500 hover:text-gray-700 border-b-2 border-transparent"
                        >
                            <Bell size={14} className="inline mr-1" />
                            Alertas ({alertConfigs.length})
                        </Link>
                    </nav>
                </div>
            </div>

            {/* Main Content */}
            <main className="container py-4">
                {/* Quick Actions */}
                <div className="flex gap-2 mb-4 overflow-x-auto pb-2">
                    <button className="btn btn-whatsapp whitespace-nowrap">
                        <MessageCircle size={16} />
                        Cobrar Todos
                    </button>
                    <button className="btn btn-outline whitespace-nowrap">
                        <Bell size={16} />
                        Enviar Recordatorios
                    </button>
                </div>

                {/* Resumen de Alertas Activas */}
                {alertConfigs.length > 0 && (
                    <section className="card p-4 mb-4 bg-blue-50 dark:bg-blue-900/20 border-blue-200">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <Bell className="text-blue-600" size={18} />
                                <span className="font-medium text-sm">
                                    {alertConfigs.filter(a => a.isActive).length} alertas activas
                                </span>
                            </div>
                            <Link
                                href={`/organizaciones/${id}/alertas`}
                                className="text-sm text-blue-600 hover:underline"
                            >
                                Configurar →
                            </Link>
                        </div>
                    </section>
                )}

                {/* Lista de Afiliados */}
                <h2 className="text-lg font-semibold mb-3">
                    Afiliados
                    <span className="text-sm font-normal text-gray-500 ml-2">
                        ({orgAffiliates.length})
                    </span>
                </h2>

                <section className="cards-list" aria-label="Lista de afiliados">
                    {orgAffiliates.length === 0 ? (
                        <div className="card p-8 text-center">
                            <Users className="mx-auto mb-2 text-gray-400" size={40} />
                            <p className="text-gray-500">No hay afiliados registrados</p>
                        </div>
                    ) : (
                        orgAffiliates.map((affiliate) => (
                            <AffiliateCard key={affiliate.id} affiliate={affiliate} />
                        ))
                    )}
                </section>
            </main>

            {/* Botón flotante */}
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
                    aria-label="Agregar afiliado"
                >
                    +
                </button>
            </div>

            <div className="h-24" aria-hidden="true" />
        </div>
    );
}

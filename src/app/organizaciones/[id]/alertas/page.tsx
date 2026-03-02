/**
 * Página de Configuración de Alertas
 * Gestión de recordatorios automáticos por WhatsApp y Email
 */

import { Bell, Plus, ArrowLeft, Clock, AlertTriangle, Calendar, Mail, MessageCircle, Send } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getOrganizationById } from '@/app/actions/organizations';
import { getAlertConfigs, getPendingAlerts, getAlertHistory } from '@/app/actions/alerts';
import { AlertConfigCard } from '@/components/AlertConfigCard';

interface PageProps {
    params: Promise<{ id: string }>;
}

export const dynamic = 'force-dynamic';

export default async function AlertasPage({ params }: PageProps) {
    const { id } = await params;

    const [organization, alertConfigs, pendingAlerts, history] = await Promise.all([
        getOrganizationById(id),
        getAlertConfigs(id),
        getPendingAlerts(id),
        getAlertHistory(id, 10),
    ]);

    if (!organization) {
        notFound();
    }

    // Agrupar configuraciones por trigger
    const beforeDue = alertConfigs.filter(c => c.trigger === 'DAYS_BEFORE_DUE');
    const onDue = alertConfigs.filter(c => c.trigger === 'ON_DUE_DATE');
    const afterDue = alertConfigs.filter(c => c.trigger === 'DAYS_AFTER_DUE');

    return (
        <div className="min-h-screen bg-background">
            {/* Header */}
            <header className="app-header">
                <div className="container py-0">
                    <Link
                        href={`/organizaciones/${id}`}
                        className="flex items-center gap-1 text-sm text-primary hover:underline mb-2"
                    >
                        <ArrowLeft size={14} />
                        {organization.name}
                    </Link>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <Bell className="text-primary" size={24} />
                            <div>
                                <h1 className="text-lg font-bold leading-none">Alertas Automáticas</h1>
                                <p className="text-xs text-gray-500">
                                    {alertConfigs.filter(c => c.isActive).length} activas de {alertConfigs.length}
                                </p>
                            </div>
                        </div>
                        <button className="btn btn-primary text-sm py-2">
                            <Plus size={16} />
                            Nueva
                        </button>
                    </div>
                </div>
            </header>

            <main className="container py-4">
                {/* Alertas Pendientes de Envío */}
                {pendingAlerts.length > 0 && (
                    <section className="card p-4 mb-4 border-amber-300 bg-amber-50 dark:bg-amber-900/20">
                        <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center gap-2">
                                <Send className="text-amber-600" size={18} />
                                <h2 className="font-semibold text-amber-800 dark:text-amber-200">
                                    {pendingAlerts.length} alertas pendientes
                                </h2>
                            </div>
                            <button className="btn btn-primary text-sm py-1 px-3">
                                Enviar Todas
                            </button>
                        </div>
                        <div className="space-y-2 max-h-48 overflow-y-auto">
                            {pendingAlerts.slice(0, 5).map((alert) => (
                                <div
                                    key={alert.id}
                                    className="flex items-center justify-between bg-white dark:bg-gray-800 rounded-lg p-2 text-sm"
                                >
                                    <div>
                                        <span className="font-medium">{alert.affiliateName}</span>
                                        <span className="text-gray-500 ml-2">({alert.unit})</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        {alert.channel === 'WHATSAPP' || alert.channel === 'BOTH' ? (
                                            <MessageCircle size={14} className="text-green-600" />
                                        ) : null}
                                        {alert.channel === 'EMAIL' || alert.channel === 'BOTH' ? (
                                            <Mail size={14} className="text-blue-600" />
                                        ) : null}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* Explicación del Sistema */}
                <section className="card p-4 mb-4 bg-blue-50 dark:bg-blue-900/20 border-blue-200">
                    <h2 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
                        ℹ️ ¿Cómo funcionan las alertas?
                    </h2>
                    <p className="text-sm text-blue-700 dark:text-blue-300">
                        Las alertas se envían automáticamente según tus configuraciones.
                        Puedes crear recordatorios <strong>antes</strong>, <strong>el día</strong> o <strong>después</strong> del vencimiento.
                        Cada afiliado puede optar por recibir notificaciones por WhatsApp, Email o ambos.
                    </p>
                </section>

                {/* Sección: Antes del Vencimiento */}
                <section className="mb-6">
                    <div className="flex items-center gap-2 mb-3">
                        <Clock className="text-blue-600" size={18} />
                        <h2 className="font-semibold">Antes del Vencimiento</h2>
                        <span className="text-xs text-gray-500">({beforeDue.length})</span>
                    </div>
                    {beforeDue.length === 0 ? (
                        <div className="card p-4 text-center text-gray-500 text-sm">
                            No hay alertas configuradas para antes del vencimiento
                        </div>
                    ) : (
                        <div className="cards-list">
                            {beforeDue.map((config) => (
                                <AlertConfigCard key={config.id} config={config} />
                            ))}
                        </div>
                    )}
                </section>

                {/* Sección: Día del Vencimiento */}
                <section className="mb-6">
                    <div className="flex items-center gap-2 mb-3">
                        <Calendar className="text-amber-600" size={18} />
                        <h2 className="font-semibold">Día del Vencimiento</h2>
                        <span className="text-xs text-gray-500">({onDue.length})</span>
                    </div>
                    {onDue.length === 0 ? (
                        <div className="card p-4 text-center text-gray-500 text-sm">
                            No hay alertas configuradas para el día del vencimiento
                        </div>
                    ) : (
                        <div className="cards-list">
                            {onDue.map((config) => (
                                <AlertConfigCard key={config.id} config={config} />
                            ))}
                        </div>
                    )}
                </section>

                {/* Sección: Después del Vencimiento (Mora) */}
                <section className="mb-6">
                    <div className="flex items-center gap-2 mb-3">
                        <AlertTriangle className="text-red-600" size={18} />
                        <h2 className="font-semibold">En Mora</h2>
                        <span className="text-xs text-gray-500">({afterDue.length})</span>
                    </div>
                    {afterDue.length === 0 ? (
                        <div className="card p-4 text-center text-gray-500 text-sm">
                            No hay alertas configuradas para facturas en mora
                        </div>
                    ) : (
                        <div className="cards-list">
                            {afterDue.map((config) => (
                                <AlertConfigCard key={config.id} config={config} />
                            ))}
                        </div>
                    )}
                </section>

                {/* Historial Reciente */}
                <section>
                    <h2 className="font-semibold mb-3">Historial de Envíos</h2>
                    {history.length === 0 ? (
                        <div className="card p-4 text-center text-gray-500 text-sm">
                            No hay alertas enviadas aún
                        </div>
                    ) : (
                        <div className="card overflow-hidden">
                            <table className="w-full text-sm">
                                <thead className="bg-gray-50 dark:bg-gray-800">
                                    <tr>
                                        <th className="text-left p-3 font-medium">Afiliado</th>
                                        <th className="text-left p-3 font-medium hidden sm:table-cell">Canal</th>
                                        <th className="text-left p-3 font-medium">Estado</th>
                                        <th className="text-left p-3 font-medium hidden sm:table-cell">Fecha</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                                    {history.map((log) => (
                                        <tr key={log.id}>
                                            <td className="p-3">
                                                <div className="font-medium">{log.affiliate.name}</div>
                                                <div className="text-xs text-gray-500">{log.affiliate.unit}</div>
                                            </td>
                                            <td className="p-3 hidden sm:table-cell">
                                                {log.channel === 'WHATSAPP' && <MessageCircle size={16} className="text-green-600" />}
                                                {log.channel === 'EMAIL' && <Mail size={16} className="text-blue-600" />}
                                                {log.channel === 'BOTH' && (
                                                    <div className="flex gap-1">
                                                        <MessageCircle size={16} className="text-green-600" />
                                                        <Mail size={16} className="text-blue-600" />
                                                    </div>
                                                )}
                                            </td>
                                            <td className="p-3">
                                                <span className={`badge ${log.status === 'SENT' ? 'badge-success' : 'badge-danger'}`}>
                                                    {log.status === 'SENT' ? 'Enviado' : 'Fallido'}
                                                </span>
                                            </td>
                                            <td className="p-3 text-gray-500 hidden sm:table-cell">
                                                {log.sentAt ? new Date(log.sentAt).toLocaleDateString('es-CO') : '-'}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </section>
            </main>

            <div className="h-8" aria-hidden="true" />
        </div>
    );
}

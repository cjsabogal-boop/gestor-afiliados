/**
 * Tarjeta de Afiliado - Componente Mobile-First
 * Muestra nombre, unidad, estado de deuda y botón de WhatsApp
 */
'use client';

import { MessageCircle, Phone, AlertCircle, Clock, CheckCircle } from 'lucide-react';
import type { AffiliateWithDebt } from '@/app/actions/dashboard';
import { generateWhatsAppLink } from '@/lib/utils';

interface AffiliateCardProps {
    affiliate: AffiliateWithDebt;
}

export function AffiliateCard({ affiliate }: AffiliateCardProps) {
    const { name, phone, unit, totalDebt, status, invoices } = affiliate;

    // Configuración visual por estado
    const statusConfig = {
        OVERDUE: {
            badge: 'En Mora',
            badgeClass: 'badge-danger',
            amountClass: 'danger',
            icon: AlertCircle,
        },
        PENDING: {
            badge: 'Pendiente',
            badgeClass: 'badge-warning',
            amountClass: 'warning',
            icon: Clock,
        },
        PAID: {
            badge: 'Al Día',
            badgeClass: 'badge-success',
            amountClass: 'success',
            icon: CheckCircle,
        },
    };

    const config = statusConfig[status];
    const StatusIcon = config.icon;

    // Formatear monto en pesos colombianos
    const formattedAmount = totalDebt.toLocaleString('es-CO', {
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    });

    // Generar enlace de WhatsApp
    const whatsappUrl = generateWhatsAppLink(phone, name, totalDebt);

    return (
        <article className="card affiliate-card animate-fadeIn">
            {/* Header: Nombre + Badge de estado */}
            <div className="affiliate-header">
                <div className="affiliate-info">
                    <h3>{name}</h3>
                    <p>{unit}</p>
                </div>
                <span className={`badge ${config.badgeClass}`}>
                    <StatusIcon size={12} />
                    {config.badge}
                </span>
            </div>

            {/* Monto de deuda */}
            {status !== 'PAID' && (
                <div className="mb-3">
                    <p className={`affiliate-amount money-cop ${config.amountClass}`}>
                        {formattedAmount}
                    </p>
                    {invoices.length > 0 && (
                        <p className="text-xs text-gray-500 mt-1">
                            {invoices.length} factura{invoices.length > 1 ? 's' : ''} pendiente{invoices.length > 1 ? 's' : ''}
                        </p>
                    )}
                </div>
            )}

            {/* Acciones */}
            <div className="affiliate-actions">
                {status !== 'PAID' ? (
                    <>
                        <a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-whatsapp"
                            aria-label={`Cobrar a ${name} por WhatsApp`}
                        >
                            <MessageCircle size={18} />
                            Cobrar por WhatsApp
                        </a>
                        <a
                            href={`tel:${phone}`}
                            className="btn btn-outline btn-icon"
                            aria-label={`Llamar a ${name}`}
                        >
                            <Phone size={18} />
                        </a>
                    </>
                ) : (
                    <div className="flex items-center justify-center gap-2 text-green-600 py-2 w-full">
                        <CheckCircle size={18} />
                        <span className="font-medium">Sin deudas pendientes</span>
                    </div>
                )}
            </div>
        </article>
    );
}

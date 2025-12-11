/**
 * Tarjeta de Organización - Vista del Admin SaaS
 */
'use client';

import { Building2, Users, AlertTriangle, Clock, MapPin, Phone, Mail } from 'lucide-react';
import Link from 'next/link';
import type { OrganizationSummary } from '@/app/actions/organizations';
import { formatCOP } from '@/lib/utils';

interface OrganizationCardProps {
    organization: OrganizationSummary;
}

const typeConfig = {
    EDIFICIO: { icon: '🏢', label: 'Edificio', color: 'text-blue-600' },
    CLUB: { icon: '⛳', label: 'Club', color: 'text-green-600' },
    FONDO: { icon: '💼', label: 'Fondo', color: 'text-purple-600' },
    OTRO: { icon: '🏛️', label: 'Otro', color: 'text-gray-600' },
};

export function OrganizationCard({ organization }: OrganizationCardProps) {
    const config = typeConfig[organization.type];
    const hasDebt = organization.totalDebt > 0;

    return (
        <Link
            href={`/organizaciones/${organization.id}`}
            className="card p-4 block hover:border-blue-300 transition-colors"
        >
            {/* Header */}
            <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                    <span className="text-2xl">{config.icon}</span>
                    <div>
                        <h3 className="font-semibold text-base">{organization.name}</h3>
                        <span className={`text-xs font-medium ${config.color}`}>
                            {config.label}
                        </span>
                    </div>
                </div>
                <div className="flex items-center gap-1 text-gray-500">
                    <Users size={14} />
                    <span className="text-sm font-medium">{organization.affiliatesCount}</span>
                </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-2 mb-3">
                <div className="text-center p-2 bg-red-50 dark:bg-red-900/20 rounded-lg">
                    <div className="flex items-center justify-center gap-1 text-red-600">
                        <AlertTriangle size={14} />
                        <span className="font-bold">{organization.overdueCount}</span>
                    </div>
                    <p className="text-xs text-gray-500">Vencidas</p>
                </div>
                <div className="text-center p-2 bg-amber-50 dark:bg-amber-900/20 rounded-lg">
                    <div className="flex items-center justify-center gap-1 text-amber-600">
                        <Clock size={14} />
                        <span className="font-bold">{organization.pendingCount}</span>
                    </div>
                    <p className="text-xs text-gray-500">Pendientes</p>
                </div>
                <div className="text-center p-2 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <span className={`font-bold text-sm ${hasDebt ? 'text-red-600' : 'text-green-600'}`}>
                        {formatCOP(organization.totalDebt)}
                    </span>
                    <p className="text-xs text-gray-500">Por cobrar</p>
                </div>
            </div>

            {/* Info de contacto */}
            <div className="flex flex-wrap gap-3 text-xs text-gray-500">
                {organization.address && (
                    <div className="flex items-center gap-1">
                        <MapPin size={12} />
                        <span className="truncate max-w-[150px]">{organization.address}</span>
                    </div>
                )}
                {organization.phone && (
                    <div className="flex items-center gap-1">
                        <Phone size={12} />
                        <span>{organization.phone}</span>
                    </div>
                )}
            </div>
        </Link>
    );
}

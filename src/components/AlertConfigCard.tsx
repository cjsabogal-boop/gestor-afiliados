/**
 * Tarjeta de Configuración de Alerta
 */
'use client';

import { Bell, Mail, MessageCircle, Clock, AlertTriangle, Calendar, ToggleLeft, ToggleRight, Trash2 } from 'lucide-react';
import { AlertChannel, AlertTrigger } from '@prisma/client';
import type { AlertConfigWithStats } from '@/app/actions/alerts';
import { toggleAlertConfig } from '@/app/actions/alerts';
import { useState, useTransition } from 'react';

interface AlertConfigCardProps {
    config: AlertConfigWithStats;
    onDelete?: (id: string) => void;
}

const triggerLabels: Record<AlertTrigger, { label: string; icon: typeof Clock; color: string }> = {
    DAYS_BEFORE_DUE: { label: 'Antes del vencimiento', icon: Clock, color: 'text-blue-600' },
    ON_DUE_DATE: { label: 'Día del vencimiento', icon: Calendar, color: 'text-amber-600' },
    DAYS_AFTER_DUE: { label: 'Después del vencimiento', icon: AlertTriangle, color: 'text-red-600' },
};

const channelIcons: Record<AlertChannel, { icon: typeof Mail; label: string }> = {
    EMAIL: { icon: Mail, label: 'Email' },
    WHATSAPP: { icon: MessageCircle, label: 'WhatsApp' },
    BOTH: { icon: Bell, label: 'Email + WhatsApp' },
};

export function AlertConfigCard({ config, onDelete }: AlertConfigCardProps) {
    const [isActive, setIsActive] = useState(config.isActive);
    const [isPending, startTransition] = useTransition();

    const triggerConfig = triggerLabels[config.trigger];
    const TriggerIcon = triggerConfig.icon;
    const channelConfig = channelIcons[config.channel];
    const ChannelIcon = channelConfig.icon;

    const handleToggle = () => {
        const newState = !isActive;
        setIsActive(newState);

        startTransition(async () => {
            const result = await toggleAlertConfig(config.id, newState);
            if (!result.success) {
                setIsActive(!newState); // Revertir si falla
            }
        });
    };

    // Calcular texto descriptivo del trigger
    const getTriggerDescription = () => {
        if (config.trigger === 'ON_DUE_DATE') {
            return 'El día del vencimiento';
        }
        const days = config.daysOffset;
        const daysText = days === 1 ? '1 día' : `${days} días`;
        if (config.trigger === 'DAYS_BEFORE_DUE') {
            return `${daysText} antes del vencimiento`;
        }
        return `${daysText} después del vencimiento`;
    };

    return (
        <article className={`card p-4 ${!isActive ? 'opacity-60' : ''}`}>
            {/* Header */}
            <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                    <div className={`p-2 rounded-lg ${config.trigger === 'DAYS_BEFORE_DUE' ? 'bg-blue-100 dark:bg-blue-900/30' :
                            config.trigger === 'ON_DUE_DATE' ? 'bg-amber-100 dark:bg-amber-900/30' :
                                'bg-red-100 dark:bg-red-900/30'
                        }`}>
                        <TriggerIcon size={18} className={triggerConfig.color} />
                    </div>
                    <div>
                        <h3 className="font-semibold text-sm">{config.name}</h3>
                        <p className="text-xs text-gray-500">{getTriggerDescription()}</p>
                    </div>
                </div>
                <button
                    onClick={handleToggle}
                    disabled={isPending}
                    className="text-gray-400 hover:text-primary transition-colors"
                    aria-label={isActive ? 'Desactivar alerta' : 'Activar alerta'}
                >
                    {isActive ? (
                        <ToggleRight size={28} className="text-green-500" />
                    ) : (
                        <ToggleLeft size={28} />
                    )}
                </button>
            </div>

            {/* Canal y hora */}
            <div className="flex items-center gap-4 mb-3 text-sm">
                <div className="flex items-center gap-1 text-gray-600">
                    <ChannelIcon size={14} />
                    <span>{channelConfig.label}</span>
                </div>
                <div className="flex items-center gap-1 text-gray-500">
                    <Clock size={14} />
                    <span>{config.sendHour}:00</span>
                </div>
            </div>

            {/* Mensaje preview */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3 mb-3">
                <p className="text-xs text-gray-500 mb-1">Vista previa del mensaje:</p>
                <p className="text-sm text-gray-700 dark:text-gray-300 italic">
                    "{config.messageTemplate.slice(0, 100)}..."
                </p>
            </div>

            {/* Stats */}
            <div className="flex items-center justify-between text-xs text-gray-500">
                <span>
                    {config.sentCount} envíos
                    {config.lastSentAt && (
                        <span className="ml-1">
                            · Último: {new Date(config.lastSentAt).toLocaleDateString('es-CO')}
                        </span>
                    )}
                </span>
                {onDelete && (
                    <button
                        onClick={() => onDelete(config.id)}
                        className="text-red-500 hover:text-red-700 p-1"
                        aria-label="Eliminar alerta"
                    >
                        <Trash2 size={14} />
                    </button>
                )}
            </div>
        </article>
    );
}

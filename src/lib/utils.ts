/**
 * Utilidades para formateo y generación de enlaces
 */

/**
 * Genera el enlace de WhatsApp pre-llenado para cobrar
 */
export function generateWhatsAppLink(
    phone: string,
    name: string,
    amount: number
): string {
    const message = encodeURIComponent(
        `Hola ${name.split(' ')[0]}, te recordamos que tienes un saldo pendiente de $${amount.toLocaleString('es-CO')} COP. ¿Cómo te gustaría realizar el pago?`
    );

    // Limpiar el número de teléfono (solo dígitos)
    const cleanPhone = phone.replace(/\D/g, '');

    return `https://wa.me/${cleanPhone}?text=${message}`;
}

/**
 * Formatea un número como moneda colombiana
 */
export function formatCOP(amount: number): string {
    return amount.toLocaleString('es-CO', {
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    });
}

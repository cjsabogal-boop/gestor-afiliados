/**
 * Instancia singleton del cliente Prisma para Prisma 7
 * Usa el driver adapter de PostgreSQL
 * Evita múltiples conexiones en desarrollo con hot-reload
 */
import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '@prisma/client';

const globalForPrisma = globalThis as unknown as {
    prisma: PrismaClient | undefined;
    pool: Pool | undefined;
};

// Crear pool de conexiones si no existe
const pool = globalForPrisma.pool ?? new Pool({
    connectionString: process.env.DATABASE_URL
});

// Crear adapter de Prisma para PostgreSQL
const adapter = new PrismaPg(pool);

// Crear cliente de Prisma con el adapter
export const prisma =
    globalForPrisma.prisma ??
    new PrismaClient({
        adapter,
        log: process.env.NODE_ENV === 'development' ? ['error', 'warn'] : ['error'],
    });

if (process.env.NODE_ENV !== 'production') {
    globalForPrisma.prisma = prisma;
    globalForPrisma.pool = pool;
}

export default prisma;

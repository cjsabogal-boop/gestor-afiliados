import { useState } from "react";

const SECTIONS = [
  { id: "overview", label: "📋 Overview", icon: "📋" },
  { id: "architecture", label: "🏗️ Arquitectura", icon: "🏗️" },
  { id: "database", label: "🗄️ Base de Datos", icon: "🗄️" },
  { id: "backend", label: "⚙️ Backend", icon: "⚙️" },
  { id: "frontend", label: "🖥️ Frontend", icon: "🖥️" },
  { id: "mobile", label: "📱 Mobile", icon: "📱" },
  { id: "integrations", label: "🔌 Integraciones", icon: "🔌" },
  { id: "security", label: "🔐 Seguridad", icon: "🔐" },
  { id: "devops", label: "🚀 DevOps", icon: "🚀" },
  { id: "fullprompt", label: "📄 Prompt Completo", icon: "📄" },
];

const CONTENT = {
  overview: {
    title: "Vision General del Producto",
    subtitle: "AfiliadosOS — SaaS Multi-tenant para Gestión de Comunidades en Colombia",
    blocks: [
      {
        label: "FOCO PRINCIPAL (VENTAJA COMPETITIVA)",
        color: "#FF6B35",
        content: `1. EXPERIENCIA DEL AFILIADO/RESIDENTE
   - App móvil simple e intuitiva
   - Carné QR digital para accesos
   - Participación en asambleas en vivo desde la app
   - Reservas de zonas comunes y pago de cuota (admin/expensas)

2. CONTROL DEL ADMINISTRADOR
   - Dashboard central para clubes, edificios y fondos
   - Gestión de miembros y núcleo familiar
   - Cobros automáticos masivos (Wompi, PSE, Nequi)
   - Realización de asambleas (quórum automático + votaciones live)

3. COMUNIDAD Y COMUNICACIÓN
   - Tablero de anuncios digitales y foro interno moderado
   - Comunicados segmentados (Email, SMS, Push, WhatsApp)`
      },
      {
        label: "PRODUCTO",
        color: "#00E5A0",
        content: `NOMBRE: AfiliadosOS (Comunidades)
TAGLINE: El Sistema Operativo para Comunidades (Edificios, Clubes, Asociaciones)
TIPO: SaaS B2B Multi-tenant, White-label, Mobile-first
MERCADO PRIMARIO: Colombia (Administraciones de Propiedad Horizontal, Clubes Sociales, Fondos)

LO QUE NO ES: 
  - NO es un motor de crédito complejo (solo cuotas).
  - NO es un sistema de nómina empresarial.
  - NO es contabilidad avanzada (es control de recaudo y morosidad).

MÉTRICAS DE ÉXITO:
  - Reducción de morosidad en un 40% en los primeros 3 meses.
  - Aumento de participación en asambleas del 20% al 85% gracias al quórum virtual.
  - Tiempo de gestión de reservas reducido a 0 horas (100% self-service).`
      }
    ]
  },
  architecture: {
    title: "Arquitectura del Sistema",
    subtitle: "Diseño técnico completo — Microservicios + Multi-tenancy",
    blocks: [
      {
        label: "ARQUITECTURA GENERAL",
        color: "#00E5A0",
        content: `PATRÓN ARQUITECTÓNICO: Microservicios con BFF (Backend for Frontend)
MULTI-TENANCY: Shared Database + Row-Level Security (PostgreSQL RLS)
COMUNICACIÓN INTERNA: Event-driven con RabbitMQ para procesos async
API EXTERNA: REST + GraphQL (consultas complejas de BI)

CAPAS DEL SISTEMA:
┌─────────────────────────────────────────────────────────┐
│  CLIENTES                                                │
│  Web App (React)  │  Mobile App (React Native)          │
│  Admin Panel      │  Portal Afiliado                    │
├─────────────────────────────────────────────────────────┤
│  CDN + WAF  (Cloudflare)                                │
├─────────────────────────────────────────────────────────┤
│  API GATEWAY  (Kong / AWS API Gateway)                  │
│  Auth Middleware │ Rate Limiting │ Logging              │
├───────────┬───────────┬───────────┬────────────────────┤
│  BFF Web  │ BFF Mobile│ BFF Admin │  Webhook Service   │
├───────────┴───────────┴───────────┴────────────────────┤
│  MICROSERVICIOS CORE (INCLUYENDO KILLER MODULES)        │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐  │
│  │ Afiliados│ │Financiero│ │ I.A. Gen │ │ B2B/RRHH │  │
│  └──────────┘ └──────────┘ └──────────┘ └──────────┘  │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐  │
│  │Blockchain│ │OpenFinanc│ │ Eventos  │ │Comunic.  │  │
│  └──────────┘ └──────────┘ └──────────┘ └──────────┘  │
├─────────────────────────────────────────────────────────┤
│  MESSAGE BROKER  (RabbitMQ)                            │
├─────────────────────────────────────────────────────────┤
│  CAPA DE DATOS                                          │
│  PostgreSQL (principal) │ Redis (cache/sessions)        │
│  ClickHouse (analytics) │ S3/MinIO (files)              │
│  ElasticSearch (search) │ TimescaleDB (métricas)        │
└─────────────────────────────────────────────────────────┘`
      },
      {
        label: "ESTRUCTURA DE REPOSITORIOS (MONOREPO)",
        color: "#F59E0B",
        content: `TOOLING MONOREPO: Turborepo + pnpm workspaces

afiliadosos/
├── apps/
│   ├── web/                    # React 18 + Vite (Panel admin org)
│   ├── portal/                 # Next.js 14 (Portal público afiliado)
│   ├── superadmin/             # React 18 (Panel SaaS superadmin)
│   ├── mobile/                 # React Native + Expo SDK 51
│   └── api-gateway/            # Node.js + Express (enrutador)
├── services/
│   ├── afiliados-service/      # NestJS — Core afiliados
│   ├── financiero-service/     # NestJS — Pagos y contabilidad
│   ├── beneficios-service/     # NestJS — Marketplace y puntos
│   ├── comunicacion-service/   # NestJS — Notificaciones omnicanal
│   ├── eventos-service/        # NestJS — Eventos y asambleas
│   ├── bi-service/             # NestJS + Python — Analytics y Modelos Preditivos
│   ├── ai-agent-service/       # FastAPI + LangChain — Agente LLM
│   ├── b2b-portal-service/     # NestJS — RRHH y Conciliación Nómina
│   ├── openfinance-service/    # NestJS — Integración Belvo/Prometeo
│   ├── tenant-service/         # NestJS — Multi-tenancy y billing
│   └── compliance-service/     # NestJS — Habeas Data, SARLAFT
├── packages/
│   ├── ui/                     # Design system compartido
│   ├── types/                  # TypeScript types globales
│   ├── utils/                  # Helpers compartidos
│   ├── config/                 # ESLint, TSConfig, etc.
│   └── colombia-validators/    # Cédula, NIT, SMMLV helpers
├── infra/
│   ├── docker/                 # Dockerfiles por servicio
│   ├── k8s/                    # Manifests Kubernetes
│   ├── terraform/              # IaC AWS
│   └── scripts/                # Seed, migrations, etc.
├── docs/
│   ├── api/                    # OpenAPI specs
│   ├── architecture/           # Diagramas y decisiones (ADR)
│   └── onboarding/             # Guías para developers
├── turbo.json
├── pnpm-workspace.yaml
└── docker-compose.dev.yml`
      }
    ]
  },
  database: {
    title: "Esquema de Base de Datos",
    subtitle: "PostgreSQL con Row-Level Security para Multi-tenancy",
    blocks: [
      {
        label: "TENANTS, AFILIADOS Y CUOTAS",
        color: "#00E5A0",
        content: `-- ============================================
-- SCHEMA: public (compartido entre tenants)
-- ============================================

CREATE TABLE tenants (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug            VARCHAR(50) UNIQUE NOT NULL,
  name            VARCHAR(200) NOT NULL,
  type            tenant_type, -- EDIFICIO|CLUB|FONDO|SINDICATO|ASOCIACION
  nit             VARCHAR(20) UNIQUE,
  settings        JSONB DEFAULT '{}',
  created_at      TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE afiliados (
  id                UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  tenant_id         UUID NOT NULL REFERENCES tenants(id),
  user_id           UUID REFERENCES users(id),
  numero_afiliado   VARCHAR(50), -- ej: Apto 301, Carnet 293
  cedula            VARCHAR(12) NOT NULL,
  nombres           VARCHAR(200) NOT NULL,
  apellidos         VARCHAR(200) NOT NULL,
  email             VARCHAR(200),
  celular           VARCHAR(20),
  estado            VARCHAR(50) DEFAULT 'ACTIVO', -- ACTIVO|INACTIVO|MORA
  tipo_miembro      VARCHAR(50), -- PROPIETARIO|RESIDENTE|TITULAR|BENEFICIARIO
  carnet_qr_token   TEXT UNIQUE,
  created_at        TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(tenant_id, cedula)
);

CREATE TABLE beneficiarios (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  afiliado_id     UUID NOT NULL REFERENCES afiliados(id) ON DELETE CASCADE,
  tenant_id       UUID NOT NULL,
  nombres         VARCHAR(200) NOT NULL,
  parentesco      VARCHAR(50),
  edad            INT,
  is_active       BOOLEAN DEFAULT TRUE
);

CREATE TABLE planes_membresia (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  tenant_id       UUID NOT NULL,
  nombre          VARCHAR(100) NOT NULL,  -- ej: Cuota Administración Tipo A, Membresía Familiar
  valor           DECIMAL(15,2) NOT NULL, -- Valor fijo COP
  periodicidad    VARCHAR(20) DEFAULT 'MENSUAL'
);

CREATE TABLE cuotas (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  tenant_id       UUID NOT NULL,
  afiliado_id     UUID NOT NULL REFERENCES afiliados(id),
  plan_id         UUID REFERENCES planes_membresia(id),
  periodo         VARCHAR(7) NOT NULL, -- 2026-03
  valor           DECIMAL(15,2) NOT NULL,
  fecha_vencimiento DATE NOT NULL,
  estado          VARCHAR(20) DEFAULT 'PENDIENTE', -- PENDIENTE|PAGADA|VENCIDA|EXONERADA
  transaction_id  TEXT,
  created_at      TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(tenant_id, afiliado_id, periodo)
);`
      },
      {
        label: "ASAMBLEAS Y VOTACIONES (DIFERENCIADOR)",
        color: "#F59E0B",
        content: `-- ============================================
-- ASAMBLEAS Y VOTACIONES LIVE
-- ============================================

CREATE TABLE asambleas (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  tenant_id       UUID NOT NULL,
  titulo          VARCHAR(300) NOT NULL,
  fecha           TIMESTAMPTZ NOT NULL,
  modalidad       VARCHAR(20) DEFAULT 'PRESENCIAL', -- VIRTUAL|HIBRIDA
  link_streaming  TEXT,
  quorum_requerido DECIMAL(5,2), -- ej: 50.01
  estado          VARCHAR(20) DEFAULT 'PROGRAMADA', -- PROGRAMADA|EN_CURSO|CERRADA
  created_at      TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE asamblea_asistencia (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  asamblea_id     UUID NOT NULL REFERENCES asambleas(id),
  afiliado_id     UUID NOT NULL REFERENCES afiliados(id),
  tenant_id       UUID NOT NULL,
  coeficiente     DECIMAL(5,2) DEFAULT 1.00, -- Peso del voto (P.H.) o 1 (Club)
  check_in_at     TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(asamblea_id, afiliado_id)
);

CREATE TABLE votaciones (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  asamblea_id     UUID NOT NULL REFERENCES asambleas(id),
  tenant_id       UUID NOT NULL,
  pregunta        TEXT NOT NULL,
  opciones        JSONB NOT NULL, -- [{id:1, texto:"Aprobar"}, {id:2, texto:"Rechazar"}]
  tipo            VARCHAR(20) DEFAULT 'ABIERTA', -- ABIERTA|SECRETA
  estado          VARCHAR(20) DEFAULT 'ABIERTA', -- ABIERTA|CERRADA
  abre_at         TIMESTAMPTZ DEFAULT NOW(),
  cierra_at       TIMESTAMPTZ
);

CREATE TABLE votos (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  votacion_id     UUID NOT NULL REFERENCES votaciones(id),
  afiliado_id     UUID NOT NULL REFERENCES afiliados(id),
  opcion_id       TEXT NOT NULL,
  peso_voto       DECIMAL(5,2) DEFAULT 1.00,
  hash_voto       TEXT NOT NULL, -- HMAC(opcion_id + afiliado_id + secret) para integridad
  created_at      TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(votacion_id, afiliado_id)
);`
      },
      {
        label: "RESERVAS, COMUNIDAD Y AUDITORÍA",
        color: "#14B8A6",
        content: `-- ============================================
-- RESERVAS Y EVENTOS
-- ============================================
CREATE TABLE espacios (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  tenant_id       UUID NOT NULL,
  nombre          VARCHAR(200) NOT NULL, -- Salón Comunal, Cancha de Tenis, Piscina
  capacidad       INT,
  costo_reserva   DECIMAL(15,2) DEFAULT 0,
  reglas          TEXT,
  foto_url        TEXT,
  is_active       BOOLEAN DEFAULT TRUE
);

CREATE TABLE reservas (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  espacio_id      UUID NOT NULL REFERENCES espacios(id),
  afiliado_id     UUID NOT NULL REFERENCES afiliados(id),
  tenant_id       UUID NOT NULL,
  fecha_inicio    TIMESTAMPTZ NOT NULL,
  fecha_fin       TIMESTAMPTZ NOT NULL,
  estado          VARCHAR(20) DEFAULT 'CONFIRMADA', -- PENDIENTE|CONFIRMADA|CANCELADA
  notas           TEXT
);

-- ============================================
-- COMUNIDAD Y FOROS
-- ============================================
CREATE TABLE tablero_anuncios (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  tenant_id       UUID NOT NULL,
  titulo          VARCHAR(300) NOT NULL,
  contenido       TEXT NOT NULL,
  fijado          BOOLEAN DEFAULT FALSE,
  creado_por      UUID REFERENCES users(id),
  created_at      TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- AUDITORÍA INMUTABLE
-- ============================================
CREATE TABLE audit_logs (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  tenant_id       UUID NOT NULL,
  user_id         UUID,
  accion          VARCHAR(100) NOT NULL, -- CREATE|UPDATE|DELETE
  entidad         VARCHAR(100) NOT NULL, -- afiliados|cuotas|etc
  entidad_id      UUID,
  datos_previos   JSONB,
  datos_nuevos    JSONB,
  ip              INET,
  created_at      TIMESTAMPTZ DEFAULT NOW()
);`
      }
    ]
  },
  backend: {
    title: "Backend — NestJS Microservicios",
    subtitle: "Estructura, patrones y reglas de implementación",
    blocks: [
      {
        label: "ESTRUCTURA BASE DE CADA MICROSERVICIO",
        color: "#00E5A0",
        content: `STACK POR SERVICIO:
  Runtime:    Node.js 20 LTS + TypeScript 5.4
  Framework:  NestJS 10 (arquitectura modular DDD)
  ORM:        Prisma 5 (migraciones + type-safe queries)
  Validación: class-validator + class-transformer
  Tests:      Jest + Supertest (cobertura mínima 80%)
  Docs:       @nestjs/swagger (OpenAPI 3.1 auto-generado)

ESTRUCTURA INTERNA DE CADA SERVICIO:
src/
├── main.ts                    # Bootstrap + Swagger
├── app.module.ts              # Módulo raíz
├── common/
│   ├── decorators/            # @CurrentTenant, @Public, etc.
│   ├── filters/               # GlobalExceptionFilter
│   ├── guards/                # AuthGuard, RolesGuard, TenantGuard
│   ├── interceptors/          # LoggingInterceptor, TransformInterceptor
│   ├── pipes/                 # ValidationPipe global
│   └── middleware/            # TenantContextMiddleware
├── config/
│   ├── database.config.ts     # Prisma config con tenant_id en RLS
│   ├── auth.config.ts         # JWT config
│   └── env.validation.ts      # Joi schema validación env vars
├── modules/
│   ├── [feature]/
│   │   ├── dto/               # CreateXDto, UpdateXDto, ResponseXDto
│   │   ├── entities/          # Prisma models + domain entities
│   │   ├── [feature].controller.ts
│   │   ├── [feature].service.ts
│   │   ├── [feature].repository.ts
│   │   └── [feature].module.ts
└── prisma/
    ├── schema.prisma
    └── migrations/`
      },
      {
        label: "REGLAS DE IMPLEMENTACIÓN BACKEND",
        color: "#F59E0B",
        content: `TENANT CONTEXT (CRÍTICO):
  - TODOS los endpoints reciben tenant_id desde el JWT
  - Middleware TenantContextMiddleware extrae tenant_id y lo setea en
    AsyncLocalStorage para que Prisma ejecute SET app.tenant_id = $1
  - NUNCA pasar tenant_id como parámetro manual — siempre desde contexto
  - Interceptor GlobalTenantInterceptor verifica que respuesta solo tenga
    datos del tenant correcto (doble verificación)

AUTENTICACIÓN:
  - JWT access token (15 min) + refresh token (30 días) en httpOnly cookie
  - Roles: SUPERADMIN > ADMIN_ORG > TESORERO > SECRETARIO > AFILIADO
  - Guard @Roles() en cada controller, @Public() para rutas abiertas
  - 2FA opcional con TOTP (Google Authenticator compatible)
  - Rate limiting: 100 req/min por IP, 1000 req/min por tenant

RESPUESTAS API (FORMATO ESTÁNDAR):
  {
    "success": true,
    "data": { ... },
    "meta": {
      "page": 1, "limit": 20, "total": 450,
      "timestamp": "2026-03-15T10:00:00Z"
    }
  }

  ERRORES:
  {
    "success": false,
    "error": {
      "code": "AFILIADO_NOT_FOUND",
      "message": "El afiliado con cédula 12345678 no existe",
      "details": [ ... ]  // validation errors array
    }
  }

PAGINACIÓN:
  - Todos los listados usan cursor-based pagination para performance
  - Parámetros: ?page=1&limit=20&sortBy=created_at&order=desc
  - Máximo limit=100 por request

EVENTOS DE DOMINIO (RabbitMQ):
  Cada servicio emite eventos al bus. Naming: [servicio].[entidad].[accion]
  Ejemplos:
    afiliados.afiliado.creado
    financiero.cuota.pagada
    financiero.cuota.vencida
    comunicacion.email.enviado
    eventos.asamblea.quorum_alcanzado`
      },
      {
        label: "ENDPOINTS PRINCIPALES (MONOLITO NESTJS)

AUTH Y USUARIOS (/auth /users)
  POST   /auth/login              # Access 15m, Refresh 30d
  POST   /auth/refresh            # Refresh Token rotate
  POST   /users/2fa/verify        # Code TOTP o PIN

AFILIADOS Y TENANTS (/afiliados /tenants)
  GET    /afiliados               # Paginación + Filtros Full
  POST   /afiliados               # Admins agregan miembro
  POST   /afiliados/import_csv    # Cargar Excel de copropietarios
  GET    /afiliados/:id/carnet    # QR 24h firmado HMAC

CUOTAS Y COBROS (/cuotas /financiero)
  GET    /cuotas                  # Listar pendientes
  POST   /cuotas/generar_mes      # Job del dia 1 (Cron)
  POST   /cuotas/cobro_masivo     # Enviar lote a Wompi (Async)

ASAMBLEAS Y VOTAR (/asambleas /votar)
  GET    /asambleas
  POST   /asambleas
  POST   /asambleas/:id/checkin   # Lector QR en puerta/webcam
  GET    /asambleas/:id/quorum    # WebSocket live

  POST   /votaciones/abrir        # Activa la tarjeta en móviles
  POST   /votaciones/:id/votar    # Afiliado vota (PIN o Biometría)
  GET    /votaciones/:id/results  # Tabla de quesos instantánea

ESPACIOS Y RESERVAS (/reservas)
  GET    /espacios                # Catálogo de salones, bbqs
  POST   /espacios/:id/reservar   # Afiliado pide fecha
  PATCH  /reservas/:id/aprobar    # Admin concede espacio

COMUNIDAD Y FORO (/comunidad /anuncios)
  GET    /anuncios                # Cartelera digital
  POST   /anuncios
  POST   /foro_posts/:id/comment  # Afiliado responde discusion

TENANT (solo ADMIN_ORG):
  GET    /tenant/config             # configuración de la org
  PATCH  /tenant/config             # actualizar config
  GET    /tenant/billing            # info de facturación
  GET    /tenant/stats              # métricas de uso

SUPERADMIN (solo SUPERADMIN):
  GET    /admin/tenants
  POST   /admin/tenants
  PATCH  /admin/tenants/:id/plan
  PATCH  /admin/tenants/:id/status
  GET    /admin/mrr                 # revenue metrics`
      }
    ]
  },
  frontend: {
    title: "Frontend Web — React 18 + TypeScript",
    subtitle: "Panel de administración para organizaciones y portal de afiliados",
    blocks: [
      {
        label: "STACK Y CONFIGURACIÓN",
        color: "#00E5A0",
        content: `TECNOLOGÍAS:
  Framework:    React 18 + TypeScript 5.4
  Build:        Vite 5
  Routing:      TanStack Router (type-safe, file-based)
  Estado:       Zustand (global) + TanStack Query v5 (server state)
  Forms:        React Hook Form + Zod (validación)
  UI Base:      shadcn/ui (Radix primitivos + Tailwind CSS 3.4)
  Tablas:       TanStack Table v8
  Gráficos:     Recharts + Nivo (para mapas)
  Mapas:        React-Leaflet + Mapbox Colombia tiles
  Fechas:       date-fns con locale es-CO
  Animaciones:  Framer Motion
  PDF client:   @react-pdf/renderer (carnés y reportes)
  Real-time:    Socket.io-client

DESIGN SYSTEM (packages/ui):
  Paleta base:
    --color-bg:         #060B14   (fondo oscuro profundo)
    --color-surface:    #0D1520   (tarjetas, sidebars)
    --color-border:     #1A2535   (bordes sutiles)
    --color-text:       #E8EDF5   (texto principal)
    --color-muted:      #8896A5   (texto secundario)
    --color-primary:    #00E5A0   (verde principal — acción)
    --color-secondary:  #A855F7   (violeta — destacado)
    --color-warning:    #F59E0B   (amarillo — alertas)
    --color-danger:     #EF4444   (rojo — errores/mora)
    --color-info:       #06B6D4   (cyan — información)

  Tipografía:
    --font-display: 'Syne', sans-serif      (headings, 600-800)
    --font-body:    'IBM Plex Sans', sans-serif (body, 400-500)
    --font-mono:    'IBM Plex Mono', monospace  (código, números)

  Importar en index.html:
    @import url('https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=IBM+Plex+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap');`
      },
      {
        label: "ESTRUCTURA DE RUTAS Y VISTAS",
        color: "#A855F7",
        content: `RUTAS (TanStack Router — file-based):

apps/web/src/routes/
├── __root.tsx                   # Layout raíz + auth check
├── login.tsx                    # /login
├── _auth/                       # Layout autenticado (sidebar + header)
│   ├── dashboard.tsx            # /dashboard — KPIs principales
│   ├── afiliados/
│   │   ├── index.tsx            # /afiliados — tabla + filtros
│   │   ├── nuevo.tsx            # /afiliados/nuevo
│   │   └── $id/                 # /afiliados/:id — perfil 360°
│   ├── financiero/
│   │   ├── index.tsx            # /financiero — cobros y mora
│   │   └── integraciones.tsx    # conf Wompi/PSE
│   ├── comunidad/
│   │   ├── anuncios.tsx         # /comunidad/anuncios
│   │   └── foro.tsx             # moderación de posts
│   ├── asambleas/
│   │   ├── index.tsx            # próximas y pasadas
│   │   └── $id/
│   │       ├── live.tsx         # /asambleas/:id/live (Panel WebSocket)
│   │       ├── votaciones.tsx   # gestionar votaciones activas
│   │       └── acta.tsx         # exportar PDF
│   ├── reservas/
│   │   ├── espacios.tsx         # configurar salones, piscinas
│   │   └── calendario.tsx       # aprobar/rechazar
│   ├── comunicaciones/
│   │   ├── envios.tsx           # historial push/email/sms
│   │   └── nuevo.tsx            # editor segmentado
│   └── configuracion/
│       ├── organizacion.tsx     # logo, colores (white-label)
│       └── miembros.tsx         # invitar admins

COMPONENTES CLAVE:
  AfiliadoCard         # tarjeta resumen de afiliado
  CarnetVirtual        # carné digital animado con QR
  KPIWidget            # widget de métrica con tendencia
  MoraTable            # tabla de mora con acciones bulk
  CuotaTimeline        # historial de pagos visual
  VotacionLive         # resultados en tiempo real WebSocket
  MapaAfiliados        # mapa calor geográfico Colombia
  NotificacionBell     # campana con contador WebSocket`
      },
      {
        label: "DASHBOARD PRINCIPAL — SPECS",
        color: "#F59E0B",
        content: `LAYOUT DASHBOARD (VISTA ADMINISTRADOR):

FILA 1 — KPI CARDS (4 columnas):
  [Miembros Activos]  [Recaudo Mes]  [Mora %]  [Reservas Pendientes]
  Cada card: valor actual + delta vs mes anterior.

FILA 2 (Actividad Principal):
  [Gráfico Ingresos vs Estado de Cuotas - 60%]
  [Top 10 Miembros en Mora (accionable: enviar recordatorio) - 40%]

FILA 3 (Comunidad):
  [Próximas Asambleas / Eventos - 50%]
  [Actividad Reciente (Foro / Tablero de Anuncios) - 50%]

FILA 4 (Live Feed):
  Feed en streaming (WebSocket): "Apto 302 pagó expensas", "Nueva reserva Cancha Tenis", "Socio 801 check-in asamblea".

FILTRO GLOBAL:
  - Período: último mes / trimestre / año / custom range
  - Sede/Grupo (si aplica multi-sede)
  - Todos los widgets responden al filtro global`
      }
    ]
  },
  mobile: {
    title: "App Móvil — React Native + Expo",
    subtitle: "Aplicación para afiliados y administradores en campo",
    blocks: [
      {
        label: "STACK MOBILE",
        color: "#00E5A0",
        content: `TECNOLOGÍAS:
  Framework:      React Native + Expo SDK 51
  Routing:        Expo Router v3 (file-based, tab + stack)
  Estado:         Zustand + React Query (mismo que web)
  UI:             React Native Paper + componentes custom
  Cámara/QR:      expo-camera + expo-barcode-scanner
  Biometría:      expo-local-authentication (Face ID, fingerprint)
  Notificaciones: expo-notifications + Firebase FCM
  Storage local:  expo-secure-store (tokens) + MMKV (cache)
  Offline:        WatermelonDB para datos críticos offline
  Pagos:          @stripe/stripe-react-native + Nequi deeplink

PLATAFORMAS:
  iOS 15+   (iPhone y iPad)
  Android 10+ (API level 29+)

DISTRIBUCIÓN:
  Internal: EAS Build para TestFlight / Firebase App Distribution
  Producción: App Store + Google Play Store
  OTA Updates: Expo EAS Update (sin pasar por stores)`
      },
      {
        label: "PANTALLAS Y FLUJOS AFILIADO",
        color: "#06B6D4",
        content: `FLUJO ONBOARDING (primera vez):
  Splash → Seleccionar organización (búsqueda por nombre/ID)
  → Ingresar cédula → OTP SMS/email
  → Crear PIN 6 dígitos → Activar Face ID/Huella → Tour 3 slides → Home

TAB NAVIGATION (afiliado / residente / socio):
  🏠 Inicio    │  📅 Agenda  │  🗳️ Votar  │  🎾 Espacios  │  👤 Yo

TAB INICIO (Home):
  - Carné virtual animado (flip frente/reverso) con código QR grande en reverso
  - Cuota pendiente (monto + fecha vencimiento + botón PAGAR con Wompi)
  - Tablero de anuncios recientes de administración
  - Notificación de próxima asamblea (si aplica)

TAB AGENDA:
  - Eventos de la comunidad
  - Mis reservas próximas
  - Asambleas programadas

TAB VOTAR (Diferenciador principal):
  - Solo se ilumina/activa durante una asamblea en curso
  - Lista de preguntas activas en tiempo real (WebSocket)
  - Votación rápida aprobando con biometría o PIN
  - Certificado de participación digital

TAB ESPACIOS (Reservas):
  - Galería de espacios comunes (Salón Comunal, BBQ, Piscina)
  - Calendario de disponibilidad en vivo
  - Flujo de reserva (fecha → hora → invitados → pagar reserva si aplica)

APP WIDGET APPLE WALLET / GOOGLE PAY:
  (fase 2) Exportar carné como .pkpass para Wallet nativo`
      }
    ]
  },
  integrations: {
    title: "Integraciones Externas",
    subtitle: "Pagos, comunicaciones y cumplimiento regulatorio Colombia",
    blocks: [
      {
        label: "PASARELAS DE PAGO COLOMBIA",
        color: "#00E5A0",
        content: `OPEN FINANCE & BANKING:
  Belvo / Prometeo API: Para leer transacciones, ingresos y validar capacidad de pago (1-click credit).

PROVEEDOR PRINCIPAL: Wompi (Bancolombia) — wompi.co
  SDK: @wompi/sdk-node
  Métodos: PSE, tarjetas Visa/MC/Amex, Nequi, Bancolombia QR
  Webhooks: Escuchar transaction.updated en /webhooks/wompi
  Configuración por tenant: cada org tiene su propia cuenta Wompi
  Split payments: Wompi paga a la org y cobra fee a AfiliadosOS

PROVEEDOR ALTERNATIVO: PayU Colombia — developers.payulatam.com
  Métodos: PSE, efectivo (Efecty, Baloto), tarjetas, Nequi
  Usar como fallback si Wompi falla

NEQUI API DIRECTA: api.nequi.com
  Cobro programado a número Nequi
  Notificación push al usuario Nequi para aprobar
  Requiere afiliación comercial Nequi empresas

DAVIPLATA:
  Integración vía Davivienda Business API
  Débito a número celular registrado en DaviPlata

ACH / DÉBITO AUTOMÁTICO:
  A través de ACH Colombia para débito a cuenta bancaria
  Requiere autorización firmada del afiliado (guardar en documentos)
  Procesamiento batch nocturno D+1

RECAUDOS EN EFECTIVO:
  Integración Recaudo en Línea (Efecty) para generar referencias
  Integración Baloto para puntos de pago

IMPLEMENTACIÓN:
  - Servicio PaymentService abstrae todos los proveedores
  - Interface: processPayment(method, amount, tenantConfig, afiliadoData)
  - Reintentos automáticos con backoff exponencial (3 intentos)
  - Webhooks idempotentes (verificar transaction_id antes de procesar)`
      },
      {
        label: "COMUNICACIONES",
        color: "#A855F7",
        content: `EMAIL — SendGrid (sendgrid.com):
  - Plantillas transaccionales en español co
  - Diseño responsive con logo del tenant (white-label)
  - Plantillas: bienvenida, cuota pendiente, cuota pagada,
    comunicado, evento, crédito aprobado, reset password
  - Tracking: opens, clicks por campaña
  - Dominio propio por tenant en fase Enterprise

SMS — Infobip o Twilio (local Colombian numbers):
  - Mensajes cortos: recordatorio cuota, OTP, bienvenida
  - Número corto colombiano para reconocimiento
  - Max 160 chars, UTF-8 para ñ y tildes
  - Opt-out automático con STOP

WHATSAPP BUSINESS API — Meta Cloud API:
  - Plantillas aprobadas por Meta en español
  - Mensajes: recordatorio pago, confirmación, comunicados
  - Requiere número WABA por tenant (o número compartido AfiliadosOS)
  - Conversaciones bidireccionales para atención
  - Webhook para mensajes entrantes → foro interno

PUSH NOTIFICATIONS:
  Web: Web Push API + Service Worker (Firebase FCM)
  Mobile: Expo Notifications + FCM + APNs
  Segmentación por topics FCM: tenant_id + categoria + mora_status

SMS OTP — Verificación de identidad:
  Generar OTP 6 dígitos, expirar en 10 min
  Rate limit: max 5 intentos por número/hora`
      },
      {
        label: "CUMPLIMIENTO REGULATORIO COLOMBIA",
        color: "#EF4444",
        content: `HABEAS DATA — Ley 1581/2012:
  - Formulario de autorización digital en onboarding
  - Guardar: consentimiento, fecha, IP, versión política
  - Endpoint GET /afiliados/:id/habeas-data → descargar PDF
  - Endpoint DELETE /afiliados/:id/datos → anonimizar si solicita
  - Retención de datos: datos financieros 10 años (DIAN),
    datos personales 5 años post retiro

SUPERSOLIDARIA (Fondos y Cooperativas):
  Reportes requeridos:
  - Balance General trimestral (formato SES - Sistema Estadístico)
  - Estado de Resultados trimestral
  - Informe de cartera de crédito mensual
  - Relación de afiliados activos (corte diciembre)
  Generación automática en PDF + Excel
  Envío manual por admin desde /reportes/supersolidaria

DIAN:
  - Facturación electrónica de cuotas (resolución facturación DIAN)
  - Retención en la fuente si aplica
  - Información exógena anual (formato 1001, 2276)
  Integración: Siigo o Alegra para factura electrónica

SARLAFT — Ley 526/1999:
  - Formulario SAGRILAFT básico en registro afiliado
  - Verificación contra listas OFAC, ONU, UIAF Colombia
  API: listas-restrictivas.co o ComplyAdvantage
  - Alerta si afiliado aparece en listas
  - Registro de operaciones inusuales > umbral configurable

FIRMA ELECTRÓNICA:
  - Firma simple: checkbox + IP + timestamp (Habeas Data, comunicados)
  - Firma avanzada: CertiCámara o Docusign para créditos y contratos
  Guardar evidencia: screenshot firmado + metadata + PDF sellado`

      {
        label: "IA & BLOCKCHAIN & SEGUROS",
        color: "#EAB308",
        content: `IA GENERATIVA:
  - OpenAI API (GPT-4o) / Anthropic (Claude 3.5 Sonnet) para el agente conversacional.
  - LangChain para RAG usando las políticas de cada organización.
  - ElevenLabs para TTS (Text-to-Speech) opcional en accesibilidad.

BLOCKCHAIN (VOTACIONES):
  - Polygon (L2) o Base (L2) para bajo costo de gas.
  - Smart Contracts (Solidity) desplegados por tenant para registrar hashes de asambleas.
  - Ethers.js / Web3.js en el backend.

SEGUROS EMBEBIDOS (Insurtech):
  - APIs de aseguradoras (Ej: Sura, Bolivar) para cotizar y emitir mini-pólizas.
  - El sistema cobra la póliza junto con la cuota de afiliación mensual.`
      },
      }
    ]
  },
  security: {
    title: "Seguridad & Cumplimiento",
    subtitle: "Hardening, auditoría y protección de datos sensibles",
    blocks: [
      {
        label: "AUTENTICACIÓN Y AUTORIZACIÓN",
        color: "#00E5A0",
        content: `JWT STRATEGY:
  - Access Token: 15 minutos, firmado RS256 (asymmetric)
  - Refresh Token: 30 días, rotación obligatoria en cada uso
  - Almacenamiento web: httpOnly cookie + SameSite=Strict
  - Almacenamiento mobile: expo-secure-store (Keychain iOS / Keystore Android)
  - Blacklist de tokens revocados en Redis (TTL = vida del token)

ROLES Y PERMISOS (RBAC):
  SUPERADMIN:  acceso total a todos los tenants (solo equipo AfiliadosOS)
  ADMIN_ORG:   CRUD completo en su tenant
  TESORERO:    gestión financiera + aprobación créditos
  SECRETARIO:  gestión afiliados + comunicados + eventos
  AFILIADO:    solo sus propios datos (lectura + pago cuotas)
  ALIADO:      solo verificación de carné (ruta pública firmada)

MULTI-TENANCY SECURITY:
  - PostgreSQL Row-Level Security forzado en TODAS las tablas
  - Middleware verifica que JWT tenant_id == URL tenant_id
  - Tests automáticos de "tenant bleeding" en CI
  - Logs separados por tenant en ELK

2FA:
  - TOTP compatible con Google Authenticator, Authy
  - Backup codes de un solo uso (10 códigos, guardar hasheados)
  - SMS 2FA como alternativa
  - Forzado para roles ADMIN_ORG y TESORERO (configurable)`
      },
      {
        label: "CIFRADO Y PROTECCIÓN DE DATOS",
        color: "#EF4444",
        content: `DATOS EN REPOSO:
  - PostgreSQL: Transparent Data Encryption en disco (AWS RDS)
  - Campos ultra-sensibles cifrados a nivel aplicación (AES-256-GCM):
    * cedula, salario_base, datos_bancarios, password_hash (bcrypt 12 rounds)
  - S3: Server-Side Encryption SSE-KMS para documentos
  - Backups cifrados diarios + semanal + mensual (retención 3 años)

DATOS EN TRÁNSITO:
  - TLS 1.3 obligatorio (HTTP/2)
  - HSTS con preload y includeSubDomains
  - Certificate Pinning en app móvil
  - Cloudflare WAF + DDoS protection

LOGS DE AUDITORÍA (inmutables):
  Tabla audit_logs con INSERT ONLY (sin UPDATE ni DELETE):
  {
    id, tenant_id, user_id, accion, entidad, entidad_id,
    datos_antes (jsonb), datos_despues (jsonb),
    ip, user_agent, timestamp
  }
  - Exportable por período para auditorías
  - Almacenado en ClickHouse para consultas rápidas
  - Retención: 10 años (regulatorio financiero Colombia)

HEADERS DE SEGURIDAD:
  Content-Security-Policy: default-src 'self'; ...
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: camera=(), microphone=()
  
VULNERABILITY MANAGEMENT:
  - Dependabot para actualizaciones automáticas
  - OWASP ZAP scan en pipeline CI/CD
  - Snyk para análisis de vulnerabilidades en dependencias
  - Pentest anual por tercero (requerimiento Supersolidaria)`
      }
    ]
  },
  devops: {
    title: "DevOps, Infraestructura & Deployment",
    subtitle: "CI/CD, Kubernetes, monitoreo y escalabilidad",
    blocks: [
      {
        label: "INFRAESTRUCTURA AWS",
        color: "#FF6B35",
        content: `REGIÓN PRINCIPAL: us-east-1 (latencia Colombia ~120ms)
REGIÓN DR: us-west-2 (disaster recovery, cold standby)

SERVICIOS AWS:
  Compute:      EKS (Kubernetes 1.29) para microservicios
  Base de datos:RDS PostgreSQL 16 (Multi-AZ, db.r6g.xlarge)
  Cache:        ElastiCache Redis 7 (cluster mode, r6g.large)
  Files:        S3 + CloudFront CDN para assets y documentos
  Queue:        Amazon MQ (RabbitMQ) para eventos async
  Email infra:  SES para emails transaccionales
  Secrets:      AWS Secrets Manager (rotación automática)
  DNS:          Route 53 + certificados ACM
  Monitoring:   CloudWatch + X-Ray

KUBERNETES (EKS):
  - Namespace por microservicio
  - HPA (Horizontal Pod Autoscaler): scale por CPU >70%
  - PDB (Pod Disruption Budget): mínimo 2 réplicas en producción
  - Ingress: AWS Load Balancer Controller + cert-manager
  - GitOps: ArgoCD para deployments declarativos
  - Network Policies: cada servicio solo habla con sus dependencias

DOCKER:
  - Imágenes base: node:20-alpine (mínimo 50MB)
  - Multi-stage builds obligatorios
  - Vulnerabilities scan: Trivy en CI
  - Registry: AWS ECR (private, lifecycle policies)`
      },
      {
        label: "CI/CD Y MONITOREO",
        color: "#06B6D4",
        content: `PIPELINE CI/CD (GitHub Actions):

ON PULL REQUEST:
  1. lint (ESLint + Prettier)
  2. typecheck (tsc --noEmit)
  3. tests unitarios (Jest, mín 80% cobertura)
  4. tests integración (Supertest + TestContainers)
  5. tests tenant-bleeding (seguridad multi-tenant)
  6. build Docker image
  7. scan vulnerabilidades (Trivy + Snyk)
  8. preview deploy en entorno staging

ON MERGE TO MAIN:
  1. Todo lo anterior +
  2. Build + push a ECR
  3. Deploy automático a staging
  4. Smoke tests en staging
  5. Notificación Slack

ON RELEASE TAG (vX.Y.Z):
  1. Deploy a producción (blue/green)
  2. Smoke tests en producción
  3. Notificación Slack + email team
  4. Rollback automático si smoke tests fallan

MONITOREO:
  Métricas:     Prometheus + Grafana (dashboards por servicio)
  Logs:         Loki + Grafana (búsqueda centralizada)
  Trazas:       Jaeger (distributed tracing)
  Errores:      Sentry (error tracking + performance)
  Uptime:       Better Uptime (status page pública)
  SLOs:
    API latencia p95 < 300ms
    Uptime > 99.9% mensual
    Error rate < 0.1%

ENTORNOS:
  development:  Docker Compose local (todos los servicios)
  staging:      EKS namespace staging (datos sintéticos)
  production:   EKS namespace prod (HA, backups, monitoring)

VARIABLES DE ENTORNO (documentar en .env.example):
  DATABASE_URL, REDIS_URL, RABBITMQ_URL
  JWT_PRIVATE_KEY, JWT_PUBLIC_KEY
  WOMPI_PUBLIC_KEY, WOMPI_PRIVATE_KEY
  SENDGRID_API_KEY, TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN
  WHATSAPP_API_TOKEN, WHATSAPP_PHONE_ID
  S3_BUCKET, S3_REGION, S3_ACCESS_KEY, S3_SECRET_KEY
  SENTRY_DSN, SUPERADMIN_EMAIL`
      }
    ]
  },
  fullprompt: {
    title: "Prompt Completo — Listo para Copiar",
    subtitle: "El prompt maestro unificado para pegar en Antigravity, Cursor, v0, Lovable o cualquier agente de desarrollo",
    blocks: [
      {
        label: "INSTRUCCIÓN INICIAL PARA EL AGENTE",
        color: "#00E5A0",
        content: `Eres un equipo completo de ingeniería senior especializado en SaaS B2B. 
Tu misión es construir "AfiliadosOS" desde cero: una Super App SaaS multi-tenant 
para gestionar organizaciones con base de afiliados en Colombia 
(cooperativas, fondos de empleados, sindicatos, clubes, asociaciones).

REGLAS GENERALES:
  1. Siempre TypeScript strict mode, zero any
  2. Arquitectura modular — nunca código espagueti
  3. Multi-tenancy con Row-Level Security en PostgreSQL (NUNCA hardcodear tenant_id)
  4. Respuestas API siempre en formato estándar {success, data, meta}
  5. Todos los strings de usuario internacionalizables (i18next) aunque inicies en es-CO
  6. Comentarios en código explicando el "por qué", no el "qué"
  7. Conventional commits en todos los cambios
  8. README actualizado en cada módulo completado`
      },
      {
        label: "PROMPT UNIFICADO COMPLETO (COPIAR COMPLETO)",
        color: "#A855F7",
        content: `=============================================================
AFILIADOSOS — PROMPT TÉCNICO MAESTRO v3.0
Foco: comunidades, clubes, edificios y asociaciones
=============================================================

# CONTEXTO
Construye AfiliadosOS: SaaS multi-tenant B2B white-label para gestionar
comunidades con afiliados en Colombia (clubes sociales, edificios de
apartamentos, fondos de empleados, cooperativas, sindicatos, ONGs).
Mercado: 22,000+ organizaciones en Colombia.

FOCO PRINCIPAL — en orden de prioridad:
1. EXPERIENCIA DEL AFILIADO: app móvil simple, carné QR, votaciones,
   reservas de espacios, pago de cuota, comunicados, comunidad
2. CONTROL DEL ADMINISTRADOR: dashboard central, gestión de miembros,
   cobros automáticos, asambleas en vivo, comunicados segmentados
3. COMUNIDAD: tablero de anuncios, foro interno, directorio de miembros

LO QUE NO ES este sistema: motor de crédito complejo, nómina,
contabilidad empresarial avanzada. Solo cuotas de membresía.

# STACK TÉCNICO
Backend:   NestJS 10 + TypeScript 5.4 + Prisma 5 + PostgreSQL 16 + Redis 7
Frontend:  React 18 + TypeScript + Vite + TanStack Router + Zustand +
           TanStack Query v5 + shadcn/ui + Tailwind CSS + Recharts +
           socket.io-client + Framer Motion
Mobile:    React Native + Expo SDK 51 + Expo Router v3 + socket.io-client
Monorepo:  Turborepo + pnpm workspaces
Auth:      JWT RS256 (access 15min) + refresh 30d + 2FA TOTP + RBAC
Colas:     BullMQ sobre Redis para emails/SMS/push async
Pagos:     Wompi Colombia (PSE, Nequi, tarjetas, Efecty)
Email:     SendGrid | SMS: Twilio | Push: Firebase FCM | WhatsApp: Meta API
Files:     AWS S3 + CloudFront CDN
WebSocket: socket.io + @nestjs/websockets (votaciones live)
Tests:     Jest + Supertest (cobertura mínima 80% en services)

# ARQUITECTURA
Monolito modular NestJS (un servicio, módulos independientes por feature).
Multi-tenancy con PostgreSQL Row-Level Security:
  SET app.tenant_id = '<uuid>' en cada conexión via middleware.
  Todas las tablas tienen tenant_id + política RLS correspondiente.

Módulos NestJS:
  AuthModule | TenantModule | AfiliadosModule | FinancieroModule |
  AsambleasModule | VotacionesModule | EventosModule | ReservasModule |
  ComunicacionesModule | ForoModule | EncuestasModule | ReportesModule

# BASE DE DATOS — TABLAS PRINCIPALES
tenants, users, afiliados, beneficiarios, afiliado_documentos,
planes_membresia, cuotas, transacciones,
asambleas, asamblea_asistencia, votaciones, votos,
eventos, evento_inscripciones,
espacios, reservas,
comunicados, tablero_anuncios, foro_posts, encuestas, encuesta_respuestas,
audit_logs (INSERT ONLY — inmutable)

# MÓDULO 1 — AFILIADOS (MVP — implementar primero)
Schema Prisma completo con todas las tablas.
CRUD completo de afiliados con validaciones Colombia:
  — cédula: 7-10 dígitos numéricos
  — celular: 10 dígitos empezando en 3
  — NIT: 9 dígitos + dígito de verificación
Generación de carné QR: token rotativo 24h firmado con HMAC-SHA256.
Importación masiva CSV/Excel con validación y reporte de errores.
Frontend: tabla con búsqueda instantánea + filtros + perfil 360°.
Perfil 360°: tabs General | Cuotas | Eventos | Votaciones | Docs | Notas.

# MÓDULO 2 — CUOTAS (solo membresía, no crédito)
Planes de membresía: valor fijo COP por categoría.
Generación automática de cuotas: cron día 1 de cada mes.
Cobro automático: Wompi batch, máx 1000/día, webhook para confirmación.
Recordatorios automáticos: D-3, D-1, D+1, D+7 vía BullMQ.
Vista mora: tabla accionable con acciones bulk (enviar recordatorio, exonerar).
Afiliado en app: ver cuota pendiente + pagar en 2 taps.

# MÓDULO 3 — ASAMBLEAS Y VOTACIONES (módulo diferenciador)
Crear asamblea: título, fecha, lugar, modalidad, % quórum requerido.
Panel admin en vivo (WebSocket):
  — Lista check-in en tiempo real
  — % quórum alcanzado (alerta al llegar al mínimo)
  — Crear y abrir votaciones durante la asamblea
Check-in: QR del carné leído por cámara web del admin.
Votación en tiempo real:
  — Admin abre votación → push broadcast a todos los afiliados
  — Afiliado: recibe notificación → vota con PIN/biometría → confirmación
  — Resultados: live si es abierta, al cerrar si es secreta
  — UNIQUE constraint + HMAC para integridad del voto
Acta automática: PDF con asistentes, quórum y resultados de votaciones.
WebSocket events: votacion:abierta, votacion:resultado, asamblea:quorum,
                  asamblea:checkin

# MÓDULO 4 — EVENTOS Y RESERVAS
Eventos: CRUD con aforo, costo, inscripción, check-in por QR.
Espacios: nombre, foto, capacidad, horarios disponibles, reglas.
Reservas: calendario de disponibilidad semanal, reservar desde app,
          aprobar/rechazar desde panel admin.
Afiliado en app: tab Agenda con eventos + mis reservas + asambleas.

# MÓDULO 5 — COMUNICACIONES OMNICANAL
Canales: Push FCM, Email SendGrid, SMS Twilio, WhatsApp Meta API.
Segmentación: estado, categoría, unidad, mora, participación, tags.
Tipos: URGENTE, INFORMATIVO, CONVOCATORIA, RECORDATORIO.
Auto-comunicados: cuota vencida, asamblea próxima, evento próximo.
Cola BullMQ: envíos async con reintentos, stats en tiempo real.
Tablero de anuncios: visibles en home de la app, sin ser intrusivos.
Foro: posts + respuestas con moderación por admin.
Encuestas: preguntas + opciones + resultados solo visibles al admin.

# APP MÓVIL (afiliado) — PANTALLAS PRIORITARIAS
Onboarding: seleccionar org → cédula → OTP → PIN → biometría → home (3 min).
Bottom tabs: Inicio | Agenda | Votar | Espacios | Yo

TAB INICIO:
  — Carné virtual con flip 3D (frente: foto+datos, reverso: QR grande)
  — Estado cuenta: al día / cuota pendiente + botón pagar
  — Próximo evento + últimas noticias

TAB VOTAR (resaltado cuando hay votación abierta):
  — Lista votaciones activas con tiempo restante
  — Pantalla votación: opciones como tarjetas + confirmar con PIN
  — Historial de participación

TAB ESPACIOS:
  — Lista espacios con foto
  — Calendario disponibilidad + reservar

TAB YO (perfil):
  — Datos, beneficiarios, documentos, historial cuotas, notificaciones

CARNÉ VIRTUAL:
  — Proporción credit card (ratio 1.586:1)
  — Frente: logo org + foto + nombre + número + categoría
  — Reverso: QR rotativo grande + código de barras
  — HMAC-SHA256 para verificación offline
  — Shimmer CSS en hover para sensación premium
  — Guardar como imagen: expo-media-library + ViewShot

# PANEL ADMIN WEB — VISTAS PRIORITARIAS
Dashboard: KPIs (afiliados activos, recaudo mes, % mora, eventos próximos),
           gráfico ingresos 12 meses, top 10 mora, actividad reciente live.
Afiliados: tabla búsqueda + filtros + acciones bulk + exportar.
Panel asamblea en vivo: check-in live + quórum % + votaciones.
Votaciones: crear, abrir/cerrar, ver resultados en tiempo real.
Comunicados: editor + segmentación + programar + stats.
Reservas: calendario semanal todos los espacios.
Reportes: PDF/Excel de afiliados, cuotas, asistencia, participación.

# SEGURIDAD Y CUMPLIMIENTO
Multi-tenancy: RLS en todas las tablas. NUNCA hardcodear tenant_id.
JWT: access 15min + refresh 30d (rotación). httpOnly cookie en web.
2FA TOTP obligatorio para admins, opcional para afiliados.
Audit log inmutable (INSERT ONLY) en todas las operaciones CRUD.
Habeas Data Ley 1581/2012: formulario de aceptación en onboarding.
Campos cifrados AES-256: cédula, celular, email.
Rate limiting: 100 req/min IP, 5 intentos fallidos → bloqueo 15min.

# DISEÑO VISUAL
Paleta (fondo claro para app afiliado, oscuro para panel admin):
  Admin dark:  Fondo #060B14, superficie #0D1520, borde #1A2535,
               texto #E8EDF5, muted #8896A5, primario #00E5A0
  Afiliado light: Fondo #F8FAF9, superficie #FFFFFF, borde #E0EDE8,
                  texto #1A2B25, primario #0F6E56, acento #1D9E75
Tipografía: Syne (headings 600-800) + IBM Plex Sans (body) — NUNCA Inter
Animaciones: Framer Motion (web) + Reanimated 3 (mobile)
White-label: colores del tenant desde /tenant/config en cada app

# LOCALIZACIÓN COLOMBIA
Moneda: COP, formato: 1.500.000 (punto miles, sin decimales)
Zona horaria: America/Bogota (UTC-5, default en todos los timestamps)
Festivos: librería colombia-holidays (no cobrar en festivos)
SMMLV 2026: $1.423.500 COP
Celular: regex /^3[0-9]{9}$/ (10 dígitos, empieza en 3)
Cédula: regex /^[0-9]{7,10}$/ (7-10 dígitos)

# ENTREGABLES EN ORDEN (confirmar cada uno antes de continuar)
1. docker-compose.dev.yml con postgres, redis, api, web
2. Schema Prisma completo con TODAS las tablas + migraciones
3. Seed script: 3 tenants demo (club, edificio, fondo) con 30 afiliados c/u
4. AfiliadosModule completo (NestJS) con todos los endpoints
5. FinancieroModule (cuotas y cobros)
6. AsambleasModule + VotacionesModule con WebSocket
7. EventosModule + ReservasModule
8. ComunicacionesModule con BullMQ workers
9. TenantModule + AuthModule + guard RBAC
10. Frontend web: layout + dashboard + módulo afiliados completo
11. Frontend web: asambleas en vivo + votaciones real-time
12. App móvil: onboarding + carné virtual + tab votaciones
13. App móvil: cuotas + pago + agenda + espacios
14. Tests (80% cobertura en services)
15. Swagger OpenAPI completo
16. README con setup local + variables de entorno

# REGLAS TÉCNICAS (no negociables)
— TypeScript strict mode, zero 'any'
— Multi-tenancy: tenant_id SIEMPRE desde contexto, nunca hardcodeado
— Todos los listados: cursor-based pagination
— Formato respuesta: {success, data, meta} en éxito / {success, error} en fallo
— Conventional commits en cada entregable
— Zero console.log en producción (usar Logger de NestJS)
— Health check en GET /health (liveness probe)
— Todas las variables de entorno documentadas en .env.example
— Máximo 1 responsabilidad por service/controller

Empieza por: docker-compose.dev.yml + schema Prisma + seed.
=============================================================`
      }
    ]
  }
};

export default function App() {
  const [activeSection, setActiveSection] = useState("overview");
  const [copiedBlock, setCopiedBlock] = useState(null);

  const section = CONTENT[activeSection];

  const copyToClipboard = (text, idx) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedBlock(idx);
      setTimeout(() => setCopiedBlock(null), 2000);
    });
  };

  return (
    <div style={{
      fontFamily: "'Syne', 'IBM Plex Sans', sans-serif",
      background: "#060B14",
      color: "#E8EDF5",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=IBM+Plex+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        ::-webkit-scrollbar { width: 5px; height: 5px; }
        ::-webkit-scrollbar-track { background: #060B14; }
        ::-webkit-scrollbar-thumb { background: #1A2535; border-radius: 3px; }
        ::-webkit-scrollbar-thumb:hover { background: #00E5A0; }
        
        .nav-item {
          display: flex; align-items: center; gap: 8px;
          padding: 9px 14px; border-radius: 8px;
          cursor: pointer; font-size: 13px; font-weight: 600;
          transition: all 0.2s; white-space: nowrap; border: none;
          background: transparent; color: #8896A5; text-align: left;
          width: 100%;
        }
        .nav-item:hover { background: rgba(255,255,255,0.04); color: #E8EDF5; }
        .nav-item.active { background: rgba(0,229,160,0.12); color: #00E5A0; }
        
        .code-block {
          background: #0A1220;
          border: 1px solid #1A2535;
          border-radius: 12px;
          padding: 0;
          margin: 16px 0;
          overflow: hidden;
          position: relative;
        }
        .code-header {
          display: flex; justify-content: space-between; align-items: center;
          padding: 10px 16px;
          background: #0D1728;
          border-bottom: 1px solid #1A2535;
        }
        .code-label {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 11px; font-weight: 500;
          letter-spacing: 0.1em; text-transform: uppercase;
        }
        .copy-btn {
          padding: 4px 12px; border-radius: 6px; cursor: pointer;
          font-size: 11px; font-weight: 600; border: none;
          background: rgba(0,229,160,0.1); color: #00E5A0;
          transition: all 0.2s;
        }
        .copy-btn:hover { background: rgba(0,229,160,0.2); }
        .copy-btn.copied { background: rgba(0,229,160,0.3); color: #00E5A0; }
        .code-content {
          padding: 20px;
          font-family: 'IBM Plex Mono', monospace;
          font-size: 12.5px; line-height: 1.75;
          color: #B8C8D8;
          white-space: pre-wrap;
          word-break: break-word;
          max-height: 420px;
          overflow-y: auto;
        }
        
        .progress-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: #1A2535; display: inline-block;
        }
        .progress-dot.active { background: #00E5A0; }
      `}</style>

      {/* TOP BAR */}
      <div style={{
        borderBottom: "1px solid #1A2535",
        padding: "14px 24px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        background: "#060B14",
        position: "sticky", top: 0, zIndex: 100,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{
            width: 32, height: 32, borderRadius: 8,
            background: "linear-gradient(135deg, #00E5A0, #06B6D4)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 16,
          }}>⚡</div>
          <div>
            <div style={{ fontWeight: 800, fontSize: 15, letterSpacing: "-0.02em" }}>
              AfiliadosOS
            </div>
            <div style={{ color: "#5A6A7A", fontSize: 11 }}>Prompt Técnico Maestro v3.0</div>
          </div>
        </div>
        <div style={{ display: "flex", gap: 6 }}>
          {SECTIONS.map((s, i) => (
            <div key={i} className={`progress-dot ${activeSection === s.id ? "active" : ""}`} />
          ))}
        </div>
        <div style={{
          background: "rgba(0,229,160,0.1)", border: "1px solid rgba(0,229,160,0.25)",
          borderRadius: 6, padding: "4px 12px", fontSize: 12, color: "#00E5A0",
          fontWeight: 700,
        }}>
          Colombia SaaS 2026
        </div>
      </div>

      <div style={{ display: "flex", flex: 1, overflow: "hidden" }}>
        {/* SIDEBAR */}
        <div style={{
          width: 220, borderRight: "1px solid #1A2535",
          padding: "16px 10px",
          display: "flex", flexDirection: "column", gap: 2,
          overflowY: "auto",
          background: "#060B14",
          position: "sticky", top: 61, height: "calc(100vh - 61px)",
          flexShrink: 0,
        }}>
          <div style={{ fontSize: 10, fontWeight: 700, color: "#3A4A5A", letterSpacing: "0.12em", padding: "4px 14px 8px", textTransform: "uppercase" }}>
            Secciones
          </div>
          {SECTIONS.map(s => (
            <button key={s.id} className={`nav-item ${activeSection === s.id ? "active" : ""}`}
              onClick={() => setActiveSection(s.id)}>
              <span>{s.icon}</span>
              <span>{s.label.replace(/^.{2}/, "").trim()}</span>
            </button>
          ))}

          <div style={{ marginTop: "auto", padding: "16px 14px 0", borderTop: "1px solid #1A2535" }}>
            <div style={{ fontSize: 11, color: "#5A6A7A", lineHeight: 1.6 }}>
              <span style={{ color: "#00E5A0" }}>10 secciones</span> · Prompt completo en la última pestaña
            </div>
          </div>
        </div>

        {/* MAIN CONTENT */}
        <div style={{ flex: 1, overflowY: "auto", padding: "32px 36px" }}>
          <div style={{ maxWidth: 860, margin: "0 auto" }}>
            {/* Header */}
            <div style={{ marginBottom: 28 }}>
              <div style={{ fontSize: 12, color: "#5A6A7A", marginBottom: 6, fontFamily: "'IBM Plex Mono'" }}>
                {SECTIONS.findIndex(s => s.id === activeSection) + 1} / {SECTIONS.length}
              </div>
              <h1 style={{ fontSize: 30, fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 6 }}>
                {section.title}
              </h1>
              <p style={{ color: "#8896A5", fontSize: 15 }}>{section.subtitle}</p>
            </div>

            {/* Blocks */}
            {section.blocks.map((block, idx) => (
              <div key={idx} className="code-block">
                <div className="code-header">
                  <span className="code-label" style={{ color: block.color }}>{block.label}</span>
                  <button
                    className={`copy-btn ${copiedBlock === `${activeSection}-${idx}` ? "copied" : ""}`}
                    onClick={() => copyToClipboard(block.content, `${activeSection}-${idx}`)}
                  >
                    {copiedBlock === `${activeSection}-${idx}` ? "✓ Copiado" : "Copiar"}
                  </button>
                </div>
                <div className="code-content">{block.content}</div>
              </div>
            ))}

            {/* Navigation buttons */}
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: 32, paddingTop: 24, borderTop: "1px solid #1A2535" }}>
              {(() => {
                const idx = SECTIONS.findIndex(s => s.id === activeSection);
                const prev = SECTIONS[idx - 1];
                const next = SECTIONS[idx + 1];
                return (
                  <>
                    {prev ? (
                      <button onClick={() => setActiveSection(prev.id)} style={{
                        padding: "10px 20px", borderRadius: 8, cursor: "pointer",
                        border: "1px solid #1A2535", background: "transparent",
                        color: "#8896A5", fontSize: 13, fontWeight: 600,
                        transition: "all 0.2s",
                      }}
                        onMouseOver={e => { e.target.style.borderColor = "#00E5A0"; e.target.style.color = "#00E5A0"; }}
                        onMouseOut={e => { e.target.style.borderColor = "#1A2535"; e.target.style.color = "#8896A5"; }}>
                        ← {prev.label}
                      </button>
                    ) : <div />}
                    {next && (
                      <button onClick={() => setActiveSection(next.id)} style={{
                        padding: "10px 20px", borderRadius: 8, cursor: "pointer",
                        border: "1px solid #00E5A0", background: "rgba(0,229,160,0.08)",
                        color: "#00E5A0", fontSize: 13, fontWeight: 700,
                        transition: "all 0.2s",
                      }}>
                        {next.label} →
                      </button>
                    )}
                  </>
                );
              })()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

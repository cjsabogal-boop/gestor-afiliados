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
        content: `PATRÓN ARQUITECTÓNICO: Backend-as-a-Service (BaaS) con Serverless 
MULTI-TENANCY: Firestore Security Rules + tenantId en documentos
COMUNICACIÓN INTERNA: Firebase EventArc / Cloud Functions Triggers
API EXTERNA: Next.js Server Actions / Firestore SDK directo en cliente (Realtime)

CAPAS DEL SISTEMA:
┌─────────────────────────────────────────────────────────┐
│  CLIENTES                                                │
│  Web App (Next.js)  │  Mobile App (React Native/Expo)   │
│  Admin Panel        │  Portal Afiliado                  │
├─────────────────────────────────────────────────────────┤
│  AUTHENTICATION & SECURITY                              │
│  Firebase Auth (Identidad) │ Firestore Security Rules   │
├───────────┬───────────┬───────────┬────────────────────┤
│  BACKEND SERVERLESS (GOOGLE CLOUD/FIREBASE)             │
│  ┌────────────┐ ┌────────────┐ ┌─────────────────┐    │
│  │ Cloud Funcs│ │ Server Act.│ │ Firebase Storage│    │
│  └────────────┘ └────────────┘ └─────────────────┘    │
│  ┌────────────┐ ┌────────────┐ ┌─────────────────┐    │
│  │ FCM (Push) │ │ App Check  │ │ EventArc        │    │
│  └────────────┘ └────────────┘ └─────────────────┘    │
├─────────────────────────────────────────────────────────┤
│  CAPA DE DATOS                                          │
│  Cloud Firestore (NoSQL, principal en tiempo real)      │
└─────────────────────────────────────────────────────────┘`
      },
      {
        label: "ESTRUCTURA DE REPOSITORIOS (MONOREPO)",
        color: "#F59E0B",
        content: `ESTRUCTURA DEL PROYECTO (NEXT.JS + FIREBASE):

gestor-afiliados/
├── src/
│   ├── app/                    # Next.js App Router (Web App / Admin Dashboard)
│   ├── components/             # React Components (shadcn/ui)
│   ├── lib/
│   │   └── firebase/           # Configuración de Firebase Client y Firebase Admin
│   └── types/                  # Interfaces de colecciones de Firestore
├── functions/                  # Firebase Cloud Functions (Node.js/TypeScript)
├── public/                     # Assets estáticos
├── firebase.json               # Configuración de hosting, firestore rules, etc.
├── firestore.rules             # Reglas de seguridad Multi-tenant
└── package.json                # Dependencias (Next, Firebase, Tailwind)`
      }
    ]`
      }
    ]
  },
  database: {
    title: "Esquema de Base de Datos",
    subtitle: "Cloud Firestore (NoSQL) con Reglas de Seguridad Multi-tenant",
    blocks: [
      {
        label: "TENANTS, AFILIADOS Y CUOTAS",
        color: "#00E5A0",
        content: `// ============================================
// COLECCIONES PRINCIPALES EN FIRESTORE
// ============================================

// /tenants/{tenantId}
{
  id: "UID",
  slug: "los-lagos",
  name: "Conjunto Residencial Los Lagos",
  type: "EDIFICIO", // EDIFICIO|CLUB|FONDO
  nit: "900.123.456-1",
  settings: { color: "#blue", logo: "url..." },
  createdAt: Timestamp
}

// /users/{userId} (Sincronizado con Firebase Auth)
{
  id: "UID_AUTH",
  email: "usuario@app.com",
  phone: "+57300...",
  fcmTokens: ["token1", "token2"],
  createdAt: Timestamp
}

// /tenants/{tenantId}/afiliados/{afiliadoId} (Subcolección)
{
  id: "UID_AFILIADO",
  userId: "UID_AUTH", // Referencia al usuario global
  numeroAfiliado: "Apto 301",
  cedula: "1020...",
  nombres: "Juan",
  apellidos: "Perez",
  estado: "ACTIVO", // ACTIVO|INACTIVO|MORA
  tipoMiembro: "PROPIETARIO",
  carnetQrToken: "eyJhbG...",
  createdAt: Timestamp
}

// /tenants/{tenantId}/planes_membresia/{planId}
{
  id: "UID_PLAN",
  nombre: "Administración Tipo A",
  valor: 250000,
  periodicidad: "MENSUAL"
}

// /tenants/{tenantId}/cuotas/{cuotaId}
{
  id: "UID_CUOTA",
  afiliadoId: "UID_AFILIADO",
  planId: "UID_PLAN",
  periodo: "2026-03",
  valor: 250000,
  fechaVencimiento: Timestamp,
  estado: "PENDIENTE", // PENDIENTE|PAGADA|VENCIDA
  transactionId: null,
  createdAt: Timestamp
}`
      },
      {
        label: "ASAMBLEAS Y VOTACIONES (DIFERENCIADOR)",
        color: "#F59E0B",
        content: `// ============================================
// ASAMBLEAS Y VOTACIONES LIVE (FIRESTORE)
// ============================================

// /tenants/{tenantId}/asambleas/{asambleaId}
{
  id: "UID_ASAMBLEA",
  titulo: "Asamblea Ordinaria 2026",
  fecha: Timestamp,
  modalidad: "HIBRIDA",
  linkStreaming: "https://zoom.us/...",
  quorumRequerido: 50.01,
  estado: "EN_CURSO",
  createdAt: Timestamp
}

// /tenants/{tenantId}/asambleas/{asambleaId}/asistentes/{afiliadoId} (Subcolección)
{
  afiliadoId: "UID_AFILIADO",
  coeficiente: 1.5, // Peso del voto
  checkInAt: Timestamp
}

// /tenants/{tenantId}/asambleas/{asambleaId}/votaciones/{votacionId}
{
  id: "UID_VOTACION",
  pregunta: "¿Aprobar presupuesto 2026?",
  opciones: [{id: "1", texto: "Sí"}, {id: "2", texto: "No"}],
  tipo: "ABIERTA",
  estado: "ABIERTA", // ABIERTA|CERRADA
  abreAt: Timestamp,
  cierraAt: null
}

// /tenants/{tenantId}/asambleas/{asambleaId}/votaciones/{votacionId}/votos/{afiliadoId}
{
  afiliadoId: "UID_AFILIADO",
  opcionId: "1",
  pesoVoto: 1.5,
  hashVoto: "HMAC_HASH", // Para integridad inmutable
  createdAt: Timestamp
}`
      },
      {
        label: "RESERVAS, COMUNIDAD Y AUDITORÍA",
        color: "#14B8A6",
        content: `// ============================================
// RESERVAS, EVENTOS Y COMUNIDAD
// ============================================

// /tenants/{tenantId}/espacios/{espacioId}
{
  id: "UID_ESPACIO",
  nombre: "Salón Comunal Principal",
  capacidad: 100,
  costoReserva: 50000,
  reglas: "No se permite música después de las 10pm",
  fotoUrl: "gs://...",
  isActive: true
}

// /tenants/{tenantId}/reservas/{reservaId}
{
  id: "UID_RESERVA",
  espacioId: "UID_ESPACIO",
  afiliadoId: "UID_AFILIADO",
  fechaInicio: Timestamp,
  fechaFin: Timestamp,
  estado: "CONFIRMADA", // PENDIENTE|CONFIRMADA|CANCELADA
  notas: "Celebración de cumpleaños"
}

// /tenants/{tenantId}/tablero_anuncios/{anuncioId}
{
  id: "UID_ANUNCIO",
  titulo: "Mantenimiento Ascensores Torre B",
  contenido: "El jueves no habrá ascensor entre 8am y 10am.",
  fijado: true,
  creadoPor: "UID_ADMIN",
  createdAt: Timestamp
}`
      }
    ]
  },
  backend: {
    title: "Backend — Serverless Next.js & Firebase Functions",
    subtitle: "Estructura, Server Actions y Cloud Functions",
    blocks: [
      {
        label: "ESTRUCTURA BASE DEL MONOLITO (FIREBASE/NEXT.JS)",
        color: "#00E5A0",
        content: `STACK BACKEND (SERVERLESS):
  Runtime:    Node.js 20 LTS + TypeScript 5.4
  Framework:  Next.js 16 (Server Actions & Route Handlers)
  Database:   Firebase Admin SDK (Firestore)
  Validación: Zod
  Docs/Spec:  TypeScript Interfaces
  Colas:      Firebase EventArc / Cloud Tasks
  Real-time:  Firestore onSnapshot (Suscripciones nativas, sin websockets extras)

ESTRUCTURA INTERNA DE LÓGICA:
gestor-afiliados/
├── src/
│   ├── app/
│   │   ├── api/               # Next.js Route Handlers (Webhooks, Wompi)
│   │   └── actions/           # Next.js Server Actions (Mutaciones)
│   │       ├── auth.actions.ts
│   │       ├── tenant.actions.ts
│   │       ├── afialiado.actions.ts
│   │       └── financiero.actions.ts
│   └── lib/
│       ├── firebase/
│       │   ├── client.ts      # Auth y Firestore client
│       │   └── admin.ts       # Firebase Admin init
│       ├── email/             # SendGrid wrapper
│       └── payments/          # Wompi SDK wrapper
├── functions/                 # /functions folder (Firebase CLoud Functions)
│   ├── src/
│   │   ├── triggers/          # onCreate, onUpdate triggers de DB
│   │   └── scheduled/         # Cron jobs (ej. generar cuotas mes)`
      },
      {
        label: "REGLAS DE IMPLEMENTACIÓN BACKEND",
        color: "#F59E0B",
        content: `FIRESTORE SECURITY RULES (CRÍTICO):
  - El corazón de la seguridad Multi-tenant. 
  - Reglas aseguran que `request.auth.uid` pueda acceder a `/tenants/$(tenantId)` basado en su rol.
  - El rol se inyecta en el Token de Auth usando Firebase Custom Claims: `claims.tenantRoles['TENANT_ID'] = 'ADMIN'`.

AUTENTICACIÓN:
  - Firebase Authentication maneja el ciclo de vida del usuario (Login, Password, MFA).
  - Next.js usa `next-firebase-auth-edge` o lectura de cookies firmadas de Firebase para el entorno SSR y Server Actions.
  - Roles controlados vía Custom Claims para no requerir llamadas a DB extra por request.

CLOUD FUNCTIONS Y EVENTOS (BACKGROUND):
  - En lugar de RabbitMQ, Firebase maneja triggers: `onDocumentCreated('/tenants/{tenantId}/cuotas/{cuotaId}')`
  - Cron Jobs: Firebase Functions Schedule (Google Cloud Scheduler) -> Ej. Ejecutar función cada 1 de mes para generar cuotas.
  - Webhooks de Wompi se reciben en Cloud Functions HTTPS (más barato y seguro aislarlas).

PAGINACIÓN:
  - Cursor-based pagination de Firestore: `query(..., startAfter(lastDoc), limit(20))`.`
      },
      {
        label: "OPERACIONES PRINCIPALES (SERVER ACTIONS & DIRECT DB LECTURA)

AUTH Y USUARIOS:
  Firebase Auth UI / signInWithEmailAndPassword en cliente.
  Server Action setea el session cookie si se requiere SSR.

AFILIADOS Y TENANTS:
  Lectura: Componentes cliente usando `useCollection` o getServerSideProps/RSC con Admin SDK.
  Creación: Server Action `crearAfiliado(data)` valida rol, crea Auth User y crea Doc.
  Importación: Firebase Cloud Function desencadenada por subida de Excel a Cloud Storage.

CUOTAS Y COBROS:
  Lectura: `collectionGroup('cuotas')` filtrando por `tenantId`.
  Cobros Masivos: Server Action que invoca Wompi, o enqueue a un Cloud Task.
  Webhooks Wompi: Function HTTPS independiente.

ASAMBLEAS Y VOTAR (REAL-TIME NATIVO):
  Asistencia (Quórum): `onSnapshot('asistentes')` actualiza gráfico al instante.
  Votación: Server Action para emitir voto usando Firestore Transaction (para atomicidad).

RESERVAS Y COMUNIDAD:
  Lectura de reservas: Suscripción en tiempo real a `/reservas` del tenant.
  Crear anuncio: Cliente escribe directo a `/anuncios` (aprobado por Rules si es Admin) o usa Server Action.`
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
      },
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
        content: `FIREBASE AUTH + CUSTOM CLAIMS (JWT):
  - Firebase emite un token JWT que expira en 1 hora, auto-renovado por el SDK.
  - Almacenamiento web: Manejado por Firebase JS SDK (IndexDB/Local). Cookies para SSR.
  - Custom Claims: `claims.tenantRoles = { "tenant_A": "ADMIN", "tenant_B": "AFILIADO" }`.

ROLES Y PERMISOS (RBAC EN FIRESTORE RULES):
  SUPERADMIN:  acceso total (accede usando Firebase Admin SDK sin reglas).
  ADMIN_ORG:   CRUD completo en subcolecciones de su tenant.
  AFILIADO:    solo leer su info, pagar cuotas, leer anuncios.
  Validación en rules: `allow read: if request.auth.token.tenantRoles[tenantId] == 'ADMIN';`

MULTI-TENANCY SECURITY INNATO:
  - El diseño jerárquico `/tenants/{tenantId}/colecciones` hace que el aislamiento sea visual y lógico.
  - Las reglas de Seguridad son compuestas al momento de despliegue.
  - Tests automáticos de Firestore Rules en emulador local en CI.

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
  - Firestore: Cifrado en reposo predeterminado de Google Cloud
  - Campos ultra-sensibles cifrados a nivel aplicación (AES-256-GCM):
    * cedula, datos_bancarios
  - Firebase Storage: Encriptación del lado del servidor (Google Cloud KMS)
  - Backups automatizados en Firestore (Point-in-Time Recovery - PiTR) y backups diarios

DATOS EN TRÁNSITO:
  - TLS 1.3 obligatorio (HTTP/2) en Firebase Hosting
  - HSTS con preload y includeSubDomains
  - App Check para App Móvil y Web (ReCaptcha V3 / DeviceCheck)

LOGS DE AUDITORÍA (inmutables):
  Colección audit_logs en Firestore (escrituras protegidas por Rules para no permitir updates/deletes):
  {
    id, tenantId, userId, accion, entidad, entidadId,
    datosAntes (map), datosDespues (map),
    ip, userAgent, timestamp
  }
  - Exportable por período a BigQuery usando la extensión oficial de Firestore a BigQuery
  - Almacenado en BigQuery para análisis histórico y retención a bajo costo
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
        label: "INFRAESTRUCTURA GOOGLE CLOUD & FIREBASE",
        color: "#FF6B35",
        content: `REGIÓN PRINCIPAL: us-central1 o us-east1
REGIÓN DR: multi-region en Firestore para HA

SERVICIOS GCP/FIREBASE:
  Compute Web:  Firebase Hosting (App Next.js, Server Actions, API)
  Compute Bg:   Firebase Cloud Functions (2nd Gen / Cloud Run)
  Base de datos:Cloud Firestore (NoSQL, Native mode)
  Files:        Cloud Storage for Firebase
  Queue/Eventos:Eventarc + Google Cloud Tasks
  Email infra:  SendGrid (externo)
  Secrets:      Google Secret Manager (integrado con Cloud Functions)
  Auth:         Firebase Authentication
  Monitoring:   Google Cloud Logging + Firebase Crashlytics + Sentry

SERVERLESS & ESCALABILIDAD (CLOUD RUN):
  - Cloud Functions 2nd Gen corre sobre Cloud Run
  - Auto-scaling nativo (de 0 a 1000 instancias) configurando concurrency.
  - No hay administración de clusters Kubernetes, 100% BaaS y Serverless.
  - Aislamiento de tenants garantizado por Firebase Security Rules de Firestore.

MONOREPO:
  - Turborepo u NPM Workspaces.
  - Despliegue independiente por packages (web, mobile, functions).`
      },
      {
        label: "CI/CD Y MONITOREO",
        color: "#06B6D4",
        content: `PIPELINE CI/CD (GitHub Actions):

ON PULL REQUEST:
  1. lint (ESLint + Prettier)
  2. typecheck (tsc --noEmit)
  3. tests unitarios (Jest/Vitest, mín 80% cobertura)
  4. test Firebase Rules (Firebase Local Emulator)
  5. preview channels en Firebase Hosting

ON MERGE TO MAIN:
  1. Todo lo anterior +
  2. Integrar Cloud Functions y probar con emulador completo
  3. Deploy a entorno de staging en Firebase (proyecto dev)
  4. Notificación Slack

ON RELEASE TAG (vX.Y.Z):
  1. Deploy a producción (Firebase proyecto prod)
  2. Despliegue de Functions, Hosting y Firestore Rules
  3. Smoke tests en producción
  4. Notificación Slack + email team

MONITOREO:
  Métricas:     Google Cloud Monitoring
  Logs:         Google Cloud Logging (logs estructurados de Functions y Next.js)
  Errores Web:  Sentry para el cliente Next.js
  Errores App:  Firebase Crashlytics en React Native
  Uptime:       Google Cloud Uptime Checks
  SLOs:
    Endpoint P95 < 400ms (teniendo en cuenta Cold Starts de Serverless)
    Uptime > 99.9% mensual

ENTORNOS:
  development:  Firebase Local Emulator Suite (Firestore, Auth, Functions, Storage)
  staging:      Proyecto de Firebase separado (gestor-afiliados-stg)
  production:   Proyecto de Firebase principal (gestor-afiliados-prod)

VARIABLES DE ENTORNO (Google Secret Manager / .env.example):
  NEXT_PUBLIC_FIREBASE_API_KEY, NEXT_PUBLIC_FIREBASE_PROJECT_ID, ...
  FIREBASE_SERVICE_ACCOUNT_JSON
  WOMPI_PUBLIC_KEY, WOMPI_PRIVATE_KEY
  SENDGRID_API_KEY, TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN
  SENTRY_DSN`
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
1. EXPERIENCIA DEL AFILIADO: app móvil simple, carné QR, votaciones live,
   reservas de espacios, pago de cuota, comunicados.
2. CONTROL DEL ADMINISTRADOR: dashboard central, gestión de miembros,
   cobros automáticos (Wompi), asambleas en vivo con Firebase Realtime/Firestore.
3. COMUNIDAD: tablero de anuncios, directorio de miembros.

# STACK TÉCNICO
Ecosistema: Google Cloud + Firebase (Firebase Authentication, Firestore, Storage)
Backend:    Next.js 16 (App Router + Server Actions) funcionando como Monolito Serverless.
            Firebase Cloud Functions v2 (Node.js 20) para integraciones background (triggers, crons, webhooks).
Frontend:   React 18 + TypeScript + Next.js App Router + Tailwind CSS + shadcn/ui.
            Zustand (estado global), TanStack Query o direct Firebase onSnapshot para real-time.
Mobile:     React Native + Expo SDK 51 + Expo Router.
Monorepo:   Turborepo o pnpm workspaces (packages: web, mobile, functions, types).
Auth:       Firebase Authentication (Identidad + Firebase Custom Claims para Roles).
Pagos:      Wompi Colombia (PSE, tarjetas, Nequi).
Push:       Firebase Cloud Messaging (FCM).

# ARQUITECTURA: BACKEND-AS-A-SERVICE (BaaS)
Multi-tenancy a través de Firestore:
- Los datos se dividen jerárquicamente: /tenants/{tenantId}/...
- Firestore Security Rules protegen herméticamente cada tenant basándose en los Firebase Custom Claims inyectados desde Auth.
El acceso a Firestore se hace directamente desde el Cliente (usando SDK web o Server Components) para aprovechar los streams (onSnapshot) nativos, en lugar de crear endpoints REST intermedios que complican el tiempo real.

# BASE DE DATOS (CLOUD FIRESTORE) - Colecciones Principales
- tenants (orgs)
- users (auth users)
- Subcolecciones dentro de /tenants/{tenantId}:
  afiliados, planes_membresia, cuotas, asambleas, votaciones, espacios, reservas, anuncios, audit_logs.

# MÓDULO 1 — AFILIADOS Y TENANTS (MVP)
Diseño de esquema Firestore y reglas de seguridad multi-tenant.
CRUD de afiliados. Validaciones Colombia (Cédula 7-10 dígitos, Celular empieza por 3, 10 dígitos).
Generación de carné QR: JSON stringificado + JWT firmado para validación.
Firebase Auth integration + Custom Claims assignment.

# MÓDULO 2 — CUOTAS (membresía)
Generación automática de cuotas el día 1: vía Cloud Scheduler trigger -> Cloud Function (genera cuotas para cada afiliado activo).
Cobro Wompi: Server Action llama a Wompi. Cloud Function HTTP expone webhook protegido para recibir el estado TRANSACTION_STATUS_UPDATED.
App Móvil: Afiliado ve cuota pendiente -> Pagar con Wompi widget / Nequi push.

# MÓDULO 3 — ASAMBLEAS Y VOTACIONES (REAL-TIME NATIVO)
Crear asamblea: modalidad hibrida, quórum.
Live Dashboard asamblea (Admin): Suscripción onSnapshot a /asambleas/{id}/asistentes y cálculo de % quórum.
Check-in: App del admin escanea QR de app afiliado, Server Action valida y agrega a asistente.
Votaciones Live:
  Admin crea doc de votación. Se propaga vía snapshot a las apps.
  Push notif FCM a participantes.
  Afiliados votan, se añade a /votos subcolección. Rule prohíbe votos dobles.

# MÓDULO 4 — EVENTOS, TABLERO Y RESERVAS
Espacios (ej. salón comunal, cancha de tenis).
Reservas: onSnapshot en tiempo real del calendario semanal.
Tablero de Anuncios: posts de la administración propulsados por suscripción Firestore.

# APP MÓVIL (REACT NATIVE / EXPO) — AFILIADO
Onboarding, FaceID/TouchID (expo-local-authentication), FCM Tokens (expo-notifications).
Bottom Tabs: Inicio (QR + Cuota pago), Agenda, Votar, Reservas.
Animación Carné Flip 3D (React Native Reanimated).

# PANEL ADMIN WEB (NEXT.JS APP ROUTER)
Dashboard de métricas (Cuotas pagadas, en mora, afiliados).
App Router features: Layouts anidados por tenant /admin/[tenantId]/...
Tablas con Shadcn + TanStack Table para gestión de afiliados e historial.

# SEGURIDAD Y DEVOPS
Firestore Rules inexpugnables usando request.auth.token.tenantRoles.
Deploy GitHub Actions automatizado de Firebase Hosting, Cloud Functions y rules.
Linting, Typechecking estricto y Testing con Firebase Local Emulator Suite.

# DISEÑO VISUAL Y UI
Admin UI oscura: Fondo #060B14, border #1A2535, primario verde #00E5A0.
Afiliado UI clara: Fondo #F8FAF9, primario #0F6E56.
Tipografía: Syne (headings) + IBM Plex Sans (cuerpo textual).
Componentes base: shadcn/ui.

# ENTREGABLES INICIALES ESPERADOS
1. Estructura de Firebase Config y firestore.rules inicial.
2. Seed inicial (script Node con Firebase Admin SDK) poblador de 1 tenant y 2 usuarios.
3. Componentes Base de Next.js (Dashboard layout).
4. Implementación de login y manejo Firebase Auth.
5. Módulo Afiliados (Vista Listado + Modal creación).

Reglas estrictas:
- NUNCA usar PostgreSQL/Prisma/AWS, aquí usamos Firebase y GCP.
- Types seguros derivados de la estructura Firestore.
Empieza por inicializar el proyecto Next.js y configurar el firebase.json + rules.
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

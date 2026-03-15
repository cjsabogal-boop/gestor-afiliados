import re

file_path = "/Users/carlossabogal/Downloads/AfiliadosOS_Prompt_Tecnico.jsx"

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Replace the full prompt section
old_fullprompt_section = re.search(r'# CONTEXTO DEL PRODUCTO.*?Empieza por: docker-compose.dev.yml \+ schema Prisma \+ seed script\.\nLuego sigue en el orden de entregables\. \nConfirma cada entregable antes de continuar con el siguiente\.\n=============================================================', content, re.DOTALL)

if old_fullprompt_section:
    new_fullprompt = """# CONTEXTO
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
============================================================="""
    
    content = content.replace(old_fullprompt_section.group(0), new_fullprompt)
    
    # Also update the title
    content = content.replace('AFILIADOSOS — PROMPT TÉCNICO MAESTRO v2.0', 'AFILIADOSOS — PROMPT TÉCNICO MAESTRO v3.0\nFoco: comunidades, clubes, edificios y asociaciones')
    content = content.replace('Prompt Técnico Maestro v2.0', 'Prompt Técnico Maestro v3.0')
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)
    print("Prompt updated successfully.")
else:
    print("Could not find the section to replace.")


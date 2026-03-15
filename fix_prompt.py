import re

file_path = "/Users/carlossabogal/Downloads/AfiliadosOS_Prompt_Tecnico.jsx"

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Update Overview Tagline
content = content.replace(
    'TAGLINE: El sistema operativo del sector solidario colombiano',
    'TAGLINE: La Super App & Sistema Operativo del Sector Solidario (Nivel Monstruo)'
)
content = content.replace(
    'TIPO: SaaS B2B Multi-tenant, White-label, Mobile-first',
    'TIPO: SaaS B2B Multi-tenant, White-label, Mobile-first + IA & Open Finance Integrado'
)

# Insert 7 Killer Modules in Overview
overview_insert = """
      {
        label: "7 KILLER MODULES (VENTAJA COMPETITIVA)",
        color: "#FF6B35",
        content: `1. Agente IA Conversacional & Transaccional (WhatsApp / In-App)
2. Portal B2B Nómina & HR para retención empresarial y conciliación
3. Open Finance & Instant Credit (1-click approval vía Open Banking)
4. Motor de Gamificación & Engagement (Niveles, badges y puntos)
5. Votaciones Blockchain (Inmutables transparentes para asambleas)
6. Seguros Embebidos (Deducción directa automática)
7. Internal Networking & Job Board (Bolsa de empleo interna)`
      },"""
if "7 KILLER MODULES" not in content:
    content = content.replace('overview: {\n    title: "Vision General del Producto",\n    subtitle: "AfiliadosOS — SaaS Multi-tenant para Gestión de Afiliados en Colombia",\n    blocks: [', 
                              'overview: {\n    title: "Vision General del Producto",\n    subtitle: "AfiliadosOS — SaaS Multi-tenant para Gestión de Afiliados en Colombia",\n    blocks: [' + overview_insert)

# 2. Update Architecture diagram
content = content.replace(
    '│  MICROSERVICIOS CORE                                    │\n│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐  │\n│  │ Afiliados│ │Financiero│ │Beneficios│ │Comunic.  │  │\n│  └──────────┘ └──────────┘ └──────────┘ └──────────┘  │\n│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐  │\n│  │ Eventos  │ │    BI    │ │  Tenants │ │Compliance│  │\n│  └──────────┘ └──────────┘ └──────────┘ └──────────┘  │',
    '│  MICROSERVICIOS CORE (INCLUYENDO KILLER MODULES)        │\n│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐  │\n│  │ Afiliados│ │Financiero│ │ I.A. Gen │ │ B2B/RRHH │  │\n│  └──────────┘ └──────────┘ └──────────┘ └──────────┘  │\n│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐  │\n│  │Blockchain│ │OpenFinanc│ │ Eventos  │ │Comunic.  │  │\n│  └──────────┘ └──────────┘ └──────────┘ └──────────┘  │'
)

content = content.replace(
    '│   ├── bi-service/             # NestJS + Python — Analytics e IA\n│   ├── tenant-service/         # NestJS — Multi-tenancy y billing\n│   └── compliance-service/     # NestJS — Habeas Data, SARLAFT',
    '│   ├── bi-service/             # NestJS + Python — Analytics y Modelos Preditivos\n│   ├── ai-agent-service/       # FastAPI + LangChain — Agente LLM\n│   ├── b2b-portal-service/     # NestJS — RRHH y Conciliación Nómina\n│   ├── openfinance-service/    # NestJS — Integración Belvo/Prometeo\n│   ├── tenant-service/         # NestJS — Multi-tenancy y billing\n│   └── compliance-service/     # NestJS — Habeas Data, SARLAFT'
)

# 3. Add Killer Modules DB schemas
db_insert = """
      {
        label: "SCHEMA KILLER MODULES (IA, OPEN FINANCE, BLOCKCHAIN)",
        color: "#14B8A6",
        content: `-- ============================================
-- IA & GAMIFICACIÓN
-- ============================================

CREATE TABLE ai_conversations (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  tenant_id       UUID NOT NULL,
  afiliado_id     UUID REFERENCES afiliados(id),
  channel         VARCHAR(50), -- WHATSAPP, IN_APP
  summary         TEXT,
  sentiment       VARCHAR(20),
  intent          VARCHAR(50),
  is_resolved     BOOLEAN DEFAULT FALSE,
  created_at      TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE gamificacion_puntos (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  tenant_id       UUID NOT NULL,
  afiliado_id     UUID REFERENCES afiliados(id),
  puntos          INT NOT NULL,
  motivo          VARCHAR(200), -- ej: PAGO_A_TIEMPO, ASISTENCIA_EVENTO
  nivel_actual    VARCHAR(50),  -- BRONCE, PLATA, ORO, PLATINO
  created_at      TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- PORTAL B2B (EMPRESAS EMPLEADORAS)
-- ============================================

CREATE TABLE empresas_b2b (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  tenant_id       UUID NOT NULL,
  nit             VARCHAR(20) NOT NULL,
  razon_social    VARCHAR(200) NOT NULL,
  contacto_rh     VARCHAR(200),
  email_rh        VARCHAR(200),
  created_at      TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE conciliacion_nomina (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  empresa_id      UUID REFERENCES empresas_b2b(id),
  tenant_id       UUID NOT NULL,
  periodo         VARCHAR(7), -- 2026-03
  total_deducir   DECIMAL(15,2),
  estado          VARCHAR(20), -- PENDIENTE, ENVIADO_RRHH, PAGADO
  created_at      TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- OPEN FINANCE & BLOCKCHAIN
-- ============================================

CREATE TABLE bank_connections (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  afiliado_id     UUID REFERENCES afiliados(id),
  tenant_id       UUID NOT NULL,
  provider        VARCHAR(50), -- BELVO, PROMETEO
  institution     VARCHAR(100),
  status          VARCHAR(20), -- LINKED, ERROR
  last_sync_at    TIMESTAMPTZ,
  created_at      TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE blockchain_transactions (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  tenant_id       UUID NOT NULL,
  reference_id    UUID, -- ID del voto o documento
  tx_hash         TEXT NOT NULL,
  network         VARCHAR(50), -- POLYGON, ETHEREUM
  status          VARCHAR(20), -- PENDING, CONFIRMED
  created_at      TIMESTAMPTZ DEFAULT NOW()
);`
      },"""

if "SCHEMA KILLER MODULES" not in content:
    content = content.replace('      }\n    ]\n  },\n  backend:', db_insert + '\n      }\n    ]\n  },\n  backend:')

# 4. Integraciones Update
content = content.replace(
    'PROVEEDOR PRINCIPAL: Wompi (Bancolombia) — wompi.co\n  SDK: @wompi/sdk-node',
    'OPEN FINANCE & BANKING:\n  Belvo / Prometeo API: Para leer transacciones, ingresos y validar capacidad de pago (1-click credit).\n\nPROVEEDOR PRINCIPAL: Wompi (Bancolombia) — wompi.co\n  SDK: @wompi/sdk-node'
)

# Add AI/Blockchain to Integrations
integ_insert = """
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
      },"""
if "IA & BLOCKCHAIN & SEGUROS" not in content:
    content = content.replace('      }\n    ]\n  },\n  security:', integ_insert + '\n      }\n    ]\n  },\n  security:')


# 5. Full Prompt Update
# Replace the "Módulo X" list with the killer modules.
old_fullprompt = """# MÓDULO 1 — AFILIADOS (MVP PRIMERO)
Implementar en este orden:
1. Schema Prisma tabla afiliados con TODOS los campos descritos
2. AfiliadosModule en NestJS (controller, service, repository, DTOs)
3. Endpoints: GET /afiliados (paginado + filtros), POST /afiliados,
   GET /afiliados/:id, PATCH /afiliados/:id,
   POST /afiliados/:id/carnet (generar QR token rotativo 24h),
   POST /afiliados/import (CSV/Excel con validación)
4. Validaciones Colombia: cédula (7-10 dígitos numéricos),
   NIT (9 dígitos + dígito verificación), celular (+57 + 10 dígitos)
5. Frontend: tabla de afiliados con búsqueda instantánea, filtros
   (estado, categoría, mora, antigüedad), perfil 360°, formulario
   de registro con stepper 3 pasos
6. Carné virtual: componente React Native con flip 3D, QR dinámico,
   glassmorphism con colores del tenant, logo del tenant

# MÓDULO 2 — MOTOR FINANCIERO
1. Schema: planes_cuota, cuotas, transacciones, creditos
2. Generación automática de cuotas (job cron el día 1 de cada mes)
3. Cobro automático vía Wompi (batch hasta 1000 afiliados/día)
4. Gestión de mora: job diario que marca vencidas y envía alertas
5. Módulo de crédito básico: solicitud → scoring → aprobación → desembolso
6. Conciliación bancaria: importar CSV/OFX del banco y match cuotas
7. Frontend: dashboard financiero con KPIs, tabla mora con acciones bulk,
   historial de pagos del afiliado, pasarela de pago en mobile

# MÓDULO 3 — COMUNICACIÓN OMNICANAL
1. Schema: comunicados, notificaciones_afiliado
2. Servicio de envío multicanal: email (SendGrid), SMS (Twilio),
   WhatsApp (Meta API), Push (FCM)
3. Segmentación dinámica: filtrar afiliados por categoría, estado,
   mora, antigüedad, municipio
4. Editor de comunicados: campos básicos + vista previa por canal
5. Cola de envío async con RabbitMQ (no bloquear HTTP)
6. Tracking: marcar como entregado/abierto vía webhooks

# MÓDULO 4 — EVENTOS Y ASAMBLEAS
1. Schema: eventos, evento_inscripciones, votaciones, votos
2. Creación de evento con aforo, modalidad, costo, link streaming
3. Inscripción online con pago opcional (Wompi)
4. Control asistencia: lector QR (usa cámara del dispositivo)
5. Votación electrónica: quórum automático, resultados WebSocket
6. Generador de acta automático: PDF con resultados y firmas

# MÓDULO 5 — BI Y ANÁLISIS
1. Dashboard ejecutivo: afiliados activos, recaudo, mora%, nuevos mes,
   retención, gráfico ingresos/egresos 12 meses, mapa calor Colombia
2. Reportes automáticos: Balance General, Estado de Resultados,
   Cartera de Crédito (formatos Supersolidaria)
3. Predicción deserción: Python FastAPI microservice, features:
   meses_mora, frecuencia_pago, participacion_eventos, antiguedad
   Output: score 0-100 visible en perfil del afiliado
4. Exportar cualquier tabla a Excel/PDF desde la UI

# MÓDULO 6 — MULTI-TENANCY Y BILLING
1. Schema: tenants, tenant_billing, tenant_invoices
2. Registro self-service de nuevo tenant (formulario → email verificación → 
   subdominio automático → seed data demo)
3. Panel superadmin: CRUD tenants, métricas MRR, actividad por tenant
4. White-label: API endpoint que devuelve configuración visual del tenant
   para que web y mobile rendericen con colores/logo correctos
5. Billing: contador de afiliados activos al final del mes,
   generación factura automática por plan

# MÓDULO 7 — CUMPLIMIENTO
1. Habeas Data: formulario en onboarding afiliado con políticas en texto,
   guardar aceptación (fecha, IP, versión política), PDF descargable
2. Audit log inmutable: todas las acciones CRUD registradas con before/after
3. SARLAFT básico: verificación manual contra listas (alertar si nombre
   aparece, no bloquear automáticamente — decisión humana)
4. Reportes DIAN: exportar en formato establecido por resolución vigente

# MÓDULO 8 — APP MOBILE (AFILIADO)
Pantallas en orden:
  Splash → Onboarding (org + cédula + OTP + PIN + biometría) →
  Home (carné + saldo puntos + próximo pago + eventos) →
  Mis Cuotas (lista + estado + pagar) →
  Beneficios (mapa aliados + cupones) →
  Eventos (calendario + inscripción) →
  Perfil (datos + beneficiarios + documentos + config)"""

new_fullprompt = """# MÓDULO 1 — CORE AFILIADOS & MULTI-TENANCY
1. Schema Prisma Multi-tenant (RLS) para afiliados, tenants y auth.
2. Validaciones Colombia (Cédula, NIT, Celular).
3. Dashboard Admin B2B y Onboarding con white-labeling (logo, colores).
4. Carné Virtual Móvil: QR dinámico, flip 3D, offline support, Apple Wallet/GPay.

# MÓDULO 2 — FINTECH & OPEN FINANCE (KILLER MODULE)
1. Cobro Automático Wompi/Nequi/PSE + Reconciliación Bancaria.
2. Open Finance (Belvo): Análisis de cartolas para pre-aprobar créditos en 1-click.
3. Seguros Embebidos: APIs de aseguradoras para pólizas deducidas de nómina.

# MÓDULO 3 — AGENTE IA TRANSACCIONAL (KILLER MODULE)
1. Python FastAPI service + LLM GPT-4o para atención 24/7 en App y WhatsApp.
2. Capacidades del Agente: Descarga certificados, pago cuotas, resolución PQR.
3. Chat in-app en panel admin para ver interacciones IA.

# MÓDULO 4 — PORTAL B2B NOMINA & RRHH (KILLER MODULE)
1. Portal especial para Empresas Empleadoras.
2. RRHH sube planilla de nómina -> auto-match con cuotas -> deducen de pago empresa.
3. Ahorro de horas en Excel para el tesorero de la cooperativa y el contador B2B.

# MÓDULO 5 — EVENTOS Y BLOCKCHAIN VOTING (KILLER MODULE)
1. Gestión de Asambleas: Quórum automático, streaming, control asistencia QR.
2. Votaciones Inmutables: Smart contracts en Polygon para garantizar que no hay fraude.
3. Hashes registrados por cédula verificables públicamente.

# MÓDULO 6 — GAMIFICACIÓN & NETWORKING (KILLER MODULE)
1. Motor de Puntos: Premia pronto pago, asistencia a asambleas y actualización de datos.
2. Niveles de Afiliado (Ej: Plata, Oro) atados a mejores tasas de crédito.
3. Bolsa de Empleo Interna (Job Board): Las empresas B2B buscan talento orgánico.

# MÓDULO 7 — COMUNICACIÓN OMNICANAL & CUMPLIMIENTO
1. Envío masivo Email, SMS, WhatsApp, Push con segmentación dinámica.
2. Cumplimiento Colombia: Habeas Data 1581 firmada, SARLAFT cruce en listas, DIAN facts.
3. Logs inmutables de auditoría."""

content = content.replace(old_fullprompt, new_fullprompt)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Prompt Tecnico Updated with Killer Modules!")


import re

file_path = "/Users/carlossabogal/Downloads/AfiliadosOS_Prompt_Tecnico.jsx"

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Replace block 1 Overview
old_overview_blocks = re.search(r'overview: {.*?blocks: \[.*?\n      },.*?\n      {.*?\n      }\n    ]\n  },', content, re.DOTALL)

if old_overview_blocks:
    new_overview = """overview: {
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
  },"""
    content = content.replace(old_overview_blocks.group(0), new_overview)
else:
    print("Could not find overview section")

# Replace Database Schema to match new focus
old_database_blocks = re.search(r'database: {.*?\n  },\n  backend:', content, re.DOTALL)

if old_database_blocks:
    new_db = """database: {
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
  backend:"""
    content = content.replace(old_database_blocks.group(0), new_db)
else:
    print("Could not find Database Schema section")


with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)
print("Updated Overview and Database Sections")

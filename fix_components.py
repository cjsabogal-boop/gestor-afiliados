import re

file_path = "/Users/carlossabogal/Downloads/AfiliadosOS_Prompt_Tecnico.jsx"

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Replace frontend routes
old_frontend_routes_block = re.search(r'RUTAS \(TanStack Router — file-based\):.*?COMPONENTES CLAVE:', content, re.DOTALL)

if old_frontend_routes_block:
    new_routes = """RUTAS (TanStack Router — file-based):

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

COMPONENTES CLAVE:"""
    content = content.replace(old_frontend_routes_block.group(0), new_routes)

# Replace dashboard spec
old_dashboard_spec = re.search(r'LAYOUT DASHBOARD \(primero que ve el admin al entrar\):.*?FILTRO GLOBAL:', content, re.DOTALL)

if old_dashboard_spec:
    new_dashboard = """LAYOUT DASHBOARD (VISTA ADMINISTRADOR):

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

FILTRO GLOBAL:"""
    content = content.replace(old_dashboard_spec.group(0), new_dashboard)

# Replace Mobile App Spec
old_mobile_spec = re.search(r'FLUJO ONBOARDING \(primera vez\):.*?WIDGET APPLE WALLET / GOOGLE PAY:', content, re.DOTALL)
if old_mobile_spec:
    new_mobile = """FLUJO ONBOARDING (primera vez):
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

APP WIDGET APPLE WALLET / GOOGLE PAY:"""
    content = content.replace(old_mobile_spec.group(0), new_mobile)

# Export changes
with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Replaced Components and Mobile section successfully.")

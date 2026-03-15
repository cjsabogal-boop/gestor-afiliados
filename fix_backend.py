import re

file_path = "/Users/carlossabogal/Downloads/AfiliadosOS_Prompt_Tecnico.jsx"

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Replace Endpoints to remove old modules and add new modules
old_endpoints = re.search(r'ENDPOINTS PRINCIPALES — AFILIADOS SERVICE.*?ADMIN_ORG\):', content, re.DOTALL)

if old_endpoints:
    new_endpoints = """ENDPOINTS PRINCIPALES (MONOLITO NESTJS)

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

TENANT (solo ADMIN_ORG):"""
    content = content.replace(old_endpoints.group(0), new_endpoints)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Replaced Backend Endpoints section successfully.")

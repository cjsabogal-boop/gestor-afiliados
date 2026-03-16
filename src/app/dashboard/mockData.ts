import { Sector } from './SectorProvider';

export const SECTOR_DATA = {
  medicos: {
    orgName: 'Asociación Médica Nacional',
    orgId: 'ACM-9021',
    roles: {
      admin: 'Administrador Médico',
      users: 'Asociados / Médicos',
      userSingular: 'Asociado',
      subLabel: 'Especialidad',
      idPrefix: 'ACM',
      payments: 'Cuotas Sindicales',
      spaces: 'Consultorios y Auditorios'
    },
    mockUsers: [
      { id: 'ACM-1021', name: 'Dr. Carlos E. Salamanca', property: 'Cirugía General', type: 'Asociado Activo', status: 'Al Día', amount: '$350,000' },
      { id: 'ACM-1285', name: 'Dra. Mariana Rodriguez', property: 'Pediatría', type: 'Asociado Junior', status: 'Moroso', amount: '$350,000' },
      { id: 'ACM-0453', name: 'Dr. Felipe Jaramillo', property: 'Medicina Interna', type: 'Asociado Emérito', status: 'Al Día', amount: '$0' },
      { id: 'ACM-2104', name: 'Fundación Cardio Vid', property: 'Institución', type: 'Socio Corporativo', status: 'Al Día', amount: '$850,000' }
    ],
    mockTransactions: [
      { id: 'TXN-ACM-91', evt: 'Reserva Confirmada (Auditorio)', user: 'Dr. Juan D.', time: 'Hace 5 min', val: '$150,000', col: 'text-[#0D9488]' },
      { id: 'TXN-ACM-92', evt: 'Pago de Membresía (Anual)', user: 'Dra. Marta Gomez', time: 'Hace 15 min', val: '$3,500,000', col: 'text-[#3B82F6]' },
      { id: 'TXN-ACM-93', evt: 'Check-in Asamblea General', user: 'Dr. Carlos Ruiz', time: 'Hace 1 hora', val: 'Quórum +0.5%', col: 'text-[#2563EB]' },
    ],
    mockSpaces: [
      { id: 'SP-1', name: 'Auditorio Principal', type: 'Eventos Múltiples', capacity: '250', status: 'Reservado' },
      { id: 'SP-2', name: 'Sala de Juntas B', type: 'Reuniones', capacity: '15', status: 'Disponible' },
    ]
  },
  club: {
    orgName: 'Country Club La Colina',
    orgId: 'CC-1940',
    roles: {
      admin: 'Gerencia Club',
      users: 'Socios / Acciones',
      userSingular: 'Socio',
      subLabel: 'Acción / Categoría',
      idPrefix: 'ACC',
      payments: 'Cuotas de Mantenimiento',
      spaces: 'Salones y Zonas Deportivas'
    },
    mockUsers: [
      { id: 'ACC-4050', name: 'Familia Jaramillo', property: 'Acción Golf', type: 'Socio Pleno', status: 'Al Día', amount: '$1,200,000' },
      { id: 'ACC-1285', name: 'Carlos Salamanca', property: 'Acción Tenis', type: 'Socio Invitado', status: 'Moroso', amount: '$800,000' },
      { id: 'ACC-0453', name: 'María de López', property: 'Acción Social', type: 'Socio Vitalicio', status: 'Al Día', amount: '$500,000' },
      { id: 'ACC-2104', name: 'Empresa Constructora S.A.', property: 'Acción Corporativa', type: 'Socio Corporativo', status: 'Al Día', amount: '$3,000,000' }
    ],
    mockTransactions: [
      { id: 'TXN-CC-91', evt: 'Reserva (Cancha Tenis #4)', user: 'Acción 4050 - Jaramillo', time: 'Hace 5 min', val: '$0', col: 'text-[#0D9488]' },
      { id: 'TXN-CC-92', evt: 'Pago Mantenimiento', user: 'Acción 1285 - Salamanca', time: 'Hace 15 min', val: '$1,200,000', col: 'text-[#3B82F6]' },
      { id: 'TXN-CC-93', evt: 'Consumo Restaurante', user: 'Acción 0453 - López', time: 'Hace 1 hora', val: '$145,000', col: 'text-[#F59E0B]' },
    ],
    mockSpaces: [
      { id: 'SP-1', name: 'Cancha de Tenis #1', type: 'Deportivo', capacity: '4', status: 'En Mantenimiento' },
      { id: 'SP-2', name: 'Salón Chablis', type: 'Eventos Sociales', capacity: '120', status: 'Reservado' },
    ]
  },
  pilotos: {
    orgName: 'Asociación de Capitanes ACDAC',
    orgId: 'ACDAC-1949',
    roles: {
      admin: 'Presidencia Sindicato',
      users: 'Pilotos / Primeros Oficiales',
      userSingular: 'Capitán',
      subLabel: 'Flota / Rango',
      idPrefix: 'PIL',
      payments: 'Aportes Sindicales',
      spaces: 'Simuladores y Salas'
    },
    mockUsers: [
      { id: 'PIL-1021', name: 'Cap. Andrés Vargas', property: 'A320 - Capitán', type: 'Afiliado Activo', status: 'Al Día', amount: '$150,000' },
      { id: 'PIL-1285', name: 'PO. Mariana Rodriguez', property: 'B787 - Primer Oficial', type: 'Afiliado Junior', status: 'Moroso', amount: '$100,000' },
      { id: 'PIL-0453', name: 'Cap. Felipe Jaramillo', property: 'A330 - Capitán Inst.', type: 'Afiliado Vitalicio', status: 'Al Día', amount: '$80,000' },
      { id: 'PIL-2104', name: 'Cap. Luis C. Sarmiento', property: 'B737 - Capitán', type: 'Miembro de Junta', status: 'Al Día', amount: '$150,000' }
    ],
    mockTransactions: [
      { id: 'TXN-PIL-91', evt: 'Aporte Mensual ACDAC', user: 'Cap. Vargas', time: 'Hace 5 min', val: '$150,000', col: 'text-[#0D9488]' },
      { id: 'TXN-PIL-92', evt: 'Reserva Asesoría Legal', user: 'PO. Rodriguez', time: 'Hace 15 min', val: 'Agendado', col: 'text-[#3B82F6]' },
      { id: 'TXN-PIL-93', evt: 'Votación Huelga Aérea', user: 'Cap. Jaramillo', time: 'Hace 1 hora', val: 'Voto Registrado', col: 'text-[#ef4444]' },
    ],
    mockSpaces: [
      { id: 'SP-1', name: 'Sala de Asesoría Legal 1', type: 'Asesorías', capacity: '4', status: 'Disponible' },
      { id: 'SP-2', name: 'Auditorio Sede Central', type: 'Asambleas', capacity: '300', status: 'Reservado' },
    ]
  },
  fondo: {
    orgName: 'Fondo de Empleados FEC',
    orgId: 'FEC-1980',
    roles: {
      admin: 'Junta Administradora',
      users: 'Asociados / Ahorradores',
      userSingular: 'Asociado',
      subLabel: 'Dependencia',
      idPrefix: 'CID',
      payments: 'Aportes y Créditos',
      spaces: 'Centros Vacacionales'
    },
    mockUsers: [
      { id: 'CID-1021', name: 'Carlos E. Salamanca', property: 'Recursos Humanos', type: 'Asociado Pleno', status: 'Al Día', amount: '$350,000' },
      { id: 'CID-1285', name: 'Mariana Rodriguez', property: 'Tecnología', type: 'Asociado', status: 'Moroso (Crédito)', amount: '$850,000' },
      { id: 'CID-0453', name: 'Felipe Jaramillo', property: 'Ventas', type: 'Delegado', status: 'Al Día', amount: '$150,000' },
      { id: 'CID-2104', name: 'Andrea Gómez', property: 'Finanzas', type: 'Comité de Crédito', status: 'Al Día', amount: '$450,000' }
    ],
    mockTransactions: [
      { id: 'TXN-FEC-91', evt: 'Abono Crédito Libre Inv.', user: 'Carlos E.', time: 'Hace 5 min', val: '$450,000', col: 'text-[#0D9488]' },
      { id: 'TXN-FEC-92', evt: 'Aporte Ahorro Permanente', user: 'Felipe J.', time: 'Hace 15 min', val: '$150,000', col: 'text-[#3B82F6]' },
      { id: 'TXN-FEC-93', evt: 'Reserva Centro Vacacional', user: 'Andrea G.', time: 'Hace 1 hora', val: '$650,000', col: 'text-[#F59E0B]' },
    ],
    mockSpaces: [
      { id: 'SP-1', name: 'Cabaña Melgar #4', type: 'Vacacional', capacity: '8', status: 'Reservado' },
      { id: 'SP-2', name: 'Salón de Capacitaciones', type: 'Reuniones', capacity: '40', status: 'Disponible' },
    ]
  }
};

export function getSectorData(sector: Sector) {
  return SECTOR_DATA[sector] || SECTOR_DATA['medicos'];
}

// ─── EDITA AQUÍ EL CONTENIDO REAL DE SAFETI ──────────────────────────────────

export const empresa = {
  nombre: 'Safeti',
  tagline: 'Soporte técnico especializado para empresas',
  descripcion: 'Brindamos servicios de soporte en campo, mantenimiento e infraestructura TI con cobertura en Quintana Roo y respuesta rápida.',
  whatsapp: '529981636866',       // ← número con código país, sin + ni espacios
  email: 'contacto@safeti.com.mx',
  telefono: '+52 9981636866',
}

export const servicios = [
  { id: 'soporte-campo',   titulo: 'Soporte técnico en campo',          descripcion: 'Atención presencial en las instalaciones del cliente. Diagnóstico, reparación y resolución de fallas de hardware y software.', icono: 'wrench' },
  { id: 'mantenimiento',   titulo: 'Mantenimiento preventivo y correctivo', descripcion: 'Planes de mantenimiento programado para equipos de cómputo, servidores, redes y periféricos.', icono: 'shield' },
  { id: 'infraestructura', titulo: 'Infraestructura tecnológica',        descripcion: 'Instalación y configuración de redes, cableado estructurado, switches, routers y equipos de comunicación.', icono: 'network' },
  { id: 'gestion-ti',      titulo: 'Gestión de TI',                     descripcion: 'Administración de activos tecnológicos, inventario de equipos y seguimiento de incidencias.', icono: 'monitor' },
]

export const diferenciadores = [
  { titulo: 'Respuesta rápida',       descripcion: 'Tiempo de respuesta garantizado. Técnicos disponibles para atender emergencias en el menor tiempo posible.' },
  { titulo: 'Experiencia certificada', descripcion: 'Ingenieros con certificaciones y años de experiencia en marcas líderes del mercado TI.' },
  { titulo: 'Cobertura amplia',        descripcion: 'Presencia en múltiples estados con red de técnicos distribuidos estratégicamente.' },
  { titulo: 'Seguimiento completo',    descripcion: 'Registro de cada servicio, evidencias fotográficas e historial de mantenimientos por cliente.' },
]

// ── CASOS DE ÉXITO ── agrega los reales de Safeti ────────────────────────────
export const casos = [
  {
    cliente:     'Prymenet',
    sector:      'Telecomunicaciones · Cancún',
    tipo:        'Soporte en campo',
    descripcion: 'Soporte técnico especializado para infraestructura BBVA a nivel regional. Atención a fallas en equipos, tabletas híbridas y conectividad en sucursales bancarias con tiempos de respuesta garantizados.',
    resultado:   'Cobertura activa en sucursales BBVA en Quintana Roo',
  },
  {
    cliente:     'Alsea',
    sector:      'Restaurantes · Sureste',
    tipo:        'Infraestructura y soporte',
    descripcion: 'Mantenimiento y soporte técnico para la infraestructura tecnológica de marcas como Banorte, Starbucks, Domino\'s y VIPS. Atención a fallas de equipos de punto de venta, redes y periféricos en múltiples unidades.',
    resultado:   'Múltiples marcas atendidas con respuesta en campo',
  },
  {
    cliente:     'Cadena de restaurantes',
    sector:      'Alimentos · Quintana Roo',
    tipo:        'Mantenimiento preventivo',
    descripcion: 'Planes de mantenimiento preventivo para equipos de cómputo y punto de venta en unidades de Starbucks, Domino\'s y VIPS. Reducción de tiempos de inactividad en horas pico.',
    resultado:   'Operación continua sin interrupciones en temporada alta',
  },
  {
    cliente:     'Sector bancario regional',
    sector:      'Finanzas · Caribe Mexicano',
    tipo:        'Soporte en campo',
    descripcion: 'Atención a incidencias y requerimientos de personal nuevo ingreso para sucursales bancarias en Cancún y la Riviera Maya. Soporte a tabletas híbridas, equipos de escritorio y conectividad.',
    resultado:   'Respuesta garantizada en zona hotelera y centro de Cancún',
  },
]

export const clientes = [
  // { nombre: 'Empresa ABC', logo: '/logos/abc.png' },
]

export const marcas = [
  'BBVA', 'Banorte', 'Starbucks', 'VIPS', 'Dominos',
]

export const cobertura = [
  'Cancún',
  'Puerto Morelos',
  'Playa del carmen',
  'Isla Mujeres',
  'Cozumel',
  'Chetumal',
  // Agrega más estados
]

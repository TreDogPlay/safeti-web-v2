// ─── EDITA AQUÍ EL CONTENIDO REAL DE SAFETI ──────────────────────────────────

export const empresa = {
  nombre: 'Safeti',
  tagline: 'Soporte técnico especializado para empresas',
  descripcion: 'Brindamos servicios de soporte en campo, mantenimiento e infraestructura TI con cobertura nacional y respuesta rápida.',
  whatsapp: '52XXXXXXXXXX',       // ← número con código país, sin + ni espacios
  email: 'contacto@safeti.com.mx',
  telefono: '+52 (XX) XXXX-XXXX',
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
    cliente:     'Empresa distribuidora nacional',
    sector:      'Logística · CDMX',
    tipo:        'Mantenimiento',
    descripcion: 'Implementamos un plan de mantenimiento preventivo para 120 equipos de cómputo distribuidos en 3 sucursales, reduciendo las fallas críticas significativamente.',
    resultado:   'Tiempo de inactividad reducido en un 70%',
  },
  {
    cliente:     'Cadena de tiendas de retail',
    sector:      'Retail · Jalisco',
    tipo:        'Infraestructura',
    descripcion: 'Diseño e instalación de red estructurada para 5 puntos de venta, incluyendo cableado Cat6, switches administrables y configuración de firewall.',
    resultado:   '5 sucursales conectadas en 3 semanas',
  },
  {
    cliente:     'Empresa de servicios financieros',
    sector:      'Finanzas · Nuevo León',
    tipo:        'Soporte en campo',
    descripcion: 'Atención prioritaria con SLA de 4 horas para 200 usuarios. Gestión de tickets, soporte remoto y visitas programadas quincenales.',
    resultado:   'SLA cumplido al 98% durante 12 meses',
  },
  // Agrega más casos aquí
]

export const clientes = [
  // { nombre: 'Empresa ABC', logo: '/logos/abc.png' },
]

export const marcas = [
  'Cisco', 'HP', 'Dell', 'Lenovo', 'Fortinet', 'Ubiquiti', 'APC', 'Epson',
]

export const cobertura = [
  'Ciudad de México',
  'Estado de México',
  'Jalisco',
  'Nuevo León',
  // Agrega más estados
]

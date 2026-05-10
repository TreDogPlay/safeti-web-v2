import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { diferenciadores } from '../data/content'

export default function PorQueSafeti() {
  const [ref, visible] = useScrollAnimation()
  return (
    <section id="por-que-safeti" className="section-padding bg-white">
      <div className="container-max" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className={`fade-up ${visible ? 'visible' : ''}`}>
            <span className="text-safeti-blue text-xs font-semibold uppercase tracking-widest">¿Por qué Safeti?</span>
            <h2 className="text-3xl md:text-4xl font-bold text-safeti-navy mt-3 mb-5">Técnicos que conocen<br/>tu infraestructura</h2>
            <p className="text-gray-500 leading-relaxed mb-4">No somos un call center. Enviamos ingenieros con experiencia real a resolver problemas directamente en tus instalaciones.</p>
            <p className="text-gray-500 leading-relaxed mb-8">Cada servicio queda documentado: evidencias fotográficas, tiempos de atención e historial completo para auditorías.</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="#contacto" className="px-5 py-3 bg-safeti-navy text-white font-semibold rounded-xl hover:bg-safeti-blue transition-colors text-center text-sm">
                Hablar con un especialista
              </a>
              <a href="#casos" className="px-5 py-3 border border-gray-200 text-gray-700 font-medium rounded-xl hover:border-safeti-blue hover:text-safeti-blue transition-colors text-center text-sm">
                Ver casos de éxito
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {diferenciadores.map((d, i) => (
              <div key={i} className={`fade-up d${i+1} ${visible ? 'visible' : ''} p-5 rounded-2xl border border-gray-100 hover:border-safeti-blue/20 hover:shadow-md transition-all bg-safeti-gray group`}>
                <div className="w-9 h-9 bg-safeti-navy group-hover:bg-safeti-blue rounded-xl flex items-center justify-center mb-4 transition-colors">
                  <span className="text-white text-xs font-bold">{String(i+1).padStart(2,'0')}</span>
                </div>
                <h4 className="font-bold text-safeti-navy mb-2 text-sm">{d.titulo}</h4>
                <p className="text-xs text-gray-500 leading-relaxed">{d.descripcion}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

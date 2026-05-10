import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { cobertura } from '../data/content'

export default function Cobertura() {
  const [ref, visible] = useScrollAnimation()
  return (
    <section id="cobertura" className="section-padding bg-safeti-gray">
      <div className="container-max" ref={ref}>
        <div className={`text-center mb-14 fade-up ${visible ? 'visible' : ''}`}>
          <span className="text-safeti-blue text-xs font-semibold uppercase tracking-widest">Cobertura</span>
          <h2 className="text-3xl md:text-4xl font-bold text-safeti-navy mt-3 mb-4">Presencia donde tu empresa opera</h2>
          <p className="text-gray-500 max-w-lg mx-auto">Técnicos distribuidos estratégicamente para dar respuesta rápida en Quintana Roo.</p>
        </div>
        <div className={`fade-up d1 ${visible ? 'visible' : ''} flex flex-wrap justify-center gap-3 mb-10`}>
          {cobertura.map((estado, i) => (
            <div key={estado} className="flex items-center gap-2.5 bg-white border border-gray-100 rounded-xl px-4 py-2.5 shadow-sm hover:border-safeti-teal/30 hover:shadow-md transition-all">
              <div className="w-2 h-2 rounded-full bg-safeti-teal flex-shrink-0" />
              <span className="text-sm font-medium text-gray-700">{estado}</span>
            </div>
          ))}
        </div>
        <div className={`fade-up d2 ${visible ? 'visible' : ''} text-center`}>
          <p className="text-sm text-gray-400">¿No ves tu ciudad? <a href="#contacto" className="text-safeti-blue font-medium hover:underline">Contáctanos</a> — ampliamos cobertura constantemente.</p>
        </div>
      </div>
    </section>
  )
}

import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { casos } from '../data/content'

const colores = [
  { bg: 'bg-blue-50',   border: 'border-blue-100',   dot: 'bg-safeti-blue',  tag: 'bg-safeti-light text-blue-700' },
  { bg: 'bg-teal-50',   border: 'border-teal-100',   dot: 'bg-safeti-teal',  tag: 'bg-teal-50 text-teal-700' },
  { bg: 'bg-indigo-50', border: 'border-indigo-100', dot: 'bg-indigo-500',   tag: 'bg-indigo-50 text-indigo-700' },
]

export default function Casos() {
  const [ref, visible] = useScrollAnimation()
  if (!casos || casos.length === 0) return null
  return (
    <section id="casos" className="section-padding bg-safeti-navy">
      <div className="container-max" ref={ref}>
        <div className={`text-center mb-14 fade-up ${visible ? 'visible' : ''}`}>
          <span className="text-safeti-blue text-xs font-semibold uppercase tracking-widest">Casos de éxito</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-4">Proyectos que hablan por nosotros</h2>
          <p className="text-white/55 max-w-lg mx-auto">Resultados reales en empresas de distintos sectores y tamaños.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {casos.map((c, i) => {
            const color = colores[i % colores.length]
            return (
              <div key={i} className={`fade-up d${i+1} ${visible ? 'visible' : ''} bg-white rounded-2xl p-6 border ${color.border} flex flex-col gap-4`}>
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="font-bold text-safeti-navy text-sm">{c.cliente}</p>
                    <p className="text-xs text-gray-400 mt-0.5">{c.sector}</p>
                  </div>
                  <span className={`text-xs font-medium px-3 py-1 rounded-full flex-shrink-0 ${color.tag}`}>{c.tipo}</span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed flex-1">"{c.descripcion}"</p>
                {c.resultado && (
                  <div className="pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${color.dot}`} />
                      <span className="text-xs font-semibold text-gray-700">{c.resultado}</span>
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { clientes, marcas } from '../data/content'

export default function Clientes() {
  const [ref, visible] = useScrollAnimation()
  return (
    <section id="clientes" className="section-padding bg-white">
      <div className="container-max" ref={ref}>
        <div className={`text-center mb-12 fade-up ${visible ? 'visible' : ''}`}>
          <span className="text-safeti-blue text-xs font-semibold uppercase tracking-widest">Clientes y marcas</span>
          <h2 className="text-3xl md:text-4xl font-bold text-safeti-navy mt-3 mb-4">Empresas que confían en Safeti</h2>
          <p className="text-gray-500 max-w-lg mx-auto">Trabajamos con marcas líderes del mercado TI y empresas de distintos sectores de Quintana Roo.</p>
        </div>

        {/* Marcas */}
        <div className={`fade-up d1 ${visible ? 'visible' : ''} flex flex-wrap justify-center gap-3 mb-12`}>
          {marcas.map(m => (
            <span key={m} className="px-5 py-2.5 bg-safeti-gray border border-gray-100 text-gray-600 rounded-xl text-sm font-medium hover:border-safeti-blue/30 hover:text-safeti-blue transition-colors">
              {m}
            </span>
          ))}
        </div>

        {/* Logos clientes */}
        {clientes.length > 0 && (
          <div className={`fade-up d2 ${visible ? 'visible' : ''} grid grid-cols-2 md:grid-cols-4 gap-4`}>
            {clientes.map(c => (
              <div key={c.nombre} className="bg-safeti-gray rounded-xl p-5 flex items-center justify-center border border-gray-100 hover:border-safeti-blue/20 transition-colors">
                {c.logo
                  ? <img src={c.logo} alt={c.nombre} className="max-h-10 object-contain" />
                  : <span className="text-sm font-semibold text-gray-600">{c.nombre}</span>}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

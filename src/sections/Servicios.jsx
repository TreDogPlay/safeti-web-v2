import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { servicios } from '../data/content'

const iconos = {
  wrench: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" /></svg>,
  shield: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>,
  network: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" /></svg>,
  monitor: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0H3" /></svg>,
}

const delays = ['d1','d2','d3','d4']

export default function Servicios() {
  const [ref, visible] = useScrollAnimation()
  return (
    <section id="servicios" className="section-padding bg-safeti-gray">
      <div className="container-max" ref={ref}>
        <div className={`text-center mb-14 fade-up ${visible ? 'visible' : ''}`}>
          <span className="text-safeti-blue text-xs font-semibold uppercase tracking-widest">Servicios</span>
          <h2 className="text-3xl md:text-4xl font-bold text-safeti-navy mt-3 mb-4">Lo que hacemos por tu empresa</h2>
          <p className="text-gray-500 max-w-lg mx-auto leading-relaxed">Soluciones técnicas completas para mantener tu infraestructura operando sin interrupciones.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {servicios.map((s, i) => (
            <div key={s.id} className={`fade-up ${delays[i]} ${visible ? 'visible' : ''} bg-white rounded-2xl p-7 border border-gray-100 hover:border-safeti-blue/25 hover:shadow-lg transition-all duration-300 group cursor-default`}>
              <div className="w-12 h-12 bg-safeti-light rounded-xl flex items-center justify-center text-safeti-blue mb-5 group-hover:bg-safeti-navy group-hover:text-white transition-all duration-300">
                {iconos[s.icono]}
              </div>
              <h3 className="font-bold text-safeti-navy text-lg mb-2">{s.titulo}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{s.descripcion}</p>
              <div className="mt-5 pt-4 border-t border-gray-50 flex items-center gap-2 text-safeti-blue text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                <span>Más información</span>
                <span>→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

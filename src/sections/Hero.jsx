import { useEffect, useState } from 'react'
import { empresa } from '../data/content'

const stats = [
  { valor: '10+', label: 'Años de experiencia' },
  { valor: '200+', label: 'Clientes atendidos' },
  { valor: '15+', label: 'Estados con cobertura' },
  { valor: '24/7', label: 'Soporte disponible' },
]

export default function Hero() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => { const t = setTimeout(() => setMounted(true), 80); return () => clearTimeout(t) }, [])

  return (
    <section id="inicio" className="relative min-h-screen bg-safeti-navy flex items-center overflow-hidden">
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.07]"
        style={{backgroundImage:'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize:'36px 36px'}} />
      {/* Glow accent */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-safeti-blue/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-safeti-teal/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container-max section-padding relative z-10 w-full">
        <div className="max-w-3xl">
          <div className={`transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
            <span className="inline-flex items-center gap-2 bg-white/10 border border-white/15 text-white/80 text-xs font-medium px-4 py-1.5 rounded-full mb-6 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-safeti-teal animate-pulse" />
              Soporte técnico en campo · Respuesta garantizada
            </span>
          </div>
          <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6 transition-all duration-700 delay-100 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
            Infraestructura TI<br />
            que <span className="text-safeti-blue relative">no se detiene
              <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 200 8" fill="none">
                <path d="M0 6 Q100 0 200 6" stroke="#2F80ED" strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
              </svg>
            </span>
          </h1>
          <p className={`text-lg text-white/65 leading-relaxed max-w-xl mb-8 transition-all duration-700 delay-200 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
            {empresa.descripcion}
          </p>
          <div className={`flex flex-col sm:flex-row gap-3 transition-all duration-700 delay-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
            <a href="#contacto"
              className="px-6 py-3 bg-safeti-blue text-white font-semibold rounded-xl hover:bg-blue-600 active:scale-95 transition-all text-center shadow-lg shadow-blue-900/30">
              Solicitar servicio
            </a>
            <a href="#servicios"
              className="px-6 py-3 border border-white/20 text-white font-medium rounded-xl hover:bg-white/10 active:scale-95 transition-all text-center backdrop-blur-sm">
              Ver servicios →
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className={`mt-16 pt-10 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 transition-all duration-700 delay-500 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
          {stats.map((s, i) => (
            <div key={s.label} className="group">
              <div className="text-3xl font-bold text-white group-hover:text-safeti-blue transition-colors">{s.valor}</div>
              <div className="text-sm text-white/50 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent" />
      </div>
    </section>
  )
}

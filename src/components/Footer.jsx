import { empresa, servicios, cobertura } from '../data/content'

export default function Footer() {
  return (
    <footer className="bg-safeti-dark text-white/60 pt-16 pb-8 px-4 md:px-8 lg:px-16">
      <div className="container-max">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-10 border-b border-white/10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-safeti-blue rounded-lg flex items-center justify-center">
                <span className="text-white text-xs font-bold">SF</span>
              </div>
              <span className="text-white font-bold text-lg">{empresa.nombre}</span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs mb-5">{empresa.descripcion}</p>
            <div className="flex gap-3">
              <a href={`mailto:${empresa.email}`} className="text-xs hover:text-white transition-colors">{empresa.email}</a>
              <span className="text-white/20">·</span>
              <a href={`tel:${empresa.telefono}`} className="text-xs hover:text-white transition-colors">{empresa.telefono}</a>
            </div>
          </div>
          <div>
            <p className="text-white text-sm font-semibold mb-4">Servicios</p>
            <ul className="flex flex-col gap-2">
              {servicios.map(s => (
                <li key={s.id}><a href="#servicios" className="text-sm hover:text-white transition-colors">{s.titulo}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-white text-sm font-semibold mb-4">Cobertura</p>
            <ul className="flex flex-col gap-2">
              {cobertura.slice(0,5).map(e => (
                <li key={e} className="text-sm">{e}</li>
              ))}
              {cobertura.length > 5 && <li className="text-xs text-safeti-blue">+{cobertura.length - 5} estados más</li>}
            </ul>
          </div>
        </div>
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <span>© {new Date().getFullYear()} {empresa.nombre}. Todos los derechos reservados.</span>
          <a href="#" className="hover:text-white transition-colors">Subir ↑</a>
        </div>
      </div>
    </footer>
  )
}

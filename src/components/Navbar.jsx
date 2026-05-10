import { useState, useEffect } from 'react'
import { empresa } from '../data/content'

const links = [
  { label: 'Servicios',   href: '#servicios' },
  { label: 'Nosotros',    href: '#por-que-safeti' },
  { label: 'Casos',       href: '#casos' },
  { label: 'Clientes',    href: '#clientes' },
  { label: 'Cobertura',   href: '#cobertura' },
  { label: 'Contacto',    href: '#contacto' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)
  const [active, setActive]     = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleLink = (href) => { setOpen(false); setActive(href) }

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300
      ${scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100' : 'bg-transparent'}`}>
      <div className="container-max flex items-center justify-between h-16 px-4 md:px-8 lg:px-16">
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-safeti-navy rounded-lg flex items-center justify-center group-hover:bg-safeti-blue transition-colors">
            <span className="text-white text-xs font-bold tracking-tight">SF</span>
          </div>
          <span className={`font-bold text-lg tracking-tight transition-colors ${scrolled ? 'text-safeti-navy' : 'text-white'}`}>
            {empresa.nombre}
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => handleLink(l.href)}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors
                ${scrolled
                  ? 'text-gray-600 hover:text-safeti-navy hover:bg-safeti-light'
                  : 'text-white/85 hover:text-white hover:bg-white/10'}`}>
              {l.label}
            </a>
          ))}
          <a href="#contacto"
            className="ml-3 px-4 py-2 bg-safeti-blue text-white text-sm font-semibold rounded-lg hover:bg-blue-600 active:scale-95 transition-all shadow-sm">
            Solicitar servicio
          </a>
        </nav>

        <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-md"
          aria-label="Menú">
          <div className={`w-5 h-0.5 mb-1.5 rounded transition-all duration-300 ${scrolled ? 'bg-gray-700' : 'bg-white'} ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <div className={`w-5 h-0.5 mb-1.5 rounded transition-all duration-300 ${scrolled ? 'bg-gray-700' : 'bg-white'} ${open ? 'opacity-0' : ''}`} />
          <div className={`w-5 h-0.5 rounded transition-all duration-300 ${scrolled ? 'bg-gray-700' : 'bg-white'} ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      <div className={`md:hidden overflow-hidden transition-all duration-300 ${open ? 'max-h-96' : 'max-h-0'}`}>
        <div className="bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-1">
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => handleLink(l.href)}
              className="text-sm font-medium text-gray-700 hover:text-safeti-blue hover:bg-safeti-light px-3 py-2.5 rounded-md transition-colors">
              {l.label}
            </a>
          ))}
          <a href="#contacto" onClick={() => setOpen(false)}
            className="mt-2 px-4 py-3 bg-safeti-blue text-white text-sm font-semibold rounded-lg text-center">
            Solicitar servicio
          </a>
        </div>
      </div>
    </header>
  )
}

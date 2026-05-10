import { useState } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { empresa } from '../data/content'

const FORMSPREE_ID = 'mpqbkzak' // ← reemplazar con tu ID de formspree.io

export default function Contacto() {
  const [ref, visible] = useScrollAnimation()
  const [estado, setEstado] = useState('idle')
  const [form, setForm] = useState({ nombre: '', empresa: '', telefono: '', servicio: '', mensaje: '' })

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async e => {
    e.preventDefault()
    setEstado('enviando')
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })
      setEstado(res.ok ? 'ok' : 'error')
    } catch { setEstado('error') }
  }

  const info = [
    { icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>, label: 'Email', valor: empresa.email, href: `mailto:${empresa.email}` },
    { icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>, label: 'Teléfono', valor: empresa.telefono, href: `tel:${empresa.telefono}` },
  ]

  return (
    <section id="contacto" className="section-padding bg-white">
      <div className="container-max" ref={ref}>
        <div className={`text-center mb-14 fade-up ${visible ? 'visible' : ''}`}>
          <span className="text-safeti-blue text-xs font-semibold uppercase tracking-widest">Contacto</span>
          <h2 className="text-3xl md:text-4xl font-bold text-safeti-navy mt-3 mb-4">Hablemos sobre tu proyecto</h2>
          <p className="text-gray-500 max-w-lg mx-auto">Cuéntanos qué necesitas. Respondemos en menos de 24 horas con una propuesta personalizada.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Info lateral */}
          <div className={`lg:col-span-2 fade-up d1 ${visible ? 'visible' : ''} flex flex-col gap-6`}>
            {info.map(item => (
              <a key={item.label} href={item.href}
                className="flex items-center gap-4 p-5 bg-safeti-gray rounded-2xl border border-gray-100 hover:border-safeti-blue/30 hover:shadow-md transition-all group">
                <div className="w-11 h-11 bg-safeti-light rounded-xl flex items-center justify-center text-safeti-blue flex-shrink-0 group-hover:bg-safeti-navy group-hover:text-white transition-colors">
                  {item.icon}
                </div>
                <div>
                  <p className="text-xs text-gray-400 mb-0.5">{item.label}</p>
                  <p className="text-sm font-semibold text-safeti-navy">{item.valor}</p>
                </div>
              </a>
            ))}
            <div className="p-5 bg-green-50 rounded-2xl border border-green-100">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs font-semibold text-green-700">Respuesta rápida por WhatsApp</span>
              </div>
              <p className="text-xs text-green-600 leading-relaxed">Para urgencias o consultas rápidas, escríbenos directamente por WhatsApp.</p>
              <a href={`https://wa.me/${empresa.whatsapp}`} target="_blank" rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-2 text-xs font-semibold text-green-700 hover:underline">
                Abrir WhatsApp →
              </a>
            </div>
          </div>

          {/* Formulario */}
          <div className={`lg:col-span-3 fade-up d2 ${visible ? 'visible' : ''}`}>
            {estado === 'ok' ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16 bg-safeti-gray rounded-2xl border border-gray-100">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
                  <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </div>
                <h3 className="text-xl font-bold text-safeti-navy mb-2">¡Mensaje enviado!</h3>
                <p className="text-gray-500 text-sm max-w-xs">Te contactaremos en menos de 24 horas hábiles con una propuesta para tu empresa.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-safeti-gray rounded-2xl p-7 border border-gray-100 flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5">Nombre completo *</label>
                    <input name="nombre" required value={form.nombre} onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm bg-white focus:outline-none focus:border-safeti-blue focus:ring-1 focus:ring-safeti-blue/20 transition-all"
                      placeholder="Tu nombre" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5">Empresa</label>
                    <input name="empresa" value={form.empresa} onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm bg-white focus:outline-none focus:border-safeti-blue focus:ring-1 focus:ring-safeti-blue/20 transition-all"
                      placeholder="Nombre de tu empresa" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5">Teléfono</label>
                    <input name="telefono" type="tel" value={form.telefono} onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm bg-white focus:outline-none focus:border-safeti-blue focus:ring-1 focus:ring-safeti-blue/20 transition-all"
                      placeholder="+52 55 0000 0000" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5">Servicio de interés</label>
                    <select name="servicio" value={form.servicio} onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm bg-white focus:outline-none focus:border-safeti-blue transition-all text-gray-600">
                      <option value="">Seleccionar...</option>
                      <option>Soporte técnico en campo</option>
                      <option>Mantenimiento preventivo</option>
                      <option>Infraestructura tecnológica</option>
                      <option>Gestión de TI</option>
                      <option>Otro</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5">¿En qué podemos ayudarte? *</label>
                  <textarea name="mensaje" required rows={4} value={form.mensaje} onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm bg-white focus:outline-none focus:border-safeti-blue focus:ring-1 focus:ring-safeti-blue/20 transition-all resize-none"
                    placeholder="Describe tu necesidad, el tipo de equipo, número de usuarios o lo que necesites..." />
                </div>
                {estado === 'error' && (
                  <p className="text-red-500 text-xs bg-red-50 border border-red-100 rounded-lg px-4 py-2.5">
                    Hubo un error al enviar. Por favor intenta por WhatsApp o correo directamente.
                  </p>
                )}
                <button type="submit" disabled={estado === 'enviando'}
                  className="w-full py-3.5 bg-safeti-blue text-white font-semibold rounded-xl hover:bg-blue-600 active:scale-[0.98] transition-all disabled:opacity-60 shadow-md shadow-blue-200">
                  {estado === 'enviando' ? 'Enviando...' : 'Enviar mensaje →'}
                </button>
                <p className="text-center text-xs text-gray-400">Tus datos están seguros y no serán compartidos con terceros.</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

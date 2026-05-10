import Navbar        from './components/Navbar'
import Footer        from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import Hero          from './sections/Hero'
import Servicios     from './sections/Servicios'
import PorQueSafeti  from './sections/PorQueSafeti'
import Casos         from './sections/Casos'
import Clientes      from './sections/Clientes'
import Cobertura     from './sections/Cobertura'
import Contacto      from './sections/Contacto'

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Servicios />
        <PorQueSafeti />
        <Casos />
        <Clientes />
        <Cobertura />
        <Contacto />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

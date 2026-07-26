import { useState, useEffect } from 'react';
import { Shield, Camera, Wifi, Server, Settings, Phone, Mail, MapPin, Clock, Lock } from 'lucide-react';
import { Bot } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import { submitContactForm } from './lib/supabase';
import toast, { Toaster } from 'react-hot-toast';

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const slides = [
    {
      url: "https://i.pinimg.com/736x/da/26/2f/da262f0192d7d7a4e95bead0f81bcee0.jpg",
      title: "Sistemas de Vigilancia Profesional"
    },
    {
      url: "https://mfs.ezvizlife.com/013321387e6e75043dcf7490f741f0cb.jpg?ver=3391999712",
      title: "Instalación Profesional"
    },
    {
      url: "https://i.pinimg.com/736x/cd/df/e7/cddfe74d5a278fdc8c21e8ba9951577a.jpg",
      title: "Tecnología de Punta"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    
    const form = e.target;
    const formData = new FormData(form);
    
    // Validate form
    const name = formData.get('name');
    const email = formData.get('email');
    const service = formData.get('service');
    const message = formData.get('message');
    
    if (!name || !email || !message) {
      toast.error('Por favor complete todos los campos requeridos');
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const contactData = {
        name: name.toString(),
        email: email.toString(),
        phone: formData.get('phone')?.toString() || '',
        message: message.toString(),
        service_type: service?.toString() || 'Consulta general'
      };
      
      await submitContactForm(contactData);
      
      toast.success('¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.');
      form.reset();
    } catch (error) {
      console.error('Error submitting contact form:', error);
      toast.error('Hubo un error al enviar el formulario. Por favor intente nuevamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Toaster position="top-center" />
      <Navbar />
      {/* Hero Section */}
      <header className="relative h-[600px] overflow-hidden">
        {/* Slider */}
        <div className="absolute inset-0">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                currentSlide === index ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div className="absolute inset-0 bg-black/50 z-10" />
              <img
                src={slide.url}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Content */}
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center">
          <div className="text-center mb-8">
            <h2 className="text-white text-4x2 md:text-4xl font-bold mb-2">
              SKYLINKS
            </h2>
            <p className="text-white text-lg font-bold md:text-x2">
              TELECOMUNICACIONES VOZ & DATOS
            </p>
          </div>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Instalaciones de video camaras 
              seguridad para tu hogar y negocio
            </h1>
            <p className="text-xl mb-8 text-white">
              soluciones en : alarmas de seguridad , redes wifi e internet
            </p>
            <a
              href="#contacto"
              className="inline-block bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Contáctanos
            </a>
          </div>
        </div>

        {/* Slider Navigation */}
        <div className="absolute bottom-4 left-0 right-0 z-20 flex justify-center gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                currentSlide === index ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </header>

      {/* Servicios */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nuestros Servicios</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link to="/camaras-seguridad" className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-blue-600 mb-4">
                <Camera className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Cámaras de Seguridad</h3>
              <p className="text-gray-600">
                Instalación de sistemas NVR, DVR y cámaras WiFi de marcas líderes como Dahua, Hikvision, IMOU y EZVIZ.
              </p>
            </Link>

            <Link to="/alarmas-seguridad" className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-blue-600 mb-4">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Alarmas de Seguridad</h3>
              <p className="text-gray-600">
                Sistemas de alarma profesionales para hogares y empresas con monitoreo 24/7.
              </p>
            </Link>

            <Link to="/cyber-security" className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-blue-600 mb-4">
                <Lock className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Ciberseguridad</h3>
              <p className="text-gray-600">
                Consultoría en ciberseguridad empresarial, auditorías, implementación de seguridad y capacitación.
              </p>
            </Link>

            <Link to="/gestion-idf" className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-blue-600 mb-4">
                <Server className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Gestión de IDF</h3>
              <p className="text-gray-600">
                Instalación y configuración de gabinetes de red, cableado estructurado y equipamiento.
              </p>
            </Link>

            <Link to="/configuracion-red" className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-blue-600 mb-4">
                <Settings className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Configuración de Red</h3>
              <p className="text-gray-600">
                Configuración profesional de switches, routers y equipos de networking.
              </p>
            </Link>

            <Link to="/redes-wifi" className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-blue-600 mb-4">
                <Wifi className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Redes WiFi</h3>
              <p className="text-gray-600">
                Diseño e implementación de redes inalámbricas empresariales y residenciales.
              </p>
            </Link>

            <Link to="/automatizaciones-ia" className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-blue-600 mb-4">
                <Bot className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Automatizaciones IA</h3>
              <p className="text-gray-600">
                Asistentes de IA para WhatsApp que califican leads, agendan citas y automatizan tareas repetitivas.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Marcas */}
     <section className="py-16 relative">
       {/* Título colocado con z-index mayor y fondo semitransparente para asegurar visibilidad */}
       <div className="relative z-20 mb-8 bg-white/80 py-4 rounded-lg shadow-md">
         <h2 className="text-3xl font-bold text-center">Marcas de Confianza</h2>
       </div>
       
       {/* Fondo de imagen con z-index menor */}
       <div 
         className="absolute inset-0 z-10"
         style={{
           backgroundImage: "url('https://tvc.mx/2024/directoriopc.png')",
           backgroundSize: 'cover',
           backgroundPosition: 'center',
           backgroundRepeat: 'no-repeat',
           opacity: 0.8
         }}
       ></div>
       
       <div className="container mx-auto px-4 relative z-20">
         <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
           <BrandLogo 
             name="Dahua" 
             logoUrl="https://www.dahuasecurity.com/_nuxt/img/LOGO_header.57e0e23.png" 
           />
           <BrandLogo 
             name="Hikvision" 
             logoUrl="https://ftp3.syscom.mx/usuarios/fotos/logotipos/hikvision.png" 
           />
           <BrandLogo 
             name="IMOU" 
             logoUrl="https://i.pinimg.com/1200x/2e/28/bf/2e28bfa8429aa649f84f3ef8bed7028f.jpg" 
           />
           <BrandLogo 
             name="EZVIZ" 
             logoUrl="https://imgs.search.brave.com/kwHdzGGGU28brszwA9d5j1B4qNqRt_s0kvrDIvyRr_o/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9saDMu/Z29vZ2xldXNlcmNv/bnRlbnQuY29tL1RC/NmExNFNqNkg3ZTZ2/MTVwSVd2bWFjeTVw/cTRNVHh2bVRfZW9E/azhLdlNUR2VfajN0/M09RVUtndmJJaTVo/Tk1DMEw0c2hkdzRW/aTR5bW5IS003aW1R/TlM4c09hTS1admJn/PXMw" 
           />
           <BrandLogo 
             name="Ubiquiti" 
             logoUrl="https://u-networks.com.mx/wp-content/uploads/2022/10/logo-ubiquiti-300x100.png" 
           />
           <BrandLogo 
             name="TP-Link" 
             logoUrl="https://assets.mmsrg.com/isr/166325/c1/-/pixelboxx-mss-76852110/mobilecms_x_72_png" 
           />
           <BrandLogo 
             name="Grandstream" 
             logoUrl="https://www.grandstream.com/hs-fs/hubfs/raw_assets/public/Grandstream_Feb_2021/images/logo-grandstream-low-web.png?width=300&height=102&name=logo-grandstream-low-web.png" 
           />
           <BrandLogo 
             name="Ruijie Networks" 
             logoUrl="https://www.wdcmayorista.com/almacenamiento/img/logo-ruijie.png" 
           />
         </div>
       </div>
     </section>

   {/* Contacto */}
<section id="contacto" className="py-16">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold text-center mb-12">Contáctanos</h2>
    <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
      <div className="space-y-6">
        <ContactInfo
          icon={<Phone className="w-6 h-6" />}
          title="Teléfono"
          info="+52 622 122 5103"
        />
        <ContactInfo
          icon={<Mail className="w-6 h-6" />}
          title="Email"
          info="skylinksonora@gmail.com"
        />
        <ContactInfo
          icon={<MapPin className="w-6 h-6" />}
          title="Dirección"
          info="Guaymas y San carlos"
        />
        <ContactInfo
          icon={<Clock className="w-6 h-6" />}
          title="Horario"
          info="Lunes a Sábado: 9:00 - 17:00"
        />
      </div>
      <form className="space-y-4" onSubmit={handleContactSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          required
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Teléfono (opcional)"
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
        />
        <select
          name="service"
          defaultValue=""
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
        >
          <option value="" disabled>Selecciona un servicio</option>
          <option value="instalacion-camaras">Instalación de Cámaras</option>
          <option value="instalacion-configuracion-idf">Instalación y Configuración de IDF</option>
          <option value="venta-equipos">Venta de Equipos</option>
          <option value="soporte-tecnico">Soporte Técnico</option>
        </select>
        <textarea
          name="message"
          placeholder="Mensaje"
          required
          rows={4}
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
        ></textarea>
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors ${
            isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
          }`}
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Enviando...
            </span>
          ) : (
            'Enviar Mensaje'
          )}
        </button>
      </form>
    </div>
  </div>
</section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© 2024 SKYLINKS telecomunicaciones voz & datos. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

function BrandLogo({ name, logoUrl }) {
  return (
    <div className="group relative bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:bg-blue-50 w-full h-32 flex flex-col items-center justify-center overflow-hidden">
      <div className="h-16 w-full flex items-center justify-center mb-2">
        <img 
          src={logoUrl} 
          alt={`Logo de ${name}`} 
          className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-110" 
        />
      </div>
      <span className="font-semibold text-gray-800 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute bottom-2">{name}</span>
      <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-5 rounded-lg transition-opacity duration-300"></div>
    </div>
  );
}

function ContactInfo({ icon, title, info }) {
  return (
    <div className="flex items-start space-x-4">
      <div className="text-blue-600">{icon}</div>
      <div>
        <h4 className="font-semibold">{title}</h4>
        <p className="text-gray-600">{info}</p>
      </div>
    </div>
  );
}

export default App;
import React, { useState } from 'react';
import { Home, Shield, Wifi, Lightbulb, Check, X } from 'lucide-react';
import Navbar from '../components/Navbar';
import QuoteRequestForm from '../components/QuoteRequestForm';

// Tipado para el producto
type Product = {
  id: string;
  name: string;
  img: string;
  price: string;
  features: string[];
};

const catalogData: Record<string, Product[]> = {
  'Chapas de Seguridad': [
    {
      id: 'csl2s',
      name: 'Cerradura EZVIZ CSL2S',
      img: 'https://ftp3.syscom.mx/usuarios/fotos/BancoFotografiasSyscom/EZVIZ/CSL2S/CSL2S-LIST-h.PNG',
      price: '$4,968.14 MXN',
      features: [
        'Lectura de huella dactilar',
        'Código temporal para visitantes',
        'Timbre integrado',
        'Alarma anti-intrusión',
        'Protocolo Zigbee'
      ]
    },
    {
      id: 'yale-ymf40-A',
      name: 'Cerradura Yale YMF40',
      img: 'https://m.media-amazon.com/images/I/61XORg475bL._AC_SY879_.jpg',
      price: '$7,499 MXN',
      features: [
        'Apertura por app móvil',
        'Huella y contraseña',
        'Batería de larga duración',
        'Diseño moderno',
        'Instalación en puertas estándar'
      ]
    },
    {
      id: 'Tock Lock - Cerradura Electrónica Inteligente',
      name: 'Tock Lock - Cerradura Electrónica Inteligente',
      img: 'https://m.media-amazon.com/images/I/513Txfv3EGL._AC_SX425_.jpg',
      price: '$4,009.1 MXN',
      features: [
        'Apertura Inteligente',
        'Control por APP',
        'Resistente a la intemperie'
      ]
    },
    {
      id: 'ULTRALOQ',
      name: 'Cerradura Inteligente WiFi con Huella Dactilar',
      img: 'https://m.media-amazon.com/images/I/61W+M+VHP3L._AC_SX425_.jpg',
      price: '$3,064.99 MXN',
      features: [
        'lector de huella dactilar',
        'Control desde APP',
        'Modo privado',
        'Control por voz con Siri o Alexa',
        'Cifrado de grado militar'
      ]
    },
    {
      id: 'TP-Link Tapo',
      name: 'TP-Link Tapo Cerradura inteligente ',
      img: 'https://m.media-amazon.com/images/I/717rBdu8LVL._AC_SX425_.jpg',
      price: '$3,924.19 MXN',
      features: [
        'Diseño elegante y minimalista',
        'Batería de 12 meses',
        'Alertas en tiempo real',
        'Historial de accesos',
        'Fácil instalación'
      ]
    }
  ],
  'Timbre con Cámara Ring': [
    {
      id: 'ring-4',
      name: 'Ring Video Doorbell 4',
      img: 'https://m.media-amazon.com/images/I/61vE894jVGL._AC_SL1500_.jpg',
      price: '$1,599 MXN',
      features: [
        'Video en HD 1080p',
        'Audio bidireccional',
        'Detección de movimiento',
        'Batería recargable',
        'Visión nocturna en color'
      ]
    },
    {
      id: 'ring-pro2',
      name: 'Ring Video Doorbell Pro 2',
      img: 'https://m.media-amazon.com/images/I/61So5Dc9deL._SY450_.jpg',
      price: '$3,349 MXN',
      features: [
        'Conectividad WiFi dual-band',
        'Detección 3D de movimiento',
        'Campo de visión 150°',
        'Claridad de día y de noche',
        'Integración con Alexa'
      ]
    },
    {
      id: 'Ring Stick Up Cam',
      name: 'Ring Cámara de seguridad exterior inalámbrica',
      img: 'https://m.media-amazon.com/images/I/713qhtEOq5L._SY450_.jpg',
      price: '$1,699 MXN',
      features: [
        'Video 1080 HD y comunicación bidireccional',
        'Notificaciones en tiempo real',
        'Batería de fácil extracción',
        'Funciona con Alexa',
        'Diseño compacto'
      ]
    },
    {
      id: 'Ring Indoor Cam',
      name: 'Cámara de seguridad interior con enchufe',
      img: 'https://m.media-amazon.com/images/I/51keHnu-7YL._SY450_.jpg',
      price: '$1,599 MXN',
      features: [
        'Video HD de 1080p y visión nocturna a color',
        'Alertas de movimiento con Advanced Pre-Roll',
        'Audio bidireccional',
        'Batería de 6 meses',
        'Cubierta de privacidad manual de audio y video'
      ]
    },
    {
      id: 'Floodlight Cam Wired Plus',
      name: 'Cámara con reflectores cableada Ring Plus',
      img: 'https://m.media-amazon.com/images/I/51TdAAWxGnS._SY450_.jpg',
      price: '$4,713.02 MXN',
      features: [
        'video de alta definición de 1080p',
        'Zonas de movimiento personalizables',
        'audio bidireccional',
        'notificaciones en tiempo real',
        'sirena de seguridad de 105 dB.',
        'Funciona con Alexa para que puedas escuchar notificaciones cada vez que se detecta movimiento.'
      ]
    }
  ],
  'Automatización del Hogar': [
    {
      id: 'TOCOZOC',
      name: 'Interruptor Inteligente Wifi',
      img: 'https://m.media-amazon.com/images/I/6151oxQW8UL._SX342_.jpg',
      price: '$200.4 MXN',
      features: [
        'Interruptor Wifi',
        'Control de Voz',
        'Funciona con Alexa / Google Home ',
        'Protección contra corto circuito',
        'App intuitiva'
      ]
    },
    {
      id: 'E T EASYTAO',
      name: 'Focos Inteligentes Alexa Wi-Fi, Foco Led E27 9W RGB 2.4Ghz',
      img: 'https://m.media-amazon.com/images/I/51hMMmnuaLL._AC_SX679_.jpg',
      price: '$409 MXN',
      features: [
        'Asistente Alexa integrado',
        'Control Remoto',
        'Colores Personalizables',
        'Intelligent Timing',
        'DAhorro Energético y Sostenible'
      ]
    },
    {
      id: 'E T EASYTAO',
      name: 'Wifi Smart Plug Paquete de 2, Enchufe Inteligente',
      img: 'https://m.media-amazon.com/images/I/51wmX7LAE1L._AC_SX679_.jpg',
      price: '$334.05 MXN',
      features: [
        'CONTROL REMOTO INTELIGENTE VIA APP',
        'CONTROL DE VOZ INTELIGENTE',
        'FUNCION DE TEMPORIZADOR',
        'FUNCIÓN RECORDATORIA',
      ]
    },
    {
      id: 'Tecnolite Connect',
      name: 'Atenuador Inteligente Atenuador Inteligente Wifi, Compatible con Alexa y Asistentes Virtuales',
      img: 'https://m.media-amazon.com/images/I/61s4aeGp5QL._SX522_.jpg',
      price: '$544.08 MXN',
      features: [
        'INTERRUPTOR INTELIGENTE',
        'ILUMINACIÓN',
        'ASISTENTES DE VOZ',
        'Control por app'
      ]
    },
    {
      id: 'EASYTAO',
      name: 'WiFi Interruptor de Pared (Requiere Línea Neutra), Control Remoto, APP',
      img: 'https://m.media-amazon.com/images/I/41iyPxkky8L._SX522_.jpg',
      price: '$300.56 MXN',
      features: [
        'Control Remoto WiFi',
        'Control de Voz',
        'Función de Temporización',
        'Control táctil',
        'Compatible con Alexa y Google'
      ]
    }
  ]
};

// Modal de catálogo mejorado
const ProductCatalogModal = ({
  isOpen,
  onClose,
  products,
  title,
  onQuoteRequest
}: {
  isOpen: boolean;
  onClose: () => void;
  products: Product[];
  title: string;
  onQuoteRequest: (product: Product) => void;
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b flex justify-between items-center">
          <h3 className="text-xl font-bold text-gray-900">Catálogo: {title}</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="h-6 w-6" />
          </button>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div key={product.id} className="border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-40 object-contain bg-gray-50"
                  onError={(e) => (e.currentTarget.src = 'https://via.placeholder.com/150?text=Sin+imagen')}
                />
                <div className="p-4">
                  <h4 className="font-bold text-gray-900">{product.name}</h4>
                  <p className="text-lg font-semibold text-blue-600 mt-1">{product.price}</p>
                  <ul className="mt-3 space-y-1">
                    {product.features.map((feat, i) => (
                      <li key={i} className="text-sm text-gray-600 flex items-start">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                        {feat}
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => onQuoteRequest(product)}
                    className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                  >
                    Solicitar cotización
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 pt-6 border-t border-gray-200 text-center">
            <p className="text-sm text-gray-600">
              Precios sujetos a cambio sin previo aviso. No incluye instalación. Contacta a nuestro equipo para una cotización personalizada.
            </p>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default function ParaTuHogar() {
  const [quoteFormOpen, setQuoteFormOpen] = useState(false);
  const [catalogModalOpen, setCatalogModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedProductForQuote, setSelectedProductForQuote] = useState<Product | null>(null);

  const handleExpertContact = () => {
    setQuoteFormOpen(true);
    setSelectedProductForQuote(null); // cotización general
  };

  const openCatalog = (category: string) => {
    setSelectedCategory(category);
    setCatalogModalOpen(true);
  };

  const handleQuoteRequest = (product: Product) => {
    setSelectedProductForQuote(product);
    setCatalogModalOpen(false);
    setQuoteFormOpen(true);
  };

  const homeSolutions = [
    {
      icon: Shield,
      title: "Chapas de Seguridad",
      description: "Cerradura inteligente con huella, tag, contraseña, timbre y alarma anti-intrusión.",
      image: "https://ftp3.syscom.mx/usuarios/fotos/BancoFotografiasSyscom/EZVIZ/CSL2S/CSL2S-LIST-h.PNG"
    },
    {
      icon: Wifi,
      title: "Timbre con Cámara Ring",
      description: "Video en vivo, audio bidireccional y detección de movimiento.",
      image: "https://latam-es.ring.com/cdn/shop/products/vd-v2-1.jpg?v=1599145271"
    },
    {
      icon: Lightbulb,
      title: "Automatización del Hogar",
      description: "Controla luces, persianas y electrodomésticos desde tu celular.",
      image: "https://m.media-amazon.com/images/I/6151oxQW8UL._SX342_.jpg"
    }
  ];

  return (
    <>
      <Navbar />
     <div 
  className="min-h-screen py-10 bg-cover bg-center bg-fixed relative"
  style={{
    backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80')"
  }}
>
  {/* Overlay oscuro para mejor legibilidad */}
  <div className="absolute inset-0 bg-black bg-opacity-40 z-0"></div>

  <div className="container mx-auto px-4 relative z-10">
    {/* Hero Section */}
    <div className="text-center mb-12 max-w-4xl mx-auto">
      <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-blue-100 text-blue-600 mb-4">
        <Home className="h-7 w-7" />
      </div>
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">Soluciones para tu Hogar</h1>
      <p className="text-base md:text-lg text-gray-100 max-w-3xl mx-auto px-2">
        Tecnología inteligente, segura y conectada para hacer de tu casa un hogar moderno, cómodo y protegido.
      </p>
    </div>

          {/* Galería de Soluciones */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-8">Nuestras Soluciones para el Hogar</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {homeSolutions.map((solution, index) => {
                const IconComponent = solution.icon;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:shadow-lg"
                  >
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-2/5 h-48 overflow-hidden">
                        <img
                          src={solution.image}
                          alt={solution.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="md:w-3/5 p-4 flex flex-col justify-center">
                        <div className="flex items-start mb-2">
                          <IconComponent className="h-5 w-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
                          <h3 className="text-lg font-bold text-gray-900">{solution.title}</h3>
                        </div>
                        <p className="text-sm text-gray-600 mb-3 leading-relaxed">{solution.description}</p>
                        <button
                          onClick={() => openCatalog(solution.title)}
                          className="self-start text-blue-600 hover:text-blue-800 font-medium"
                        >
                          Ver catálogo
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Beneficios */}
          <div className="mb-16">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6">
              <h2 className="text-2xl font-bold text-gray-900 text-center mb-6">¿Por qué elegirnos para tu hogar?</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { title: "Instalación Profesional", desc: "Técnicos certificados." },
                  { title: "Soporte 24/7", desc: "Asistencia cuando la necesitas." },
                  { title: "Productos de Calidad", desc: "Marcas líderes en el mercado." },
                  { title: "Precios Accesibles", desc: "Planes adaptados a tu presupuesto." }
                ].map((benefit, i) => (
                  <div key={i} className="bg-white p-4 rounded-lg shadow-sm text-center">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Check className="h-5 w-5 text-blue-600" />
                    </div>
                    <h4 className="font-bold text-gray-900 text-sm mb-1">{benefit.title}</h4>
                    <p className="text-gray-600 text-xs">{benefit.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-6 text-white">
            <div className="text-center">
              <h3 className="text-xl font-bold mb-2">¿Listo para transformar tu hogar?</h3>
              <p className="mb-4 text-sm md:text-base px-2">
                Agenda una visita gratuita con nuestro experto.
              </p>
              <button 
                onClick={handleExpertContact}
                className="bg-white text-blue-600 px-6 py-2.5 rounded-lg font-semibold text-sm hover:bg-blue-50 transition-colors"
              >
                Solicitar Asesoría Gratuita
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal de catálogo */}
      <ProductCatalogModal
        isOpen={catalogModalOpen}
        onClose={() => setCatalogModalOpen(false)}
        products={catalogData[selectedCategory as keyof typeof catalogData] || []}
        title={selectedCategory}
        onQuoteRequest={handleQuoteRequest}
      />

      {/* Formulario de cotización — ahora recibe info del producto */}
      <QuoteRequestForm
        isOpen={quoteFormOpen}
        onClose={() => setQuoteFormOpen(false)}
        cameraInfo={null}
        productInfo={selectedProductForQuote} // 👈 pasamos el producto seleccionado
      />
    </>
  );
}
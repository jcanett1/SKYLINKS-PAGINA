import React, { useState } from 'react';
import { Shield, Bell, Home, Building2, Eye, Download, Check } from 'lucide-react';
import Navbar from '../components/Navbar';
import QuoteRequestForm from '../components/QuoteRequestForm';
import ProductGrid from '../components/ProductGrid';

export default function AlarmasSeguridad() {
  const [currentImage, setCurrentImage] = useState(0);
  const [quoteFormOpen, setQuoteFormOpen] = useState(false);

  const installationImages = [
    {
      url: "https://ftp3.syscom.mx/cdn-cgi/image/format=png,width=700,height=700/usuarios/fotos/BancoFotografiasSyscom/HIKVISION/DSPWA48FULLK/DSPWA48FULLK-l.PNG",
      caption: "Sistema de Alarma Inalámbrica Residencial"
    },
    {
      url: "https://imgs.search.brave.com/5KIs4h1nxIApZorSEVIrFkFZZqCdEDm-OxOoRl8xGEY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dGVjbm9zZWd1cm8u/Y29tL21lZGlhL2sy/L2l0ZW1zL2NhY2hl/Lzk3NjgyZTdhMWUz/ZjhjODk5MDEzNTk4/NzJkNWJiNDhlX1hM/LmpwZw",
      caption: "Instalación de Alarma en Comercio"
    },
    {
      url: "https://cdn.tvc.mx/media/1557094/DSC2480044-(2)-(1)-(1).png",
      caption: "Sistema de Alarma Empresarial"
    }
  ];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % installationImages.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + installationImages.length) % installationImages.length);
  };

  const handleExpertContact = () => {
    setQuoteFormOpen(true);
  };

  const alarmSystems = [
    {
      id: 1,
      category: "Residencial",
      systems: [
        {
          name: "Kit de Alarma WiFi HIKVISION AXPRO",
          price: "7,071.9 MXN",
          image: "https://ftp3.syscom.mx/cdn-cgi/image/format=png,width=700,height=700/usuarios/fotos/BancoFotografiasSyscom/HIKVISION/AXPROKITKEYPAD/AXPROKITKEYPAD-l.PNG",
          features: [
            "1 Panel de Alarma WiFi",
            '1 Montaje Universal para PIR',
            "2 Contactos Magnéticos",
            "1 Sensores PIR",
            "1 Sirena integrada de 85 dB",
            "1 Hub con bateria de respaldo"
          ]
        },
        {
          name: "Kit Dahua de Alarmaa inalámbrico",
          price: "$2,758.99 MXN",
          image: "https://cdn.tvc.mx/media/1477668/DAHUA-DHT2480003-KIT-DE-ALARMA-INALAMBRICO-PRINCIPAL.png",
          features: [
            "Incluye Panel WiFi Ethernet",
            "1 Sensor de Movimiento",
            "1 Contactos magnéticos",
            "1 Controles remotos",
            "App móvil gratuita"
          ]
        }
      ]
    },
    {
      id: 2,
      category: "Comercial",
      systems: [
        {
          name: "Sistema KIT de Alarma AX PRO con GSM",
          price: "$6,134.05 MXN",
          image: "https://ftp3.syscom.mx/cdn-cgi/image/format=png,width=700,height=700/usuarios/fotos/BancoFotografiasSyscom/HIKVISION/DSPWA48KSCAM/DSPWA48KSCAM-l.PNG",
          features: [
            "1 Hub",
            "1 Sensor PIR con Cámara",
            "1 Contacto Magnético",
            "1 Control Remoto",
            "Compatible con Hik-Connect P2P"
          ]
        },
        {
          name: "Sistema AJAX KIT ALARMA",
          price: "$8,444.92 MXN",
          image: "https://cdn.tvc.mx/media/1728338/AJX2480006A.png",
          features: [
            "Panel de alarma AJAX Hub2Plus conexión Ethernet / WiFi / LTE",
            "1 sensor de movimiento",
            "2 detectores para puerta o ventana",
            " 1 control remoto",
            "1 sirena EXTERIOR inalámbrica"
          ]
        }
      ]
    },
    {
      id: 3,
      category: "Industrial",
      systems: [
        {
          name: "Sistema HONEYWELL VISTA48",
          price: "$7,773.78 MXN",
          image: "https://ftp3.syscom.mx/cdn-cgi/image/format=png,width=700,height=700/usuarios/fotos/BancoFotografiasSyscom/HONEYWELLHOMERESIDEO/VISTA48PLUSMINI_6160RF/VISTA48PLUSMINI_6160RF-l.PNG",
          features: [
            "1  Panel Vista48/6160RF",
            "2  Contacto Magnéticos",
            "3  Sensor de Movimiento",
            "1  Control Remoto",
            "1  Batería de 4Ah",
            "1  Transformador 16Vc",
            "1 incluye gabinete metálico",
            "1  panel de alarma",
            "1 teclado"
          ]
        },
        {
          name: "Sistema DSC DSC NEO-RF-LCD-IP-SB",
          price: "$6,280.57 MXN",
          image: "https://cdn.tvc.mx/media/1557094/DSC2480044-(2)-(1)-(1).png",
          features: [
            "1 Panel de 32 zonas INALAMBRICAS",
            "1 Comunicador TL280E",
            "1 Teclado ALFANUMÉRICO con TRANSCEPTOR HS2LCDRF9N",
            "2 Contactos PG9303",
            "1 Sensor Inalámbrico PG9914",
            "1 Fuente PTC1640U",
            "1 Gabinete"
          ]
        }
      ]
    }
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          {/* Galería de Instalaciones */}
          <div className="mb-16">
            <div className="relative overflow-hidden rounded-xl shadow-2xl">
              <div className="relative h-[500px]">
                {installationImages.map((image, index) => (
                  <div 
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ${
                      currentImage === index ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <img 
                      src={image.url} 
                      alt={image.caption} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <p className="text-xl font-semibold">{image.caption}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Controles */}
              <button 
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white rounded-full p-2 backdrop-blur-sm transition-colors"
                aria-label="Imagen anterior"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button 
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white rounded-full p-2 backdrop-blur-sm transition-colors"
                aria-label="Siguiente imagen"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              
              {/* Indicadores */}
              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                {installationImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      currentImage === index ? 'bg-white' : 'bg-white/50'
                    }`}
                    aria-label={`Ir a imagen ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Sistemas de Alarma Inalámbrica</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Protección avanzada para tu hogar, negocio o industria con sistemas de alarma inalámbricos de última generación.
            </p>
          </div>

          {/* Características Principales */}
          <div className="mb-20">
            <div className="bg-blue-50 rounded-xl p-8 mb-8">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="mb-6 md:mb-0 md:mr-8 w-full md:w-3/5">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Ventajas de Nuestros Sistemas</h2>
                  <p className="text-gray-700 mb-4 font-medium">
                    Beneficios principales:
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-2" />
                      <span className="text-gray-700">Instalación rápida sin cables</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-2" />
                      <span className="text-gray-700">Control desde smartphone</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-2" />
                      <span className="text-gray-700">Batería de respaldo incluida</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-2" />
                      <span className="text-gray-700">Notificaciones en tiempo real</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-2" />
                      <span className="text-gray-700">Monitoreo 24/7 opcional</span>
                    </li>
                  </ul>
                </div>
                <div className="w-full md:w-2/5">
                  <img 
                    src="https://ftp3.syscom.mx/cdn-cgi/image/format=png,width=700,height=700/usuarios/fotos/BancoFotografiasSyscom/HIKVISION/DSPWA48FULLK(R)/DSPWA48FULLK(R)-l.PNG" 
                    alt="Sistema de Alarma Inalámbrica" 
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Sistemas de Alarma por Categoría */}
          {alarmSystems.map((category) => (
            <div key={category.id} className="mb-20">
              <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
                Sistemas para Sector {category.category}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {category.systems.map((system, index) => (
                  <div key={index} className="bg-white shadow-xl rounded-lg overflow-hidden transition-transform hover:scale-105">
                    <div className="h-64 overflow-hidden">
                      <img
                        src={system.image}
                        alt={system.name}
                        className="w-full h-full object-contain p-4"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center mb-4">
                        <Bell className="w-6 h-6 text-blue-500 mr-2" />
                        <h4 className="text-xl font-semibold text-gray-900">{system.name}</h4>
                      </div>
                      <div className="mb-4">
                        <h5 className="font-semibold text-gray-800 mb-2">Características:</h5>
                        <ul className="list-disc pl-5 text-gray-600">
                          {system.features.map((feature, idx) => (
                            <li key={idx}>{feature}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex justify-between items-center mt-6">
                        <span className="text-2xl font-bold text-blue-600">{system.price}</span>
                        <button 
                          onClick={handleExpertContact}
                          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                        >
                          Solicitar Cotización
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Productos Syscom */}
          <div className="mb-20">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">Catálogo de Alarmas y Seguridad</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Sistemas de alarma inalámbricos y accesorios de seguridad con precios directos de distribuidor.
              </p>
            </div>
            <ProductGrid categoryId="32" title="Alarmas de Seguridad" />
          </div>

          {/* CTA Section */}
          <div className="mt-20 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">¿Necesitas ayuda para elegir el sistema adecuado?</h3>
              <p className="mb-6">Nuestros expertos están listos para asesorarte y encontrar la mejor solución para tus necesidades de seguridad.</p>
              <button 
                onClick={handleExpertContact}
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Contactar un Experto
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Formulario de contacto con experto */}
      <QuoteRequestForm
        isOpen={quoteFormOpen}
        onClose={() => setQuoteFormOpen(false)}
        cameraInfo={null}
      />
    </>
  );
}
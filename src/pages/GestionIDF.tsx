import React, { useState } from 'react';
import { Server, Network, Cable, Shield, Wifi, Settings, HardDrive, Router } from 'lucide-react';
import Navbar from '../components/Navbar';
import QuoteRequestForm from '../components/QuoteRequestForm';
import ProductGrid from '../components/ProductGrid';

export default function GestionIDF() {
  const [quoteFormOpen, setQuoteFormOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<{name: string, type: string} | null>(null);

  const handleQuoteRequest = (service: string) => {
    setSelectedService({
      name: service,
      type: 'idf'
    });
    setQuoteFormOpen(true);
  };

  const networkEquipment = [
    {
      category: "Switches",
      items: [
        {
          name: "UniFi Switch USW-24-POE Gen2, Capa 2 de 24 puertos",
          brand: "Ubiquiti",
          price: "$11,300.28 MXN",
          image: "https://ftp3.syscom.mx/cdn-cgi/image/format=png,width=700,height=700/usuarios/fotos/BancoFotografiasSyscom/UBIQUITINETWORKS/USW24POE/USW24POE-l.PNG",
          features: [
            "24 puertos PoE+",
            "2 puertos 1G SFP",
            "Gestión centralizada UniFi",
            "95W PoE total",
            "pantalla informativa"
          ]
        },
        {
          name: "Ruijie Switch PoE+ Empresarial 370 Watts",
          brand: "Ruijie",
          price: "$10,573.02 MXN",
          image: "https://ftp3.syscom.mx/cdn-cgi/image/format=png,width=700,height=700/usuarios/fotos/BancoFotografiasSyscom/RUIJIE/RGS291524GT4MSPL/RGS291524GT4MSPL-l.PNG",
          features: [
            "24 puertos Gigabit",
            "4 Puertos Uplink SFP 2.5G",
            "Gestión web",
            "Layer 2+"
          ]
        }
      ]
    },
    {
      category: "Routers",
      items: [
        {
          name: "UniFi OS Console",
          brand: "Ubiquiti",
          price: "$8,999.00 MXN",
          image: "https://ftp3.syscom.mx/cdn-cgi/image/format=png,width=700,height=700/usuarios/fotos/BancoFotografiasSyscom/UBIQUITINETWORKS/UDMSE/UDMSE-l.PNG",
          features: [
            "Procesador de cuatro núcleos a 1,7 GHz",
            "Gestión UniFi integrada",
            "Puertos WAN duales (10G SFP+ y 2.5GbE RJ45)",
            "(1) puerto LAN 10G SFP+",
            "(1) Pantalla táctil a color LCM de 1.3",
            "(8) puertos GbE RJ45",
            "(6) puertos PoE 802.3af",
            "(2) puertos LAN PoE+ 802.3at"
            
          ]
        },
        {
          name: "MikroTik Router con Wi-Fi 4x4 MU-MIMO",
          brand: "MikroTik",
          price: "$6,499.00 MXN",
          image: "https://ftp3.syscom.mx/cdn-cgi/image/format=png,width=700,height=700/usuarios/fotos/BancoFotografiasSyscom/MIKROTIK/RB4011IGSPLUS5HACQ2HNDIN/RB4011IGSPLUS5HACQ2HNDIN-l.PNG",
          features: [
            "CPU Quad Core Cortex A15 con 4 núcleos",
            "Aceleración por hardware para IPSec integrada",
            "10 puertos Ethernet de 1 Gbps disponibles",
            "Velocidad inalámbrica máxima de 5 GHz: 1733 Mbps",
            "Tecnología MU-MIMO 4x4 avanzada"
          ]
        }
      ]
    }
  ];

  const cabinetSizes = [
    {
      size: "6U",
      price: "$2,212.12 MXN",
      image: "https://ftp3.syscom.mx/cdn-cgi/image/format=png,width=700,height=700/usuarios/fotos/BancoFotografiasSyscom/LINKEDPRO/SR1906LH2G/SR1906LH2G-l.PNG",
      features: [
        "Profundidad:  479.5mm",
        "Capacidad de carga: 80kg",
        "Puerta frontal con vidrio templado",
        "Ideal para pequeñas instalaciones",
        "Preparación para ventiladores: 2 simples"
      ]
    },
    {
      size: "9U",
      price: "$4,586.76 MXN",
      image: "https://ftp3.syscom.mx/cdn-cgi/image/format=png,width=700,height=700/usuarios/fotos/BancoFotografiasSyscom/LINKEDPRO/SR1909GN2G/SR1909GN2G-l.PNG",
      features: [
        "Profundidad: 6350mm",
        "Capacidad de carga: 100kg",
        "Preparado para ventiladores de 120 mmr",
        "Perfecto para oficinas medianas"
      ]
    },
    {
      size: "12U",
      price: "$3,015.92 MXN",
      image: "https://ftp3.syscom.mx/cdn-cgi/image/format=png,width=700,height=700/usuarios/fotos/BancoFotografiasSyscom/LINKEDPRO/SR1912LH2G/SR1912LH2G-l.PNG",
      features: [
        "Profundidad: 479.5mm",
        "Capacidad de carga: 80kg",
        "Preparación para ventiladores de enfriamiento",
        "Ideal para instalaciones empresariales"
      ]
    }
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="relative bg-blue-900 text-white py-20">
          <div className="absolute inset-0 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31"
              alt="Data Center Background"
              className="w-full h-full object-cover opacity-20"
            />
          </div>
          <div className="relative container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Gestión Profesional de IDF
              </h1>
              <p className="text-xl mb-8">
                Soluciones completas de infraestructura de red para empresas y negocios.
                Desde el diseño hasta la implementación y mantenimiento.
              </p>
              <button
                onClick={() => handleQuoteRequest('Consultoría IDF')}
                className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Solicitar Consultoría
              </button>
            </div>
          </div>
        </div>

        {/* Servicios Principales */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Nuestros Servicios</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="text-blue-600 mb-4">
                  <Cable className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Cableado Estructurado</h3>
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li>• Instalación de cableado Cat6 y Cat6A</li>
                  <li>• Certificación de puntos de red</li>
                  <li>• Organización y etiquetado</li>
                  <li>• Canalización y ducterías</li>
                </ul>
                <button
                  onClick={() => handleQuoteRequest('Cableado Estructurado')}
                  className="text-blue-600 font-semibold hover:text-blue-800"
                >
                  Solicitar Cotización →
                </button>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="text-blue-600 mb-4">
                  <Server className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Instalación de Gabinetes</h3>
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li>• Gabinetes de pared y piso</li>
                  <li>• Sistemas de ventilación</li>
                  <li>• Organización de cableado</li>
                  <li>• PDUs y accesorios</li>
                </ul>
                <button
                  onClick={() => handleQuoteRequest('Instalación de Gabinetes')}
                  className="text-blue-600 font-semibold hover:text-blue-800"
                >
                  Solicitar Cotización →
                </button>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="text-blue-600 mb-4">
                  <Settings className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Configuración de Equipos</h3>
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li>• Switches y routers</li>
                  <li>• VLANs y segmentación</li>
                  <li>• Políticas de seguridad</li>
                  <li>• Monitoreo de red</li>
                </ul>
                <button
                  onClick={() => handleQuoteRequest('Configuración de Equipos')}
                  className="text-blue-600 font-semibold hover:text-blue-800"
                >
                  Solicitar Cotización →
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Equipamiento de Red */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Equipamiento de Red</h2>
            {networkEquipment.map((category, index) => (
              <div key={index} className="mb-16">
                <h3 className="text-2xl font-semibold mb-8">{category.category}</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="bg-white rounded-lg shadow-lg overflow-hidden">
                      <div className="h-64 bg-white p-4">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="p-6">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h4 className="text-xl font-semibold">{item.name}</h4>
                            <p className="text-gray-600">{item.brand}</p>
                          </div>
                          <span className="text-blue-600 font-bold">{item.price}</span>
                        </div>
                        <ul className="space-y-2 mb-6">
                          {item.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="text-gray-600">• {feature}</li>
                          ))}
                        </ul>
                        <button
                          onClick={() => handleQuoteRequest(item.name)}
                          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
                        >
                          Solicitar Cotización
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Gabinetes */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Gabinetes de Pared</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {cabinetSizes.map((cabinet, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="h-48 bg-white p-4">
                    <img
                      src={cabinet.image}
                      alt={`Gabinete ${cabinet.size}`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-4">
                      <h4 className="text-xl font-semibold">Gabinete {cabinet.size}</h4>
                      <span className="text-blue-600 font-bold">{cabinet.price}</span>
                    </div>
                    <ul className="space-y-2 mb-6">
                      {cabinet.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-gray-600">• {feature}</li>
                      ))}
                    </ul>
                    <button
                      onClick={() => handleQuoteRequest(`Gabinete ${cabinet.size}`)}
                      className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Solicitar Cotización
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Productos Syscom */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Catálogo de Servidores y Almacenamiento</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Equipos para tu infraestructura de red: servidores, NAS, switches y gabinetes IDF.
            </p>
          </div>
          <ProductGrid categoryId="65963" title="Servidores y Almacenamiento" />
        </div>

        {/* CTA Section */}
        <section className="py-16 bg-blue-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">¿Necesitas una solución personalizada?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Nuestro equipo de expertos está listo para ayudarte a diseñar e implementar
              la solución perfecta para tu empresa.
            </p>
            <button
              onClick={() => handleQuoteRequest('Proyecto Personalizado')}
              className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Contactar a un Especialista
            </button>
          </div>
        </section>
      </div>

      {/* Quote Request Form */}
      <QuoteRequestForm
        isOpen={quoteFormOpen}
        onClose={() => setQuoteFormOpen(false)}
        cameraInfo={selectedService}
      />
    </>
  );
}
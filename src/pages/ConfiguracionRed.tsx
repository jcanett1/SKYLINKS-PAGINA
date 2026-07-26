import React, { useState } from 'react';
import {
  Network,
  Cable,
  Box,
  Settings,
  PenTool as Tool,
  Check,
} from 'lucide-react';
import Navbar from '../components/Navbar';
import QuoteRequestForm from '../components/QuoteRequestForm';
import ProductGrid from '../components/ProductGrid';

export default function ConfiguracionRed() {
  const [quoteFormOpen, setQuoteFormOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<{
    name: string;
    type: string;
  } | null>(null);

  const handleQuoteRequest = (product: string) => {
    setSelectedProduct({
      name: product,
      type: 'network',
    });
    setQuoteFormOpen(true);
  };

  const networkOrganizers = [
    {
      name: 'Kit Organizador de Redes 24U Profesional',
      price: '$5,071.48 MXN',
      image:
        'https://ftp3.syscom.mx/cdn-cgi/image/format=png,width=700,height=700/usuarios/fotos/KITORG24/KITORG24.jpg',
      features: [
        '24 unidades de organización',
        'Incluye accesorios de montaje',
        'Compatible con racks estándar 19"',
        'Administración horizontal y vertical',
        'Material de alta resistencia',
      ],
    },
    {
      name: 'Organizador Horizontal 2U con Tapa',
      price: '$805.02 MXN',
      image:
        'https://ftp3.syscom.mx/cdn-cgi/image/format=png,width=700,height=700/usuarios/fotos/BancoFotografiasSyscom/LINKEDPRO/LPCM042U/LPCM042U-l.PNG',
      features: [
        '2U de altura',
        'Tapa abatible',
        '5 aros organizadores',
        'Acabado en negro mate',
        'Instalación sin herramientas',
      ],
    },
  ];

  const networkCables = [
    {
      category: 'Cables UTP por Bobina',
      items: [
        {
          name: 'Cable UTP Cat6 305m',
          brand: 'LINKEDPRO',
          price: '$1,825.68 MXN',
          image:
            'https://ftp3.syscom.mx/cdn-cgi/image/format=png,width=700,height=700/usuarios/fotos/BancoFotografiasSyscom/LINKEDPRO/PROCAT6W/PROCAT6W-l.PNG',
          features: [
            'Categoría 6',
            '305 metros',
            'Color blanco',
            'Conductor 23 AWG',
            'Cobre y Aluminio (CCA)',
            'Para interiores',
          ],
        },
        {
          name: 'Cable UTP Cat5e 305m',
          brand: 'LINKEDPRO',
          price: '$2,734.15 MXN',
          image:
            'https://ftp3.syscom.mx/cdn-cgi/image/format=png,width=700,height=700/usuarios/fotos/BancoFotografiasSyscom/LINKEDPRO/PROCAT5EW/PROCAT5EW-l.PNG',
          features: [
            'Categoría 5e',
            '305 metros',
            'Color Blanco',
            'Conductor 24 AWG',
            '100% cobre, sin blindaje',
            'Para interiores',
          ],
        },
      ],
    },
    {
      category: 'Cables de Parcheo',
      items: [
        {
          name: 'Cable de Parcheo Cat6 1m',
          brand: 'LINKEDPRO',
          price: '$126.47 MXN',
          image:
            'https://ftp3.syscom.mx/cdn-cgi/image/format=png,width=700,height=700/usuarios/fotos/catalogo/LPUT3050BU/LPUT3050BUdet.jpg',
          features: [
            'Categoría 6',
            '1 metro de longitud',
            'Conectores RJ45',
            'Color azul',
            'Moldeado de fábrica',
          ],
        },
        {
          name: 'Cable de Parcheo Cat6 3m',
          brand: 'LINKEDPRO',
          price: '$164.06 MXN',
          image:
            'https://ftp3.syscom.mx/cdn-cgi/image/format=png,width=700,height=700/usuarios/fotos/BancoFotografiasSyscom/LINKEDPROBYEPCOM/LPUT6300BU/LPUT6300BU-l.PNG',
          features: [
            'Categoría 6',
            '3 metros de longitud',
            'Conectores RJ45',
            'Color azul',
            'Moldeado de fábrica',
          ],
        },
      ],
    },
  ];

  const networkConnectors = [
    {
      name: 'Jack Cat6 Estilo 110',
      price: '$89.00 MXN',
      image:
        'https://ftp3.syscom.mx/cdn-cgi/image/format=png,width=700,height=700/usuarios/fotos/BancoFotografiasSyscom/LINKEDPRO/LPKJ601WH/LPKJ601WH-l.PNG',
      features: [
        'Categoría 6',
        'Compatible con herramienta 110',
        'Color blanco',
        'Cumple con TIA/EIA 568',
        'Para montaje en faceplate',
      ],
    },
    {
      name: 'Plug RJ45 Cat6 (100 piezas)',
      price: '$499.00 MXN',
      image:
        'https://ftp3.syscom.mx/cdn-cgi/image/format=png,width=700,height=700/usuarios/fotos/BancoFotografiasSyscom/LINKEDPRO/TC6100/TC6100-l.PNG',
      features: [
        'Categoría 6',
        'Paquete de 100 piezas',
        'Contactos bañados en oro',
        'Para cable sólido y multifilar',
        'Con guía de inserción',
      ],
    },
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="relative bg-blue-900 text-white py-20">
          <div className="absolute inset-0 overflow-hidden">
            <img
              src="https://i.pinimg.com/736x/77/22/3c/77223c5ef6e362618598c94589a1c5c4.jpg"
              alt="Network Infrastructure"
              className="w-full h-full object-cover opacity-20"
            />
          </div>
          <div className="relative container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Soluciones de Cableado Estructurado
              </h1>
              <p className="text-xl mb-8">
                Productos y servicios profesionales para la instalación y
                mantenimiento de redes empresariales.
              </p>
              <button
                onClick={() => handleQuoteRequest('Consultoría de Red')}
                className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Solicitar Asesoría
              </button>
            </div>
          </div>
        </div>

        {/* Servicios de Instalación */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Nuestros Servicios
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="text-blue-600 mb-4">
                  <Cable className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-semibold mb-4">
                  Instalación de Cableado
                </h3>
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-green-500" />
                    Cableado estructurado Cat5e/6/6A
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-green-500" />
                    Certificación de puntos de red
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-green-500" />
                    Organización de racks
                  </li>
                </ul>
                <button
                  onClick={() => handleQuoteRequest('Instalación de Cableado')}
                  className="text-blue-600 font-semibold hover:text-blue-800"
                >
                  Solicitar Servicio →
                </button>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="text-blue-600 mb-4">
                  <Tool className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-semibold mb-4">
                  Mantenimiento de Red
                </h3>
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-green-500" />
                    Diagnóstico de problemas
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-green-500" />
                    Reparación de cableado
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-green-500" />
                    Optimización de red
                  </li>
                </ul>
                <button
                  onClick={() => handleQuoteRequest('Mantenimiento de Red')}
                  className="text-blue-600 font-semibold hover:text-blue-800"
                >
                  Solicitar Servicio →
                </button>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="text-blue-600 mb-4">
                  <Settings className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-semibold mb-4">
                  Configuración de Red
                </h3>
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-green-500" />
                    Configuración de switches
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-green-500" />
                    Segmentación de red
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-green-500" />
                    Implementación de VLANs
                  </li>
                </ul>
                <button
                  onClick={() => handleQuoteRequest('Configuración de Red')}
                  className="text-blue-600 font-semibold hover:text-blue-800"
                >
                  Solicitar Servicio →
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Organizadores de Red */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Organizadores de Red
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {networkOrganizers.map((organizer, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg overflow-hidden"
                >
                  <div className="h-64 bg-white p-4">
                    <img
                      src={organizer.image}
                      alt={organizer.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h4 className="text-xl font-semibold">
                        {organizer.name}
                      </h4>
                      <span className="text-blue-600 font-bold">
                        {organizer.price}
                      </span>
                    </div>
                    <ul className="space-y-2 mb-6">
                      {organizer.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center text-gray-600"
                        >
                          <Check className="w-4 h-4 mr-2 text-green-500" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <button
                      onClick={() => handleQuoteRequest(organizer.name)}
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

        {/* Cables de Red */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Cables de Red
            </h2>
            {networkCables.map((category, index) => (
              <div key={index} className="mb-16">
                <h3 className="text-2xl font-semibold mb-8">
                  {category.category}
                </h3>
                <div className="grid md:grid-cols-2 gap-8">
                  {category.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="bg-white rounded-lg shadow-lg overflow-hidden"
                    >
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
                            <h4 className="text-xl font-semibold">
                              {item.name}
                            </h4>
                            <p className="text-gray-600">{item.brand}</p>
                          </div>
                          <span className="text-blue-600 font-bold">
                            {item.price}
                          </span>
                        </div>
                        <ul className="space-y-2 mb-6">
                          {item.features.map((feature, featureIndex) => (
                            <li
                              key={featureIndex}
                              className="flex items-center text-gray-600"
                            >
                              <Check className="w-4 h-4 mr-2 text-green-500" />
                              {feature}
                            </li>
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

        {/* Conectores y Accesorios */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Conectores y Accesorios
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {networkConnectors.map((connector, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg overflow-hidden"
                >
                  <div className="h-64 bg-white p-4">
                    <img
                      src={connector.image}
                      alt={connector.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h4 className="text-xl font-semibold">
                        {connector.name}
                      </h4>
                      <span className="text-blue-600 font-bold">
                        {connector.price}
                      </span>
                    </div>
                    <ul className="space-y-2 mb-6">
                      {connector.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center text-gray-600"
                        >
                          <Check className="w-4 h-4 mr-2 text-green-500" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <button
                      onClick={() => handleQuoteRequest(connector.name)}
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
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Catálogo de Equipos de Red</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Switches, routers, cableado y accesorios de red con precios directos de distribuidor.
            </p>
          </div>
          <ProductGrid categoryId="294" title="Equipos de Red" />
        </div>

        {/* CTA Section */}
        <section className="py-16 bg-blue-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">
              ¿Necesitas ayuda con tu proyecto?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Nuestro equipo de expertos está listo para asesorarte y encontrar
              la mejor solución para tus necesidades de red.
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
        cameraInfo={selectedProduct}
      />
    </>
  );
}

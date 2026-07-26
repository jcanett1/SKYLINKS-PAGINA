import React, { useState } from 'react';
import { Wifi, Signal, Router, Network, Settings, Check } from 'lucide-react';
import Navbar from '../components/Navbar';
import QuoteRequestForm from '../components/QuoteRequestForm';
import ProductGrid from '../components/ProductGrid';

export default function RedesWifi() {
  const [quoteFormOpen, setQuoteFormOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<{
    name: string;
    type: string;
  } | null>(null);
  const [currentImage, setCurrentImage] = useState(0);

  const installationImages = [
    {
      url: 'https://i.pinimg.com/1200x/fb/34/3b/fb343b89158fc3fd8715ae0ad2d2884c.jpg',
      caption: 'Instalación de redes WiFi empresariales',
    },
    {
      url: 'https://m.media-amazon.com/images/I/81XQ+XoWPUL._AC_SL1500_.jpg',
      caption: 'Configuración de puntos de acceso',
    },
    {
      url: 'https://i.pinimg.com/1200x/92/c8/cf/92c8cf21c3831d0040085a9d656726a5.jpg',
      caption: 'Redes WiFi de alto rendimiento',
    },
  ];

  const handleQuoteRequest = (product: string) => {
    setSelectedProduct({
      name: product,
      type: 'wifi',
    });
    setQuoteFormOpen(true);
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % installationImages.length);
  };

  const prevImage = () => {
    setCurrentImage(
      (prev) =>
        (prev - 1 + installationImages.length) % installationImages.length
    );
  };

  const wifiProducts = [
    {
      category: 'Access Points Empresariales',
      items: [
        {
          name: 'UniFi 6 Pro',
          brand: 'Ubiquiti',
          price: '$4,499.00 MXN',
          image:
            'https://ftp3.syscom.mx/cdn-cgi/image/format=png,width=700,height=700/usuarios/fotos/BancoFotografiasSyscom/UBIQUITINETWORKS/U6PRO/U6PRO-l.PNG',
          features: [
            'WiFi 6 (802.11ax)',
            'MIMO 4x4',
            'Hasta 5.4 Gbps',
            'Doble banda simultánea',
            'PoE 802.3at',
            'Gestión UniFi Network',
          ],
        },
        {
          name: 'GWN7660',
          brand: 'Grandstream',
          price: '$3,599.00 MXN',
          image:
            'https://ftp3.syscom.mx/cdn-cgi/image/format=png,width=700,height=700/usuarios/fotos/BancoFotografiasSyscom/GRANDSTREAM/GWN7660/GWN7660-l.PNG',
          features: [
            'WiFi 6',
            'Hasta 2.976 Gbps',
            'Doble banda 2.4 & 5 GHz',
            'MU-MIMO 3x3:3',
            'Hasta 256 clientes',
            'PoE 802.3af/at',
          ],
        },
        {
          name: 'RG-RAP2260(E)',
          brand: 'Ruijie',
          price: '$4,491.66 MXN',
          image:
            'https://ftp3.syscom.mx/cdn-cgi/image/format=png,width=700,height=700/usuarios/fotos/BancoFotografiasSyscom/RUIJIE/RGRAP2260(E)/RGRAP2260(E)-l.PNG',
          features: [
            'Wi-Fi 6 con estándar 802.11ax avanzado',
            'Banda dual: 2.4 GHz 800 Mbps, 5 GHz 2400 Mbps',
            'Antenas con ganancia 3 dBi para cada banda',
            'Hasta 1.8 Gbps',
            'PoE 802.3af/at',
            'Gestión centralizada',
          ],
        },
      ],
    },
    {
      category: 'Sistemas WiFi Mesh',
      items: [
        {
          name: 'UniFi Dream Router',
          brand: 'Ubiquiti',
          price: '$7,013.71 MXN',
          image:
            'https://ftp3.syscom.mx/cdn-cgi/image/format=png,width=700,height=700/usuarios/fotos/BancoFotografiasSyscom/UBIQUITINETWORKS/UDR/UDR-l.PNG',
          features: [
            'Router + Access Point WiFi 6',
            'Controlador UniFi integrado',
            '2 puertos WAN/LAN',
            'Hasta 300 clientes',
            'Pantalla LCD táctil',
            'Mesh con otros APs UniFi',
          ],
        },
        {
          name: 'DECOM5-3PACK',
          brand: 'TP-Link',
          price: '$4,648.85 MXN',
          image:
            'https://ftp3.syscom.mx/usuarios/fotos/BancoFotografiasSyscom/TP-LINK/DECOM53PACK/DECOM53PACK-AD-1-p.PNG',
          features: [
            'WiFi 6 AX3000',
            'Sistema Mesh',
            'Hasta 3000 Mbps',
            'Cobertura hasta 420 m²',
            '4 streams simultáneos',
            'Compatible con Alexa',
          ],
        },
        {
          name: 'UAP-AC-M Access Point UniFi MESH ',
          brand: 'Ubiquiti',
          price: '2,401.08 MXN',
          image:
            'https://ftp3.syscom.mx/usuarios/fotos/BancoFotografiasSyscom/UBIQUITINETWORKS/UAPACM/UAPACM-LAT-IZQ-p.PNG',
          features: [
            'WiFi dual band 2x2 con puerto Ethernet Gigabit',
            'Antenas doble banda: 2.4 GHz (3 dBi), 5 GHz (4 dBi)',
            'Alimentación PoE pasivo 24V, adaptador incluido',
            'Sistema Mesh avanzado',
          ],
        },
      ],
    },
    {
      category: 'Access Points para Exterior',
      items: [
        {
          name: 'RG-EAP602',
          brand: 'Ruijie',
          price: '$2,999.00 MXN',
          image:
            'https://ftp3.syscom.mx/cdn-cgi/image/format=png,width=700,height=700/usuarios/fotos/BancoFotografiasSyscom/RUIJIE/RGEAP602/RGEAP602-l.PNG',
          features: [
            'WiFi 6 AX1800',
            'Doble banda',
            'IP66 para exterior',
            'PoE 802.3at',
            'Hasta 250 usuarios',
            'Gestión centralizada',
          ],
        },
        {
          name: 'UniFi 6 Mesh',
          brand: 'Ubiquiti',
          price: '$5,299.00 MXN',
          image:
            'https://ftp3.syscom.mx/cdn-cgi/image/format=png,width=700,height=700/usuarios/fotos/BancoFotografiasSyscom/UBIQUITINETWORKS/U6MESH/U6MESH-l.PNG',
          features: [
            'WiFi 6',
            'IP54 para exterior',
            'MIMO 2x2',
            'Hasta 1.5 Gbps',
            'Mesh con otros APs UniFi',
            'PoE 802.3at',
          ],
        },
        {
          name: 'GWN7660ELR Punto de acceso para exterior AX3000',
          brand: 'Grandstream',
          price: '$2,756.98 MXN',
          image:
            'https://ftp3.syscom.mx/cdn-cgi/image/format=png,width=700,height=700/usuarios/fotos/BancoFotografiasSyscom/GRANDSTREAM/GWN7660ELR/GWN7660ELR-l.PNG',
          features: [
            'WiFi 6',
            'IP66 para exterior',
            'MU-MIMO 2x2:2',
            'Hasta 2.4 Gbps',
            'Soporta hasta 256 clientes simultáneamente.',
            'Cobertura hasta 300m',
            'administración desde la nube',
          ],
        },
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
              src="https://i.pinimg.com/736x/40/39/70/4039703514eda25cbb04d843fbbfbf1f.jpg"
              alt="WiFi Network Background"
              className="w-full h-full object-cover opacity-20"
            />
          </div>
          <div className="relative container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Soluciones WiFi Profesionales
              </h1>
              <p className="text-xl mb-8">
                Equipamiento de redes inalámbricas de alto rendimiento para
                empresas y hogares. Instalación, configuración y soporte técnico
                especializado.
              </p>
              <button
                onClick={() => handleQuoteRequest('Consultoría WiFi')}
                className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Solicitar Asesoría
              </button>
            </div>
          </div>
        </div>

        {/* Galería de Instalaciones */}
        <div className="py-16">
          <div className="container mx-auto px-4">
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white rounded-full p-2 backdrop-blur-sm transition-colors"
                aria-label="Siguiente imagen"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
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
        </div>

        {/* Productos WiFi */}
        {wifiProducts.map((category, index) => (
          <section key={index} className="py-16 bg-gray-100">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12">
                {category.category}
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.items.map((product, productIndex) => (
                  <div
                    key={productIndex}
                    className="bg-white rounded-lg shadow-lg overflow-hidden"
                  >
                    <div className="h-64 bg-white p-4">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h4 className="text-xl font-semibold">
                            {product.name}
                          </h4>
                          <p className="text-gray-600">{product.brand}</p>
                        </div>
                        <span className="text-blue-600 font-bold">
                          {product.price}
                        </span>
                      </div>
                      <ul className="space-y-2 mb-6">
                        {product.features.map((feature, featureIndex) => (
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
                        onClick={() => handleQuoteRequest(product.name)}
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
        ))}

        {/* Productos Syscom - WiFi */}
        <div className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 mb-20">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">Catálogo de Equipos WiFi</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Access points, routers WiFi y equipos inalámbricos con precios directos de distribuidor.
              </p>
            </div>
            <ProductGrid categoryId="65879" title="Equipos WiFi" />
          </div>
        </div>

        {/* Productos Syscom - WiFi */}
        <div className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 mb-20">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">Catálogo de Equipos WiFi</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Access points, routers WiFi y equipos inalámbricos con precios directos de distribuidor.
              </p>
            </div>
            <ProductGrid categoryId="65879" title="Equipos WiFi" />
          </div>
        </div>

        {/* Productos Syscom - Firewalls y Seguridad */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4 mb-20">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">Firewalls y Dispositivos de Seguridad</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Equipos profesionales de ciberseguridad: firewalls, UTM, IPS/IDS y más con precios directos de distribuidor.
              </p>
            </div>
            <ProductGrid categoryId="66167" title="Firewalls y Seguridad" />
          </div>
        </div>

        {/* Productos Syscom - Redes e IT */}
        <div className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 mb-20">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">Soluciones de Redes e IT</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Equipos y software para redes empresariales con precios directos de distribuidor.
              </p>
            </div>
            <ProductGrid categoryId="26" title="Redes e IT" />
          </div>
        </div>

        {/* CTA Section */}
        <section className="py-16 bg-blue-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">
              ¿Necesitas una solución WiFi personalizada?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Nuestro equipo de expertos está listo para ayudarte a diseñar e
              implementar la solución perfecta para tu empresa u hogar.
            </p>
            <button
              onClick={() => handleQuoteRequest('Proyecto WiFi Personalizado')}
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

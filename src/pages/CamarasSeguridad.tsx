import React, { useState } from 'react';
import { Camera, Wifi, Sun, Eye, Download, HardDrive, Check } from 'lucide-react';
import Navbar from '../components/Navbar';
import CameraModal from '../components/CameraModal';
import RecordingSystemModal from '../components/RecordingSystemModal';
import CameraKitModal from '../components/CameraKitModal';
import QuoteRequestForm from '../components/QuoteRequestForm';
import ProductGrid from '../components/ProductGrid';

export default function CamarasSeguridad() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCameraType, setSelectedCameraType] = useState('');
  const [recordingModalOpen, setRecordingModalOpen] = useState(false);
  const [selectedRecordingType, setSelectedRecordingType] = useState('');
  const [kitModalOpen, setKitModalOpen] = useState(false);
  const [quoteFormOpen, setQuoteFormOpen] = useState(false);
  const [currentInstallationImage, setCurrentInstallationImage] = useState(0);

  const installationImages = [
    {
      url: "https://imgs.search.brave.com/gjPb6wDJspD_pecB3V6tfiu0IUukj6FX3UoqJsxz-v4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZnMu/ZXp2aXpsaWZlLmNv/bS8zMWVlODQ0ZDRj/MThlYjBhNmVhNTc0/NWEyZTQ0Y2IwYy5q/cGc_dmVyPTMzOTE5/OTk3MTI",
      caption: "Instalación de cámara Ezviz"
    },
    {
      url: "https://imgs.search.brave.com/kfM_hrQj9-20kbuRQcO8zHxt7AEx_cRzsjoK17r4WLc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zcHMu/Y29tLmFyL3Nwcy1s/bS9mYXFzLWNhbWFy/YXMtbW9uaXRvcmVh/ZGFzLXBhcmEtZW1w/cmVzYXMtY29tZXJj/aW9zLXktbG9jYWxl/cy0wMi5qcGc",
      caption: "Sistema de vigilancia para comercio"
    },
    {
      url: "https://imgs.search.brave.com/-sAQBWpCMBf4rmkwuOwBY0fo-CVOGvhRLARIbNGn8Us/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/c2VndXJpbGF0YW0u/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy9z/aXRlcy81LzIwMjUv/MDEvaW5zdGFsYWNp/b24tY2FtYXJhLWRl/LXNlZ3VyaWRhZC1l/eHRlcmlvci5qcGc",
      caption: "Cámaras de seguridad en residencia"
    },
    {
      url: "https://revistainnovacion.com/uploads/noticias/5/20231122144938_cama6ogar.jpg",
      caption: "Instalación de sistema de vigilancia exterior"
    },
    {
      url: "https://imgs.search.brave.com/9ZfjmXH6raEHzLeF_vMHf0M_BWiulXwC8Gg-O4ukhJU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/c2VndXJpbGF0YW0u/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy9z/aXRlcy81LzIwMjQv/MDUvb3JkZW5hZG9y/LXBvcnRhdGlsLWNj/dHYuanBn",
      caption: "Monitoreo de seguridad en tiempo real"
    }
  ];

  const nextInstallationImage = () => {
    setCurrentInstallationImage((prev) => (prev + 1) % installationImages.length);
  };

  const prevInstallationImage = () => {
    setCurrentInstallationImage((prev) => (prev - 1 + installationImages.length) % installationImages.length);
  };

  const openCameraModal = (type: string) => {
    setSelectedCameraType(type);
    setModalOpen(true);
  };

  const openRecordingModal = (type: string) => {
    setSelectedRecordingType(type);
    setRecordingModalOpen(true);
  };

  const handleExpertContact = () => {
    setQuoteFormOpen(true);
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          {/* Galería de Instalaciones - Movida arriba del título */}
          <div className="mb-16">
            <div className="relative overflow-hidden rounded-xl shadow-2xl">
              {/* Imágenes */}
              <div className="relative h-[500px]">
                {installationImages.map((image, index) => (
                  <div 
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ${
                      currentInstallationImage === index ? 'opacity-100' : 'opacity-0'
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
                onClick={prevInstallationImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white rounded-full p-2 backdrop-blur-sm transition-colors"
                aria-label="Imagen anterior"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button 
                onClick={nextInstallationImage}
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
                    onClick={() => setCurrentInstallationImage(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      currentInstallationImage === index ? 'bg-white' : 'bg-white/50'
                    }`}
                    aria-label={`Ir a imagen ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Cámaras de Seguridad</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Soluciones de videovigilancia profesional para hogares y negocios. Instalación, configuración y soporte técnico.
            </p>
          </div>

          {/* Kits Completos */}
          <div className="mb-20">
            <div className="bg-blue-50 rounded-xl p-8 mb-8">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="mb-6 md:mb-0 md:mr-8 w-full md:w-3/5">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Kits Completos de Videovigilancia</h2>
                  <p className="text-gray-700 mb-4 font-medium">
                    Soluciones todo en uno que incluyen:
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-2" />
                      <span className="text-gray-700">Cámaras de alta resolución</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-2" />
                      <span className="text-gray-700">Grabador DVR/NVR</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-2" />
                      <span className="text-gray-700">Cables de conexión</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-2" />
                      <span className="text-gray-700">Fuente de alimentación</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-2" />
                      <span className="text-gray-700">Accesorios de montaje</span>
                    </li>
                  </ul>
                  <button 
                    onClick={() => setKitModalOpen(true)}
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Ver Kits Disponibles
                  </button>
                </div>
                <div className="w-full md:w-2/5">
                  <img 
                    src="https://ftp3.syscom.mx/cdn-cgi/image/format=png,width=700,height=700/usuarios/fotos/BancoFotografiasSyscom/HIKVISION/KH1080PL4EC/KH1080PL4EC-l.PNG" 
                    alt="Kit de Videovigilancia" 
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Tipos de Cámaras */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Tipos de Cámaras</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Cámara IP */}
              <div className="bg-white shadow-xl rounded-lg overflow-hidden transition-transform hover:scale-105">
                <div className="h-48 overflow-hidden">
                  <img
                    src="https://i.pinimg.com/736x/da/26/2f/da262f0192d7d7a4e95bead0f81bcee0.jpg"
                    alt="Cámara IP"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <Camera className="w-6 h-6 text-blue-500 mr-2" />
                    <h4 className="text-xl font-semibold text-gray-900">Cámaras IP</h4>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Cámaras de alta resolución que se conectan a través de una red IP, ideales para monitoreo remoto.
                  </p>
                  <div className="flex justify-between items-center">
                    <button 
                      className="flex items-center text-blue-600 hover:text-blue-800"
                      onClick={() => openCameraModal('ip')}
                    >
                      <Eye className="w-4 h-4 mr-1" />
                      Ver detalles
                    </button>
                    <button className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                      <Download className="w-4 h-4 mr-1" />
                      Catálogo
                    </button>
                  </div>
                </div>
              </div>

              {/* Cámara WiFi */}
              <div className="bg-white shadow-xl rounded-lg overflow-hidden transition-transform hover:scale-105">
                <div className="h-48 overflow-hidden">
                  <img
                    src="https://i.pinimg.com/736x/7f/ca/39/7fca397d483ac5667d6e46a178511149.jpg"
                    alt="Cámara WiFi"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <Wifi className="w-6 h-6 text-blue-500 mr-2" />
                    <h4 className="text-xl font-semibold text-gray-900">Cámaras WiFi</h4>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Cámaras inalámbricas que se conectan a tu red WiFi, fáciles de instalar y configurar.
                  </p>
                  <div className="flex justify-between items-center">
                    <button 
                      className="flex items-center text-blue-600 hover:text-blue-800"
                      onClick={() => openCameraModal('wifi')}
                    >
                      <Eye className="w-4 h-4 mr-1" />
                      Ver detalles
                    </button>
                    <button className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                      <Download className="w-4 h-4 mr-1" />
                      Catálogo
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Cámara doble lente */}
              <div className="bg-white shadow-xl rounded-lg overflow-hidden transition-transform hover:scale-105">
                <div className="h-48 overflow-hidden">
                  <img
                    src="https://ftp3.syscom.mx/cdn-cgi/image/format=png,width=700,height=700/usuarios/fotos/BancoFotografiasSyscom/EZVIZ/CSH9C10MP/CSH9C10MP-l.PNG"
                    alt="Cámara doble lente"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <Camera className="w-6 h-6 text-blue-500 mr-2" />
                    <h4 className="text-xl font-semibold text-gray-900">Cámaras doble lente</h4>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Cámaras de alta resolución que te permiten mayor seguridad al poder monitorear todo a la vez.
                  </p>
                  <div className="flex justify-between items-center">
                    <button 
                      className="flex items-center text-blue-600 hover:text-blue-800"
                      onClick={() => openCameraModal('doble lente')}
                    >
                      <Eye className="w-4 h-4 mr-1" />
                      Ver detalles
                    </button>
                    <button className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                      <Download className="w-4 h-4 mr-1" />
                      Catálogo
                    </button>
                  </div>
                </div>
              </div>

              {/* Cámara Solar */}
              <div className="bg-white shadow-xl rounded-lg overflow-hidden transition-transform hover:scale-105">
                <div className="h-48 overflow-hidden">
                  <img
                    src="https://i.pinimg.com/736x/a3/91/91/a3919189daf8bbcbde7fe25418cf8f16.jpg"
                    alt="Cámara Solar"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <Sun className="w-6 h-6 text-blue-500 mr-2" />
                    <h4 className="text-xl font-semibold text-gray-900">Cámaras Recargables</h4>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Cámaras con paneles solares integrados, perfectas para ubicaciones sin acceso a energía eléctrica.
                  </p>
                  <div className="flex justify-between items-center">
                    <button 
                      className="flex items-center text-blue-600 hover:text-blue-800"
                      onClick={() => openCameraModal('solar')}
                    >
                      <Eye className="w-4 h-4 mr-1" />
                      Ver detalles
                    </button>
                    <button className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                      <Download className="w-4 h-4 mr-1" />
                      Catálogo
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sección de NVRs y DVRs */}
          <div className="mt-20">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Sistemas de Grabación</h3>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-8">
              {/* NVR */}
              <div className="bg-white shadow-xl rounded-lg overflow-hidden transition-transform hover:scale-105">
                <div className="h-48 overflow-hidden">
                  <img
                    src="https://ftp3.syscom.mx/usuarios/fotos/BancoFotografiasSyscom/HIKVISION/DS7616NIQ2_16P(D)/DS7616NIQ2_16P(D)-p.PNG"
                    alt="NVR System"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <HardDrive className="w-6 h-6 text-blue-500 mr-2" />
                    <h4 className="text-xl font-semibold text-gray-900">NVR (Network Video Recorder)</h4>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Sistemas de grabación para cámaras IP, que almacenan video en alta calidad y permiten acceso remoto.
                  </p>
                  <div className="flex justify-between items-center">
                    <button 
                      className="flex items-center text-blue-600 hover:text-blue-800"
                      onClick={() => openRecordingModal('nvr')}
                    >
                      <Eye className="w-4 h-4 mr-1" />
                      Ver detalles
                    </button>
                    <button className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                      <Download className="w-4 h-4 mr-1" />
                      Catálogo
                    </button>
                  </div>
                </div>
              </div>

              {/* DVR */}
              <div className="bg-white shadow-xl rounded-lg overflow-hidden transition-transform hover:scale-105">
                <div className="h-48 overflow-hidden">
                  <img
                    src="https://ftp3.syscom.mx/cdn-cgi/image/format=png,width=700,height=700/usuarios/fotos/BancoFotografiasSyscom/HIKVISION/IDS7216HQHIM1_XT/IDS7216HQHIM1_XT-l.PNG"
                    alt="DVR System"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <HardDrive className="w-6 h-6 text-blue-500 mr-2" />
                    <h4 className="text-xl font-semibold text-gray-900">DVR (Digital Video Recorder)</h4>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Sistemas de grabación para cámaras análogas, ideales para instalaciones existentes.
                  </p>
                  <div className="flex justify-between items-center">
                    <button 
                      className="flex items-center text-blue-600 hover:text-blue-800"
                      onClick={() => openRecordingModal('dvr')}
                    >
                      <Eye className="w-4 h-4 mr-1" />
                      Ver detalles
                    </button>
                    <button className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                      <Download className="w-4 h-4 mr-1" />
                      Catálogo
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Productos Syscom */}
          <div className="mt-20 mb-20">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">Catálogo de Cámaras y Videovigilancia</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Explora nuestra selección de equipos profesionales de videovigilancia con precios directos de distribuidor.
              </p>
            </div>
            <ProductGrid categoryId="22" title="Cámaras de Seguridad" />
          </div>

          {/* CTA Section */}
          <div className="mt-20 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">¿Necesitas ayuda para elegir el sistema adecuado?</h3>
              <p className="mb-6">Nuestros expertos están listos para asesorarte y encontrar la mejor solución para tus necesidades.</p>
              {/* Botón "Contactar un Experto" */}
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

      {/* Modal de catálogo de cámaras */}
      <CameraModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        cameraType={selectedCameraType} 
      />

      {/* Modal de catálogo de sistemas de grabación */}
      <RecordingSystemModal
        isOpen={recordingModalOpen}
        onClose={() => setRecordingModalOpen(false)}
        systemType={selectedRecordingType}
      />

      {/* Modal de kits de cámaras */}
      <CameraKitModal
        isOpen={kitModalOpen}
        onClose={() => setKitModalOpen(false)}
      />

      {/* Formulario de contacto con experto */}
      <QuoteRequestForm
        isOpen={quoteFormOpen}
        onClose={() => setQuoteFormOpen(false)}
        cameraInfo={null}
      />
    </>
  );
}
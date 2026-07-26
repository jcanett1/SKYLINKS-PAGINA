import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import CamarasSeguridad from './pages/CamarasSeguridad';
import AlarmasSeguridad from './pages/AlarmasSeguridad';
import GestionIDF from './pages/GestionIDF';
import ConfiguracionRed from './pages/ConfiguracionRed';
import RedesWifi from './pages/RedesWifi';
import './index.css';
import ParaTuHogar from './pages/ParaTuHogar';
import CyberSecurity from './pages/CyberSecurity';
import AutomatizacionesIA from './pages/AutomatizacionesIA';
import { CartProvider } from './context/CartContext';
import CartSidebar from './components/CartSidebar';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <CartProvider>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/para-tu-hogar" element={<ParaTuHogar />} />
          <Route path="/camaras-seguridad" element={<CamarasSeguridad />} />
          <Route path="/alarmas-seguridad" element={<AlarmasSeguridad />} />
          <Route path="/gestion-idf" element={<GestionIDF />} />
          <Route path="/configuracion-red" element={<ConfiguracionRed />} />
          <Route path="/redes-wifi" element={<RedesWifi />} />
          <Route path="/cyber-security" element={<CyberSecurity />} />
          <Route path="/automatizaciones-ia" element={<AutomatizacionesIA />} />
        </Routes>
        <CartSidebar />
      </CartProvider>
    </Router>
  </StrictMode>
);
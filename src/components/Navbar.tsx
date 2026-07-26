import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { TbDeviceCctv } from 'react-icons/tb';
import { FaBell, FaServer, FaNetworkWired, FaWifi, FaHome } from 'react-icons/fa';
import { Bot } from 'lucide-react';
import { Shield, ShoppingBag, TrendingUp } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { getExchangeRate } from '../lib/syscomApi';

export default function Navbar() {
  const { toggleCart, totalItems } = useCart();
  const [exchangeRate, setExchangeRate] = useState<string>('0.00');

  useEffect(() => {
    const fetchRate = async () => {
      try {
        const rate = await getExchangeRate();
        setExchangeRate(rate.normal || '0.00');
      } catch (err) {
        console.error('Error fetching exchange rate:', err);
      }
    };
    fetchRate();
  }, []);

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex flex-col">
            <span className="text-2xl font-bold text-blue-900">
              SKYLINKS
            </span>
            <span className="text-xs text-gray-600 font-medium -mt-1">
              TELECOMUNICACIONES VOZ & DATOS
            </span>
          </Link>
          <div className="hidden md:flex space-x-8 items-center">
             <Link to="/para-tu-hogar" className="flex flex-col items-center text-gray-700 hover:text-blue-600">
              <FaHome className="text-xl" />
              <span className="text-xs mt-1">Para tu hogar</span>
            </Link>
            <Link to="/camaras-seguridad" className="flex flex-col items-center text-gray-700 hover:text-blue-600">
              <TbDeviceCctv className="text-xl" />
              <span className="text-xs mt-1">Cámaras</span>
            </Link>
            <Link to="/alarmas-seguridad" className="flex flex-col items-center text-gray-700 hover:text-blue-600">
              <FaBell className="text-xl" />
              <span className="text-xs mt-1">Alarmas</span>
            </Link>
            <Link to="/gestion-idf" className="flex flex-col items-center text-gray-700 hover:text-blue-600">
              <FaServer className="text-xl" />
              <span className="text-xs mt-1">IDF</span>
            </Link>
            <Link to="/configuracion-red" className="flex flex-col items-center text-gray-700 hover:text-blue-600">
              <FaNetworkWired className="text-xl" />
              <span className="text-xs mt-1">Redes</span>
            </Link>
            <Link to="/redes-wifi" className="flex flex-col items-center text-gray-700 hover:text-blue-600">
              <FaWifi className="text-xl" />
              <span className="text-xs mt-1">WiFi</span>
            </Link>
            <Link to="/cyber-security" className="flex flex-col items-center text-gray-700 hover:text-blue-600">
              <Shield className="w-5 h-5" />
              <span className="text-xs mt-1">Ciberseguridad</span>
            </Link>
            <Link to="/automatizaciones-ia" className="flex flex-col items-center text-gray-700 hover:text-blue-600">
              <Bot className="w-5 h-5" />
              <span className="text-xs mt-1">IA</span>
            </Link>
          </div>
          {/* Exchange rate */}
          <div className="flex items-center gap-2 px-3 py-1 rounded-lg bg-gray-50 mr-4">
            <TrendingUp className="w-4 h-4 text-gray-600" />
            <span className="text-xs text-gray-600 font-semibold">
              USD/MXN: ${exchangeRate}
            </span>
          </div>

          {/* Cart button */}
          <button
            onClick={toggleCart}
            className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <ShoppingBag className="w-6 h-6 text-gray-700" />
            {totalItems > 0 && (
              <span
                className="absolute -top-1 -right-1 w-5 h-5 rounded-full text-xs font-bold text-white flex items-center justify-center"
                style={{ background: '#00C853' }}
              >
                {totalItems > 9 ? '9+' : totalItems}
              </span>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}

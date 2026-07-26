import React, { useState } from 'react';
import { X, Minus, Plus, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import toast from 'react-hot-toast';

export default function CartSidebar() {
  const {
    items,
    isOpen,
    closeCart,
    removeItem,
    updateQuantity,
    clearCart,
    totalItems,
    totalPrice,
  } = useCart();

  const [showQuoteForm, setShowQuoteForm] = useState(false);
  const [quoteEmail, setQuoteEmail] = useState('');
  const [quoteName, setQuoteName] = useState('');
  const [quotePhone, setQuotePhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleRequestQuote = async () => {
    if (!quoteName || !quoteEmail || !quotePhone) {
      toast.error('Por favor completa todos los campos');
      return;
    }

    setIsSubmitting(true);
    try {
      const cartItems = items
        .map(
          (item) =>
            `${item.product_name} (SKU: ${item.product_sku}) - Cantidad: ${item.quantity} - $${item.product_price.toFixed(2)} MXN`
        )
        .join('\n');

      const message = `Solicitud de Cotización\n\nNombre: ${quoteName}\nEmail: ${quoteEmail}\nTeléfono: ${quotePhone}\n\nProductos:\n${cartItems}\n\nTotal: $${totalPrice.toFixed(2)} MXN`;

      // Send quote request via email
      const response = await fetch('/api/send-quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: quoteName,
          email: quoteEmail,
          phone: quotePhone,
          items: items,
          total: totalPrice,
        }),
      });

      if (!response.ok) {
        // Fallback: show message to user
        const whatsappMessage = encodeURIComponent(
          `Hola, me gustaría solicitar una cotización para:\n\n${cartItems}\n\nTotal: $${totalPrice.toFixed(2)} MXN`
        );
        window.open(
          `https://wa.me/?text=${whatsappMessage}`,
          '_blank'
        );
      }

      toast.success('¡Solicitud de cotización enviada! Nos pondremos en contacto pronto.');
      setShowQuoteForm(false);
      setQuoteEmail('');
      setQuoteName('');
      setQuotePhone('');
      clearCart();
      closeCart();
    } catch (error) {
      console.error('Error sending quote:', error);
      toast.error('Error al enviar la cotización');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-40 transition-opacity"
        onClick={closeCart}
      />

      {/* Sidebar */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl z-50 flex flex-col animate-slide-in">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <ShoppingBag className="w-6 h-6" style={{ color: '#0A2540' }} />
            <h2 className="text-xl font-bold" style={{ color: '#0A2540' }}>
              Mi Carrito
            </h2>
            {totalItems > 0 && (
              <span
                className="text-xs font-bold px-2 py-0.5 rounded-full text-white"
                style={{ background: '#00C853' }}
              >
                {totalItems}
              </span>
            )}
          </div>
          <button
            onClick={closeCart}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-gray-400">
              <ShoppingBag className="w-16 h-16 mb-4 opacity-30" />
              <p className="text-lg font-medium">Tu carrito está vacío</p>
              <p className="text-sm mt-1">Agrega productos para comenzar</p>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 p-4 rounded-xl border border-gray-100 hover:border-gray-200 transition-colors"
                >
                  <div className="w-20 h-20 rounded-lg overflow-hidden bg-gray-50 flex-shrink-0">
                    {item.product_image ? (
                      <img
                        src={item.product_image}
                        alt={item.product_name}
                        className="w-full h-full object-contain"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <ShoppingBag className="w-8 h-8 text-gray-300" />
                      </div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-semibold text-gray-800 truncate">
                      {item.product_name}
                    </h4>
                    {item.product_sku && (
                      <p className="text-xs text-gray-400 mt-0.5">
                        SKU: {item.product_sku}
                      </p>
                    )}
                    <p
                      className="text-sm font-bold mt-1"
                      style={{ color: '#0A2540' }}
                    >
                      ${item.product_price.toLocaleString('es-MX', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })} MXN
                    </p>

                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        className="w-7 h-7 rounded-md border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm font-semibold w-8 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="w-7 h-7 rounded-md border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="ml-auto p-1.5 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-md transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-gray-100 p-6 space-y-4">
            {!showQuoteForm ? (
              <>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500">Subtotal</span>
                  <span
                    className="text-xl font-bold"
                    style={{ color: '#0A2540' }}
                  >
                    ${totalPrice.toLocaleString('es-MX', {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })} MXN
                  </span>
                </div>
                <button
                  onClick={() => setShowQuoteForm(true)}
                  className="w-full py-3.5 rounded-xl font-bold text-white transition-all hover:opacity-90 flex items-center justify-center gap-2"
                  style={{ background: '#00C853' }}
                >
                  <ShoppingBag className="w-4 h-4" />
                  Solicitar Cotización
                </button>
                <button
                  onClick={clearCart}
                  className="w-full py-2.5 rounded-xl font-semibold text-gray-500 border border-gray-200 hover:bg-gray-50 transition-colors text-sm"
                >
                  Vaciar carrito
                </button>
              </>
            ) : (
              <>
                <h3 className="font-bold text-gray-800 mb-4">Datos para la cotización</h3>
                <input
                  type="text"
                  placeholder="Nombre completo"
                  value={quoteName}
                  onChange={(e) => setQuoteName(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-green-400/50"
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={quoteEmail}
                  onChange={(e) => setQuoteEmail(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-green-400/50"
                />
                <input
                  type="tel"
                  placeholder="Teléfono"
                  value={quotePhone}
                  onChange={(e) => setQuotePhone(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-green-400/50"
                />
                <button
                  onClick={handleRequestQuote}
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-xl font-bold text-white transition-all hover:opacity-90 disabled:opacity-60 flex items-center justify-center gap-2"
                  style={{ background: '#00C853' }}
                >
                  <ArrowRight className="w-4 h-4" />
                  {isSubmitting ? 'Enviando...' : 'Enviar Cotización'}
                </button>
                <button
                  onClick={() => setShowQuoteForm(false)}
                  className="w-full py-2.5 rounded-xl font-semibold text-gray-500 border border-gray-200 hover:bg-gray-50 transition-colors text-sm"
                >
                  Volver
                </button>
              </>
            )}
          </div>
        )}
      </div>
    </>
  );
}

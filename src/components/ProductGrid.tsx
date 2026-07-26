import React, { useState, useEffect } from 'react';
import { ShoppingBag, ChevronLeft, ChevronRight, Loader2, AlertCircle } from 'lucide-react';
import { fetchProductsByCategory, searchProducts, SyscomProduct } from '../lib/syscomApi';
import { useCart } from '../context/CartContext';
import ProductSearch from './ProductSearch';

interface ProductGridProps {
  categoryId: string;
  title?: string;
  searchQuery?: string;
}

export default function ProductGrid({ categoryId, title, searchQuery }: ProductGridProps) {
  const [products, setProducts] = useState<SyscomProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [total, setTotal] = useState(0);
  const [searchTerm, setSearchTerm] = useState(searchQuery || '');
  const [selectedBrand, setSelectedBrand] = useState('');
  const { addItem } = useCart();

  useEffect(() => {
    setPage(1);
  }, [categoryId, searchQuery]);

  useEffect(() => {
    loadProducts();
  }, [categoryId, page, searchTerm, selectedBrand]);

  const loadProducts = async () => {
    setLoading(true);
    setError(null);
    try {
      let result;
      if (searchTerm) {
        result = await searchProducts(searchTerm, page);
      } else {
        result = await fetchProductsByCategory(categoryId, page);
      }
      setProducts(result.products);
      setTotal(result.total);
      setTotalPages(result.pages);
    } catch (err) {
      const errorMsg = err instanceof Error ? err.message : 'Error cargando productos';
      console.error('Load products error:', err);
      setError(errorMsg);
      setProducts([]);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (query: string) => {
    setSearchTerm(query);
    setPage(1);
  };

  const handleBrandFilter = (brandId: string) => {
    setSelectedBrand(brandId);
  };

  const getPrice = (product: SyscomProduct): number => {
    const p = product.precios;
    // Usar precio_lista como precio principal
    if (p.precio_lista) return parseFloat(p.precio_lista);
    if (p.precio_1) return parseFloat(p.precio_1);
    return 0;
  };

  const getListPrice = (product: SyscomProduct): number => {
    return parseFloat(product.precios.precio_lista || product.precios.precio_1 || '0');
  };

  const hasDiscount = (product: SyscomProduct): boolean => {
    const discountPrice = product.precios.precio_descuento ? parseFloat(product.precios.precio_descuento) : 0;
    const listPrice = getListPrice(product);
    return discountPrice > 0 && listPrice > 0 && discountPrice < listPrice;
  };

  const handleAddToCart = (product: SyscomProduct) => {
    const price = getPrice(product);
    addItem({
      product_id: product.producto_id,
      product_name: product.titulo || product.modelo,
      product_image: product.img_portada || '',
      product_price: price,
      product_sku: product.modelo,
      quantity: 1,
      category: categoryId,
    });
  };

  return (
    <div>
      <ProductSearch onSearch={handleSearch} onBrandFilter={handleBrandFilter} isLoading={loading} />

      {/* Results count */}
      {!loading && !error && total > 0 && (
        <p className="text-sm text-gray-500 mb-4">
          {total.toLocaleString()} productos encontrados
        </p>
      )}

      {/* Loading */}
      {loading && (
        <div className="flex items-center justify-center py-20">
          <Loader2 className="w-8 h-8 animate-spin text-gray-400" />
          <span className="ml-3 text-gray-500">Cargando productos...</span>
        </div>
      )}

      {/* Error */}
      {error && !loading && (
        <div className="flex items-center justify-center py-16 text-red-500">
          <AlertCircle className="w-5 h-5 mr-2" />
          <span>{error}</span>
        </div>
      )}

      {/* Products grid */}
      {!loading && !error && products.length > 0 && (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {products.map((product) => {
              const img = product.img_portada;
              const discount = hasDiscount(product);
              const price = getPrice(product);
              const listPrice = getListPrice(product);
              const inStock = product.total_existencia > 0;

              return (
                <div
                  key={product.producto_id}
                  className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 group flex flex-col"
                >
                  <div className="relative h-48 bg-gray-50 flex items-center justify-center overflow-hidden">
                    {img ? (
                      <img
                        src={img}
                        alt={product.titulo}
                        className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <ShoppingBag className="w-12 h-12 text-gray-200" />
                    )}
                    {discount && (
                      <span className="absolute top-3 left-3 px-2 py-0.5 rounded-md text-xs font-bold text-white bg-red-500">
                        Oferta
                      </span>
                    )}
                    {!inStock && (
                      <span className="absolute top-3 right-3 px-2 py-0.5 rounded-md text-xs font-bold text-white bg-gray-500">
                        Agotado
                      </span>
                    )}
                  </div>

                  <div className="p-4 flex flex-col flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      {product.marca_logo && (
                        <img src={product.marca_logo} alt={product.marca} className="h-4 w-auto" />
                      )}
                      <p className="text-xs text-gray-400">{product.marca}</p>
                    </div>
                    <h4 className="text-sm font-semibold text-gray-800 line-clamp-2 mb-1 flex-1">
                      {product.titulo}
                    </h4>
                    <p className="text-xs text-gray-400 mb-2">
                      Modelo: {product.modelo}
                    </p>
                    {product.garantia && (
                      <p className="text-xs text-gray-400 mb-2">
                        Garantía: {product.garantia}
                      </p>
                    )}

                    <div className="mb-3">
                      <p className={`text-xs font-semibold ${inStock ? 'text-green-600' : 'text-gray-400'}`}>
                        {inStock ? `Stock: ${product.total_existencia} unidades` : 'Agotado'}
                      </p>
                    </div>

                    <div className="mt-auto">
                      <div className="flex items-baseline gap-2 mb-3">
                        <span
                          className="text-lg font-bold"
                          style={{ color: '#0A2540' }}
                        >
                          ${price.toLocaleString('es-MX', {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          })} MXN
                        </span>
                      </div>

                      {discount && (
                        <div className="mb-2">
                          <span className="text-xs text-green-600 font-semibold">
                            Oferta: ${parseFloat(product.precios.precio_descuento || '0').toLocaleString('es-MX', {
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2,
                            })} MXN
                          </span>
                        </div>
                      )}

                      <button
                        onClick={() => handleAddToCart(product)}
                        disabled={!inStock}
                        className="w-full py-2.5 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all hover:opacity-90 disabled:opacity-40 disabled:cursor-not-allowed"
                        style={{
                          background: inStock ? '#00C853' : '#ccc',
                          color: 'white',
                        }}
                      >
                        <ShoppingBag className="w-4 h-4" />
                        {inStock ? 'Agregar al carrito' : 'No disponible'}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-3 mt-10">
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
                className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <span className="text-sm text-gray-600 font-medium">
                Página {page} de {totalPages}
              </span>
              <button
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
                className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}
        </>
      )}

      {/* No results */}
      {!loading && !error && products.length === 0 && (
        <div className="text-center py-16 text-gray-400">
          <ShoppingBag className="w-12 h-12 mx-auto mb-3 opacity-30" />
          <p className="font-medium">No se encontraron productos</p>
          <p className="text-sm mt-1">Intenta con otra búsqueda o categoría</p>
        </div>
      )}
    </div>
  );
}

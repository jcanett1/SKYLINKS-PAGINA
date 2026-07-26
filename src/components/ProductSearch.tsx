import React, { useEffect, useState } from 'react';
import { Search, X, ChevronDown } from 'lucide-react';
import { fetchBrands, SyscomBrand } from '../lib/syscomApi';

interface ProductSearchProps {
  onSearch: (query: string) => void;
  onBrandFilter: (brandId: string) => void;
  isLoading?: boolean;
}

export default function ProductSearch({ onSearch, onBrandFilter, isLoading = false }: ProductSearchProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [brands, setBrands] = useState<SyscomBrand[]>([]);
  const [selectedBrand, setSelectedBrand] = useState('');
  const [showBrandDropdown, setShowBrandDropdown] = useState(false);
  const [brandsLoading, setBrandsLoading] = useState(true);

  useEffect(() => {
    const loadBrands = async () => {
      try {
        const brandList = await fetchBrands();
        setBrands(brandList);
      } catch (err) {
        console.error('Error loading brands:', err);
      } finally {
        setBrandsLoading(false);
      }
    };
    loadBrands();
  }, []);

  const handleSearch = async () => {
    if (searchQuery.trim()) {
      try {
        onSearch(searchQuery);
      } catch (err) {
        console.error('Search error:', err);
      }
    }
  };

  const handleBrandSelect = (brandId: string) => {
    setSelectedBrand(brandId);
    onBrandFilter(brandId);
    setShowBrandDropdown(false);
  };

  const handleClearBrand = () => {
    setSelectedBrand('');
    onBrandFilter('');
  };

  const selectedBrandName = brands.find((b) => b.id === selectedBrand)?.nombre;

  return (
    <div className="space-y-4 mb-6">
      {/* Search bar */}
      <div className="flex gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
            placeholder="Buscar por nombre del producto..."
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-400/50 text-sm"
            disabled={isLoading}
          />
        </div>
        <button
          onClick={handleSearch}
          disabled={isLoading}
          className="px-6 py-3 rounded-xl font-semibold text-white text-sm transition-all hover:opacity-90 disabled:opacity-60"
          style={{ background: '#0A2540' }}
        >
          Buscar
        </button>
      </div>

      {/* Brand filter */}
      <div className="flex gap-3">
        <div className="relative flex-1 max-w-xs">
          <button
            onClick={() => setShowBrandDropdown(!showBrandDropdown)}
            disabled={brandsLoading || isLoading}
            className="w-full flex items-center justify-between gap-2 px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-green-400/50 disabled:opacity-60"
          >
            <span className="text-gray-700">
              {selectedBrandName ? `Marca: ${selectedBrandName}` : 'Filtrar por marca...'}
            </span>
            <ChevronDown
              className={`w-4 h-4 text-gray-400 transition-transform ${
                showBrandDropdown ? 'rotate-180' : ''
              }`}
            />
          </button>

          {/* Dropdown menu */}
          {showBrandDropdown && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-lg z-50 max-h-64 overflow-y-auto">
              <button
                onClick={() => handleBrandSelect('')}
                className={`w-full text-left px-4 py-2.5 hover:bg-gray-50 border-b border-gray-100 text-sm ${
                  selectedBrand === '' ? 'bg-green-50 text-green-700 font-semibold' : 'text-gray-700'
                }`}
              >
                Todas las marcas
              </button>
              {brands.map((brand) => (
                <button
                  key={brand.id}
                  onClick={() => handleBrandSelect(brand.id)}
                  className={`w-full text-left px-4 py-2.5 hover:bg-gray-50 border-b border-gray-100 text-sm last:border-b-0 ${
                    selectedBrand === brand.id
                      ? 'bg-green-50 text-green-700 font-semibold'
                      : 'text-gray-700'
                  }`}
                >
                  {brand.nombre}
                </button>
              ))}
            </div>
          )}
        </div>

        {selectedBrand && (
          <button
            onClick={handleClearBrand}
            className="flex items-center gap-2 px-4 py-3 rounded-xl border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors text-sm font-semibold"
          >
            <X className="w-4 h-4" />
            Limpiar
          </button>
        )}
      </div>
    </div>
  );
}

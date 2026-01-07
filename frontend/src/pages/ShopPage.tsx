import { useState, useMemo, useEffect } from 'react';
import { Product } from '../types';
import { ProductGrid } from '../components/product';
import { Sidebar } from '../components/layout/Sidebar';
import { api } from '../services/api';

interface ShopPageProps {
  title: string;
  products?: Product[];
  category?: string;
}

export function ShopPage({ title, products: initialProducts, category }: ShopPageProps) {
  const [products, setProducts] = useState<Product[]>(initialProducts || []);
  const [isLoading, setIsLoading] = useState(false);

  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 100000]);

  useEffect(() => {
    if (initialProducts) {
      setProducts(initialProducts);
    } else if (category) {
      setIsLoading(true);
      api.getProductsByCategory(category)
        .then(data => {
          if (data.length === 0) {
            // Fallback: fetch all and filter if backend category doesn't match exactly?
            // For now, trust the API returns empty list if no match.
            // Or maybe try fetching all and client-side filter if needed?
            // Let's stick to API.
          }
          setProducts(data);
        })
        .catch(err => console.error(err))
        .finally(() => setIsLoading(false));
    } else {
      // Fallback or explicit fetch all if no category?
      // Assuming either initialProducts or category is provided.
    }
  }, [category, initialProducts]);

  // Get unique sizes and brands from products
  const availableSizes = useMemo(() => {
    const sizes = new Set<string>();
    products.forEach(product => {
      product.sizes.forEach(size => sizes.add(size));
    });
    return Array.from(sizes).sort();
  }, [products]);

  const availableBrands = useMemo(() => {
    const brands = new Set<string>();
    products.forEach(product => brands.add(product.brand));
    return Array.from(brands).sort();
  }, [products]);

  // Filter products
  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const sizeMatch = selectedSizes.length === 0 || product.sizes.some(size => selectedSizes.includes(size));
      const brandMatch = selectedBrands.length === 0 || selectedBrands.includes(product.brand);
      const priceMatch = product.price >= priceRange[0] && product.price <= priceRange[1];

      return sizeMatch && brandMatch && priceMatch;
    });
  }, [products, selectedSizes, selectedBrands, priceRange]);

  const handleSizeToggle = (size: string) => {
    setSelectedSizes(prev =>
      prev.includes(size) ? prev.filter(s => s !== size) : [...prev, size]
    );
  };

  const handleBrandToggle = (brand: string) => {
    setSelectedBrands(prev =>
      prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand]
    );
  };

  const handleReset = () => {
    setSelectedSizes([]);
    setSelectedBrands([]);
    setPriceRange([0, 100000]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">{title}</h1>
          <p className="text-gray-600">
            Showing {filteredProducts.length} of {products.length} {products.length === 1 ? 'product' : 'products'}
          </p>
        </div>

        {/* Main Content with Sidebar */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <Sidebar
              selectedSizes={selectedSizes}
              onSizeToggle={handleSizeToggle}
              selectedBrands={selectedBrands}
              onBrandToggle={handleBrandToggle}
              priceRange={priceRange}
              onPriceChange={setPriceRange}
              onReset={handleReset}
              availableSizes={availableSizes}
              availableBrands={availableBrands}
            />
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            {filteredProducts.length > 0 ? (
              <ProductGrid products={filteredProducts} />
            ) : (
              <div className="text-center py-16 bg-white rounded-lg shadow-sm">
                <p className="text-gray-500 text-lg mb-2">No products found matching your filters.</p>
                <button
                  onClick={handleReset}
                  className="text-[#1a3a6b] hover:underline font-medium"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

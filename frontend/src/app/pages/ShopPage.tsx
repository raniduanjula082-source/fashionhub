import { useState } from 'react';
import { Sidebar } from '../components/Sidebar';
import { ProductGrid } from '../components/ProductGrid';
import { Product } from '../components/ProductCard';
import { CartItem } from '../components/ShoppingCartModal';

interface ShopPageProps {
  title: string;
  products: Product[];
  onAddToCart: (product: Product, size: string) => void;
}

export function ShopPage({ title, products, onAddToCart }: ShopPageProps) {
  const [selectedCategory, setSelectedCategory] = useState('All Products');
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 200]);

  // Get unique categories from products
  const categories = ['All Products', ...Array.from(new Set(products.map(p => p.category)))];

  // Filter products
  const filteredProducts = products.filter(product => {
    const categoryMatch = selectedCategory === 'All Products' || product.category === selectedCategory;
    const sizeMatch = selectedSizes.length === 0 || product.sizes.some(size => selectedSizes.includes(size));
    const colorMatch = selectedColors.length === 0 || product.colors.some(color => selectedColors.includes(color));
    const priceMatch = product.price >= priceRange[0] && product.price <= priceRange[1];

    return categoryMatch && sizeMatch && colorMatch && priceMatch;
  });

  const handleSizeToggle = (size: string) => {
    setSelectedSizes(prev =>
      prev.includes(size) ? prev.filter(s => s !== size) : [...prev, size]
    );
  };

  const handleColorToggle = (color: string) => {
    setSelectedColors(prev =>
      prev.includes(color) ? prev.filter(c => c !== color) : [...prev, color]
    );
  };

  return (
    <div className="flex flex-col lg:flex-row max-w-7xl mx-auto w-full px-4 py-8 gap-6">
      <Sidebar
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        selectedSizes={selectedSizes}
        onSizeToggle={handleSizeToggle}
        selectedColors={selectedColors}
        onColorToggle={handleColorToggle}
        priceRange={priceRange}
        onPriceChange={setPriceRange}
      />

      <main className="flex-1">
        <div className="mb-6 flex justify-between items-center">
          <h1 className="text-3xl">
            {title}
          </h1>
          <p className="text-gray-600">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'Product' : 'Products'}
          </p>
        </div>

        <ProductGrid products={filteredProducts} onAddToCart={onAddToCart} />
      </main>
    </div>
  );
}

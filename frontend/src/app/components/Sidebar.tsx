import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

interface SidebarProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  selectedSizes: string[];
  onSizeToggle: (size: string) => void;
  selectedColors: string[];
  onColorToggle: (color: string) => void;
  priceRange: [number, number];
  onPriceChange: (range: [number, number]) => void;
}

export function Sidebar({
  selectedCategory,
  onCategoryChange,
  selectedSizes,
  onSizeToggle,
  selectedColors,
  onColorToggle,
  priceRange,
  onPriceChange,
}: SidebarProps) {
  const [expandedSections, setExpandedSections] = useState({
    category: true,
    size: true,
    color: true,
    price: true,
  });

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const categories = [
    'All Products',
    'Shirts',
    'T-Shirts',
    'Polo Shirts',
    'Casual Shirts',
    'Formal Shirts',
    'Jeans',
    'Trousers',
  ];

  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
  const colors = [
    { name: 'Black', hex: '#000000' },
    { name: 'White', hex: '#FFFFFF' },
    { name: 'Blue', hex: '#1E40AF' },
    { name: 'Red', hex: '#DC2626' },
    { name: 'Green', hex: '#16A34A' },
    { name: 'Navy', hex: '#1a3a6b' },
    { name: 'Gray', hex: '#6B7280' },
  ];

  return (
    <aside className="w-full lg:w-64 bg-white p-4 lg:p-6 border-r">
      <h2 className="mb-6">Filters</h2>

      {/* Category Filter */}
      <div className="mb-6">
        <button
          onClick={() => toggleSection('category')}
          className="flex items-center justify-between w-full mb-3"
        >
          <h3 className="uppercase text-sm">Category</h3>
          {expandedSections.category ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>
        {expandedSections.category && (
          <div className="space-y-2">
            {categories.map(category => (
              <label key={category} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="category"
                  checked={selectedCategory === category}
                  onChange={() => onCategoryChange(category)}
                  className="w-4 h-4"
                />
                <span className="text-sm">{category}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Size Filter */}
      <div className="mb-6 pb-6 border-b">
        <button
          onClick={() => toggleSection('size')}
          className="flex items-center justify-between w-full mb-3"
        >
          <h3 className="uppercase text-sm">Size</h3>
          {expandedSections.size ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>
        {expandedSections.size && (
          <div className="flex flex-wrap gap-2">
            {sizes.map(size => (
              <button
                key={size}
                onClick={() => onSizeToggle(size)}
                className={`px-4 py-2 border rounded transition-colors ${
                  selectedSizes.includes(size)
                    ? 'bg-[#1a3a6b] text-white border-[#1a3a6b]'
                    : 'bg-white hover:border-[#1a3a6b]'
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Color Filter */}
      <div className="mb-6 pb-6 border-b">
        <button
          onClick={() => toggleSection('color')}
          className="flex items-center justify-between w-full mb-3"
        >
          <h3 className="uppercase text-sm">Color</h3>
          {expandedSections.color ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>
        {expandedSections.color && (
          <div className="space-y-2">
            {colors.map(color => (
              <label key={color.name} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={selectedColors.includes(color.name)}
                  onChange={() => onColorToggle(color.name)}
                  className="w-4 h-4"
                />
                <div
                  className="w-5 h-5 rounded-full border-2"
                  style={{ backgroundColor: color.hex }}
                />
                <span className="text-sm">{color.name}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Price Filter */}
      <div className="mb-6">
        <button
          onClick={() => toggleSection('price')}
          className="flex items-center justify-between w-full mb-3"
        >
          <h3 className="uppercase text-sm">Price Range</h3>
          {expandedSections.price ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>
        {expandedSections.price && (
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <input
                type="number"
                value={priceRange[0]}
                onChange={(e) => onPriceChange([Number(e.target.value), priceRange[1]])}
                className="w-20 px-2 py-1 border rounded"
                min="0"
              />
              <span>-</span>
              <input
                type="number"
                value={priceRange[1]}
                onChange={(e) => onPriceChange([priceRange[0], Number(e.target.value)])}
                className="w-20 px-2 py-1 border rounded"
                min="0"
              />
            </div>
            <input
              type="range"
              min="0"
              max="200"
              value={priceRange[1]}
              onChange={(e) => onPriceChange([priceRange[0], Number(e.target.value)])}
              className="w-full"
            />
            <p className="text-sm text-gray-600">
              ${priceRange[0]} - ${priceRange[1]}
            </p>
          </div>
        )}
      </div>

      {/* Reset Button */}
      <button
        onClick={() => {
          onCategoryChange('All Products');
          onPriceChange([0, 200]);
        }}
        className="w-full py-2 border border-[#1a3a6b] text-[#1a3a6b] rounded hover:bg-[#1a3a6b] hover:text-white transition-colors"
      >
        Reset Filters
      </button>
    </aside>
  );
}

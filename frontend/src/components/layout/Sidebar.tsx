import { ChevronDown, ChevronUp, X } from 'lucide-react';
import { useState } from 'react';

interface SidebarProps {
    selectedSizes: string[];
    onSizeToggle: (size: string) => void;
    selectedBrands: string[];
    onBrandToggle: (brand: string) => void;
    priceRange: [number, number];
    onPriceChange: (range: [number, number]) => void;
    onReset: () => void;
    availableSizes: string[];
    availableBrands: string[];
}

export function Sidebar({
    selectedSizes,
    onSizeToggle,
    selectedBrands,
    onBrandToggle,
    priceRange,
    onPriceChange,
    onReset,
    availableSizes,
    availableBrands,
}: SidebarProps) {
    const [expandedSections, setExpandedSections] = useState({
        size: true,
        brand: true,
        price: true,
    });

    const toggleSection = (section: keyof typeof expandedSections) => {
        setExpandedSections(prev => ({
            ...prev,
            [section]: !prev[section],
        }));
    };

    const hasActiveFilters = selectedSizes.length > 0 || selectedBrands.length > 0 || priceRange[0] > 0 || priceRange[1] < 100000;

    return (
        <aside className="w-full lg:w-64 bg-white p-4 lg:p-6 border-r rounded-lg shadow-sm">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">Filters</h2>
                {hasActiveFilters && (
                    <button
                        onClick={onReset}
                        className="text-sm text-red-600 hover:text-red-700 flex items-center gap-1"
                    >
                        <X className="w-4 h-4" />
                        Clear All
                    </button>
                )}
            </div>

            {/* Size Filter */}
            <div className="mb-6 pb-6 border-b">
                <button
                    onClick={() => toggleSection('size')}
                    className="flex items-center justify-between w-full mb-3 hover:text-[#1a3a6b] transition-colors"
                >
                    <h3 className="uppercase text-sm font-semibold">Size</h3>
                    {expandedSections.size ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
                {expandedSections.size && (
                    <div className="flex flex-wrap gap-2">
                        {availableSizes.map(size => (
                            <button
                                key={size}
                                onClick={() => onSizeToggle(size)}
                                className={`px-3 py-2 border rounded-lg text-sm font-medium transition-all ${selectedSizes.includes(size)
                                    ? 'bg-[#1a3a6b] text-white border-[#1a3a6b] shadow-md'
                                    : 'bg-white hover:border-[#1a3a6b] hover:bg-blue-50'
                                    }`}
                            >
                                {size}
                            </button>
                        ))}
                    </div>
                )}
            </div>

            {/* Brand Filter */}
            <div className="mb-6 pb-6 border-b">
                <button
                    onClick={() => toggleSection('brand')}
                    className="flex items-center justify-between w-full mb-3 hover:text-[#1a3a6b] transition-colors"
                >
                    <h3 className="uppercase text-sm font-semibold">Brand</h3>
                    {expandedSections.brand ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
                {expandedSections.brand && (
                    <div className="space-y-2 max-h-64 overflow-y-auto">
                        {availableBrands.map(brand => (
                            <label key={brand} className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-2 rounded transition-colors">
                                <input
                                    type="checkbox"
                                    checked={selectedBrands.includes(brand)}
                                    onChange={() => onBrandToggle(brand)}
                                    className="w-4 h-4 text-[#1a3a6b] border-gray-300 rounded focus:ring-[#1a3a6b]"
                                />
                                <span className="text-sm text-gray-700">{brand}</span>
                            </label>
                        ))}
                    </div>
                )}
            </div>

            {/* Price Filter */}
            <div className="mb-6">
                <button
                    onClick={() => toggleSection('price')}
                    className="flex items-center justify-between w-full mb-3 hover:text-[#1a3a6b] transition-colors"
                >
                    <h3 className="uppercase text-sm font-semibold">Price Range</h3>
                    {expandedSections.price ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
                {expandedSections.price && (
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="flex-1">
                                <label className="text-xs text-gray-600 mb-1 block">Min</label>
                                <input
                                    type="number"
                                    value={priceRange[0]}
                                    onChange={(e) => onPriceChange([Number(e.target.value), priceRange[1]])}
                                    className="w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#1a3a6b]"
                                    min="0"
                                    max={priceRange[1]}
                                />
                            </div>
                            <span className="text-gray-400 mt-5">-</span>
                            <div className="flex-1">
                                <label className="text-xs text-gray-600 mb-1 block">Max</label>
                                <input
                                    type="number"
                                    value={priceRange[1]}
                                    onChange={(e) => onPriceChange([priceRange[0], Number(e.target.value)])}
                                    className="w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#1a3a6b]"
                                    min={priceRange[0]}
                                    max="100000"
                                />
                            </div>
                        </div>
                        <input
                            type="range"
                            min="0"
                            max="100000"
                            value={priceRange[1]}
                            onChange={(e) => onPriceChange([priceRange[0], Number(e.target.value)])}
                            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#1a3a6b]"
                        />
                        <p className="text-sm text-gray-700 font-medium text-center bg-gray-50 py-2 rounded">
                            LKR {priceRange[0].toLocaleString()} - LKR {priceRange[1].toLocaleString()}
                        </p>
                    </div>
                )}
            </div>

            {/* Reset Button */}
            <button
                onClick={onReset}
                className="w-full py-3 border-2 border-[#1a3a6b] text-[#1a3a6b] rounded-lg hover:bg-[#1a3a6b] hover:text-white transition-all font-medium shadow-sm hover:shadow-md"
            >
                Reset All Filters
            </button>
        </aside>
    );
}

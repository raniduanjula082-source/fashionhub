import { Star, ShoppingCart, Heart } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  image: string;
  rating: number;
  reviews: number;
  sizes: string[];
  category: string;
  colors: string[];
}

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product, size: string) => void;
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  return (
    <div className="bg-white rounded-lg overflow-hidden border hover:shadow-lg transition-shadow group">
      <div className="relative overflow-hidden">
        <ImageWithFallback
          src={product.image}
          alt={product.name}
          className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {discount > 0 && (
          <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-sm">
            -{discount}%
          </div>
        )}
        <button className="absolute top-2 right-2 p-2 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-gray-100">
          <Heart className="w-5 h-5" />
        </button>
      </div>

      <div className="p-4">
        <h3 className="text-lg mb-2">{product.name}</h3>
        
        {/* Rating */}
        <div className="flex items-center gap-1 mb-3">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < Math.floor(product.rating)
                  ? 'fill-yellow-400 text-yellow-400'
                  : 'text-gray-300'
              }`}
            />
          ))}
          <span className="text-sm text-gray-600 ml-1">({product.reviews})</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xl text-[#1a3a6b]">${product.price}</span>
          {product.originalPrice > product.price && (
            <span className="text-sm text-gray-400 line-through">${product.originalPrice}</span>
          )}
        </div>

        {/* Sizes */}
        <div className="mb-3">
          <p className="text-sm text-gray-600 mb-2">Available Sizes:</p>
          <div className="flex gap-2 flex-wrap">
            {product.sizes.map(size => (
              <span
                key={size}
                className="px-2 py-1 border rounded text-sm"
              >
                {size}
              </span>
            ))}
          </div>
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={() => onAddToCart(product, product.sizes[0])}
          className="w-full py-2 bg-[#1a3a6b] text-white rounded hover:bg-[#2a4a7b] transition-colors flex items-center justify-center gap-2"
        >
          <ShoppingCart className="w-4 h-4" />
          Add to Cart
        </button>
      </div>
    </div>
  );
}

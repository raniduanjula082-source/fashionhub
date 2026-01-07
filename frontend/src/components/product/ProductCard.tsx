import { Star, ShoppingCart, Heart } from 'lucide-react';
import { Product } from '../../types';
import { ImageWithFallback } from '../common/ImageWithFallback';
import { useCart } from '../../context/CartContext';

interface ProductCardProps {
    product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
    const { addToCart } = useCart();
    const discount = product.originalPrice
        ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
        : 0;

    const handleAddToCart = () => {
        addToCart(product, product.sizes[0]);
    };

    return (
        <div className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 group">
            <div className="relative overflow-hidden">
                <ImageWithFallback
                    src={product.image}
                    alt={product.name}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {discount > 0 && (
                    <div className="absolute top-3 left-3 bg-gradient-to-r from-red-500 to-red-600 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                        -{discount}%
                    </div>
                )}
                <button
                    className="absolute top-3 right-3 p-2 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-red-50 hover:scale-110 shadow-lg"
                    aria-label="Add to wishlist"
                >
                    <Heart className="w-5 h-5 text-gray-700 hover:text-red-500 transition-colors" />
                </button>
            </div>

            <div className="p-4">
                <div className="mb-2">
                    <span className="text-xs font-semibold text-[#1a3a6b] bg-blue-50 px-2 py-1 rounded">
                        {product.category}
                    </span>
                </div>

                <h3 className="text-lg font-semibold mb-2 text-gray-800 line-clamp-2 group-hover:text-[#1a3a6b] transition-colors">
                    {product.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                        <Star
                            key={i}
                            className={`w-4 h-4 ${i < Math.floor(product.rating)
                                ? 'fill-yellow-400 text-yellow-400'
                                : 'text-gray-300'
                                }`}
                        />
                    ))}
                    <span className="text-sm text-gray-600 ml-1">({product.reviews})</span>
                </div>

                {/* Price */}
                <div className="flex items-center gap-2 mb-3">
                    <span className="text-2xl font-bold text-[#1a3a6b]">LKR {product.price.toLocaleString()}</span>
                    {product.originalPrice && product.originalPrice > product.price && (
                        <span className="text-sm text-gray-400 line-through">LKR {product.originalPrice.toLocaleString()}</span>
                    )}
                </div>

                {/* Sizes */}
                <div className="mb-4">
                    <p className="text-xs font-medium text-gray-600 mb-2">Available Sizes:</p>
                    <div className="flex gap-2 flex-wrap">
                        {product.sizes.slice(0, 4).map(size => (
                            <span
                                key={size}
                                className="px-2 py-1 border border-gray-300 rounded text-xs font-medium hover:border-[#1a3a6b] hover:bg-blue-50 transition-colors cursor-pointer"
                            >
                                {size}
                            </span>
                        ))}
                        {product.sizes.length > 4 && (
                            <span className="px-2 py-1 text-xs text-gray-500">
                                +{product.sizes.length - 4}
                            </span>
                        )}
                    </div>
                </div>

                {/* Add to Cart Button */}
                <button
                    onClick={handleAddToCart}
                    className="w-full py-3 bg-gradient-to-r from-[#1a3a6b] to-[#2a4a7b] text-white rounded-lg hover:from-[#2a4a7b] hover:to-[#1a3a6b] transition-all duration-300 flex items-center justify-center gap-2 font-medium shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                >
                    <ShoppingCart className="w-5 h-5" />
                    Add to Cart
                </button>
            </div>
        </div>
    );
}

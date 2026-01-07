import { Heart, ShoppingCart, X } from 'lucide-react';
import { useState } from 'react';
import { Product } from '../types';
import { ImageWithFallback } from '../components/common/ImageWithFallback';

// Mock wishlist data - in a real app, this would come from context/state management
const mockWishlistItems: Product[] = [];

export function WishlistPage() {
    const [wishlistItems, setWishlistItems] = useState<Product[]>(mockWishlistItems);

    const removeFromWishlist = (productId: number) => {
        setWishlistItems(prev => prev.filter(item => item.id !== productId));
    };

    const moveToCart = (product: Product) => {
        // Handle add to cart logic
        console.log('Moving to cart:', product);
        removeFromWishlist(product.id);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
            <div className="max-w-7xl mx-auto px-4 py-8">
                {/* Page Header */}
                <div className="mb-8">
                    <h1 className="text-4xl font-bold text-gray-900 mb-2 flex items-center gap-3">
                        <Heart className="w-10 h-10 text-red-500 fill-red-500" />
                        My Wishlist
                    </h1>
                    <p className="text-gray-600">
                        {wishlistItems.length} {wishlistItems.length === 1 ? 'item' : 'items'} saved for later
                    </p>
                </div>

                {/* Wishlist Content */}
                {wishlistItems.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {wishlistItems.map((product) => {
                            const discount = product.originalPrice
                                ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
                                : 0;

                            return (
                                <div
                                    key={product.id}
                                    className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 group relative"
                                >
                                    {/* Remove Button */}
                                    <button
                                        onClick={() => removeFromWishlist(product.id)}
                                        className="absolute top-3 right-3 z-10 p-2 bg-white rounded-full shadow-lg hover:bg-red-50 transition-all group/remove"
                                        aria-label="Remove from wishlist"
                                    >
                                        <X className="w-5 h-5 text-gray-700 group-hover/remove:text-red-500 transition-colors" />
                                    </button>

                                    {/* Product Image */}
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
                                    </div>

                                    {/* Product Details */}
                                    <div className="p-4">
                                        <div className="mb-2">
                                            <span className="text-xs font-semibold text-[#1a3a6b] bg-blue-50 px-2 py-1 rounded">
                                                {product.category}
                                            </span>
                                        </div>

                                        <h3 className="text-lg font-semibold mb-2 text-gray-800 line-clamp-2">
                                            {product.name}
                                        </h3>

                                        {/* Price */}
                                        <div className="flex items-center gap-2 mb-3">
                                            <span className="text-2xl font-bold text-[#1a3a6b]">
                                                LKR {product.price.toLocaleString()}
                                            </span>
                                            {product.originalPrice && product.originalPrice > product.price && (
                                                <span className="text-sm text-gray-400 line-through">
                                                    LKR {product.originalPrice.toLocaleString()}
                                                </span>
                                            )}
                                        </div>

                                        {/* Add to Cart Button */}
                                        <button
                                            onClick={() => moveToCart(product)}
                                            className="w-full py-3 bg-gradient-to-r from-[#1a3a6b] to-[#2a4a7b] text-white rounded-lg hover:from-[#2a4a7b] hover:to-[#1a3a6b] transition-all duration-300 flex items-center justify-center gap-2 font-medium shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                                        >
                                            <ShoppingCart className="w-5 h-5" />
                                            Move to Cart
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                ) : (
                    /* Empty Wishlist State */
                    <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
                        <div className="max-w-md mx-auto">
                            <Heart className="w-24 h-24 text-gray-300 mx-auto mb-6" />
                            <h2 className="text-2xl font-bold text-gray-900 mb-3">Your Wishlist is Empty</h2>
                            <p className="text-gray-600 mb-8">
                                Save your favorite items to your wishlist and shop them later!
                            </p>
                            <a
                                href="/shop"
                                className="inline-block py-3 px-8 bg-gradient-to-r from-[#1a3a6b] to-[#2a4a7b] text-white rounded-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
                            >
                                Start Shopping
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

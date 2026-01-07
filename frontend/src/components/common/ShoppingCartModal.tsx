import { X, Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { ImageWithFallback } from '../common/ImageWithFallback';
import { useCart } from '../../context/CartContext';

export function ShoppingCartModal() {
    const { isCartOpen, closeCart, cartItems, updateQuantity, removeItem } = useCart();

    if (!isCartOpen) return null;

    const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const shipping = subtotal > 50 ? 0 : 5;
    const total = subtotal + shipping;

    return (
        <>
            {/* Backdrop */}
            <div
                className="fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity"
                onClick={closeCart}
            />

            {/* Cart Panel */}
            <div className="fixed right-0 top-0 bottom-0 bg-white w-full max-w-md h-full flex flex-col z-50 shadow-2xl animate-slide-in-right">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b bg-gradient-to-r from-[#1a3a6b] to-[#2a4a7b] text-white">
                    <div className="flex items-center gap-2">
                        <ShoppingBag className="w-6 h-6" />
                        <h2 className="text-2xl font-bold">Shopping Cart</h2>
                    </div>
                    <button
                        onClick={closeCart}
                        className="p-2 hover:bg-white hover:bg-opacity-20 rounded-lg transition-colors"
                        aria-label="Close cart"
                    >
                        <X className="w-6 h-6" />
                    </button>
                </div>

                {/* Cart Items */}
                <div className="flex-1 overflow-y-auto p-6">
                    {cartItems.length === 0 ? (
                        <div className="text-center py-12">
                            <ShoppingBag className="w-16 h-16 mx-auto text-gray-300 mb-4" />
                            <p className="text-gray-500 text-lg">Your cart is empty</p>
                            <p className="text-gray-400 text-sm mt-2">Add some products to get started!</p>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {cartItems.map(item => (
                                <div key={item.id} className="flex gap-4 pb-4 border-b hover:bg-gray-50 p-3 rounded-lg transition-colors">
                                    <ImageWithFallback
                                        src={item.image}
                                        alt={item.name}
                                        className="w-24 h-24 object-cover rounded-lg shadow-sm"
                                    />
                                    <div className="flex-1">
                                        <h3 className="font-semibold mb-1 text-gray-800">{item.name}</h3>
                                        <p className="text-sm text-gray-600 mb-2">Size: {item.size}</p>
                                        <p className="text-lg font-bold text-[#1a3a6b] mb-2">${item.price.toFixed(2)}</p>

                                        {/* Quantity Controls */}
                                        <div className="flex items-center gap-2">
                                            <button
                                                onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                                                className="p-1.5 border border-gray-300 rounded hover:bg-gray-100 transition-colors"
                                                aria-label="Decrease quantity"
                                            >
                                                <Minus className="w-4 h-4" />
                                            </button>
                                            <span className="w-10 text-center font-medium">{item.quantity}</span>
                                            <button
                                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                className="p-1.5 border border-gray-300 rounded hover:bg-gray-100 transition-colors"
                                                aria-label="Increase quantity"
                                            >
                                                <Plus className="w-4 h-4" />
                                            </button>
                                            <button
                                                onClick={() => removeItem(item.id)}
                                                className="ml-auto p-1.5 text-red-500 hover:bg-red-50 rounded transition-colors"
                                                aria-label="Remove item"
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
                {cartItems.length > 0 && (
                    <div className="border-t p-6 space-y-4 bg-gray-50">
                        <div className="space-y-2">
                            <div className="flex justify-between text-gray-700">
                                <span>Subtotal:</span>
                                <span className="font-medium">${subtotal.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between text-gray-700">
                                <span>Shipping:</span>
                                <span className="font-medium">
                                    {shipping === 0 ? (
                                        <span className="text-green-600 font-bold">FREE</span>
                                    ) : (
                                        `$${shipping.toFixed(2)}`
                                    )}
                                </span>
                            </div>
                            {subtotal < 50 && subtotal > 0 && (
                                <p className="text-xs text-gray-600 bg-yellow-50 p-2 rounded">
                                    Add ${(50 - subtotal).toFixed(2)} more for free shipping!
                                </p>
                            )}
                            <div className="flex justify-between border-t pt-3 text-lg font-bold">
                                <span>Total:</span>
                                <span className="text-[#1a3a6b]">${total.toFixed(2)}</span>
                            </div>
                        </div>

                        <button className="w-full py-3 bg-gradient-to-r from-[#1a3a6b] to-[#2a4a7b] text-white rounded-lg hover:from-[#2a4a7b] hover:to-[#1a3a6b] transition-all duration-300 font-medium shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                            Proceed to Checkout
                        </button>
                        <button
                            onClick={closeCart}
                            className="w-full py-2 border-2 border-[#1a3a6b] text-[#1a3a6b] rounded-lg hover:bg-[#1a3a6b] hover:text-white transition-colors font-medium"
                        >
                            Continue Shopping
                        </button>
                    </div>
                )}
            </div>
        </>
    );
}

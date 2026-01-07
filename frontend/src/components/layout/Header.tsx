import { Search, ShoppingCart, User, Heart, Menu } from 'lucide-react';
import { PageType } from '../../types';
import { useCart } from '../../context/CartContext';

interface HeaderProps {
    currentPage: PageType;
    onNavigate: (page: PageType) => void;
    mobileMenuOpen: boolean;
    setMobileMenuOpen: (open: boolean) => void;
}

export function Header({ currentPage, onNavigate, mobileMenuOpen, setMobileMenuOpen }: HeaderProps) {
    const { cartItemsCount, openCart } = useCart();

    return (
        <header className="bg-white border-b sticky top-0 z-50 shadow-sm">
            {/* Top Bar */}
            <div className="bg-gradient-to-r from-[#1a3a6b] to-[#2a4a7b] text-white py-2">
                <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
                    <p className="text-sm font-medium">🎉 Free Shipping on Orders Over LKR 15,000</p>
                    <div className="flex gap-4 text-sm">
                        <button onClick={() => onNavigate('contact')} className="hover:underline transition-all">
                            Help
                        </button>
                        <a href="#" className="hover:underline transition-all">
                            Track Order
                        </a>
                    </div>
                </div>
            </div>

            {/* Main Header */}
            <div className="max-w-7xl mx-auto px-4 py-4">
                <div className="flex items-center justify-between gap-8">
                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <button
                            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            <Menu className="w-6 h-6" />
                        </button>
                        <button onClick={() => onNavigate('men')} className="group">
                            <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#1a3a6b] to-[#2a4a7b] bg-clip-text text-transparent group-hover:scale-105 transition-transform">
                                FASHIONHUB
                            </h1>
                        </button>
                    </div>

                    {/* Search Bar */}
                    <div className="hidden md:flex flex-1 max-w-xl">
                        <div className="relative w-full">
                            <input
                                type="text"
                                placeholder="Search for products..."
                                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg pr-10 focus:outline-none focus:ring-2 focus:ring-[#1a3a6b] focus:border-transparent transition-all"
                            />
                            <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-2">
                        <button
                            onClick={() => onNavigate('login')}
                            className="hidden md:flex p-2 hover:bg-gray-100 rounded-lg transition-colors"
                            aria-label="Account"
                        >
                            <User className="w-6 h-6 text-gray-700" />
                        </button>
                        <button
                            onClick={() => onNavigate('wishlist')}
                            className="hidden md:flex p-2 hover:bg-gray-100 rounded-lg transition-colors"
                            aria-label="Wishlist"
                        >
                            <Heart className="w-6 h-6 text-gray-700" />
                        </button>
                        <button
                            onClick={openCart}
                            className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors"
                            aria-label="Shopping cart"
                        >
                            <ShoppingCart className="w-6 h-6 text-gray-700" />
                            {cartItemsCount > 0 && (
                                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
                                    {cartItemsCount}
                                </span>
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Search */}
                <div className="md:hidden mt-4">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search for products..."
                            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg pr-10 focus:outline-none focus:ring-2 focus:ring-[#1a3a6b] focus:border-transparent"
                        />
                        <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    </div>
                </div>
            </div>
        </header>
    );
}

import { Search, ShoppingCart, User, Heart, Menu } from 'lucide-react';
import { PageType } from './Navigation';

interface HeaderProps {
  cartItemsCount: number;
  onCartClick: () => void;
  currentPage: PageType;
  onNavigate: (page: PageType) => void;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

export function Header({ cartItemsCount, onCartClick, currentPage, onNavigate, mobileMenuOpen, setMobileMenuOpen }: HeaderProps) {
  return (
    <header className="bg-white border-b sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-[#1a3a6b] text-white py-2">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <p className="text-sm">Free Shipping on Orders Over $50</p>
          <div className="flex gap-4 text-sm">
            <button onClick={() => onNavigate('contact')} className="hover:underline">Help</button>
            <a href="#" className="hover:underline">Track Order</a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <button 
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="w-6 h-6" />
            </button>
            <button onClick={() => onNavigate('men')}>
              <h1 className="text-2xl font-bold text-[#1a3a6b]">FASHIONHUB</h1>
            </button>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-xl">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search for products..."
                className="w-full px-4 py-2 border rounded-lg pr-10 focus:outline-none focus:ring-2 focus:ring-[#1a3a6b]"
              />
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button className="hidden md:block p-2 hover:bg-gray-100 rounded-lg">
              <User className="w-6 h-6" />
            </button>
            <button className="hidden md:block p-2 hover:bg-gray-100 rounded-lg">
              <Heart className="w-6 h-6" />
            </button>
            <button 
              onClick={onCartClick}
              className="relative p-2 hover:bg-gray-100 rounded-lg"
            >
              <ShoppingCart className="w-6 h-6" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
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
              className="w-full px-4 py-2 border rounded-lg pr-10 focus:outline-none focus:ring-2 focus:ring-[#1a3a6b]"
            />
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className={`border-t ${mobileMenuOpen ? 'block' : 'hidden lg:block'}`}>
        <div className="max-w-7xl mx-auto px-4">
          <ul className="flex flex-col lg:flex-row lg:items-center lg:justify-center gap-2 lg:gap-8 py-3">
            <li><a href="#" className="block py-2 lg:py-0 hover:text-[#1a3a6b]">MEN</a></li>
            <li><a href="#" className="block py-2 lg:py-0 hover:text-[#1a3a6b]">WOMEN</a></li>
            <li><a href="#" className="block py-2 lg:py-0 hover:text-[#1a3a6b]">KIDS</a></li>
            <li><a href="#" className="block py-2 lg:py-0 hover:text-[#1a3a6b]">SHOES</a></li>
            <li><a href="#" className="block py-2 lg:py-0 hover:text-[#1a3a6b]">ACCESSORIES</a></li>
            <li><a href="#" className="block py-2 lg:py-0 text-red-600">SALE</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import { PageType } from './Navigation';

interface FooterProps {
  onNavigate: (page: PageType) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-[#1a3a6b] text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="mb-4">FASHIONHUB</h3>
            <p className="text-sm text-gray-300">
              Your one-stop destination for premium fashion and style. Quality clothing at affordable prices.
            </p>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="mb-4">CUSTOMER SERVICE</h3>
            <ul className="space-y-2 text-sm">
              <li><button onClick={() => onNavigate('contact')} className="text-gray-300 hover:text-white">Contact Us</button></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Shipping & Returns</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Size Guide</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">FAQs</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Track Order</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-4">COMPANY</h3>
            <ul className="space-y-2 text-sm">
              <li><button onClick={() => onNavigate('about')} className="text-gray-300 hover:text-white">About Us</button></li>
              <li><button onClick={() => onNavigate('careers')} className="text-gray-300 hover:text-white">Careers</button></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="mb-4">NEWSLETTER</h3>
            <p className="text-sm text-gray-300 mb-4">
              Subscribe to get special offers and updates
            </p>
            <div className="flex gap-2 mb-4">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-3 py-2 rounded text-black"
              />
              <button className="px-4 py-2 bg-white text-[#1a3a6b] rounded hover:bg-gray-100">
                Subscribe
              </button>
            </div>
            
            {/* Social Media */}
            <div className="flex gap-3 mt-6">
              <a href="#" className="p-2 bg-white bg-opacity-10 rounded-full hover:bg-opacity-20">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white bg-opacity-10 rounded-full hover:bg-opacity-20">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white bg-opacity-10 rounded-full hover:bg-opacity-20">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white bg-opacity-10 rounded-full hover:bg-opacity-20">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white border-opacity-20 mt-8 pt-8 text-center text-sm text-gray-300">
          <p>&copy; 2026 FashionHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
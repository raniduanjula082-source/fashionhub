import { Facebook, Instagram, MessageCircle, Youtube, Mail, CreditCard } from 'lucide-react';
import { PageType } from '../../types';

interface FooterProps {
    onNavigate: (page: PageType) => void;
}

export function Footer({ onNavigate }: FooterProps) {
    return (
        <footer className="bg-gradient-to-br from-[#1a3a6b] to-[#0f2847] text-white mt-16">
            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div>
                        <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                            FASHIONHUB
                        </h3>
                        <p className="text-sm text-gray-300 leading-relaxed">
                            Your one-stop destination for premium fashion and style. Quality clothing at affordable prices.
                        </p>
                        <div className="mt-4 flex items-center gap-2 text-sm text-gray-300">
                            <Mail className="w-4 h-4" />
                            <span>support@fashionhub.com</span>
                        </div>
                    </div>

                    {/* Customer Service */}
                    <div>
                        <h3 className="font-bold mb-4 text-lg">CUSTOMER SERVICE</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <button
                                    onClick={() => onNavigate('contact')}
                                    className="text-gray-300 hover:text-white transition-colors hover:translate-x-1 inline-block"
                                >
                                    Contact Us
                                </button>
                            </li>
                            <li>
                                <a href="#" className="text-gray-300 hover:text-white transition-colors hover:translate-x-1 inline-block">
                                    Shipping & Returns
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-300 hover:text-white transition-colors hover:translate-x-1 inline-block">
                                    Size Guide
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-300 hover:text-white transition-colors hover:translate-x-1 inline-block">
                                    FAQs
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-300 hover:text-white transition-colors hover:translate-x-1 inline-block">
                                    Track Order
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="font-bold mb-4 text-lg">COMPANY</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <button
                                    onClick={() => onNavigate('about')}
                                    className="text-gray-300 hover:text-white transition-colors hover:translate-x-1 inline-block"
                                >
                                    About Us
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => onNavigate('careers')}
                                    className="text-gray-300 hover:text-white transition-colors hover:translate-x-1 inline-block"
                                >
                                    Careers
                                </button>
                            </li>
                            <li>
                                <a href="#" className="text-gray-300 hover:text-white transition-colors hover:translate-x-1 inline-block">
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-300 hover:text-white transition-colors hover:translate-x-1 inline-block">
                                    Terms & Conditions
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="font-bold mb-4 text-lg">NEWSLETTER</h3>
                        <p className="text-sm text-gray-300 mb-4">
                            Subscribe to get special offers and updates
                        </p>
                        <div className="flex gap-2 mb-6">
                            <input
                                type="email"
                                placeholder="Your email"
                                className="flex-1 px-3 py-2 rounded text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                            />
                            <button className="px-4 py-2 bg-white text-[#1a3a6b] rounded font-medium hover:bg-gray-100 transition-colors">
                                Subscribe
                            </button>
                        </div>

                        {/* Social Media */}
                        <div className="flex gap-3 mt-6">
                            <a
                                href="#"
                                className="p-2 bg-white bg-opacity-10 rounded-full hover:bg-opacity-20 transition-all hover:scale-110"
                                aria-label="Facebook"
                            >
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a
                                href="#"
                                className="p-2 bg-white bg-opacity-10 rounded-full hover:bg-opacity-20 transition-all hover:scale-110"
                                aria-label="Instagram"
                            >
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a
                                href="https://wa.me/"
                                className="p-2 bg-white bg-opacity-10 rounded-full hover:bg-opacity-20 transition-all hover:scale-110"
                                aria-label="WhatsApp"
                            >
                                <MessageCircle className="w-5 h-5" />
                            </a>
                            <a
                                href="#"
                                className="p-2 bg-white bg-opacity-10 rounded-full hover:bg-opacity-20 transition-all hover:scale-110"
                                aria-label="YouTube"
                            >
                                <Youtube className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white border-opacity-20 mt-8 pt-8">
                    {/* Payment Methods */}
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
                        <div className="text-center md:text-left">
                            <h4 className="text-sm font-semibold mb-2">We Accept</h4>
                            <div className="flex items-center gap-3">
                                {/* Google Pay */}
                                <div className="bg-white rounded px-3 py-2 flex items-center gap-2">
                                    <svg className="w-8 h-8" viewBox="0 0 48 48">
                                        <path fill="#4285F4" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
                                        <path fill="#34A853" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
                                        <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
                                        <path fill="#EA4335" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.46-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
                                        <path fill="none" d="M0 0h48v48H0z" />
                                    </svg>
                                    <span className="text-xs font-semibold text-gray-700">Google Pay</span>
                                </div>
                                {/* Visa */}
                                <div className="bg-white rounded px-3 py-2 flex items-center">
                                    <svg className="w-12 h-8" viewBox="0 0 48 32">
                                        <rect fill="#00579F" width="48" height="32" rx="4" />
                                        <path fill="#FFF" d="M20.2 11.2l-2.4 9.6h-2.8l2.4-9.6h2.8zm11.8 6.2l1.5-4.1.9 4.1h-2.4zm3.1 3.4h2.6l-2.3-9.6h-2.4c-.5 0-1 .3-1.2.8l-4.2 8.8h3l.6-1.6h3.7l.2 1.6zm-7.5-3.1c0-2.5-3.5-2.7-3.5-3.8 0-.3.3-.7 1-.8.3 0 1.3-.1 2.4.4l.4-2c-.8-.3-1.9-.6-3.2-.6-3 0-5.1 1.6-5.1 3.8 0 1.7 1.5 2.6 2.6 3.1 1.1.6 1.5.9 1.5 1.4 0 .7-.9 1.1-1.7 1.1-1.4 0-2.2-.2-3.4-.7l-.5 2.1c.8.3 2.2.6 3.6.6 3.2.1 5.3-1.5 5.3-3.8l.6.2zm-11.3-6.5l-4.6 9.6h-3l-2.3-8.7c-.1-.5-.3-.7-.8-.9-.8-.3-2.1-.6-3.2-.8l.1-.4h5.5c.7 0 1.3.5 1.5 1.3l1.3 7.1 3.3-8.4h3.2v.2z" />
                                    </svg>
                                </div>
                                {/* Credit Card Icon */}
                                <div className="bg-white bg-opacity-10 rounded p-2">
                                    <CreditCard className="w-6 h-6" />
                                </div>
                            </div>
                        </div>
                        <div className="text-center text-sm text-gray-300">
                            <p>© 2026 FashionHub. All rights reserved.</p>
                            <p className="text-xs mt-1">Made with ❤️ for fashion lovers in Sri Lanka</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

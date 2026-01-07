import { PageType } from '../../types';
import { NAV_ITEMS } from '../../constants/navigation';

interface NavigationProps {
    currentPage: PageType;
    onNavigate: (page: PageType) => void;
    mobileMenuOpen: boolean;
}

export function Navigation({ currentPage, onNavigate, mobileMenuOpen }: NavigationProps) {
    return (
        <nav className={`border-t bg-white ${mobileMenuOpen ? 'block' : 'hidden lg:block'}`}>
            <div className="max-w-7xl mx-auto px-4">
                <ul className="flex flex-col lg:flex-row lg:items-center lg:justify-center gap-2 lg:gap-8 py-3">
                    {NAV_ITEMS.map((item) => (
                        <li key={item.page}>
                            <button
                                onClick={() => onNavigate(item.page)}
                                className={`block py-2 lg:py-0 font-medium transition-all hover:text-[#1a3a6b] ${currentPage === item.page
                                        ? 'text-[#1a3a6b] border-b-2 border-[#1a3a6b]'
                                        : 'text-gray-700'
                                    } ${item.page === 'sale' ? 'text-red-600 hover:text-red-700' : ''}`}
                            >
                                {item.label.toUpperCase()}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}

export type PageType = 'men' | 'women' | 'kids' | 'shoes' | 'accessories' | 'sale' | 'about' | 'careers' | 'contact';

interface NavigationProps {
  currentPage: PageType;
  onNavigate: (page: PageType) => void;
  mobileMenuOpen: boolean;
}

export function Navigation({ currentPage, onNavigate, mobileMenuOpen }: NavigationProps) {
  const navItems = [
    { id: 'men' as PageType, label: 'MEN' },
    { id: 'women' as PageType, label: 'WOMEN' },
    { id: 'kids' as PageType, label: 'KIDS' },
    { id: 'shoes' as PageType, label: 'SHOES' },
    { id: 'accessories' as PageType, label: 'ACCESSORIES' },
    { id: 'sale' as PageType, label: 'SALE', highlight: true },
  ];

  return (
    <nav className={`border-t ${mobileMenuOpen ? 'block' : 'hidden lg:block'}`}>
      <div className="max-w-7xl mx-auto px-4">
        <ul className="flex flex-col lg:flex-row lg:items-center lg:justify-center gap-2 lg:gap-8 py-3">
          {navItems.map(item => (
            <li key={item.id}>
              <button
                onClick={() => onNavigate(item.id)}
                className={`block py-2 lg:py-0 transition-colors ${
                  currentPage === item.id
                    ? 'text-[#1a3a6b] font-semibold'
                    : item.highlight
                    ? 'text-red-600 hover:text-red-700'
                    : 'hover:text-[#1a3a6b]'
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

import { useState } from 'react';
import { Header, Navigation, Footer } from './components/layout';
import { ShoppingCartModal } from './components/common';
import { ShopPage } from './pages/ShopPage';
import { AboutPage } from './pages/AboutPage';
import { CareersPage } from './pages/CareersPage';
import { ContactPage } from './pages/ContactPage';
import { LoginPage } from './pages/LoginPage';
import { SignupPage } from './pages/SignupPage';
import { WishlistPage } from './pages/WishlistPage';
import { AdminPage } from './pages/AdminPage';
import { CartProvider } from './context/CartContext';
import { PageType } from './types';
import {
    menProducts,
    womenProducts,
    kidsProducts,
    shoesProducts,
    accessoriesProducts,
    saleProducts
} from './data/products';

function AppContent() {
    const [currentPage, setCurrentPage] = useState<PageType>('men');
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleNavigate = (page: PageType) => {
        setCurrentPage(page);
        setMobileMenuOpen(false);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Render page content based on current page
    const renderPageContent = () => {
        switch (currentPage) {
            case 'men':
                return <ShopPage title="Men's Wear" category="Men" />;
            case 'women':
                return <ShopPage title="Women's Wear" category="Women" />;
            case 'kids':
                return <ShopPage title="Kids' Wear" category="Kids" />;
            case 'shoes':
                return <ShopPage title="Shoes" category="Shoes" />;
            case 'accessories':
                return <ShopPage title="Accessories" category="Accessories" />;
            case 'sale':
                return <ShopPage title="Sale - Limited Time Offers" products={saleProducts} />;
            case 'about':
                return <AboutPage />;
            case 'careers':
                return <CareersPage />;
            case 'contact':
                return <ContactPage />;
            case 'login':
                return <LoginPage />;
            case 'signup':
                return <SignupPage />;
            case 'wishlist':
                return <WishlistPage />;
            case 'admin':
                return <AdminPage />;
            default:
                return <ShopPage title="Men's Wear" products={menProducts} />;
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <Header
                currentPage={currentPage}
                onNavigate={handleNavigate}
                mobileMenuOpen={mobileMenuOpen}
                setMobileMenuOpen={setMobileMenuOpen}
            />

            <Navigation
                currentPage={currentPage}
                onNavigate={handleNavigate}
                mobileMenuOpen={mobileMenuOpen}
            />

            <main className="flex-1">
                {renderPageContent()}
            </main>

            <Footer onNavigate={handleNavigate} />

            <ShoppingCartModal />
        </div>
    );
}

function App() {
    return (
        <CartProvider>
            <AppContent />
        </CartProvider>
    );
}

export default App;

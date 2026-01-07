import { useState } from 'react';
import { Header } from './components/Header';
import { Navigation, PageType } from './components/Navigation';
import { ShopPage } from './pages/ShopPage';
import { AboutPage } from './pages/AboutPage';
import { CareersPage } from './pages/CareersPage';
import { ContactPage } from './pages/ContactPage';
import { ShoppingCartModal, CartItem } from './components/ShoppingCartModal';
import { Footer } from './components/Footer';
import { Product } from './components/ProductCard';
import { 
  menProducts, 
  womenProducts, 
  kidsProducts, 
  shoesProducts, 
  accessoriesProducts, 
  saleProducts 
} from './data/products';

function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('men');
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [nextCartItemId, setNextCartItemId] = useState(1);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleAddToCart = (product: Product, size: string) => {
    const newItem: CartItem = {
      id: nextCartItemId,
      productId: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      size,
      quantity: 1,
    };

    setCartItems(prev => [...prev, newItem]);
    setNextCartItemId(prev => prev + 1);
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (id: number, quantity: number) => {
    setCartItems(prev =>
      prev.map(item => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const handleRemoveItem = (id: number) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const handleNavigate = (page: PageType) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  // Render page content based on current page
  const renderPageContent = () => {
    switch (currentPage) {
      case 'men':
        return <ShopPage title="Men's Wear" products={menProducts} onAddToCart={handleAddToCart} />;
      case 'women':
        return <ShopPage title="Women's Wear" products={womenProducts} onAddToCart={handleAddToCart} />;
      case 'kids':
        return <ShopPage title="Kids' Wear" products={kidsProducts} onAddToCart={handleAddToCart} />;
      case 'shoes':
        return <ShopPage title="Shoes" products={shoesProducts} onAddToCart={handleAddToCart} />;
      case 'accessories':
        return <ShopPage title="Accessories" products={accessoriesProducts} onAddToCart={handleAddToCart} />;
      case 'sale':
        return <ShopPage title="Sale - Limited Time Offers" products={saleProducts} onAddToCart={handleAddToCart} />;
      case 'about':
        return <AboutPage />;
      case 'careers':
        return <CareersPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <ShopPage title="Men's Wear" products={menProducts} onAddToCart={handleAddToCart} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header
        cartItemsCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)}
        onCartClick={() => setIsCartOpen(true)}
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

      <div className="flex-1">
        {renderPageContent()}
      </div>

      <Footer onNavigate={handleNavigate} />

      <ShoppingCartModal
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
      />
    </div>
  );
}

export default App;

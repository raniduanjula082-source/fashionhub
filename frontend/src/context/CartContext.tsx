import { createContext, useContext, useState, ReactNode } from 'react';
import { CartItem, Product } from '../types';

interface CartContextType {
    cartItems: CartItem[];
    isCartOpen: boolean;
    addToCart: (product: Product, size: string) => void;
    updateQuantity: (id: number | string, quantity: number) => void;
    removeItem: (id: number | string) => void;
    openCart: () => void;
    closeCart: () => void;
    cartItemsCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};

interface CartProviderProps {
    children: ReactNode;
}

export const CartProvider = ({ children }: CartProviderProps) => {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [nextCartItemId, setNextCartItemId] = useState(1);

    const addToCart = (product: Product, size: string) => {
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

    const updateQuantity = (id: number | string, quantity: number) => {
        setCartItems(prev =>
            prev.map(item => (item.id === id ? { ...item, quantity } : item))
        );
    };

    const removeItem = (id: number | string) => {
        setCartItems(prev => prev.filter(item => item.id !== id));
    };

    const openCart = () => setIsCartOpen(true);
    const closeCart = () => setIsCartOpen(false);

    const cartItemsCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

    const value: CartContextType = {
        cartItems,
        isCartOpen,
        addToCart,
        updateQuantity,
        removeItem,
        openCart,
        closeCart,
        cartItemsCount,
    };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

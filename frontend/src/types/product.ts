export interface Product {
    id: number | string;
    name: string;
    price: number;
    originalPrice?: number;
    image: string;
    rating: number;
    reviews: number;
    sizes: string[];
    category: string;
    colors: string[];
    brand: string;
    description?: string;
}

export interface CartItem {
    id: number | string;
    productId: number | string;
    name: string;
    price: number;
    image: string;
    size: string;
    quantity: number;
}

export type PageType = 'men' | 'women' | 'kids' | 'shoes' | 'accessories' | 'sale' | 'about' | 'careers' | 'contact' | 'login' | 'signup' | 'wishlist' | 'admin';

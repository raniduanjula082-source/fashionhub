import { Product } from '../types';

const API_BASE_URL = '/api/products';

// Helper to map backend DTO to frontend Product interface
const mapDtoToProduct = (dto: any): Product => ({
    id: dto.id,
    name: dto.name,
    price: dto.price,
    originalPrice: dto.originalPrice,
    image: dto.imageUrl || '', // Backend uses imageUrl
    rating: dto.rating || 0,
    reviews: dto.reviewCount || 0, // Backend uses reviewCount
    sizes: dto.sizes || [],
    category: dto.category,
    colors: dto.colors || [],
    brand: dto.brand || '',
    description: dto.description
});

const AUTH_BASE_URL = '/api/auth';

export const api = {
    // Auth
    signup: async (userData: any) => {
        const response = await fetch(`${AUTH_BASE_URL}/signup`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userData),
        });
        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message || 'Signup failed');
        }
        return response.json();
    },

    login: async (credentials: any) => {
        const response = await fetch(`${AUTH_BASE_URL}/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(credentials),
        });
        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message || 'Login failed');
        }
        return response.json();
    },

    // Products
    getAllProducts: async (): Promise<Product[]> => {
        try {
            const response = await fetch(API_BASE_URL);
            if (!response.ok) throw new Error('Failed to fetch products');
            const data = await response.json();
            return data.map(mapDtoToProduct);
        } catch (error) {
            console.error('Error fetching all products:', error);
            return [];
        }
    },

    getProductsByCategory: async (category: string): Promise<Product[]> => {
        try {
            // Map frontend category slugs to backend expected categories if needed
            // Assuming backend accepts 'men', 'women' etc or case insensitive
            // If backend handles "men" as category, good.
            const response = await fetch(`${API_BASE_URL}/category/${category}`);
            if (!response.ok) throw new Error(`Failed to fetch products for category ${category}`);
            const data = await response.json();
            return data.map(mapDtoToProduct);
        } catch (error) {
            console.error(`Error fetching products for category ${category}:`, error);
            // Fallback to searching if category not found (optional)
            return [];
        }
    },

    getProductById: async (id: string | number): Promise<Product | null> => {
        try {
            const response = await fetch(`${API_BASE_URL}/${id}`);
            if (!response.ok) throw new Error('Failed to fetch product');
            const data = await response.json();
            return mapDtoToProduct(data);
        } catch (error) {
            console.error(`Error fetching product ${id}:`, error);
            return null;
        }
    },

    // Admin
    createProduct: async (productData: any, token: string) => {
        const response = await fetch(API_BASE_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(productData)
        });
        if (!response.ok) throw new Error('Failed to create product');
        return response.json();
    },

    updateProduct: async (id: string, productData: any, token: string) => {
        const response = await fetch(`${API_BASE_URL}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(productData)
        });
        if (!response.ok) throw new Error('Failed to update product');
        return response.json();
    },

    deleteProduct: async (id: string, token: string) => {
        const response = await fetch(`${API_BASE_URL}/${id}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        if (!response.ok) throw new Error('Failed to delete product');
        return true;
    }
};

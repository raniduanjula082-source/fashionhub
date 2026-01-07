import { useState, useEffect } from 'react';
import { Product } from '../types';
import { api } from '../services/api';
import { Trash2, Edit, Plus, X } from 'lucide-react';

export function AdminPage() {
    const [products, setProducts] = useState<Product[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentProduct, setCurrentProduct] = useState<Product | null>(null);

    // Form state
    const [formData, setFormData] = useState({
        name: '',
        category: '',
        section: 'Men',
        brand: '',
        price: '',
        originalPrice: '',
        description: '',
        imageUrl: '',
        sizes: '',
        colors: ''
    });

    useEffect(() => {
        loadProducts();
    }, []);

    const loadProducts = async () => {
        setIsLoading(true);
        const data = await api.getAllProducts();
        setProducts(data);
        setIsLoading(false);
    };

    const handleOpenModal = (product?: Product) => {
        if (product) {
            setCurrentProduct(product);
            setFormData({
                name: product.name,
                category: product.category,
                section: (product as any).section || 'Men', // handle if section exists in type
                brand: product.brand,
                price: product.price.toString(),
                originalPrice: product.originalPrice?.toString() || '',
                description: product.description || '',
                imageUrl: product.image,
                sizes: product.sizes.join(', '),
                colors: product.colors.join(', ')
            });
        } else {
            setCurrentProduct(null);
            setFormData({
                name: '',
                category: '',
                section: 'Men',
                brand: '',
                price: '',
                originalPrice: '',
                description: '',
                imageUrl: '',
                sizes: '',
                colors: ''
            });
        }
        setIsModalOpen(true);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        if (!token) {
            alert('You must be logged in as admin');
            return;
        }

        const productPayload = {
            name: formData.name,
            category: formData.category,
            section: formData.section,
            brand: formData.brand,
            price: parseFloat(formData.price),
            originalPrice: formData.originalPrice ? parseFloat(formData.originalPrice) : null,
            description: formData.description,
            imageUrl: formData.imageUrl,
            sizes: formData.sizes.split(',').map(s => s.trim()).filter(Boolean),
            colors: formData.colors.split(',').map(c => c.trim()).filter(Boolean),
            stockQuantity: 100 // default
        };

        try {
            if (currentProduct) {
                await api.updateProduct(currentProduct.id.toString(), productPayload, token);
                alert('Product updated successfully');
            } else {
                await api.createProduct(productPayload, token);
                alert('Product created successfully');
            }
            setIsModalOpen(false);
            loadProducts();
        } catch (error: any) {
            console.error('Error saving product:', error);
            alert(error.message || 'Failed to save product');
        }
    };

    const handleDelete = async (id: number | string) => {
        if (!confirm('Are you sure you want to delete this product?')) return;

        const token = localStorage.getItem('token');
        if (!token) {
            alert('You must be logged in as admin');
            return;
        }

        try {
            await api.deleteProduct(id.toString(), token);
            setProducts(prev => prev.filter(p => p.id !== id));
        } catch (error: any) {
            console.error('Error deleting product:', error);
            alert('Failed to delete product');
        }
    };

    if (isLoading) return <div className="p-8 text-center">Loading products...</div>;

    return (
        <div className="min-h-screen bg-gray-50 p-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
                    <button
                        onClick={() => handleOpenModal()}
                        className="flex items-center gap-2 bg-[#1a3a6b] text-white px-4 py-2 rounded-lg hover:bg-[#2a4a7b] transition-colors"
                    >
                        <Plus className="w-5 h-5" />
                        Add Product
                    </button>
                </div>

                <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="bg-gray-50 border-b border-gray-200">
                                <tr>
                                    <th className="px-6 py-4 font-medium text-gray-500">Product</th>
                                    <th className="px-6 py-4 font-medium text-gray-500">Category</th>
                                    <th className="px-6 py-4 font-medium text-gray-500">Brand</th>
                                    <th className="px-6 py-4 font-medium text-gray-500">Price</th>
                                    <th className="px-6 py-4 font-medium text-gray-500 text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {products.map((product) => (
                                    <tr key={product.id} className="hover:bg-gray-50">
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-3">
                                                <img src={product.image} alt={product.name} className="w-10 h-10 rounded object-cover bg-gray-100" />
                                                <span className="font-medium text-gray-900">{product.name}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-gray-600">
                                            {product.category}
                                            <span className="ml-2 px-2 py-0.5 text-xs bg-gray-100 rounded-full text-gray-600">
                                                {(product as any).section || 'N/A'}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-gray-600">{product.brand}</td>
                                        <td className="px-6 py-4 font-medium text-gray-900">
                                            ₹{(product.price / 100).toFixed(2)}
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <div className="flex justify-end gap-2">
                                                <button
                                                    onClick={() => handleOpenModal(product)}
                                                    className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                                                >
                                                    <Edit className="w-5 h-5" />
                                                </button>
                                                <button
                                                    onClick={() => handleDelete(product.id)}
                                                    className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                                                >
                                                    <Trash2 className="w-5 h-5" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
                        <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                            <h2 className="text-xl font-bold text-gray-900">
                                {currentProduct ? 'Edit Product' : 'Add New Product'}
                            </h2>
                            <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-gray-600">
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        <form onSubmit={handleSubmit} className="p-6 space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                                    <input
                                        type="text"
                                        required
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a3a6b]"
                                        value={formData.name}
                                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Brand</label>
                                    <input
                                        type="text"
                                        required
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a3a6b]"
                                        value={formData.brand}
                                        onChange={e => setFormData({ ...formData, brand: e.target.value })}
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Section</label>
                                    <select
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a3a6b]"
                                        value={formData.section}
                                        onChange={e => setFormData({ ...formData, section: e.target.value })}
                                    >
                                        <option value="Men">Men</option>
                                        <option value="Women">Women</option>
                                        <option value="Kids">Kids</option>
                                        <option value="Shoes">Shoes</option>
                                        <option value="Accessories">Accessories</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Category (e.g. Shirts)</label>
                                    <input
                                        type="text"
                                        required
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a3a6b]"
                                        value={formData.category}
                                        onChange={e => setFormData({ ...formData, category: e.target.value })}
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Price (in cents)</label>
                                    <input
                                        type="number"
                                        required
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a3a6b]"
                                        value={formData.price}
                                        onChange={e => setFormData({ ...formData, price: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Original Price (optional)</label>
                                    <input
                                        type="number"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a3a6b]"
                                        value={formData.originalPrice}
                                        onChange={e => setFormData({ ...formData, originalPrice: e.target.value })}
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
                                <input
                                    type="text"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a3a6b]"
                                    value={formData.imageUrl}
                                    onChange={e => setFormData({ ...formData, imageUrl: e.target.value })}
                                    placeholder="/images/products/..."
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                                <textarea
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a3a6b]"
                                    rows={3}
                                    value={formData.description}
                                    onChange={e => setFormData({ ...formData, description: e.target.value })}
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Sizes (comma separated)</label>
                                    <input
                                        type="text"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a3a6b]"
                                        value={formData.sizes}
                                        onChange={e => setFormData({ ...formData, sizes: e.target.value })}
                                        placeholder="S, M, L, XL"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Colors (comma separated)</label>
                                    <input
                                        type="text"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a3a6b]"
                                        value={formData.colors}
                                        onChange={e => setFormData({ ...formData, colors: e.target.value })}
                                        placeholder="Red, Blue"
                                    />
                                </div>
                            </div>

                            <div className="flex justify-end gap-3 mt-6">
                                <button
                                    type="button"
                                    onClick={() => setIsModalOpen(false)}
                                    className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg font-medium"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-[#1a3a6b] text-white rounded-lg font-medium hover:bg-[#2a4a7b]"
                                >
                                    Save Product
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../lib/supabase';

interface ProductGridProps {
  products: Product[];
  category: string;
  loading?: boolean;
}

const ProductGrid: React.FC<ProductGridProps> = ({ products, category, loading }) => {
  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="bg-white rounded-lg shadow-md animate-pulse">
            <div className="aspect-square bg-gray-200 rounded-t-lg"></div>
            <div className="p-4">
              <div className="h-4 bg-gray-200 rounded mb-2"></div>
              <div className="h-3 bg-gray-200 rounded mb-4"></div>
              <div className="h-8 bg-gray-200 rounded"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg">No products found in this category.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
      {products.map((product) => (
        <Link
          key={product.id}
          to={`/${category.toLowerCase().replace(' ', '-')}/${product.slug}`}
          className="block"
        >
          <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <div className="aspect-square overflow-hidden">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  e.currentTarget.src = 'https://via.placeholder.com/400x400?text=Image+Not+Found';
                }}
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold text-gray-800 mb-1">{product.title}</h3>
              <p className="text-sm text-gray-600 mb-2">{product.description.substring(0, 60)}...</p>
              <p className="text-xl font-bold text-orange-600 mb-3">{product.price}</p>
              <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition-colors">
                View Details
              </button>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProductGrid;

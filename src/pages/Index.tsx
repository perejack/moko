
import React from 'react';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
import Footer from '../components/Footer';
import ChatButton from '../components/ChatButton';

import { useProducts } from '../hooks/useProducts';


import ProductGrid from '../components/ProductGrid';

const Index = () => {
  const { products, loading, error } = useProducts('Sofas');
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Sofas</h1>
          <p className="text-gray-600 max-w-4xl">
            MoKo sofa set designs are as cool as you are and as comfy as the best hug you've ever gotten. MoKoBaes say they don't even mind getting kicked out of the bedroom to sleep on the couch. We have fancy affordable sofas that will adorn your home and in modern sofa designs that you love!
          </p>
        </div>

        {/* Sort and Results */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-gray-600">Showing all 12 results</p>
          <select className="border border-gray-300 rounded px-4 py-2 bg-white">
            <option>Sort by latest</option>
            <option>Sort by price: low to high</option>
            <option>Sort by price: high to low</option>
            <option>Sort by popularity</option>
          </select>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {loading ? (
            <div>Loading...</div>
          ) : error ? (
            <div>Error: {error}</div>
          ) : (
            <ProductGrid products={products} category="Sofas" loading={loading} />
          )}
        </div>
      </main>

      <Footer />
      <ChatButton />
    </div>
  );
};

export default Index;

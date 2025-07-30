
import React from 'react';
import { useProducts } from '../hooks/useProducts';
import Header from '../components/Header';

import Footer from '../components/Footer';
import ChatButton from '../components/ChatButton';

import ProductGrid from '../components/ProductGrid';

const Beds = () => {
  const { products, loading, error } = useProducts('Beds');

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Beds Section Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Beds</h1>
          <p className="text-gray-600 max-w-4xl">
            It's always on your mind isn't it? Bedtime? You should look forward to a MoKo bed then. A modern wooden bed you can fall on like a log on after a long day, and lazy around over weekends. The best bed quality stands out from all beds in Kenya, so be sure it will hold your weight with smart joints and even better, snuggle you and your MoKo mattress. Built with love and cuddles, you can check out all about{' '}
            <span className="text-pink-500 underline cursor-pointer">Zzze Hug Bed here</span>
          </p>
        </div>

        {/* Sort and Results */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-gray-600">Showing all 2 results</p>
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
            <ProductGrid products={products} category="Beds" loading={loading} />
          )}
        </div>
      </main>

      <Footer />
      <ChatButton />
    </div>
  );
};

export default Beds;


import React from 'react';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
import Footer from '../components/Footer';
import ChatButton from '../components/ChatButton';

import { useProducts } from '../hooks/useProducts';
import ProductGrid from '../components/ProductGrid';

const Carpets = () => {
  const { products, loading, error } = useProducts('Carpets');

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Carpets Section Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Carpets</h1>
          <p className="text-gray-600 max-w-4xl">
            We're the one and only MoKo carpets : )
          </p>
          <p className="text-gray-600 max-w-4xl mt-4">
            We come in 5 collections to bring smiles to as many people as possible, take your seat and enjoy the eye-treat. Each collection has 2 different price points because as with any other MoKo products we combine quality, innovation and pocket-friendliness – for as many people as possible.
          </p>
        </div>

        {/* Sort and Results */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-gray-600">Showing all 26 results</p>
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
            <ProductGrid products={products} category="Carpets" loading={loading} />
          )}
        </div>
      </main>

      <Footer />
      <ChatButton />
    </div>
  );
};

export default Carpets;

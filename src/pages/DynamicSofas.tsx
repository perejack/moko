import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ChatButton from '../components/ChatButton';
import { useProducts } from '../hooks/useProducts';
import ProductGrid from '../components/ProductGrid';

const DynamicSofas: React.FC = () => {
  const { products, loading } = useProducts('Sofas');
  const [sortBy, setSortBy] = useState('default');

  const sortedProducts = [...products].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return parseInt(a.price.replace(/[^\d]/g, '')) - parseInt(b.price.replace(/[^\d]/g, ''));
      case 'price-high':
        return parseInt(b.price.replace(/[^\d]/g, '')) - parseInt(a.price.replace(/[^\d]/g, ''));
      case 'name':
        return a.title.localeCompare(b.title);
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Sofas</h1>
          <p className="text-gray-600 max-w-4xl">
            MoKo sofa set designs are as cool as you are and as comfy as the best hug you've ever gotten. 
            MoKoBaes say they don't even mind getting kicked out of the bedroom to sleep on the couch. 
            We have fancy affordable sofas that will adorn your home and in modern sofa designs that you love!
          </p>
          
          <div className="mt-4 flex flex-wrap gap-2">
            <select 
              value={sortBy} 
              onChange={(e) => setSortBy(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
            >
              <option value="default">Sort by...</option>
              <option value="price-low">Sort by price: low to high</option>
              <option value="price-high">Sort by price: high to low</option>
              <option value="name">Sort by name</option>
            </select>
          </div>
        </div>

        <ProductGrid 
          products={sortedProducts} 
          category="Sofas" 
          loading={loading} 
        />
      </main>

      <Footer />
      <ChatButton />
    </div>
  );
};

export default DynamicSofas;

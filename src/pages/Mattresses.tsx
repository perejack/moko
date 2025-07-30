
import React from 'react';
import { Link } from 'react-router-dom';
import { useProducts } from '../hooks/useProducts';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
import Footer from '../components/Footer';
import ChatButton from '../components/ChatButton';

const Mattresses = () => {
  const { products: mattresses, loading, error } = useProducts('Mattresses');

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Mattresses Section Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Mattresses</h1>
          <p className="text-gray-600 max-w-4xl">
            It's not rumours that MoKo mattresses are <strong>firm</strong> and <strong>for life</strong>. We made you a little heaven where you can have your beauty sleep. Our 10-year mattress warranty is to assure you of a quality and the best mattress you lay on. Order your mattress online in queen size or king size or suitable mattress size. Buyer beware; You might need multiple alarms!
          </p>
        </div>

        {/* Sort and Results */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-gray-600">{loading ? 'Loading...' : error ? error : `Showing all ${mattresses.length} results`}</p>
          <select className="border border-gray-300 rounded px-4 py-2 bg-white">
            <option>Sort by latest</option>
            <option>Sort by price: low to high</option>
            <option>Sort by price: high to low</option>
            <option>Sort by popularity</option>
          </select>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {loading && <div className="col-span-3 text-center text-gray-500">Loading...</div>}
          {error && <div className="col-span-3 text-center text-red-500">{error}</div>}
          {!loading && !error && mattresses.map((mattress) => (
            <div key={mattress.slug}>
              <Link to={`/mattresses/${mattress.slug}`} className="block">
                <ProductCard
                  image={mattress.image}
                  title={mattress.title}
                  priceRange={mattress.priceRange}
                />
              </Link>
            </div>
          ))}
        </div>
      </main>
      <Footer />
      <ChatButton />
    </div>
  );
};

export default Mattresses;

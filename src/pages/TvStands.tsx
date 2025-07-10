
import React from 'react';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
import Footer from '../components/Footer';
import ChatButton from '../components/ChatButton';

import { tvstands } from '../data/tvstands';
import { Link } from 'react-router-dom';

const TvStands = () => {

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* TV Stands Section Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">TV Stands</h1>
          <p className="text-gray-600 max-w-4xl">
            Our TV stand designs will hide the clutter created by messy TV cables. They have flexible options for doors, drawers for those who would like to display decor items or those looking to hide living room clutter from guests' wandering eyes.
          </p>
          <p className="text-gray-600 max-w-4xl mt-4">
            Wondering how MoKo TV Stands help with cable management? <span className="text-pink-500 underline cursor-pointer">Watch here</span> and get yours to keep your space safe and neat.
          </p>
        </div>

        {/* Sort and Results */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-gray-600">Showing all 4 results</p>
          <select className="border border-gray-300 rounded px-4 py-2 bg-white">
            <option>Sort by latest</option>
            <option>Sort by price: low to high</option>
            <option>Sort by price: high to low</option>
            <option>Sort by popularity</option>
          </select>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {tvstands.map((stand) => (
            <Link key={stand.slug} to={`/tv-stands/${stand.slug}`} className="block">
              <ProductCard image={stand.image} title={stand.title} priceRange={stand.price} />
            </Link>
          ))}
        </div>
      </main>

      <Footer />
      <ChatButton />
    </div>
  );
};

export default TvStands;

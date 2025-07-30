import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ChatButton from '../components/ChatButton';
import { Link } from 'react-router-dom';

const coffeeTable = {
  slug: 'thicky-legs-coffee-table',
  title: 'Thicky Legs Coffee Table',
  price: 'KSh 5,799',
  image: 'https://cdn.shortpixel.ai/spai/w_433+q_lossy+ret_img+to_webp/moko.co.ke/wp-content/uploads/2023/03/HUM_8697-min-1-500x500.jpg',
  badge: 'Early Birds Price',
  description: 'Thicky pearl white coffee table',
};

const CoffeeTables = () => (
  <div className="min-h-screen bg-gray-50 flex flex-col">
    <Header />
    <main className="flex-1 max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-gray-800 mb-2">Coffee Tables</h1>
      <p className="text-gray-600 max-w-3xl mb-8">
        The unique, heavy and beloved MoKo coffee tables didn’t launch to play! Well, you and kids can play because the corners of the tables have been designed soft and curved to protect you at home. Your home furniture cannot be weapons of destruction! The storage space adds functionality, so decor or books all would fit perfectly in there. The legs are strong and sturdy to hold and withstand all the pressures and weight your table. Hop on and fix that bulb real quick, they never will wobble!
      </p>
      <div className="flex justify-between items-center border-b pb-2 mb-8">
        <span className="text-gray-600">Showing the single result</span>
        <select className="border border-gray-300 rounded px-4 py-2 bg-white">
          <option>Sort by latest</option>
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white rounded-lg border p-6 flex flex-col items-center w-80 mx-auto">
          <div className="w-full mb-2 relative">
            <span className="absolute top-2 left-2 bg-[#F37021] text-white text-xs font-bold px-3 py-1 rounded">{coffeeTable.badge}</span>
            <img src={coffeeTable.image} alt={coffeeTable.title} className="w-full h-56 object-cover rounded" />
          </div>
          <div className="font-semibold text-lg text-center mb-1">{coffeeTable.title}</div>
          <div className="text-xs text-gray-500 mb-2">{coffeeTable.description}</div>
          <div className="text-[#F37021] text-lg font-bold mb-4">{coffeeTable.price}</div>
          <Link to={`/coffee-tables/${coffeeTable.slug}`} className="bg-[#F37021] hover:bg-[#d9570a] text-white font-bold py-2 px-6 rounded text-sm text-center w-full transition-colors">Buy Now</Link>
        </div>
      </div>
    </main>
    <Footer />
    <ChatButton />
  </div>
);

export default CoffeeTables;

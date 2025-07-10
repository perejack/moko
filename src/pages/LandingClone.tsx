import React from 'react';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
import Footer from '../components/Footer';
import ChatButton from '../components/ChatButton';
import { Link } from 'react-router-dom';

const accessories = [
  { title: 'Pouffes', img: 'https://cdn.shortpixel.ai/spai/w_325+q_lossy+ret_img+to_webp/moko.co.ke/wp-content/uploads/2022/12/SAS_1793-Yellow-min.jpg', link: '/accessories/pouff', price: 'Ksh 2,599' },
  { title: 'Footstools', img: 'https://cdn.shortpixel.ai/spai/w_325+q_lossy+ret_img+to_webp/moko.co.ke/wp-content/uploads/2022/12/SAS_1724-Yellow-1536x1026.jpg', link: '/accessories/footstool', price: 'Ksh 3,599' },
  { title: 'Ottomans', img: 'https://cdn.shortpixel.ai/spai/w_325+q_lossy+ret_img+to_webp/moko.co.ke/wp-content/uploads/2022/12/Djenga-Sven-Fio-Blue-Yellow-min-1536x1026.jpg', link: '/accessories/ottoman', price: 'Ksh 5,599' },
  { title: 'Throw Pillows', img: 'https://cdn.shortpixel.ai/spai/w_325+q_lossy+ret_img+to_webp/moko.co.ke/wp-content/uploads/2022/12/SAS_1846-Yellow-min.jpg', link: '/accessories/throw-pillow', price: 'Ksh 1,049' },
];

const guides = [
  { title: 'How to Arrange Your Living Room Furniture', img: 'https://cdn.shortpixel.ai/spai/w_448+q_lossy+ret_img+to_webp/moko.co.ke/wp-content/uploads/2021/08/HUM_9522-min-1536x1025.jpg', link: '#' },
  { title: 'Meet The Cutest Bed Design In Kenya', img: 'https://cdn.shortpixel.ai/spai/w_448+q_lossy+ret_img+to_webp/moko.co.ke/wp-content/uploads/2021/09/fam-in-bed.jpg', link: '#' },
  { title: 'Buy MoKo, Pay Flexible Installments', img: 'https://cdn.shortpixel.ai/spai/w_448+q_lossy+ret_img+to_webp/moko.co.ke/wp-content/uploads/2021/03/flexible-payment-options.png', link: '#' },
];

const shopCategories = [
  { title: 'BUY MoKo MATTRESSES', img: 'https://cdn.shortpixel.ai/spai/w_450+q_lossy+ret_img+to_webp/moko.co.ke/wp-content/uploads/2020/10/HUM_5877-min-1536x1025.jpg', link: '/mattresses', price: 'Ksh 7,949' },
  { title: 'BUY MoKo BEDS', img: 'https://cdn.shortpixel.ai/spai/w_450+q_lossy+ret_img+to_webp/moko.co.ke/wp-content/uploads/2022/04/HUM_0735.jpg', link: '/beds', price: 'Ksh 8,799' },
  { title: 'BUY MoKo SOFAS', img: 'https://cdn.shortpixel.ai/spai/w_450+q_lossy+ret_img+to_webp/moko.co.ke/wp-content/uploads/2021/09/HUM_9684-min-1536x1025.jpg', link: '/sofas', price: 'Ksh 10,949' },
  { title: 'BUY MoKo COFFEE TABLES', img: 'https://cdn.shortpixel.ai/spai/w_450+q_lossy+ret_img+to_webp/moko.co.ke/wp-content/uploads/2023/03/HUM_8697-min-1-1536x1025.jpg', link: '/coffee-tables', price: 'Ksh 5,799' },
  { title: 'BUY MoKo CARPETS', img: 'https://cdn.shortpixel.ai/spai/w_450+q_lossy+ret_img+to_webp/moko.co.ke/wp-content/uploads/2023/11/HUM_7647.jpg', link: '/carpets', price: 'Ksh 5,399' },
  { title: 'BUY MoKo TV STANDS', img: 'https://cdn.shortpixel.ai/spai/w_450+q_lossy+ret_img+to_webp/moko.co.ke/wp-content/uploads/2023/11/HUM_8874-Edit.jpg', link: '/tv-stands', price: 'Ksh 14,449' },
];

const testimonials = [
  {
    name: 'Paul Mwangi',
    date: '05/05/2023',
    rating: 5,
    content: '',
  },
  {
    name: 'kahara Solomon',
    date: '12/04/2023',
    rating: 5,
    content: 'Feeling lika biggie with my new 5 seater Mr. Biggies Chenil material... I just like it... saving for a TV... mali safi...',
  },
  {
    name: 'Benter Okungu',
    date: '07/04/2023',
    rating: 5,
    content: 'I just ordered my mattress yesterday, it was delivered today 😍😍😍😍😍 it\'s far much better than what I expected. keep it up Moko now I can...',
  },
];

const LandingClone = () => {
  return (
    <div className="bg-white min-h-screen font-sans">
      <Header />
      {/* Hero Section (Image Only) */}
      <section className="w-full">
        <img 
          src="https://moko.co.ke/wp-content/uploads/2025/03/Untitled-design-2.jpg" 
          alt="MoKo Mattresses are back in stock hero banner" 
          className="w-full h-auto object-cover" 
        />
      </section>

      {/* Cool stuff to SHOP */}
      <section className="container mx-auto py-10 px-4">
        <h3 className="text-2xl font-bold text-orange-600 mb-2">Cool stuff to SHOP...</h3>
        <div className="h-1 w-16 bg-orange-400 mb-6"></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {shopCategories.map((cat, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow hover:shadow-lg transition p-4 flex flex-col items-center">
              <img src={cat.img} alt={cat.title} className="w-full h-40 object-cover rounded mb-4" />
              <h4 className="font-bold italic text-lg text-gray-800 mb-1">{cat.title}</h4>
              <span className="text-orange-600 font-semibold mb-2">from {cat.price}</span>
              <Link to={cat.link} className="text-orange-500 underline">Shop Now</Link>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-4 mt-6 text-sm text-gray-700">
          <span className="flex items-center gap-1"><span className="text-yellow-400">♥</span> Beds</span>
          <span className="flex items-center gap-1"><span className="text-yellow-400">♥</span> Sofas</span>
          <span className="flex items-center gap-1"><span className="text-yellow-400">♥</span> Coffee Tables</span>
          <span className="flex items-center gap-1"><span className="text-yellow-400">♥</span> Carpets</span>
          <span className="flex items-center gap-1"><span className="text-yellow-400">♥</span> TV Stands</span>
        </div>
      </section>

      {/* Accessories */}
      <section className="container mx-auto py-10 px-4">
        <h3 className="text-2xl font-bold text-orange-600 mb-2">Super FUN Accessories...</h3>
        <div className="h-1 w-16 bg-orange-400 mb-6"></div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {accessories.map((acc, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow hover:shadow-lg transition p-4 flex flex-col items-center">
              <img src={acc.img} alt={acc.title} className="w-full h-28 object-cover rounded mb-2" />
              <h4 className="font-bold italic text-lg text-gray-800 mb-1">{acc.title}</h4>
              <Link to={acc.link} className="text-orange-500 underline mb-1">Buy Now from {acc.price}</Link>
            </div>
          ))}
        </div>
      </section>

      {/* Guides and Tips */}
      <section className="container mx-auto py-10 px-4">
        <h3 className="text-2xl font-bold text-orange-600 mb-2">Guides and Tips for MoKoers...</h3>
        <div className="h-1 w-16 bg-orange-400 mb-6"></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {guides.map((guide, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow hover:shadow-lg transition p-4 flex flex-col items-center">
              <img src={guide.img} alt={guide.title} className="w-full h-32 object-cover rounded mb-2" />
              <h4 className="text-md font-semibold text-gray-800 mb-1">{guide.title}</h4>
              <a href={guide.link} className="text-orange-500 text-xs underline">Read More &gt;&gt;</a>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto py-10 px-4">
        <h3 className="text-2xl font-bold text-orange-600 mb-2">MoKoers are talking...</h3>
        <div className="h-1 w-16 bg-orange-400 mb-6"></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow p-4 flex flex-col items-start">
              <div className="flex items-center gap-2 mb-2">
                <span className="font-bold text-sm">{t.name}</span>
                <span className="text-xs text-gray-500">{t.date}</span>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTroV7JQvlAS1wSXW3bIKdPG_lZBHkl3fZC9w&s" alt="Google" className="w-4 h-4 ml-1 rounded-full" />
              </div>
              <div className="flex items-center mb-2">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">★</span>
                ))}
              </div>
              <p className="text-gray-700 text-sm mb-2">{t.content}</p>
              <a href="#" className="text-orange-500 text-xs underline">Read more</a>
            </div>
          ))}
        </div>
        <div className="mt-4 text-sm text-gray-700">
          <span className="font-bold">Google</span> rating score: <span className="font-bold">4.6</span> of 5, based on <span className="font-bold">646 reviews</span>
        </div>
      </section>

      <ChatButton />
      <Footer />
    </div>
  );
};

export default LandingClone;

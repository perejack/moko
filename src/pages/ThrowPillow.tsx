import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ChatButton from '../components/ChatButton';

const ThrowPillow = () => (
  <div className="min-h-screen bg-[#fbeee6] flex flex-col">
    <Header />
    <main className="flex-1 max-w-5xl mx-auto px-4 py-8">
      <nav className="text-sm text-gray-500 mb-6">
        Home / Accessories / <span className="text-gray-800 font-semibold">Throw Pillow</span>
      </nav>
      <img src="https://cdn.shortpixel.ai/spai/w_325+q_lossy+ret_img+to_webp/moko.co.ke/wp-content/uploads/2022/12/SAS_1846-Yellow-min.jpg" alt="Throw Pillow" className="w-full max-w-md h-64 object-cover rounded-xl mb-4 mx-auto" />
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Throw Pillow</h1>
      <div className="text-xl font-semibold text-[#F37021] mb-4">KSh 1,049</div>
      <div className="mb-4 flex flex-wrap gap-2">
        <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm">High-density foam</span>
      </div>
      <div className="mb-4">
        <label className="block font-medium mb-1">Throw Pillow quantity</label>
        <input type="number" min={1} defaultValue={1} className="border rounded px-2 py-1 w-20" />
        <a
          href={`https://wa.me/+254788021130?text=${encodeURIComponent('Hi MoKo! I want to Lipia Polepole for the Throw Pillow at KSh 1,049 (Quantity: 1)')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-4 bg-[#1c4e3d] text-white px-4 py-2 rounded shadow hover:bg-[#17603a] inline-block"
        >
          Lipia Polepole
        </a>
      </div>
      <a
        href={`https://wa.me/+254788021130?text=${encodeURIComponent('Hi MoKo! I want to order the Throw Pillow at KSh 1,049 (Quantity: 1)')}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded text-center mb-4 transition-colors shadow-sm block"
      >
        Order on WhatsApp
      </a>
      <section className="mb-8">
        <h2 className="font-bold text-lg mb-2">Description</h2>
        <p className="mb-2">Our throw pillows are made with high-density foam for extra comfort and support. Perfect for sofas, beds, or as decorative accents in any room.</p>
      </section>
    </main>
    <Footer />
    <ChatButton />
  </div>
);

export default ThrowPillow;

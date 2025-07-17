import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ChatButton from '../components/ChatButton';

const Ottoman = () => (
  <div className="min-h-screen bg-[#fbeee6] flex flex-col">
    <Header />
    <main className="flex-1 max-w-5xl mx-auto px-4 py-8">
      <nav className="text-sm text-gray-500 mb-6">
        Home / Sofas / <span className="text-gray-800 font-semibold">Ottoman with storage</span>
      </nav>
      <img src="https://cdn.shortpixel.ai/spai/w_325+q_lossy+ret_img+to_webp/moko.co.ke/wp-content/uploads/2022/12/Djenga-Sven-Fio-Blue-Yellow-min-1536x1026.jpg" alt="Ottoman" className="w-full max-w-md h-64 object-cover rounded-xl mb-4 mx-auto" />
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Ottoman with storage</h1>
      <div className="text-xl font-semibold text-[#F37021] mb-4">KSh 5,299 – KSh 6,599</div>
      <div className="mb-4 flex flex-wrap gap-2">
        <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm">Extra storage space</span>
        <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm">Extra seating</span>
      </div>
      <div className="mb-4">
        <label className="block font-medium mb-1">Ottoman with storage quantity</label>
        <input type="number" min={1} defaultValue={1} className="border rounded px-2 py-1 w-20" />
        <a
          href={`https://wa.me/254788021130?text=${encodeURIComponent('Hi MoKo! I want to Lipia Polepole for the Ottoman with storage at KSh 5,299 (Quantity: 1)')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-4 bg-[#1c4e3d] text-white px-4 py-2 rounded shadow hover:bg-[#17603a] inline-block"
        >
          Lipia Polepole
        </a>
      </div>
      <a
        href={`https://wa.me/254788021130?text=${encodeURIComponent('Hi MoKo! I want to order the Ottoman with storage at KSh 5,299 (Quantity: 1)')}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded text-center mb-4 transition-colors shadow-sm block"
      >
        Order on WhatsApp
      </a>
      <section className="mb-8">
        <h2 className="font-bold text-lg mb-2">Description</h2>
        <p className="mb-2">If you find yourself scrambling to clear up every time a guest visits your home, this ottoman with storage will come to your rescue. There is excess space to throw in those misplaced items loitering in your room.</p>
        <p className="mb-2">An ottoman can be a storage box, an extension to your chaise or 3 seater sofa and even as a center piece/table for your living room.</p>
        <div className="mb-2"><span className="font-bold">Ottoman Features</span>
          <ul className="list-disc pl-6">
            <li>It doubles as extra seating as well as a convenient storage unit.</li>
            <li>It is designed to line up with your sofa, no matter what position you decide to place it in.</li>
            <li>4 Wooden legs hold it above the ground and give it fancy vibe</li>
          </ul>
        </div>
        <div className="mb-2"><span className="font-bold">Ottoman Dimensions</span>
          <ul className="list-disc pl-6">
            <li>Length – 0.6M</li>
            <li>Width – 0.6M</li>
            <li>Height – 0.4M</li>
          </ul>
        </div>
      </section>
    </main>
    <Footer />
    <ChatButton />
  </div>
);

export default Ottoman;

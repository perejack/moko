import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ChatButton from '../components/ChatButton';

const Footstool = () => (
  <div className="min-h-screen bg-[#fbeee6] flex flex-col">
    <Header />
    <main className="flex-1 max-w-5xl mx-auto px-4 py-8">
      <nav className="text-sm text-gray-500 mb-6">
        Home / Sofas / <span className="text-gray-800 font-semibold">Footstool with storage</span>
      </nav>
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left: Images */}
        <div className="md:w-1/2 flex flex-col items-center">
          <div className="relative w-full">
            <img src="https://cdn.shortpixel.ai/spai/w_800+q_lossy+ret_img+to_webp/moko.co.ke/wp-content/uploads/2022/12/SAS_1724-Yellow-1536x1026.jpg" alt="Footstool" className="w-full h-72 object-cover rounded-xl shadow mb-4" />
            {/* Optional: Magnifier or Zoom */}
          </div>
          {/* Thumbnails (placeholders) */}
          <div className="flex gap-2 mt-2">
            <img src="https://cdn.shortpixel.ai/spai/w_200+q_lossy+ret_img+to_webp/moko.co.ke/wp-content/uploads/2022/12/SAS_1724-Yellow-1536x1026.jpg" alt="Thumb 1" className="w-16 h-16 object-cover rounded border border-orange-200" />
            <img src="https://cdn.shortpixel.ai/spai/w_200+q_lossy+ret_img+to_webp/moko.co.ke/wp-content/uploads/2021/09/HUM_9684-min-1536x1025.jpg" alt="Thumb 2" className="w-16 h-16 object-cover rounded border" />
            <img src="https://cdn.shortpixel.ai/spai/w_200+q_lossy+ret_img+to_webp/moko.co.ke/wp-content/uploads/2022/04/HUM_0735.jpg" alt="Thumb 3" className="w-16 h-16 object-cover rounded border" />
          </div>
        </div>
        {/* Right: Details */}
        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Footstool With Storage</h1>
          <div className="text-xl font-semibold text-[#F37021] mb-4">KSh 6,599 – KSh 7,649</div>
          <div className="mb-4 flex flex-wrap gap-2">
            <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm">Multipurpose footstool</span>
            <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm">Removable cushions and lid</span>
          </div>
          {/* Options (Fabric, Color) */}
          <div className="mb-4">
            <div className="font-semibold mb-1">Sofa Fabric</div>
            <div className="flex gap-2 mb-2">
              <button className="px-3 py-1 rounded border bg-white">Chenille</button>
              <button className="px-3 py-1 rounded border bg-white">Sven</button>
              <button className="px-3 py-1 rounded border bg-white">Woven A</button>
            </div>
            <div className="font-semibold mb-1">Sofa Color</div>
            <div className="flex flex-wrap gap-1 mb-2">
              <span className="w-6 h-6 rounded bg-[#5c5a5a] border"></span>
              <span className="w-6 h-6 rounded bg-[#b0b7c0] border"></span>
              <span className="w-6 h-6 rounded bg-[#7c8a9d] border"></span>
              <span className="w-6 h-6 rounded bg-[#c7b299] border"></span>
              <span className="w-6 h-6 rounded bg-[#d6b49a] border"></span>
              <span className="w-6 h-6 rounded bg-[#a67c52] border"></span>
              <span className="w-6 h-6 rounded bg-[#d8b4a6] border"></span>
              <span className="w-6 h-6 rounded bg-[#c5c5c5] border"></span>
              <span className="w-6 h-6 rounded bg-[#f5e1da] border"></span>
              <span className="w-6 h-6 rounded bg-[#b7c9d7] border"></span>
              <span className="w-6 h-6 rounded bg-[#e0e0e0] border"></span>
              <span className="w-6 h-6 rounded bg-[#a3b9c9] border"></span>
              <span className="w-6 h-6 rounded bg-[#c1b6a4] border"></span>
              <span className="w-6 h-6 rounded bg-[#e9e3d1] border"></span>
              <span className="w-6 h-6 rounded bg-[#b5b5b5] border"></span>
              <span className="w-6 h-6 rounded bg-[#b6b6b6] border"></span>
              <span className="w-6 h-6 rounded bg-[#e2e2e2] border"></span>
              <span className="w-6 h-6 rounded bg-[#cfcfcf] border"></span>
              <span className="w-6 h-6 rounded bg-[#f0f0f0] border"></span>
              <span className="w-6 h-6 rounded bg-[#eaeaea] border"></span>
              <span className="w-6 h-6 rounded bg-[#b0c4de] border"></span>
              <span className="w-6 h-6 rounded bg-[#b0e0e6] border"></span>
              <span className="w-6 h-6 rounded bg-[#add8e6] border"></span>
              <span className="w-6 h-6 rounded bg-[#4682b4] border"></span>
              <span className="w-6 h-6 rounded bg-[#b0c4de] border"></span>
              <span className="w-6 h-6 rounded bg-[#e0ffff] border"></span>
              <span className="w-6 h-6 rounded bg-[#f5f5dc] border"></span>
              <span className="w-6 h-6 rounded bg-[#fff8dc] border"></span>
              <span className="w-6 h-6 rounded bg-[#f5deb3] border"></span>
              <span className="w-6 h-6 rounded bg-[#ffe4b5] border"></span>
            </div>
            <input type="text" className="border rounded px-2 py-1 w-24 mb-2" placeholder="Ocean Blue" value="Ocean Blue" readOnly />
          </div>
          {/* Quantity and Buttons */}
          <div className="flex items-center gap-2 mb-4">
            <input type="number" min={1} defaultValue={1} className="border rounded px-2 py-1 w-20" />
            <button className="bg-[#F37021] text-white px-4 py-2 rounded font-semibold shadow hover:bg-[#d9570a]">Add to cart</button>
            <a
            href={`https://wa.me/254788021130?text=${encodeURIComponent('Hi MoKo! I want to Lipia Polepole for the Footstool with storage at KSh 6,599 (Quantity: 1)')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#1c4e3d] text-white px-4 py-2 rounded font-semibold shadow hover:bg-[#17603a] inline-block"
          >
            Lipia Polepole
          </a>
        </div>
        <a
          href={`https://wa.me/254788021130?text=${encodeURIComponent('Hi MoKo! I want to order the Footstool with storage at KSh 6,599 (Quantity: 1)')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded text-center mb-4 transition-colors shadow-sm block"
        >
          Order on WhatsApp
        </a>
          {/* Description */}
          <section className="mb-8">
            <h2 className="font-bold text-lg mb-2">Description</h2>
            <p className="mb-2">The MoKo footstool is the most versatile of all our products. It is a 4-in-1 footstool with storage, can be used as a side table and…wait for it.. a serving tray!</p>
            <p className="mb-2">Furnish your living room or bedroom with the functional and stylish MoKo furniture that comes in 3 different fabrics and 5 shades of colour. It’s very cozy for your lovely legs when lounging.</p>
            <p className="mb-2">The best footrest to get you cozy and tidy at the same time.</p>
            <div className="mb-2"><span className="font-bold">Footstool features</span>
              <ul className="list-disc pl-6">
                <li>Like the ottoman, the removable lid reveals a spacious compartment for storing blankets, books, and more</li>
                <li>The lid can be used as a flat surface to place your laptop or as a serving tray to serve your partner (or yourself) a dreamy breakfast or play a game of cards on</li>
                <li>If you need more seating space, the two cushions attached to the footstool’s lid can be removed, placed on the floor and used for extra seating.</li>
                <li>The whole unit can be used as an additional seat or a cushioned footrest.</li>
              </ul>
            </div>
            <div className="mb-2"><span className="font-bold">Footstool Dimensions</span>
              <ul className="list-disc pl-6">
                <li>Width – 525 mm (0.5M)</li>
                <li>Height – 420 mm (0.4M)</li>
                <li>Length – 625 mm (0.6M)</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </main>
    <Footer />
    <ChatButton />
  </div>
);

export default Footstool;

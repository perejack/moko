import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ChatButton from '../components/ChatButton';

const Pouff = () => (
  <div className="min-h-screen bg-[#fbeee6] flex flex-col">
    <Header />
    <main className="flex-1 max-w-5xl mx-auto px-4 py-8">
      <nav className="text-sm text-gray-500 mb-6">
        Home / Accessories / <span className="text-gray-800 font-semibold">Pouff</span>
      </nav>
      <img src="https://cdn.shortpixel.ai/spai/w_325+q_lossy+ret_img+to_webp/moko.co.ke/wp-content/uploads/2022/12/SAS_1793-Yellow-min.jpg" alt="Pouff" className="w-full max-w-md h-64 object-cover rounded-xl mb-4 mx-auto" />
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Pouff</h1>
      <div className="text-xl font-semibold text-[#F37021] mb-4">KSh 2,599</div>
      <div className="mb-4 flex flex-wrap gap-2">
        <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm">Multifunctional accessory</span>
        <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm">High-density foam</span>
      </div>
      <div className="mb-4">
        <label className="block font-medium mb-1">Pouff quantity</label>
        <input type="number" min={1} defaultValue={1} className="border rounded px-2 py-1 w-20" />
        <a
          href={`https://wa.me/+254788021130?text=${encodeURIComponent('Hi MoKo! I want to Lipia Polepole for the Pouff at KSh 2,599 (Quantity: 1)')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-4 bg-[#1c4e3d] text-white px-4 py-2 rounded shadow hover:bg-[#17603a] inline-block"
        >
          Lipia Polepole
        </a>
      </div>
      <a
        href={`https://wa.me/+254788021130?text=${encodeURIComponent('Hi MoKo! I want to order the Pouff at KSh 2,599 (Quantity: 1)')}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded text-center mb-4 transition-colors shadow-sm block"
      >
        Order on WhatsApp
      </a>
      <section className="mb-8">
        <h2 className="font-bold text-lg mb-2">Description</h2>
        <p className="mb-2">Our pouffs are firm, bouncy, and beautiful. You can use it as an extra seat, or a footrest, or a surface for your kids to draw on. Made of MoKo mattress foam, trust it to make your living room so cozy</p>
        <div className="mb-2"><span className="font-bold">Pouff Materials:</span><br />High-density foam.</div>
        <div className="mb-2"><span className="font-bold">Pouff Dimensions:</span>
          <ul className="list-disc pl-6">
            <li>Length – 17 inches</li>
            <li>Width – 17 inches</li>
            <li>Height – 18 inches.</li>
          </ul>
        </div>
      </section>
      <section>
        <h3 className="font-bold text-lg mb-2">Frequently bought with Pouff</h3>
        <div className="flex gap-4">
          <img src="https://cdn.shortpixel.ai/spai/w_325+q_lossy+ret_img+to_webp/moko.co.ke/wp-content/uploads/2022/12/SAS_1846-Yellow-min.jpg" alt="Throw Pillow" className="w-32 h-32 rounded object-cover" />
          <img src="https://cdn.shortpixel.ai/spai/w_450+q_lossy+ret_img+to_webp/moko.co.ke/wp-content/uploads/2022/04/HUM_0735.jpg" alt="Pouff in living room" className="w-32 h-32 rounded object-cover" />
        </div>
      </section>
    </main>
    <Footer />
    <ChatButton />
  </div>
);

export default Pouff;

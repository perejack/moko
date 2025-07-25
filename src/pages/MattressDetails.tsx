import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { mattresses } from '../data/mattresses';
import { sofas } from '../data/sofas';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ChatButton from '../components/ChatButton';

const MattressDetails = () => {
  const { slug } = useParams();
  const product = mattresses.find((m) => m.slug === slug);
  const [thickness, setThickness] = useState("");

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-4">Mattress Not Found</h2>
            <Link to="/mattresses" className="text-[#F37021] underline">Back to Mattresses</Link>
          </div>
        </main>
        <Footer />
        <ChatButton />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className="flex-1 max-w-5xl mx-auto px-4 py-10">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-4">
          <Link to="/" className="hover:underline">Home</Link> /{' '}
          <Link to="/mattresses" className="hover:underline">Mattresses</Link> /{' '}
          <span className="text-gray-700 font-semibold">{product.title}</span>
        </nav>

        <div className="flex flex-col md:flex-row gap-10">
          {/* Image + Gallery */}
          <div className="md:w-1/2">
            <img src={product.image} alt={product.title} className="rounded-lg w-full max-h-96 object-cover mb-4" />
            <div className="flex gap-2">
              {product.gallery.map((img, i) => (
                <img key={i} src={img} alt={product.title + ' ' + (i+1)} className="w-16 h-16 object-cover rounded border" />
              ))}
            </div>
          </div>

          {/* Info & Actions */}
          <div className="md:w-1/2 flex flex-col">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">{product.title}</h1>
            <div className="text-xl text-[#F37021] font-semibold mb-4">{product.priceRange}</div>
            <div className="mb-4">
              <label className="block mb-1 font-medium text-gray-700">Mattress Thickness</label>
              <select
                className="border border-gray-300 rounded px-4 py-2 w-full"
                value={thickness}
                onChange={e => setThickness(e.target.value)}
              >
                <option value="">Choose an option</option>
                <option value="6">6 inch</option>
                <option value="8">8 inch</option>
              </select>
              {thickness && (
                <div className="text-sm text-gray-600 mt-1">Selected: {thickness} inch</div>
              )}
            </div>
            <div className="flex items-center gap-2 mb-4">
              <input type="number" min={1} defaultValue={1} className="border border-gray-300 rounded px-3 py-2 w-20" />
              <button className="bg-[#F37021] hover:bg-[#d9570a] text-white font-bold py-2 px-6 rounded-[8px] transition-colors shadow-sm">Add to cart</button>
              <button className="bg-[#1c4e3d] hover:bg-[#17603a] text-white font-bold py-2 px-6 rounded-[8px] ml-2">Lipia Polepole</button>
            </div>
            <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-[8px] mb-4">Order on WhatsApp</button>
            <div className="flex flex-wrap gap-2 mb-4">
              {product.whatsGood.map((good, i) => (
                <span key={i} className="inline-block bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full">{good}</span>
              ))}
            </div>
            <div className="text-gray-600 text-sm mb-2">Refer a friend to buy and get a <span className="font-bold">FREE pillow 🎉</span></div>
            <div className="text-gray-600 text-sm mb-4">
              <a href="#" className="text-[#F37021] underline">Learn more about MoKo referral gifts</a>
            </div>
          </div>
        </div>

        {/* Description & Features */}
        <div className="mt-10">
          <div className="border-b border-gray-200 mb-4">
            <button className="text-[#F37021] font-bold border-b-2 border-[#F37021] px-4 py-2 bg-white">Description</button>
          </div>
          <div className="mb-4">
            <h2 className="text-xl font-semibold mb-2 text-[#F37021]">Description</h2>
            <p className="text-gray-700 mb-4">{product.description}</p>
            <h3 className="text-lg font-bold text-[#F37021] mb-1">Features</h3>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              {product.features.map((f, i) => (
                <li key={i}><span className={f.startsWith('Built') || f.startsWith('Looks') ? 'font-bold' : ''}>{f}</span></li>
              ))}
            </ul>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-10">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Most {product.title} buyers like...</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-center max-w-3xl mx-auto">
            {product.related.map((slug, i) => (
              <RelatedProductCard key={i} slug={slug} />
            ))}
            {Array.from({ length: Math.max(0, 3 - product.related.length) }).map((_, i) => (
              <div key={"empty-"+i} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
      <ChatButton />
    </div>
  );
};

const relatedFallbacks: Record<string, { image: string; title: string; priceRange?: string }> = {
  'throw-pillows': {
    image: 'https://cdn.shortpixel.ai/spai/w_325+q_lossy+ret_img+to_webp/moko.co.ke/wp-content/uploads/2022/12/SAS_1846-Yellow-min.jpg',
    title: 'Throw Pillows',
    priceRange: 'KSh 899',
  },
  'pouff': {
    image: 'https://cdn.shortpixel.ai/spai/w_325+q_lossy+ret_img+to_webp/moko.co.ke/wp-content/uploads/2022/12/SAS_1793-Yellow-min.jpg',
    title: 'Pouff',
    priceRange: 'KSh 2,499',
  },
};


function RelatedProductCard({ slug }: { slug: string }) {
  let product = sofas.find((s) => s.slug === slug) || mattresses.find((m) => m.slug === slug);
  let fallback = relatedFallbacks[slug];
  if (!product && !fallback) return null;
  const image = product?.image || fallback?.image || '';
  const title = product?.title || fallback?.title || slug;
  const priceRange = product?.priceRange || fallback?.priceRange || '';
  const isSofa = !!sofas.find((s) => s.slug === slug);
  const isMattress = !!mattresses.find((m) => m.slug === slug);
  let link = '#';
  if (isSofa) link = `/sofas/${slug}`;
  else if (isMattress) link = `/mattresses/${slug}`;

  return (
    <div className="bg-white rounded-lg border p-6 flex flex-col items-center w-56">
      <div className="aspect-square w-28 h-28 mb-2 overflow-hidden rounded bg-gray-100">
        <img src={image} alt={title} className="w-full h-full object-cover rounded" />
      </div>
      <div className="font-medium text-center mb-1">{title}</div>
      {priceRange && <div className="text-xs text-gray-500 mb-2">{priceRange}</div>}
      {product ? (
        <Link to={link} className="bg-[#F37021] hover:bg-[#d9570a] text-white font-bold py-1 px-4 rounded text-sm text-center w-full mt-auto transition-colors">Buy Now</Link>
      ) : (
        <button className="bg-[#F37021] opacity-60 text-white font-bold py-1 px-4 rounded text-sm mt-auto cursor-not-allowed" disabled>Buy Now</button>
      )}
    </div>
  );
}

export default MattressDetails;

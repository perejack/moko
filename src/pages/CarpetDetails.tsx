import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { carpets } from '../data/carpets';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ChatButton from '../components/ChatButton';
import { useCart } from '../context/CartContext';

const CarpetDetails = () => {
  const { slug } = useParams();
  const carpet = carpets.find((item) => item.slug === slug);

  const [quantity, setQuantity] = React.useState(1);

  const { addToCart } = useCart();

  if (!carpet) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header />
        <main className="flex-1 max-w-5xl mx-auto px-4 py-10">
          <div className="text-center text-2xl text-gray-700">Carpet not found.</div>
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
          <Link to="/carpets" className="hover:underline">Carpets</Link> /{' '}
          <span className="text-gray-700 font-semibold">{carpet.title}</span>
        </nav>
        <div className="flex flex-col md:flex-row gap-10">
          {/* Image + Gallery */}
          <div className="md:w-1/2">
            <img src={carpet.image} alt={carpet.title} className="rounded-lg w-full max-h-96 object-cover mb-4" />
            <div className="flex gap-2">
              {carpet.gallery.map((img, i) => (
                <img key={i} src={img} alt={carpet.title + ' ' + (i+1)} className="w-16 h-16 object-cover rounded border" />
              ))}
            </div>
          </div>
          {/* Info & Actions */}
          <div className="md:w-1/2 flex flex-col">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">{carpet.title}</h1>
            <div className="text-xl text-[#F37021] font-semibold mb-2">{carpet.price}</div>
            <div className="flex items-center gap-2 mb-4">
              <input
                type="number"
                min={1}
                value={quantity}
                onChange={e => setQuantity(Number(e.target.value))}
                className="border border-gray-300 rounded px-3 py-2 w-20"
              />
              <button className="bg-[#F37021] hover:bg-[#d9570a] text-white font-bold py-2 px-6 rounded-[8px] transition-colors shadow-sm">Add to cart</button>
            </div>
            <div className="flex flex-col gap-4 mt-6">
              <a
                href={`https://wa.me/254788021130?text=Hi%20MoKo!%20I%20want%20to%20order%20the%20${encodeURIComponent(carpet.title)}%20for%20${encodeURIComponent(carpet.price)}%20(Quantity:%20${quantity})`}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-[8px] text-center mb-4 transition-colors shadow-sm"
              >
                Order on WhatsApp
              </a>
              <a
                href={`https://wa.me/254788021130?text=Hi%20MoKo!%20I%20want%20to%20Lipia%20Polepole%20for%20the%20${encodeURIComponent(carpet.title)}%20at%20${encodeURIComponent(carpet.price)}%20(Quantity:%20${quantity})`}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-[#1c4e3d] hover:bg-[#17603a] text-white font-bold py-2 px-6 rounded-[8px] text-center mb-4 transition-colors shadow-sm"
              >
                Lipia Polepole
              </a>
              <button
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-[8px]"
                onClick={() => {
                  addToCart({
                    slug: carpet.slug,
                    title: carpet.title,
                    price: carpet.price,
                    quantity,
                    image: carpet.image,
                    options: {} // carpets have no options
                  });
                  alert('Added to cart!');
                }}
              >
                Add to Cart
              </button>
            </div>
            <a
              href={`https://wa.me/254788021130?text=Hi%20MoKo!%20I%20want%20to%20Lipia%20Polepole%20for%20the%20${encodeURIComponent(carpet.title)}%20at%20${encodeURIComponent(carpet.price)}%20(Quantity:%20${quantity})`}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-[#1c4e3d] hover:bg-[#17603a] text-white font-bold py-2 px-6 rounded-[8px] text-center mb-4 transition-colors shadow-sm"
            >
              Lipia Polepole
            </a>
          </div>
        </div>
      </main>
      <Footer />
      <ChatButton />
    </div>
  );
};

export default CarpetDetails;

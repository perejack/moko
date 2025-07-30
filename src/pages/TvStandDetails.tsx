import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { supabase, Product } from '../lib/supabase';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ChatButton from '../components/ChatButton';
import { useCart } from '../context/CartContext';

const TvStandDetails = () => {
  const { slug } = useParams();
  const [tvstand, setTvStand] = React.useState<Product | null>(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);
  const [quantity, setQuantity] = React.useState(1);
  const { addToCart } = useCart();

  React.useEffect(() => {
    const fetchTvStand = async () => {
      setLoading(true);
      setError(null);
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('category', 'TV Stands')
        .eq('slug', slug)
        .single();
      if (error) {
        setError('TV Stand not found.');
        setTvStand(null);
      } else {
        setTvStand(data);
      }
      setLoading(false);
    };
    if (slug) fetchTvStand();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header />
        <main className="flex-1 max-w-5xl mx-auto px-4 py-10">
          <div className="text-center text-2xl text-gray-700">Loading...</div>
        </main>
        <Footer />
        <ChatButton />
      </div>
    );
  }

  if (error || !tvstand) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header />
        <main className="flex-1 max-w-5xl mx-auto px-4 py-10">
          <div className="text-center text-2xl text-gray-700">{error || 'TV Stand not found.'}</div>
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
          <Link to="/tv-stands" className="hover:underline">TV Stands</Link> /{' '}
          <span className="text-gray-700 font-semibold">{tvstand.title}</span>
        </nav>
        <div className="flex flex-col md:flex-row gap-10">
          {/* Image + Gallery */}
          <div className="md:w-1/2">
            <img src={tvstand.image} alt={tvstand.title} className="rounded-lg w-full max-h-96 object-cover mb-4" />
            <div className="flex gap-2">
              {(tvstand.images || []).map((img, i) => (
                <img key={i} src={img} alt={tvstand.title + ' ' + (i+1)} className="w-16 h-16 object-cover rounded border" />
              ))}
            </div>
          </div>
          {/* Info & Actions */}
          <div className="md:w-1/2 flex flex-col">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">{tvstand.title}</h1>
            <div className="text-xl text-[#F37021] font-semibold mb-2">{tvstand.price}</div>
            <div className="mb-4 text-gray-600 text-sm">Select your preferred color and add to cart. <button className="text-[#F37021] underline ml-2">clear</button></div>
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
                href={`https://wa.me/254788021130?text=Hi%20MoKo!%20I%20want%20to%20order%20the%20${encodeURIComponent(tvstand.title)}%20for%20${encodeURIComponent(tvstand.price)}%20(Quantity:%20${quantity})`}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-[8px] text-center mb-4 transition-colors shadow-sm"
              >
                Order on WhatsApp
              </a>
              <a
                href={`https://wa.me/254788021130?text=Hi%20MoKo!%20I%20want%20to%20Lipia%20Polepole%20for%20the%20${encodeURIComponent(tvstand.title)}%20at%20${encodeURIComponent(tvstand.price)}%20(Quantity:%20${quantity})`}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-[#1c4e3d] hover:bg-[#17603a] text-white font-bold py-2 px-6 rounded-[8px] text-center mb-4 transition-colors shadow-sm"
              >
                Lipia Polepole
              </a>
              <button
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-[8px] text-center mb-4 transition-colors shadow-sm"
                onClick={() => {
                  addToCart({
                    slug: tvstand.slug,
                    title: tvstand.title,
                    price: tvstand.price,
                    quantity,
                    image: tvstand.image,
                  });
                  alert('Added to cart!');
                }}
              >
                Add to Cart
              </button>
            </div>
            <a
              href={`https://wa.me/254788021130?text=Hi%20MoKo!%20I%20want%20to%20Lipia%20Polepole%20for%20the%20${encodeURIComponent(tvstand.title)}%20at%20${encodeURIComponent(tvstand.price)}%20(Quantity:%20${quantity})`}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-[#1c4e3d] hover:bg-[#17603a] text-white font-bold py-2 px-6 rounded-[8px] text-center mb-4 transition-colors shadow-sm"
            >
              Lipia Polepole
            </a>
          </div>
        </div>
        {/* Description & Features */}
        <div className="mt-10">
          <h2 className="text-xl font-semibold mb-2 text-[#F37021]">Description</h2>
          <p className="text-gray-700 mb-4">{tvstand.description || 'A stylish and sturdy TV stand to elevate your living space.'}</p>
        </div>
      </main>
      <Footer />
      <ChatButton />
    </div>
  );
};

export default TvStandDetails;

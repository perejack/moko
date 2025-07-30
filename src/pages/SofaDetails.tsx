import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { supabase, Product } from '../lib/supabase';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ChatButton from '../components/ChatButton';

const fabricOptions = ['Chenille', 'Sven', 'Woven A'];
const colorOptions = ['#4B4B4B', '#6E7A8A', '#E0E0E0', '#C9B29B', '#B8A083', '#E5D8C3', '#A0A0A0', '#D3BFA5', '#B7B7B7', '#E2CFC6'];

const SofaDetails = () => {
  const { slug } = useParams();
  const [sofa, setSofa] = React.useState<Product | null>(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    const fetchSofa = async () => {
      setLoading(true);
      setError(null);
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('category', 'Sofas')
        .eq('slug', slug)
        .single();
      if (error) {
        setError('Sofa not found.');
        setSofa(null);
      } else {
        setSofa(data);
      }
      setLoading(false);
    };
    if (slug) fetchSofa();
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

  if (error || !sofa) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header />
        <main className="flex-1 max-w-5xl mx-auto px-4 py-10">
          <div className="text-center text-2xl text-gray-700">{error || 'Sofa not found.'}</div>
        </main>
        <Footer />
        <ChatButton />
      </div>
    );
  }

  const [selectedFabric, setSelectedFabric] = React.useState(fabricOptions[0]);
  const [selectedColor, setSelectedColor] = React.useState(colorOptions[0]);
  const [quantity, setQuantity] = React.useState(1);

  const relatedProducts = sofa.related.map((slug) =>
    supabase
      .from('products')
      .select('*')
      .eq('slug', slug)
      .single()
  );

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="max-w-6xl mx-auto px-4 py-8">
        <nav className="text-sm mb-4 text-gray-500">
          <Link to="/sofa" className="hover:underline text-gray-600">Home</Link> / <span className="text-[#F37021] font-semibold">{sofa.title}</span>
        </nav>
        <div className="flex flex-col md:flex-row gap-8">
          {/* Image Gallery */}
          <div className="flex-1">
            <img src={sofa.image} alt={sofa.title} className="rounded-lg w-full max-w-md mb-4" />
            <div className="flex gap-2 mt-2">
              {(sofa.images || []).map((img, i) => (
                <img key={i} src={img} alt="Gallery" className="w-20 h-20 object-cover rounded border" />
              ))}
            </div>
          </div>
          {/* Details */}
          <div className="flex-1">
            <h1 className="text-3xl font-bold mb-2 text-[#222]">{sofa.title}</h1>
            <div className="text-xl font-semibold mb-4 text-[#F37021]">{sofa.priceRange}</div>
            <h1 className="text-3xl font-bold mb-2 text-[#222]">{sofa.title}</h1>
            <div className="text-xl font-semibold mb-4 text-[#F37021]">{sofa.priceRange}</div>
            <div className="border-b my-4"></div>
            <div className="mb-4">
              <label className="font-semibold text-gray-700 mr-2">Sofa Fabric</label>
              <div className="flex gap-2 mt-1">
                {fabricOptions.map((fabric) => (
                  <button
                    key={fabric}
                    className={`px-3 py-1 rounded border ${selectedFabric === fabric ? 'bg-[#F37021] text-white' : 'bg-gray-100 text-gray-700'}`}
                    onClick={() => setSelectedFabric(fabric)}
                  >
                    {fabric}
                  </button>
                ))}
              </div>
            </div>
            <div className="mb-4">
              <label className="font-semibold text-gray-700 mr-2">Sofa Color</label>
              <div className="flex gap-2 mt-1 flex-wrap">
                {colorOptions.map((color) => (
                  <button
                    key={color}
                    className={`w-7 h-7 rounded border-2 ${selectedColor === color ? 'border-[#F37021] border-4' : 'border-gray-300'}`}
                    style={{ background: color }}
                    onClick={() => setSelectedColor(color)}
                  />
                ))}
              </div>
            </div>
            <div className="mb-4 flex items-center gap-2">
              <label className="font-semibold text-gray-700">Quantity</label>
              <input
                type="number"
                min={1}
                value={quantity}
                onChange={e => setQuantity(Number(e.target.value))}
                className="w-16 border rounded px-2 py-1"
              />
            </div>
            <div className="flex gap-2 mb-4">
              <button className="bg-[#F37021] hover:bg-[#d9570a] text-white font-bold py-2 px-6 rounded-[8px] transition-colors text-[16px] shadow-sm">Add to cart</button>
              <button className="bg-[#004d40] hover:bg-[#00796b] text-white font-bold py-2 px-6 rounded-[8px] transition-colors text-[16px] shadow-sm">Lipia Polepole</button>
              <button className="bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-2 px-6 rounded-[8px] transition-colors text-[16px] shadow-sm">Order on WhatsApp</button>
            </div>
          </div>
        </div>
        {/* Description & Features */}
        <div className="mt-10 max-w-3xl">
          <h2 className="text-xl font-bold text-[#F37021] mb-2">Description</h2>
          <p className="mb-4 text-gray-800 whitespace-pre-line">{sofa.description}</p>
          <h3 className="font-bold text-[#F37021] mb-2">Sofa Features</h3>
          <ul className="list-disc pl-6 mb-4 text-gray-800">
            {sofa.features.map((f, idx) => (
              <li key={idx}>{f}</li>
            ))}
          </ul>
          <h3 className="font-bold text-[#F37021] mb-2">Sofa Dimensions</h3>
          <ul className="list-disc pl-6 mb-4 text-gray-800">
            {sofa.dimensions.map((d, idx) => (
              <li key={idx}>{d}</li>
            ))}
          </ul>
        </div>
        {/* Related Offers */}
        {relatedProducts.length > 0 && (
          <div className="mt-12">
            <h3 className="text-xl font-bold mb-4">Most {sofa.title} buyers like...</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProducts.map((rel) => (
                <div key={rel.slug} className="bg-white rounded-lg overflow-hidden shadow p-4 flex flex-col items-start">
                  <img src={rel.image} alt={rel.title} className="w-full h-40 object-cover rounded mb-2" />
                  <h4 className="font-bold text-[#F37021] text-md mb-1">{rel.title}</h4>
                  <span className="text-[#8C8C8C] mb-2">{rel.priceRange}</span>
                  <button className="bg-[#F37021] hover:bg-[#d9570a] text-white font-bold py-2 px-6 rounded-[8px] transition-colors text-[16px] mt-auto shadow-sm">
                    Buy Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <ChatButton />
      <Footer />
    </div>
  );
};

export default SofaDetails;

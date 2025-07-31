import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useParams, Link } from 'react-router-dom';
import { supabase, Product } from '../lib/supabase';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ChatButton from '../components/ChatButton';

const BedDetails = () => {
  const { slug } = useParams();
  const [bed, setBed] = React.useState<Product | null>(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    const fetchBed = async () => {
      setLoading(true);
      setError(null);
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('category', 'Beds')
        .eq('slug', slug)
        .single();
      if (error) {
        setError('Bed not found.');
        setBed(null);
      } else {
        setBed(data);
      }
      setLoading(false);
    };
    if (slug) fetchBed();
  }, [slug]);

  const { addToCart } = useCart();
  const [selectedFabric, setSelectedFabric] = React.useState("");
  const [selectedSize, setSelectedSize] = React.useState("");
  const [quantity, setQuantity] = React.useState(1);

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

  if (error || !bed) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header />
        <main className="flex-1 max-w-5xl mx-auto px-4 py-10">
          <div className="text-center text-2xl text-gray-700">{error || 'Bed not found.'}</div>
        </main>
        <Footer />
        <ChatButton />
      </div>
    );
  }

  // Dynamic options for each bed
  const fabricOptions = bed.slug === 'zzze-hug-headboard-cushion'
    ? ['Gray', 'Blue', 'Brown']
    : ['None'];
  const bedSizeOptions = bed.slug === 'zzze-hug-moko-bed'
    ? ['6 by 6 (King)', '5 by 6 (Queen)', '4 by 6', '3.5 by 6', '3 by 6']
    : ['Choose an option'];

  // WhatsGood/Badges for each bed
  const whatsGood = bed.slug === 'zzze-hug-headboard-cushion'
    ? [
        '🧼 Watch how to remove cushion for a quick wash',
        '😴 Very cozy and stylish',
        'Refer a friend to buy and get a FREE pillow 🎉',
      ]
    : [
        '⏱️ We assemble for you and provide manuals too',
        '🔸 Steady, strong joints (Watch MoKo bed carry a car)',
        'Refer a friend to buy and get a FREE pillow 🎉',
      ];

  // Description/Features
  const description = bed.slug === 'zzze-hug-headboard-cushion'
    ? (
      <>
        <h2 className="text-xl font-semibold mb-2 text-[#F37021]">Description</h2>
        <p className="text-gray-700 mb-4">Add a layer of comfort and style, with a removable headboard cushion. Your bed doesn’t need to be boring. You don’t have to worry about getting it dirty or how hectic it will getting upholstering services because the headboard fabric is removable.</p>
        <p className="text-gray-700 mb-4">An eazzzy to clean cushion fabric gives you the freedom to catch a book, enjoy breakfast in bed or lean in for a great movie!</p>
        <p className="text-gray-700 mb-4">Enjoy the removable headboard cushion in different colours and fabrics, and each that blend with any of your decor styles.</p>
        <p className="text-gray-700 mb-4">Don’t live screaming when you knock your head and elbow on the headboard, this cushion got you!</p>
        <h3 className="text-lg font-bold text-[#F37021] mb-1 mt-6">Headboard Cushion Features</h3>
        <div className="mb-2 font-bold text-[#F37021]">Looks crazy good;</div>
        <ul className="list-disc pl-6 mb-2 text-gray-700">
          <li>The Removable Headboard Cushion is available in various colors and fabrics to complement any decor style. You can choose from different shades and textures to match your bedding, curtains, or rug.</li>
          <li>The cushion’s versatile design allows you to use it for different activities, like reading, eating, or watching your favorite show comfortably.</li>
          <li>The cushion is also easy to install and remove, so you can switch up your bedroom’s look whenever you want.</li>
        </ul>
        <div className="mb-2 font-bold text-[#F37021]">Built really well;</div>
        <ul className="list-disc pl-6 text-gray-700">
          <li>The cushion is designed with high-quality and long-lasting materials that can withstand daily wear and tear.</li>
          <li>The cushion fabric is eazzzy to clean, and you get to maintain its pristine appearance.</li>
          <li>With the removable headboard cushion, you don’t have to worry about stains, spills, or dirt accumulating over time</li>
        </ul>
        <p className="text-gray-700 mt-4">Plus, the cushion is your knight in shining armor, protecting you from unnecessary bruising when you accidentally hit your head or elbow on the headboard.</p>
      </>
    )
    : (
      <>
        <h2 className="text-xl font-semibold mb-2 text-[#F37021]">Description</h2>
        <p className="text-gray-700 mb-4">Who doesn’t like those warm, fuzzy & tight hugs? Zzze hug is a MoKo bed built to hug you & your mattress, providing the best support & stability while at it. Its chunky legs & smart joints make it strong and super durable, so don’t be afraid to bring a little energy & fun to your bed. How about that easy-to-tuck bed base? You definitely won’t need your tucking mwiko anymore.</p>
        <p className="text-gray-700 mb-4">Wouldn’t it be a relief to be able to put your bed together by yourself? This is the perfect blend of strength, design, and convenience. We deliver this modern wooden bed in Kenya at the comfort of your house and even assemble it for you (See how we assemble the moko bed).</p>
        <h3 className="text-lg font-bold text-[#F37021] mb-1 mt-6">Zzze Hug Bed Features</h3>
        <div className="mb-2 font-bold text-[#F37021]">Looks crazy good;</div>
        <ul className="list-disc pl-6 mb-2 text-gray-700">
          <li>Hugs the mattress [Or you] with its headboard</li>
          <li>Has a wave at the feet for extra stability. It is designed to make you feel safe and secure</li>
          <li>Has an easy-to-tuck bed base: the mattress sits on top of the base so that you can access and tuck the sheets in without breaking your nails.</li>
          <li>The bed slats can be rolled which makes taking the bed apart/packing the bed as easy as eating ugali</li>
        </ul>
        <div className="mb-2 font-bold text-[#F37021]">Built really well;</div>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Zzze Hug bed has chunky legs and smart joints that makes it them super durable. Feel free to jump on the slats and on the joints for as long you want and the frame won’t squeak or break.</li>
          <li>Easy to assemble – Two people can assemble the bed in less than 10 minutes and have no problems with the stability of the bed.</li>
        </ul>
        <div className="mt-4 mb-2 font-bold text-[#F37021]">Available bed colors:</div>
        <ul className="list-disc pl-6 mb-2 text-gray-700">
          <li>Kahawa Brown</li>
          <li>Stone Gray</li>
          <li>Charcoal Black</li>
          <li>Pearl White</li>
        </ul>
        <div className="mb-2 font-bold text-[#F37021]">Available MoKo bed sizes:</div>
        <ul className="list-disc pl-6 text-gray-700">
          <li>6 by 6 (King size bed)</li>
          <li>5 by 6 (Queen size bed)</li>
          <li>4 by 6 bed</li>
          <li>3.5 by 6 bed</li>
          <li>3 by 6 bed</li>
        </ul>
      </>
    );

  const selectedOptions = {
    fabric: selectedFabric,
    size: selectedSize,
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className="flex-1 max-w-5xl mx-auto px-4 py-10">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-4">
          <Link to="/" className="hover:underline">Home</Link> /{' '}
          <Link to="/bed" className="hover:underline">Beds</Link> /{' '}
          <span className="text-gray-700 font-semibold">{bed.title}</span>
        </nav>
        <div className="flex flex-col md:flex-row gap-10">
          {/* Image + Gallery */}
          <div className="md:w-1/2">
            <img src={bed.image} alt={bed.title} className="rounded-lg w-full max-h-96 object-cover mb-4" />
            <div className="flex gap-2">
              {(bed.images || []).map((img, i) => (
                <img key={i} src={img} alt={bed.title + ' ' + (i+1)} className="w-16 h-16 object-cover rounded border" />
              ))}
            </div>
          </div>
          {/* Info & Actions */}
          <div className="md:w-1/2 flex flex-col">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">{bed.title}</h1>
            <div className="text-xl text-[#F37021] font-semibold mb-2">{bed.priceRange}</div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">{bed.title}</h1>
            <div className="text-xl text-[#F37021] font-semibold mb-2">{bed.priceRange}</div>
            <div className="mb-2 text-gray-600 text-sm">Select your preferences below from each section and ‘Add to cart‘. <button className="text-[#F37021] underline ml-2" onClick={() => { setSelectedFabric(""); setSelectedSize(""); setQuantity(1); }}>clear</button></div>
            {/* Option selectors */}
            {bed.slug === 'zzze-hug-headboard-cushion' && (
              <div className="mb-4">
                <label className="block font-medium mb-1">Cushion Fabric</label>
                <div className="flex gap-2 mb-2">
                  {fabricOptions.map((opt) => (
                    <button
                      key={opt}
                      className={`w-8 h-8 rounded-full border-2 ${selectedFabric === opt ? 'border-[#F37021]' : 'border-gray-300'} bg-gray-200 flex items-center justify-center`}
                      onClick={() => setSelectedFabric(opt)}
                      aria-label={opt}
                      type="button"
                    >
                      <span className="sr-only">{opt}</span>
                    </button>
                  ))}
                </div>
                <label className="block font-medium mb-1 mt-2">Bed Size</label>
                <select
                  className="border border-gray-300 rounded px-4 py-2 w-full"
                  value={selectedSize}
                  onChange={e => setSelectedSize(e.target.value)}
                >
                  <option value="">Choose an option</option>
                  <option value="4 by 6">4 by 6</option>
                  <option value="5 by 6">5 by 6</option>
                  <option value="6 by 6">6 by 6</option>
                </select>
              </div>
            )}
            {bed.slug === 'zzze-hug-moko-bed' && (
              <div className="mb-4">
                <label className="block font-medium mb-1">Bed Size</label>
                <select
                  className="border border-gray-300 rounded px-4 py-2 w-full"
                  value={selectedSize}
                  onChange={e => setSelectedSize(e.target.value)}
                >
                  <option value="">Choose an option</option>
                  {bedSizeOptions.map(opt => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
                <label className="block font-medium mb-1 mt-2">Bed Color</label>
                <select
                  className="border border-gray-300 rounded px-4 py-2 w-full"
                  value={selectedFabric}
                  onChange={e => setSelectedFabric(e.target.value)}
                >
                  <option value="">Choose your preferred fabric for your bed below ↓</option>
                  <option value="Kahawa Brown">Kahawa Brown</option>
                  <option value="Stone Gray">Stone Gray</option>
                  <option value="Charcoal Black">Charcoal Black</option>
                  <option value="Pearl White">Pearl White</option>
                  <option value="None">None</option>
                </select>
              </div>
            )}
            {/* Quantity and actions */}
            <div className="flex flex-col gap-4 mt-6">
              <input
                type="number"
                min={1}
                value={quantity}
                onChange={e => setQuantity(Number(e.target.value))}
                className="border border-gray-300 rounded px-3 py-2 w-20"
              />
              <a
                href={`https://wa.me/+254788021130?text=Hi%20MoKo!%20I%20want%20to%20order%20the%20${encodeURIComponent(bed.title)}%20for%20${encodeURIComponent(bed.priceRange)}%20(Quantity:%20${quantity})`}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-[8px] text-center mb-4 transition-colors shadow-sm"
              >
                Order on WhatsApp
              </a>
              <a
                href={`https://wa.me/+254788021130?text=Hi%20MoKo!%20I%20want%20to%20Lipia%20Polepole%20for%20the%20${encodeURIComponent(bed.title)}%20at%20${encodeURIComponent(bed.priceRange)}%20(Quantity:%20${quantity})`}
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
                    slug: bed.slug,
                    title: bed.title,
                    price: bed.priceRange,
                    quantity,
                    image: bed.image,
                    options: selectedOptions
                  });
                  alert('Added to cart!');
                }}
              >
                Add to Cart
              </button>
            </div>
            <a
              href={`https://wa.me/+254788021130?text=Hi%20MoKo!%20I%20want%20to%20Lipia%20Polepole%20for%20the%20${encodeURIComponent(bed.title)}%20at%20${encodeURIComponent(bed.priceRange)}%20(Quantity:%20${quantity})`}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-[#1c4e3d] hover:bg-[#17603a] text-white font-bold py-2 px-6 rounded-[8px] text-center mb-4 transition-colors shadow-sm"
            >
              Lipia Polepole
            </a>
            {/* WhatsGood badges */}
            <div className="flex flex-wrap gap-2 mb-4">
              {whatsGood.map((good, i) => (
                <span key={i} className="inline-block bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full">{good}</span>
              ))}
            </div>
          </div>
        </div>
        {/* Description & Features */}
        <div className="mt-10">
          {description}
        </div>
        {/* Related Products */}
        {/* Placeholder for related beds section */}
      </main>
      <Footer />
      <ChatButton />
    </div>
  );
};

export default BedDetails;

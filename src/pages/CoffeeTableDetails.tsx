import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ChatButton from '../components/ChatButton';
import { useCart } from '../context/CartContext';

const coffeeTable = {
  slug: 'thicky-legs-coffee-table',
  title: 'Thicky Legs Coffee Table',
  price: 'KSh 5,799',
  image: 'https://cdn.shortpixel.ai/spai/w_433+q_lossy+ret_img+to_webp/moko.co.ke/wp-content/uploads/2023/03/HUM_8697-min-1-500x500.jpg',
  gallery: [
    'https://cdn.shortpixel.ai/spai/w_433+q_lossy+ret_img+to_webp/moko.co.ke/wp-content/uploads/2023/03/HUM_8697-min-1-500x500.jpg'
  ],
};

const CoffeeTableDetails = () => {
  const [color, setColor] = React.useState("");
  const [quantity, setQuantity] = React.useState(1);
  const { addToCart } = useCart();

  const latteBadges = [
    '♦️ Unbreakable legs',
    '♦️ Next day delivery in Nairobi',
    'Refer a friend to buy and get FREE pillows or poufs 🎉'
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className="flex-1 max-w-5xl mx-auto px-4 py-10">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-4">
          <Link to="/" className="hover:underline">Home</Link> /{' '}
          <Link to="/coffee-tables" className="hover:underline">Coffee Tables</Link> /{' '}
          <span className="text-gray-700 font-semibold">{coffeeTable.title}</span>
        </nav>
        <div className="flex flex-col md:flex-row gap-10">
          {/* Image + Gallery */}
          <div className="md:w-1/2">
            <img src={coffeeTable.image} alt={coffeeTable.title} className="rounded-lg w-full max-h-96 object-cover mb-4" />
            <div className="flex gap-2">
              {coffeeTable.gallery.map((img, i) => (
                <img key={i} src={img} alt={coffeeTable.title + ' ' + (i+1)} className="w-16 h-16 object-cover rounded border" />
              ))}
            </div>
          </div>
          {/* Info & Actions */}
          <div className="md:w-1/2 flex flex-col">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">{coffeeTable.title}</h1>
            <div className="text-xl text-[#F37021] font-semibold mb-2">{coffeeTable.price}</div>
            <div className="mb-2 text-gray-600 text-sm">Select your preferences below from each section and ‘Add to cart‘. <button className="text-[#F37021] underline ml-2" onClick={() => { setColor(""); setQuantity(1); }}>clear</button></div>
            {/* Table Color selector */}
            <div className="mb-4">
              <label className="block font-medium mb-1">Table Color</label>
              <select
                className="border border-gray-300 rounded px-4 py-2 w-full"
                value={color}
                onChange={e => setColor(e.target.value)}
              >
                <option value="">Choose an option</option>
                <option value="Pearl White">Pearl White</option>
                <option value="Gray">Gray</option>
                <option value="Brown">Brown</option>
              </select>
            </div>
            {/* Quantity and actions */}
            <div className="flex items-center gap-2 mb-4">
              <input type="number" min={1} value={quantity} onChange={e => setQuantity(Number(e.target.value))} className="border border-gray-300 rounded px-3 py-2 w-20" />
              <button className="bg-[#F37021] hover:bg-[#d9570a] text-white font-bold py-2 px-6 rounded-[8px] transition-colors shadow-sm">Add to cart</button>
            </div>
            <a
              href={`https://wa.me/254788021130?text=Hi%20MoKo!%20I%20want%20to%20order%20the%20${encodeURIComponent(coffeeTable.title)}%20for%20${encodeURIComponent(coffeeTable.price)}%20(Quantity:%20${quantity})`}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-[8px] text-center mb-4 transition-colors shadow-sm"
            >
              Order on WhatsApp
            </a>
            <a
              href={`https://wa.me/254788021130?text=Hi%20MoKo!%20I%20want%20to%20Lipia%20Polepole%20for%20the%20${encodeURIComponent(coffeeTable.title)}%20at%20${encodeURIComponent(coffeeTable.price)}%20(Quantity:%20${quantity})`}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-[#1c4e3d] hover:bg-[#17603a] text-white font-bold py-2 px-6 rounded-[8px] text-center mb-4 transition-colors shadow-sm"
            >
              Lipia Polepole
            </a>
            <button
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-[8px] transition-colors shadow-sm"
              onClick={() => {
                addToCart({
                  slug: coffeeTable.slug,
                  title: coffeeTable.title,
                  price: coffeeTable.price,
                  quantity,
                  image: coffeeTable.image,
                  options: { color }
                });
                alert('Added to cart!');
              }}
            >
              Add to Cart
            </button>
            <div className="text-red-600 font-semibold mb-3">Please Note: We DO NOT deliver coffee tables outside Nairobi</div>
            {/* Latte badges */}
            <div className="flex flex-wrap gap-2 mb-4">
              {latteBadges.map((good, i) => (
                <span key={i} className="inline-block bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full">{good}</span>
              ))}
            </div>
            <a href="#" className="text-[#F37021] underline text-sm mb-2">Learn more about MoKo referral gifts</a>
          </div>
        </div>
        {/* Description & Features */}
        <div className="mt-10">
          <h2 className="text-xl font-semibold mb-2 text-[#F37021]">Description</h2>
          <p className="text-gray-700 mb-4">The MoKo tables have turned…up! Introducing the newest, thickest, Thicky Legs coffee table. Your living room is just an order away from being the fanciest in the block. The legs stand tall and thick to hold up well the weight of  your utensils, full to the brim and even you! The soft edges are gentle to the human touch and goes easy on you when you accidentally bump into it (unlike sharper corners)</p>
          <p className="text-gray-700 mb-4">Thicky Legs is the perfect amount of thicc, to stay durable and standing no matter the tribulations.</p>
          <p className="text-gray-700 mb-4">Treat it well though, it’s quite the beauty.</p>
          <h3 className="text-lg font-bold text-[#F37021] mb-1 mt-6">Coffee Table Features</h3>
          <div className="mb-2 font-bold text-[#F37021]">Looks crazy good;</div>
          <ul className="list-disc pl-6 mb-2 text-gray-700">
            <li>Thicky Legs boasts a one-in-a-million style with curvy shapes and chunky legs, giving your living room a fresh, sleek look that will wow the whole village.</li>
            <li>Our unique top surface features a shape never seen before, adding a touch of originality to your space.</li>
            <li>Soft curves ensure that Thicky Legs is safe for toddlers to play around, with no sharp edges or corners to worry about.</li>
          </ul>
          <div className="mb-2 font-bold text-[#F37021]">Built really well;</div>
          <ul className="list-disc pl-6 text-gray-700">
            <li>Thicky Legs has unbreakable legs that can withstand intense impact, making it ideal for homes with active children (fear not, the children can play!)</li>
            <li>Our 100% wood material is specifically and carefully sourced, ensuring it is sturdy and long-lasting, with no knots or wetness that could cause splitting, cracking, or breaking.</li>
            <li>We use super strong joint-design and long screws (which are better than nails as they don’t bend) to join our thick top surface of 4.5cm with chunky legs, ensuring Thicky Legs will last too long. You can always get another one in different colour when bored</li>
          </ul>
          <h3 className="text-lg font-bold text-[#F37021] mb-1 mt-6">Coffee Table Dimensions</h3>
          <ul className="list-disc pl-6 text-gray-700">
            <li>Length – 110 cm</li>
            <li>Width – 60 cm</li>
            <li>Height – 44.5 cm</li>
          </ul>
        </div>
        {/* Related Products Placeholder */}
      </main>
      <Footer />
      <ChatButton />
    </div>
  );
};

export default CoffeeTableDetails;

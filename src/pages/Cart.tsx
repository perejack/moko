import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const phone = '+254788021130';

export default function Cart() {
  const { cart, removeFromCart, clearCart } = useCart();

  const getTotal = () => {
    // Extract numeric price (handles ranges)
    return cart.reduce((sum, item) => {
      const price = parseInt(item.price.replace(/[^\d]/g, ''));
      return sum + price * item.quantity;
    }, 0);
  };

  const whatsappMsg =
    'Hi MoKo! I want to order the following:%0A' +
    cart
      .map(
        (item, idx) =>
          `${idx + 1}. ${item.title} (${item.quantity}x) - ${item.price}` +
          (item.options
            ? `%0A   Options: ` +
              Object.entries(item.options)
                .map(([k, v]) => `${k}: ${v}`)
                .join(', ')
            : '')
      )
      .join('%0A') +
    `%0A%0ATotal: KSh ${getTotal()}`;

  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-center">Your cart is empty</h2>
        <Link to="/" className="text-[#F37021] underline text-lg">Continue Shopping</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 pb-32 md:pb-0">
      <div className="w-full max-w-2xl mx-auto px-2 sm:px-4 pt-4">
        <h1 className="text-2xl md:text-3xl font-bold mb-4 text-center md:text-left">Your Cart</h1>
        <ul className="flex flex-col gap-4 mb-6">
          {cart.map((item, i) => (
            <li key={item.slug + i} className="bg-white rounded-xl shadow p-4 flex items-center gap-4">
              {item.image && (
                <img src={item.image} alt={item.title} className="w-20 h-20 rounded-lg object-cover border flex-shrink-0" />
              )}
              <div className="flex-1 min-w-0">
                <div className="font-bold text-base md:text-lg truncate">{item.title}</div>
                <div className="text-gray-600 text-sm md:text-base">{item.price} <span className="ml-1">x{item.quantity}</span></div>
                {item.options && Object.keys(item.options).length > 0 && (
                  <div className="text-xs text-gray-500 mt-1 flex flex-wrap gap-2">
                    {Object.entries(item.options).map(([k, v]) => (
                      <span key={k} className="bg-gray-100 rounded px-2 py-0.5">{k}: {v}</span>
                    ))}
                  </div>
                )}
              </div>
              <button
                className="ml-2 text-red-500 hover:bg-red-100 rounded-full w-8 h-8 flex items-center justify-center text-lg transition"
                aria-label="Remove item"
                onClick={() => removeFromCart(item.slug)}
              >
                &times;
              </button>
            </li>
          ))}
        </ul>
        <button
          className="w-full text-gray-500 hover:underline text-base mb-4"
          onClick={clearCart}
        >
          Clear Cart
        </button>
      </div>
      {/* Sticky bottom bar for total and WhatsApp button */}
      <div className="fixed md:static bottom-0 left-0 w-full bg-white shadow-[0_-2px_16px_rgba(0,0,0,0.07)] z-20 py-4 px-4 flex flex-col md:flex-row md:items-center md:justify-between gap-3 md:max-w-2xl md:mx-auto">
        <div className="text-xl md:text-2xl font-bold text-gray-900 flex-1 text-center md:text-left">Total: <span className="text-green-600">KSh {getTotal()}</span></div>
        <a
          href={`https://wa.me/${phone}?text=${whatsappMsg}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full md:w-auto bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-[8px] text-center transition-colors shadow-sm text-lg md:text-xl flex items-center justify-center gap-2"
        >
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="#fff" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.198.297-.767.967-.94 1.166-.173.198-.347.223-.644.075-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.52-.075-.149-.669-1.613-.916-2.208-.242-.579-.487-.5-.67-.51-.173-.008-.372-.01-.57-.01-.198 0-.52.074-.792.372-.273.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.1 3.2 5.077 4.364.71.306 1.262.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347z"/><path fill="#25D366" d="M12.004 2.003c-5.522 0-10 4.477-10 10 0 1.77.464 3.497 1.345 5.016L2.003 22l5.124-1.342A9.953 9.953 0 0 0 12.003 22c5.523 0 10-4.477 10-10s-4.477-9.997-10-9.997zm5.43 15.197c-.244.695-1.432 1.329-2.003 1.414-.513.077-1.161.109-1.873-.118-.432-.137-.984-.32-1.694-.626-2.978-1.164-4.929-4.166-5.077-4.364-.148-.199-1.213-1.612-1.213-3.074 0-1.463.767-2.182 1.04-2.48.272-.297.594-.371.792-.371.198 0 .397.002.57.01.183.01.428-.07.67.51.247.595.84 2.06.916 2.208.075.148.124.322.025.52-.1.199-.149.323-.298.497-.148.173-.312.387-.446.52-.148.148-.303.309-.13.606.173.298.77 1.271 1.653 2.059 1.135 1.013 2.093 1.326 2.39 1.475.297.148.471.123.644-.075.173-.199.742-.869.94-1.166.199-.298.397-.249.67-.15.272.1 1.733.818 2.03.967.297.149.495.223.57.347.075.124.075.719-.173 1.414z"/></svg>
          Order on WhatsApp
        </a>
      </div>
      <Link to="/" className="block text-center text-[#F37021] underline mt-6 text-lg md:text-base">Continue Shopping</Link>
    </div>
  );
}


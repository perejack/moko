import React, { useState } from 'react';
import { Phone, MessageCircle, ShoppingCart, Menu as MenuIcon, X as CloseIcon, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import AdminLoginModal from './AdminLoginModal';

const navLinks = [
  { to: '/sofas', label: 'Sofas' },
  { to: '/mattresses', label: 'Mattresses' },
  { to: '/beds', label: 'Beds' },
  { to: '/coffee-tables', label: 'Coffee Tables' },
  { to: '/tv-stands', label: 'TV Stands' },
  { to: '/carpets', label: 'Carpets' },
  { to: '#', label: 'Reviews' },
  { to: '#', label: 'Blog' },
  { to: '#', label: 'Find Us' },
];

const MobileMenu = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        className="lg:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
        aria-label="Open menu"
        onClick={() => setOpen(true)}
      >
        <MenuIcon size={28} />
      </button>
      {open && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex flex-col">
          <div className="flex justify-end p-4">
            <button
              className="text-white p-2 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
            >
              <CloseIcon size={32} />
            </button>
          </div>
          <nav className="flex-1 flex flex-col items-center justify-center gap-6">
            {navLinks.map(link => (
              <Link
                key={link.label}
                to={link.to}
                className="text-white text-2xl font-semibold hover:text-orange-400 transition"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  );
};

const CartBadge = () => {
  const { cartCount } = useCart();
  return (
    <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
      {cartCount}
    </span>
  );
};

const Header = () => {
  const [showAdminLogin, setShowAdminLogin] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  React.useEffect(() => {
    setIsAdmin(localStorage.getItem('adminAuthenticated') === 'true');
  }, []);

  const handleAdminLogin = () => {
    setIsAdmin(true);
  };

  return (
    <>
      <header className="bg-white shadow-sm">
        {/* Top contact bar */}
        <div className="bg-cyan-400 text-white py-2 px-4">
          <div className="max-w-7xl mx-auto flex justify-end items-center gap-6 text-sm">
            <div className="flex items-center gap-3 flex-wrap">
              <a
                href="tel:+254788021130"
                className="inline-flex items-center gap-2 bg-cyan-600 hover:bg-cyan-700 text-white px-3 py-1.5 rounded-full font-semibold shadow-sm transition-colors text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-cyan-400"
              >
                <Phone size={18} className="text-white" />
                Call +254788021130
              </a>
            </div>
            <div className="ml-4 relative flex items-center gap-4">
              <Link to="/cart" className="inline-flex items-center">
                <ShoppingCart size={22} />
                <CartBadge />
              </Link>
              <button
                onClick={() => setShowAdminLogin(true)}
                className="inline-flex items-center gap-2 bg-gray-600 hover:bg-gray-700 text-white px-3 py-1.5 rounded-full font-semibold shadow-sm transition-colors text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-gray-400"
                title="Admin Login"
              >
                <Settings size={18} />
                Admin
              </button>
            </div>
          </div>
        </div>

        {/* Main header */}
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img 
                src="https://cdn.shortpixel.ai/spai/w_270+q_lossy+ret_img+to_webp/moko.co.ke/wp-content/uploads/2021/10/Moko-Logos2-02-e1677829056954.png"
                alt="MOKO"
                className="h-16"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link to="/sofas" className="text-orange-500 hover:text-orange-600 font-medium">Sofas</Link>
              <Link to="/mattresses" className="text-gray-700 hover:text-orange-500 font-medium">Mattresses</Link>
              <Link to="/beds" className="text-gray-700 hover:text-orange-500 font-medium">Beds</Link>
              <Link to="/coffee-tables" className="text-gray-700 hover:text-orange-500 font-medium">Coffee Tables</Link>
              <Link to="/tv-stands" className="text-gray-700 hover:text-orange-500 font-medium">TV Stands</Link>
              <Link to="/carpets" className="text-gray-700 hover:text-orange-500 font-medium">Carpets</Link>
              <a href="#" className="text-gray-700 hover:text-orange-500 font-medium">Reviews</a>
              <a href="#" className="text-gray-700 hover:text-orange-500 font-medium">Blog</a>
              <a href="#" className="text-gray-700 hover:text-orange-500 font-medium">Find Us</a>
            </nav>

            {/* Hamburger for mobile */}
            <MobileMenu />
          </div>
        </div>
      </header>
      
      <AdminLoginModal
        isOpen={showAdminLogin}
        onClose={() => setShowAdminLogin(false)}
        onLogin={handleAdminLogin}
      />
    </>
  );
};

export default Header;


import React, { useState } from 'react';
import { Phone, Mail, Facebook, Instagram, MapPin } from 'lucide-react';
import AdminLoginModal from './AdminLoginModal';

const Footer = () => {
  const [showAdminLogin, setShowAdminLogin] = useState(false);
  return (
    <>
      <footer className="bg-white py-12 border-t">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and CTA */}
          <div className="lg:col-span-1">
            <div className="text-4xl font-bold text-gray-800 mb-4">
              MO<span className="bg-gray-400 text-white px-1">K</span>O
            </div>
            <div className="mb-4">
              <h3 className="font-semibold text-gray-800 mb-2">Join the dream team</h3>
              <p className="text-gray-600 text-sm mb-2">Leadership team</p>
              <p className="text-gray-600 text-sm">Job openings</p>
            </div>
          </div>

          {/* Our Products */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Our Products</h3>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#" className="hover:text-orange-500">Sofas</a></li>
              <li><a href="#" className="hover:text-orange-500">Bed & Mattresses</a></li>
              <li><a href="#" className="hover:text-orange-500">Tables</a></li>
              <li><a href="#" className="hover:text-orange-500">TV Stands</a></li>
              <li><a href="#" className="hover:text-orange-500">Accessories</a></li>
            </ul>
          </div>

          {/* Buyers Guides */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Buyers Guides</h3>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#" className="hover:text-orange-500">MoKo Reviews</a></li>
              <li><a href="#" className="hover:text-orange-500">Payment Plans</a></li>
              <li><a href="#" className="hover:text-orange-500">Mattress guide</a></li>
              <li><a href="#" className="hover:text-orange-500">Sofas guide</a></li>
              <li><a href="#" className="hover:text-orange-500">MoKo Delivery</a></li>
            </ul>
          </div>

          {/* Talk to us */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Talk to us</h3>
            <div className="space-y-3 text-gray-600">
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <span>WhatsApp 0753 818 138</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} />
                {/* <span>0701 61 61 61</span> */}
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <span>sales@MoKo.co.ke</span>
              </div>
              <div className="flex items-center gap-2">
                <Facebook size={16} />
                <span>Facebook</span>
              </div>
              <div className="flex items-center gap-2">
                <Instagram size={16} />
                <span>Instagram</span>
              </div>
            </div>
          </div>

          {/* Find Us */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Find Us</h3>
            <div className="space-y-3 text-gray-600 text-sm">
              <div className="flex items-start gap-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>Capital Center Mombasa Rd</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>The Point Mall, Buruburu</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>Prestige Mall, Nakuru</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>Bella Plaza, Mombasa</span>
              </div>
            </div>
          </div>
        </div>
      </div>
        {/* Admin Login Button */}
        <div className="mt-8 text-center">
          <button
            className="inline-flex items-center gap-2 bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-full font-semibold shadow-sm transition-colors text-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
            onClick={() => setShowAdminLogin(true)}
            title="Admin Login"
          >
            Admin Login
          </button>
        </div>
      </div>
      <AdminLoginModal
        isOpen={showAdminLogin}
        onClose={() => setShowAdminLogin(false)}
        onLogin={() => {}}
      />
    </footer>
      <AdminLoginModal
        isOpen={showAdminLogin}
        onClose={() => setShowAdminLogin(false)}
        onLogin={() => {}}
      />
    </>
  );
};

export default Footer;

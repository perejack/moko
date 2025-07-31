
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const ChatButton = () => {
  return (
    <a
      href="https://wa.me/+254788021130?text=Hi%20MoKo!%20I%20would%20like%20to%20chat%20with%20a%20representative."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 flex items-center gap-3 bg-[#25D366] hover:bg-[#1ebe57] text-white py-3 px-6 rounded-full shadow-lg hover:shadow-xl transition-all z-50"
      style={{ minWidth: 180 }}
    >
      <span className="relative flex items-center">
        <FaWhatsapp size={28} />
        <span className="absolute -top-1 -right-1 block w-3 h-3 bg-green-400 border-2 border-white rounded-full" title="Online"></span>
      </span>
      <span className="flex flex-col items-start leading-tight">
        <span className="font-bold text-base">Talk to us</span>
        <span className="text-xs text-white flex items-center gap-1">
          <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-1"></span>Online
        </span>
      </span>
    </a>
  );
};

export default ChatButton;

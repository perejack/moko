
import React from 'react';

interface ProductCardProps {
  image: string;
  title: string;
  priceRange: string;
  className?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ image, title, priceRange, className = "" }) => {
  return (
    <div className={`bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow ${className}`}>
      <div className="aspect-square overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4 flex flex-col items-start">
        <h3 className="text-[18px] font-bold text-[#F37021] mb-1 leading-tight" style={{fontFamily: 'inherit'}}>{title}</h3>
        <p className="text-[15px] text-[#8C8C8C] mb-3">{priceRange}</p>
        <button className="bg-[#F37021] hover:bg-[#d9570a] text-white font-bold py-2 px-6 rounded-[8px] transition-colors text-[16px] mt-auto shadow-sm">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

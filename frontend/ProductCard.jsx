import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
      <img 
        src={product.image || 'https://via.placeholder.com/150'} 
        alt={product.name} 
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
        <p className="text-indigo-600 font-bold mt-1">${product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
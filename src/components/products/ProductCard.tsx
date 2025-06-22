import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Product } from '../../types/products';

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="bg-theme-blue/20 rounded-lg border border-blue-900/20 overflow-hidden hover:transform hover:scale-105 transition duration-300">
      <img src={product.image} alt={product.title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-semibold text-theme-text">{product.title}</h3>
          <span className="px-3 py-1 bg-blue-900/20 text-blue-400 rounded-full text-sm">
            {product.category}
          </span>
        </div>
        <p className="text-theme-text-secondary mb-4">{product.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-blue-400">${product.price}</span>
          <button className="flex items-center text-theme-text bg-theme-light px-4 py-2 rounded-md hover:bg-blue-700 transition">
            Learn More <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
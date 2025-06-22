import React from 'react';
import ProductCard from './ProductCard';
import { products } from '../../data/products';

export default function ProductGrid() {
  return (
    <section className="py-20 bg-theme-navy">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-theme-text mb-4">Our Products</h2>
          <p className="text-theme-text-secondary max-w-2xl mx-auto">
            Discover our range of enterprise-grade security solutions and professional tools
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
import React from 'react';
import ProductGrid from '../components/products/ProductGrid';
import ProductHero from '../components/products/ProductHero';
import ProductFeatures from '../components/products/ProductFeatures';

export default function Products() {
  return (
    <div className="bg-theme-dark">
      <ProductHero />
      <ProductGrid />
      <ProductFeatures />
    </div>
  );
}
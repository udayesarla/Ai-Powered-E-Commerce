import React from 'react';
import { Sparkles } from 'lucide-react';
import { Product } from '../types';
import { ProductCard } from './ProductCard';

interface RecommendedProductsProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
}

export function RecommendedProducts({ products, onAddToCart }: RecommendedProductsProps) {
  return (
    <div className="mt-12">
      <div className="flex items-center gap-2 mb-6">
        <Sparkles className="w-6 h-6 text-indigo-600" />
        <h2 className="text-2xl font-bold text-gray-900">AI Recommended for You</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </div>
  );
}
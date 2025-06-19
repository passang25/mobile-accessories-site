import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

const allProducts = [
  {
  id: 1,
  name: 'Òñé Píèçë wátçh',
  price: '₹1,999',
  category: 'Anime',
  image: './Images/Anime-watch.jpg'
  },
  { id: 2, name: 'Smart Watch', price: '₹3,499', category: 'Watch', image: 'https://via.placeholder.com/300x300' },
  { id: 3, name: 'Laptop Sleeve', price: '₹999', category: 'Accessories', image: 'https://via.placeholder.com/300x300' },
  { id: 4, name: 'Anime Poster', price: '₹2,999', category: 'Anime', image: 'https://via.placeholder.com/300x300' },
  { id: 5, name: 'Fitness Tracker', price: '₹1,499', category: 'Wearables', image: 'https://via.placeholder.com/300x300' },
];

export default function CategoryPage() {
  const { name } = useParams();
const [products] = useState(allProducts.filter(p => p.category === name));

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-6">
        <h2 className="text-2xl font-bold mb-4 text-indigo-600">{name} Products</h2>
        {products.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {products.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        ) : (
          <p>No products found in this category.</p>
        )}
      </div>
    </div>
  );
}

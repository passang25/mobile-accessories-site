// src/pages/ProductDetails.js
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import useWishlist from '../hooks/useWishlist';
import useCart from '../hooks/useCart';
import products from '../data/products';
import allProducts from '../data/products';




export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const navigate = useNavigate();
  const allProduct = allProducts.find((p) => p.id === parseInt(id));
  const { toggleWishlist, isInWishlist } = useWishlist();
  const { addToCart, isInCart } = useCart();

  if (!product) {
    return <div className="p-8 text-center text-gray-600">Product not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 pt-16 pb-20 px-4">
      <button onClick={() => navigate(-1)} className="text-indigo-600 mb-4 text-sm">
        ← Back
      </button>

      <div className="bg-white p-4 rounded-lg shadow flex flex-col sm:flex-row gap-6">
        <img
          src={product.image}
          alt={product.name}
          className="w-full sm:w-1/2 h-72 object-contain rounded"
        />

        <div className="flex-1">
          <h1 className="text-2xl font-bold text-gray-800">{product.name}</h1>
          <p className="text-xl text-indigo-600 font-semibold my-2">{product.price}</p>

          <div className="flex items-center gap-3 my-4">
            <button
onClick={() => toggleWishlist(product)}
 className="text-red-500 text-lg bg-red-100 px-3 py-1 rounded-full"
            >
{isInWishlist(product.id) ? <FaHeart /> : <FaRegHeart />}
  </button>

            <button
 onClick={() => addToCart(product)}
className={`px-6 py-2 rounded text-white font-semibold ${
 isInCart(product.id) ? 'bg-green-600' : 'bg-indigo-600'
  }`}
            >
 {isInCart(product.id) ? 'In Cart' : 'Add to Cart'}
            </button>
          </div>

<p className="text-sm text-gray-500 mt-6">{product.description}</p>

        </div>
      </div>
    </div>
  );
}

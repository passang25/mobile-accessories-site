// src/pages/ProductDetails.js

import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import useWishlist from '../hooks/useWishlist';
import useCart from '../hooks/useCart';
import products from '../data/products';
import ProductImageSlider from '../components/ProductImageSlider';

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find((p) => p.id === parseInt(id));
  const { toggleWishlist, isInWishlist } = useWishlist();
  const { addToCart, isInCart } = useCart();

  if (!product) {
    return (
      <div className="p-8 text-center text-gray-400">
        Product not found.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-purple-950 to-black text-white px-4 pt-16 pb-20 font-sans">
      {/* 🔙 Back Button */}
      <button
        onClick={() => navigate(-1)}
className="text-neonBlue text-sm mb-4 hover:underline text-center">←Back</button>

      {/* 📦 Product Section */}
      <div className="flex flex-col sm:flex-row gap-8 bg-gradient-to-r from-purple-800/70 to-indigo-900/80 border border-purple-600 rounded-lg p-4 shadow-xl shadow-purple-700">
        {/* 🖼️ Image */}
        <div className="w-full sm:w-1/2">
 <h1 className="text-3xl text-sm text-neonBlue text-center mb-1 tracking-widest">Product Video🎥</h1>
   {/* 🎥 Product Video */}
{product.video && (
 <div className="mb-6 rounded-lg overflow-hidden shadow-md shadow-purple-700">
 {product.video.includes('youtube') ? (
 <iframe
 className="w-full h-64 sm:h-96 rounded"
 src={product.video}
 title="YouTube video"
 frameBorder="0"
 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
 allowFullScreen
 ></iframe>
 ) : (
 <video
 className="w-full h-64 sm:h-96 object-contain bg-black rounded"
 controls
 poster={product.images?.[0] || ""}
 >
 <source src={product.video} type="video/mp4" />
 Your browser does not support the video tag.
 </video>
 )}
 </div>
)}

    {/* Products Image */}
<h1 className="text-3xl text-sm text-neonBlue text-center my-2 tracking-widest">Product Images📸</h1>
          <ProductImageSlider
            images={product.images || []}
            fit="contain"
            height="h-96"
          />
        </div>

        {/* 🔤 Info */}
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold text-neonPink drop-shadow-neon mb-2">
              {product.name}
            </h1>
            <p className="text-2xl font-semibold text-neonGreen mb-4">
              {product.price}
            </p>

            {/* ⭐ Wishlist & Cart Buttons */}
            <div className="flex items-center gap-4 mb-6">
              <button
                onClick={() => toggleWishlist(product)}
 className="bg-gradient-to-r from-indigo-600 via-purple-700 to-pink-600 text-red-500 px-4 py-5 rounded-full shadow hover:scale-110 transition-all text-2xl"
              >
                {isInWishlist(product.id) ? (
                  <FaHeart className="w-5 h-5" />
                ) : (
                  <FaRegHeart className="w-5 h-5" />
                )}
              </button>

           <button
onClick={() => addToCart(product)}
className="block mt-1 text-center bg-gradient-to-r from-indigo-600 via-purple-700 to-pink-600 text-white px-1 py-1 rounded hover:scale-105 transition-transform shadow-md hover:shadow-pink-500/50 font-semibold text-xl"
 >
🛒{isInCart(product.id) ? '✔ In Cart' : 'Add to Cart'}    
  </button>
     
  {product.affiliateLink && (
  <a
    href={product.affiliateLink}
    target="_blank"
    rel="noopener noreferrer"
    onClick={(e) => e.stopPropagation()}
    className="block mt-1 text-center bg-gradient-to-r from-indigo-600 via-purple-700 to-pink-600 text-white px-1 py-1 rounded hover:scale-105 transition-transform shadow-md hover:shadow-pink-500/50 font-semibold text-xl"
  >
 🔗 Buy
 Now
  </a>
)}
            </div>

            {/* 📝 Description */}
            <p className="text-sm text-purple-300 italic leading-relaxed drop-shadow-sm">
              {product.description || 'No description available.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// pages/Wishlist.js
import React from 'react';
import useWishlist from '../hooks/useWishlist';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export default function Wishlist() {
  const { wishlist, toggleWishlist } = useWishlist();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-purple-950 to-black text-white pb-20 font-sans pt-[4.5rem] px-4">

      <h2 className="text-3xl font-bold mb-6 text-neonPink drop-shadow-neon tracking-wide">
        💖 Your Wishlist
      </h2>

      {wishlist.length === 0 ? (
        <p className="text-gray-400 text-lg italic">No items in wishlist 💔</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
          {wishlist.map((product) => (
            <div
              key={product.id}
              className="bg-gradient-to-br from-purple-800/80 to-gray-900 border border-purple-700 rounded-xl shadow-lg hover:shadow-neon transition duration-300 p-3"
            >
              {/* Image Slider */}
              <div className="w-full h-40 mb-3 rounded relative">
                <Swiper
                  modules={[Pagination]}
                  pagination={{ clickable: true }}
                  className="w-full h-full rounded"
                >
                  {(product.images || []).map((img, i) => (
                    <SwiperSlide key={i}>
                      <img
                        src={img}
                        alt={`Wishlist ${i}`}
                        className="w-full h-full object-contain rounded bg-black border border-purple-700 shadow-inner"
                        onError={(e) =>
                          (e.target.src = 'https://via.placeholder.com/300x300')
                        }
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              <h4 className="text-lg font-semibold text-neonGreen drop-shadow-neon mb-1">
                {product.name}
              </h4>
              <p className="text-neonBlue font-bold text-md">{product.price}</p>

              {/* Buy Now Button */}
              {product.affiliateLink && (
                <a
                  href={product.affiliateLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mt-3 text-center bg-gradient-to-r from-indigo-600 via-purple-700 to-pink-600 text-white py-2 rounded hover:scale-105 transition-transform shadow-md hover:shadow-pink-500/50 font-semibold text-sm"
                >
            <button>                  🔗 Buy Now
            </button>
                </a>
              )}

              {/* Remove Button */}
              <button
                className="mt-3 text-sm px-3 py-1 rounded bg-red-600 hover:bg-red-700 text-white shadow-md hover:shadow-red-500/50 transition w-full"
                onClick={() => toggleWishlist(product)}
              >
                💔 Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

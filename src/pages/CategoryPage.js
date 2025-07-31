import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ProductImageSlider from '../components/ProductImageSlider';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import useWishlist from '../hooks/useWishlist';
import useCart from '../hooks/useCart';

const allProducts = [
  {
    id: 1,
    name: 'Anime posters🔥',
    price: '₹298',
    category: 'Anime',
video: '/videos/Intro.mp4', 
 images: [
   '/Animation/Anime1.jpg',
    '/Animation/Anime2.jpg',
    '/Animation/Anime3.jpg',
    '/Animation/Anime4.jpg',
    '/Animation/Anime5.jpg',
    '/Animation/Anime6.jpg'
   ],
affiliateLink: 'https://amzn.to/44smKQU',
 description: 'Diverse Anime Selection: Includes 20 unique posters featuring a mix of popular anime series, characters, and scenes, ideal for any anime enthusiast.',
  },
  {
    id: 2,
    name: 'Luffy Action figure',
    price: '₹1,119',
    category: 'Anime',
    video: '/videos/Luffy.mp4',
    images: [
   '/Animation/Luffy1.jpg',
    '/Animation/Luffy2.jpg',
    '/Animation/Luffy3.jpg',
    '/Animation/Luffy4.jpg',
    '/Animation/Luffy5.jpg',
    '/Animation/Luffy6.jpg',
    '/Animation/Luffy7.jpg',
   ],
affiliateLink: 'https://amzn.to/40qDuWi',
 description: 'Height-17.5cm Exquisite craftsmanship and environmentally friendly paint make toy figures look very realistic, 360° no dead angle perfect shape.',
  },
  {
    id: 3,
 name: 'Solimo Mini Fridge️',
    price: '₹7,999',
    category: 'Anime',
video: "https://www.youtube.com/embed/OlTAn4kIEAA?si=J-sKsVidW-cjCSnA",
    images: [
   '/Images/Fridge1.jpg',
    '/Images/Fridge2.jpg',
       '/Images/Fridge3.jpg',
   '/Images/Fridge4.jpg',
   '/Images/Fridge5.jpg',
   '/Images/Fridge6.jpg',
   '/Images/Fridge7.jpg',
   '/Images/Fridge8.jpg',
   ],
affiliateLink: 'https://amzn.to/4lJmyD0',
 description: 'Product Dimensions: 47D x 45W x 50H Centimeters/ Brand: Amazon Brand - Solimo/ Capacity: 45 litres/ Configuration: Compact Freezer-On-Bottom/                   BEE Star Rating: 2/ Star Colour:Black',
  },
  {
    id: 4,
    name: 'Dish Rack',
    price: '₹3,311',
    category: 'Anime',
    video: "https://www.youtube.com/embed/XcvjE09mvVk?si=rgAlIhHWDooovc9f",
    images: [
   '/Images/Rack1.jpg',
    '/Images/Rack2.jpg',
       '/Images/Rack3.jpg',
   '/Images/Rack4.jpg',
   '/Images/Rack5.jpg',
   ],
 affiliateLink: 'https://amzn.to/4kNSYe0',
    description: 'IBELL DR255 Dish Rack for Kitchen, Bartan Stand for Drying, Carbon Steel, Kitchen Organizer/Drainer Shelf/Utensils Storage (Black).',
  },
  {
    id: 5,
    name: 'Grain Storage container',
    price: '₹1,659',
    category: 'Anime',
    video: "https://www.youtube.com/embed/zWntnuwrXfI?si=M_3eYLySc-J8N1LN",
    images: [
   '/Images/Food1.jpg',
    '/Images/Food2.jpg',
        '/Images/Food3.jpg',
    '/Images/Food4.jpg',
    '/Images/Food5.jpg',
    '/Images/Food6.jpg',
    '/Images/Food7.jpg',
    '/Images/Food8.jpg',
   ],
 affiliateLink: 'https://amzn.to/46FxnRV',
 description: 'BrandGeneric ColourClear MaterialPlastic Capacity3 litres Product Dimensions25L x 25W x 35H Centimeters Recommended Uses For ProductCereal Storage.',
  },
  {
    id: 6,
    name: 'Spinning Analog Watch',
    price: '₹2,643',
    category: 'Anime',
    video: "https://www.youtube.com/embed/8PjQR1djbJU?si=gDdmwKY1Et21X12I",
    images: [
   '/Images/Watch1.jpg',
    '/Images/Watch2.jpg',
        '/Images/Watch3.jpg',
    '/Images/Watch4.jpg',
    '/Images/Watch5.jpg',
    '/Images/Watch6.jpg',
   ],
 affiliateLink: 'https://amzn.to/3IHumGA',
    description: 'Unique Rolling Watch Design,Premium Quality & Comfort,Water-Resistant & Durable ,Precise Timekeeping,Best Gift Choice',
  },
  {
    id: 7,
    name: 'Nu Republic Earbuds',
    price: '₹1,499',
    category: 'Anime',
    images: [
   '/Images/Bud1.jpg',
    '/Images/Bud2.jpg',
       '/Images/Bud3.jpg',
   '/Images/Bud4.jpg',
   '/Images/Bud5.jpg',
   '/Images/Bud6.jpg',
   ],
 affiliateLink: 'https://amzn.to/4lJ9flX',
    description: 'Nu Republic Cyberstud X4 Firefly TWS Earbuds with 72hr Playtime,13mm Driver, XBass, ANC + ENC Quad Mics, Hall Sensor, 40ms Low Latency, Dual Mode, BT V5.3 (Black).',
  },
    {
    id: 8,
    name: 'Gaming Triggers Joystick',
    name: 'Gaming Triggers Joystick',
    price: '₹245',
    category: 'Anime',
        video: "https://www.youtube.com/embed/zmm8_teJpSM?si=BsKaTnRQXD9Bd5GL",
    images: [
   '/Images/Trigger1.jpg',
    '/Images/Trigger2.jpg',
        '/Images/Trigger3.jpg',
    '/Images/Trigger4.jpg',
    '/Images/Trigger5.jpg',
    '/Images/Trigger6.jpg',
    '/Images/Trigger7.jpg',
    '/Images/Trigger8.jpg',
   ],
 affiliateLink: 'https://amzn.to/4m8KFdT',
    description: 'Blue Shark Mobile Pubg Game Controller will take your gaming skills to the next level, stimulating a game controller experience.You can aim and shoot all at the same time.',
  },
];

export default function CategoryPage() {
  const { name } = useParams();
  const navigate = useNavigate();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const { addToCart, isInCart } = useCart();

  const products = allProducts.filter((p) => p.category.toLowerCase() === name.toLowerCase());

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-purple-900 to-black text-white pt-20 pb-24 px-4 font-sans">
      <h2 className="text-3xl font-bold text-center mb-8 text-neonPink drop-shadow-neon tracking-wide">
        ✨ {name} Products
      </h2>

      {products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {products.map((product) => (
            <div
              key={product.id}
              onClick={() => navigate(`/product/${product.id}`)}
              className="relative bg-[#1e1b4b] border border-purple-700 rounded-xl shadow-xl hover:shadow-[0_0_20px_#a855f7] hover:scale-[1.02] transition-all p-4 cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative w-full h-[200px] sm:h-[220px] md:h-[250px] overflow-hidden rounded-lg border border-purple-600 bg-white flex items-center justify-center">
                <ProductImageSlider
                  images={product.images}
                  fit="contain"
                  height="h-full"
                />

                {/* Wishlist Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleWishlist(product);
                  }}
                  className="absolute top-2 right-2 bg-white text-red-500 p-3 rounded-full shadow-lg hover:scale-110 transition-all z-20"
                >
                  {isInWishlist(product.id) ? (
                    <FaHeart size={22} />
                  ) : (
                    <FaRegHeart size={22} />
                  )}
                </button>
              </div>

              {/* Product Info */}
              <h3 className="text-lg font-bold text-purple-200 mt-3">{product.name}</h3>
              <p className="text-neonBlue font-semibold">{product.price}</p>
              <p className="text-sm text-gray-400 mt-1">{product.description}</p>

              <div className="flex items-center text-yellow-400 text-sm mt-2 gap-1">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star-half-alt" />
                <i className="far fa-star" />
              </div>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  addToCart(product);
                }}
                className={`mt-4 w-full py-2 rounded font-semibold ${
                  isInCart(product.id)
                    ? 'bg-green-600 hover:bg-green-700'
                    : 'bg-purple-700 hover:bg-purple-800'
                }`}
              >
                {isInCart(product.id) ? 'In Cart' : 'Add to Cart'}
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-400 mt-10">No products found in this category.</p>
      )}
    </div>
  );
}

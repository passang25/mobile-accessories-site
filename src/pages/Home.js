import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import useWishlist from '../hooks/useWishlist';
import useCart from '../hooks/useCart';
import products from '../data/products';
import ProductImageSlider from '../components/ProductImageSlider';
import Tilt from 'react-parallax-tilt';
// At top of your file:
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';


const heroImages = [
  '/Images/Poster.jpg',
  '/Images/Sale.jpg',
  '/Images/Furniture.jpg',
    '/Images/Sticker.jpg',
  '/Images/Clothes.jpg',
  '/Images/Sticker2.jpg',
  '/Images/Kitchen.jpg',
];


const categories = ['Anime', 'Watch', 'Accessories', 'Wearables'];

export default function Home() {
  const navigate = useNavigate();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const { addToCart, isInCart, cartCount } = useCart();

  const [viewerCount, setViewerCount] = useState(0);

  useEffect(() => {
    // Fake live visitors
    setViewerCount(Math.floor(Math.random() * 90 + 10));
  }, []);

  return (
 <div className="min-h-screen bg-gradient-to-b from-black via-purple-900 to-black text-white font-sans">
 {/* 🔝 Top Navbar */}
 <header className="fixed top-0 left-0 w-full bg-gradient-to-b bg-opacity-90 shadow z-30 px-4 py-3 flex items-center justify-between tracking-widest">
<h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-500 animate-textShine drop-shadow-[0_0_10px_rgba(255,0,255,0.8)]"
>
Shop_Şhævy🪄
</h1>

 </header>

 {/* Content Area */}
 <div className="pt-10 pb-15 bg-gradient-to-b">
 {/* 🪩 Promo Tilt Banner */}
 <Tilt
 className="mx-auto mt-6 max-w-md p-4 bg-gradient-to-r from-fuchsia-600 to-purple-700 text-white rounded-xl shadow-lg hover:shadow-neon transition-all duration-300"
 tiltMaxAngleX={10}
 tiltMaxAngleY={10}
 >
 <h3 className="text-xl font-bold text-center">⏱️Limited Time Offer!</h3>
 <p className="text-sm text-purple-100 text-center">Explore awesome products❤‍🔥,I have collected only for you.</p>
 </Tilt>

 {/* 👀 Viewer Count */}
<div className="text-center text-xs mt-2 text-purple-300">
 👀 {viewerCount} people viewed this in the last 10 minutes
 </div>

 {/* 🎯 Hero Section */}
<section className="relative w-full h-[38vh] overflow-hidden text-white">
 <div className="absolute inset-0 w-full h-full z-0">
 <Swiper
modules={[Autoplay, EffectFade, Pagination]}
 effect="fade"
 loop
 autoplay={{ delay: 3000, disableOnInteraction: false }}
 pagination={{
 clickable: true,
 el: '.custom-pagination',
 }}
 className="w-full h-full"
 >
 {heroImages.map((src, i) => (
 <SwiperSlide key={i}>
 <img
 src={src}
 alt={`Hero Slide ${i}`}
 className="w-full h-full object-cover"
 />
 </SwiperSlide>
 ))}
 </Swiper>
 </div>
 </section>
 {/* 🟣 Dots outside below */}
 <div className="custom-pagination mt-4 relative z-30 flex justify-center w-full" />
 <h1 className="text-center text-neonGreen">Click Here⏬</h1>
<div className="flex justify-center my-1">
  <Link to="/products">
    <button className="px-6 py-3 bg-gradient-to-b text-neonBlue text-lg rounded-full shadow-md neon-glow hover:scale-105 transition">
      🔥 View All Trending Products
    </button>
  </Link>
</div>

 {/* 📂 Categories */}
 <section className="max-w-6xl mx-auto px-4 py-6">
 <h3 className="text-2xl font-semibold mb-4 text-neonGreen drop-shadow-neon">Shop by Category</h3>
 <div className="flex gap-4 overflow-x-auto pb-2">
 {categories.map((cat, index) => (
 <div
 key={index}
 onClick={() => navigate(`/category/${cat}`)}
 className="bg-gradient-to-r from-indigo-600 via-purple-700 to-pink-600 text-white py-2 rounded hover:scale-105 transition-transform shadow-md hover:shadow-pink-500/50 border border-purple-600 shadow-xl text-white rounded-lg px-4 py-2 min-w-[120px] text-center hover:bg-purple-800 cursor-pointer hover:scale-105 transition"
 >
 {cat}
 </div>
 ))}
 </div>
 </section>

 {/* 🛍️ Featured Products */}
 <section className="w-full py-6 text-neonGreen drop-shadow-neon">
 <div className="max-w-6xl mx-auto px-4">
 <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2 text-neonYellow drop-shadow-neon">
 <i className="fas fa-fire text-red-500"></i> Featured Products
 </h3>
 {/* 🛎️ Marquee Message */}
<marquee behavior="scroll" direction="left" className="text-sm mb-2 text-neonYellow bg-gradient-to-r from-indigo-600 via-purple-700 to-pink-600 text-white py-2 rounded hover:scale-105 transition-transform shadow-md hover:shadow-pink-500/50 text-2xl">
  📱 Tap on the product image to view more details & watch video previews 🎬
</marquee>


 <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2 gap-4">
 {products.map((product) => (
 <div
 key={product.id}
 onClick={() => navigate(`/product/${product.id}`)}
 className="flex flex-col bg-gradient-to-r text-white border border-purple-700 rounded-lg shadow-lg hover:shadow-neon hover:scale-[1.03] transition-transform p-3 cursor-pointer"
 >
 <div className="relative w-full overflow-hidden rounded">
 <ProductImageSlider 
 images={product.images || []}
 fit="contain"
 height="h-64 sm:h-72 md:h-80"
 />
 <button
 onClick={(e) => {
 e.stopPropagation();
 toggleWishlist(product);
 }}
 className="absolute top-2 right-2 bg-white rounded-full p-2 shadow text-red-500 z-10"
 >
 {isInWishlist(product.id) ? <FaHeart className="w-5 h-5" /> : <FaRegHeart className="w-5 h-5" />}
 </button>
 </div>

 <h4 className="text-lg font-semibold text-purple-300 mt-2">{product.name}</h4>
 <p className="text-neonBlue font-bold">{product.price}</p>
 <div className="flex items-center gap-1 text-yellow-400 text-sm mt-1">
 <i className="fas fa-star"></i>
 <i className="fas fa-star"></i>
 <i className="fas fa-star"></i>
 <i className="fas fa-star-half-alt"></i>
 <i className="far fa-star"></i>
 <span className="ml-1 text-gray-400">(120)</span>
 </div>

<button
 onClick={(e) => {
 e.stopPropagation();
 addToCart(product);
 }}
 className={`mt-3 w-full py-2 rounded text-white font-medium ${
isInCart(product.id) ? 'bg-green-600 hover:bg-green-700' : 'bg-purple-700 hover:bg-purple-800'
}`}
>
{isInCart(product.id) ? 'In Cart' : 'Add to Cart'}
</button>
 
{product.affiliateLink && (
  <a
    href={product.affiliateLink}
    target="_blank"
    rel="noopener noreferrer"
    onClick={(e) => e.stopPropagation()}
    className="block mt-2 text-center bg-gradient-to-r from-indigo-600 via-purple-700 to-pink-600 text-white py-2 rounded hover:scale-105 transition-transform shadow-md hover:shadow-pink-500/50 font-semibold"
  >
    🔗 Buy Now
  </a>
)}

</div>
))}
</div>
</div>
</section>
</div>

{/* 🔻 Sticky Bottom Navbar */}
<nav className="fixed bottom-0 left-0 w-full h-16 bg-gradient-to-b border-t border-purple-700 z-50">
<div className="h-full flex justify-around items-center text-white text-sm relative">
<button onClick={() => navigate('/')} className="flex flex-col items-center justify-center">
<i className="fas fa-home text-lg text-neonBlue"></i>
<span className="text-xs">Home</span>
</button>
<button onClick={() => navigate('/wishlist')} className="flex flex-col items-center justify-center">
<i className="fas fa-heart text-red-600 text-lg"></i>
<span className="text-xs">Wishlist</span>
</button>
<button onClick={() => navigate('/cart')} className="flex flex-col items-center justify-center relative">
<i className="fas fa-shopping-cart text-lg text-neonGreen"></i>
<span className="text-xs">Cart</span>
{cartCount > 0 && (
<span className="absolute top-0 right-0 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
{cartCount}
</span>
)}
</button>
<button onClick={() => navigate('/account')} className="flex flex-col items-center justify-center">
<i className="fas fa-user text-lg text-orange-500"></i>
<span className="text-xs">Account</span>
</button>
</div>
</nav>
</div>
 );
}

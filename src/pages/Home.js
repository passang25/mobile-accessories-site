import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import useWishlist from '../hooks/useWishlist';
import useCart from '../hooks/useCart';
import products from '../data/products';



const categories = ['Anime', 'Watch', 'Accessories', 'Wearables'];

export default function Home() {
  const navigate = useNavigate();
  const { toggleWishlist, isInWishlist } = useWishlist();
const { addToCart, isInCart } = useCart();

  const handleAddToCart = (product) => {
    console.log('Added to cart:', product);
    // Firebase cart logic here
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* 🔝 Fixed Top Navbar */}
      <header className="fixed top-0 left-0 w-full bg-white shadow z-30 px-4 py-3 flex items-center justify-between">
        <h1 className="text-xl font-bold text-indigo-600">ShopŞævy</h1>
        <button className="text-2xl text-gray-600">
          <i className="fas fa-bars"></i>
        </button>
      </header>

      {/* 👇 Content area with spacing */}
      <div className="pt-16 pb-20">
        {/* Hero Section */}
        <section className="bg-indigo-500 text-white py-16 text-center">
          <h2 className="text-4xl font-bold mb-2">Upgrade Your Tech</h2>
          <p className="text-lg">Best deals on gadgets & accessories</p>
        </section>

        {/* 🔍 Search Bar */}
        <div className="relative">
      <input
 type="text"
 placeholder="Search products..."
 className="w-full px-10 py-2 rounded-full border border-gray-300 focus:outline-none"
 />
 <i className="fas fa-search absolute left-3 top-2.5 text-gray-400"></i>
        </div>

        {/* 📂 Categories */}
        <section className="max-w-6xl mx-auto px-4 py-8">
          <h3 className="text-xl font-semibold mb-4">Shop by Category</h3>
          <div className="flex gap-4 overflow-x-auto pb-2">
            {categories.map((cat, index) => (
              <div
                key={index}
  onClick={() => navigate(`/category/${cat}`)}
 className="bg-white shadow rounded-lg px-4 py-2 min-w-[120px] text-center hover:bg-indigo-100 cursor-pointer"
              >
                {cat}
              </div>
            ))}
          </div>
        </section>

        {/* 🛍️ Featured Products */}
        <section className="max-w-6xl mx-auto px-4 py-8">
 <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
  <i className="fas fa-fire text-red-500"></i> Featured Products
</h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
    {products.map((product) => (
      <div
      key={product.id}
onClick={() => navigate(`/product/${product.id}`)}
className="bg-white rounded-lg shadow hover:shadow-lg hover:scale-[1.03] transition-transform p-4 cursor-pointer"
              >
    <div className="relative">
     <img
     loading="lazy"
    src={product.image}
   alt={product.name}
    className="w-full h-60 object-cover rounded bg-gray-100"
    onError={(e) => {
  e.target.src = 'https://via.placeholder.com/300x300';
           }}
      />
      {/* ❤️ Wishlist Button */}
    <button
onClick={(e) => {
 e.stopPropagation(); // prevent nav
 toggleWishlist(product);
 }}
 className="absolute top-2 right-2 bg-white rounded-full p-2 shadow text-red-500 z-10"
 >
 {isInWishlist(product.id) ? <FaHeart className="w-5 h-5" /> : <FaRegHeart className="w-5 h-5" />}
 </button>
                </div>

<h4 className="text-md font-semibold mt-2">{product.name}</h4>
  <p className="text-indigo-600 font-bold">{product.price}</p>
  <div className="flex items-center gap-1 text-yellow-400 text-sm mt-1">
 <i className="fas fa-star"></i>
 <i className="fas fa-star"></i>
 <i className="fas fa-star"></i>
 <i className="fas fa-star-half-alt"></i>
 <i className="far fa-star"></i>
 <span className="ml-1 text-gray-500">(120)</span>
</div>

  {/* 🛒 Add to Cart */}
 <button
onClick={(e) => {
e.stopPropagation(); // prevent nav
addToCart(product);
 }}
className={`mt-2 w-full py-1 rounded text-white ${
isInCart(product.id) ? 'bg-green-600 hover:bg-green-700' : 'bg-indigo-600 hover:bg-indigo-700'
 }`}
 >
 {isInCart(product.id) ? 'In Cart' : 'Add to Cart'}
 </button>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* 🔻 Sticky Bottom Navbar */}
 <nav className="fixed bottom-0 left-0 w-full h-16 bg-white border-t shadow z-50">
 <div className="h-full flex justify-around items-center text-gray-600 text-sm">
 <button
onClick={() => navigate('/')}
className="flex flex-col items-center justify-center focus:outline-none"
 >
<i className="fas fa-home text-lg"></i>
 <span className="text-xs">Home</span>
</button>

 <button
 onClick={() => navigate('/wishlist')}
 className="flex flex-col items-center justify-center focus:outline-none"
 >
 <i className="fas fa-heart text-lg"></i>
 <span className="text-xs">Wishlist</span>
 </button>

 <button
 onClick={() => navigate('/cart')}
 className="flex flex-col items-center justify-center focus:outline-none"
 >
 <i className="fas fa-shopping-cart text-lg"></i>
 <span className="text-xs">Cart</span>
 </button>

 <button
onClick={() => navigate('/account')}
 className="flex flex-col items-center justify-center focus:outline-none"
 >
 <i className="fas fa-user text-lg"></i>
 <span className="text-xs">Account</span>
 </button>
 </div>
</nav>

    </div>
  );
}

import React from 'react';
import { useNavigate } from 'react-router-dom';

const products = [
  {
    id: 1,
    name: 'Òñé Píèçë wátçh',
    price: '₹1,999',
    image: './images/Anime-watch.jpg',
  },
  {
    id: 2,
    name: 'Smart Watch',
    price: '₹3,499',
    image: 'https://via.placeholder.com/300x300',
  },
  {
    id: 3,
    name: 'Gaming Headset',
    price: '₹2,999',
    image: 'https://via.placeholder.com/300x300',
  },
  {
    id: 4,
    name: 'Anime Poster',
    price: '₹299',
    image: 'https://via.placeholder.com/300x300',
  },
    {
    id: 5,
    name: 'Wall Clock',
    price: '₹299',
    image: 'https://via.placeholder.com/300x300',
  },
    {
    id: 6,
    name: 'Room Light',
    price: '₹299',
    image: 'https://via.placeholder.com/300x300',
  },
    {
    id: 7,
    name: 'Mobile Cover',
    price: '₹299',
    image: 'https://via.placeholder.com/300x300',
  },
];

const categories = ['Anime', 'Watch', 'Accessories', 'Wearables'];

export default function Home() {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">

          

      {/* Hero Banner */}
      <section className="bg-indigo-500 text-white py-20 text-center">
        <h2 className="text-4xl font-bold mb-4">Upgrade Your Tech</h2>
        <p className="text-lg">Best deals on gadgets & accessories</p>
      </section>

<input
            type="text"
            placeholder="Search products..."
            className="w-1/2 px-4 py-2 rounded-full border border-gray-300 focus:outline-none w-full"
          />

      {/* Categories */}
      <section className="max-w-6xl mx-auto px-4 py-8">
        <h3 className="text-xl font-semibold mb-4">Shop by Category</h3>
        <div className="flex gap-4 overflow-x-auto">
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

      {/* Featured Products */}
      <section className="max-w-6xl mx-auto px-4 py-8">
        <h3 className="text-xl font-semibold mb-4">Featured Products</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow hover:shadow-lg transition p-4">
              <img src={product.image} alt={product.name} className="w-full h-40 object-cover mb-2 rounded" />
              <h4 className="text-md font-semibold">{product.name}</h4>
              <p className="text-indigo-600 font-bold">{product.price}</p>
              <button className="mt-2 w-full bg-indigo-600 text-white py-1 rounded hover:bg-indigo-700 transition">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Sticky Bottom Navbar */}
      <nav className="fixed bottom-0 w-full bg-white shadow border-t z-20">
        <div className="flex justify-around p-2 text-gray-600">
          <div className="flex flex-col items-center text-indigo-600">
            <i className="fas fa-home text-xl"></i>
            <span className="text-xs">Home</span>
          </div>
          <div className="flex flex-col items-center">
            <i className="fas fa-heart text-xl"></i>
            <span className="text-xs">Wishlist</span>
          </div>
          <div className="flex flex-col items-center">
            <i className="fas fa-shopping-cart text-xl"></i>
            <span className="text-xs">Cart</span>
          </div>
          <div className="flex flex-col items-center">
            <i className="fas fa-user text-xl"></i>
            <span className="text-xs">Account</span>
          </div>
        </div>
      </nav>
    </div>
  );
}

// pages/Wishlist.js
import React from 'react';
import useWishlist from '../hooks/useWishlist';
import { useNavigate } from 'react-router-dom';

export default function Wishlist() {
const { wishlist, toggleWishlist } = useWishlist();
 const navigate = useNavigate();

 return (
 <div className="min-h-screen p-4 bg-gray-100 pb-16">
 <h2 className="text-2xl font-bold mb-4">Your Wishlist</h2>
{wishlist.length === 0 ? (
 <p>No items in wishlist 💔</p>
 ) : (
 <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
 {wishlist.map(product => (
 <div key={product.id} className="bg-white p-4 rounded shadow">
 <img
 src={product.images?.[0] || 'https://via.placeholder.com/300'}
 alt={product.name}
 className="h-40 w-full object-contain mb-2"
 />
 <h4 className="text-md font-semibold">{product.name}</h4>
 <p className="text-indigo-600 font-bold">{product.price}</p>
 <button
 className="mt-2 text-sm text-red-500 underline"
 onClick={() => toggleWishlist(product)}
 >
 Remove
 </button>
</div>
 ))}
 </div>
 )}
 </div>
 );
}

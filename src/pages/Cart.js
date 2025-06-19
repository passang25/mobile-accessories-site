// src/pages/Cart.js
import React from 'react';
import useCart from '../hooks/useCart';

export default function Cart() {
  const { cartItems, removeFromCart } = useCart();

  const total = cartItems.reduce((acc, item) => {
    const price = parseInt(item.price.replace(/[^\d]/g, ''));
    return acc + price;
  }, 0);

  return (
    <div className="min-h-screen bg-gray-100 pt-16 pb-20 px-4">
      <h1 className="text-2xl font-bold text-indigo-600 mb-4">Your Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-gray-600">Your cart is empty 😔</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div key={item.id} className="bg-white p-4 rounded-lg shadow flex items-center gap-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 object-contain rounded"
                onError={(e) => (e.target.src = 'https://via.placeholder.com/100')}
              />
              <div className="flex-1">
                <h2 className="font-semibold text-md">{item.name}</h2>
                <p className="text-indigo-600 font-bold">{item.price}</p>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 hover:text-red-700 text-sm"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Total */}
      {cartItems.length > 0 && (
        <div className="mt-8 bg-white p-4 rounded-lg shadow text-right">
          <p className="text-md">
            Total: <span className="text-lg font-bold text-indigo-600">₹{total}</span>
          </p>
          <button className="mt-2 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">
            Checkout
          </button>
        </div>
      )}
    </div>
  );
}

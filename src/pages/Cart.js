// src/pages/Cart.js
import React from 'react';
import useCart from '../hooks/useCart';

export default function Cart() {
  const { cartItems, updateQuantity, removeFromCart, clearCart } = useCart();

  // Total price
  const total = cartItems.reduce((acc, item) => {
    const price = parseInt(item.price.replace(/[^\d]/g, '')) * (item.qty || 1);
    return acc + price;
  }, 0);

  return (
    <div className="min-h-screen bg-gray-100 pt-16 pb-20 px-4">
      <h1 className="text-2xl font-bold text-indigo-600 mb-4">Your Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-gray-600">Your cart is empty 😔</p>
      ) : (
        <>
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
                  <h2 className="font-semibold">{item.name}</h2>
                  <p className="text-indigo-600 font-bold">{item.price}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <button
                      onClick={() => updateQuantity(item.id, Math.max((item.qty || 1) - 1, 1))}
                      className="px-2 py-1 bg-gray-200 rounded text-sm"
                    >
                      −
                    </button>
                    <span>{item.qty || 1}</span>
                    <button
                      onClick={() => updateQuantity(item.id, (item.qty || 1) + 1)}
                      className="px-2 py-1 bg-gray-200 rounded text-sm"
                    >
                      +
                    </button>
                  </div>
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

          {/* Summary & Checkout */}
          <div className="mt-6 bg-white p-4 rounded-lg shadow text-right">
            <p className="text-md mb-2">
              Total:{' '}
              <span className="text-lg font-bold text-indigo-600">₹{total}</span>
            </p>
            <button className="w-full py-2 bg-green-600 text-white rounded hover:bg-green-700">
              Proceed to Checkout
            </button>
            <button
              onClick={clearCart}
              className="w-full mt-2 py-2 bg-red-100 text-red-600 rounded hover:bg-red-200 text-sm"
            >
              Clear Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
}

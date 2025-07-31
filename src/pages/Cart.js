import React, { useState } from 'react';
import useCart from '../hooks/useCart';
import ProductImageSlider from '../components/ProductImageSlider';

export default function Cart() {
  const { cartItems, removeFromCart, clearCart } = useCart();
  const [clearing, setClearing] = useState(false);

  const total = cartItems.reduce((acc, item) => {
    const price = parseInt(item.price.replace(/[^\d]/g, '')) * (item.qty || 1);
    return acc + price;
  }, 0);

  const handleClearCart = async () => {
    setClearing(true);
    try {
      await clearCart();
    } catch (err) {
      console.error("Failed to clear cart:", err);
    } finally {
      setClearing(false);
    }
  };

  return (
    <div className="min-h-screen pt-20 pb-24 px-4 bg-[#0f172a] text-white">
      <h1 className="text-3xl font-extrabold text-cyan-400 mb-4 text-center">🛒 Your Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-gray-300 text-lg text-center">Your cart is empty 😔</p>
      ) : (
        <>
          <div className="space-y-3">
            {cartItems.map((item) => (
              <div
                key={item.id}
 className="rounded-xl p-2 sm:p-4 flex flex-col sm:flex-row items-center gap-2 shadow-md"
              >
                <div className="w-full sm:w-24 h-24">
                  {item.images ? (
                    <ProductImageSlider images={item.images} height="h-full" fit="contain" />
                  ) : (
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-contain rounded"
                      onError={(e) => (e.target.src = 'https://via.placeholder.com/100')}
                    />
                  )}
                </div>

                <div className="flex-1 w-full text-sm">
                  <h2 className="font-semibold text-base text-cyan-300 leading-tight">{item.name}</h2>
                  <p className="text-cyan-400 font-bold">{item.price}</p>
                  <p className="text-gray-400 mt-1">Qty: <span>{item.qty || 1}</span></p>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-400 hover:text-red-500 underline mt-1"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="mt-6 bg-[#1e293b] border border-cyan-500 rounded-xl p-4 text-right space-y-3 shadow-md">
            <p className="text-base">
              Total:{' '}
              <span className="text-xl font-bold text-cyan-300">₹{total}</span>
            </p>
            <button className="w-full py-2 rounded text-white font-semibold bg-gradient-to-r from-teal-400 to-blue-500 shadow-lg hover:shadow-xl transition-all">
              Proceed to Checkout
            </button>
            <button
              onClick={handleClearCart}
              disabled={clearing}
              className={`w-full py-2 text-sm rounded font-semibold transition-all ${
                clearing
                  ? 'bg-red-300 text-red-800 cursor-not-allowed'
                  : 'bg-gradient-to-r from-pink-500 to-red-500 text-white hover:shadow-xl'
              }`}
            >
              {clearing ? 'Clearing...' : 'Clear Cart'}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

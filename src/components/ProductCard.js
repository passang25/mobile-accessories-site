import React from 'react';
import { useEffect, useState } from "react";


export default function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-lg shadow p-4 hover:shadow-lg transition">
      <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded mb-2" />
      <h4 className="text-md font-semibold">{product.name}</h4>
      <p className="text-indigo-600 font-bold">{product.price}</p>
      <button className="mt-2 w-full bg-indigo-600 text-white py-1 rounded hover:bg-indigo-700">
        Add to Cart
      </button>
    </div>
  );
}

import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Wireless Earbuds",
    description: "High-quality sound with long battery life.",
    image: "https://via.placeholder.com/150",
    link: "https://www.amazon.in/dp/YOUR_AFFILIATE_ID_1"
  },
  {
    id: 2,
    name: "Phone Stand",
    description: "Adjustable desk stand for hands-free use.",
    image: "https://via.placeholder.com/150",
    link: "https://www.amazon.in/dp/YOUR_AFFILIATE_ID_2"
  },
  {
    id: 3,
    name: "Fast Charger",
    description: "Quick charge adapter with dual ports.",
    image: "https://via.placeholder.com/150",
    link: "https://www.amazon.in/dp/YOUR_AFFILIATE_ID_3"
  }
];

function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between">
      <h1 className="text-xl font-bold">Mobile Accessories</h1>
      <div className="space-x-4">
        <Link to="/" className="hover:text-gray-300">Home</Link>
        <Link to="/products" className="hover:text-gray-300">Products</Link>
        <Link to="/about" className="hover:text-gray-300">About</Link>
        <Link to="/contact" className="hover:text-gray-300">Contact</Link>
      </div>
    </nav>
  );
}

function Home() {
  return (
    <div className="p-8 text-center">
      <h2 className="text-3xl font-bold mb-4">Top 10 Mobile Accessories</h2>
      <p>Discover the best gadgets and tools for your smartphone.</p>
    </div>
  );
}

function Products() {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-6">Featured Products</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border rounded-lg p-4 shadow hover:shadow-lg">
            <img src={product.image} alt={product.name} className="w-full h-40 object-cover mb-4" />
            <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
            <p className="mb-4">{product.description}</p>
            <a href={product.link} target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Buy Now
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

function About() {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">About Us</h2>
      <p>We bring you the best mobile accessories to enhance your smartphone experience.</p>
    </div>
  );
}

function Contact() {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Contact</h2>
      <p>For inquiries, email us at: example@email.com</p>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React, { useRef, useState } from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";
import './App.css';


const products = [
  {
    id: 1,
    name: "boAt Airdopes 311 Pro, 50HRS Battery, Fast Charge, Dual Mics ENx Tech, Transparent LID, Low Latency, IPX4, IWP Tech, v5.3 Bluetooth Earbuds, TWS Ear Buds Wireless Earphones with mic (Active Black)",
    description: "High-quality Best sound with long battery life.",
    video: "boat.mp4",
    link: "https://amzn.to/4msdEun"
  },
    {
    id: 2,
    name: "IMNISHNAY Jellyfish Baby LED Night Light – 7-Color Changing Lamp for Kids, Baby Room Decor, Aesthetic Gifts for Girls, Boys , Friends & Ocean Lovers Night Lamps ( Hanging + Base ) (Jelly Fish)Brand: IMNISHNAY 4.0 4.0 out of 5 stars (540)",
description: "M.R.P.: ₹1,999. Inclusive of all taxes EMI starts at ₹127 per month.",
    video: "OctopusLamp.mp4",
    link: "https://www.amazon.in/dp/YOUR_AFFILIATE_ID_2"
  },
  {
    id: 3,
    name: "Phone Stand wow",
    description: "Adjustable desk stand for hands-free use.",
    video: "charger.mp4",
    link: "https://www.amazon.in/dp/YOUR_AFFILIATE_ID_2"
  },
  {
    id: 4,
    name: "Fast Charger",
    description: "Quick charge adapter with dual ports.",
    video: "stand.mp4",
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




function ProductCard({ product }) {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };
  
  return (
 <div className="border rounded-lg p-4 shadow hover:shadow-lg relative">
 <div className="relative">
 <video 
 ref={videoRef} 
 src={`/videos/${product.video}`}
 autoPlay 
 muted={isMuted} 
 loop
className="w-full h-60 object-cover mb-4" />
<button 
onClick={toggleMute}
className="absolute top-2 left-2 text-black text-xl bg-black bg-opacity-50 p-2 rounded-full">
{isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
</button>
</div>
<h3 className="text-xl font-semibold mb-2">{product.name}</h3>
<i><p className="mb-4"style={{ color: 'green', fontStyle: 'font-semibold' }}>{product.description}</p></i>
<a
href={product.link}
target="_blank"
rel="noopener noreferrer"
className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
Buy Now
</a>
</div>
);
}



function Products() {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-6">Featured Products</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
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
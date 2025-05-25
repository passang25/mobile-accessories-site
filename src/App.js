import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React, { useRef, useState,useEffect } from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";
import './App.css';


const products = [
  {
    id: 1,
    name: "boAt Airdopes 311 Pro, 50HRS Battery, Fast Charge, Dual Mics ENx Tech, Transparent LID, Low Latency, IPX4, IWP Tech, v5.3 Bluetooth Earbuds, TWS Ear Buds Wireless Earphones with mic (Active Black).",
description: "MRP: 789\nHigh-quality Best sound with long battery life.",
    video: "boat.mp4",
    link: "https://amzn.to/4msdEun",
    rating:4
  },
    {
    id: 2,
    name: "IMNISHNAY Jellyfish Baby LED Night Light – 7-Color Changing Lamp for Kids, Baby Room Decor, Aesthetic Gifts for Girls, Boys , Friends & Ocean Lovers Night Lamps ( Hanging + Base ) (Jelly Fish)Brand: IMNISHNAY 4.0 4.0 out of 5 stars (540).",
description: "M.R.P.: ₹1,999. Inclusive of all taxes EMI starts at ₹127 per month.",
    video: "OctopusLamp.mp4",
    link: "https://www.amazon.in/dp/YOUR_AFFILIATE_ID_2",
    rating:4
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


function ProductCard({ product, isActive, onActivate}) {
 const videoRef = useRef(null);
 const [aspectRatio, setAspectRatio] = useState(9 / 16); // fallback

useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = !isActive;
    }
  }, [isActive]);

const toggleMute = () => {
  onActivate(); // Activates this video and mutes others
};


useEffect(() => {
 const video = videoRef.current;
const handleLoadedMetadata = () => {
const ratio = video.videoWidth / video.videoHeight;
setAspectRatio(ratio);
};
if (video) {
video.addEventListener("loadedmetadata", handleLoadedMetadata);
}
return () => {
  if (video) {
video.removeEventListener("loadedmetadata", handleLoadedMetadata);
 }
 };
}, []);


  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg relative">
      <div
        className="w-full bg-black overflow-hidden relative"
        style={{ aspectRatio: aspectRatio }}
      >
        <video
          ref={videoRef}
          src={`/videos/${product.video}`}
          autoPlay
          muted={!isActive}
          loop
          preload="metadata"
          playsInline
          className="absolute top-0 left-0 w-full h-full object-contain"
        />
        <button
          onClick={toggleMute}
          className="absolute top-2 left-2 text-white text-xl bg-opacity-20 p-2 rounded-full"
>
{isActive ? <FaVolumeMute /> : <FaVolumeUp />}
</button>
 </div>
<div className="mt-2">
<h3 className="text-xl font-semibold leading-tight">{product.name}</h3>

{/* Star Rating */}

      <div className="flex items-center space-x-1 mt-1 mb-1">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            xmlns="http://www.w3.org/2000/svg"
            fill={i < product.rating ? "currentColor" : "none"}
            viewBox="0 0 24 24"
            stroke="currentColor"
            className={`w-5 h-5 ${i < product.rating ? "text-yellow-400" : "text-gray-300"}`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l2.145 6.586h6.92c.969 0 1.371 1.24.588 1.81l-5.607 4.07 2.146 6.586c.3.921-.755 1.688-1.54 1.118L12 18.347l-5.603 4.07c-.784.57-1.838-.197-1.539-1.118l2.145-6.586-5.606-4.07c-.783-.57-.38-1.81.588-1.81h6.919l2.145-6.586z"
            />
          </svg>
        ))}
        <span className="text-sm text-gray-600 ml-2">{product.rating}.0</span>
      </div>

<p className="mb-4" style={{ color: "green" }}>{product.description}
 </p>
 </div>
<a
href={product.link}
target="_blank"
rel="noopener noreferrer"
className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
>
  <bold><i>Buy Now</i></bold>
</a>
</div>
);
}


function Products() {
const [activeVideoId, setActiveVideoId] = useState(null);

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-6">Featured Products</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard 
          key={product.id}
          product={product}
isActive={activeVideoId === product.id}
onActivate={() => setActiveVideoId(product.id)}
          />
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
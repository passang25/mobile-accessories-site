import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React, { useRef, useState, useEffect } from "react";
import { FaPlay, FaPause, FaVolumeMute, FaVolumeUp } from "react-icons/fa";
import './App.css';
import { FaMobileAlt, FaTools, FaUserFriends } from "react-icons/fa";
import { FaEnvelope, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { Menu, X } from "lucide-react"; // optional: install `lucide-react` for icons
import { HomeIcon, Box, Info, Phone } from "lucide-react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { ImSpinner2 } from "react-icons/im"; // Spinner icon from react-icons


const products = [
  {
    id: 1,
    name: "boAt Airdopes 311 Pro...",
    description: "High-quality Best sound with long battery life.",
    video: "boat.mp4",
    price: 799,
    mrp: 4990,
    discountPercent: 84,
    ratingCount: 3900,
    link: "https://amzn.to/4msdEun",
    rating: 5
  },
  {
    id: 2,
    name: "IMNISHNAY Jellyfish Baby LED Night Light...",
    description: "Inclusive of all taxes EMI starts at ₹127 per month.",
    video: "OctopusLamp.mp4",
    price: 1199,
    mrp: 1999,
    discountPercent: 40,
    ratingCount: 3900,
    link: "https://amzn.to/4dtP1co",
    rating: 4
  },
  {
    id: 3,
    name: "WaterScience Tap Extension for Kitchen Sink | 2 Flow Modes | Flexible Faucet Extender for Taps | Aerators for Water Tap | Upto 50% Water Saving - Flexi Neck.",
    description: "2 flow modes - Rain mode & Foam mode to switch between a standard flow and a reduced flow in the kitchen.",
    video: "TapExtender.mp4",
    price: 495,
    mrp: 995,
    discountPercent: 50,
    ratingCount: 3900,
    link: "https://amzn.to/4myuVlv",
    rating: 5
  },
  {
    id: 4,
    name: "Desidiya DIY 3D Acrylic Writing Board with Pen & Light Table Lamp | Led Writing Table Lamp for Kids Corded Electric Home & Office Decor Items, Gift, Bedside Night Light.",
    description: "EYE-CARING LED - The lamp's LED lights emit a soft, flicker-free glow that reduces eye strain and fatigue, making it perfect for extended reading, writing, or working sessions.",
    video: "LedPad.mp4",
    price: 249,
    mrp: 1699,
    discountPercent: 85,
    ratingCount: 3900,
    link: "https://amzn.to/44P7LRx",
    rating: 5
  },
    {
    id: 5,
    name: "The Artment your artistic apartment Rubber TerraDry Stone Bathroom Diatomaceous Earth Shower Mat, Non-Slip Super Absorbent Quick Drying Bathroom Mat | Natural, Easy to Clean(35 X 45 CM)Rectangular.",
    description: "Super Absorbent>>Non-Slip Design>>Quick Drying>>Easy to Clean>>Stylish and Functional.",
    video: "BathMat.mp4",
    price: 908,
    mrp: 1524,
    discountPercent: 40,
    ratingCount: 3900,
    link: "https://amzn.to/4kfaKHM",
    rating: 4
  }
];



function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);
  const handleLinkClick = () => setIsOpen(false);

  return (
    <>
      {/* Fixed Menu Icon */}
      <div className="fixed top-4 right-4 z-50 md:hidden bg-gray-800 p-2 rounded-full shadow-lg">
        <button onClick={handleToggle} className="text-white">
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Normal Desktop Navbar */}
      <nav className="bg-gray-800 text-white p-4">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold">Amazon Associate.in</h1>

          <div className="hidden md:flex space-x-4">
            <Link to="/" className="hover:text-gray-300">Home</Link>
            <Link to="/products" className="hover:text-gray-300">Products</Link>
            <Link to="/about" className="hover:text-gray-300">About</Link>
            <Link to="/contact" className="hover:text-gray-300">Contact</Link>
          </div>
        </div>
      </nav>

      {/* Slide-in Side Menu for Mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed top-0 left-0 h-full w-3/4 bg-black bg-opacity-50 text-white z-40 flex flex-col p-6 space-y-4 md:hidden shadow-xl text-center font-bold text-2xl"
          >
            <Link to="/" onClick={handleLinkClick} 
className="hover:text-gray-300">🛖 Home
  </Link>
            
            <Link to="/products" onClick={handleLinkClick} 
className="hover:text-gray-300">📦 Product  
            </Link>
            
            <Link to="/about" onClick={handleLinkClick} className="hover:text-gray-300">❗About</Link>
            <Link to="/contact" onClick={handleLinkClick} className="hover:text-gray-300">📞 Contact</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}




function Home() {
  return (
    <div className="p-8 text-center bg-gradient-to-r from-yellow-50 to-orange-100 min-h-screen">
      <div className="max-w-4xl mx-auto py-10">
        <h2 className="text-4xl font-bold mb-4 text-gray-800">
          Top Amazon Picks Just for You!
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Save big on trending tech & home gadgets. Handpicked deals with <span className="font-semibold text-green-600">up to 85% off!</span>
        </p>
        <Link
          to="/products"
          className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg hover:bg-blue-700 transition"
        >
          Explore Products
        </Link>
      </div>

      {/* Highlight 3 products visually */}
      <div className="mt-10 grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {products.slice(0, 3).map((product) => (
          <div
            key={product.id}
            className="border rounded-lg p-4 bg-white shadow hover:shadow-lg transition duration-300"
          >
            <video
              src={`/videos/${product.video}`}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-48 object-contain rounded"
            />
            <h3 className="mt-2 text-lg font-semibold">{product.name}</h3>
            <p className="text-sm text-gray-600">{product.description.slice(0, 60)}...</p>
            <span className="text-red-600 font-bold text-lg block mt-1">
              ₹{product.price} <span className="text-sm line-through text-gray-500">₹{product.mrp}</span>
            </span>
          </div>
        ))}
      </div>

      {/* Trust signals */}
      <div className="mt-12 grid md:grid-cols-3 gap-4 max-w-4xl mx-auto text-gray-700">
        <div className="p-4 border rounded-lg bg-white shadow text-center">
          <h4 className="font-bold text-xl">Fast Delivery</h4>
          <p className="text-sm">Get your products in 2-4 days via Amazon Prime.</p>
        </div>
        <div className="p-4 border rounded-lg bg-white shadow text-center">
          <h4 className="font-bold text-xl">Up to 85% OFF</h4>
          <p className="text-sm">Enjoy massive discounts on handpicked items.</p>
        </div>
        <div className="p-4 border rounded-lg bg-white shadow text-center">
          <h4 className="font-bold text-xl">Amazon Verified</h4>
          <p className="text-sm">All links redirect to trusted Amazon listings.</p>
        </div>
      </div>
    </div>
  );
}


/*

function ProductCard({ product, isActive, onActivate }) {
  const videoRef = useRef(null);
  const [aspectRatio, setAspectRatio] = useState(9 / 16);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = !isActive;
    }
  }, [isActive]);

  const toggleMute = () => {
    onActivate();
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
          autoPlay = {!isActive}
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

      
    // { Star Rating }
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

      // { Discount Price Section }
        <div className="mt-2">
          <div className="inline-block bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded mb-1">
            Limited time deal
          </div>

          <div className="flex items-baseline space-x-2 mt-1">
            <span className="text-red-600 font-semibold text-xl">
              -{product.discountPercent}%
            </span>
            <span className="text-black font-bold text-2xl">
              ₹{product.price}
            </span>
          </div>

          <div className="text-sm text-gray-500 line-through">
            M.R.P: ₹{product.mrp}
          </div>

          <div className="text-sm text-gray-700 mt-1">
            <span className="inline-flex items-center space-x-1">
              <span className="bg-gray-700 text-white text-xs px-2 py-0.5 rounded">
                Amazon
              </span>
              <span>Inclusive of all taxes</span>
            </span>
          </div>
        </div>

        <i><b><p className="mb-4 mt-2" style={{ color: "green" }}>{product.description}</p></b></i>

        
        <a
         href={product.link}
         target="_blank"
       rel="noopener noreferrer"
     className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 inline-block"
        >
         
          <b><i>Buy Now</i></b>
        </a>
      </div>
    </div>
  );
}
*/


function ProductCard({ product, isActive, onActivate }) {
 const videoRef = useRef(null);
const [aspectRatio, setAspectRatio] = useState(9 / 16);
 const [isVideoLoading, setIsVideoLoading] = useState(true); // 🔄 loading state

 useEffect(() => {
if (videoRef.current) {
 videoRef.current.muted = !isActive;
 }
 }, [isActive]);

 const toggleMute = () => {
 onActivate();
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
        {isVideoLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20">
            <ImSpinner2 className="text-white text-3xl animate-spin" />
          </div>
        )}
 <video
 ref={videoRef}
 src={`/videos/${product.video}`}
 autoPlay={!isActive}
 muted={!isActive}
 loop
 preload="metadata"
 playsInline
 onCanPlay={() => setIsVideoLoading(false)} // ✅ hide spinner when ready
 className="absolute top-0 left-0 w-full h-full object-cover"
 />
 <button
 onClick={toggleMute}
className="absolute top-2 left-2 text-white text-xl bg-opacity-20 p-2 rounded-full z-30"
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
 {/* Discount Price Section */}
 <div className="mt-2">
 <div className="inline-block bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded mb-1">
 Limited time deal
 </div>

 <div className="flex items-baseline space-x-2 mt-1">
 <span className="text-red-600 font-semibold text-xl">
 -{product.discountPercent}%
 </span>
 <span className="text-black font-bold text-2xl">
 ₹{product.price}
 </span>
 </div>

 <div className="text-sm text-gray-500 line-through">
 M.R.P: ₹{product.mrp}
 </div>

 <div className="text-sm text-gray-700 mt-1">
 <span className="inline-flex items-center space-x-1">
 <span className="bg-gray-700 text-white text-xs px-2 py-0.5 rounded">
 Amazon
 </span>
 <span>Inclusive of all taxes</span>
 </span>
 </div>
 </div>

 <i><b><p className="mb-4 mt-2" style={{ color: "green" }}>{product.description}</p></b></i>
 <a
 href={product.link}
 target="_blank"
 rel="noopener noreferrer"
 className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 inline-block"
 >
 <b><i>Buy Now</i></b>
 </a>
 </div>
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
    <div className="p-8 bg-gradient-to-br from-yellow-50 to-orange-100 min-h-screen">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">About Us</h2>
        <p className="text-lg text-gray-700 mb-8">
          We're passionate about showcasing top Amazon deals on unique tech and home gadgets. Our goal is to help you save money while discovering awesome products!
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-white shadow rounded-lg flex flex-col items-center text-center">
            <FaMobileAlt className="text-3xl text-blue-500 mb-2" />
            <h4 className="font-bold text-xl mb-1">Mobile Accessories</h4>
            <p className="text-sm text-gray-600">Only the best curated mobile gadgets that are affordable and reliable.</p>
          </div>
          <div className="p-6 bg-white shadow rounded-lg flex flex-col items-center text-center">
            <FaTools className="text-3xl text-green-500 mb-2" />
            <h4 className="font-bold text-xl mb-1">Smart Utilities</h4>
            <p className="text-sm text-gray-600">Innovative tools and home improvements that make life easier.</p>
          </div>
          <div className="p-6 bg-white shadow rounded-lg flex flex-col items-center text-center">
            <FaUserFriends className="text-3xl text-purple-500 mb-2" />
            <h4 className="font-bold text-xl mb-1">Trusted Reviews</h4>
            <p className="text-sm text-gray-600">Handpicked based on ratings, reviews & real customer satisfaction.</p>
          </div>
        </div>
      </div>
    </div>


  );
}






function Contact() {
  return (
    <div className="p-8 bg-gradient-to-br from-blue-50 to-cyan-100 min-h-screen">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Get in Touch</h2>
        <p className="text-lg text-gray-700 mb-8">
          We’d love to hear from you! Whether it’s a query, feedback, or a collaboration idea — drop us a message.
        </p>
        <div className="space-y-4">
          <div className="flex items-center justify-center gap-3">
            <FaEnvelope className="text-xl text-red-500" />
            <a href="mailto:outlookdeathless@email.com" className="text-gray-700 text-lg hover:underline">
              outlookdeathless@email.com
            </a>
          </div>
          <div className="flex items-center justify-center gap-3">
            <FaInstagram className="text-xl text-pink-500" />
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-gray-700 text-lg hover:underline">
@_https://www.instagram.com/night0__0owl?igsh=dGY3ZGk5MmdpNXpq
            </a>
          </div>
          <div className="flex items-center justify-center gap-3">
            <FaWhatsapp className="text-xl text-green-500" />
            <span className="text-gray-700 text-lg">+91-9547104771</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-800 text-white text-center p-4 mt-10">
      <p>&copy; 2025 Amazon Associate.in. All rights reserved.</p>
<p>Help me earn a small commission when you buy using my affiliate links, at no extra cost to you.</p>
    </footer>
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
       <Footer />
    </Router>
  );
}



export default App;

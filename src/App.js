import React from 'react';
import { useContext, useEffect, useState, useRef } from "react";
import { auth, googleProvider } from "./firebase";
import '@fortawesome/fontawesome-free/css/all.min.css';
 import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
 import { signInWithPopup, signOut } from "firebase/auth";
import { FaPlay, FaPause, FaVolumeMute, FaVolumeUp } from "react-icons/fa";
import './App.css';
import { Menu, X } from "lucide-react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { ImSpinner2 } from "react-icons/im";
import { AuthContext, AuthProvider } from "./AuthContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
 import Terms from './pages/Terms';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Disclaimer from './pages/Disclaimer';
import Privacy from './pages/Privacy';
import Contact from './pages/Contact';
import About from './pages/About';
import Home from './pages/Home';
import CategoryPage from './pages/CategoryPage';
import Wishlist from './pages/Wishlist';
import Cart from './pages/Cart';
import ProductDetails from './pages/ProductDetails';
import RequireAuth from './components/RequireAuth';

const products = [
  {
    id: 1,
    name: "boAt Airdopes 311 Pro,50HRS Battery, Fast Charge, Dual Mics ENx Tech, Transparent LID, Low Latency, IPX4, IWP Tech, v5.3 Bluetooth Earbuds, TWS Ear Buds Wireless Earphones with mic (Active Black)",
    description: "I Experienced music🎶 like never before with the boAt Airdopes 311 Pro🎧—where style meets exceptional performance🔥.. Click the buy button to not miss the sale of 84℅ Off.",
    video: "boat.mp4",
    price: 799,
    mrp: 4990,
    discountPercent: 84,
    ratingCount: 3900,
    link: "https://amzn.to/4msdEun",
    rating: 5,
    dealEndTime: "11:59 PM IST, Tommorow",
    topHighlights: {
      brand: "boAt🎧",
      colour: "Active Black",
      earPlacement: "In Ear🦻.",
      formFactor: "In Ear🦻.",
      noiseControl: "None🚫",
      headphonesJack: "No Jack❌",
      features: [
        "Up to 50 hours⏳ of Playback🎶: Stay entertained non-stop❌ with up to 50 hours of massive playtime. Pop in boAt Airdopes 311 Pro TWS Earbuds and make commutes fun with your favorite tunes for company.",
        "ENx Technology: ENx-powered dual mics🎤 in these earbuds make attending calls📞 in public spaces a breeze. Speak🗣️ and listen🦻 from busy roads🛣, airport lounges✈️, cafés, and more without pesky noise."
      ]
    },
    productSpecifications: {
     modelName: "Airdopes 311 Pro.",
     connectivity: "Bluetooth 5.3.",
     batteryLife: "Up to 50 hours.",
  chargingTime: "10 mins for 150 mins playtime (ASAP™ Charge).",
      waterResistance: "IPX4.",
      driverSize: "10mm.",
      latency: "50ms (BEAST™ Mode)."
    }
  },
  {
    id: 2,
    name: "IMNISHNAY Jellyfish Baby LED Night Light – 7-Color Changing Lamp for Kids, Baby Room Decor, Aesthetic Gifts for Girls, Boys , Friends & Ocean Lovers Night Lamps ( Hanging + Base ) (Jelly Fish)",
    description: "IMNISHNAY Jellyfish Baby👶 LED Night Light – Soothing Glow for Kids Transform your child’s room with the IMNISHNAY Jellyfish Baby LED Night Light💡. This adorable light emits a soft, calming glow in multiple colors, creating a serene ambiance perfect for bedtime or playtime.",
    video: "OctopusLamp.mp4",
    price: 1199,
    mrp: 1999,
    discountPercent: 40,
    ratingCount: 3900,
    link: "https://amzn.to/4dtP1co",
    rating: 5,
    dealEndTime: "11:59 PM IST, Tommorow",
    topHighlights: {
      brand: "IMNISHNAY.",
      colour: "Jelly Fish.",
      style: "Home Dècor.",
speciality: "Colour Changing & Rotating.",
      features: ["🏠 Modern & Minimalist Design: Elegant jellyfish-inspired lamp with floating, moving tentacles, blending seamlessly with any decor.","🌊 Soothing Motion Effect: The soft silicone tentacles sway naturally, creating a gentle, ocean-like movement perfect for relaxation.","💡 Warm LED Light for Cozy Atmosphere: Emits a soft, warm glow that’s easy on the eyes—ideal as a night light, mood lamp, or nursery decor.","🔋 Energy-Efficient & USB-Powered: Safe, low-power consumption with a USB connection, making it eco-friendly and long-lasting.","🎁 Perfect for Baby Room & Gift Idea: A wonderful addition to baby rooms, nurseries, kids' bedrooms, or as a unique gift for ocean lovers and decor enthusiasts"]
    },
    productSpecifications: {
      material: " Made of Plastic.",
      powerSource: "Battery🔋.",
      waterproof: "Yes🙌.",
      IncludedComponents:"Hanging Thread & Suction Cup Base!",
      LightSourceType: "LED.",
      NumberOfLights: "16."
    }
  },
  {
    id: 3,
    name: "WaterScience Tap Extension for Kitchen Sink | 2 Flow Modes | Flexible Faucet Extender for Taps | Aerators for Water Tap | Upto 50% Water Saving - Flexi Neck.",
    description: "💧WaterScience Tap Extension🚰 – Smart Water-Saving Solution for Your Kitchen💡.Upgrade your kitchen sink with the WaterScience Tap Extension🚰. Featuring two flow modes—Rain Mode🚿 for a gentle stream and Foam Mode🚰 for a focused spray—it saves up to 50% water🫧 without compromising performance. The flexible neck design makes washing dishes🍽 or filling pots effortless👍, while the durable stainless steel build ensures long-lasting use. Perfect for eco-conscious households looking to reduce water waste.",
    video: "TapExtender.mp4",
    price: 495,
    mrp: 995,
    discountPercent: 50,
    ratingCount: 3900,
    link: "https://amzn.to/4myuVlv",
    rating: 5,
    dealEndTime: "11:59 PM IST, Tommorow",
    topHighlights: {
      brand: "WaterScience🫧.",
      colour: "without filter.",
      features: ["🚰Flexible 6-inch neck - For easy & convenient washing.", "🌊2 flow modes - Rain mode & Foam mode to switch between a standard flow and a reduced flow in the kitchen.", "⏳Saves up to 50% water without compromising on functionality.", "Fits 22mm-24mm taps.", "Easy DIY installation. Easily fits into your existing faucets.", "📦Box contents: 1 Flexi kitchen tap extender, 1 adaptor and 1 washer."]
    },
    productSpecifications: {
      BrandName: "WaterScience.",
      ModelNumber: "Aera Flexi.",
      Manufacturer: "Aquagenics R&D India Private Limited.",
      ASIN: "B0CB75YYJQ.",
    ItemTypeName: "Kitchen Tap Extender.",
      IncludedComponents: "User Manual➡️ Tap Extender➡️Adapter.",
     ItemHeight: "5.3 Centimeters.",
      ItemWeight: "160 Grams.",
      PackerContactInformation: "care@waterscience.in",
      UnitCount: "1 Count."
    }
  },
  {
    id: 4,
    name: "Desidiya DIY 3D Acrylic Writing Board with Pen & Light Table Lamp | Led Writing Table Lamp for Kids Corded Electric Home & Office Decor Items, Gift, Bedside Night Light.",
    description: "Desidiya DIY 3D🪔 Acrylic Writing Board📝 – Creative LED Lamp for All Ages.Illuminate your space with the Desidiya DIY 3D Acrylic Writing Board. Its eye-caring LED👁 emits a soft, flicker-free glow, reducing eye strain during long reading📚, writing🖊, or working sessions. Personalize it with the included pen—perfect for kids👶’ doodles, notes, or as a glowing bedside lamp🔮. Crafted from durable acrylic and powered by a corded electric source, it’s a versatile addition to your home or office decor.",
    video: "LedPad.mp4",
    price: 249,
    mrp: 1699,
    discountPercent: 85,
    ratingCount: 3900,
    link: "https://amzn.to/44P7LRx",
    rating: 5,
    dealEndTime: "11:59 PM IST, Tommorow",
    topHighlights: {
      brand: "Desidiya.",
      colour: "White",
      features: ["🪔MULTI-FUNCTIONAL DESK LAMP - This versatile desk lamp comes with a built-in Corded Electric , helping you keep your essentials organized and within reach while you work or study With our Table Lamp cum Writing Board With 15 X 15 cm Screen.", "👁EYE-CARING LED - The lamp's LED lights emit a soft, flicker-free glow that reduces eye strain👀 and fatigue, making it perfect for extended reading📚, writing📝, or working sessions.","💡CUSTOMIZABLE BRIGHTNESS LAMP - 🤩Enjoy the perfect lighting for any activity with our reading📚 Table lamp's. Whether you're seeking vibrant radiance for focused work or a gentle glow for relaxation, these adaptable options ensure your lighting suits every activity.", "Soft, Ambient LED Illumination for Relaxation Emits a gentle, soothing glow that is easy on the eyes, making it ideal for use as a Table lamp or mood light. The warm illumination fosters a cozy environment, perfect for unwinding after a long day.","🎁Ideal Gift for Various Occasions With its charming design and practical functionality, this Table Lamp🔮 makes for a perfect gift for birthdays🥳, anniversaries, housewarmings, or festive occasions. It's a delightful present that combines aesthetics with utility."]
    },
    productSpecifications: {
      material: "Acrylic.",
      BaseMaterial: "Metal.",
      ItemWeight: "0.3 Kilograms.",
      LampType: "Table Lamp.",
      ShadeColour: "Transparent.",
      RecommendedUsesForProduct: "Reading, Decoration.",
      IncludedComponents: "1 X Stand With attached Wire, 13 X Pen, 1 X Acrylic Table Lamp.",
      NumberofItems: "1",
      IndoorOutdoorUsage: "Indoor.",
      ImporterContactInformation: "Contact: +91-7572888999, info@desidiya.com",
      Height: "16 Centimeters.",
      ASIN: "B0F8HP2BFH"
    }
  },
  {
    id: 5,
    name: "The Artment your artistic apartment Rubber TerraDry Stone Bathroom Diatomaceous Earth Shower Mat, Non-Slip Super Absorbent Quick Drying Bathroom Mat | Natural, Easy to Clean(35 X 45 CM)Rectangular.",
    description: "The Artment TerraDry Stone Bathroom Mat🛀 – Absorbent & Stylish Comfort.Step onto luxury with The Artment TerraDry Stone Bathroom Mat. Made from diatomaceous earth, this mat absorbs water💧 instantly, dries quickly✅, and prevents slips with its non-slip design. Measuring 35 x 45 cm, its natural stone finish adds a sleek, modern touch to your bathroom while being easy to clean. Ideal for keeping your floors dry and safe after showers or baths.",
    video: "BathMat.mp4",
    price: 908,
    mrp: 1524,
    discountPercent: 40,
    ratingCount: 3900,
    link: "https://amzn.to/4kfaKHM",
    rating: 5,
    dealEndTime: "11:59 PM IST, Tommorow",
    topHighlights: {
      brand: "The Artment your artistic apartment.",
      colour: "Natural.",
      material: "Diatomite.",
      size: "Regular",
      features: ["🤩Super Absorbent: Made from diatomaceous earth, this mat rapidly absorbs moisture, keeping your bathroom floor dry and safe.", "👍Non-Slip Design: Engineered for stability, it provides reliable traction to prevent slips and falls, enhancing bathroom safety.", "🌤Quick Drying: Unlike traditional fabric mats, it dries quickly, preventing mold and bacteria buildup for long-lasting freshness.","🤌Easy to Clean: Simply wipe or rinse the mat to maintain its pristine condition, saving you time and effort on maintenance.","❤🔥Stylish and Functional: With its minimalist design and natural earthy tones, this mat adds a touch of elegance to your bathroom while offering practical functionality"]
    },
    productSpecifications: {
      BrandName: "The Artment your artistic apartment.",
      material: "Diatomaceous Earth.",
      dimensions: "35 x 45 cm.",
      ASIN: "B0CL9W6NNT",
      ItemTypeName: "Diatomite Bathroom Stone Mat.",
      IncludedComponents: "Bath Stone Mat.",
      ItemHeight: "0.35 Inches.",
      Manufacturer: "The Artment (Top Decor Brand - +91-7042209992), The Artment (Top Decor Brand - +91-7042209992).",
      ManufacturerContactInformation: "The Artment (Top Decor Brand - +91-7042209992).",
      PackerContactInformation: "The Artment (Top Decor Brand - +91-7042209992).",
      ItemWeight: "1 Kilograms.",
      NumberofPieces: "1",
      BackMaterialType: "Rubber.",
      RoomType: "Bathroom.",
      ProductFeatures: "Absorbent, Non Slip.",
      ProductCareInstructions: "Hand Wash Only."
    }
  }
];





function ProductCard({ product, isActive, onActivate }) {
  const videoRef = useRef(null);
  const [aspectRatio, setAspectRatio] = useState(9 / 16);
  const [isVideoLoading, setIsVideoLoading] = useState(true);
  const [isHighlightsOpen, setIsHighlightsOpen] = useState(false);
  const [isSpecsOpen, setIsSpecsOpen] = useState(false);

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
    <div className="border rounded-lg p-4 shadow hover:shadow-lg relative text-white">
      <div
        className="w-full bg-black overflow-hidden relative text-white"
        style={{ aspectRatio: aspectRatio }}
      >
        {isVideoLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20">
            <ImSpinner2 className="text-white text-3xl animate-spin" />
          </div>
        )}
        <video
          alt={`Video for ${product.name}`}
          ref={videoRef}
          src={`/videos/${product.video}`}
          autoPlay={!isActive}
          muted={!isActive}
          loop
          preload="metadata"
          playsInline
          onCanPlay={() => setIsVideoLoading(false)}
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

        <div className="mt-2">
          <div className="inline-block bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded mb-1">
            Limited time deal{product.dealEndTime && ` - Ends at ${product.dealEndTime}`}
          </div>

          <div className="flex items-baseline space-x-2 mt-1">
            <span className="text-red-600 font-semibold text-xl">
              -{product.discountPercent}%
            </span>
          <span className="text-green-500 font-bold text-3xl">
              ₹{product.price}
            </span>
          </div>

          <div className="text-sm text-white line-through">
            M.R.P: ₹{product.mrp}
          </div>

          <div className="text-sm text-gray-700 mt-1">
            <span className="inline-flex items-center space-x-1">
              <span className="bg-gray-700 text-white text-xs px-2 py-0.5 rounded">
                Amazon
              </span>
 <span className="text-red-600">Inclusive of all taxes</span>
            </span>
          </div>
        </div>

        <i><b><p className="mb-4 mt-2" style={{ color: "white", letterSpacing: "2px" }}>{product.description}</p></b></i>

        {product.topHighlights && (
          <div className="mt-4">
            <button
              onClick={() => setIsHighlightsOpen(!isHighlightsOpen)}
              className="flex justify-between items-center w-full text-left text-lg font-semibold text-white"
            >
              Top Highlights
              {isHighlightsOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
            {isHighlightsOpen && (
              <div className="mt-2 text-sm text-white">
                {product.topHighlights.brand && (
                  <p><strong>Brand:</strong> {product.topHighlights.brand}</p>
                )}
                {product.topHighlights.speciality && (
                  <p><strong>speciality:</strong> {product.topHighlights.speciality}</p>
                )}
                {product.topHighlights.style && (
                  <p><strong>style:</strong> {product.topHighlights.style}</p>
                )}
                {product.topHighlights.colour && (
                  <p><strong>Colour:</strong> {product.topHighlights.colour}</p>
                )}
                {product.topHighlights.earPlacement && (
                  <p><strong>Ear Placement:</strong> {product.topHighlights.earPlacement}</p>
                )}
                {product.topHighlights.formFactor && (
                  <p><strong>Form Factor:</strong> {product.topHighlights.formFactor}</p>
                )}
                {product.topHighlights.noiseControl && (
                  <p><strong>Noise Control:</strong> {product.topHighlights.noiseControl}</p>
                )}
                {product.topHighlights.headphonesJack && (
                  <p><strong>Headphones Jack:</strong> {product.topHighlights.headphonesJack}</p>
                )}
                {product.topHighlights.features && (
                  <ul className="list-disc pl-5 mt-2">
                    {product.topHighlights.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </div>
        )}

        {product.productSpecifications && (
          <div className="mt-4">
            <button
              onClick={() => setIsSpecsOpen(!isSpecsOpen)}
              className="flex justify-between items-center w-full text-left text-lg font-semibold text-white"
            >
              Product Specifications
              {isSpecsOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
            {isSpecsOpen && (
           <div className="mt-2 text-sm text-white">
                {Object.entries(product.productSpecifications).map(([key, value]) => (
                  <p key={key}>
                    <strong>{key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}:</strong> {value}
                  </p>
                ))}
              </div>
            )}
          </div>
        )}

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
 <h1 className="text-4xl font-bold mb-6 text-green-500 text-center">Trending Products🔥</h1>
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


function App() {
  const { user, loading } = useContext(AuthContext);

  useEffect(() => {
  if (!loading && !user && !sessionStorage.getItem("hasShownPopup")) {
    const triggerSignIn = async () => {
      try {
        // Delay to ensure page is fully loaded
        await new Promise((resolve) => setTimeout(resolve, 500));
        await signInWithPopup(auth, googleProvider);
        sessionStorage.setItem("hasShownPopup", "true");
        toast.success("Signed in successfully!");
      } catch (error) {
        if (error.code !== "auth/popup-closed-by-user" && error.code !== "auth/cancelled-popup-request") {
          toast.error(`Sign-in failed: ${error.message}`);
        }
      }
    };
    triggerSignIn();
  }
}, [loading, user]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <ImSpinner2 className="text-4xl animate-spin" />
      </div>
    );
  }

  return (
    <Router>
      <Navbar />
      <Routes>
<Route path="/" element={<Home />} />
<Route path="/product/:id" element={<ProductDetails />} />
<Route path="/category/:name" element={<CategoryPage />} />
<Route
  path="/wishlist"
  element={
    <RequireAuth>
      <Wishlist />
    </RequireAuth>
  }
/>
<Route
 path="/cart"
  element={
    <RequireAuth>
      <Cart />
    </RequireAuth>
  }
/>
<Route path="/products" 
element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
     <Route path="/privacy"
     element={<Privacy />} />
     <Route path="/terms"
     element={<Terms />} />
     <Route path="/disclaimer"
     element={<Disclaimer />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default function RootApp() {
  return (
    <AuthProvider>
      <App />
      <ToastContainer position="top-right" autoClose={2000} />
    </AuthProvider>
  );
}

import { useContext, useEffect, useState, useRef } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { FaPlay, FaPause, FaVolumeMute, FaVolumeUp } from "react-icons/fa";
import './App.css';
import { FaMobileAlt, FaTools, FaUserFriends } from "react-icons/fa";
import { FaEnvelope, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { Menu, X } from "lucide-react";
import { HomeIcon, Box, Info, Phone } from "lucide-react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { ImSpinner2 } from "react-icons/im";
import { auth, googleProvider, signInWithPopup, signOut } from "./firebase";
import { AuthContext, AuthProvider } from "./AuthContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
      speciality: "Colour Changing & Rotoating.",
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

function Navbar() {
  const { user } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthLoading, setIsAuthLoading] = useState(false);
  const handleToggle = () => setIsOpen(!isOpen);
  const handleLinkClick = () => setIsOpen(false);

  const handleSignIn = async () => {
    setIsAuthLoading(true);
    try {
      await signInWithPopup(auth, googleProvider);
      toast.success("Signed in successfully!");
    } catch (error) {
      toast.error(`Sign-in failed: ${error.message}`);
    } finally {
      setIsAuthLoading(false);
    }
  };

  const handleSignOut = async () => {
    setIsAuthLoading(true);
    try {
      await signOut(auth);
      toast.success("Signed out successfully!");
    } catch (error) {
      toast.error(`Sign-out failed: ${error.message}`);
    } finally {
      setIsAuthLoading(false);
    }
  };

  // Default placeholder image URL
  const defaultProfilePic = "https://via.placeholder.com/40?text=User";

  return (
    <>
      <div className="fixed top-4 right-4 z-50 md:hidden bg-gray-800 p-2 rounded-full shadow-lg">
        <button onClick={handleToggle} className="text-white" aria-label={isOpen ? "Close menu" : "Open menu"}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      <nav className="bg-gray-800 text-white p-4">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold">Amazon Associate.in</h1>

          <div className="hidden md:flex space-x-4 items-center">
            <Link to="/" className="hover:text-gray-300">Home</Link>
            <Link to="/products" className="hover:text-gray-300">Products</Link>
            <Link to="/about" className="hover:text-gray-300">About</Link>
            <Link to="/contact" className="hover:text-gray-300">Contact</Link>
            {user ? (
              <div className="flex items-center space-x-2">
                <img
                  src={user.photoURL || defaultProfilePic}
                  alt="User profile"
                  className="w-8 h-8 rounded-full"
                  onError={(e) => (e.target.src = defaultProfilePic)} // Fallback on error
                />
                <span>{user.displayName || "User"}</span>
                <button
                  onClick={handleSignOut}
                  disabled={isAuthLoading}
                  className={`bg-red-600 px-3 py-1 rounded hover:bg-red-700 flex items-center space-x-2 ${isAuthLoading ? "opacity-50 cursor-not-allowed" : ""}`}
                >
                  {isAuthLoading ? <ImSpinner2 className="animate-spin" /> : "Sign Out"}
                </button>
              </div>
            ) : (
              <button
                onClick={handleSignIn}
                disabled={isAuthLoading}
                className={`bg-blue-600 px-3 py-1 rounded hover:bg-blue-700 flex items-center space-x-2 ${isAuthLoading ? "opacity-50 cursor-not-allowed" : ""}`}
              >
                {isAuthLoading ? <ImSpinner2 className="animate-spin" /> : "Sign In with Google"}
              </button>
            )}
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed top-0 left-0 h-full w-3/4 bg-black bg-opacity-50 text-white z-40 flex flex-col p-6 space-y-4 md:hidden shadow-xl text-center font-bold text-2xl"
          >
            <Link to="/" onClick={handleLinkClick} className="hover:text-gray-300">🛖 Home</Link>
            <Link to="/products" onClick={handleLinkClick} className="hover:text-gray-300">📦 Product</Link>
            <Link to="/about" onClick={handleLinkClick} className="hover:text-gray-300">❗ About</Link>
            <Link to="/contact" onClick={handleLinkClick} className="hover:text-gray-300">📞 Contact</Link>
            {user ? (
              <div className="flex flex-col items-center space-y-2">
                <img
                  src={user.photoURL || defaultProfilePic}
                  alt="User profile"
                  className="w-10 h-10 rounded-full"
                  onError={(e) => (e.target.src = defaultProfilePic)} // Fallback on error
                />
                <span>{user.displayName || "User"}</span>
                <button
                  onClick={handleSignOut}
                  disabled={isAuthLoading}
                  className={`bg-red-600 px-4 py-2 rounded hover:bg-red-700 flex items-center space-x-2 ${isAuthLoading ? "opacity-50 cursor-not-allowed" : ""}`}
                >
                  {isAuthLoading ? <ImSpinner2 className="animate-spin" /> : "Sign Out"}
                </button>
              </div>
            ) : (
              <button
                onClick={handleSignIn}
                disabled={isAuthLoading}
                className={`bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 flex items-center space-x-2 ${isAuthLoading ? "opacity-50 cursor-not-allowed" : ""}`}
              >
                {isAuthLoading ? <ImSpinner2 className="animate-spin" /> : "Sign In with Google"}
              </button>
            )}
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
        <h1 className="text-4xl font-bold mb-4 text-gray-800">
          🔥Top Amazon Picks Just for You🏷!
        </h1>
        <p className="text-lg text-gray-700 mb-6 italic" style={{ fontStyle: 'italic', letterSpacing: '2px' }}>
          At Amazon Associate.in, we handpick the best mobile accessories📱 and home gadgets to help you save time⏳ and money.💸 Our curated selection includes trending tech like the boAt Airdopes 311 Pro🎧, which offers exceptional sound quality🎶 and up to 20 hours of battery🔋 life—perfect for music lovers on the go🔥. We also feature innovative💡 home solutions like the WaterScience Tap Extension🚰, designed to save up to 50% water🫧 with its dual flow modes. Each product🏷 is chosen based on customer reviews📉, quality, and value, ensuring you get the best deals with discounts➡️-
          <span className="font-semibold text-green-600">Up to 85% off!</span>
        </p>
        <Link
          to="/products"
          className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg hover:bg-blue-700 transition"
        >
          Explore Products
        </Link>
      </div>

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
            <p className="text-sm text-gray-600 mt-1" style={{ letterSpacing: '2px' }}>Why we love it: {product.description}...</p>
            <span className="text-red-600 font-bold text-lg block mt-1">
              ₹{product.price} <span className="text-sm line-through text-gray-500">₹{product.mrp}</span>
            </span>
          </div>
        ))}
      </div>

      <div className="mt-12 grid md:grid-cols-3 gap-4 max-w-4xl mx-auto text-gray-700">
        <div className="p-4 border rounded-lg bg-white shadow text-center">
          <h4 className="font-bold text-xl">Fast Delivery</h4>
          <p className="text-sm" style={{ letterSpacing: '2px' }}>Get your products in 2-4 days via Amazon Prime lightning-fast shipping.</p>
        </div>
        <div className="p-4 border rounded-lg bg-white shadow text-center">
          <h4 className="font-bold text-xl">Up to 85% OFF</h4>
          <p className="text-sm" style={{ letterSpacing: '2px' }}>Enjoy massive discounts on handpicked items, curated for quality and value.</p>
        </div>
        <div className="p-4 border rounded-lg bg-white shadow text-center">
          <h4 className="font-bold text-xl">Amazon Verified</h4>
          <p className="text-sm" style={{ letterSpacing: '2px' }}>All links redirect to trusted Amazon listings for a secure shopping experience.</p>
        </div>
      </div>
    </div>
  );
}

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

        <i><b><p className="mb-4 mt-2" style={{ color: "black", letterSpacing: "2px" }}>{product.description}</p></b></i>

        {product.topHighlights && (
          <div className="mt-4">
            <button
              onClick={() => setIsHighlightsOpen(!isHighlightsOpen)}
              className="flex justify-between items-center w-full text-left text-lg font-semibold text-gray-800"
            >
              Top Highlights
              {isHighlightsOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
            {isHighlightsOpen && (
              <div className="mt-2 text-sm text-gray-700">
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
              className="flex justify-between items-center w-full text-left text-lg font-semibold text-gray-800"
            >
              Product Specifications
              {isSpecsOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
            {isSpecsOpen && (
              <div className="mt-2 text-sm text-gray-700">
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
      <h1 className="text-2xl font-bold mb-6">Featured Products</h1>
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
        <h1 className="text-4xl font-bold text-gray-800 mb-6">About Us</h1>
        <p className="text-lg text-gray-700 mb-8" style={{ letterSpacing: '1px' }}>
          At Amazon Associate.in, we’re on a mission to make online shopping smarter and more affordable. Founded in 2025, our team is passionate about finding the best deals on mobile accessories, smart home gadgets, and everyday essentials. We spend hours researching products, analyzing customer reviews, and testing items to ensure you get the highest quality at the best price. Whether you’re looking for a new pair of earbuds like the boAt Airdopes 311 Pro or a practical solution like the WaterScience Tap Extension, we’ve got you covered. Our affiliate links help us earn a small commission—at no extra cost to you—while connecting you to trusted Amazon listings. Join our community and start saving today!
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-white shadow rounded-lg flex flex-col items-center text-center">
            <FaMobileAlt className="text-3xl text-blue-500 mb-2" />
            <h2 className="font-bold text-xl mb-1">Mobile Accessories</h2>
            <p className="text-sm text-gray-600" style={{ letterSpacing: '3px' }}>We carefully select mobile gadgets like earbuds, chargers, and cases that are both affordable and highly rated by thousands of users.</p>
          </div>
          <div className="p-6 bg-white shadow rounded-lg flex flex-col items-center text-center">
            <FaTools className="text-3xl text-green-500 mb-2" />
            <h3 className="font-bold text-xl mb-1">Smart Utilities</h3>
            <p className="text-sm text-gray-600" style={{ letterSpacing: '3px' }}>Innovative tools and home improvements that make life easier With Energy-saving solutions and smart devices for a seamless home experience.</p>
          </div>
          <div className="p-6 bg-white shadow rounded-lg flex flex-col items-center text-center">
            <FaUserFriends className="text-3xl text-purple-500 mb-2" />
            <h4 className="font-bold text-xl mb-1">Trusted Reviews</h4>
            <p className="text-sm text-gray-600" style={{ letterSpacing: '3px' }}>Handpicked based on ratings, reviews & real customer satisfaction with Curated ratings and reviews you can rely on for smarter choices.</p>
            <p className="text-sm text-gray-600">Over 10,000 verified user reviews.</p>
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
        <p className="text-lg text-gray-700 mb-8 text-2xl" style={{ letterSpacing: '4px' }}>
          We’re here to help with any questions about our products or deals. Reach out to us via email, Instagram, or WhatsApp, and we’ll get back to you within 24 hours. Let’s find the perfect products together!
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
            <a href="https://www.instagram.com/night0__0owl" target="_blank" rel="noreferrer" className="text-gray-700 text-lg hover:underline">
              @night0__0owl
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
      <p>© 2025 Amazon Associate.in. All rights reserved.</p>
      <p>Help me earn a small commission when you buy using my affiliate links, at no extra cost to you.</p>
    </footer>
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
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      <ToastContainer position="top-right" autoClose={3000} />
    </Router>
  );
}

export default function RootApp() {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
}
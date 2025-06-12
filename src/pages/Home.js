import React, { useEffect, useState } from "react";
import {
  FaTruck,
  FaUndo,
  FaHeadset,
  FaTablet,
  FaSpinner,
  FaClock,
  FaLock,
} from "react-icons/fa";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const categoryIcons = {
  "Mobile Accessories": <FaTruck />,
  "Anime Products": <FaHeadset />,
  "Room Lights": <FaTablet />,
  "Anime Watches": <FaClock />,
  "Garden & Outdoor": <FaTruck />,
};

function Home() {
  const [categories, setCategories] = useState({});
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setCategories({
      "Mobile Accessories": [
        {
          name: "boAt Rockerz 255 Pro+ Bluetooth Neckband",
          image: "/images/boat-neckband.jpg",
          price: "$29.99",
          link: "https://www.amazon.in/dp/B098FKXT8L",
        },
        {
          name: "Samsung 25W USB-C Fast Charger",
          image: "/images/samsung-charger.jpg",
          price: "$19.99",
          link: "https://www.amazon.in/dp/B09MQ4MXJX",
        },
      ],
      "Anime Products": [
        {
          name: "Naruto Action Figure",
          image: "/images/naruto-figure.jpg",
          price: "$24.99",
          link: "https://www.amazon.in/dp/B08QZ2X2RX",
        },
        {
          name: "Attack on Titan Hoodie",
          image: "/images/aot-hoodie.jpg",
          price: "$34.99",
          link: "https://www.amazon.in/dp/B08L9LQ9YZ",
        },
      ],
      "Room Lights": [
        {
          name: "LED Strip Lights 10m",
          image: "/images/led-strip.jpg",
          price: "$14.99",
          link: "https://www.amazon.in/dp/B08F2XSL6N",
        },
        {
          name: "Sunset Projector Lamp",
          image: "/images/sunset-lamp.jpg",
          price: "$11.99",
          link: "https://www.amazon.in/dp/B094G9D8YF",
        },
      ],
      "Anime Watches": [
        {
          name: "One Piece Luffy Anime Watch",
          image: "/images/luffy-watch.jpg",
          price: "$21.99",
          link: "https://www.amazon.in/dp/B097N9JTVF",
        },
        {
          name: "Naruto LED Digital Watch",
          image: "/images/naruto-watch.jpg",
          price: "$18.49",
          link: "https://www.amazon.in/dp/B08FBN3QXM",
        },
      ],
      "Garden & Outdoor": [
        {
          name: "Plastic Gardening Tool Set (5 pcs)",
          image: "/images/garden-tools.jpg",
          price: "$12.99",
          link: "https://www.amazon.in/dp/B07DLVXQ76",
        },
        {
          name: "Solar Garden Decorative Lights",
          image: "/images/garden-lights.jpg",
          price: "$23.99",
          link: "https://www.amazon.in/dp/B09BQ8Y9L8",
        },
      ],
    });
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  const filteredCategories = Object.fromEntries(
    Object.entries(categories).filter(([category]) =>
      category.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div className="font-sans bg-white text-gray-800">
      {/* Search Bar */}
      <div className="w-full bg-yellow-100 py-6 px-4 flex justify-center items-center gap-3">
        <input
          type="text"
          placeholder="Search Categories..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full max-w-xl px-4 py-2 border border-yellow-400 rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
        />
        {searchTerm && <FaSpinner className="animate-spin text-yellow-600 text-lg" />}
      </div>

      {/* Category Sections */}
      {Object.keys(filteredCategories).map((category) => (
        <motion.section
          key={category}
          id={category.replace(/\s+/g, "-")}
          className="py-10 px-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-7xl mx-auto">
            {/* Hero Slider */}
            <Slider {...sliderSettings}>
              {filteredCategories[category].map((product, index) => (
                <div key={index} className="relative">
                  <img
                    src={product.image}
                    alt={`Hero for ${category}`}
                    className="w-full h-64 object-cover rounded-xl"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center rounded-xl">
                    <h2 className="text-white text-2xl font-bold text-center">
                      {product.name}
                    </h2>
                  </div>
                </div>
              ))}
            </Slider>

            {/* Category Title */}
            <h3 className="text-2xl font-bold mt-10 mb-6 text-center">{category}</h3>

            {/* Products Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {filteredCategories[category].map((product, i) => (
                <div
                  key={`${category}-${i}`}
                  className="bg-white border rounded-lg p-4 text-center hover:shadow-lg transition"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-32 mx-auto object-contain"
                  />
                  <h4 className="mt-2 text-gray-700 font-medium">{product.name}</h4>
                  <p className="text-yellow-500 font-bold">{product.price}</p>
                  <a
                    href={product.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="mt-2 text-sm text-white bg-yellow-500 px-3 py-1 rounded hover:bg-yellow-600">
                      View on Amazon
                    </button>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </motion.section>
      ))}

      {/* Bottom Category Icons Navigation */}
      <div className="w-full flex overflow-x-auto px-4 py-4 bg-black sticky bottom-0 z-50">
        {Object.keys(categories).map((category) => (
          <a
            key={category}
            href={`#${category.replace(/\s+/g, "-")}`}
            className="flex flex-col items-center justify-center mx-3 text-white hover:text-yellow-400 transition"
          >
            <div className="text-2xl">
              {categoryIcons[category] || <FaLock />}
            </div>
            <span className="text-xs mt-1 whitespace-nowrap">{category}</span>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Home;

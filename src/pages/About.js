import React from "react";
import { FaMobileAlt, FaTools, FaUserFriends } from "react-icons/fa";
import { Helmet } from "react-helmet";

function About() {
  return (
    <div className="bg-[#0f172a] text-white min-h-screen py-12 px-4 sm:px-8 lg:px-16">
      <Helmet>
        <title>About Us | Amazon Associate India</title>
        <meta
          name="description"
          content="Discover Amazon Associate.in — your trusted source for reviews on mobile accessories, smart utilities, and more. Learn how we help Indian shoppers make smart buying decisions."
        />
        <meta
          name="keywords"
          content="Amazon Associate India, about us, mobile accessories, smart home gadgets, trusted reviews, amazon affiliate, shopping guide"
        />
      </Helmet>

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-white mb-4">About Us</h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Helping you discover affordable and top-rated tech products with confidence — that’s our promise.
          </p>
        </div>

        {/* Introduction */}
        <div className="text-gray-300 text-lg mb-14 leading-8 space-y-4 text-justify">
          <p>
            Welcome to <strong>Amazon Associate.in</strong> — your trusted destination for discovering top-rated and affordable mobile accessories, smart gadgets, and home utility products. Founded in 2025, our platform is built by passionate tech enthusiasts who are dedicated to simplifying your online shopping experience.
          </p>
          <p>
            Our mission is to ensure that every product you explore through our site is worth your time and money. From the latest earbuds like the boAt Airdopes 311 Pro to essential tools like WaterScience Tap Extensions, we curate selections that stand out in performance and affordability — all backed by customer insights and in-depth research.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-10 mb-20">
          {[
            {
              icon: <FaMobileAlt className="text-3xl text-blue-400 mx-auto mb-3" />,
              title: "Mobile Accessories",
              img: "/assets/mobile.jpg",
              desc: "We handpick high-performance mobile accessories — from earbuds and screen guards to fast chargers — based on real user reviews and reliability.",
            },
            {
              icon: <FaTools className="text-3xl text-green-400 mx-auto mb-3" />,
              title: "Smart Utilities",
              img: "/assets/smart-utility.jpg",
              desc: "Explore smart home and utility gadgets that simplify life — from energy-saving devices to practical, everyday innovations.",
            },
            {
              icon: <FaUserFriends className="text-3xl text-purple-400 mx-auto mb-3" />,
              title: "Trusted Reviews",
              img: "/assets/reviews.jpg",
              desc: "Our reviews are based on deep research, real user feedback, and verified ratings — making your choices smarter and more confident.",
              note: "10,000+ verified customer reviews analyzed.",
            },
          ].map((card, i) => (
            <div
              key={i}
              className="bg-[#1e293b] rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-1"
            >
              <img src={card.img} alt={card.title} className="w-full h-48 object-cover rounded-t-2xl" />
              <div className="p-6 text-center">
                {card.icon}
                <h3 className="text-xl font-semibold mb-2 text-white">{card.title}</h3>
                <p className="text-sm text-gray-300">{card.desc}</p>
                {card.note && <p className="text-xs text-gray-400 mt-2">{card.note}</p>}
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Sections with Images */}
       <div className="space-y-20 text-gray-200 text-center">
          {[
            {
              title: "Who We Are?",
              text: "We are a passionate team of tech lovers, product reviewers, and smart shoppers. Our mission is to empower Indian consumers to make confident purchases without confusion.",
              img: "/assets/Anonymous.jpg",
            },
            {
              title: "Why Trust Us?",
              text: "We stand out by combining human insight with data-driven analysis. Every product we feature has gone through our checklist: high rating, fair price, genuine reviews, and long-term usefulness.",
              img: "/assets/Trust.jpg",
            },
            {
              title: "How We Earn💸",
              text: "We earn through the Amazon Associates Program. That means we may earn a small commission if you buy a product through our links — at no extra cost to you. This keeps the site alive and free for all.",
              img: "/assets/Earn.jpg",
            },
            {
              title: "Our Vision",
              text: "To become India’s most trusted platform for tech-based affiliate content. We want to eliminate confusion in online shopping and help users save time, money, and frustration.",
              img: "/assets/Vision.jpg",
            },
            {
              title: "Join the Community",
              text: "Follow us on social media, subscribe to our newsletter, and become part of our growing network of smart, informed buyers. Your feedback helps us improve and grow!",
              img: "/assets/Community.jpg",
            },
          ].map((section, index) => (
            <div
              key={index}
              className={`flex flex-col lg:flex-row ${
                index % 2 !== 0 ? "lg:flex-row-reverse" : ""
              } items-center gap-8 bg-[#1e293b] p-6 rounded-2xl shadow-md`}
            >
              <img
                src={section.img}
                alt={section.title}
                className="w-full lg:w-1/2 h-64 object-cover rounded-xl shadow-lg"
              />
              <div className="lg:w-1/2">
                <h2 className="text-3xl font-bold text-orange-400 mb-3">{section.title}</h2>
                <p className="text-lg leading-relaxed text-gray-200">{section.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
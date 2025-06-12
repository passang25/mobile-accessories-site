import React from "react";
import { FaEnvelope, FaInstagram, FaWhatsapp } from "react-icons/fa";

function Contact() {
  return (
    <div className="bg-gray-900 text-white min-h-screen py-12 px-4 sm:px-8 lg:px-16">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-6">Contact Us</h2>
        <p className="text-lg text-gray-300 text-center mb-12 leading-8">
          Whether you have questions about our affiliate products, need help finding the perfect deal, or just want to chat about the latest trends in tech,
          we're here for you. At <strong className="text-cyan-400">Night Owl Accessories</strong>, we value your time and are committed to providing top-notch customer support.
          Reach out to us using any of the methods below — we typically respond within 24 hours.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-red-400 text-2xl" />
              <a href="mailto:outlookdeathless@email.com" className="hover:underline text-lg">
                outlookdeathless@email.com
              </a>
            </div>

            <div className="flex items-center gap-4">
              <FaInstagram className="text-pink-500 text-2xl" />
              <a href="https://www.instagram.com/night0__0owl" target="_blank" rel="noreferrer" className="hover:underline text-lg">
                @night0__0owl
              </a>
            </div>

            <div className="flex items-center gap-4">
              <FaWhatsapp className="text-green-500 text-2xl" />
              <span className="text-lg">+91-9547104771</span>
            </div>

            <p className="text-gray-400 pt-6">
              Our support team is available Monday to Saturday, 10AM to 6PM IST. If you're reaching out outside of these hours, feel free to leave a message —
              we’ll make sure to get back to you as soon as possible. Your satisfaction is our priority.
            </p>
          </div>

          {/* Image Section */}
          <div className="rounded-xl overflow-hidden shadow-lg border border-gray-700">
            <img
              src="https://images.unsplash.com/photo-1588702547923-7093a6c3ba33?auto=format&fit=crop&w=800&q=80"
              alt="Contact us"
              className="w-full h-80 object-cover"
            />
          </div>
        </div>

        {/* More Info Section */}
        <div className="mt-16 bg-gray-800 rounded-xl p-8 shadow-md">
          <h3 className="text-2xl font-semibold text-cyan-300 mb-4">Why Reach Out?</h3>
          <p className="text-gray-300 leading-7 mb-4">
            Our Amazon affiliate platform is designed to simplify your shopping journey. We research, review, and handpick the best tech and lifestyle products
            so you can make smarter choices — faster. Whether it's smartphone accessories, trending gadgets, or value-for-money deals, we've got you covered.
          </p>
          <p className="text-gray-300 leading-7 mb-4">
            If you’d like to suggest a product, report a broken link, collaborate with us for affiliate campaigns, or just want to give feedback, we encourage
            you to contact us. Your insights and questions help us grow and provide better content for everyone.
          </p>
          <p className="text-gray-300 leading-7">
            Thank you for visiting <strong className="text-cyan-400">Night Owl Accessories</strong> — your trusted source for curated tech deals and honest reviews.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
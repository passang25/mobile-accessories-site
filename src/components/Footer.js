import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-slate-800 to-gray-900 text-white mt-10 rounded-t-2xl shadow-inner">
      {/* Newsletter & Message */}
      <div className="text-center px-6 py-8">
        <h2 className="text-2xl font-bold mb-2">Thanks for Visiting!</h2>
        <p className="text-gray-300 max-w-md mx-auto">
          Help me earn a small commission by purchasing through my affiliate links — it costs you nothing extra but supports the site ❤️
        </p>
      </div>

      {/* Grid Links */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 px-6 pb-8 text-sm text-gray-300 text-center sm:text-left">
        <div>
          <h3 className="font-semibold text-white mb-2">Quick Links</h3>
          <ul className="space-y-1">
            <li><a href="/">Home</a></li>
            <li><a href="/products">Top Deals</a></li>
            <li><a href="/about">About Me</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-white mb-2">Support</h3>
          <ul className="space-y-1">
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/terms">Terms & Conditions</a></li>
            <li><a href="/disclaimer">Affiliate Disclaimer</a></li>
            <li><a href="/faq">FAQs</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-white mb-2">Follow Me</h3>
          <div className="flex justify-center sm:justify-start gap-4 text-lg">
            <a href="#" className="hover:text-blue-500"><FaFacebookF /></a>
            <a 
  href="https://www.instagram.com/night0__0owl" 
  target="_blank" 
  rel="noopener noreferrer" 
  className="hover:text-pink-400"
>
  <FaInstagram />
</a>
            <a href="#" className="hover:text-sky-400"><FaTwitter /></a>
            <a href="#" className="hover:text-red-500"><FaYoutube /></a>
          </div>
        </div>
        <div>
          <h3 className="font-semibold text-white mb-2">Language</h3>
          <select className="bg-gray-700 text-white p-2 rounded w-full">
            <option>English</option>
            <option>Hindi</option>
            <option>Bengali</option>
            <option>Tamil</option>
          </select>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="text-xs text-gray-400 border-t border-gray-700 py-4 text-center">
        <p>© 2025 YourAffiliateBrand.com — Built with ❤️ using React</p>
      </div>
    </footer>
  );
}

export default Footer;
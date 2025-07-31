import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
 <footer className="bg-gradient-to-r from-slate-900 to-gray-950 text-white mt-10 rounded-t-2xl shadow-inner border-t-4 border-purple-800 drop-shadow-[0_0_30px_rgba(147,51,234,0.6)]">
{/* Newsletter & Message */}
<div className="text-center px-6 py-8">
 <h2 className="text-3xl font-bold mb-2 text-neonPink drop-shadow-neon">Thanks for Visiting!</h2>
<p className="text-purple-300 max-w-md mx-auto">
Help me earn a small commission by purchasing through my affiliate links — it costs you nothing extra but supports the site ❤️
</p>
 </div>

{/* Grid Links */}
 <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 px-6 pb-8 text-sm text-purple-300 text-center sm:text-left">
 <div>
 <h3 className="font-semibold text-neonGreen mb-2 drop-shadow-neon">Quick Links</h3>
 <ul className="space-y-1">
 <li><a href="/" className="hover:text-neonBlue">Home</a></li>
 <li><a href="/products" className="hover:text-neonBlue">Top Deals</a></li>
 <li><a href="/about" className="hover:text-neonBlue">About Me</a></li>
<li><a href="/contact" className="hover:text-neonBlue">Contact</a></li>
 </ul>
 </div>
 <div>
 <h3 className="font-semibold text-neonGreen mb-2 drop-shadow-neon">Support</h3>
 <ul className="space-y-1">
 <li><a href="/privacy" className="hover:text-neonBlue">Privacy Policy</a></li>
 <li><a href="/terms" className="hover:text-neonBlue">Terms & Conditions</a></li>
 <li><a href="/disclaimer" className="hover:text-neonBlue">Affiliate Disclaimer</a></li>
 <li><a href="/faq" className="hover:text-neonBlue">FAQs</a></li>
 </ul>
</div>
<div>
 <h3 className="font-semibold text-neonGreen mb-2 drop-shadow-neon">Follow Me</h3>
 <div className="flex justify-center sm:justify-start gap-4 text-xl">
 <a href="#" className="hover:text-blue-500 transition duration-300 transform hover:scale-110"><FaFacebookF /></a>
 <a
 href="https://www.instagram.com/night0__0owl"
 target="_blank"
 rel="noopener noreferrer"
className="hover:text-pink-400 transition duration-300 transform hover:scale-110"
 >
<FaInstagram />
 </a>
 <a href="#" className="hover:text-sky-400 transition duration-300 transform hover:scale-110"><FaTwitter /></a>
<a href="#" className="hover:text-red-500 transition duration-300 transform hover:scale-110"><FaYoutube /></a>
 </div>
 </div>
 <div>
 <h3 className="font-semibold text-neonGreen mb-2 drop-shadow-neon">Language</h3>
 <select className="bg-gray-800 text-white p-2 rounded w-full border border-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500">
 <option>English</option>
 <option>Hindi</option>
 <option>Bengali</option>
<option>Tamil</option>
 </select>
 </div>
</div>

 {/* Bottom Note */}
<div className="text-xs text-purple-400 border-t border-purple-700 py-4 text-center">
<p>© 2025 YourAffiliateBrand.com — Built with 💖 using React</p>
 </div>
 </footer>
 );
}

export default Footer;

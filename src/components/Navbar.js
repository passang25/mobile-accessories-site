import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { auth, googleProvider, signOut } from "../firebase";
import { signInWithPopup } from 'firebase/auth';
import { AuthContext } from "../AuthContext";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { ImSpinner2 } from "react-icons/im";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
      if (error.code === "auth/popup-closed-by-user") {
        toast.info("Sign-in was cancelled by the user.");
      } else {
        toast.error(`Sign-in failed: ${error.message}`);
      }
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

  const defaultProfilePic = "https://via.placeholder.com/40?text=User";

  return (
    <>
      {/* Toggle Button */}
      <div className="fixed top-2 right-4 z-50 md:hidden p-2 bg-black bg-opacity-90 rounded-full">
        <button onClick={handleToggle} className="text-white">
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Navbar */}
      <nav className="bg-gradient-to-b from-black via-purple-900 to-black text-white p-4 shadow fixed top-0 w-full z-30">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold text-neonBlue drop-shadow-neon">Shóp$hævy.îñ🛍</h1>
          <div className="hidden md:flex space-x-4 items-center">
 <Link to="/" className="hover:text-neonGreen">Home</Link>
 <Link to="/products" className="hover:text-neonPink">Products</Link>
 <Link to="/about" className="hover:text-indigo-400">About</Link>
 <Link to="/contact" className="hover:text-yellow-400">Contact</Link>
 <Link to="/privacy" className="text-blue-400 hover:underline">Privacy</Link>
<Link to="/terms" className="text-blue-400 hover:underline">Terms</Link>
<Link to="/disclaimer" className="text-blue-400 hover:underline">Disclaimer</Link>

            {user ? (
   <div className="flex items-center space-x-2">
          <img
  src={user.photoURL || defaultProfilePic}
   alt="User"
  className="w-8 h-8 rounded-full"
  onError={(e) => (e.target.src = defaultProfilePic)}
                />
 <span>{user.displayName || "User"}</span>
     <button
   onClick={handleSignOut}
   disabled={isAuthLoading}
  className={`bg-red-600 px-3 py-1 rounded hover:bg-red-700 flex items-center space-x-2 ${
   isAuthLoading ? "opacity-50 cursor-not-allowed" : ""
          }`}
     >
 {isAuthLoading ? <ImSpinner2 className="animate-spin" /> : "Sign Out"}
             </button>
          </div>
        ) : (
          <button
     onClick={handleSignIn}
    disabled={isAuthLoading}
  className={`bg-blue-600 px-3 py-1 rounded hover:bg-blue-700 flex items-center space-x-2 ${
  isAuthLoading ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
 {isAuthLoading ? <ImSpinner2 className="animate-spin" /> : "Sign In with Google"}
        </button>
            )}
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "tween", duration: 0.3 }}
 className="fixed top-0 left-0 w-2/3 h-full bg-black text-white z-50 flex flex-col p-6 space-y-4 md:hidden pt-16 text-center"
          >
            <Link to="/" onClick={handleLinkClick}>🏠 Home</Link>
            <Link to="/products" onClick={handleLinkClick}>📦 Products</Link>
            <Link to="/about" onClick={handleLinkClick}>❗ About</Link>
            <Link to="/contact" onClick={handleLinkClick}>☎ Contact</Link>
            <Link to="/privacy" onClick={handleLinkClick}>🔒 Privacy</Link>
            <Link to="/terms" onClick={handleLinkClick}>📝 Terms</Link>
            <Link to="/disclaimer" onClick={handleLinkClick}>⚠️ Disclaimer</Link>

            {user ? (
              <div className="flex flex-col items-center space-y-2">
                <img
                  src={user.photoURL || defaultProfilePic}
                  alt="User"
                  className="w-10 h-10 rounded-full"
                  onError={(e) => (e.target.src = defaultProfilePic)}
                />
                <span>{user.displayName || "User"}</span>
                <button
                  onClick={handleSignOut}
                  disabled={isAuthLoading}
                  className={`bg-red-600 px-4 py-2 rounded hover:bg-red-700 ${
                    isAuthLoading ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  {isAuthLoading ? <ImSpinner2 className="animate-spin" /> : "Sign Out"}
                </button>
              </div>
            ) : (
              <button
                onClick={handleSignIn}
                disabled={isAuthLoading}
                className={`bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 ${
                  isAuthLoading ? "opacity-50 cursor-not-allowed" : ""
                }`}
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

export default Navbar;

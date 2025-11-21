import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logoImage from '../public/logo.jpg';

export default function Navbar({ triggerLogin }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (triggerLogin) {
      setIsLoggedIn(true);
      // You can add additional login logic here
    }
  }, [triggerLogin]);

  const handleLogin = () => {
    setIsLoggedIn(true);
    // You can add additional login logic here
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-black/90 via-onyx/85 to-primary-900/80 backdrop-blur-sm border-b border-white/5">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-4">
            <img src={logoImage} alt="Logo" className="w-16 h-16 rounded-full object-cover" />
            <span className="text-4xl font-display font-semibold text-white tracking-[0.2rem]">Vision</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-slate-100 hover:text-accent-400 transition-colors">
              Home
            </Link>
            <a href="#features" className="text-slate-100 hover:text-accent-400 transition-colors">
              Features
            </a>
            <Link to="/about" className="text-slate-100 hover:text-accent-400 transition-colors">
              About Us
            </Link>
            {isLoggedIn ? (
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary-500 to-primary-300 flex items-center justify-center text-white font-semibold shadow-lg shadow-primary-500/30">
                  U
                </div>
              </div>
            ) : (
              <button
                onClick={handleLogin}
                  className="px-6 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-400 transition-colors shadow-md shadow-primary-500/30"
              >
                Login
              </button>
            )}
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <Link
              to="/"
              className="block text-slate-100 hover:text-accent-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <a
              href="#features"
              className="block text-slate-100 hover:text-accent-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <Link
              to="/about"
              className="block text-slate-100 hover:text-accent-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            {isLoggedIn ? (
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary-500 to-primary-300 flex items-center justify-center text-white font-semibold shadow-lg shadow-primary-500/30">
                  U
                </div>
              </div>
            ) : (
              <button
                onClick={handleLogin}
                className="w-full px-6 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-400 transition-colors shadow-md shadow-primary-500/30"
              >
                Login
              </button>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}


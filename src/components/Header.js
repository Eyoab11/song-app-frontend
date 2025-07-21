import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 w-[90vw] max-w-6xl bg-black/70 backdrop-blur-md rounded-2xl shadow-lg z-50 flex items-center justify-between px-8 py-4">
      <div className="flex items-center space-x-3">
        <i className="fas fa-music text-spotify-green text-3xl"></i>
        <span className="text-2xl font-extrabold tracking-tight text-white">MelodyHub</span>
      </div>
      {/* Desktop Nav */}
      <div className="hidden md:flex items-center space-x-8">
        <Link to="/" className="text-white text-lg font-medium hover:text-spotify-green transition">Home</Link>
        <Link to="/features" className="text-white text-lg font-medium hover:text-spotify-green transition">Features</Link>
        <Link to="/artists" className="text-white text-lg font-medium hover:text-spotify-green transition">Artists</Link>
        <Link to="/contact" className="text-white text-lg font-medium hover:text-spotify-green transition">Contact</Link>
      </div>
      <div className="hidden md:flex items-center space-x-4">
        <Link to="/signup" className="bg-spotify-green hover:bg-green-600 text-black font-bold px-5 py-2 rounded-full shadow transition">
          Sign Up
        </Link>
      </div>
      {/* Mobile Hamburger */}
      <div className="md:hidden flex items-center">
        <button
          className="text-white focus:outline-none"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle menu"
        >
          <i className={menuOpen ? 'fas fa-times text-2xl' : 'fas fa-bars text-2xl'}></i>
        </button>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-black/95 rounded-b-2xl shadow-lg flex flex-col items-center py-6 space-y-4 md:hidden animate-fade-in z-50">
          <Link to="/" className="text-white text-lg font-medium hover:text-spotify-green transition" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/features" className="text-white text-lg font-medium hover:text-spotify-green transition" onClick={() => setMenuOpen(false)}>Features</Link>
          <Link to="/artists" className="text-white text-lg font-medium hover:text-spotify-green transition" onClick={() => setMenuOpen(false)}>Artists</Link>
          <Link to="/contact" className="text-white text-lg font-medium hover:text-spotify-green transition" onClick={() => setMenuOpen(false)}>Contact</Link>
          <Link to="/signup" className="bg-spotify-green hover:bg-green-600 text-black font-bold px-5 py-2 rounded-full shadow transition" onClick={() => setMenuOpen(false)}>
            Sign Up
          </Link>
        </div>
      )}
      <style>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(-10px);} to { opacity: 1; transform: translateY(0);} }
        .animate-fade-in { animation: fadeIn 0.2s ease; }
      `}</style>
    </nav>
  );
};

export default Header; 
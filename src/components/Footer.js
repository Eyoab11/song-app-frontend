import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black py-10 mt-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <div className="flex items-center space-x-3 mb-4 md:mb-0">
            <i className="fas fa-music text-spotify-green text-2xl"></i>
            <span className="text-xl font-extrabold text-white">MelodyHub</span>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-white hover:text-spotify-green font-medium transition">About</a>
            <a href="#" className="text-white hover:text-spotify-green font-medium transition">Features</a>
            <a href="#" className="text-white hover:text-spotify-green font-medium transition">Help</a>
            <a href="#" className="text-white hover:text-spotify-green font-medium transition">Legal</a>
          </div>
        </div>
        <div className="border-t border-spotify-green pt-6 text-center text-spotify-green text-sm">
          <p>© 2025 MelodyHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 
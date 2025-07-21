import React from 'react';
import { API_ENDPOINTS } from '../config/api';

const bgUrl = 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1500&q=80'; // Royalty-free piano/music image

const HeroSection = () => (
  <section
    className="relative flex items-center justify-center min-h-screen w-full bg-black"
    style={{ backgroundImage: `url('${bgUrl}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
  >
    <div className="absolute inset-0 bg-black opacity-70"></div>
    <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 w-full">
      <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-spotify-green drop-shadow-lg">
        Song Management App
      </h1>
      <p className="text-lg md:text-xl text-white mb-8 max-w-2xl">
        A full-stack music library project for Addis Software. Browse, add, edit, and manage your favorite tracks with a beautiful React frontend, Redux Toolkit, and a REST API backend. Built from scratch with custom Webpack, modern UI, and a passion for music.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a 
          href="https://github.com/Eyoab11/song-app-frontend" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-white text-black font-bold py-3 px-8 rounded shadow hover:bg-spotify-green/80 transition"
        >
          View Frontend
        </a>
        <a 
          href="https://github.com/Eyoab11/Song_Management_Backend" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-spotify-green text-white font-bold py-3 px-8 rounded shadow hover:bg-green-600 transition"
        >
          View Backend
        </a>
        <a 
          href={API_ENDPOINTS.API_DOCS}
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-blue-600 text-white font-bold py-3 px-8 rounded shadow hover:bg-blue-700 transition"
        >
          API Docs
        </a>
      </div>
    </div>
  </section>
);

export default HeroSection; 
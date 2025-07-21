import React from 'react';

const gifs = [
  'https://media.giphy.com/media/13HgwGsXF0aiGY/giphy.gif', 
  'https://media.giphy.com/media/26xBwdIuRJiAIqHwA/giphy.gif', 
  'https://media.giphy.com/media/5VKbvrjxpVJCM/giphy.gif', 
  'https://media.giphy.com/media/3o6Zt481isNVuQI1l6/giphy.gif', 
];
const randomGif = gifs[Math.floor(Math.random() * gifs.length)];

const NotImplementedPage = ({ page }) => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white animate-fade-in">
    <img src={randomGif} alt="Not implemented" className="w-64 h-64 object-contain mb-8 rounded-xl shadow-lg animate-bounce" />
    <h1 className="text-4xl font-extrabold mb-4 animate-pulse text-center w-full">{page} Page Not Implemented Yet</h1>
    <p className="text-lg text-spotify-green mb-8 animate-fade-in text-center w-full">We're working on it! Please check back soon.</p>
    <a href="/" className="bg-spotify-green hover:bg-green-600 text-black font-bold px-6 py-3 rounded-full transition shadow-lg animate-fade-in">Back to Home</a>
    <style>{`
      @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
      .animate-fade-in { animation: fadeIn 0.6s ease; }
    `}</style>
  </div>
);

export default NotImplementedPage; 
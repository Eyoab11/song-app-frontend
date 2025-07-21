import React from 'react';

const LoadingScreen = () => (
  <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
    
    <i className="fas fa-guitar text-spotify-green text-8xl animate-spin-slow"></i>
  </div>
);

export default LoadingScreen;

import React from 'react';
import { useNavigate } from 'react-router-dom';

const fallbackImage = 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80';

const SongCard = ({ title, artist, album, year, published, image_url, location, description, onEdit, onDelete, id }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/songs/${id}`);
  };

  return (
    <div
      className="rounded-xl overflow-hidden shadow-lg flex flex-col h-full cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-2xl group bg-[#2c2c2c]"
      onClick={handleCardClick}
      tabIndex={0}
      aria-label={`View details for ${title}`}
    >
      <div className="h-48 w-full overflow-hidden">
        <img src={image_url || fallbackImage} alt={title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-300" loading="lazy" />
      </div>
      <div className="flex-1 flex flex-col p-6">
        <div className="flex items-center mb-2">
          <i className="fas fa-music text-spotify-green mr-2"></i>
          <span className="text-white text-lg font-bold">{title}</span>
        </div>
        <div className="flex items-center text-spotify-light-gray text-sm mb-2">
          <i className="fas fa-user mr-1 text-spotify-green"></i>
          <span className="font-semibold mr-2">Artist:</span> {artist}
        </div>
        <div className="flex items-center text-spotify-light-gray text-sm mb-2">
          <i className="fas fa-compact-disc mr-1 text-spotify-green"></i>
          <span className="font-semibold mr-2">Album/EP:</span> {album}
        </div>
        <div className="flex items-center text-spotify-light-gray text-sm mb-2">
          <i className="fas fa-calendar-alt mr-1 text-spotify-green"></i>
          <span className="font-semibold mr-2">Release Year:</span> {year}
        </div>
        {published && (
          <div className="flex items-center text-spotify-light-gray text-sm mb-2">
            <i className="fas fa-clock mr-1 text-spotify-green"></i>
            <span className="font-semibold mr-2">Published:</span> {published}
          </div>
        )}
        <div className="flex items-center text-spotify-light-gray text-sm mb-2">
          <i className="fas fa-map-marker-alt mr-1 text-spotify-green"></i>
          <span className="font-semibold mr-2">Location:</span> {location || 'Unknown'}
        </div>
        <div className="text-spotify-light-gray text-sm mb-4 line-clamp-2">
          {description}
        </div>
        <div className="mt-auto flex space-x-2">
          <button
            className="bg-spotify-green hover:bg-green-600 text-black font-bold px-4 py-2 rounded transition w-full shadow-md hover:shadow-lg"
            onClick={e => { e.stopPropagation(); handleCardClick(); }}
          >
            Details
          </button>
          <button className="edit-btn text-spotify-light-gray hover:text-spotify-green transition" onClick={e => { e.stopPropagation(); onEdit(); }} title="Edit">
            <i className="fas fa-edit"></i>
          </button>
          <button className="delete-btn text-spotify-light-gray hover:text-red-500 transition" onClick={e => { e.stopPropagation(); onDelete(); }} title="Delete">
            <i className="fas fa-trash"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SongCard; 
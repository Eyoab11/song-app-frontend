import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { API_URLS } from '../config/api';

const fallbackImage = 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80';

const SongDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [song, setSong] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(`${API_URLS.SONGS}/${id}`)
      .then(res => {
        if (!res.ok) throw new Error('Song not found');
        return res.json();
      })
      .then(data => {
        setSong(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black">
        <i className="fas fa-guitar text-spotify-green text-8xl animate-spin-slow"></i>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
        <h1 className="text-3xl font-bold mb-4">Song Not Found</h1>
        <button className="bg-spotify-green hover:bg-green-600 text-black font-bold px-6 py-3 rounded-full transition" onClick={() => navigate(-1)}>
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-black px-4 py-12">
      <div className="bg-[#232526] rounded-2xl shadow-2xl p-10 max-w-xl w-full border border-spotify-green/30">
        <div className="flex flex-col items-center mb-6">
          <img
            src={song.image_url || fallbackImage}
            alt={song.title}
            className="w-48 h-48 object-cover rounded-xl shadow-lg mb-4 border-4 border-spotify-green"
          />
          <div className="flex items-center">
            <i className="fas fa-music text-spotify-green text-3xl mr-3"></i>
            <h2 className="text-3xl font-extrabold text-spotify-green">{song.title}</h2>
          </div>
        </div>
        <div className="mb-4 text-white">
          <div className="mb-2"><span className="font-semibold text-spotify-green">Artist:</span> {song.artist}</div>
          <div className="mb-2"><span className="font-semibold text-spotify-green">Album/EP:</span> {song.album}</div>
          <div className="mb-2"><span className="font-semibold text-spotify-green">Release Year:</span> {song.year}</div>
          {song.published && <div className="mb-2"><span className="font-semibold text-spotify-green">Published:</span> {song.published}</div>}
          <div className="mb-2"><span className="font-semibold text-spotify-green">Location:</span> {song.location}</div>
          <div className="mb-2"><span className="font-semibold text-spotify-green">Description:</span> {song.description}</div>
        </div>
        <button className="bg-spotify-green hover:bg-green-600 text-black font-bold px-6 py-3 rounded-full transition" onClick={() => navigate(-1)}>
          <i className="fas fa-arrow-left mr-2"></i> Back to Songs
        </button>
      </div>
    </div>
  );
};

export default SongDetailsPage; 
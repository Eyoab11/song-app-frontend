import React, { useState, useEffect } from 'react';

const AddSongModal = ({ isOpen, onClose, onSubmit, song, mode = 'add' }) => {
  const initialForm = {
    title: '',
    artist: '',
    album: '',
    year: '',
    image_url: '',
    published: '',
    location: '',
    description: '',
  };
  const [form, setForm] = useState(initialForm);
  const [imagePreview, setImagePreview] = useState('');

  useEffect(() => {
    if (isOpen && song && mode === 'edit') {
      setForm({
        title: song.title || '',
        artist: song.artist || '',
        album: song.album || '',
        year: song.year || '',
        image_url: song.image_url || '',
        published: song.published || '',
        location: song.location || '',
        description: song.description || '',
        id: song.id || song._id || '',
      });
      setImagePreview(song.image_url || '');
    } else if (isOpen && mode === 'add') {
      setForm(initialForm);
      setImagePreview('');
    }
  }, [isOpen, song, mode]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    if (name === 'image_url') {
      setImagePreview(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
    setForm(initialForm);
    setImagePreview('');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/70 backdrop-blur-sm animate-fade-in px-2">
      <div className="relative bg-gradient-to-br from-[#232526]/90 to-[#414345]/90 rounded-2xl shadow-2xl p-6 md:p-8 w-full max-w-2xl border border-spotify-green/30 backdrop-blur-xl animate-slide-up max-h-[90vh] overflow-y-auto">
        {/* Floating Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-black/60 hover:bg-spotify-green/80 text-white rounded-full p-2 shadow-lg transition"
          aria-label="Close"
        >
          <i className="fas fa-times text-xl"></i>
        </button>
        {/* Music Icon */}
        <div className="flex justify-center mb-4">
          <div className="bg-spotify-green/20 rounded-full p-4 shadow-lg">
            <i className="fas fa-music text-spotify-green text-4xl animate-bounce"></i>
          </div>
        </div>
        <h3 className="text-2xl font-extrabold text-center text-spotify-green mb-2 tracking-tight">
          {mode === 'edit' ? 'Edit Song' : 'Add New Track'}
        </h3>
        <p className="text-center text-spotify-light-gray mb-4">
          {mode === 'edit' ? 'Update the details and save your changes.' : 'Fill in the details to add a new song to your library.'}
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-spotify-green font-semibold mb-1">Track Title</label>
              <input
                type="text"
                name="title"
                value={form.title}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-black/40 border border-spotify-green/30 text-white focus:outline-none focus:ring-2 focus:ring-spotify-green placeholder-white transition"
                placeholder="e.g. Blinding Lights"
                required
              />
            </div>
            <div>
              <label className="block text-spotify-green font-semibold mb-1">Artist Name</label>
              <input
                type="text"
                name="artist"
                value={form.artist}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-black/40 border border-spotify-green/30 text-white focus:outline-none focus:ring-2 focus:ring-spotify-green placeholder-white transition"
                placeholder="e.g. The Weeknd"
                required
              />
            </div>
            <div>
              <label className="block text-spotify-green font-semibold mb-1">Album/EP</label>
              <input
                type="text"
                name="album"
                value={form.album}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-black/40 border border-spotify-green/30 text-white focus:outline-none focus:ring-2 focus:ring-spotify-green placeholder-white transition"
                placeholder="e.g. After Hours"
                required
              />
            </div>
            <div>
              <label className="block text-spotify-green font-semibold mb-1">Release Year</label>
              <input
                type="number"
                name="year"
                value={form.year}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-black/40 border border-spotify-green/30 text-white focus:outline-none focus:ring-2 focus:ring-spotify-green placeholder-white transition"
                placeholder="e.g. 2020"
                min="1900"
                max={new Date().getFullYear()}
                required
              />
            </div>
            <div>
              <label className="block text-spotify-green font-semibold mb-1">Song Image URL</label>
              <input
                type="url"
                name="image_url"
                value={form.image_url}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-black/40 border border-spotify-green/30 text-white focus:outline-none focus:ring-2 focus:ring-spotify-green placeholder-white transition"
                placeholder="e.g. https://example.com/cover.jpg"
              />
              {imagePreview && (
                <div className="flex justify-center mt-3">
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="w-32 h-32 object-cover rounded-lg border-2 border-spotify-green shadow-md"
                    onError={e => { e.target.style.display = 'none'; }}
                  />
                </div>
              )}
            </div>
            <div>
              <label className="block text-spotify-green font-semibold mb-1">Published Date</label>
              <div className="relative">
                <input
                  type="date"
                  name="published"
                  value={form.published}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-black/40 border border-spotify-green/30 text-white focus:outline-none focus:ring-2 focus:ring-spotify-green placeholder-white transition appearance-none"
                  placeholder="e.g. 2023-01-01"
                  style={{ colorScheme: 'dark' }}
                />
                <span className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <i className="fas fa-calendar-alt text-white text-lg"></i>
                </span>
              </div>
            </div>
            <div>
              <label className="block text-spotify-green font-semibold mb-1">Location</label>
              <input
                type="text"
                name="location"
                value={form.location}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-black/40 border border-spotify-green/30 text-white focus:outline-none focus:ring-2 focus:ring-spotify-green placeholder-white transition"
                placeholder="e.g. Toronto, Canada"
              />
            </div>
          </div>
          <div>
            <label className="block text-spotify-green font-semibold mb-1">Description</label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-black/40 border border-spotify-green/30 text-white focus:outline-none focus:ring-2 focus:ring-spotify-green placeholder-white transition"
              placeholder="A short description about the song..."
              rows={3}
            />
          </div>
          <div className="pt-2">
            <button
              type="submit"
              className="w-full bg-spotify-green hover:bg-green-600 text-black font-extrabold py-3 px-4 rounded-lg shadow-lg text-lg transition transform hover:scale-105"
            >
              <i className="fas fa-plus mr-2"></i> {mode === 'edit' ? 'Save Changes' : 'Add Track'}
            </button>
          </div>
        </form>
      </div>
      {/* Animations and custom placeholder color */}
      <style>{`
        .animate-fade-in { animation: fadeIn 0.3s ease; }
        .animate-slide-up { animation: slideUp 0.4s cubic-bezier(.39,.575,.565,1) both; }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideUp { from { transform: translateY(40px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
        input::placeholder, textarea::placeholder { color: #fff !important; opacity: 1; }
        /* Hide default calendar icon for date input (for custom icon) */
        input[type="date"]::-webkit-calendar-picker-indicator {
          filter: invert(1);
        }
      `}</style>
    </div>
  );
};

export default AddSongModal; 
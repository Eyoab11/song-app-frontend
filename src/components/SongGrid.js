import React from 'react';
import SongCard from './SongCard';

const SongGrid = ({ songs, onEdit, onDelete }) => (
  <div className="h-[70vh] overflow-y-auto pr-2 custom-scrollbar">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {songs.map((song) => (
        <SongCard
          key={song._id}
          id={song._id}
          title={song.title}
          artist={song.artist}
          album={song.album}
          year={song.year}
          published={song.published}
          image_url={song.image_url}
          location={song.location || 'Addis Ababa | ET'}
          description={song.description || ''}
          onEdit={() => onEdit(song)}
          onDelete={() => onDelete(song)}
        />
      ))}
    </div>
    <style>{`
      .custom-scrollbar::-webkit-scrollbar { width: 8px; }
      .custom-scrollbar::-webkit-scrollbar-thumb { background: #1DB954; border-radius: 4px; }
      .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
    `}</style>
  </div>
);

export default SongGrid; 
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import SongGrid from './components/SongGrid';
import AddSongModal from './components/AddSongModal';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import SongDetailsPage from './pages/SongDetailsPage';
import NotImplementedPage from './pages/NotImplementedPage';
import {
  fetchSongsStart,
  addSongStart,
  updateSongStart,
  deleteSongStart,
} from './features/songs/songsSlice';
import { ThemeProvider } from './context/ThemeContext';

function MainApp() {
  const dispatch = useDispatch();
  const { list: songs, status } = useSelector(state => state.songs);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState('add'); 
  const [editSong, setEditSong] = useState(null);
  const [selectedYear, setSelectedYear] = useState('All');

  useEffect(() => {
    dispatch(fetchSongsStart());
  }, [dispatch]);

 
  const years = React.useMemo(() => {
    const yearSet = new Set(songs.map(song => song.year).filter(Boolean));
    const sortedYears = Array.from(yearSet).sort((a, b) => b - a);
    return ['All', ...sortedYears];
  }, [songs]);

  const handleThemeToggle = () => {
    setIsDarkMode((prev) => !prev);
    document.body.classList.toggle('dark-mode', !isDarkMode);
    document.body.classList.toggle('light-mode', isDarkMode);
  };

  const handleAddSong = (song) => {
    dispatch(addSongStart(song));
    setTimeout(() => dispatch(fetchSongsStart()), 500);
  };

  const handleEditSong = (song) => {
    setEditSong(song);
    setModalMode('edit');
    setModalOpen(true);
  };

  const handleUpdateSong = (song) => {
    dispatch(updateSongStart(song));
    setTimeout(() => dispatch(fetchSongsStart()), 500);
  };

  const handleDeleteSong = (songToDelete) => {
    if (window.confirm('Are you sure you want to delete this song?')) {
      if (window.confirm('This action is irreversible. Delete this song permanently?')) {
        dispatch(deleteSongStart(songToDelete._id));
        setTimeout(() => dispatch(fetchSongsStart()), 500);
      }
    }
  };

  const openAddModal = () => {
    setEditSong(null);
    setModalMode('add');
    setModalOpen(true);
  };

  const filteredSongs = selectedYear === 'All' ? songs : songs.filter(song => song.year === selectedYear);

  if (status === 'loading') return <LoadingScreen />;

  return (
    <div className={`min-h-screen font-sans ${isDarkMode ? 'bg-spotify-dark text-spotify-light' : 'bg-white text-spotify-dark'}`}>
      <Header onThemeToggle={handleThemeToggle} />
      <HeroSection />
      <main className="container mx-auto px-4 py-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-8 mt-8">Browse Our Archives</h2>
        <div className="flex justify-center gap-4 mb-10">
          {years.map((year) => (
            <button
              key={year}
              className={`px-5 py-2 rounded-full font-bold text-lg transition border-2 ${selectedYear === year ? 'bg-spotify-green text-black border-spotify-green' : 'bg-transparent text-spotify-green border-transparent hover:bg-green-600 hover:text-black'}`}
              onClick={() => setSelectedYear(year)}
            >
              {year}
            </button>
          ))}
        </div>
        <div className="flex justify-end mb-8">
          <button
            className="bg-spotify-green hover:bg-green-600 text-black font-bold px-6 py-3 rounded-full flex items-center transition shadow"
            onClick={openAddModal}
          >
            <i className="fas fa-plus mr-2"></i> Add Song
          </button>
        </div>
        <SongGrid songs={filteredSongs} onEdit={handleEditSong} onDelete={handleDeleteSong} />
        <AddSongModal
          isOpen={isModalOpen}
          onClose={() => setModalOpen(false)}
          onSubmit={modalMode === 'edit' ? handleUpdateSong : handleAddSong}
          song={modalMode === 'edit' ? editSong : null}
          mode={modalMode}
        />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<MainApp />} />
          <Route path="/songs/:id" element={<SongDetailsPage />} />
          <Route path="/features" element={<NotImplementedPage page="Features" />} />
          <Route path="/artists" element={<NotImplementedPage page="Artists" />} />
          <Route path="/contact" element={<NotImplementedPage page="Contact" />} />
          <Route path="/signup" element={<NotImplementedPage page="Sign Up" />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
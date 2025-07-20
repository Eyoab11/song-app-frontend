// A simple mock API call to simulate fetching data from a server.
const mockSongs = [
    { id: 1, title: 'Kulun Manqualesh', artist: 'Tilahun Gessesse', album: 'Éthiopiques 1', genre: 'Tizita', year: 1972 },
    { id: 2, title: 'Ere Mela Mela', artist: 'Mahmoud Ahmed', album: 'Ere Mela Mela', genre: 'Ethio-jazz', year: 1975 },
    { id: 3, title: 'Fikir', artist: 'Aster Aweke', album: 'Kabu', genre: 'Ethiopian Pop', year: 1991 },
    { id: 4, title: 'Yègellé Tezeta', artist: 'Mulatu Astatke', album: 'Éthiopiques 4', genre: 'Ethio-jazz', year: 1972 },
    { id: 5, title: 'Mar Eske Tuaf', artist: 'Teddy Afro', album: 'Ethiopia', genre: 'Reggae Fusion', year: 2017 },
    { id: 6, title: 'Sema', artist: 'Gigi (Ejigayehu Shibabaw)', album: 'Gigi', genre: 'World Music', year: 2001 },
  ];
  
  // We export functions for each CRUD operation.
  export const fetchSongsFromApi = () => {
    console.log('API: Fetching songs...');
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('API: Songs fetched successfully.');
        resolve({ data: mockSongs }); // To simulate API response structure
      }, 1200); // To simulate network delay
    });
  };
  
  // Placeholder for creating a song
  export const createSongInApi = (song) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        // Create a unique ID for the new song using the current timestamp
        const newSong = { ...song, id: new Date().getTime() }; 
        // Add the new song to the in-memory list
        mockSongs.push(newSong); 
        console.log('API: Created song', newSong);
        resolve({ data: newSong });
      }, 500);
    });
  };
  
  // Placeholder for updating a song
  export const updateSongInApi = (updatedSong) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const index = mockSongs.findIndex(song => song.id === updatedSong.id);
        if (index !== -1) {
          mockSongs[index] = { ...mockSongs[index], ...updatedSong };
          console.log('API: Updated song', mockSongs[index]);
          resolve({ data: mockSongs[index] });
        } else {
          reject(new Error('Song not found'));
        }
      }, 500);
    });
  };
  
  // Placeholder for deleting a song
  export const deleteSongInApi = (songId) => {
      return new Promise((resolve, reject) => {
          setTimeout(() => {
              const index = mockSongs.findIndex(song => song.id === songId);
              if (index !== -1) {
                  mockSongs.splice(index, 1);
                  console.log('API: Deleted song with id', songId);
                  resolve({ data: { id: songId } }); // Confirm which song was deleted
              } else {
                  reject(new Error('Song not found'));
              }
          }, 500);
      });
  };
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: [], // Holds the array of songs
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

const songsSlice = createSlice({
  name: 'songs',
  initialState,
  reducers: {
    // Action to start the fetch process
    fetchSongsStart(state) {
      state.status = 'loading';
      state.error = null;
    },
    // Action for when songs are fetched successfully.
    fetchSongsSuccess(state, action) {
      state.status = 'succeeded';
      state.list = action.payload; 
    },
    // Action for when fetching fails.
    fetchSongsFailure(state, action) {
      state.status = 'failed';
      state.error = action.payload; 
    },
    
    addSongStart(state) {
      
    },
    addSongSuccess(state, action) {
      state.list.push(action.payload); // Add the new song to the list
    },
    addSongFailure(state, action) {
      state.error = action.payload;
    },
   
  },
});


export const {
  fetchSongsStart,
  fetchSongsSuccess,
  fetchSongsFailure,
  addSongStart,
  addSongSuccess,
  addSongFailure,
} = songsSlice.actions;


export default songsSlice.reducer;
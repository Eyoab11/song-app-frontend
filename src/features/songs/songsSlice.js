import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: [],
  status: 'idle',
  error: null,
};

const songsSlice = createSlice({
  name: 'songs',
  initialState,
  reducers: {
    // Fetch
    fetchSongsStart(state) {
      state.status = 'loading';
      state.error = null;
    },
    fetchSongsSuccess(state, action) {
      state.status = 'succeeded';
      state.list = action.payload;
    },
    fetchSongsFailure(state, action) {
      state.status = 'failed';
      state.error = action.payload;
    },
    // Add
    addSongStart(state) {
      state.status = 'loading';
      state.error = null;
    },
    addSongSuccess(state, action) {
      state.list.push(action.payload);
      state.status = 'succeeded';
    },
    addSongFailure(state, action) {
      state.status = 'failed';
      state.error = action.payload;
    },
    // Update
    updateSongStart(state) {
      state.status = 'loading';
      state.error = null;
    },
    updateSongSuccess(state, action) {
      const idx = state.list.findIndex(song => song.id === action.payload.id);
      if (idx !== -1) state.list[idx] = action.payload;
      state.status = 'succeeded';
    },
    updateSongFailure(state, action) {
      state.status = 'failed';
      state.error = action.payload;
    },
    // Delete
    deleteSongStart(state) {
      state.status = 'loading';
      state.error = null;
    },
    deleteSongSuccess(state, action) {
      state.list = state.list.filter(song => song.id !== action.payload);
      state.status = 'succeeded';
    },
    deleteSongFailure(state, action) {
      state.status = 'failed';
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
  updateSongStart,
  updateSongSuccess,
  updateSongFailure,
  deleteSongStart,
  deleteSongSuccess,
  deleteSongFailure,
} = songsSlice.actions;

export default songsSlice.reducer;
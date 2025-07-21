// src/styles/theme.js

// Spotify-inspired green
const spotifyGreen = '#1DB954';
const spotifyGreenDark = '#169c46';
const spotifyGreenLight = '#1ed760';
const spotifyBlack = '#191414';
const spotifyGray = '#232526';
const spotifyLightGray = '#f4f7fa';

export const darkTheme = {
  mode: 'dark',
  colors: {
    background: spotifyBlack,
    surface: spotifyGray,
    primary: spotifyGreen,
    primaryDark: spotifyGreenDark,
    primaryLight: spotifyGreenLight,
    accent: '#21e065',
    text: '#fff',
    textMuted: '#b3b3b3',
    border: 'rgba(29,185,84,0.3)',
    error: '#f44336',
    card: '#232526',
    input: '#232526',
    button: spotifyGreen,
    buttonText: '#191414',
    buttonHover: spotifyGreenDark,
    shadow: '0 4px 24px 0 rgba(0,0,0,0.2)',
  },
  fonts: {
    body: 'Inter, Helvetica, Arial, sans-serif',
    heading: 'Montserrat, Georgia, serif',
  },
  fontSizes: [12, 14, 16, 20, 24, 32],
  space: [0, 4, 8, 16, 32, 64, 128],
  breakpoints: ['40em', '52em', '64em'],
};

export const lightTheme = {
  mode: 'light',
  colors: {
    background: '#f8fafc',
    surface: '#fff',
    primary: spotifyGreen,
    primaryDark: spotifyGreenDark,
    primaryLight: spotifyGreenLight,
    accent: '#21e065',
    text: '#191414',
    textMuted: '#4b5563',
    border: 'rgba(29,185,84,0.15)',
    error: '#e53935',
    card: '#fff',
    input: '#f4f7fa',
    button: spotifyGreen,
    buttonText: '#fff',
    buttonHover: spotifyGreenDark,
    shadow: '0 4px 24px 0 rgba(0,0,0,0.08)',
  },
  fonts: {
    body: 'Inter, Helvetica, Arial, sans-serif',
    heading: 'Montserrat, Georgia, serif',
  },
  fontSizes: [12, 14, 16, 20, 24, 32],
  space: [0, 4, 8, 16, 32, 64, 128],
  breakpoints: ['40em', '52em', '64em'],
};


export const theme = darkTheme;
// Dummy theme context for always-dark mode
import { createContext, useContext } from 'react';

const ThemeContext = createContext({ isDarkMode: true, toggleTheme: () => {} });

export const ThemeProvider = ({ children }) => children;
export const useTheme = () => ({ isDarkMode: true, toggleTheme: () => {} }); 
import { ThemeProvider } from '@emotion/react';
import { theme } from './styles/theme';
import HomePage from './pages/HomePage';

function App() {
  return (
    <ThemeProvider theme={theme}>
     
      <h1>Song Management App</h1>
      <HomePage />
    </ThemeProvider>
  );
}

export default App;
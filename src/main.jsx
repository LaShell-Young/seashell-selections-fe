import React from 'react';
import ReactDOM from 'react-dom/client';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { HashRouter } from 'react-router-dom';
import App from './App';
import './index.css';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#175c59', dark: '#104541', light: '#d9ece5' },
    secondary: { main: '#dc795d' },
    background: { default: '#f6f5f0', paper: '#fffefa' },
    text: { primary: '#203b39', secondary: '#687a75' },
  },
  shape: { borderRadius: 16 },
  typography: {
    fontFamily: '"DM Sans", sans-serif',
    h1: { fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 600 },
    h2: { fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 600 },
    h3: { fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 600 },
    h4: { fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 600 },
    button: { fontWeight: 700, textTransform: 'none' },
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HashRouter>
        <App />
      </HashRouter>
    </ThemeProvider>
  </React.StrictMode>,
);

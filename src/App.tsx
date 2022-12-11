import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Box, CircularProgress, CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';

const HomePage = React.lazy(() => import('./components/pages/HomePage'));
const AboutPage = React.lazy(() => import('./components/pages/AboutPage'));

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HelmetProvider>
        <React.Suspense
          fallback={
            <Box sx={{ display: 'flex' }}>
              <CircularProgress />
            </Box>
          }
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </React.Suspense>
      </HelmetProvider>
    </ThemeProvider>
  );
}

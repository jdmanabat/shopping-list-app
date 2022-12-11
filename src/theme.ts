import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Theme {}
  interface ThemeOptions {}
}

const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#2d2d2d',
          display: 'block',
        },
      },
    },
  },
});

export default theme;

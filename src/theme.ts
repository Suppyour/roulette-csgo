import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#6C5DD3', // Vibrant Purple
      light: '#8B7FE8',
      dark: '#4D3FB5',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#FFC857', // Gold/Yellow
      light: '#FFD985',
      dark: '#C99624',
      contrastText: '#121212',
    },
    background: {
      default: '#121212',
      paper: '#1E1E1E',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#B0B0B0',
    },
    success: {
      main: '#00E676', // Bright Green for wins
    },
    error: {
      main: '#FF5252', // Red for losses/errors
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '2.5rem',
    },
    h2: {
      fontWeight: 600,
      fontSize: '2rem',
    },
    h6: {
      fontWeight: 600,
    },
    button: {
      textTransform: 'none', // Remove uppercase default
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0, // Sharp corners
          padding: '10px 24px',
          boxShadow: 'none',
          textTransform: 'uppercase',
          letterSpacing: '1px',
          border: '1px solid transparent',
          '&:hover': {
            boxShadow: '0 0 15px rgba(255, 255, 255, 0.1)',
            borderColor: 'rgba(255,255,255,0.3)'
          },
        },
        containedPrimary: {
          background: '#6C5DD3', // Flat color for sharper look
          '&:hover': {
            background: '#5b4cc4',
          }
        },
        containedSuccess: {
          background: '#00E676',
          color: '#000',
          fontWeight: 700,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 0, // Sharp corners
          backgroundImage: 'none',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 0, // Sharp corners
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            '& fieldset': {
              borderColor: 'rgba(255, 255, 255, 0.1)',
            },
            '&:hover fieldset': {
              borderColor: 'rgba(255, 255, 255, 0.3)',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#6C5DD3',
            },
          },
        },
      },
    },
  },
});

export default theme;

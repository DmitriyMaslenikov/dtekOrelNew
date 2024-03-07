declare module '@mui/material/styles' {
  interface Palette {
    custom: Palette['primary'];
  }
  interface PaletteOptions {
    custom: PaletteOptions['primary'];
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    error: true;
    info: true;
    success: true;
    warning: true;
    custom: true;
  }
}

import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    text: {
      primary: '#000000',
      secondary: '#E0E0E0',
      disabled: '#E0E0E0',
    },
    error: {
      main: '#D32F2F',
      dark: '#C62828',
      light: '#EF5350',
    },
    warning: {
      main: '#ED6C02',
      dark: '#E65100',
      light: '#FF9800',
    },
    primary: {
      main: '#5D5FEF',
    },
    custom: {
      main: '#000000',
    },
   
  },
  typography: {
    h1: {
      fontSize: 32,
    },
    h2: {
      fontSize: 20,
    },
    h3: {
      fontSize: 20,
    },
    button: {
      fontSize: 14,
      textTransform: 'uppercase',
    },
    caption: {
      fontSize: 12,
    },
    fontFamily: 'Roboto',
  },
});

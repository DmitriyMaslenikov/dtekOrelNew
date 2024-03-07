import { MainPageProvider } from './mainPageContext';
import { Page } from './page';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { orange, red, lime, purple } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0909aa',
    },
    text: {
      primary: '#000000',
      secondary: '#000000',
      disabled: '#E0E0E0',
    },
    secondary: {
      main: '#E0E0E0',
    },
    custom: red,
  },
});

export const MainPage = () => {
  return (
    <MainPageProvider>
      <ThemeProvider theme={theme}>
        <Page />
      </ThemeProvider>
    </MainPageProvider>
  );
};

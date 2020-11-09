import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';  
import { fade } from '@material-ui/core/styles/colorManipulator';

export const theme = createMuiTheme({
  palette: {
    type: 'dark'
  },

   typography: {
      fontFamily: [
          '"Playfair Display", serif',
          
      ].join(','),
      body1: {
          fontFamily: '"Lato", sans-serif'
      },
      body2: {
          fontFamily: '"Lato", sans-serif',
          fontSize: '0.935rem'
      }
 },
});
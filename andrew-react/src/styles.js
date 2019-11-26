import React from 'react';
// import { makeStyles } from "@material-ui/core/styles";
import { createMuiTheme, responsiveFontSizes} from "@material-ui/core/styles"
import green from '@material-ui/core/colors/green';
import grey from '@material-ui/core/colors/grey';

const palette = {
  primary: { main: '#FAFAFA' },
  secondary: { main: '#2E7D32' }
};



let andrewTheme = createMuiTheme({
  typography: {
    fontFamily: '"Libre Franklin", sans-serif',
    h1: {
      fontWeight: 500,
      letterSpacing: -0.2,
      fontSize: '1.7rem'
    },
    h2: {
      fontWeight: 500,
      letterSpacing: -0.5,
      fontSize: '3rem',
      color: green[900]
    },
    h3: {
      fontFamily: '"Merriweather", serif',
      fontWeight: 500,
      letterSpacing: 0,
      fontSize: '1.1rem'
    },
    h4: {
      fontWeight: 500,
      letterSpacing: -0.1,
      lineHeight: 1.1,
      fontSize: '1.7rem'
    },
    h5: {
      fontWeight: 500,
      letterSpacing: -0.1,
      lineHeight: 1.1,
      fontSize: '1.5rem'
    },
    h6: {
      // fontFamily: '"Merriweather", serif',
      fontWeight: 500,
      letterSpacing: 0.2,
      fontSize: '0.9rem'
    },
    body1: {
      fontFamily: '"Merriweather", serif',
      fontWeight: 300,
      letterSpacing: 0.2,
      lineHeight: 1.6,
      fontSize: '0.8rem',
      color: grey[800]
    },
    body2: {
      letterSpacing: 0.25,
      fontSize: '0.8rem'
    },
    subtitle1: {
      // fontFamily: '"Merriweather", serif',
      fontWeight: 600,
      letterSpacing: 0.15
    },
    subtitle2: {
      fontFamily: '"Merriweather", serif',
      fontWeight: '700i',
      letterSpacing: 0.1
    },
    button: {
      // fontFamily: '"Merriweather", serif',
      fontWeight: 800,
      letterSpacing: 1.25
    },
    caption: {
      fontFamily: '"Merriweather", serif',
      fontWeight: 300,
      letterSpacing: 0.4
    },
    overline: {
      // fontFamily: '"Merriweather", serif',
      fontWeight: 600,
      letterSpacing: 1.75,
      lineHeight: 1.2,
      fontSize: '0.6rem'
    },

  },
  palette: {
    primary: {
      light: grey[50],
      main: grey[50],
      dark: grey[200],
    },
    secondary: {
      light: green[600],
      main: green[800],
      dark: green[900],
    },
  },
  shape: {
    borderRadius: 0
  },
  spacing: (value => value * 8)
});

andrewTheme = responsiveFontSizes(andrewTheme);

export default andrewTheme;
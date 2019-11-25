import React from 'react';
// import { makeStyles } from "@material-ui/core/styles";
import { createMuiTheme, responsiveFontSizes} from "@material-ui/core/styles"
import green from '@material-ui/core/colors/green';
import grey from '@material-ui/core/colors/grey';

let andrewTheme = createMuiTheme({
  overrides: {
    MuiTypography: {
      button: {
        fontWeight: "800",
        letterSpacing: "0.9px",
        fontSize: "small",
      },
      h2: {
        color: green[900],
        fontWeight: "500",
      },
      body1: {
        fontFamily: '"Merriweather", serif',
        fontSize: "14px",
        lineHeight: "22px",
        color: grey[700],
      },
      overline: {
        color: green[800],
        letterSpacing: "2px",
        fontWeight: "bold",
      },
    },
    // MuiCard: {
    //   boxShadow: "0",
    //   elevation: "0",
    //   square: "true",
    //   raised: "true",
    // }
  },
  // shape: {
  //   borderRadius: 0,
  // },
  typography: {
    fontFamily: '"Libre Franklin", sans-serif, "Merriweather", serif',
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
});

andrewTheme = responsiveFontSizes(andrewTheme);

export default andrewTheme;
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
      }
    }
  },
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
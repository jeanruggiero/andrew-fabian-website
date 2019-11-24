// import React from 'react';
// import { makeStyles } from "@material-ui/core/styles";
import { createMuiTheme, responsiveFontSizes} from "@material-ui/core/styles"
import green from '@material-ui/core/colors/green';
import gray from '@material-ui/core/colors/gray';

let theme = createMuiTheme({
  typography: {
    color: rgba(0, 0, 0, 0.87),
    fontFamily: '"Libre Franklin", sans-serif, "Merriweather", serif',
  },
  palette: {
    primary: green,
    secondary: gray,
  },
});

theme = responsiveFontSizes(theme);

export default theme;
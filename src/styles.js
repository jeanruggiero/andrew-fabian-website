import { createMuiTheme, responsiveFontSizes} from "@material-ui/core/styles"
import green from '@material-ui/core/colors/green';
import grey from '@material-ui/core/colors/grey';

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
      fontSize: '2.5rem',
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
      fontSize: '1.7rem',
        '@media (min-width:600px) and (max-width:1100px)': {
          fontSize: '0.5rem',
        },
    },
    h5: {
      fontWeight: 500,
      letterSpacing: -0.1,
      lineHeight: 1.1,
      fontSize: '1.2rem'
    },
    h6: {
      fontWeight: 500,
      letterSpacing: 0.2,
      lineHeight: 1.2,
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
      fontWeight: 600,
      letterSpacing: 0.15
    },
    subtitle2: {
      fontFamily: '"Merriweather", serif',
      fontWeight: '700i',
      letterSpacing: 0.1
    },
    button: {
      fontWeight: 800,
      letterSpacing: 1.25
    },
    caption: {
      fontFamily: '"Merriweather", serif',
      fontWeight: 300,
      letterSpacing: 0.4
    },
    overline: {
      fontWeight: 600,
      letterSpacing: 1.75,
      lineHeight: 1.2,
      fontSize: '0.6rem'
    },

  },
  palette: {
    primary: { main: '#FAFAFA' },
    secondary: { main: '#2E7D32' }
  },
  shape: {
    borderRadius: 0
  },
  spacing: (value => value * 8),
  breakpoints: {
    values: {
      xs: 0,
      sm: 500,
      md: 700,
      lg: 1100,
      xl: 1920,

    }
  }
});

// andrewTheme.typography.h4.fontSize = ('1.7rem',
//         [andrewTheme.breakpoints.down('lg')]: {
//           fontSize: '1.2rem');

andrewTheme = responsiveFontSizes(andrewTheme);

export default andrewTheme;
import { PaletteOptions } from "@mui/material";
import { darkNeutral, lightNeutral } from "./create-palette";




export const createTypography = (themeMode: PaletteOptions['mode']) => {
  return {
    fontFamily: `"Product Sans", sans-serif`,
    body1: {
      fontSize: '14px',
      fontWeight: 400,
      lineHeight: 1.5,
      color: themeMode==='light' ? lightNeutral[900] : darkNeutral[900],
    },
    body2: {
      fontSize: '0.875rem',
      fontWeight: 400,
      lineHeight: 1.57,
      color: themeMode==='light' ? lightNeutral[900] : darkNeutral[900],
    },
    button: {
      fontWeight: 600,
      color: themeMode==='light' ? lightNeutral[900] : darkNeutral[900],
    },
    caption: {
      fontSize: '0.75rem',
      fontWeight: 500,
      lineHeight: 1.66,
      color: themeMode==='light' ? lightNeutral[900] : darkNeutral[900],
    },
    subtitle1: {
      fontSize: '1rem',
      fontWeight: 500,
      lineHeight: 1.57,
      color: themeMode==='light' ? lightNeutral[900] : darkNeutral[900],
    },
    subtitle2: {
      fontSize: '0.875rem',
      fontWeight: 500,
      lineHeight: 1.57,
      color: themeMode==='light' ? lightNeutral[900] : darkNeutral[900],
    },
    overline: {
      fontSize: '0.75rem',
      fontWeight: 600,
      letterSpacing: '0.5px',
      lineHeight: 2.5,
      color: themeMode==='light' ? lightNeutral[900] : darkNeutral[900],
    },
    h1: {
      fontWeight: 500,
      fontSize: '64px',
      lineHeight: 1.2,
      color: themeMode==='light' ? lightNeutral[900] : darkNeutral[900],
    },
    h2: {
      fontWeight: 500,
      fontSize: '48px',
      lineHeight: 1.2,
      color: themeMode==='light' ? lightNeutral[900] : darkNeutral[900],
    },
    h3: {
      fontWeight: 500,
      fontSize: '32px',
      lineHeight: 1.2,
      color: themeMode==='light' ? lightNeutral[900] : darkNeutral[900],
    },
    h4: {
      fontWeight: 500,
      fontSize: '24px',
      lineHeight: 1.2,
      color: themeMode==='light' ? lightNeutral[900] : darkNeutral[900],
    },
    h5: {
      fontWeight: 500,
      fontSize: '20px',
      lineHeight: 1.4,
      color: themeMode==='light' ? lightNeutral[900] : darkNeutral[900],
    },
    h6: {
      fontWeight: 500,
      fontSize: '16px',
      lineHeight: 1.2,
      color: themeMode==='light' ? lightNeutral[900] : darkNeutral[900],
    },
  };
};

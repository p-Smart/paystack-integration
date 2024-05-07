import { PaletteOptions, TypeText } from "@mui/material"

export const primary = {
  "lighter": "#E4EBF2",
  "light": "#4071b9",
  "main": "#1a55ab",
  "dark": "#16478f",
  "darker": "#0d2b56",
}


export const secondary = {
  "lighter": "",
  "light": "",
  "main": "",
  "dark": "",
  "darker": "",
};

export const lightNeutral = {
  50: '#FFFFFF',
  100: '#E6E6E6',
  200: '#CCCCCC',
  300: '#B3B3B3',
  400: '#999999',
  500: '#808080',
  600: '#666666',
  700: '#4D4D4D',
  800: '#333333',
  900: '#000000',
};

export const darkNeutral = {
  50: '#000000',
  100: '#333333',
  200: '#4D4D4D',
  300: '#CCCCCC',
  400: '#808080',
  500: '#999999',
  600: '#B3B3B3',
  700: '#CCCCCC',
  800: '#E6E6E6',
  900: '#FFFFFF',
};

export const lightGrey = {
  50: '#d0d0d1',
  100: '#b0b1b2',
  200: '#898a8c',
  300: '#616366',
  400: '#393c3f',
  500: '#0f1215',
  600: '#121519',
  700: '#0c0e11',
  800: '#090b0d',
  900: '#060708',
}

export const darkGrey = {
  50: '#060708',
  100: '#090b0d',
  200: '#0c0e11',
  300: '#121519',
  400: '#0f1215',
  500: '#393c3f',
  600: '#616366',
  700: '#898a8c',
  800: '#b0b1b2',
  900: '#d0d0d1',
}

export const purple = {
  lightest: '',
  light: '',
  main: '#170F49',
  dark: '',
  darkest: ''
}

const INFO = {
  lighter: '#D0F2FF',
  light: '#74CAFF',
  main: '#1890FF',
  dark: '#0C53B7',
  darker: '#04297A',
  contrastText: '#fff',
};

const SUCCESS = {
  lighter: '#E9FCD4',
  light: '#AAF27F',
  main: '#54D62C',
  dark: '#229A16',
  darker: '#08660D',
};

const WARNING = {
  lighter: '#FFF7CD',
  light: '#FFE16A',
  main: '#FFC107',
  dark: '#B78103',
  darker: '#7A4F01',
};

const ERROR = {
  lighter: '#FFE7D9',
  light: '#FFA48D',
  main: '#FF0000',
  dark: '#B72136',
  darker: '#7A0C2E',
};


export const createPalette = (mode: PaletteOptions['mode']) => {

  return {
      primary,
      // secondary,
      info: INFO,
      success: SUCCESS,
      warning: WARNING,
      error: ERROR,
      neutral: mode==='light' ? lightNeutral : darkNeutral,
      grey: mode==='light' ? lightGrey : darkGrey,
      divider: mode==='light' ? primary.main : primary.main,
      purple,
      text: {
        primary: mode==='light' ? lightNeutral[900] : darkNeutral[900]
      },
      background: {
        default: mode==='light' ? '#fafafa' : '#121212',
        paper: mode==='light' ? '#ffffff' : '#000000'
      },
  } as PaletteOptions
}
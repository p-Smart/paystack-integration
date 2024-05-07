import { PaletteOptions, createTheme as createMuiTheme } from '@mui/material';
import { createPalette } from './create-palette';
import { createTypography } from './create-typography';
import createButton from './create-button';
import createTextField from './create-textfield';
import createDialog from './create-dialog';


const createTheme = (mode: PaletteOptions['mode']) => {
  const palette = createPalette(mode);
  const typography = createTypography(mode);
  const button = createButton()
  const textField = createTextField()
  const dialog = createDialog()

  return createMuiTheme({
    components: {
      MuiButton: button,
      MuiTextField: textField,
      MuiDialog: dialog,
    },
    breakpoints: {
      values: {
        xs: 450,
        sm: 625,
        md: 991,
        lg: 1200,
        xl: 1440
      }
    },
    palette: {
      mode,
      ...palette,
    },
    shape: {
      borderRadius: 8
    },
    typography
  });

}


export default createTheme
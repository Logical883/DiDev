import { createTheme } from '@mui/material/styles'

/**
 * Material UI theme built from the DiDev brand tokens in index.css.
 * Keep these values in sync with the --color-* variables there.
 */
const navy = '#111835'
const navySoft = '#1a2748'
const yellow = '#f8d618'
const line = '#d5dee6'

export const theme = createTheme({
  palette: {
    primary: { main: navy, light: navySoft, contrastText: '#ffffff' },
    secondary: { main: yellow, contrastText: navy },
    error: { main: '#8a2b2b' },
    text: { primary: '#111111', secondary: '#3c4a5a' },
    background: { default: '#f5f7f8', paper: '#ffffff' },
    divider: line,
  },
  shape: { borderRadius: 3 },
  typography: {
    fontFamily: '"Inter", Arial, Helvetica, sans-serif',
    button: { textTransform: 'none', fontWeight: 600 },
  },
  components: {
    MuiButtonBase: {
      defaultProps: { disableRipple: false },
    },
    MuiSkeleton: {
      defaultProps: { animation: 'wave' },
      styleOverrides: {
        root: { backgroundColor: 'rgba(17, 24, 53, 0.09)' },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          backgroundColor: '#ffffff',
          fontSize: 15,
          '& .MuiOutlinedInput-notchedOutline': { borderColor: line },
          '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: 'rgba(17, 24, 53, 0.45)' },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: navy, borderWidth: 1 },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: { fontSize: 15, '&.Mui-focused': { color: navy } },
      },
    },
    MuiFormHelperText: {
      styleOverrides: { root: { marginLeft: 0, fontSize: 14 } },
    },
    MuiDialog: {
      styleOverrides: {
        paper: { backgroundImage: 'none' },
      },
    },
  },
})

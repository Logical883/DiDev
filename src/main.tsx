import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import GlobalStyles from '@mui/material/GlobalStyles'
import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles'
import './index.css'
import App from './App.tsx'
import { theme } from './theme'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/*
      enableCssLayer puts MUI styles in a `mui` CSS layer. The order is declared
      here as well as in index.css, because MUI injects its styles before the
      Tailwind stylesheet and the first declaration seen decides the order.
      Result: Tailwind base < MUI < Tailwind utilities, so utility classes can
      still override MUI styles.
    */}
    <StyledEngineProvider enableCssLayer>
      <GlobalStyles styles="@layer theme, base, mui, components, utilities;" />
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </StyledEngineProvider>
  </StrictMode>,
)

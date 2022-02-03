import { createTheme, ThemeProvider } from "@mui/material/styles"
import { FC, useMemo } from "react"
import { usePaletteMode } from "./Hooks/usePaletteMode"

const AppTheme: FC = ({ children }) => {
  const { paletteMode } = usePaletteMode()

  const theme = useMemo(
    () => createTheme({ palette: { mode: paletteMode } }),
    [paletteMode]
  )

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default AppTheme

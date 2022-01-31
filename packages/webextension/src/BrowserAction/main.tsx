import CssBaseline from "@mui/material/CssBaseline"
import { SnackbarProvider } from "notistack"
import { StrictMode } from "react"
import { render } from "react-dom"
import { QueryClient, QueryClientProvider } from "react-query"
import { HashRouter as Router } from "react-router-dom"
import App from "./App"
import AppTheme from "./AppTheme"

const queryClient = new QueryClient({
  defaultOptions: { queries: { refetchOnWindowFocus: false, retry: false } }
})

render(
  <StrictMode>
    <Router>
      <AppTheme>
        <CssBaseline />
        <QueryClientProvider client={queryClient}>
          <SnackbarProvider
            anchorOrigin={{ horizontal: "center", vertical: "bottom" }}
          >
            <App />
          </SnackbarProvider>
        </QueryClientProvider>
      </AppTheme>
    </Router>
  </StrictMode>,
  document.getElementById("root")
)

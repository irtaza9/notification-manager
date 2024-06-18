import MainRoutes from "./Routes";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "./components/Theme";

function App() {
  const theme = createTheme();
  return (
    <ThemeProvider theme={theme}>
      <MainRoutes />
    </ThemeProvider>
  );
}

export default App;

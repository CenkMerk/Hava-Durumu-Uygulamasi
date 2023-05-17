import "./App.css";
import "animate.css";
import { SehirListeleme } from "./components/SehirListeleme";
import { SehirOlusturma } from "./components/SehirOlusturma";
import Box from "@mui/material/Box";
import { SeciliSehir } from "./components/SeciliSehir";
import { ArkaPlan } from "./components/ArkaPlan";

import { createTheme, colors, ThemeProvider } from "@mui/material";
const theme = createTheme({
  palette: {
    primary: {
      main: colors.grey[50],
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box className="App">
        <ArkaPlan />
        <Box className="MainContainerStyle">
          <SehirOlusturma />
          <Box className="ListAndSelectConteinerStyle">
            <SehirListeleme />
            <SeciliSehir />
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;

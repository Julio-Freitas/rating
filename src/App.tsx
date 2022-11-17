import { ThemeProvider } from "styled-components";
import { Rating } from "./component";
import { ProviderRate } from "./context";
import { themes } from "./style/theme";

function App() {
  return (
    <ThemeProvider theme={themes}>
      <ProviderRate>
        <Rating />
      </ProviderRate>

    </ThemeProvider>
  );
}

export default App;

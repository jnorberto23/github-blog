import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import { SkeletonTheme } from 'react-loading-skeleton'
import { BrowserRouter} from "react-router-dom";
import { Router } from "./Router";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
       <SkeletonTheme baseColor="#dbe5f0" highlightColor="#c71798">
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyle />
      </SkeletonTheme>
    </ThemeProvider>
  );
}

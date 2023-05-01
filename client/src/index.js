import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import {
  CssBaseline,
  ThemeProvider,
  createTheme,
  StyledEngineProvider,
} from "@mui/material";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import "./global.css";

const muiTheme = createTheme();
const chakraTheme = extendTheme({
  styles: { global: { img: { maxWidth: "unset" } } },
  colors: {
    buttonblue: {
      50: "#e7f0fe",
      100: "#b6d2fc",
      200: "#85b3fa",
      300: "#5495f7",
      400: "#2377f5",
      500: "#0b68f4",
      600: "#0a5edc",
      700: "#0849ab",
      800: "#05347a",
      900: "#031f49",
    },
  },
});
const emotionCache = createCache({
  key: "emotion-cache",
  prepend: true,
});

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={muiTheme}>
        <CacheProvider value={emotionCache}>
          <ChakraProvider theme={chakraTheme}>
            <CssBaseline />
            <App />
          </ChakraProvider>
        </CacheProvider>
      </ThemeProvider>
    </StyledEngineProvider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

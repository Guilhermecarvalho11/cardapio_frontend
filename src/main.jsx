import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { AuthProvider, CounterProvider, FavoritesProvider } from "./hooks/auth";

import GlobalStyles from "./styles/global.js";
import theme from "./styles/theme.js";
import "swiper/css/bundle";
import { Routes } from "./routes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <BrowserRouter>
        <AuthProvider>
          <FavoritesProvider>
            <CounterProvider>
              <Routes />
            </CounterProvider>
          </FavoritesProvider>
        </AuthProvider>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);

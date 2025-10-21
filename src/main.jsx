// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";

import App from "./App";
import "./index.css";
import "./i18n/i18n";

import { AuthProvider } from "./contexts/AuthContext.jsx"; // 👈 ensure .jsx
import { ThemeProvider } from "./components/theme-provider";
import { Toaster } from "./components/ui/sonner";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <HashRouter>
        <ThemeProvider>
          <App />
          <Toaster />
        </ThemeProvider>
      </HashRouter>
    </AuthProvider>
  </React.StrictMode>
);


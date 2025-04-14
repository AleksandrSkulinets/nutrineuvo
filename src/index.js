// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import './i18n/i18n';
import { AuthProvider } from "./contexts/AuthContext";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <AuthProvider>
    <BrowserRouter basename="/"> {/* No sub-path, root path */}
      <App />
    </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);



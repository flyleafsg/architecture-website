// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';        // ← import ReactDOM from the client entry
import App from './App';
import { CssBaseline, GlobalStyles } from '@mui/material';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <CssBaseline />
    <GlobalStyles
      styles={{
        html:  { height: '100%', margin: 0, padding: 0 },
        body:  { height: '100%', margin: 0, padding: 0 },
        '#root': { height: '100%', margin: 0, padding: 0 },
      }}
    />
    <App />
  </React.StrictMode>
);

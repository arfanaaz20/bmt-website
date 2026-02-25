// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Yahan BrowserRouter hai
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter> {/* Yeh ek hi hona chahiye */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
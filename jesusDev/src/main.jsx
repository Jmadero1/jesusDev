import React from 'react';
import { createRoot } from 'react-dom/client';

/**
 * Components
 */
import App from './App';

/**
 * Global Styles
 */
import './index.css';
import 'lenis/dist/lenis.css';

// Root Element
const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Root element not found. Ensure your HTML has a <div id='root'></div>");
}

createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

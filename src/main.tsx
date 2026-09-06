import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Nova Dev Tools: Root element not found.');
}

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

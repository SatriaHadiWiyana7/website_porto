import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import App from './App';

// Runs only during the static build. Hosting needs no Node server.
export function render() {
  return renderToString(<StrictMode><App /></StrictMode>);
}

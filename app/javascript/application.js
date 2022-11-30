// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "custom/menu"
import "@hotwired/turbo-rails"
import "controllers"
import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App';

const container = document.getElementById('root');
const root = createRoot(container);

document.addEventListener('DOMContentLoaded', () => {
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
});
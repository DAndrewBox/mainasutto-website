import React from 'react';
import ReactDOM from 'react-dom/client';
import router from './public/setupRoutes';
import { RouterProvider } from 'react-router-dom';
import { BlogProvider } from './redux';
import './public/i18n';
import './globals.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BlogProvider>
      <RouterProvider router={router} />
    </BlogProvider>
  </React.StrictMode>
);

window.scrollTo({ top: 0, behavior: 'smooth' });

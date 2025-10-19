import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from './public/setupRoutes';
import { BlogProvider } from './store';
import './public/i18n';
import './globals.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <BlogProvider>
      <RouterProvider router={router} />
    </BlogProvider>
  </React.StrictMode>,
);

window.scrollTo({ top: 0, behavior: 'smooth' });

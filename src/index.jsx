import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import router from './public/setupRoutes';
import { RouterProvider } from 'react-router-dom';
import { BlogProvider } from '@store';
import './public/i18n';
import './globals.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <BlogProvider>
      <RouterProvider router={router} />
    </BlogProvider>
  </StrictMode>
);

window.scrollTo({ top: 0, behavior: 'smooth' });

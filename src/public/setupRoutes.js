import { createBrowserRouter } from 'react-router-dom';
import { Alpha, Beta, Blog, BlogPostPage, Home, Released } from '../pages/';

const router = createBrowserRouter([
  {
    path: '/',
    exact: true,
    element: <Home />,
  },
  {
    path: '/alpha',
    exact: true,
    element: <Alpha />,
  },
  {
    path: '/beta',
    exact: true,
    element: <Beta />,
  },
  {
    path: '/released',
    exact: true,
    element: <Released />,
  },
  {
    path: '/blog',
    exact: true,
    element: <Blog />,
  },
  {
    path: '/blog/:postID',
    element: <BlogPostPage />,
  },
]);

export default router;

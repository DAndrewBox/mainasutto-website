import { createBrowserRouter } from 'react-router-dom';
import { Alpha, Beta, Blog, BlogPostPage, Home, Redirect, Released } from '../pages/';

const router = createBrowserRouter([
  {
    path: '/',
    exact: true,
    element: <Home />,
    errorElement: <Redirect to={'/'} />,
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
  {
    path: '/discord',
    element: <Redirect to={'https://discord.com/invite/gGKWyns'} />,
  },
  {
    path: '/twitter',
    element: <Redirect to={'https://twitter.com/mainasutto'} />,
  },
  {
    path: '/steam',
    element: <Redirect to={'https://store.steampowered.com/app/2580170'} />,
  },
  {
    path: '/devlog',
    element: <Redirect to={'/blog'} />,
  },
]);

export default router;
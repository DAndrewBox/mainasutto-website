import { createBrowserRouter } from 'react-router-dom';
import { Alpha, Beta, Blog, BlogPostPage, Home, NotFound, Redirect, Released } from '../pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: '/alpha',
    element: <Alpha />,
  },
  {
    path: '/beta',
    element: <Beta />,
  },
  {
    path: '/released',
    element: <Released />,
  },
  {
    path: '/blog',
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
  {
    path: '/presskit',
    element: <Redirect to={'https://www.indiedb.com/games/mainasutto-im-not-alone/presskit'} />,
  },
]);

export default router;

import { createBrowserRouter } from 'react-router-dom';
import { Home } from '../pages/';

const router = createBrowserRouter([
  {
    path: '/',
    exact: true,
    element: <Home />,
  },
]);

export default router;

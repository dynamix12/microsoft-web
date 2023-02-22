import { Gallery } from './components/gallery/Gallery';
import { Login } from './components/login/Login';
import { Home } from './components/home/Home';

const AppRoutes = [
  {
    index: true,
    element: <Home />,
  },
  {
    path: '/gallery',
    element: <Gallery />,
  },
  {
    path: '/login',
    element: <Login />,
  },
];

export default AppRoutes;

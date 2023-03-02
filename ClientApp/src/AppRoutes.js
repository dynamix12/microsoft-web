import { Gallery } from './components/gallery/Gallery';
import { Login } from './components/login/Login';
import { Home } from './components/home/Home';
import { Register } from './components/register/Register';

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
  {
    path: '/register',
    element: <Register />,
  },
];

export default AppRoutes;

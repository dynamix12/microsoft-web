import { Gallery } from './components/gallery/Gallery';
import Login from './components/login/Login';
import Home from './components/home/Home';
import { Register } from './components/register/Register';
import { Location } from './components/location/Location';
import { FAQ } from './components/FAQ/FAQ';
import { WorkTime } from './components/work-time/Work-time';

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
  {
    path: '/location',
    element: <Location />,
  },
  {
    path: '/FAQ',
    element: <FAQ />,
  },
  {
    path: '/workTime',
    element: <WorkTime />,
  },
];

export default AppRoutes;

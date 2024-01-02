import { Navigate, Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import LoadingPage from '../components/layouts/LoadingPage';

const user: User = { name: 'test', id: -1, email: 'esdlab', token: 'test' };

const load = (Component: any) => (props: any) => (
  <Suspense fallback={<LoadingPage />}>
    <Component {...props} />
  </Suspense>
);

const Login = load(lazy(() => import('../pages/Login')));
const About = load(lazy(() => import('../pages/About')));
const Achievements = load(lazy(() => import('../pages/Achievements')));
const Admin = load(lazy(() => import('../pages/Admin')));
const Home = load(lazy(() => import('../pages/Home')));
const OpenSource = load(lazy(() => import('../pages/OpenSource')));
const Product = load(lazy(() => import('../pages/Product')));
const Team = load(lazy(() => import('../pages/Team')));

const ProtectedRoute: React.FC<{ user: User }> = ({ user }) => {
  if (user.id < 0) {
    return <Navigate replace to='/login' />;
  }

  return (
    <Routes>
      <Route index element={<Admin />} />
    </Routes>
  );
};

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/about' element={<About />} />
      <Route path='/achievements' element={<Achievements />} />
      <Route path='/opensource' element={<OpenSource />} />
      <Route path='/product' element={<Product />} />
      <Route path='/team' element={<Team />} />
      <Route path='/dashboard' element={<ProtectedRoute user={user} />} />
    </Routes>
  );
};

export default AppRoutes;

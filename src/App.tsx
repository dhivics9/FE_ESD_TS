import { useEffect, useState } from 'react';
import './App.css';
import AppRoutes from './routes/Routes';
import { useLocation } from 'react-router-dom';
import LoadingPage from './components/layouts/LoadingPage';

function App() {
  const [loading, setloading] = useState<boolean>(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => {
      setloading(false);
    });
  }, []);

  return loading ? <LoadingPage /> : <AppRoutes />;
}

export default App;

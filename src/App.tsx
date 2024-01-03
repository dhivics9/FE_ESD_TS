import './App.css';

import CTALayout from './components/layouts/CTALayout/CTALayout';
import Footer from './components/layouts/Footer/Footer';
import Navbar from './components/layouts/Navbar/Navbar';
import AppRoutes from './routes/Routes';

function App() {
  return (
    <div className=''>
      <Navbar />
      <div className='pt-[80px]'>
        <AppRoutes />
      </div>
      <CTALayout />
      <Footer />
    </div>
  );
}

export default App;

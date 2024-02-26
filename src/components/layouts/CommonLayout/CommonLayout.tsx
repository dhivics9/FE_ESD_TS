import CTALayout from '../CTALayout/CTALayout';
import Footer from '../Footer';
import Navbar from '../Navbar/Navbar';

interface CommonLayoutProps {
  children: React.ReactNode;
}

const CommonLayout: React.FC<CommonLayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className='pt-[80px]'>{children}</div>
      <CTALayout />
      <Footer />
    </>
  );
};

export default CommonLayout;

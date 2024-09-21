import { Outlet } from "react-router-dom";
import CTALayout from "../CTALayout/CTALayout";
import Footer from "../Footer";
import Navbar from "../Navbar/Navbar";

const CommonLayout = () => {
  return (
    <>
      <Navbar />
      <div className="pt-[80px]">
        <Outlet />
      </div>
      <CTALayout />
      <Footer />
    </>
  );
};

export default CommonLayout;

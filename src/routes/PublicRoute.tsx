import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import LoadingPage from "../components/layouts/LoadingPage";
import CommonLayout from "../components/layouts/CommonLayout";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const load = (Component: any) => (props: any) => (
  <Suspense fallback={<LoadingPage />}>
    <Component {...props} />
  </Suspense>
);

const Login = load(lazy(() => import("../pages/Login")));
const About = load(lazy(() => import("../pages/About")));
const Achievements = load(lazy(() => import("../pages/Achievements")));
const Home = load(lazy(() => import("../pages/Home")));
const OpenSource = load(lazy(() => import("../pages/OpenSource")));
const Product = load(lazy(() => import("../pages/Product")));
const Team = load(lazy(() => import("../pages/Team")));
const Events = load(lazy(() => import("../pages/Events")));

const PublicRoute: React.FC = () => {
  return (
    <Routes>
      <Route element={<CommonLayout />}>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/events" element={<Events />} />
        <Route path="/opensource" element={<OpenSource />} />
        <Route path="/product" element={<Product />} />
        <Route path="/team" element={<Team />} />
      </Route>
    </Routes>
  );
};

export default PublicRoute;

import { Navigate, Route, Routes } from "react-router-dom";
import LoadingPage from "../components/layouts/LoadingPage";
import { Suspense, lazy } from "react";
import Sidebar from "../components/layouts/Sidebar";
import { useTypedSelector } from "../store";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const load = (Component: any) => (props: any) => (
  <Suspense fallback={<LoadingPage />}>
    <Component {...props} />
  </Suspense>
);

const Dashboard = load(lazy(() => import("../pages/Admin/Dashboard")));
const AchievementAdmin = load(
  lazy(() => import("../pages/Admin/AchievementAdmin")),
);
const ProductAdmin = load(lazy(() => import("../pages/Admin/ProductAdmin")));
const MemberAdmin = load(lazy(() => import("../pages/Admin/MemberAdmin")));
const EventsAdmin = load(lazy(() => import("../pages/Admin/EventsAdmin")));

const ProtectedRoute = () => {
  const { user } = useTypedSelector((state) => state.user);

  if (!user?.token) {
    return <Navigate to="/login" />;
  }

  return (
    <Routes>
      <Route element={<Sidebar />}>
        <Route index element={<Dashboard />} />
        <Route path="/achievement" element={<AchievementAdmin />} />
        <Route path="/product" element={<ProductAdmin />} />
        <Route path="/member" element={<MemberAdmin />} />
        <Route path="*" element={<EventsAdmin />} />
      </Route>
    </Routes>
  );
};

export default ProtectedRoute;

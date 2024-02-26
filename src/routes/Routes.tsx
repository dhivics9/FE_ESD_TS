import { Route, Routes } from "react-router-dom";
import CommonLayout from "../components/layouts/CommonLayout";
import Sidebar from "../components/layouts/Sidebar";
import ProtectedRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import { useTypedSelector } from "../store";

const AppRoutes: React.FC = () => {
  const { user } = useTypedSelector((state) => state.user);
  return (
    <Routes>
      <Route
        path="*"
        element={
          <CommonLayout>
            <PublicRoute />
          </CommonLayout>
        }
      />
      <Route
        path="/dashboard/*"
        element={
          <Sidebar>
            <ProtectedRoute user={user} />
          </Sidebar>
        }
      />
    </Routes>
  );
};

export default AppRoutes;

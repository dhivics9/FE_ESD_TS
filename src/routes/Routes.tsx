import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import { useTypedSelector } from "../store";

const AppRoutes: React.FC = () => {
  const { user } = useTypedSelector((state) => state.user);
  return (
    <Routes>
      <Route path="*" element={<PublicRoute />} />
      <Route path="/dashboard/*" element={<ProtectedRoute user={user} />} />
    </Routes>
  );
};

export default AppRoutes;

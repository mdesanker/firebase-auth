import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const user = useSelector((state) => state.auth.value);
  return user ? <Outlet /> : <Navigate to="/signin" />;
};

export default ProtectedRoute;

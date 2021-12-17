import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { auth } from "../../config/Firebase";

const ProtectedRoute = ({ children }) => {
  const user = useSelector((state) => state.auth.value);

  console.log("User from PR: ", user);

  // Children implementation
  // return user ? children : <Navigate to="/signin" />;

  // Outlet implementation
  return user ? <Outlet /> : <Navigate to="/signin" />;
};

export default ProtectedRoute;

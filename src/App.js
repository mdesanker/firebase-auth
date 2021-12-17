import Signin from "./views/auth/SignIn";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./views/protected/ProtectedRoute";
import Dashboard from "./views/protected/Dashboard";

const App = () => {
  return (
    <Routes>
      {/* Children implementation */}
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      {/* Outlet implementation */}
      {/* <Route path="/" element={<ProtectedRoute />}>
        <Route element={<Dashboard />} />
      </Route> */}
      <Route path="/signin" element={<Signin />} />
    </Routes>
  );
};

export default App;

import Signin from "./views/auth/SignIn";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./views/protected/ProtectedRoute";
import Dashboard from "./views/protected/Dashboard";
import { auth } from "./config/Firebase";
import { Fragment } from "react";
import Menu from "./views/menu/Menu";

const App = () => {
  return (
    <Fragment>
      <Menu />
      <Routes>
        {/* Children implementation */}
        {/* <Route
        path="/"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        } 
      /> */}
        {/* Outlet implementation */}
        <Route path="/" element={<ProtectedRoute />}>
          <Route path="/" element={<Dashboard />} />
        </Route>
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </Fragment>
  );
};

export default App;

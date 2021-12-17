import Signin from "./views/auth/SignIn";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./views/protected/ProtectedRoute";
import Dashboard from "./views/protected/Dashboard";
import { Fragment } from "react";
import Menu from "./views/menu/Menu";
import { useSelector } from "react-redux";

const App = () => {
  const auth = useSelector((state) => state.auth.value);

  return (
    <Fragment>
      {auth && <Menu />}
      <Routes>
        <Route path="/" element={<ProtectedRoute />}>
          <Route path="/" element={<Dashboard />} />
        </Route>
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </Fragment>
  );
};

export default App;

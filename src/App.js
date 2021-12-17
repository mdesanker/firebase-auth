import Signin from "./views/auth/SignIn";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<div />} />
      <Route path="/signin" element={<Signin />} />
    </Routes>
  );
};

export default App;

import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <ul>
      <li>
        <Link to="/signin">Sign In</Link>
      </li>
      <li>
        <Link to="/dashboard">Dashboard</Link>
      </li>
    </ul>
  );
};

export default Menu;

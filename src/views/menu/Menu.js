import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <ul>
      <li>
        <Link to="/">Dashboard</Link>
      </li>
      <li>Profile</li>
      <li>Settings</li>
    </ul>
  );
};

export default Menu;

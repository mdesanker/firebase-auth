import { signOut } from "firebase/auth";
import { Fragment } from "react";
import { auth } from "../../config/Firebase";

const Dashboard = () => {
  const logoutHandler = () => {
    signOut(auth)
      .then(() => {
        console.log("User signed out");
      })
      .catch((error) => console.error(error.message));
  };

  return (
    <Fragment>
      <h1>Welcome to your private Dashboard</h1>
      <button onClick={logoutHandler}>Log Out</button>
    </Fragment>
  );
};

export default Dashboard;

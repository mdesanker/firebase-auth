import { auth } from "./config/Firebase";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";

const App = () => {
  const loginHandler = (e) => {
    e.preventDefault();

    const email = document.querySelector("#email");
    const password = document.querySelector("#password");

    signInWithEmailAndPassword(auth, email.value, password.value)
      .then((userCred) => {
        const user = userCred.user;
        console.log(user);
      })
      .catch((error) => {
        console.error(error.message);
      });

    email.value = "";
    password.value = "";
  };

  const logoutHandler = () => {
    signOut(auth)
      .then(() => console.log("User signed out"))
      .catch((error) => console.error(error.message));
  };

  return (
    <div>
      <form onSubmit={loginHandler}>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />
        <button type="submit">Log In</button>
      </form>
      <button onClick={logoutHandler}>Log Out</button>
    </div>
  );
};

export default App;

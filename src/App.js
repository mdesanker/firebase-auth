import { auth } from "./config/Firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const App = () => {
  const loginHandler = (e) => {
    e.preventDefault();

    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;

    signInWithEmailAndPassword(auth, email, password)
      .then((userCred) => {
        const user = userCred.user;
        console.log(user);
      })
      .catch((error) => {
        console.error(error.message);
      });
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
    </div>
  );
};

export default App;

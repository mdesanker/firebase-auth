import { auth } from "../../config/Firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { useSelector, useDispatch } from "react-redux";
import { saveUser } from "../../store/authSlice";
import { useEffect } from "react";

const Signin = () => {
  const user = useSelector((state) => state.auth.value);
  console.log("User from redux state: ", user);
  console.log("Auth from signin: ", auth.currentUser);

  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(saveUser(user.refreshToken));
      } else {
        dispatch(saveUser(undefined));
      }
    });
  }, [auth, dispatch]);

  // Functions
  const signinHandler = (e) => {
    e.preventDefault();

    const email = document.querySelector("#email");
    const password = document.querySelector("#password");

    signInWithEmailAndPassword(auth, email.value, password.value)
      .then((userCred) => {
        const user = userCred.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("Error ocured: ", errorCode, errorMessage);
      });

    email.value = "";
    password.value = "";
  };

  const signupHandler = (e) => {
    e.preventDefault();

    const email = document.querySelector("#new-email");
    const password = document.querySelector("#new-password");

    createUserWithEmailAndPassword(auth, email.value, password.value)
      .then((userCred) => {
        const user = userCred.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("Error ocured: ", errorCode, errorMessage);
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
      <h2>Sign In</h2>
      <form onSubmit={signinHandler}>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />
        <button type="submit">Log In</button>
      </form>
      <button onClick={logoutHandler}>Log Out</button>

      <hr />
      <h2> Sign Up</h2>
      <form onSubmit={signupHandler}>
        <label htmlFor="new-email">Email:</label>
        <input type="email" id="new-email" name="new-email" />
        <label htmlFor="new-password">Password:</label>
        <input type="password" id="new-password" name="new-password" />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default Signin;

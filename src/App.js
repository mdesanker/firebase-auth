const App = () => {
  const loginHandler = (e) => {
    e.preventDefault();
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

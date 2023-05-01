import css from "./Login.module.css";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { logIn } from "components/Redux/authOperations.js";

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(logIn({ email, password }));
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit} className={css.form}>
        <label htmlFor="email">Email:</label>
        <input
          onChange={handleChange}
          type="email"
          id="email"
          name="email"
          value={email}
          required
          title="Enter your email address"
        ></input>
        <label htmlFor="pass">Password:</label>
        <input
          onChange={handleChange}
          type="password"
          id="pass"
          name="password"
          value={password}
          required
          title="Enter your password"
        ></input>
        <button type="submit">Sign in</button>
      </form>
    </>
  );
};

export default Login;
import css from "./Login.module.css";
import React from "react";
import { useDispatch } from "react-redux";
import { logIn } from "components/Redux/authOperations.js";
import { useFormik } from "formik";

const Login = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      dispatch(logIn(values))
        .unwrap()
        .then((res) => {
          console.log(res);
        })
        .catch(() => {
          formik.setErrors({ error: "The email or password is incorrect." });
        });
    },
  });

  const err = formik.errors.error ? css.error : "";

  return (
      <div className={css["container-login"]}>
        <form onSubmit={formik.handleSubmit} className={css.form}>
          <p className={css.title}>Login</p>
          <label className={css.label} htmlFor="email">
            Email:
          </label>
          <input
            className={`${css.input} ${err}`}
            onChange={formik.handleChange}
            type="email"
            id="email"
            name="email"
            value={formik.values.email}
            required
            title="Enter email address"
          ></input>
          {formik.errors.error ? (
            <div className={css["error-msg"]}>{formik.errors.error}</div>
          ) : null}
          <label className={css.label} htmlFor="pass">
            Password:
          </label>
          <input
            className={`${css.input} ${err}`}
            onChange={formik.handleChange}
            type="password"
            id="pass"
            name="password"
            value={formik.values.password}
            required
            title="Enter Your Password"
          ></input>
          <button className={css["btn-login"]} type="submit">
            Sign in
          </button>
        </form>
      </div>
  );
};

export default Login;
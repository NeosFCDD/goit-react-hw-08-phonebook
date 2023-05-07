import React from "react";
import { useDispatch } from "react-redux";
import { register } from "components/Redux/authOperations.js";
import css from "./Register.module.css";
import { Notify } from "notiflix/build/notiflix-notify-aio";
import { useFormik } from "formik";

const Register = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      dispatch(register(values))
        .unwrap()
        .then()
        .catch((error) => {
          error.includes("500")
            ? Notify.error("Server error.")
            : formik.setErrors({ error: "Seems the email is already in use." });
        });
    },
  });

  const err = formik.errors.error ? css.error : "";

  return (
      <div className={css["container-login"]}>
        <form onSubmit={formik.handleSubmit} className={css.form}>
          <p className={css.title}>Create Account</p>
          <label className={css.label} htmlFor="name">
            Name
          </label>
          <input
            className={css.input}
            onChange={formik.handleChange}
            type="text"
            id="name"
            name="name"
            value={formik.values.name}
            required
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          ></input>
          <label className={css.label} htmlFor="email">
            Email
          </label>
          <input
            className={`${css.input} ${err}`}
            onChange={formik.handleChange}
            type="email"
            id="email"
            name="email"
            value={formik.values.email}
            required
            pattern="^.+@[^\.].*\.[a-z]{2,}$"
            title="Enter your email address"
          ></input>
          {formik.errors.error ? (
            <div className={css["error-msg"]}>{formik.errors.error}</div>
          ) : null}
          <label className={css.label} htmlFor="pass">
            Password
          </label>
          <input
            className={css.input}
            onChange={formik.handleChange}
            type="password"
            id="pass"
            name="password"
            value={formik.values.password}
            required
            pattern="^.{8,20}$"
            title="Matches any string between 8 and 20 characters in length"
          ></input>
          <button className={css["btn-login"]} type="submit">
            Sign up
          </button>
        </form>
      </div>
  );
};

export default Register;
import { Link } from "react-router-dom";
import css from "components/Navigation/Navigation.module.css";

const AuthMenu = () => {
  return (
    <ul className={css.navlist}>
      <li className={css.navitem}>
        <Link className={css.register} to="/register">Register</Link>
      </li>
      <li className={css.navitem}>
        <Link to="/login">Login</Link>
      </li>
    </ul>
  );
};

export default AuthMenu;
import { Link, Outlet } from "react-router-dom";
import { Suspense } from "react";
import { useSelector } from "react-redux";
import Loader from "components/Form/Loader.jsx";
import css from "components/Navigation/Navigation.module.css";
import UserMenu from "./UserMenu";
import AuthMenu from "./AuthMenu";
import { getIsLoggedIn } from "components/Redux/selectors";

const Navigation = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  
  return (
    <div className={css.container}>
      <header>
        <nav className={css.navbox}>
          <ul className={css.navlist}>
            <li className={css.navitem}>
                <Link to="/">Home</Link>
            </li>
            <li className={css.navitem}>
                <Link to="/contacts">Contacts</Link>
            </li>
          </ul>
          {isLoggedIn ? <UserMenu /> : <AuthMenu />}
        </nav>
      </header>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};

export default Navigation;
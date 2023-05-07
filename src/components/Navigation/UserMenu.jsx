import { useSelector, useDispatch } from "react-redux";
import { getUserName } from "components/Redux/selectors";
import { logOut } from "components/Redux/authOperations";
import css from "components/Navigation/Navigation.module.css";

const UserMenu = () => {
  const userName = useSelector(getUserName);
  const dispatch = useDispatch();

  return (
    <div className={css.navlist}>
      <p>Welcome, <span className={css.username}>{userName}</span></p>
      <button className={css["btn-logout"]} onClick={() => dispatch(logOut())}>Logout</button>
    </div>
  );
};

export default UserMenu;
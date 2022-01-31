import classes from "./Header.module.css";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store";

const Header = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  const loginHandler = () => {
    dispatch(authActions.login());
  };
  const logoutHandler = () => {
    dispatch(authActions.logout());
  };
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        <ul>
          <li>
            <a href="/">My Products</a>
          </li>
          <li>
            <a href="/">My Sales</a>
          </li>
          <li>
            {isAuth && <button onClick={logoutHandler}>Logout</button>}
            {!isAuth && <button onClick={loginHandler}>Login</button>}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

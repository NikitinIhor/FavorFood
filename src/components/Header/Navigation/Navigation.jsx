import clsx from "clsx";
import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";

export default function Navigation() {
  const isActive = ({ isActive }) => {
    return clsx(css.link, isActive && css.isActive);
  };

  return (
    <nav className={css.nav}>
      <ul className={css.list}>
        <li>
          <NavLink className={isActive} to="/">
            home
          </NavLink>
        </li>
        <li>
          <NavLink className={isActive} to="/menu">
            menu
          </NavLink>
        </li>
        <li>
          <NavLink className={isActive} to="/contacts">
            contact us
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

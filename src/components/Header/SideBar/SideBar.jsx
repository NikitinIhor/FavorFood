import { IconContext } from "react-icons";
import { FaCartArrowDown, FaSearch } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import css from "./SideBar.module.css";

export default function SideBar({ products }) {
  return (
    <div className={css.sidebar}>
      <NavLink to="/menu">
        <div className={css.search}>
          <IconContext.Provider value={{ size: 25, color: "grey" }}>
            <FaSearch />
          </IconContext.Provider>
        </div>
      </NavLink>

      <NavLink to="/cart">
        <div className={css.cart}>
          <IconContext.Provider value={{ size: 25, color: "grey" }}>
            <FaCartArrowDown />
          </IconContext.Provider>
          {products.length > 0 && (
            <div className={css.dot}>{products.length}</div>
          )}
        </div>
      </NavLink>
    </div>
  );
}

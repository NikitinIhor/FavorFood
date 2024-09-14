import { IconContext } from "react-icons";
import { FaCartArrowDown, FaSearch } from "react-icons/fa";
import css from "./SideBar.module.css";

export default function SideBar() {
  return (
    <div className={css.sidebar}>
      <div>
        <IconContext.Provider value={{ size: 25 }}>
          <FaSearch />
        </IconContext.Provider>
      </div>
      <div className={css.cart}>
        <IconContext.Provider value={{ size: 25 }}>
          <FaCartArrowDown />
        </IconContext.Provider>
        <div className={css.dot}></div>
      </div>
      <button className={css.btn} type="button">
        sign in
      </button>
    </div>
  );
}

import { IconContext } from "react-icons";
import { IoFastFoodOutline } from "react-icons/io5";
import css from "./Loader.module.css";

export default function Loader() {
  return (
    <div className={css.loader}>
      <div className={css.underline}>
        <span>F</span>
        <span>a</span>
        <span>v</span>
        <span>o</span>
        <span>r</span>
        <span>
          <IconContext.Provider value={{ size: 50, color: "green" }}>
            <IoFastFoodOutline />
          </IconContext.Provider>
        </span>
        <span>F</span>
        <span>o</span>
        <span>o</span>
        <span>d</span>
        <span>.</span>
      </div>
    </div>
  );
}

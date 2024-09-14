import { IconContext } from "react-icons";
import { IoFastFoodOutline } from "react-icons/io5";
import css from "./Logo.module.css";

export default function Logo() {
  return (
    <div className={css.logo}>
      Favor
      <IconContext.Provider value={{ size: 40, color: "green" }}>
        <IoFastFoodOutline />
      </IconContext.Provider>
      Food.
    </div>
  );
}

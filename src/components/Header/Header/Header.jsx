import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import SideBar from "../SideBar/SideBar";
import css from "./Header.module.css";

export default function Header({ products }) {
  return (
    <header className={css.header}>
      <div className={css.headerTop}>
        <Logo />
        <SideBar products={products} />
      </div>
      <div className={css.headerBottom}>
        <Navigation />
      </div>
    </header>
  );
}

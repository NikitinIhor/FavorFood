import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import SideBar from "../SideBar/SideBar";
import css from "./Header.module.css";

export default function Header() {
  return (
    <header className={css.header}>
      <div className={css.headerTop}>
        <Logo />
        <SideBar />
      </div>
      <div className={css.headerBottom}>
        <Navigation />
      </div>
    </header>
  );
}

import { IconContext } from "react-icons";
import { CiFacebook, CiLinkedin } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { IoFastFoodOutline } from "react-icons/io5";
import { LuGithub } from "react-icons/lu";
import css from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={css.footer}>
      <div className={css.logo}>
        Favor
        <IconContext.Provider value={{ size: 40, color: "white" }}>
          <IoFastFoodOutline />
        </IconContext.Provider>
        Food.
      </div>
      <ul className={css.socials}>
        <li>
          <a href="https://www.linkedin.com/in/nikitin-ihor/" target="_blank">
            <IconContext.Provider value={{ size: 30, color: "white" }}>
              <CiLinkedin />
            </IconContext.Provider>
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/igor.nikitin.73113/ "
            target="_blank"
          >
            <IconContext.Provider value={{ size: 30, color: "white" }}>
              <CiFacebook />
            </IconContext.Provider>
          </a>
        </li>
        <li>
          <a href="https://wa.me/+48570642244" target="_blank">
            <IconContext.Provider value={{ size: 30, color: "white" }}>
              <FaWhatsapp />
            </IconContext.Provider>
          </a>
        </li>
        <li>
          <a href="https://github.com/NikitinIhor" target="_blank">
            <IconContext.Provider value={{ size: 30, color: "white" }}>
              <LuGithub />
            </IconContext.Provider>
          </a>
        </li>
      </ul>
      <div className={css.bottom}>
        <p>All Right Reserved - 2024 FavorFood.</p>
      </div>
    </footer>
  );
}

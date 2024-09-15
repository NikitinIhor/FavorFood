import { menuGallery } from "../../allMunuList";
import MenuGalleryItem from "../../components/HomePage/MenuGalleryItem/MenuGalleryItem";
import css from "./Menu.module.css";

export default function Menu() {
  return (
    <div className={css.container}>
      <h2>All menu list</h2>
      <ul className={css.list}>
        {menuGallery.map((el) => (
          <MenuGalleryItem el={el} />
        ))}
      </ul>
    </div>
  );
}

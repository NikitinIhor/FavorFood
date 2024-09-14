import { menuGallery } from "../../../allMunuList";
import MenuGalleryItem from "../MenuGalleryItem/MenuGalleryItem";
import css from "./MenuGallery.module.css";

export default function MenuGallery() {
  return (
    <div className={css.container}>
      <h2>Top dishes</h2>
      <ul className={css.list}>
        {menuGallery.map((el) => (
          <MenuGalleryItem key={el.id} el={el} />
        ))}
      </ul>
    </div>
  );
}

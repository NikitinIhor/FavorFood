import { menuGallery } from "../../../allMunuList";
import MenuGalleryItem from "../MenuGalleryItem/MenuGalleryItem";
import css from "./MenuGallery.module.css";

export default function MenuGallery({ category, menuRef }) {
  const filtredMenu =
    category === "all"
      ? menuGallery
      : menuGallery.filter((el) => el.category === category);

  const addWithS = (category) => {
    return category.endsWith("s") ? category : `${category}s`;
  };

  return (
    <div ref={menuRef} className={css.container}>
      {filtredMenu.length === 0 ? "" : <h2>Top {addWithS(category)}</h2>}

      <ul className={css.list}>
        {filtredMenu.map((el) => (
          <MenuGalleryItem key={el.id} el={el} />
        ))}
      </ul>
    </div>
  );
}

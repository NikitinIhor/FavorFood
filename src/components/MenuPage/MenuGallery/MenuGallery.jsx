import { menuGallery } from "../../../allMunuList";
import css from "./MenuGallery.module.css";

export default function MenuGallery() {
  return (
    <div className={css.container}>
      <h2>Top dishes</h2>
      <ul className={css.list}>
        {menuGallery.map((el) => (
          <li className={css.item} key={el.id}>
            <img src={el.image} alt={el.name} />
            <div className={css.content}>
              <div className={css.rating}>
                <p className={css.name}>{el.name}</p>
                <img src={el.rating} alt="rating" />
              </div>
              <p className={css.description}>{el.description}</p>
              <p className={css.price}>{el.price}$</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

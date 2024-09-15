import { useState } from "react";
import css from "./MenuGalleryItem.module.css";

export default function MenuGalleryItem({ el }) {
  const [counter, setCounter] = useState(0);

  const handleAdd = () => {
    setCounter((prev) => prev + 1);
  };
  const handleRemove = () => {
    setCounter((prev) => prev - 1);
  };

  return (
    <li className={css.item}>
      <img className={css.image} src={el.image} alt={el.name} />
      <div className={css.order}>
        {counter === 0 ? (
          <div onClick={handleAdd} className={css.add}>
            +
          </div>
        ) : (
          <div className={css.counter}>
            <span onClick={handleRemove} className={css.minus}>
              -
            </span>
            <p className={css.total}>{counter}</p>
            <span onClick={handleAdd} className={css.plus}>
              +
            </span>
          </div>
        )}
      </div>
      <div className={css.content}>
        <div className={css.rating}>
          <p className={css.name}>{el.name}</p>
          <img src={el.rating} alt="rating" />
        </div>
        <p className={css.description}>{el.description}</p>
        <p className={css.price}>{el.price}$</p>
      </div>
    </li>
  );
}

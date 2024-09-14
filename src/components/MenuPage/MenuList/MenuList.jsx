import { menu } from "../../../menu";
import css from "./MenuList.module.css";

export default function MenuList({ category, setCategory }) {
  const handleClick = (name) => {
    setCategory((prev) => (prev === name ? "all" : name));
  };

  return (
    <div className={css.container}>
      <h2 className={css.title}>Explore our menu</h2>
      <p className={css.text}>
        Discover a wide variety of delicious options and find the perfect meal
        to satisfy your cravings. From fresh salads to hearty dinners, we've got
        something for everyone.
      </p>
      <ul className={css.list}>
        {menu.map((el, index) => (
          <li
            onClick={() => handleClick(el.name)}
            className={css.item}
            key={index}
          >
            <img
              className={`${css.image} ${
                category === el.name ? css.isActive : ""
              }`}
              src={el.img}
              alt={el.name}
            />
            <p>{el.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

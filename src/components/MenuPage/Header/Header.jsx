import css from "./Header.module.css";

export default function Header() {
  return (
    <div className={css.munu}>
      <div className={css.content}>
        <h1>Order you favourite food here</h1>
        <p>
          Order your favorite meals with ease, from hearty dinners and fresh
          salads to delicious cakes and savory meats. Explore our menu and enjoy
          a wide variety of dishes, all prepared with the finest ingredients and
          delivered right to your door
        </p>
        <button type="button">View Menu</button>
      </div>
    </div>
  );
}

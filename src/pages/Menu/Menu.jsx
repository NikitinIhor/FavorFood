import { useEffect, useRef, useState } from "react";
import { IconContext } from "react-icons";
import { FaSearch } from "react-icons/fa";
import { menuGallery } from "../../allMunuList";
import MenuGalleryItem from "../../components/HomePage/MenuGalleryItem/MenuGalleryItem";
import css from "./Menu.module.css";

export default function Menu({ handleAddProduct, handleRemoveProduct }) {
  const [search, setSearch] = useState("");

  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const filtredMenuGallery = menuGallery.filter((el) =>
    el.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={css.container}>
      <div className={css.header}>
        <h2>All menu list</h2>
        <div className={css.input}>
          <input
            ref={inputRef}
            onChange={handleSearch}
            value={search}
            type="text"
            name="text"
            placeholder="searh your food"
          />
          <IconContext.Provider value={{ size: 20, color: "grey" }}>
            <FaSearch className={css.search} />
          </IconContext.Provider>
        </div>
      </div>

      <ul className={css.list}>
        {filtredMenuGallery.map((el) => (
          <MenuGalleryItem
            key={el.id}
            el={el}
            handleAddProduct={handleAddProduct}
            handleRemoveProduct={handleRemoveProduct}
          />
        ))}
      </ul>
    </div>
  );
}

import { useRef, useState } from "react";
import Header from "../../components/MenuPage/Header/Header";
import MenuGallery from "../../components/MenuPage/MenuGallery/MenuGallery";
import MenuList from "../../components/MenuPage/MenuList/MenuList";

export default function Menu() {
  const [category, setCategory] = useState("all");
  const [showMenuGallery, setshowMenuGallery] = useState(false);
  const menuRef = useRef();

  const handleViewMenu = () => {
    setTimeout(() => {
      menuRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <>
      <Header
        setCategory={setCategory}
        setshowMenuGallery={setshowMenuGallery}
        handleViewMenu={handleViewMenu}
      />
      <MenuList
        category={category}
        setCategory={setCategory}
        setshowMenuGallery={setshowMenuGallery}
        handleViewMenu={handleViewMenu}
      />
      {showMenuGallery && <MenuGallery category={category} menuRef={menuRef} />}
    </>
  );
}

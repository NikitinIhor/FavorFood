import { useRef, useState } from "react";
import Header from "../../components/HomePage/Header/Header";
import MenuGallery from "../../components/HomePage/MenuGallery/MenuGallery";
import MenuList from "../../components/HomePage/MenuList/MenuList";

export default function Home({ handleRemoveProduct, handleAddProduct }) {
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
      {showMenuGallery && (
        <MenuGallery
          handleAddProduct={handleAddProduct}
          handleRemoveProduct={handleRemoveProduct}
          category={category}
          menuRef={menuRef}
        />
      )}
    </>
  );
}

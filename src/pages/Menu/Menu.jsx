import { useState } from "react";
import Header from "../../components/MenuPage/Header/Header";
import MenuGallery from "../../components/MenuPage/MenuGallery/MenuGallery";
import MenuList from "../../components/MenuPage/MenuList/MenuList";

export default function Menu() {
  const [category, setCategory] = useState("all");

  return (
    <>
      <Header />
      <MenuList category={category} setCategory={setCategory} />
      <MenuGallery />
    </>
  );
}

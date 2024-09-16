import { lazy, Suspense, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header/Header";
import Loader from "./components/Loader/Loader";

const Home = lazy(() => import("./pages/Home/Home"));
const Menu = lazy(() => import("./pages/Menu/Menu"));
const Contacts = lazy(() => import("./pages/Contacts/Contacts"));
const Cart = lazy(() => import("./pages/Cart/Cart"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));

export default function App() {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 5000);
  }, [setLoader]);

  const [products, setProducts] = useState([]);

  const handleAddProduct = (product) => {
    setProducts((prevProducts) => {
      const existingProduct = prevProducts.find((el) => el.id === product.id);

      if (existingProduct) {
        return prevProducts.map((el) =>
          el.id === product.id ? { ...el, quantity: el.quantity + 1 } : el
        );
      } else {
        return [...prevProducts, { ...product, quantity: 1 }];
      }
    });
  };

  const handleRemoveProduct = (prev) => {
    setProducts(products.filter((product) => prev.id !== product.id));
  };

  if (loader) return <Loader />;

  return (
    <>
      <div className="wrapper">
        <Suspense fallback={null}>
          <Header products={products} />
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  handleAddProduct={handleAddProduct}
                  handleRemoveProduct={handleRemoveProduct}
                />
              }
            />
            <Route
              path="/menu"
              element={
                <Menu
                  handleAddProduct={handleAddProduct}
                  handleRemoveProduct={handleRemoveProduct}
                />
              }
            />
            <Route path="/contacts" element={<Contacts />} />
            <Route
              path="/cart"
              element={
                <Cart
                  products={products}
                  handleRemoveProduct={handleRemoveProduct}
                />
              }
            />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </div>
      <Footer />
    </>
  );
}

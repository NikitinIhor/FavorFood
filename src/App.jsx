import { lazy, Suspense, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header/Header";
import Loader from "./components/Loader/Loader";

const Home = lazy(() => import("./pages/Home/Home"));
const Menu = lazy(() => import("./pages/Menu/Menu"));
const Contacts = lazy(() => import("./pages/Contacts/Contacts"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));

export default function App() {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 5000);
  }, [setLoader]);

  if (loader) return <Loader />;

  return (
    <>
      <div className="wrapper">
        <Suspense fallback={null}>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </div>
      <Footer />
    </>
  );
}

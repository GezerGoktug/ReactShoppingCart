import Header from "./components/layout/Header";
import Main from "./components/layout/Main";
import "./sass/base/reset.scss";
import { useEffect, useState } from "react";
import { CartSideBarContent } from "./components/Cart/CartSideBarContent";
import CartProvider from "./components/context/CartProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { productData } from "./ProductsData";
import Footer from "./components/layout/Footer";
import { NavigationSideBarContent } from "./components/UI/NavigationSideBarContent";

function App() {
  const filtreTag = document.getElementsByClassName("filtre-tag");
  useEffect(() => {
    filtreTag[0].classList.add("active");
  }, []);
  //! Sepet side barı event ları için state
  const [showCart, setShowCart] = useState(false);
  //! Küçük ekranlarda navigasyon linklerinin sidebarı için event state
  const [showSideBar, setShowSideBar] = useState(false);
  //! Filtre sonuçlarını tutacak olan state
  const [filtreResult, setFiltreResult] = useState(productData);
  //! Arama inputundan yapılan filtre olayını  gerçekleştiren fonksiyon
  const handleSearch = (e) => {
    //! Eğer arama kısmı tamamen boşsa tüm ürünleri göster
    if (e.target.value === "") setFiltreResult(productData);
    //! Eğer filtre boşsa filtreyi temizle
    if (!e.target.value.trim()) return;


    let searchArr = [];
    //! Arama verisi kelimelere ayrılır ve ve bu kelimeler ürün...
    //! isimlerinde aranır eğer uygun sonuç ürün bulunursa diziye kaydedilir ve...
    //! state güncellenir.
    productData.forEach((product) => {
      const titles = product.title.toLowerCase();
      const value = e.target.value.split(" ");
      if (value.every((word) => titles.includes(word))) searchArr.push(product);
    });
    setFiltreResult(searchArr);
    //! Arama yaparken kategori filtresini sıfırla.
    for (let i = 0; i < filtreTag.length; i++)
      filtreTag[i].classList.remove("active");

    filtreTag[0].classList.add("active");
  };
  return (
    <CartProvider>
      {/* (For small devices ) NAVİGATİON BAR START */}
      {showSideBar && (
        <NavigationSideBarContent setShowSideBar={setShowSideBar} />
      )}
      {/* (For small devices ) NAVİGATİON BAR STOP */}
      {/* CART SİDEBAR START */}
      {showCart && <CartSideBarContent setShowCart={setShowCart} />}
      {/* CART SİDEBAR STOP */}
      {/* HEADER START */}
      <Header setShowSideBar={setShowSideBar} setShowCart={setShowCart} />
      {/* HEADER STOP */}
      {/* MAİN START  */}
      <Main
        filtreTag={filtreTag}
        setFiltreResult={setFiltreResult}
        productArray={filtreResult}
        onChange={handleSearch}
      />
      {/* MAİN STOP */}
      {/* FOOTER START */}
      <Footer />
      {/* FOOTER STOP */}
      {/* TOAST START  */}
      <ToastContainer />
      {/* TOAST STOP  */}
    </CartProvider>
  );
}

export default App;

import "../../sass/layout/header.scss";
import Hero from "./Hero";
import Navbar from "./Navbar";
const Header = ({setShowSideBar,setShowCart}) => {
  return (
  <header>
    <Navbar setShowSideBar={setShowSideBar} setShowCart={setShowCart}/>
    <Hero/>
  </header>
  );
};

export default Header;

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShopify } from "@fortawesome/free-brands-svg-icons";
import {
  faBagShopping,
  faUser,
  faMagnifyingGlass,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import "../../sass/layout/navbar.scss";
import { useContext } from "react";
import { CartContext } from "../context/CartProvider";
const Navbar = ({ setShowCart, setShowSideBar }) => {
  const { cartArray } = useContext(CartContext);
  //! Mobil cihazlarda toggle-bar iconuna tıklanırsa soldan navigasyon...
  //! menüsü açılır 
  const handleSideBar = () => {
    setShowSideBar(true);
  };
  return (
    <nav>
      <div className="container">
        <div className="logo">
          <FontAwesomeIcon
            onClick={handleSideBar}
            className="toggle-bar-icon"
            icon={faBars}
          />
          <FontAwesomeIcon icon={faShopify} />
          <span>
            Shopping <span id="second-span">World</span>
          </span>
        </div>
        <ul className="navigation-links">
          <li>
            <a className="pages-link" href="#">
              Home
            </a>
          </li>
          <li>
            <a className="pages-link" href="#">
              About
            </a>
          </li>
          <li>
            <a className="pages-link" href="#">
              Blog
            </a>
          </li>
          <li>
            <a className="pages-link" href="#">
              Contact
            </a>
          </li>
        </ul>
        <ul>
          <li>
            <a className="icon-link" href="#">
              <FontAwesomeIcon className="icons" icon={faMagnifyingGlass} />
            </a>
          </li>
          <li>
            <a className="icon-link" href="#">
              <FontAwesomeIcon className="icons" icon={faUser} />
            </a>
          </li>
          <li>
            <a className="icon-link" onClick={() => setShowCart(true)}>
              <span className="shopping-badge">{cartArray.length}</span>
              <FontAwesomeIcon className="icons" icon={faBagShopping} />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

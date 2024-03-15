import "../../sass/layout/cartSideBar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import Cart from "../Cart/Cart";
import Button from "../UI/Button";
import CartSideBarOverlay from "../layout/CartSideBar";
import { useContext } from "react";
import { CartContext } from "../context/CartProvider";
//! Sağdan Açılan Sepet Sidebar Componenti
export const CartSideBarContent = ({ setShowCart }) => {
  const { clearProductList, totalPrice } = useContext(CartContext);
  //! Sepet sidebarı dışında bir yere tıklanırsa sidebar kapanır
  const screenSideBarHandle = (e) => {
    if (e.target.classList.contains("side-bar-wrapper")) setShowCart(false);
  };
  return (
    <CartSideBarOverlay>
      <div onClick={screenSideBarHandle} className="side-bar-wrapper">
        <div className="side-bar">
          <FontAwesomeIcon
            onClick={() => {
              setShowCart(false);
            }}
            className="icon"
            icon={faXmark}
          />
          <h3>My Cart</h3>
          <Cart></Cart>
          <Button onClick={clearProductList} className="btn-remove-list">
            <FontAwesomeIcon icon={faTrashCan} />
            Clear
          </Button>
          <div className="total-price">Total Price: {totalPrice} TL</div>
          <Button className="btn-pay">Pay</Button>
        </div>
      </div>
    </CartSideBarOverlay>
  );
};

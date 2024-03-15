import "../../sass/components/cartİtem.scss";
import Button from "../UI/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { CartContext } from "../context/CartProvider";
//! Her bir sepet ürün komponenti
const CartItem = ({ product }) => {
  const { chanceAmount, removeProduct } = useContext(CartContext);
  return (
    <div className="cart-item">
      <FontAwesomeIcon
        onClick={() => {
          removeProduct(product);
        }}
        className="remove"
        icon={faTrashCan}
      />
      <div className="cart-img">
        <img src={product.src} alt={product.title} />
      </div>
      <div className="cart-content">
        <h4>{product.title}</h4>
        <p>{product.price} TL</p>
        <div className="cart-increase">
          <Button
            onClick={(event) => {
              chanceAmount(product, event);
            }}
            className="btn-howmany-decrease"
          >
            -
          </Button>
          <span>{product.amount}x piece</span>
          <Button
            onClick={(event) => {
              chanceAmount(product, event);
            }}
            className="btn-howmany-increase"
          >
            +
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;

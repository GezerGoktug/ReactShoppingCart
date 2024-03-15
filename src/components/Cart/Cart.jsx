import { useContext } from "react";
import CartItem from "./CartItem";
import { CartContext } from "../context/CartProvider";
//! Sepetteki ürünleri tutan sarmalayıcı
const Cart = () => {
  const { cartArray } = useContext(CartContext);
  return (
    <div className="cart-wrapper">
      {cartArray.length === 0 ? (
        <b>Cart Empty!</b>
      ) : (
        cartArray.map((product) => (
          <CartItem key={product.id} product={product}></CartItem>
        ))
      )}
    </div>
  );
};

export default Cart;

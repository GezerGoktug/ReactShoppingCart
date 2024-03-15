import { useContext } from "react";
import { CartContext } from "../context/CartProvider";
import "../../sass/components/card.scss";
import Button from "../UI/Button";
const ProductItem = ({ product }) => {
  const { addProduct, cartArray } = useContext(CartContext);
  let statusButton = {
    class: "",
    text: "Add to cart",
  };
  //! Eğer ürün sepette ise butonunun durumunu günceller.
  cartArray.forEach((item) => {
    if (item.id === product.id)
      statusButton = {
        class: "added",
        text: "Already in cart",
      };
  });
  return (
    <div className="card-product">
      <div className="card-product-img">
        <img src={product.src} alt={product.title} />
      </div>
      <div className="card-product-title">
        <h3 className="card-product-title-header">{product.title}</h3>
        <div className="card-product-title-add-cart">
          <span className="card-product-title-price">{product.price} TL</span>
          <Button
            onClick={() => addProduct(product)}
            className={`btn-product ${statusButton.class}`}
          >
            {statusButton.text}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;

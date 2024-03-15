import ProductItem from "./ProductItem";
import { useEffect, useRef } from "react";
const Products = ({ productArray }) => {
  const productCard = useRef();
  //! Filtre durumlarına hoş bir animasyon oluşturuldu.
  useEffect(() => {
    productCard.current.style.opacity = 0;
    setTimeout(() => {
      productCard.current.style.opacity = 1;
    }, 300);
  }, [productArray]);
  return (
    <div ref={productCard} className="products">
      {productArray.map((product) => (
        <ProductItem product={product} key={product.id}></ProductItem>
      ))}
    </div>
  );
};

export default Products;

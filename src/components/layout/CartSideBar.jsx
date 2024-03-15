import ReactDOM from "react-dom";
const CartSideBarWrapper = (props) => {
  return <>{props.children}</>;
};
//! Sepet Sidebarını HTML de overlay id li başka bir div de renderladık.
const CartSideBarOverlay = (props) => {
  const portalElement = document.getElementById("overlay");
  return (
    <>
      {ReactDOM.createPortal(
        <CartSideBarWrapper>{props.children}</CartSideBarWrapper>,
        portalElement
      )}
    </>
  );
};
export default CartSideBarOverlay;

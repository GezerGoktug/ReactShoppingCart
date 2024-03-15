import ReactDOM from "react-dom";
const LeftSideNavigationBarWrapper = ({ children }) => {
  return <>{children}</>;
};
//! Mobil Cihazlar için olan navigasyon menüsünü HTML de overlay id li başka bir div de renderladık.
const LeftSideNavigationBar = ({ children }) => {
  const portalElement = document.getElementById("overlay");
  return (
    <>
      {ReactDOM.createPortal(
        <LeftSideNavigationBarWrapper>{children}</LeftSideNavigationBarWrapper>,
        portalElement
      )}
    </>
  );
};

export default LeftSideNavigationBar;

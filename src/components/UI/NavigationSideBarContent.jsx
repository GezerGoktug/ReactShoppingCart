import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../sass/layout/leftSideBar.scss";
import LeftSideNavigationBar from "../layout/LeftSideNavigationBar";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
//! Mobil Cihazlar için soldan açılan navigasyon menüsü
export const NavigationSideBarContent = ({ setShowSideBar }) => {
  //! Navigasyon menüsü dışında bir yere tıklanırsa menü kapanır
  const handleToggleSideBar = (e) => {
    if (e.target.classList.contains("navigation-bar-wrapper"))
      setShowSideBar(false);
  };
  return (
    <LeftSideNavigationBar>
      <div onClick={handleToggleSideBar} className="navigation-bar-wrapper">
        <aside>
          <FontAwesomeIcon
            onClick={() => setShowSideBar(false)}
            className="close"
            icon={faXmark}
          ></FontAwesomeIcon>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </aside>
      </div>
    </LeftSideNavigationBar>
  );
};

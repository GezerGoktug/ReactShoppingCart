import "../../sass/layout/footer.scss";
import { FooterBottom } from "../UI/FooterBottom";
import FooterTop from "../UI/FooterTop";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <FooterTop/>
        <FooterBottom/>
      </div>
    </footer>
  );
};

export default Footer;

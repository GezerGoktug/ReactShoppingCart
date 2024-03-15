import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShopify,faFacebook,faTwitter,faInstagram  } from "@fortawesome/free-brands-svg-icons";
export const FooterBottom = () => {
  return (
    <div className="footer-bottom">
      <div className="footer-section">
        <div className="logo">
          <FontAwesomeIcon icon={faShopify} />
          <span>
            Shopping <span id="second-span">World</span>
          </span>
        </div>
      </div>
      <div className="footer-section">
        <h3>Links</h3>
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
      </div>
      <div className="footer-section">
        <h3>Contact Information</h3>
        <p>
          Email: info@example.com
          <br />
          Phone: +90 123 456 7890
          <br />
          Address: 123 Street, City,{" "}
        </p>
        <div className="social-media">
          <a href="#"><FontAwesomeIcon  icon={faFacebook} /></a>
          <a href="#"><FontAwesomeIcon  icon={faInstagram} /></a>
          <a href="#"><FontAwesomeIcon  icon={faTwitter} /></a>
        </div>
      </div>
    </div>
  );
};

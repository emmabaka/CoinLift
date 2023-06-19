import logo from "../../assets/logo.png";
import facebook from "../../assets/facebook-footer.png";
import instagram from "../../assets/instagram-footer.png";
import twitter from "../../assets/twitter-footer.png";
import telegram from "../../assets/telegram-footer.png";
import { Link } from "react-router-dom";
import css from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={css.footer}>
      <div className={`container ${css.footerWrap}`}>
        <div className={css.logoPrivacyWrap}>
          <Link to="/" className={css.logoWrap}>
            <img src={logo} alt="logo" width="47" height="54" />
            <span className={css.logo}>Coin</span>
            <span className={`${css.logo} ${css.logoAccent}`}>Lift</span>
          </Link>
          <p>© 2023 CoinLift. All rights reserved</p>
        </div>
        <div className={css.linksWrap}>
          <ul>
            <li className={css.socialLink}>
              <a href="#">
                <img src={twitter} alt="twitter" />
              </a>
            </li>
            <li className={css.socialLink}>
              <a href="#">
                <img src={facebook} alt="facebook" />
              </a>
            </li>
            <li className={css.socialLink}>
              <a href="#">
                <img src={instagram} alt="instagram" />
              </a>
            </li>
            <li className={css.socialLink}>
              <a href="#">
                <img src={telegram} alt="telegram" />
              </a>
            </li>
          </ul>
          <div className={css.navWrap}>
            <ul className={css.navList}>
              <li className={css.titleLink}>Products</li>
              <li className={css.link}>News</li>
              <li className={css.link}>Community</li>
              <li className={css.link}>Community</li>
              <li className={css.link}>Courses</li>
            </ul>
            <ul className={css.navList}>
              <li className={css.titleLink}>Company</li>
              <li className={css.link}>About Us</li>
              <li className={css.link}>Terms of Use</li>
              <li className={css.link}>Community Rules</li>
              <li className={css.link}>Privacy Policy</li>
            </ul>
            <ul className={css.navList}>
              <li className={css.titleLink}>Support</li>
              <li className={css.link}>Feedback</li>
              <li className={css.link}>FAQ</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;

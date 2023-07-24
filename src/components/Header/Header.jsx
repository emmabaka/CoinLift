import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import HeroHeaderContent from "../../pages/Home/components/HeroHeaderContent/HeroHeaderContent";
import css from "./Header.module.css";

const Header = () => {
  return (
    <header className={css.header}>
      <div className="container">
        <div className={css.headerWrap}>
          <Link to="/" className={css.logoWrap}>
            <img src={logo} alt="logo" width="47" height="54" />
            <span className={css.logo}>Coin</span>
            <span className={`${css.logo} ${css.logoAccent}`}>Lift</span>
          </Link>
          <nav>
            <ul className={css.navList}>
              <NavLink to="/news" className={css.navItem}>
                News
              </NavLink>
              <NavLink to="/reading" className={css.navItem}>
                Reading
              </NavLink>
              <NavLink to="/learn" className={css.navItem}>
                Learn
              </NavLink>
              <NavLink to="/community" className={css.navItem}>
                Community
              </NavLink>
              <NavLink to="/about" className={css.navItem}>
                About us
              </NavLink>
            </ul>
          </nav>
          <div>
            <img src="" alt="" />
            <button className={css.startedBtn} type="button">
              Get started
            </button>
          </div>
        </div>
        <HeroHeaderContent />
      </div>
    </header>
  );
};

export default Header;

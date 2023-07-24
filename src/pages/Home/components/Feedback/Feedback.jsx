import facebook from "../../../../assets/icon-facebook.png";
import instagram from "../../../../assets/icon-instagram.png";
import twitter from "../../../../assets/icon-twitter.png";
import telegram from "../../../../assets/icon-telegram.png";

import css from "./Feedback.module.css";

const Feedback = () => {
  return (
    <section>
      <div className="container">
        <h2 className={css.title}>What do others say about us?</h2>
        <div className={css.wrapper}>
          <div className={`${css.item} box`}>
            <img className={css.icon} src={twitter} alt="twitter" />
            <p className={css.text}>
              “I recently came across this cryptocurrency website which has been
              incredibly helpful in guiding me. The site is convenient and easy
              to navigate.”
            </p>
            <p className={css.name}>Dante Mentez</p>
          </div>
          <div className={`${css.item} ${css.itemBottom} box`}>
            <img className={css.icon} src={facebook} alt="facebook" />
            <p className={css.text}>
              “I have been using this cryptocurrency site for several months now
              and I have been consistently impressed with the quality of the
              service!”
            </p>
            <p className={css.name}>Kimberly Brewer </p>
          </div>
          <div className={`${css.item} box`}>
            <img className={css.icon} src={instagram} alt="instagram" />
            <p className={css.text}>
              “Your courses helped me a lot! The manager was quick to help me
              with some questions and now I finally understand the blockchain
              and can work with data.”
            </p>
            <p className={css.name}>Husna Michael</p>
          </div>
          <div className={`${css.item} ${css.itemBottom} box`}>
            <img className={css.icon} src={telegram} alt="telegram" />
            <p className={css.text}>
              “The news section was frequently updated with insightful analysis
              and breaking news, while the provided were incredibly useful for
              traders and investors.”
            </p>
            <p className={css.name}>Zac Perkins</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feedback;

import css from "./Feedback.module.css";

const Feedback = () => {
  return (
    <section>
      <div className="container">
        <h2 className={css.title}>What do others say about us?</h2>
        <div className={css.wrapper}>
          <div className={`${css.item} box`}>
            <img className={css.icon} src="./logo.png" alt="" />
            <p className="feedback__text">
              “I recently came across this cryptocurrency website which has been
              incredibly helpful in guiding me. The site is convenient and easy
              to navigate.”
            </p>
            <p className="feedback__name">Dante Mentez</p>
          </div>
          <div className={`${css.item} ${css.itemBottom} box`}>
            <img className={css.icon} src="./logo.png" alt="" />
            <p className="feedback__text">
              “I recently came across this cryptocurrency website which has been
              incredibly helpful in guiding me. The site is convenient and easy
              to navigate.”
            </p>
            <p className="feedback__name">Dante Mentez</p>
          </div>
          <div className={`${css.item} box`}>
            <img className={css.icon} src="./logo.png" alt="" />
            <p className="feedback__text">
              “I recently came across this cryptocurrency website which has been
              incredibly helpful in guiding me. The site is convenient and easy
              to navigate.”
            </p>
            <p className="feedback__name">Dante Mentez</p>
          </div>
          <div className={`${css.item} ${css.itemBottom} box`}>
            <img className={css.icon} src="./logo.png" alt="" />
            <p className="feedback__text">
              “I recently came across this cryptocurrency website which has been
              incredibly helpful in guiding me. The site is convenient and easy
              to navigate.”
            </p>
            <p className="feedback__name">Dante Mentez</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feedback;

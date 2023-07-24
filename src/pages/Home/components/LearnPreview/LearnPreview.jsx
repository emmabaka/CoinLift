import { Link } from "react-router-dom";
import learn from "../../../../assets/learn.png";
import arrow from "../../../../assets/learn-arrow.svg";
import css from "./LearnPreview.module.css";

const LearnPreview = () => {
  return (
    <div className={`${css.learnContainer} box ${css.learn}`}>
      <div>
        <h2 className={css.title}>Learn</h2>
        <p className={css.text}>
          We have redesigned the teaching method so that knowledge about
          cryptocurrency becomes clear to everyone.
        </p>
        <Link to="/learn" className={css.link}>
          Find out more
          <img src={arrow} className={css.arrow} alt="arrow" width="75" />
        </Link>
      </div>
      <img className={css.image} src={learn} alt="Books" />
    </div>
  );
};

export default LearnPreview;

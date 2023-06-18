import heroContentImg from "../../assets/heroContentImg.png";
import css from "./HeroHeaderContent.module.css";

const HeroHeaderContent = () => {
  return (
    <div className={css.infoWrap}>
      <div>
        <h1 className={css.title}>
          New, improved, mindblowing{" "}
          <span className={css.titleAccent}>crypto website</span>
        </h1>
        <p className={css.text}>
          Your gateway to the decentralized future.
          <span className={css.textAccent}>And the future is now.</span>
        </p>
      </div>
      <img src={heroContentImg} alt="" width="317" />
    </div>
  );
};

export default HeroHeaderContent;

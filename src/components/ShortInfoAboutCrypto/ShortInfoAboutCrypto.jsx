import { useEffect, useState } from "react";
import axios from "axios";
import {
  isPositive,
  normalizePerForShortInfo,
} from "../../helpers/numbersOperations";
import css from "./ShortInfoAboutCrypto.module.css";

const ShortInfoAboutCrypto = () => {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://backend-coin-lift-production.up.railway.app/api/v1/cryptocurrency/percent-data"
      )
      .then((res) => setInfo(res.data));
  }, []);

  return (
    <>
      <section>
        <div className="container">
          <h2 className={css.title}>Short information about cryptocurrency</h2>
          <ul className={css.list}>
            {info.map((item) => (
              <li key={item.name} className={css.item}>
                <img
                  src={item.imageUrl}
                  className={css.coinImg}
                  width="33"
                  alt={item.name}
                />
                <span className={css.coin}>
                  {item.name}
                  {isPositive(item.percentChange24h) ? (
                    <span className={`${css.per} ${css.perPositive}`}>
                      {"+" +
                        normalizePerForShortInfo(item.percentChange24h) +
                        "%"}
                    </span>
                  ) : (
                    <span className={`${css.per} ${css.perNegative}`}>
                      {normalizePerForShortInfo(item.percentChange24h) + "%"}
                    </span>
                  )}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default ShortInfoAboutCrypto;

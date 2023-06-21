import axios from "axios";
import { useEffect, useState } from "react";
import {
  roundToTreeNumbers,
  roundAndAddComma,
  addCommasToNumber,
  isPositive,
} from "../../helpers/numbersOperations";
import { Link } from "react-router-dom";
import positive from "../../assets/positive.svg";
import negative from "../../assets/negative.svg";
import arrow from "../../assets/title-arrow.svg";
import css from "./MarketData.module.css";

const MarketData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://backend-coin-lift-production.up.railway.app/api/v1/cryptocurrency/all-data"
      )
      .then((res) => setData(res.data));
  }, []);

  return (
    <section>
      <div className="container">
        <div className={`${css.dataContainer} box`}>
          <Link to="/reading">
            <h2 className={css.title}>
              Market data <img src={arrow} alt="arrow" width="50" />
            </h2>
          </Link>

          <table className={css.table}>
            <thead>
              <tr>
                <th className={css.line}>{""}</th>
                <th className={css.line}>Cost</th>
                <th className={css.line}>1H %</th>
                <th className={css.line}>1D %</th>
                <th className={css.line}>1W %</th>
                <th className={css.line}>Market capitalization</th>
                <th className={css.line}>Volume (1D)</th>
                <th>Circulating supply</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, i) => (
                <tr key={i} className={css.border}>
                  <td className={css.tableColCoin}>
                    <img src={item.imageUrl} alt={item.name} width={32} />
                    <span>{item.symbol}</span>
                  </td>
                  <td className={css.tableCol}>{`$${roundAndAddComma(
                    item.price
                  )}`}</td>

                  <td className={css.tableCol}>
                    <div className={css.dataWrap}>
                      {isPositive(item.percentChange1H) ? (
                        <img src={positive} />
                      ) : (
                        <img src={negative} />
                      )}
                      {`${roundToTreeNumbers(item.percentChange1H)}%`}
                    </div>
                  </td>

                  <td className={css.tableCol}>
                    <div className={css.dataWrap}>
                      {isPositive(item.percentChange1W) ? (
                        <img src={positive} />
                      ) : (
                        <img src={negative} />
                      )}
                      {`${roundToTreeNumbers(item.percentChange1D)}%`}
                    </div>
                  </td>

                  <td className={css.tableCol}>
                    <div className={css.dataWrap}>
                      {isPositive(item.percentChange1W) ? (
                        <img src={positive} />
                      ) : (
                        <img src={negative} />
                      )}
                      {`${roundToTreeNumbers(item.percentChange1W)}%`}
                    </div>
                  </td>

                  <td className={css.tableCol}>{`$${roundAndAddComma(
                    item.marketCap
                  )}`}</td>
                  <td className={css.tableCol}>{`$${addCommasToNumber(
                    item.volumeUSD
                  )}`}</td>
                  <td className={css.tableCol}>{`${addCommasToNumber(
                    item.circulatingSupply
                  )} ${item.symbol}`}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default MarketData;

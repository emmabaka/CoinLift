import axios from "axios";
import { useEffect, useState } from "react";
import {
  roundToTreeNumbers,
  roundAndAddComma,
  addCommasToNumber,
} from "../../helpers/numbersOperations";
import { Link } from "react-router-dom";
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
                <th>{""}</th>
                <th>Cost</th>
                <th>1H %</th>
                <th>1D %</th>
                <th>1W %</th>
                <th>Market capitalization</th>
                <th>Volume (1D)</th>
                <th>Circulating supply</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, i) => (
                <tr key={i} className={css.border}>
                  <td className={`${css.tableColCoin} ${css.border}`}>
                    <img src={item.imageUrl} alt={item.name} width={32} />
                    <span>{item.symbol}</span>
                  </td>
                  <td
                    className={`${css.tableCol} ${css.border}`}
                  >{`$${roundAndAddComma(item.price)}`}</td>
                  <td
                    className={`${css.tableCol} ${css.border}`}
                  >{`${roundToTreeNumbers(item.percentChange1H)}%`}</td>
                  <td
                    className={`${css.tableCol} ${css.border}`}
                  >{`${roundToTreeNumbers(item.percentChange1H)}%`}</td>
                  <td
                    className={`${css.tableCol} ${css.border}`}
                  >{`${roundToTreeNumbers(item.percentChange1W)}%`}</td>
                  <td
                    className={`${css.tableCol} ${css.border}`}
                  >{`$${roundAndAddComma(item.marketCap)}`}</td>
                  <td
                    className={`${css.tableCol} ${css.border}`}
                  >{`$${addCommasToNumber(item.volumeUSD)}`}</td>
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

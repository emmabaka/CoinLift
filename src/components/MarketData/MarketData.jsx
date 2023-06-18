import axios from "axios";
import { useEffect, useState } from "react";
import css from "./MarketData.module.css";

const MarketData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/v1/cryptocurrency/all-data")
      .then((res) => setData(res.data));
  }, []);

  return (
    <section>
      <div className="container">
        <div className={`${css.dataContainer} box`}>
          <h2 className={css.title}>Market data</h2>
          <table className={css.table}>
            <thead>
              <th></th>
              <th>Cost</th>
              <th>1H %</th>
              <th>1D %</th>
              <th>1W %</th>
              <th>Market capitalization</th>
              <th>Volume (1D)</th>
              <th>Circulating supply</th>
            </thead>
            <tbody>
              {data.map((item, i) => (
                <tr key={i}>
                  <td className={`${css.tableColCoin} ${css.border}`}>
                    <img src={item.imageUrl} alt={item.name} width={32} />
                    <span>{item.name}</span>
                  </td>
                  <td
                    className={`${css.tableCol} ${css.border}`}
                  >{`$${item.price}`}</td>
                  <td
                    className={`${css.tableCol} ${css.border}`}
                  >{`${item.percentChange1H}%`}</td>
                  <td
                    className={`${css.tableCol} ${css.border}`}
                  >{`${item.percentChange1D}%`}</td>
                  <td
                    className={`${css.tableCol} ${css.border}`}
                  >{`${item.percentChange1W}%`}</td>
                  <td
                    className={`${css.tableCol} ${css.border}`}
                  >{`$${item.marketCap}`}</td>
                  <td
                    className={`${css.tableCol} ${css.border}`}
                  >{`$${item.volumeUSD}`}</td>
                  <td
                    className={css.tableCol}
                  >{`${item.circulatingSupply}`}</td>
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

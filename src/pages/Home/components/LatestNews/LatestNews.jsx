import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { cropText } from "../../../../helpers/textOperations";
import arrow from "../../../../assets/title-arrow.svg";
import css from "./LatestNews.module.css";
import { getCryptocurrencyData } from "../../../../api/getCryptocurrencyData";

const LatestNews = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    getCryptocurrencyData("news").then((res) => {
      if (res.data.length > 10) {
        const slicedNews = res.data.slice(0, 10);
        setNews(slicedNews);
      }
      setNews(res.data);
    });
  }, []);

  return (
    <section>
      <div className="container">
        <div className={`${css.news} box`}>
          <Link to="/news">
            <h2 className={css.title}>
              Latest news <img src={arrow} alt="arrow" width="50" />
            </h2>
          </Link>

          <div className={css.newsWrap}>
            {news.map((item, i) => (
              <a href={item.url} target="blank" key={i} className={css.item}>
                <img src={item.thumbnail} alt="News photo" />
                <h3 className={css.itemTitle}>{item.title}</h3>
                <p className={css.itemText}>{cropText(item.description, 70)}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestNews;

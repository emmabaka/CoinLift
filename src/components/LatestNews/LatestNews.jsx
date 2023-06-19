import { useEffect, useState } from "react";
import axios from "axios";
import css from "./LatestNews.module.css";
import { Link } from "react-router-dom";

const LatestNews = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios
      .get("https://backend-coin-lift-production.up.railway.app/api/v1/cryptocurrency/news")
      .then((res) => {
        if (res.data.length > 10) {
          const slicedNews = res.data.slice(0, 10);
          setNews(slicedNews);
        }
        console.log(res.data);
        setNews(res.data);
      });
  }, []);

  return (
    <section>
      <div className="container">
        <div className={`${css.news} box`}>
          <Link to="/news">
            <h2 className={css.title}>Latest news </h2>
          </Link>

          <div className={css.newsWrap}>
            {news.map((item, i) => (
              <a href={item.url} target="blank" key={i} className={css.item}>
                <img src={item.thumbnail} alt="" height="105" />
                <h3 className={css.itemTitle}>{item.title}</h3>
                <p className={css.itemText}>{item.description}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestNews;

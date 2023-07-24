import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import arrow from "../../../../assets/title-arrow.svg";
import comments from "../../../../assets/comments.png";
import css from "./CommunityTradeIdeas.module.css";

const CommunityTradeIdeas = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://backend-coin-lift-production.up.railway.app/api/v1/posts/latest"
      )
      .then((res) => setPosts(res.data));
  }, []);
  
  return (
    <section>
      <div className="container">
        <div className={`${css.ideas} box `}>
          <Link to="/community">
            <h2 className={css.title}>
              Community trade ideas <img src={arrow} alt="arrow" width="50" />
            </h2>
          </Link>
          <div className={css.wrapper}>
            {posts.map((item) => (
              <div key={item.uuid} className={css.item}>
                <img
                  className={`${css.borderRadius} ${css.image}`}
                  src={`data:image/gpeg;base64, ${item.image}`}
                  alt="Post photo"
                />
                <div className={css.textCommentWrap}>
                  <p className={css.desc}>{item.title}</p>
                  <div className={css.commentWrap}>
                    <img
                      src={comments}
                      className={css.comments}
                      alt="Comments icon"
                    />
                    <span>{item.commentCount}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default CommunityTradeIdeas;

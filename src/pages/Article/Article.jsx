import { useParams } from "react-router-dom";
import ArticleDetails from "../../components/ArticleDetails/ArticleDetails";
import { useEffect } from "react";
import axios from "axios";

const Article = () => {
  const { postId } = useParams();
  console.log(postId);
  useEffect(() => {
    axios.get(`http://localhost:8080/api/v1/posts/${postId}`);
  }, [postId]);
  return (
    <>
      <ArticleDetails />
    </>
  );
};

export default Article;

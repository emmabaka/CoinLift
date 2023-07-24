import { useParams } from "react-router-dom";
import ArticleDetails from "./ArticleDetails/ArticleDetails";
import { useEffect } from "react";
import axios from "axios";

const Article = () => {
  const { postId } = useParams();

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

import React from "react";
import { useParams } from "react-router-dom";
import articles from "./article-content";
const ArticlePage = () => {
  // const params = useParams();
  // or can directly use

  const { articleId } = useParams();

  //          or
  // const articleId = params.articleId;

  //          or
  // [using object destructuring]

  // const { articleId } = params;

  // fetching articles from the article-content.js
  const article = articles.find((article) => article.name === articleId);

  return (
    <>
      <h1>{article.title}</h1>
      {article.content.map((paragraph) => {
        return <p>{paragraph}</p>;
      })}
    </>
  );
};

export default ArticlePage;

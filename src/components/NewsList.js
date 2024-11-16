import React from "react";
import NewsCard from "./NewsCard";
import "./styles/NewsList.css";

const NewsList = ({ articles, isDarkMode }) => {
  return (
    <div className="news-list">
      {articles.map((article, index) => (
        <NewsCard key={index} article={article} isDarkMode={isDarkMode} />
      ))}
    </div>
  );
};

export default NewsList;

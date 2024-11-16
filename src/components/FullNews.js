import React from 'react';
import './styles/FullNews.css';

const FullNews = ({ article, onClose }) => {
  const { title, urlToImage, content, url } = article;

  return (
    <div className={`full-news ${onClose ? "" : "dark-mode"}`}>
      <button className="close-button" onClick={onClose}>&times;</button>
      <h2>{title}</h2>
      <img src={urlToImage || "https://via.placeholder.com/600x400"} alt={title} className="full-image" />
      <p>{content || "No content available."}</p>
      <a href={url} target="_blank" rel="noopener noreferrer">Read More</a>
    </div>
  );
};

export default FullNews;

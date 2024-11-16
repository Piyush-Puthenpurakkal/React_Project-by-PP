import React from "react";
import "./styles/NewsCard.css";
import NewsModal from "./NewsModal";

const NewsCard = ({ article, isDarkMode }) => {
  const { title, description, urlToImage, content, url } = article;
  const [showModal, setShowModal] = React.useState(false);

  const handleCardClick = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className={`news-card ${isDarkMode ? "dark-mode" : ""}`} onClick={handleCardClick}>
        <img src={urlToImage || "https://via.placeholder.com/300x180"} alt={title} className="card-image" />
        <div className="card-content">
          <h3 className="card-title">{title}</h3>
          <p className="card-description">{description || "No description available."}</p>
        </div>
      </div>
      {showModal && <NewsModal article={article} onClose={closeModal} />}
    </>
  );
};

export default NewsCard;

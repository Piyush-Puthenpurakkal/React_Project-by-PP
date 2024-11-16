import React from 'react';
import './styles/NewsModal.css';
import FullNews from './FullNews';

const NewsModal = ({ article, onClose }) => {
  return (
    <div className="news-modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <FullNews article={article} onClose={onClose} />
      </div>
    </div>
  );
};

export default NewsModal;

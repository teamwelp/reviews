import React from 'react';
import style from './styles/reviewWrapperStyle.css';
import ReviewHeader from './reviewHeader.jsx';

const ReviewWrapper = (props) => {
  return (
    <div className={style.reviewWrapper}>
      <ReviewHeader rating={props.review.businessRating} date={props.review.dateCreated} />
      <div className="review-rating">
        <button className="vote-button">
          <i className="far fa-lightbulb"></i>
          <span className="vote-label">Useful</span>
          <span className="vote-count">2</span>
        </button>
        <button className="vote-button">
          <i className="far fa-smile"></i>
          <span className="vote-label">Funny</span>
          <span className="vote-count">2</span>
        </button>
        <button className="vote-button">
          <i className="far fa-thumbs-up"></i>
          <span className="vote-label">Cool</span>
          <span className="vote-count">2</span>
        </button>
      </div>
    </div>
  );
};

export default ReviewWrapper;

import React from 'react';
import style from './styles/review_wrapper_style.css';
import ReviewHeader from './review_header.jsx';

const ReviewWrapper = (props) => {

  return (
    <div className={style.reviewWrapper}>
      <ReviewHeader rating={props.review.businessRating} date={props.review.dateCreated} />
      <div className={style.reviewText}>{props.review.text}</div>
      <div className="review-rating">
        <button className={style.voteButton}>
          <i className="far fa-lightbulb"></i>
          <span className={style.buttonContents}>Useful</span>
          <span>{props.review.reviewRating.useful}</span>
        </button>
        <button className={style.voteButton}>
          <i className="far fa-smile"></i>
          <span className={style.buttonContents}>Funny</span>
          <span>{props.review.reviewRating.funny}</span>
        </button>
        <button className={style.voteButton}>
          <i className="far fa-thumbs-up"></i>
          <span className={style.buttonContents}>Cool</span>
          <span>{props.review.reviewRating.cool}</span>
        </button>
      </div>
    </div>
  );
};

export default ReviewWrapper;

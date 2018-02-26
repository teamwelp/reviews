import React from 'react';
import style from './styles/reviewWrapperStyle.css';

const ReviewHeader = (props) => {
  const stars = Array(5);

  stars.fill('redStar', 0, props.rating);
  stars.fill('hiddenStar', props.rating);

  const divStars = stars.map((className) => {
    return (
      <span className={style[className]}>
        <i className="fas fa-star"></i>
      </span>
    );
  });

  console.log(divStars);
  return (
    <div className="review-header">
      <div className="rating">{props.rating}</div>
      {divStars}
      <div className="date-created">{props.date}</div>
    </div>
  );
};

export default ReviewHeader;
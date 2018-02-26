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

  const date = new Date(props.date);
  const dateString = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;

  return (
    <div className="review-header">
      <div className="rating">{props.rating}</div>
      {divStars}<span className={style.date}>{dateString}</span>
    </div>
  );
};

export default ReviewHeader;
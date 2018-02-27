import React from 'react';
import style from './styles/review_wrapper_style.css';

const ReviewHeader = (props) => {
  const stars = Array(5);

  stars.fill('redStar', 0, props.rating);
  stars.fill('grayStar', props.rating);

  const divStars = stars.map((className) => {
    return (
      <div className={style[className]}>
        <i className={`material-icons ${style.star}`}>star</i>
      </div>
    );
  });

  const date = new Date(props.date);
  const dateString = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;

  return (
    <div>
      {divStars}<span className={style.date}>{dateString}</span>
    </div>
  );
};

export default ReviewHeader;
import React from 'react';
import ReviewListEntry from './review_list_entry.jsx';
import style from './styles/review_list_style.css';

const ReviewList = (props) => {
  const reviews = [];
  for (let i = 0; i < props.reviews.length; i += 1) {
    reviews.push(<ReviewListEntry review={props.reviews[i]} />);
  }

  return (
    <ul className={style.reviewList}>{reviews}</ul>
  );
};

export default ReviewList;

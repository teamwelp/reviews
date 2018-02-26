import React from 'react';
import ReviewListEntry from './reviewListEntry.jsx';
import style from './styles/reviewListStyle.css';

const ReviewList = (props) => {
  const reviews = [];
  for (let i = 0; i < props.reviews.length; i += 1) {
    reviews.push(<ReviewListEntry review={props.reviews[i]} />);
  }

  return (
    <div>{reviews}</div>
  );
};

export default ReviewList;

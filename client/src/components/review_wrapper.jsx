import React from 'react';
import PropTypes from 'prop-types';
import style from './styles/review_wrapper_style.css';
import Votes from './votes';
import ReviewHeader from './review_header';

const ReviewWrapper = (props) => {
  return (
    <div className={style.reviewWrapper}>
      <ReviewHeader rating={props.review.businessRating} date={props.review.dateCreated} />
      <div className={style.reviewText}>{props.review.text.replace('\n', '\n\n')}</div>
      <Votes votes={props.review.reviewRating} />
    </div>
  );
};

ReviewWrapper.propTypes = {
  review: PropTypes.object.isRequired,
};

export default ReviewWrapper;

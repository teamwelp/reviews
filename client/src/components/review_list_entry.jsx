import React from 'react';
import PropTypes from 'prop-types';
import style from './styles/review_list_style.css';
import ReviewWrapper from './review_wrapper';

class ReviewListEntry extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li className={style.listEntry}>
        <ReviewWrapper review={this.props.review} />
      </li>
    );
  }
}

ReviewListEntry.propTypes = {
  review: PropTypes.object,
};

ReviewListEntry.defaultProps = {
  review: {},
};

export default ReviewListEntry;

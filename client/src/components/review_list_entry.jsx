import React from 'react';
import style from './styles/review_list_style.css';
import Sidebar from './sidebar.jsx';
import ReviewWrapper from './review_wrapper.jsx';

class ReviewListEntry extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li className={style.listEntry}>
        <Sidebar user={this.props.review.user} />
        <ReviewWrapper review={this.props.review} />
      </li>
    );
  }
}

export default ReviewListEntry;

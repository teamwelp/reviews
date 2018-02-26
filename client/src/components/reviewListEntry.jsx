import React from 'react';
import style from './styles/reviewListStyle.css';
import SideBar from './sideBar.jsx';
import ReviewWrapper from './reviewWrapper.jsx';

class ReviewListEntry extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li>
        <SideBar user={this.props.review.user} />
        <ReviewWrapper review={this.props.review} />
      </li>
    );
  }
}

export default ReviewListEntry;

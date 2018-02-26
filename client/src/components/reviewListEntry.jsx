import React from 'react';
import style from './styles/reviewListEntryStyle.css';

class ReviewListEntry extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="sidebar">
          <div className="passport">
            <img className="avatar" src={this.props.review.user.image} alt="hello"></img>
            <div className="user-info">
              <div className="username">{this.props.review.user.username}</div>
              <div className="user-location">redwood</div>
            </div>
          </div>
        </div>
        <div className="review-contents">
          <div className="rating">{this.props.review.businessRating}</div>
          <div className="date-created">{this.props.review.dateCreated}</div>
        </div>
        <div className="review-rating">
          <button className="vote-button">
            <span className="vote-icon">X</span>
            <span className="vote-label">Useful</span>
            <span className="vote-count">2</span>
          </button>
          <button className="vote-button">
            <span className="vote-icon">X</span>
            <span className="vote-label">Funny</span>
            <span className="vote-count">2</span>
          </button>
          <button className="vote-button">
            <span className="vote-icon">X</span>
            <span className="vote-label">Cool</span>
            <span className="vote-count">2</span>
          </button>
        </div>
      </div>
    );
  }
}

export default ReviewListEntry;

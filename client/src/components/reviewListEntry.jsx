import React from 'react';

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
          <button className="vote-button">Useful</button>
          <button className="vote-button">Funny</button>
          <button className="vote-button">Cool</button>
        </div>
      </div>
    );
  }
}

export default ReviewListEntry;

import React from 'react';
import mockReviews from '../../dummy_data/mock_reviews.js';
import ReviewList from './reviewList.jsx';
import style from './styles/reviewsStyle.css';

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: mockReviews,
      businessId: 200,
      businessName: 'lorem',
    };
  }

  render() {
    return (
      <div className={style.feed}>
        <div><span className={style.title}>Recommended Reviews for </span><span className={style.businessName}>{this.state.businessName}</span></div>
        <ReviewList reviews={this.state.reviews} />
      </div>
    );
  }
}


export default Reviews;
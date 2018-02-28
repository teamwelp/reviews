import React from 'react';
import mockReviews from '../../dummy_data/mock_reviews';
import ReviewList from './review_list';
import style from './styles/reviews_style.css';

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: mockReviews,
      businessId: 200,
      businessName: 'Sample Business',
    };
  }

  render() {
    return (
      <div className={style.feed}>
        <div>
          <span className={style.title}>Recommended Reviews for </span>
          <span className={style.businessName}>{this.state.businessName}</span>
        </div>
        <ReviewList reviews={this.state.reviews} />
      </div>
    );
  }
}

export default Reviews;

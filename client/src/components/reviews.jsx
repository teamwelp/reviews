import React from 'react';
import mockReviews from '../../dummy_data/mock_reviews.js';

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
      <div className="feed">
        <div className="header">Recommended Reviews for {this.state.businessName}</div>
      </div>
    );
  }
}


export default Reviews;

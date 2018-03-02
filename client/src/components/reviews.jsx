import React from 'react';
import axios from 'axios';
import mockReviews from '../../dummy_data/mock_reviews';
import ReviewList from './review_list';
import style from './styles/reviews_style.css';
import DisplaySettings from './display_settings';
import Pagination from './pagination';

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: null,
      businessName: 'Sample Business',
      reviewCount: 100,
      currentPage: 1,
      sortBy: 'newest',
    };
  }

  componentWillMount() {
    this.retrieveData();
    this.getReviewCount();
  }

  retrieveData() {
    const sortBy = `sortBy=${this.state.sortBy}`;
    const startAt = `startAt=${(this.state.currentPage - 1) * 20}`;


    axios.get(`/businesses/${this.props.businessId}/reviews?${sortBy}&${startAt}`).then((response) => {
      this.setState({ reviews: response.data });
    });
  }

  getReviewCount() {
    axios.get(`/businesses/${this.props.businessId}/reviews/count`).then((response) => {
      this.setState({ reviewCount: response.data.count });
    });
  }

  handleClickPage(page) {

  }

  render() {
    if (this.state.reviews === null) {
      return null;
    }

    return (
      <div className={style.feed}>
        <div className={style.titleContainer}>
          <span className={style.title}>Recommended Reviews for </span>
          <span className={style.businessName}>{this.state.businessName}</span>
        </div>
        <DisplaySettings />
        <ReviewList reviews={this.state.reviews} />
        <Pagination reviewCount={this.state.reviewCount} currentPage={this.state.currentPage} clickPage={(page) => this.handleClickPage(page)} />
      </div>
    );
  }
}

export default Reviews;

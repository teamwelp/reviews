import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import ReviewList from './review_list';
import style from './styles/reviews_style.css';
import DisplaySettings from './display_settings';
import Pagination from './pagination';

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: null,
      reviewCount: 0,
      currentPage: 1,
      sortBy: 'newest',
      loading: true,
    };
  }

  componentWillMount() {
    this.retrieveData();
    this.getReviewCount();
  }

  getReviewCount() {
    axios.get(`/biz/${this.props.businessId}/reviews/count`).then((response) => {
      this.setState({ reviewCount: response.data.count, loading: false });
    });
  }

  retrieveData() {
    const sortBy = `sortBy=${this.state.sortBy}`;
    const startAt = `startAt=${(this.state.currentPage - 1) * 20}`;

    axios.get(`/biz/${this.props.businessId}/reviews?${sortBy}&${startAt}`).then((response) => {
      this.setState({ reviews: response.data, loading: false });
    });
  }

  handleClickSort(sortQuery) {
    const sortQueries = {
      'Newest First': 'newest',
      'Oldest First': 'oldest',
      'Highest Rated': 'highestRated',
      'Lowest Rated': 'lowestRated',
    };

    this.setState({
      sortBy: sortQueries[sortQuery],
      loading: true,
    }, () => this.retrieveData());
  }

  handleClickPage(page) {
    this.setState({
      currentPage: page,
      loading: true,
    }, () => this.retrieveData());
  }

  render() {
    if (this.state.reviews === null) {
      return null;
    }
    let feedStyle = style.feed;
    if (this.state.loading) {
      feedStyle += ` ${style.transparentFeed}`;
    }
    return (
      <div className={feedStyle}>
        <div className={style.titleContainer}>
          <span className={style.title}>Recommended Reviews for </span>
          <span className={style.businessName}>{this.props.businessName}</span>
        </div>
        <DisplaySettings clickSort={sortBy => this.handleClickSort(sortBy)} reviewCount={this.state.reviewCount} />
        <ReviewList reviews={this.state.reviews} />
        <Pagination reviewCount={this.state.reviewCount} currentPage={this.state.currentPage} clickPage={page => this.handleClickPage(page)} />
      </div>
    );
  }
}

Reviews.propTypes = {
  businessName: PropTypes.string.isRequired,
  businessId: PropTypes.string.isRequired,
};

export default Reviews;

import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import ReviewList from './review_list';
import style from './styles/reviews_style.css';
import DisplaySettings from './display_settings';
import Pagination from './pagination';
import './styles/reset.css';

class Reviews extends React.Component {
  static extend(obj1, obj2) {
    const obj = obj1;
    Object.keys(obj2).forEach((key) => {
      obj[key] = obj2[key];
    });

    return obj;
  }

  constructor(props) {
    super(props);
    this.state = {
      reviews: null,
      reviewCount: 0,
      currentPage: 1,
      sortBy: 'newest',
      loading: true,
      searchText: null,
    };
  }
  componentWillMount() {
    this.updateReviewRender();
  }

  getReviewCount() {
    let searchQuery = '';

    if (this.state.searchText !== null) {
      searchQuery = `?search=${this.state.searchText}`;
    }

    return axios.get(`/biz/${this.props.businessId}/reviews/count${searchQuery}`)
      .then(response => ({ reviewCount: response.data.count }));
  }

  retrieveData() {
    const sortBy = `sortBy=${this.state.sortBy}`;
    const startAt = `startAt=${(this.state.currentPage - 1) * 20}`;
    let searchQuery = '';

    if (this.state.searchText !== null) {
      searchQuery = `&search=${this.state.searchText}`;
    }

    return axios.get(`/biz/${this.props.businessId}/reviews?${sortBy}&${startAt}${searchQuery}`)
      .then(response => ({ reviews: response.data }));
  }

  updateReviewRender() {
    const promises = [];
    promises.push(this.retrieveData());
    promises.push(this.getReviewCount());

    Promise.all(promises)
      .then((data) => {
        const combinedData = this.constructor.extend(data[0], data[1]);
        return this.constructor.extend(combinedData, { loading: false });
      })
      .then(combinedData => this.setState(combinedData));
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
      currentPage: 1,
    }, () => this.updateReviewRender());
  }

  handleClickPage(page) {
    if (page !== this.state.currentPage) {
      this.setState({
        currentPage: page,
        loading: true,
      }, () => this.updateReviewRender());
    }
  }

  handleSearch(keyword, purpose) {
    if (purpose === 'search') {
      this.setState({
        searchText: keyword,
        loading: true,
      }, () => this.updateReviewRender());
    } else {
      this.setState({
        searchText: null,
        loading: true,
      }, () => this.updateReviewRender());
    }
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
        <DisplaySettings clickSort={sortBy => this.handleClickSort(sortBy)} reviewCount={this.state.reviewCount} clickSearch={(keyword, purpose) => this.handleSearch(keyword, purpose)} />
        <ReviewList reviews={this.state.reviews} />
        <Pagination reviewCount={this.state.reviewCount} currentPage={this.state.currentPage} clickPage={page => this.handleClickPage(page)} />
      </div>
    );
  }
}

Reviews.propTypes = {
  businessName: PropTypes.string.isRequired,
  businessId: PropTypes.number.isRequired,
};

export default Reviews;

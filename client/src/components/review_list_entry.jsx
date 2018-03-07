import React from 'react';
import PropTypes from 'prop-types';
import style from './styles/review_list_style.css';
import ReviewWrapper from './review_wrapper';

class ReviewListEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showOptions: false,
    };
  }

  handleMouseEnter() {
    this.setState({
      showOptions: true,
    });
  }

  handlMouseLeave() {
    this.setState({
      showOptions: false,
    });
  }

  render() {
    return (
<<<<<<< HEAD
      <li className={style.listEntry} onMouseEnter={() => this.handleMouseEnter()} onMouseLeave={() => this.handlMouseLeave()}>
        <Sidebar user={this.props.review.user} showOptions={this.state.showOptions} />
=======
      <li className={style.listEntry}>
>>>>>>> master
        <ReviewWrapper review={this.props.review} />
      </li>
    );
  }
}

ReviewListEntry.propTypes = {
  review: PropTypes.object.isRequired,
};

export default ReviewListEntry;

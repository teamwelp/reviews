import React from 'react';
import PropTypes from 'prop-types';
import style from './styles/review_wrapper_style.css';

const Votes = (props) => {
  const votes = ['useful', 'funny', 'cool'];
  const voteDivs = votes.map((vote) => {
    return (
      <button className={style.voteButton}>
        <i className="far fa-lightbulb"></i>
        <span className={style.buttonContents}>{vote.charAt(0).toUpperCase() + vote.slice(1)}</span>
        <span>{props.votes[vote]}</span>
      </button>
    );
  });

  return (
    <div>{voteDivs}</div>
  );
};

Votes.propTypes = {
  votes: PropTypes.object,
};

Votes.defaultProps = {
  votes: {},
};

export default Votes;

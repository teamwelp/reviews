import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Reviews from './src/components/reviews';

const id = document.getElementById('app').dataset.businessId;

const App = props => <Reviews businessId={props.businessId} />;

App.propTypes = {
  businessId: PropTypes.string.isRequired,
};

ReactDOM.render(<App businessId={id} />, document.getElementById('app'));

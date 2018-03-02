import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Reviews from './src/components/reviews';

const id = document.getElementById('app').dataset.businessId;
const name = document.getElementById('app').dataset.businessName;

const App = props => <Reviews businessId={props.businessId} businessName={props.businessName} />;

App.propTypes = {
  businessId: PropTypes.string.isRequired,
  businessName: PropTypes.string.isRequired,
};

ReactDOM.render(<App businessId={id} businessName={name} />, document.getElementById('app'));

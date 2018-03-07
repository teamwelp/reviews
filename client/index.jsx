import React from 'react';
import ReactDOM from 'react-dom';
import Reviews from './src/components/reviews';
import axios from 'axios'

if (window.businessName === undefined) {
  const businessId = window.location.href.split('/')[window.location.href.split('/').length - 1];
  axios.get(`/biz/${businessId}?API=true`)
    .then(response => response.data.businessName)
    .then((businessName) => { ReactDOM.render(<Reviews businessId={businessId} businessName={businessName} />, document.getElementById('reviews')); });
} else {
  ReactDOM.render(<Reviews businessId={window.businessId} businessName={window.businessName} />, document.getElementById('reviews'));
}

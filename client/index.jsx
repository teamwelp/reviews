import React from 'react';
import ReactDOM from 'react-dom';
import Reviews from './src/components/reviews';

ReactDOM.render(<Reviews businessId={window.businessId} businessName={window.businessName} />, document.getElementById('reviews'));

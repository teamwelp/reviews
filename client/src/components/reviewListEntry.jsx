import React from 'react';

class ReviewListEntry extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>{JSON.stringify(this.props.review)}</div>
    );
  }
}

export default ReviewListEntry;

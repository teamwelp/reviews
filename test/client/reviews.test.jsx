import React from 'react';
import { shallow, mount } from 'enzyme';
import Reviews from '../../client/src/components/reviews';
import ReviewList from '../../client/src/components/review_list';

describe('test Reviews component', () => {
  const reviewsComponent = shallow(<Reviews />);

  reviewsComponent.setState({
    reviews: [
      {
        reviewId: 300,
        businessId: 200,
        user: {
          userId: 60,
          username: 'DukeIvy1',
          image: 'http://lorempixel.com/400/200/people',
          friends: 39,
          review: 33,
          photos: 37,
        },
        businessRating: 5,
        dateCreated: '2017-12-02T00:32:49.646Z',
        text: 'Tenetur consectetur similique harum hic nesciunt velit repellendus commodi fuga. Omnis vero deserunt.',
        image: 'http://lorempixel.com/400/200/food',
        reviewRating: {
          useful: 372,
          funny: 589,
          cool: 880,
        },
      },
    ],
  });

  reviewsComponent.setProps({
    businessId: 201,
    businessName: 'foobar',
  });

  const reviewListComponent = reviewsComponent.find(ReviewList);

  test('should render the business name', () => {
    expect(reviewsComponent.contains(<span className="businessName">foobar</span>)).toBe(true);
  });

  test('should contain the ReviewList component', () => {
    expect(reviewsComponent.exists(<ReviewList />)).toBe(true);
  });

  test('should pass the reviews state to ReviewList component', () => {
    expect(reviewListComponent.props().reviews).toEqual(reviewsComponent.state().reviews);
  });
});


import React from 'react';
import { shallow } from 'enzyme';
import ReviewListEntry from '../../client/src/components/review_list_entry.jsx';
import Sidebar from '../../client/src/components/sidebar.jsx';

describe('test ReviewListEntry component', () => {
  const review = {
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
  };

  const reviewListEntryComponent = shallow(<ReviewListEntry review={review} />);
  const sidebarComponent = reviewListEntryComponent.find(Sidebar);

  test('it should render the sidebar component', () => {
    expect(reviewListEntryComponent.exists(Sidebar)).toBe(true);
  });

  test('it should pass the user info of review to the Sidebar component', () => {
    expect(sidebarComponent.props().user).toEqual(review.user);
  });
});
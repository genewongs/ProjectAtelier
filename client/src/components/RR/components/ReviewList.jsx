import React from 'react';
import Review from './Review.jsx';
import ReviewContext from '../utils/ReviewContext.jsx';

export default function ReviewList() {
  return (
    <ReviewContext.Consumer>
      {(value) => (
        <div>
          {value.reviews.map((review) => <Review key={review.review_id} review={review} />)}
        </div>
      )}
    </ReviewContext.Consumer>
  );
}

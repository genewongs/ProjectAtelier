import React from 'react';
import Review from './Review.jsx';
import ReviewContext from '../utils/ReviewContext.jsx';

export default function ReviewList() {
  return (
    <ReviewContext.Consumer>
      {({ reviews }) => (
        <div className="review-list">
          {reviews.map((review) => <Review key={review.review_id} review={review} />)}
        </div>
      )}
    </ReviewContext.Consumer>
  );
}

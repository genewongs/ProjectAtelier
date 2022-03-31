import React from 'react';
import Review from './Review.jsx';
import ReviewContext from '../utils/ReviewContext.jsx';

export default function ReviewList({ getMoreReviews }) {
  return (
    <ReviewContext.Consumer>
      {({ reviews }) => (
        <div className="review-list">
          {reviews.map((review) => <Review key={review.review_id} review={review} />)}
          <button
            type="button"
            className="reviews-button"
            onClick={getMoreReviews}
          >
            More Reviews
          </button>
        </div>
      )}
    </ReviewContext.Consumer>
  );
}

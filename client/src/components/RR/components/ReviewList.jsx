import React, { useContext } from 'react';
import Review from './Review.jsx';
import ReviewStoreContext from '../utils/ReviewContext.jsx';

export default function ReviewList() {
  const { reviews } = useContext(ReviewStoreContext);
  return (
    <div className="review-list">
      {reviews.results
        && (
        <span>
          {reviews.results.map((review) => <Review key={review.review_id} review={review} />)}
        </span>
        )}
    </div>
  );
}

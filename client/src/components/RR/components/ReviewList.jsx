import React, { useContext } from 'react';
import Review from './Review';
import ReviewStoreContext from '../utils/ReviewContext';
import ReviewListStyled from './styles/StyledReviewList';

export default function ReviewList() {
  const { reviews } = useContext(ReviewStoreContext);
  return (
    <ReviewListStyled>
      {reviews.results
        && (
        <span>
          {reviews.results.map((review) => <Review key={review.review_id} review={review} />)}
        </span>
        )}
    </ReviewListStyled>
  );
}

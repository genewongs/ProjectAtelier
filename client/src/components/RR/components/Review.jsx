import React from 'react';
import moment from 'moment';

export default function Review({ review }) {
  return (
    <div className="review">
      <div className="review-stars">
        Stars:
        {' '}
        {review.rating}
      </div>
      <div className="review-name">
        {review.reviewer_name}
        {'\n'}
        {moment(review.date).format('LL')}
      </div>
      <div className="review-summary">{review.summary}</div>
      <div className="review-body">{review.body}</div>
      <br />
    </div>
  );
}

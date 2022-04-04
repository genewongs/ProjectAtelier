import React, { useState } from 'react';
import moment from 'moment';

export default function Review({ review }) {
  const [loadMore, setLoadMore] = useState(false);
  const first250 = review.body.slice(0, 250);

  function handleClick() {
    setLoadMore((prev) => (!prev));
  }

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
      <div className="review-body">{loadMore ? review.body : `${first250}...` }</div>
      { loadMore ? null : <button type="button" onClick={handleClick}>Show More</button> }
      <br />
    </div>
  );
}

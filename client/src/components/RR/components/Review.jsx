import React, { useState } from 'react';
import moment from 'moment';
import StyledStars from './styles/StyledStarRating';
import ReviewPhotos from './ReviewPhotos';

export default function Review({ review }) {
  const [loadMore, setLoadMore] = useState(false);
  const first250 = review.body.slice(0, 250);

  function handleClick() {
    setLoadMore((prev) => (!prev));
  }

  return (
    <div className="review">
      <div className="review-stars">
        <StyledStars percent={`${(review.rating * 20)}%`} fontSize="20px">
          <span className="stars-rating">★★★★★</span>
        </StyledStars>
      </div>
      <div className="review-name">
        {review.reviewer_name}
        {'\n'}
        {moment(review.date).format('LL')}
      </div>
      <div className="review-summary">{review.summary}</div>
      <div className="review-body">{loadMore ? review.body : `${first250}...` }</div>
      { loadMore ? null : <button type="button" onClick={handleClick}>Show More</button> }
      <ReviewPhotos photoUrls={review.photos} />
      <br />
    </div>
  );
}

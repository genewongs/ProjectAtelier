import React, { useState } from 'react';
import dayjs from 'dayjs';
import axios from 'axios';
import StyledStars from './styles/StyledStarRating';
import ReviewPhotos from './ReviewPhotos';

export default function Review({ review, setCurrDisplay, setExpanded }) {
  const [loadMore, setLoadMore] = useState(false);
  const [voted, setVoted] = useState(false);
  const [reported, setReported] = useState(false);
  const [helpfulness, setHelpfulness] = useState(review.helpfulness);
  const first250 = review.body.slice(0, 250);

  function handleClick() {
    setLoadMore((prev) => (!prev));
  }

  function handleVote() {
    if (!voted) {
      axios.put('/api', {
        path: `reviews/${review.review_id}/helpful`,
      })
        .then(setHelpfulness((prev) => prev + 1))
        .catch((err) => new Error(err));
    }
  }

  function handleReport() {
    if (!reported) {
      axios.put('/api', {
        path: `reviews/${review.review_id}/report`,
      })
        .catch((err) => new Error(err));
    }
  }

  return (
    <div className="review">
      <div className="top-container">
        <StyledStars percent={`${(review.rating * 20)}%`} fontSize="20px">
          <span className="stars-rating">★★★★★</span>
        </StyledStars>
        <div className="review-name">
          {review.reviewer_name}
          {', \n'}
          <span className="review-date">{dayjs(review.date).format('MMMM D, YYYY')}</span>
        </div>
      </div>
      <div className="review-summary"><b>{review.summary}</b></div>
      <div className="review-body">
        {loadMore ? review.body : `${first250}` }
        { (first250 === review.body || loadMore)
          ? null
          : (
            <button
              type="button"
              className="show-more-button"
              onClick={handleClick}
            >
              ...Show more
            </button>
          ) }
      </div>
      <ReviewPhotos
        photoUrls={review.photos}
        setCurrDisplay={setCurrDisplay}
        setExpanded={setExpanded}
      />
      <div className="review-recommend">{review.recommend && '✓ I recommend this product'}</div>
      {review.response
        ? (
          <div className="review-response">
            <span>
              <b>Response from seller: </b>
              <br />
              <span>{review.response}</span>
            </span>
          </div>
        )
        : null}
      <div className="review-helpful">
        Was this review helpful?
        {' '}
        <button type="button" disable={voted ? 'true' : ''} onClick={() => { setVoted(true); handleVote(); }}>Yes</button>
        (
        {helpfulness}
        )
        |
        <button type="button" disable={reported ? 'true' : ''} onClick={() => { setReported(true); handleReport(); }}>Report</button>
      </div>
    </div>
  );
}

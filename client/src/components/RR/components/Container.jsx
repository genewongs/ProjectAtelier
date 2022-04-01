import React, {
  useState, useContext, useEffect, useCallback,
} from 'react';
import axios from 'axios';
import ReviewStoreContext from '../utils/ReviewContext.jsx';
import ReviewList from './ReviewList.jsx';
import AddReview from './AddReview.jsx';

function Container() {
  const { id, setReviewData } = useContext(ReviewStoreContext);
  const [count, setCount] = useState(2);
  const [reviewCount, setReviewCount] = useState(0);
  const [limitHit, setLimitHit] = useState(true);
  const [sort, setSort] = useState('relevant');

  function getReviews() {
    axios.get('api', { params: { path: `reviews?count=${count}&sort=${sort}&product_id=${id}` } })
      .then((response) => {
        setReviewData(response.data.results);
        if (count >= reviewCount) {
          setLimitHit(true);
        } else {
          setLimitHit(false);
        }
      })
      .catch((err) => console.error(err));
  }

  function getMaxReviewCount() {
    axios.get('api', { params: { path: `reviews?count=99999&product_id=${id}` } })
      .then((response) => setReviewCount(response.data.results.length))
      .catch((err) => console.error(err));
  }

  const incrementCount = useCallback(() => setCount((prevCount) => prevCount + 2), []);

  useEffect(() => {
    getMaxReviewCount();
    getReviews();
  }, []);

  useEffect(() => {
    getReviews();
  }, [count, sort]);

  return (
    <div className="container">
      <div className="review-sorted-by">
        {reviewCount}
        {reviewCount.length >= 2 ? ' reviews, ' : ' review, '}
        sorted by
        {' '}
        <select className="sort-selector" onChange={(e) => setSort(e.target.value)}>
          <option value="relevance">Relevance</option>
          <option value="newest">Newest</option>
          <option value="helpful">Helpfulness</option>
        </select>
      </div>
      <ReviewList />
      {limitHit ? null
        : (
          <button
            type="button"
            className="reviews-button"
            onClick={incrementCount}
          >
            More Reviews
          </button>
        )}
      <AddReview id={id} />
    </div>
  );
}

export default Container;

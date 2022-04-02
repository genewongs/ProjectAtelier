import React, {
  useState, useContext, useEffect, useCallback,
} from 'react';
import axios from 'axios';
import ReviewStoreContext from '../utils/ReviewContext.jsx';
import StarRating from './StarRating.jsx';
import ReviewList from './ReviewList.jsx';
import AddReview from './AddReview.jsx';

function Container() {
  const { id, setReviewData, setMetaData } = useContext(ReviewStoreContext);
  const [count, setCount] = useState(2);
  const [reviewCount, setReviewCount] = useState(0);
  const [limitHit, setLimitHit] = useState(false);
  const [sort, setSort] = useState('relevant');

  function getReviews() {
    return new Promise((resolve, reject) => {
      axios.get('api', { params: { path: `reviews?count=${count}&sort=${sort}&product_id=${id}` } })
        .then((response) => resolve(response.data))
        .catch((err) => reject(err));
    });
  }

  function getMetaData() {
    return new Promise((resolve, reject) => {
      axios.get('api', { params: { path: `reviews/meta?product_id=${id}` } })
        .then((response) => resolve(response.data))
        .catch((err) => reject(err));
    });
  }

  const incrementCount = useCallback(() => setCount((prevCount) => prevCount + 2), []);

  useEffect(() => {
    Promise.all([getReviews(), getMetaData()])
      .then(async (results) => {
        setReviewData(results[0]);
        setMetaData(results[1]);
        setReviewCount(Object.values(results[1].ratings)
          .reduce((sum, num) => Number(sum) + Number(num), 0));
      })
      .catch((err) => new Error(err));
  }, []);

  useEffect(() => {
    getReviews()
      .then((response) => setReviewData(response))
      .then(() => {
        if (count >= reviewCount) {
          setLimitHit(true);
        } else {
          setLimitHit(false);
        }
      })
      .catch((err) => new Error(err));
  }, [count, reviewCount, sort]);

  return (
    <div className="container">
      <div className="rating-container">
        <StarRating />
      </div>
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
      <AddReview />
    </div>
  );
}

export default Container;

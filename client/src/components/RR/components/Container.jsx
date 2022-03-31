import React, { useState, useContext, useEffect, useCallback } from 'react';
import axios from 'axios';
import ReviewStoreContext from '../utils/ReviewContext.jsx';
import ReviewList from './ReviewList.jsx';

const id = 65631;

function Container() {
  const { setReviewData } = useContext(ReviewStoreContext);
  const [count, setCount] = useState(2);

  function getData() {
    axios.get('api', { params: { path: `reviews?count=${count}&product_id=${id}` } })
      .then((response) => setReviewData(response.data.results))
      .catch((err) => console.error(err));
  }

  const incrementCount = useCallback(() => setCount((count) => count + 2), []);

  useEffect(() => {
    getData();
  }, [count]);

  return (
    <ReviewList getMoreReviews={incrementCount} />
  );
}

export default Container;

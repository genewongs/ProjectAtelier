import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import ReviewStoreContext from '../utils/ReviewContext.jsx';
import ReviewList from './ReviewList.jsx';

function Container() {
  const { setReviewData } = useContext(ReviewStoreContext);

  function getData() {
    axios.get('api', { params: { path: 'reviews?product_id=65631' } })
      .then((response) => setReviewData(response.data.results))
      .catch((err) => console.error(err));
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <ReviewList />
  );
}

export default Container;

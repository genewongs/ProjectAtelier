import React, { useState, useContext, useEffect } from 'react';
import ReviewStoreContext from '../utils/ReviewContext.jsx';
import StarRatingStyled from '../styles/StarRatings.jsx';

function StarRating() {
  const { metaData } = useContext(ReviewStoreContext);
  const [average, setAverage] = useState(0);

  function getAverage() {
    let totalEntries = 0;
    let totalRating = 0;
    Object.entries(metaData.ratings).forEach((rating) => {
      totalRating += (Number(rating[0]) * Number(rating[1]));
      totalEntries += Number(rating[1]);
    });

    setAverage(Math.round((totalRating / totalEntries) * 4) / 4);
  }

  useEffect(() => {
    if (metaData.length !== 0) {
      getAverage();
    }
  }, [metaData]);

  return (
    <StarRatingStyled stars={average} />
  );
}

export default StarRating;

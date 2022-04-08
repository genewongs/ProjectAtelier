import React, { useState, useContext, useEffect } from 'react';
import ReviewStoreContext from '../utils/ReviewContext';
import StarStyled from './styles/StyledStarRating';

function StarRating() {
  const { metaData } = useContext(ReviewStoreContext);
  const [average, setAverage] = useState(0);
  const [percent, setPercent] = useState(0);

  function getAverageAndPercent() {
    let totalEntries = 0;
    let totalRating = 0;
    Object.entries(metaData.ratings).forEach((rating) => {
      totalRating += (Number(rating[0]) * Number(rating[1]));
      totalEntries += Number(rating[1]);
    });

    setAverage(Math.round((totalRating / totalEntries) * 10) / 10);
    setPercent((Math.round((totalRating / totalEntries) * 4) / 4) * 20);
  }

  useEffect(() => {
    if (metaData.length !== 0) {
      getAverageAndPercent();
    }
  }, [metaData]);

  return (
    <StarStyled percent={`${percent}%`} fontSize={Number(35)}>
      <span className="average">{average}</span>
      <span>{'  '}</span>
      <span className="stars-rating">★★★★★</span>
    </StarStyled>
  );
}

export default StarRating;

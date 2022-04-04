import React, { useState, useContext, useEffect } from 'react';
import ReviewStoreContext from '../utils/ReviewContext';
import StarStyled from './styles/StarRating2';

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

  function percent() {
    return average * 20;
  }

  return (
    <StarStyled className="stars" percent={percent()}>
      ★★★★★
    </StarStyled>
  );
}

export default StarRating;

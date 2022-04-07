import React, { useContext } from 'react';
import ReviewStoreContext from '../utils/ReviewContext';

function RatingBreakdownFactor() {
  const { metaData } = useContext(ReviewStoreContext);

  return (
    <div>
      this is the rating breakdown factor component
    </div>
  );
}

export default RatingBreakdownFactor;

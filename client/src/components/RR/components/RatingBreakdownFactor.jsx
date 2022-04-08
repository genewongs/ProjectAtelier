import React, { useContext, useState, useEffect } from 'react';
import ReviewStoreContext from '../utils/ReviewContext';
import StyledRatingBreakdownFactors from './styles/StyledRatingBreakdownFactors';

function RatingBreakdownFactor() {
  const { metaData } = useContext(ReviewStoreContext);

  return (
    <StyledRatingBreakdownFactors>
      {metaData.characteristics
      && (
        Object.keys(metaData.characteristics).map((key) => (
          <div className="breakdown-container">
            <div className="key-container">
              {key}
              {' '}
            </div>
            <div className="bar-container">
              <input
                key={key}
                type="range"
                min="1"
                max="5"
                // disabled
                value={Math.round(metaData.characteristics[key].value * 10) / 10}
              />
              <div className="description-container">
                <span className="description-left">Too Small</span>
                <span className="description-middle">Perfect</span>
                <span className="description-right">Too Big</span>
              </div>
            </div>
          </div>
        )))}
    </StyledRatingBreakdownFactors>
  );
}

export default RatingBreakdownFactor;

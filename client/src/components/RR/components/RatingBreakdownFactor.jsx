import React, { useContext } from 'react';
import ReviewStoreContext from '../utils/ReviewContext';
import StyledRatingBreakdownFactors from './styles/StyledRatingBreakdownFactors';

function RatingBreakdownFactor() {
  const { metaData } = useContext(ReviewStoreContext);
  const Size = {
    low: 'A size too small',
    mid: 'Perfect',
    high: 'A size too wide',
  };
  const Width = {
    low: 'Too narrow',
    mid: 'Perfect',
    high: 'Too wide',
  };
  const Comfort = {
    low: 'Uncomfortable',
    high: 'Perfect',
  };
  const Quality = {
    low: 'Poor',
    high: 'Perfect',
  };
  const Length = {
    low: 'Runs Short',
    mid: 'Perfect',
    high: 'Runs Long',
  };
  const Fit = {
    low: 'Runs tight',
    mid: 'Perfect',
    high: 'Runs Long',
  };

  const characterisitics = {
    Size,
    Width,
    Comfort,
    Quality,
    Length,
    Fit,
  };

  return (
    <StyledRatingBreakdownFactors>
      {metaData.characteristics
      && (
        Object.keys(metaData.characteristics).map((key) => (
          <div key={key} className="breakdown-container">
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
                step="1"
                disabled
                value={Math.round(metaData.characteristics[key].value * 10) / 10}
              />
              <div className="description-container">
                <span className="description-left">{characterisitics[key].low}</span>
                <span className="description-mid">{characterisitics[key].mid}</span>
                <span className="description-right">{characterisitics[key].high}</span>
              </div>
            </div>
          </div>
        )))}
    </StyledRatingBreakdownFactors>
  );
}

export default RatingBreakdownFactor;

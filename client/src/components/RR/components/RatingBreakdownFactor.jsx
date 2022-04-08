import React, { useContext } from 'react';
import ReviewStoreContext from '../utils/ReviewContext';
import StyledRatingBreakdownFactors from './styles/StyledRatingBreakdownFactors';

function RatingBreakdownFactor() {
  const { metaData } = useContext(ReviewStoreContext);
  const Size = {
    low: 'A size too small',
    high: 'A size too wide',
  };
  const Width = {
    low: 'Too narrow',
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
    high: 'Runs Long',
  };
  const Fit = {
    low: 'Runs tight',
    high: 'Runs Long',
  };

  function returnDescription(key, val) {
    switch (key) {
      case 'Size':
        return Size[val];
      case 'Width':
        return Width[val];
      case 'Comfort':
        return Comfort[val];
      case 'Quality':
        return Quality[val];
      case 'Length':
        return Length[val];
      case 'Fit':
        return Fit[val];
      default:
        return null;
    }
  }

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
                disabled
                value={Math.round(metaData.characteristics[key].value * 10) / 10}
              />
              <div className="description-container">
                <span className="description-left">{returnDescription(key, 'low')}</span>
                <span className="description-right">{returnDescription(key, 'high')}</span>
              </div>
            </div>
          </div>
        )))}
    </StyledRatingBreakdownFactors>
  );
}

export default RatingBreakdownFactor;

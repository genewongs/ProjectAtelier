import React, { useContext, useState, useEffect } from 'react';
import ReviewStoreContext from '../utils/ReviewContext';
import StyledRatingBreakdownFilter from './styles/StyledRatingBreakdownFilter';

function RatingBreakdownFilter({ handleSortBy }) {
  const { metaData } = useContext(ReviewStoreContext);
  const [ratingsPercents, setRatingsPercents] = useState({
    5: 0,
    4: 0,
    3: 0,
    2: 0,
    1: 0,
  });

  function getPercents() {
    let totalEntries = 0;
    Object.values(metaData.ratings)
      .forEach((rating) => {
        totalEntries += Number(rating);
      });

    Object.entries(metaData.ratings)
      .forEach((rating) => {
        const percent = Math.round((Number(rating[1]) / totalEntries) * 100);
        setRatingsPercents((prev) => (
          { ...prev, [Number(rating[0])]: `${percent}%` }));
      });
  }

  useEffect(() => {
    if (metaData.length !== 0) {
      getPercents();
    }
  }, [metaData]);

  return (
    <StyledRatingBreakdownFilter percents={ratingsPercents}>
      {Object.entries(ratingsPercents).map((rating) => (
        <button
          type="button"
          className="rating-breakdown-container"
          key={rating[0]}
          id={rating[0]}
          onClick={(e) => handleSortBy(e)}
        >
          <div className="side" id={rating[0]}>
            <div className="breakdown-number" id={rating[0]}>
              {rating[0]}
              {' '}
              stars
            </div>
          </div>
          <div className="click-container" id={rating[0]} />
          <div className="middle" id={rating[0]}>
            <div className="bar-container" id={rating[0]}>
              <div className={`bar-${rating[0]}`} id={rating[0]} />
            </div>
          </div>
        </button>
      ))}
    </StyledRatingBreakdownFilter>
  );
}

export default RatingBreakdownFilter;

import React, { useContext, useState, useEffect } from 'react';
import ReviewStoreContext from '../utils/ReviewContext';
import StyledRatingBreakdownFilter from './styles/StyledRatingBreakdownFilter';

function RatingBreakdownFilter({ handleSortBy, sortBy, clearFilters }) {
  const { metaData } = useContext(ReviewStoreContext);
  const [recPercent, setRecPercent] = useState(0);
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

    let totalRecs = 0;
    Object.values(metaData.recommended)
      .forEach((rec) => { totalRecs += Number(rec); });
    setRecPercent(`${Math.round((Number(metaData.recommended.true) / totalRecs) * 100)}%`);
  }

  useEffect(() => {
    if (metaData.length !== 0) {
      getPercents();
    }
  }, [metaData]);

  return (
    <div>
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
      {sortBy.length !== 0 && (
      <div className="current-sort">
        Currently filtered by |
        {' '}
        {sortBy.sort().map((sortKey) => (
          <span>
            {' '}
            {sortKey}
            {' '}
            |
          </span>
        ))}
        {' '}
        starred reviews
        <button type="button" className="remove-all" onClick={clearFilters}>✗ all filters</button>
      </div>
      )}
      <div className="number-recommended">
        {recPercent}
        {' '}
        of buyers recommend this product!
      </div>
    </div>
  );
}

export default RatingBreakdownFilter;

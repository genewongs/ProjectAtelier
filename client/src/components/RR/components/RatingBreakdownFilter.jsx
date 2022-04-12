import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ReviewStoreContext from '../utils/ReviewContext';
import StyledRatingBreakdownFilter from './styles/StyledRatingBreakdownFilter';

function RatingBreakdownFilter({ handleSortBy, sortBy, clearFilters }) {
  const { ratingsPercents, recPercent } = useContext(ReviewStoreContext);

  return (
    <StyledRatingBreakdownFilter percents={ratingsPercents}>
      <div className="rating-container">
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
      </div>
      <div className="below-ratings-container">
        {sortBy.length !== 0 && (
        <div className="current-sort">
          Currently filtered by |
          {' '}
          {sortBy.sort().map((sortKey) => (
            <span key={sortKey}>
              {' '}
              {sortKey}
              {' '}
              |
            </span>
          ))}
          {' '}
          starred reviews
        </div>
        )}
        {sortBy.length !== 0 && <button type="button" className="remove-all" onClick={clearFilters}>✗ all filters</button>}
        <div className="number-recommended">
          {recPercent}
          {' '}
          of buyers recommend this product!
        </div>
      </div>
    </StyledRatingBreakdownFilter>
  );
}

export default RatingBreakdownFilter;

RatingBreakdownFilter.propTypes = {
  handleSortBy: PropTypes.func.isRequired,
  sortBy: PropTypes.arrayOf(PropTypes.number).isRequired,
  clearFilters: PropTypes.func.isRequired,
};

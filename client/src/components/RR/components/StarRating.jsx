import React, { useContext } from 'react';
import ReviewStoreContext from '../utils/ReviewContext';
import StarStyled from './styles/StyledStarRating';

function StarRating() {
  const { percentAverageStars } = useContext(ReviewStoreContext);

  return (
    <StarStyled percent={`${percentAverageStars.percent}%`} fontSize={Number(35)}>
      <span className="average">{percentAverageStars.average}</span>
      <span>{'  '}</span>
      <span className="stars-rating">★★★★★</span>
    </StarStyled>
  );
}

export default StarRating;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import StarStyled from './styles/StyledStarRating';

function StarRating({ id, fontSize }) {
  const [percent, setPercent] = useState(0);

  function getPercent() {
    axios.get('api/percent', { params: { path: `reviews/meta?product_id=${id}` } })
      .then((response) => setPercent(response.data.percent));
  }

  useEffect(() => {
    getPercent();
  }, []);

  return (
    <StarStyled percent={`${percent}%`} fontSize={fontSize}>
      <span className="stars-rating">★★★★★</span>
    </StarStyled>
  );
}

export default StarRating;

StarRating.propTypes = {
  id: PropTypes.number.isRequired,
  fontSize: PropTypes.number.isRequired,
};

import React, { useState, useEffect } from 'react';
import axios from 'axios';
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
    <StarStyled percent={`${percent}%`} fontSize={Number(fontSize)}>
      <span className="stars-rating">★★★★★</span>
    </StarStyled>
  );
}

export default StarRating;

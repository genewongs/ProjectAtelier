import React from 'react';
import styled from 'styled-components';
import StarIcon from './StarIcon.jsx';
// import { StarIcon } from '@heroicons/react/outline';

const Stars = {};

Stars.WrapperDiv = styled.div`
  display: flex;
  align-items: center;
`;

Stars.RatingSpan = styled.span`
  font-size: 2.0rem;
  font-weight:700;
  padding-right: 5px;
  line-height: 2.0rem;
  font-familt: Arial;
`;

Stars.BackStarsDiv = styled.div`
  display: flex;
  position: relative;
  color: #000000;
`;

Stars.FrontDiv = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  overflow: hidden;
  width: ${(props) => props.rating};
  color: #cf0000;
`;

function StarRatingStyled({ stars }) {
  let rating = 0;

  if (stars) {
    rating = `${(stars * 20).toString()}%`;
  }

  return (
    <Stars.WrapperDiv>
      <Stars.RatingSpan>{stars || 'N/A'}</Stars.RatingSpan>
      <Stars.BackStarsDiv>
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <Stars.FrontDiv rating={rating}>
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
        </Stars.FrontDiv>
      </Stars.BackStarsDiv>
    </Stars.WrapperDiv>
  );
}

export default StarRatingStyled;

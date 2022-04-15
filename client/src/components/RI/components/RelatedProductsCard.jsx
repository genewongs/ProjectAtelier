import React, { useCallback } from 'react';
import { StarIcon } from '@heroicons/react/outline';
import { useNavigate } from 'react-router-dom';
import {
  CardWrapper, CardCategory, CardImage, CardName, CardPrice, StarRatingStyled,
} from '../styles/RelatedProductsCardStyled.styled';
import StarRating from '../../RR/components/StarRating';

export default function RelatedProductsCard({
  urlOne, urlTwo, name, category, price, modalOptions, id,
}) {
  const navigate = useNavigate();
  const handleOnClick = useCallback(() => {
    navigate(`/${id}`, { replace: true });
    window.location.reload(false);
  }, [navigate]);

  return (
    <CardWrapper>
      <StarIcon className="star-icon" onClick={modalOptions} />
      <CardImage photo={urlOne || urlTwo} onClick={handleOnClick} />
      <CardCategory>{category}</CardCategory>
      <CardName>{name}</CardName>
      <CardPrice>{price}</CardPrice>
      <StarRatingStyled>
        <StarRating id={id} fontSize="1.25em" />
      </StarRatingStyled>
    </CardWrapper>
  );
}

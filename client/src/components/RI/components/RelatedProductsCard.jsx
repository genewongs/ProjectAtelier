import React, { useCallback } from 'react';
import { StarIcon } from '@heroicons/react/outline';
import { useNavigate } from 'react-router-dom';
import {
  CardWrapper, CardCategory, CardImage, CardName, CardPrice,
} from '../styles/RelatedProductsCardStyled.styled';

export default function RelatedProductsCard({
  url, name, category, price, modalOptions, id,
}) {
  const navigate = useNavigate();
  const handleOnClick = useCallback(() => {
    navigate(`/${id}`, { replace: true });
    window.location.reload(false);
  }, [navigate]);

  return (
    <CardWrapper>
      <StarIcon className="star-icon" onClick={modalOptions} />
      <CardImage photo={url} onClick={handleOnClick} />
      <CardCategory>{category}</CardCategory>
      <CardName>{name}</CardName>
      <CardPrice>{price}</CardPrice>
    </CardWrapper>
  );
}

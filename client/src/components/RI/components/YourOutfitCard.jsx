import React from 'react';
import { XCircleIcon } from '@heroicons/react/outline';
import {
  CardWrapper, CardCategory, CardImage, CardName, CardPrice, StarRatingStyled,
} from '../styles/RelatedProductsCardStyled.styled';
import StarRating from '../../RR/components/StarRating';

export default function YourOutfitCard({
  url, name, category, price, removeProductLocally, id,
}) {
  return (
    <CardWrapper>
      <CardImage photo={url} />
      <XCircleIcon className="x-icon" onClick={removeProductLocally} />
      <CardCategory>{category}</CardCategory>
      <CardName>{name}</CardName>
      <CardPrice>{price}</CardPrice>
      <StarRatingStyled>
        <StarRating id={id} fontSize="1.25em" />
      </StarRatingStyled>
    </CardWrapper>
  );
}

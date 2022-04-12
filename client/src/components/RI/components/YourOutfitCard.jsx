import React from 'react';
import { XCircleIcon } from '@heroicons/react/outline';
import {
  CardWrapper, CardCategory, CardImage, CardName, CardPrice,
} from '../styles/RelatedProductsCardStyled.styled';

export default function YourOutfitCard({
  url, name, category, price, removeProductLocally,
}) {
  return (
    <CardWrapper>
      <CardImage photo={url} />
      <XCircleIcon className="x-icon" onClick={removeProductLocally} />
      <CardCategory>{category}</CardCategory>
      <CardName>{name}</CardName>
      <CardPrice>{price}</CardPrice>
    </CardWrapper>
  );
}

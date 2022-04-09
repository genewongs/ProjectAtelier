import React from 'react';
import { XCircleIcon } from '@heroicons/react/outline';
import {
  CardWrapper, CardCategory, CardImage, CardName, CardPrice,
} from '../styles/YourOutfitCardStyled.styled';

export default function YourOutfitCard({
  url, name, category, price, removeProductLocally,
}) {
  return (
    <CardWrapper>
      <XCircleIcon className="star-icon" onClick={removeProductLocally} />
      <CardCategory>{category}</CardCategory>
      <CardImage photo={url} />
      <CardName>{name}</CardName>
      <CardPrice>{price}</CardPrice>
    </CardWrapper>
  );
}

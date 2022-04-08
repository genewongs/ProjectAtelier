import React from 'react';
import {
  CardWrapper, CardCategory, CardImage, CardName, CardPrice,
} from '../styles/YourOutfitCardStyled.styled';

export default function YourOutfitCard({
  url, name, category, price,
}) {
  return (
    <CardWrapper>
      <CardCategory>{category}</CardCategory>
      <CardImage photo={url} />
      <CardName>{name}</CardName>
      <CardPrice>{price}</CardPrice>
    </CardWrapper>
  );
}

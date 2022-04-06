import React from 'react';
import {
  CardWrapper, CardCategory, CardImage, CardName, CardPrice,
} from '../styles/CardStyled.styled';

export default function Card({
  url, name, category, price, modalOptions,
}) {
  return (
    <CardWrapper onClick={modalOptions}>
      <CardCategory>{category}</CardCategory>
      <CardImage photo={url} />
      <CardName>{name}</CardName>
      <CardPrice>{price}</CardPrice>
    </CardWrapper>
  );
}

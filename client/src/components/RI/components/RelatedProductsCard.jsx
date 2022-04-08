import React from 'react';
import {
  CardWrapper, CardCategory, CardImage, CardName, CardPrice,
} from '../styles/RelatedProductsCardStyled.styled';

export default function RelatedProductsCard({
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

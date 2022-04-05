import React from 'react';
import { CardWrapper, CardImage, CardName } from '../styles/CardStyled.styled';

export default function Card({ name, url }) {
  return (
    <CardWrapper>
      <CardImage photo={url} />
      <CardName>{name}</CardName>
    </CardWrapper>
  );
}

import React from 'react';
import { CardWrapper, CardImage, CardName } from '../styles/CardStyled.styled';

export default function Card({
  name, url, modalOptions,
}) {
  return (
    <CardWrapper
      onClick={modalOptions}
    >
      <CardImage photo={url} />
      <CardName>{name}</CardName>
    </CardWrapper>
  );
}

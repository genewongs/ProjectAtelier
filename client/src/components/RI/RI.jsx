/* eslint-disable import/extensions */
import React from 'react';
import Container from './components/Container';
import { Related } from './utils/RelatedProductsContext';

export default function RI() {
  return (
    // Change name when 'your cart' implementation
    <Related>
      <Container />
    </Related>
  );
}

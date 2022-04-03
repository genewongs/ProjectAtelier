/* eslint-disable import/extensions */
import React from 'react';
import Container from './components/Container.jsx';
import { RelatedProducts } from './utils/RelatedProductsContext.jsx';

export default function RI() {
  return (
    // Change name when 'your cart' implementation
    <RelatedProducts>
      <Container />
    </RelatedProducts>
  );
}

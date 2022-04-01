import React, { useState } from 'react';
import Container from './components/Container.jsx';
import RelatedProductsContext, { RelatedProducts } from './utils/RelatedProductsContext.jsx';

export default function RI() {
  return (
    <RelatedProducts>
      <Container />
    </RelatedProducts>
  );
}

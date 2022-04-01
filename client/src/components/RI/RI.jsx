import React, { useState } from 'react';
import Container from './components/Container.jsx';
import RelatedProductsContext from './utils/RelatedProductsContext.jsx';

export default function RI() {
  const [relatedData, setRelatedData] = useState([]);
  return (
    <RelatedProductsContext.Provider value={{ relatedData, setRelatedData }}>
      <Container />
    </RelatedProductsContext.Provider>
  );
}

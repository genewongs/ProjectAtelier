import React from 'react';
import RelatedProductsContext from '../utils/RelatedProductsContext.jsx';

export default function RelatedProductsList() {
  return (
    <RelatedProductsContext.Consumer>
      { relatedData => (
        console.log(relatedData)
      ) }
    </RelatedProductsContext.Consumer>
  );
}

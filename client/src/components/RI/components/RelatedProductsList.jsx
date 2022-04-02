import React from 'react';
import RelatedProductsContext from '../utils/RelatedProductsContext.jsx';
import RelatedProductsEntry from './RelatedProductsEntry.jsx';

export default function RelatedProductsList() {
  return (
    <RelatedProductsContext.Consumer>
      {({ relatedData }) => (
        relatedData.map((card, index) => (
          <RelatedProductsEntry singleRelatedData={card} key={index} />
        ))
      )}
    </RelatedProductsContext.Consumer>
  );
}

/* eslint-disable react/no-array-index-key */
import React from 'react';
import RelatedProductsContext from '../utils/RelatedProductsContext';
import RelatedProductsEntry from './RelatedProductsEntry';

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

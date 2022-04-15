/* eslint-disable react/no-array-index-key */
import React from 'react';
import RelatedProductsEntry from './RelatedProductsEntry';

export default function RelatedProductsList({ relatedData }) {
  return (
    <>
      {relatedData.map((card, index) => (
        <RelatedProductsEntry singleRelatedData={card} key={index} />
      ))}
    </>
  );
}

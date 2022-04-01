import React from 'react';

export default function RelatedProductsEntry({ singleRelatedData }) {
  return (
    <span>
      {singleRelatedData.category}
      {singleRelatedData.name}
      $
      {singleRelatedData.default_price}
    </span>
  );
}

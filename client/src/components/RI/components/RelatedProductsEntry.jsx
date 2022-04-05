import React from 'react';
import Card from './Card';

export default function RelatedProductsEntry({ singleRelatedData }) {
  return (
    <Card
      url={singleRelatedData.results[0].photos[0].url || 'https://shenandoahcountyva.us/bos/wp-content/uploads/sites/4/2018/01/picture-not-available-clipart-12.jpg'}
      name={singleRelatedData.name}
      category={singleRelatedData.category}
      price={`$${Math.trunc(singleRelatedData.default_price)}`}
      id={singleRelatedData.product_id}
    />
  );
}

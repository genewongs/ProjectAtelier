import React, { useContext } from 'react';
import RelatedProductsContext from '../utils/RelatedProductsContext';
import RelatedProductsCard from './RelatedProductsCard';

export default function RelatedProductsEntry({ singleRelatedData }) {
  const myContext = useContext(RelatedProductsContext);

  return (
    <RelatedProductsCard
      urlOne={singleRelatedData.results[0].photos[0].thumbnail_url}
      urlTwo="https://shenandoahcountyva.us/bos/wp-content/uploads/sites/4/2018/01/picture-not-available-clipart-12.jpg"
      name={singleRelatedData.name}
      category={singleRelatedData.category}
      price={`$${Math.trunc(singleRelatedData.default_price)}`}
      id={singleRelatedData.product_id}
      modalOptions={() => {
        myContext.setClickedRelatedData(singleRelatedData);
        myContext.toggleModal();
      }}
    />
  );
}

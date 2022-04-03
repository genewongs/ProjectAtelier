import React, { useContext } from 'react';
import { Card } from '../styles/Card.styled';
import RelatedProductsContext from '../utils/RelatedProductsContext.jsx';

export default function RelatedProductsEntry({ singleRelatedData }) {
  const { setModalClicked } = useContext(RelatedProductsContext);

  return (
    <Card
      onClick={() => { setModalClicked(true); }}
    >
      <p className="category">{singleRelatedData.category}</p>
      <p className="name">{singleRelatedData.name}</p>
      <p className="price">{singleRelatedData.default_price}</p>
    </Card>
  );
}

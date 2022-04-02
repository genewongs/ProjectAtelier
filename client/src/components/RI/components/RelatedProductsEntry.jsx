import React from 'react';
import { Card } from '../styles/Card.styled';

export default function RelatedProductsEntry({ singleRelatedData }) {
  return (
    <Card>
      <p className="category">{singleRelatedData.category}</p>
      <p className="name">{singleRelatedData.name}</p>
      <p className="price">{singleRelatedData.default_price}</p>
    </Card>
  );
}

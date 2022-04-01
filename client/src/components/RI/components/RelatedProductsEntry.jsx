import React from 'react';
import { Card } from '../styles/Card.styled';

export default function RelatedProductsEntry({ singleRelatedData }) {
  return (
    <Card>
      {singleRelatedData.category}
      {singleRelatedData.name}
      $
      {singleRelatedData.default_price}
    </Card>
  );
}

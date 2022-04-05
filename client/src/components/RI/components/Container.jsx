/* eslint-disable no-param-reassign */
import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import RelatedProductsContext from '../utils/RelatedProductsContext';
import RelatedProductsList from './RelatedProductsList';

import { ContainerStyled } from '../styles/ContainerStyled.styled';

export default function Container() {
  const { setRelatedData, id } = useContext(RelatedProductsContext);

  async function getRelatedInfo() {
    const relatedStyles = await axios.get('/api/products/related/styles', { params: { id } });
    const relatedInfo = await axios.get('/api/products/related', { params: { id } });

    /* Iterate through the related id styles */
    const relatedStylesInfo = relatedStyles.data.map((currentStyle) => {
      /* Iterate through the related id information */
      relatedInfo.data.forEach((currentItem) => {
        /* Check if id's are the same */
        if (parseInt(currentStyle.product_id, 10) === currentItem.id) {
          currentStyle.name = currentItem.name;
          currentStyle.category = currentItem.category;
          currentStyle.features = currentItem.features;
          currentStyle.default_price = currentItem.default_price;
        }
      });
      return currentStyle;
    });
    setRelatedData(relatedStylesInfo);
  }

  useEffect(() => {
    getRelatedInfo();
  }, []);

  return (
    <ContainerStyled>
      <RelatedProductsList />
    </ContainerStyled>
  );
}

import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import RelatedProductsContext from '../utils/RelatedProductsContext.jsx';
import RelatedProductsList from './RelatedProductsList.jsx';

import { ContainerStyled } from '../styles/ContainerStyled.styled';

import RelatedProductsModal from '../modal/RelatedProductsModal.jsx';

export default function Container() {
  const { modalClicked, setRelatedData, id } = useContext(RelatedProductsContext);

  function getRelatedProductInfo(relatedIDArr) {
    Promise.all(
      relatedIDArr.map((relatedID) => new Promise((resolve, reject) => {
        axios.get('/api', { params: { path: `products/${relatedID}` } })
          .then((response) => {
            resolve(response.data);
          })
          .catch((error) => {
            reject(error);
          });
      })),
    )
      .then((related) => {
        setRelatedData(related);
      });
  }

  function getRelatedProductIDs() {
    axios.get('/api', { params: { path: `products/${id}/related` } })
      .then((response) => {
        getRelatedProductInfo(response.data);
      })
      .catch((error) => {
        throw new Error(error);
      });
  }

  useEffect(() => {
    getRelatedProductIDs();
  }, []);

  return (
    <ContainerStyled>
      <RelatedProductsList />
      { modalClicked && (
        <RelatedProductsModal />
      )}
    </ContainerStyled>
  );
}

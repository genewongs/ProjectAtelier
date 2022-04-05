/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useState, createContext, useCallback } from 'react';

const RelatedProductsContext = createContext();

export function RelatedProducts({ children }) {
  /* Get the related and product data information/style */
  const [relatedData, setRelatedData] = useState([]);
  const [productData, setProductData] = useState([]);
  /* For the card that has been clicked */
  const [clickedRelatedData, setClickedRelatedData] = useState([]);
  const [modalClicked, setModalClicked] = useState(false);

  const toggleModal = useCallback(() => setModalClicked((prevState) => !prevState), []);
  const id = 65631;

  const store = {
    relatedData,
    setRelatedData,
    productData,
    setProductData,
    modalClicked,
    setModalClicked,
    clickedRelatedData,
    setClickedRelatedData,
    toggleModal,
    id,
  };

  return (
    <RelatedProductsContext.Provider value={store}>
      {children}
    </RelatedProductsContext.Provider>
  );
}

export default RelatedProductsContext;

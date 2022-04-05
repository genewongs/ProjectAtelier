/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useState, createContext, useCallback } from 'react';

const RelatedProductsContext = createContext();

export function RelatedProducts({ children }) {
  /* Get the related data information/style */
  const [relatedData, setRelatedData] = useState([]);
  const [productInfo, setProductInfo] = useState([]);
  const [productStyle, setProductStyle] = useState([]);
  const [clickedRelatedData, setClickedRelatedData] = useState([]);
  const [modalClicked, setModalClicked] = useState(false);

  const toggleModal = useCallback(() => setModalClicked((prevState) => !prevState), []);
  const id = 65631;

  const store = {
    relatedData,
    setRelatedData,
    productInfo,
    setProductInfo,
    productStyle,
    setProductStyle,
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

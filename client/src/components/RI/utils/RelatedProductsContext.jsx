/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useState, createContext, useCallback } from 'react';

const RelatedProductsContext = createContext();

export function Related({ children }) {
  /* Get the related and product data information/style */
  const [relatedData, setRelatedData] = useState([]);
  const [productData, setProductData] = useState([]);

  const [localStorageOutfits, setLocalStorageOutfits] = useState(() => {
    const values = [];
    const keys = Object.keys(localStorage);
    let i = keys.length;
    while (i--) {
      values.push(JSON.parse(localStorage.getItem(keys[i])));
    }
    return values;
  });

  /* For the card that has been clicked */
  const [clickedRelatedData, setClickedRelatedData] = useState([]);
  /* Check if modal has beem clicked */
  const [modalClicked, setModalClicked] = useState(false);
  const toggleModal = useCallback(() => setModalClicked((prevState) => !prevState), []);

  const store = {
    relatedData,
    setRelatedData,
    productData,
    setProductData,
    localStorageOutfits,
    setLocalStorageOutfits,
    modalClicked,
    setModalClicked,
    clickedRelatedData,
    setClickedRelatedData,
    toggleModal,
  };

  return (
    <RelatedProductsContext.Provider value={store}>
      {children}
    </RelatedProductsContext.Provider>
  );
}

export default RelatedProductsContext;

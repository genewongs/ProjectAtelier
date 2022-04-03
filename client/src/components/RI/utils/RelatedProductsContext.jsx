/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useState, createContext } from 'react';

const RelatedProductsContext = createContext();

export function RelatedProducts({ children }) {
  const [relatedData, setRelatedData] = useState([]);
  const [modalClicked, setModalClicked] = useState(false);
  const id = 65631;

  const store = {
    relatedData,
    setRelatedData,
    modalClicked,
    setModalClicked,
    id,
  };

  return (
    <RelatedProductsContext.Provider value={store}>
      {children}
    </RelatedProductsContext.Provider>
  );
}

export default RelatedProductsContext;

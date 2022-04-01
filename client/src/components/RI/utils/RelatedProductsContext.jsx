import React, { useState, createContext } from 'react';

const RelatedProductsContext = createContext();

export function RelatedProducts({ children }) {
  const [relatedData, setRelatedData] = useState([]);
  const id = 65631;

  const store = {
    relatedData,
    setRelatedData,
    id,
  };

  return (
    <RelatedProductsContext.Provider value={store}>
      {children}
    </RelatedProductsContext.Provider>
  );
}

export default RelatedProductsContext;

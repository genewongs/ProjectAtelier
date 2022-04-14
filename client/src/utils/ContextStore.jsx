import React, { createContext, useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';

const ContextStoreContext = createContext();

export function ContextStore({ children }) {
  const [product, setProduct] = useState(null);
  const [productName, setProductName] = useState('');
  const [style, setStyle] = useState(null);

  const { productId } = useParams();
  const id = Number(productId) || 65638;

  const store = useMemo(() => ({
    product,
    setProduct,
    productName,
    setProductName,
    style,
    setStyle,
    id,
    productId,
  }), [productName, style]);

  return (
    <ContextStoreContext.Provider value={store}>
      {children}
    </ContextStoreContext.Provider>
  );
}

export default ContextStoreContext;

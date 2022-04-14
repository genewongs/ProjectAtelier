import React, {
  createContext, useState, useMemo, useEffect,
} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ContextStoreContext = createContext();

export function ContextStore({ children }) {
  const [productInfo, setProduct] = useState([]);
  const [productName, setProductName] = useState('');

  const { productId } = useParams();
  const id = Number(productId) || 65640;

  const store = useMemo(() => ({
    productInfo,
    setProduct,
    productName,
  }), [productInfo, productName]);

  function getProduct() {
    axios.get('/api', { params: { path: `products/${id}` } })
      .then((response) => {
        setProduct(response.data);
        setProductName(response.data.name);
      })
      .catch((err) => new Error(err));
  }

  useEffect(() => {
    getProduct();
  }, [productId]);

  return (
    <ContextStoreContext.Provider value={store}>
      {children}
    </ContextStoreContext.Provider>
  );
}

export default ContextStoreContext;

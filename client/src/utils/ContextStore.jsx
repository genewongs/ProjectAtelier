import React, {
  createContext, useState, useMemo, useEffect,
} from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ContextStoreContext = createContext();

export function ContextStore({ children }) {
  const [product, setProduct] = useState([]);
  const [productName, setProductName] = useState('');

  const { productId } = useParams();
  const id = Number(productId) || 65640;

  const store = useMemo(() => ({
    product,
    setProduct,
    productName,
  }), [product, productName]);

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
  }, []);

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

ContextStore.propTypes = {
  children: PropTypes.element.isRequired,
};

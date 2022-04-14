import React, {
  createContext, useState, useMemo, useEffect,
} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ContextStoreContext = createContext();

export function ContextStore({ children }) {
  const [product, setProduct] = useState(null);
  const [productName, setProductName] = useState('');
  const [style, setStyle] = useState(null);
  const [currentStyle, setCurrentStyle] = useState(null);

  const { productId } = useParams();
  const id = Number(productId) || 65640;

  const store = useMemo(() => ({
    product,
    setProduct,
    productName,
    setProductName,
    style,
    setStyle,
    id,
    productId,
    setCurrentStyle,
    currentStyle,
  }), [productName, style]);

  // function getProduct() {
  //   axios.get('/api', { params: { path: `products/${id}` } })
  //     .then((response) => {
  //       setProduct(response.data);
  //       setProductName(response.data.name);
  //     })
  //     .catch((err) => new Error(err));
  // }

  // function getStyle() {
  //   axios.get('/api', { params: { path: `products/${id}/styles` } })
  //     .then((response) => {
  //       setStyle(response.data);
  //     })
  //     .catch((err) => new Error(err));
  // }

  // async function getProductInfo() {
  //   const productIDInfo = await axios.get('/api/product', { params: { id } });
  //   const productIDStyles = await axios.get('/api/product/styles', { params: { id } });

  //   const lazyMerge = { ...productIDInfo.data, ...productIDStyles.data };

  //   setProductData(lazyMerge);
  // }

  // useEffect(() => {
  //   getProduct();
  //   getStyle();
  // }, []);

  // useEffect(() => {
  //   getProduct();
  //   getStyle();
  // }, [productId, style]);

  return (
    <ContextStoreContext.Provider value={store}>
      {children}
    </ContextStoreContext.Provider>
  );
}

export default ContextStoreContext;

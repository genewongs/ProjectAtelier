import  React, { useEffect, useContext } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import GlobalStyle from './globalStyles';

import Overview from './components/Overview/Overview';
import RI from './components/RI/RI';
import QA from './components/QA/QA';
import RR from './components/RR/RR';
import ContextStoreContext, { ContextStore } from './utils/ContextStore';

function RoutedApp() {
  return (
    <Router>
      <Routes>
        <Route path="/:productId" element={<App />} />
        <Route path="/" element={<App />} />
      </Routes>
    </Router>
  );
}

function App() {
  return (
    <div className="app-container">
      <ContextStore>
        <DataGen />
        <GlobalStyle />
        <Overview />
        <RI />
        <QA />
        <RR />
      </ContextStore>
    </div>
  );
}

function DataGen() {
  const { setProductName, setStyle, setProduct, productId, id, style } = useContext(ContextStoreContext);

  function getProduct() {
    axios.get('/api', { params: { path: `products/${id}` } })
      .then((response) => {
        setProduct(response.data);
        setProductName(response.data.name);
      })
      .catch((err) => new Error(err));
  }

  function getStyle() {
    axios.get('/api', { params: { path: `products/${id}/styles` } })
      .then((response) => {
        setStyle(response.data);
      })
      .catch((err) => new Error(err));
  }

  // async function getProductInfo() {
  //   const productIDInfo = await axios.get('/api/product', { params: { productId } });
  //   const productIDStyles = await axios.get('/api/product/styles', { params: { productId } });

  //   const lazyMerge = { ...productIDInfo.data, ...productIDStyles.data };

  //   setProductData(lazyMerge);
  // }

  useEffect(() => {
    getProduct();
    getStyle();
  }, []);

  useEffect(() => {
    getProduct();
    getStyle();
  }, [id]);

  return (<></>);
}

ReactDOM.render(<RoutedApp />, document.getElementById('app'));

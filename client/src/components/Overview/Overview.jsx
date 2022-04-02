import React, { useState, useEffect } from 'react';
import sampleStyles from './components/sampleStyles.js';
import sampleProduct from './components/sampleProduct.js';
import StyleSelector from './components/StyleSelector.jsx';
import ProdDescription from './components/ProdDescription.jsx';
import { Flex } from './components/styles/OverviewContainerStyled.js';
import { LordContainer } from './components/styles/LordContainerStyled.js';
import { RightFlex } from './components/styles/ProductInfoStyled.js';
import Gallery from './components/Gallery.jsx';
import { LogoStyle } from './components/styles/LogoStyled.js';
import AddToCart from './components/AddToCart.jsx';

const axios = require('axios');

export default function Overview() {
  const [style, setStyle] = useState(null);
  const [product, setProduct] = useState(null);
  const [currentStyle, setCurrentStyle] = useState(null);
  const [index, setIndex] = useState(0);
  const [displayStyle, setDisplayStyle] = useState([]);

  useEffect(() => {
    fetchStyles('65631')
      .then((res) => {
        if (res.status === 200) {
          setStyle(res.data.results);
          setCurrentStyle(res.data.results[0]);
        }
      })
      .catch((res) => res.sendStatus(500));
    fetchProduct('65631')
      .then((res) => {
        if (res.status === 200) {
          setProduct(res.data);
        }
      })
      .catch((res) => res.sendStatus(500));
  }, []);

  function fetchStyles(id) {
    return axios.get('api', { params: { path: `products/${id}/styles` } });
  }

  function fetchProduct(id) {
    return axios.get('api', { params: { path: `products/${id}` } });
  }

  function changeGallery(object) {
    setCurrentStyle(object);
  }

  function changeStyle(object, index) {
    setIndex(index);
  }

  return (
    <LordContainer>
      <LogoStyle>
        <img src="./dist/images/BACKLASH_LOGO.png" />
      </LogoStyle>
      <Flex>
        {currentStyle && <Gallery style={currentStyle} />}
        <RightFlex>
          {style && product && (
          <StyleSelector
            styles={style}
            index={index}
            product={product}
            fetchStyles={fetchStyles}
            changeGallery={changeGallery}
            changeStyle={changeStyle}
          />
          )}
        </RightFlex>
      </Flex>
      {product && <ProdDescription product={product} />}
    </LordContainer>
  );
}

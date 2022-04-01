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
  const [displayStyle, setDisplayStyle] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    fetchStyles('65631')
      .then((res) => {
        if (res.status === 200) {
          setStyle(res.data.results);
          setLoaded(true);
        }
      })
      .catch((res) => res.sendStatus(500));
  }, []);

  function fetchStyles(id) {
    return axios.get('api', { params: { path: `products/${id}/styles` } });
  }

  function changeStyle(object) {
    setStyle(object);
  }

  return (
    <LordContainer>
      <LogoStyle>
        <img src="./dist/images/BACKLASH_LOGO.png" />
      </LogoStyle>
      <Flex>
        {style && <Gallery styles={style} />}
        <RightFlex>
          {style && (
          <StyleSelector
            styles={style}
            product={sampleProduct}
            fetchStyles={fetchStyles}
          />
          )}
        </RightFlex>
      </Flex>
      <ProdDescription product={sampleProduct} />
    </LordContainer>
  );
}

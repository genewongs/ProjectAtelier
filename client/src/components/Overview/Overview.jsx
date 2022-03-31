import React from 'react';
import sampleStyles from './components/sampleStyles.js';
import sampleProduct from './components/sampleProduct.js';
import StyleSelector from './components/StyleSelector.jsx';
import ProdDescription from './components/ProdDescription.jsx';
import { Flex } from './components/styles/OverviewContainerStyled.js';
import { LordContainer } from './components/styles/LordContainerStyled.js';
import { RightFlex } from './components/styles/ProductInfoStyled.js';

import Gallery from './components/Gallery.jsx';

export default function Overview() {
  return (
    <LordContainer>
      <Flex>
        <Gallery styles={sampleStyles} />
        <RightFlex>
          <StyleSelector styles={sampleStyles} product={sampleProduct} />
        </RightFlex>
      </Flex>
      <ProdDescription product={sampleProduct} />
    </LordContainer>
  );
}

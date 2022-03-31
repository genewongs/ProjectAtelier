import React from 'react';
import sampleStyles from './components/sampleStyles.js';
import StyleSelector from './components/StyleSelector.jsx';
import { Flex } from './components/styles/OverviewContainerStyled.js';
import { RightFlex } from './components/styles/ProductInfoStyled.js';
import Gallery from './components/Gallery.jsx';

export default function Overview() {
  return (
    <Flex>
      <Gallery styles={sampleStyles} />
      <RightFlex>
        <StyleSelector styles={sampleStyles} />
      </RightFlex>
    </Flex>
  );
}

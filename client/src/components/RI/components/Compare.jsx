import React, { useContext } from 'react';
import { ModalWrapper, LeftFeatures } from '../styles/ModalStyled.styled';
import RelatedProductsContext from '../utils/RelatedProductsContext';

export default function Compare() {
  const myContext = useContext(RelatedProductsContext);
  return (
    <div>
      <ModalWrapper>
        Comparing
        <Left>
          {
            myContext.clickedRelatedData.features.map((currentFeature) => (
              <p>
                {currentFeature.feature}
                :
                {currentFeature.value || 'N/A'}
              </p>
            ))
          }
        </Left>
      </ModalWrapper>
    </div>
  );
}

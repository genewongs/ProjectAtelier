import React from 'react';
import {
  ModalWrapper, LeftWrapper, LeftFeat, RightWrapper, RightFeat, Title,
} from '../styles/ModalStyled.styled';
import Modal from './Modal';

export default function Compare({
  clickedRelatedData, productData, toggleModal, modalClicked,
}) {
  return (
    <div>
      <ModalWrapper>
        <Modal className="show-compare" show={modalClicked} toggleModal={toggleModal}>
          <div className="compare-container">
            <Title>Comparing</Title>
            <LeftWrapper>
              {clickedRelatedData.name}
              {
                clickedRelatedData.features.map((currentFeature) => (
                  <LeftFeat>
                    {currentFeature.feature}
                    :
                    {currentFeature.value || 'N/A'}
                  </LeftFeat>
                ))
              }
            </LeftWrapper>
            <RightWrapper>
              {productData.name}
              {
                productData.features.map((currentFeature) => (
                  <RightFeat>
                    {currentFeature.feature}
                    :
                    {currentFeature.value || 'N/A'}
                  </RightFeat>
                ))
              }
            </RightWrapper>
          </div>
        </Modal>
      </ModalWrapper>
    </div>
  );
}

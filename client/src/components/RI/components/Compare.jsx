import React, { useEffect } from 'react';
import {
  ModalWrapper,
  Title,
  BothWrapper,
  LeftWrapper,
  LeftName,
  LeftFeat,
  RightWrapper,
  RightName,
  RightFeat,
} from '../styles/ModalStyled.styled';
import Modal from './Modal';

export default function Compare({
  clickedRelatedData, productData, toggleModal, modalClicked,
}) {
  function getBothFeatures() {
    clickedRelatedData.features.map((currentClickedFeatures) => {
      console.log(currentClickedFeatures);
      productData.features.map((currentProductFeatures) => {
        console.log(currentProductFeatures);
      });
    });
  }

  useEffect(() => {
    getBothFeatures();
  }, []);

  return (
    <div>
      <ModalWrapper>
        <Modal className="show-compare" show={modalClicked} toggleModal={toggleModal}>
          <div className="compare-container">
            <Title>Comparing</Title>
            <BothWrapper>
              <LeftWrapper>
                <LeftName>
                  {clickedRelatedData.name}
                </LeftName>
                {clickedRelatedData.features.map((currentFeature) => (
                  <LeftFeat>
                    {currentFeature.feature}
                    :
                    {currentFeature.value || 'N/A'}
                  </LeftFeat>
                ))}
              </LeftWrapper>
              <RightWrapper>
                <RightName>
                  {productData.name}
                </RightName>
                {productData.features.map((currentFeature) => (
                  <RightFeat>
                    {currentFeature.feature}
                    :
                    {currentFeature.value || 'N/A'}
                  </RightFeat>
                ))}
              </RightWrapper>
            </BothWrapper>
          </div>
        </Modal>
      </ModalWrapper>
    </div>
  );
}

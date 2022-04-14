import React, { useState, useEffect } from 'react';
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
  const [combinedInfo, setCombinedInfo] = useState([]);
  function getCombinedInfo() {
    clickedRelatedData.features.map((currentFeature) => {
      currentFeature.isLeft = true;
    });
    productData.features.map((currentFeature) => {
      currentFeature.isRight = true;
    });
    let set = new Set();

    const merge = [...clickedRelatedData.features, ...productData.features];
    console.log(merge);

    setCombinedInfo(merge);
  }

  useEffect(() => {
    getCombinedInfo();
  }, []);

  return (
    <div>
      <ModalWrapper>
        <Modal className="show-compare" show={modalClicked} toggleModal={toggleModal}>
          <div className="compare-container">
            <Title>Comparing</Title>
            <span>
              { clickedRelatedData.name }
              { productData.name }
            </span>
            <BothWrapper>
              { combinedInfo.length === 0 ? '' : combinedInfo.map((currentFeature) => (
                <div className="feature">{currentFeature.feature}</div>
              )) }
            </BothWrapper>
          </div>
        </Modal>
      </ModalWrapper>
    </div>
  );
}

// {/* <LeftWrapper>
//   <LeftName>
//     {clickedRelatedData.name}
//   </LeftName>
//   {clickedRelatedData.features.map((currentFeature) => (
//     <LeftFeat>
//       {currentFeature.feature}
//       :
//       {currentFeature.value || 'N/A'}
//     </LeftFeat>
//   ))}
// </LeftWrapper>
// <RightWrapper>
//   <RightName>
//     {productData.name}
//   </RightName>
//   {productData.features.map((currentFeature) => (
//     <RightFeat>
//       {currentFeature.feature}
//       :
//       {currentFeature.value || 'N/A'}
//     </RightFeat>
//   ))}
// </RightWrapper> */}

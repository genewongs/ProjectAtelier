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

    const merge = [...clickedRelatedData.features, ...productData.features];

    const newCombined = [];
    merge.map((currentIndex) => {
      const newObj = {};
      newObj.feature = `${currentIndex.feature} ${currentIndex.value}`;
      if (currentIndex.isLeft) {
        newObj.isLeft = currentIndex.isLeft;
      } else {
        newObj.isRight = currentIndex.isRight;
      }
      newCombined.push(newObj);
    });

    /*
      0: {feature: 'Fabric 99% Cotton 1% Elastic', isLeft: true}
      1: {feature: 'Cut Loose', isLeft: true}
      2: {feature: 'Fabric 99% Cotton 1% Elastic', isRight: true}
      3: {feature: 'Cut Loose', isRight: true}

      0: {feature: 'Fabric 99% Cotton 1% Elastic', isLeft: true, isRight: true}
      1: {feature: 'Cut Loose', isLeft: true, isRight: true}
    */

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
              {/* { combinedInfo.length === 0 ? '' : combinedInfo.map((currentFeature) => (
                <div className="feature">{currentFeature.feature}</div>
              )) } */}
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


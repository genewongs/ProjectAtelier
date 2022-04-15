import React, { useState, useEffect } from 'react';
import { ModalWrapper, Title, BothWrapper } from '../styles/ModalStyled.styled';
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

    const compress = (arr) => {
      const res = arr.reduce((compressedObj, obj) => {
        const { feature } = obj;
        compressedObj[feature] = compressedObj[feature]
          ? { ...compressedObj[feature], ...obj }
          : obj;
        return compressedObj;
      }, {});
      return Object.values(res);
    };

    const newMerge = compress(newCombined);
    setCombinedInfo(newMerge);
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
            { clickedRelatedData.name }
            {' '}
            { productData.name }
            <BothWrapper>
              { combinedInfo.length === 0 ? '' : combinedInfo.map((currentFeature) => (
                <span className="feature-span">
                  {currentFeature.isLeft && !currentFeature.isRight ? (
                    <span>
                      <span className="check-left">&#10003;</span>
                      {' '}
                      {currentFeature.feature}
                      {' '}
                    </span>
                  ) : ''}
                  {!currentFeature.isLeft && currentFeature.isRight ? (
                    <span>
                      {currentFeature.feature}
                      {' '}
                      <span className="check-right">&#10003;</span>
                    </span>
                  ) : ''}
                  {currentFeature.isLeft && currentFeature.isRight ? (
                    <span>
                      <span className="check-left">&#10003;</span>
                      {' '}
                      {currentFeature.feature}
                      {' '}
                      <span className="check-right">&#10003;</span>
                    </span>
                  ) : ''}
                </span>
              )) }
            </BothWrapper>
          </div>
        </Modal>
      </ModalWrapper>
    </div>
  );
}

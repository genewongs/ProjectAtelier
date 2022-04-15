/* eslint-disable no-param-reassign */
import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import RelatedProductsContext from '../utils/RelatedProductsContext';
import RelatedProductsCarousel from './RelatedProductsCarousel';
import YourOutfitCarousel from './YourOutfitCarousel';
import Compare from './Compare';
import { PlusCircleIcon } from '@heroicons/react/outline';
import { RelatedProductsStyled } from '../styles/RelatedProductsStyled.styled';
import { YourOutfitStyled, OutfitWrapper } from '../styles/YourOutfitStyled.styled';

import ContextStoreContext from '../../../utils/ContextStore';

export default function Container() {
  const {
    toggleModal,
    localStorageOutfits,
    setLocalStorageOutfits,
    modalClicked,
    clickedRelatedData,
    relatedData,
    setRelatedData,
    productData,
    setProductData,
  } = useContext(RelatedProductsContext);

  const { id, product, style } = useContext(ContextStoreContext);

  async function getProductInfo() {
    const lazyMerge = { ...product, ...style };
    setProductData(lazyMerge);
  }

  async function getRelatedInfo() {
    const relatedInfo = await axios.get('/api/products/related', { params: { id } });
    const relatedStyles = await axios.get('/api/products/related/styles', { params: { id } });

    /* Iterate through the related id styles */
    const relatedStylesInfo = relatedStyles.data.map((currentStyle) => {
      /* Iterate through the related id information */
      relatedInfo.data.forEach((currentItem) => {
        /* Check if id's are the same */
        if (parseInt(currentStyle.product_id, 10) === currentItem.id) {
          currentStyle.name = currentItem.name;
          currentStyle.category = currentItem.category;
          currentStyle.features = currentItem.features;
          currentStyle.default_price = currentItem.default_price;
        }
      });
      return currentStyle;
    });
    setRelatedData(relatedStylesInfo);
  }

  function saveProductLocally() {
    localStorage.setItem(productData.id, JSON.stringify(productData));
    if (!localStorageOutfits.some((outfit) => outfit.id === productData.id)) {
      setLocalStorageOutfits([...localStorageOutfits, productData]);
    }
  }

  useEffect(() => {
    (async () => {
      await getRelatedInfo();
    })();
  }, []);

  useEffect(() => {
    getProductInfo();
  }, [product]);

  return (
    <>
      <RelatedProductsStyled>
        <RelatedProductsCarousel
          relatedData={relatedData}
        />
        { modalClicked && (
        <Compare
          productData={productData}
          clickedRelatedData={clickedRelatedData}
          toggleModal={toggleModal}
          modalClicked={modalClicked}
        />
        )}
      </RelatedProductsStyled>
      <YourOutfitStyled>
        <OutfitWrapper>
          <div className="add-curr-product">
            Add Current Product
          </div>
          {/* <PlusCircleIcon className="plus-icon" onClick={saveProductLocally}/> */}
        </OutfitWrapper>
        <YourOutfitCarousel
          productData={productData}
          localStorageOutfits={localStorageOutfits}
          setLocalStorageOutfits={setLocalStorageOutfits}
        />
      </YourOutfitStyled>
    </>
  );
}

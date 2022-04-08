/* eslint-disable max-len */
/* eslint-disable react/jsx-no-bind */
import React from 'react';
import YourOutfitEntry from './YourOutfitEntry';
import { AddOutfitWrapper, AddOutfitText } from '../styles/YourOutfitStyled.styled';

export default function YourOutfitList({
  productData, localStorageOutfits, setLocalStorageOutfits, id,
}) {
  function saveProductLocally() {
    localStorage.setItem(productData.id, JSON.stringify(productData));
    if (!localStorageOutfits.some((outfit) => outfit.id !== id)) {
      setLocalStorageOutfits([...localStorageOutfits, productData]);
    }
  }
  return (
    <>
      <AddOutfitWrapper onClick={saveProductLocally}>
        <AddOutfitText>
          Add Current Product
        </AddOutfitText>
      </AddOutfitWrapper>
      {
        localStorageOutfits.map((card, index) => (
          <YourOutfitEntry
            singleLocalOutfit={card}
            localStorageOutfits={localStorageOutfits}
            setLocalStorageOutfits={setLocalStorageOutfits}
            key={index}
          />
        ))
      }
    </>
  );
}

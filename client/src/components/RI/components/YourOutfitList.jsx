/* eslint-disable max-len */
/* eslint-disable react/jsx-no-bind */
import React from 'react';
import YourOutfitEntry from './YourOutfitEntry';
import { OutfitWrapper, OutfitText } from '../styles/YourOutfitStyled.styled';

export default function YourOutfitList({
  productData, localStorageOutfits, setLocalStorageOutfits,
}) {
  function saveProductLocally() {
    localStorage.setItem(productData.id, JSON.stringify(productData));
    if (!localStorageOutfits.some((outfit) => outfit.id === productData.id)) {
      setLocalStorageOutfits([...localStorageOutfits, productData]);
    }
  }

  return (
    <>
      <OutfitWrapper onClick={saveProductLocally}>
        <OutfitText>
          Add Current Product
        </OutfitText>
      </OutfitWrapper>
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

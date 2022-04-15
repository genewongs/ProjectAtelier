/* eslint-disable react/no-array-index-key */
import React from 'react';
import YourOutfitEntry from './YourOutfitEntry';

export default function YourOutfitList({ localStorageOutfits, setLocalStorageOutfits }) {
  return (
    <>
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

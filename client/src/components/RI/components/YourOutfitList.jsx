/* eslint-disable max-len */
/* eslint-disable react/jsx-no-bind */
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

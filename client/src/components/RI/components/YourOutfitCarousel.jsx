/* eslint-disable react/button-has-type */
/* eslint-disable max-len */
/* eslint-disable react/jsx-no-bind */
import React, { useState } from 'react';
import YourOutfitList from './YourOutfitList';

export default function YourOutfitCarousel({ localStorageOutfits, setLocalStorageOutfits }) {
  const [startingIndex, setStartingIndex] = useState(0);
  const [endingIndex, setEndingIndex] = useState(4);

  function updateLeft(currStart, currEnd) {
    if (currStart > 0) {
      setStartingIndex(currStart - 1);
      setEndingIndex(currEnd - 1);
    }
  }

  function updateRight(currStart, currEnd) {
    if (currEnd < localStorageOutfits.length) {
      setStartingIndex(currStart + 1);
      setEndingIndex(currEnd + 1);
    }
  }

  return (
    <>
      { (localStorageOutfits.length > 4) && (
      <button
        onClick={() => { updateLeft(startingIndex, endingIndex); }}
      >
        &larr;
      </button>
      )}
      <YourOutfitList localStorageOutfits={localStorageOutfits.slice(startingIndex, endingIndex)} setLocalStorageOutfits={setLocalStorageOutfits} />
      { (localStorageOutfits.length > 4) && (
      <button
        onClick={() => { updateRight(startingIndex, endingIndex); }}
      >
        &rarr;
      </button>
      )}
    </>
  );
}

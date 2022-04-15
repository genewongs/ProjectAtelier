import React, { useState } from 'react';
import RelatedProductsList from './RelatedProductsList';

export default function RelatedProductsCarousel({ relatedData }) {
  const [startingIndex, setStartingIndex] = useState(0);
  const [endingIndex, setEndingIndex] = useState(4);

  function updateLeft(currStart, currEnd) {
    if (currStart > 0) {
      setStartingIndex(currStart - 1);
      setEndingIndex(currEnd - 1);
    }
  }

  function updateRight(currStart, currEnd) {
    if (currEnd < relatedData.length) {
      setStartingIndex(currStart + 1);
      setEndingIndex(currEnd + 1);
    }
  }

  return (
    <>
      { relatedData.length > 4 && (
      <button
        type="button"
        className="btn"
        onClick={() => { updateLeft(startingIndex, endingIndex); }}
      >
        &larr;
      </button>
      )}
      <RelatedProductsList relatedData={relatedData.slice(startingIndex, endingIndex)} />
      { relatedData.length > 4 && (
      <button
        type="button"
        className="btn"
        onClick={() => { updateRight(startingIndex, endingIndex); }}
      >
        &rarr;
      </button>
      )}
    </>
  );
}

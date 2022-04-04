import React, { createContext, useState } from 'react';

const ReviewStoreContext = createContext();

export function ReviewStore({ children }) {
  const [reviews, setReviewData] = useState([]);
  const [metaData, setMetaData] = useState([]);
  // const id = 65640; // infinity stone
  const id = 65631; // first item

  const store = {
    reviews,
    setReviewData,
    metaData,
    setMetaData,
    id,
  };

  return (
    <ReviewStoreContext.Provider value={store}>
      {children}
    </ReviewStoreContext.Provider>
  );
}

export default ReviewStoreContext;

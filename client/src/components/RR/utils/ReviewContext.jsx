import React, { createContext, useState, useMemo } from 'react';

const ReviewStoreContext = createContext();

export function ReviewStore({ children }) {
  const [reviews, setReviewData] = useState([]);
  const [metaData, setMetaData] = useState([]);
  const id = 65631;

  const store = useMemo(() => ({
    reviews, setReviewData, metaData, setMetaData, id,
  }), [reviews, metaData]);

  return (
    <ReviewStoreContext.Provider value={store}>
      {children}
    </ReviewStoreContext.Provider>
  );
}

export default ReviewStoreContext;

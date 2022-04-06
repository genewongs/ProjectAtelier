import React, { createContext, useState, useMemo } from 'react';

const MockContext = createContext();

export function MockStore({ children }) {
  const [reviews, setReviewData] = useState([]);
  const [metaData, setMetaData] = useState([]);
  const id = 65641;

  // const store = {
  //   reviews,
  //   setReviewData,
  //   metaData,
  //   setMetaData,
  //   id,
  // };

  const store = useMemo(() => ({
    reviews, setReviewData, metaData, setMetaData, id,
  }), [reviews, metaData]);

  return (
    <MockContext.Provider value={store}>
      {children}
    </MockContext.Provider>
  );
}

export default MockContext;

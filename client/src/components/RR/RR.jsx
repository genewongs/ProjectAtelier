import React, { useState } from 'react';
import Container from './components/Container.jsx';
import ReviewContext from './utils/ReviewContext.jsx';

export default function RR() {
  const [reviews, setReviewData] = useState([]);
  return (
    <ReviewContext.Provider value={{ reviews, setReviewData }}>
      <Container />
    </ReviewContext.Provider>
  );
}

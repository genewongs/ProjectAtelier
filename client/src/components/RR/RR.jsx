import React, { useState, useRef } from 'react';
import Container from './components/Container.jsx';
import ReviewContext from './utils/ReviewContext.jsx';

export default function RR() {
  const [reviews, setReviewData] = useState([]);
  const id = 65640;
  return (
    <ReviewContext.Provider value={{ reviews, setReviewData, id }}>
      <Container />
    </ReviewContext.Provider>
  );
}

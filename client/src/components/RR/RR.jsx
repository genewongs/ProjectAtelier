import React from 'react';
import Container from './components/Container';
import { ReviewStore } from './utils/ReviewContext';

export default function RR() {
  return (
    <ReviewStore>
      <Container />
    </ReviewStore>
  );
}

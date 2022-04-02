import React, { useState, useRef } from 'react';
import Container from './components/Container.jsx';
import { ReviewStore } from './utils/ReviewContext.jsx';

export default function RR() {
  return (
    <ReviewStore>
      <Container />
    </ReviewStore>
  );
}

import React from 'react';
import sampleStyles from './components/sampleStyles.js';
import StyleSelector from './components/StyleSelector.jsx';

export default function Overview() {
  return (
    <div>
      <StyleSelector styles={sampleStyles} />
    </div>
  );
}

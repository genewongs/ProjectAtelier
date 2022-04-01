import React from 'react';
import { ProdDescriptionStyled } from './styles/ProdDescriptionStyled.js';

function ProdDescription({ product }) {
  return (
    <ProdDescriptionStyled>
      <h2>DESCRIPTION:</h2>
      <p>{product.description}</p>
    </ProdDescriptionStyled>
  );
}

export default ProdDescription;

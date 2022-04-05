import React from 'react';
import { ProdDescriptionStyled } from './styles/ProdDescriptionStyled';

function ProdDescription({ product }) {
  return (
    <ProdDescriptionStyled>
      <h2><i>{product.slogan}</i></h2>
      <p>{product.description}</p>
    </ProdDescriptionStyled>
  );
}

export default ProdDescription;

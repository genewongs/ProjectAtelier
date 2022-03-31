import React from 'react';
import sampleStyles from './sampleStyles.js';
import styled from 'styled-components';
import { SelectorContainer, CircleContainer } from './styles/StyledStyleSelector.js';

function StyleSelector({ styles }) {
  return(
    <SelectorContainer>
      <div>
        <span>Style > </span> Selected Style
      </div> <br></br>

      <CircleContainer>
        {sampleStyles.results.map((product) => {
          return <img key={product.style_id} src={product.photos[0].thumbnail_url} />
        })}
      </CircleContainer>
    </SelectorContainer>
  )
}

export default StyleSelector;
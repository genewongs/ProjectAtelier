import React from 'react';
import sampleStyles from './sampleStyles.js';
import styled from 'styled-components';

const Circle = styled.div`
  border: 1px solid red;
  display: flex;
  flex-direction: row;
  width: 48em;
`

const CircleContainer = styled.div`
  border: 1px solid darkgreen;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;

  > img {
    height: 50px;
    width: 50px;
    border-radius: 50%;
    border: 1px solid black;

    &:hover {
    cursor: pointer;
    transform: scale(0.98);
    }
  }
`

function StyleSelector({ styles }) {
  return(
    <Circle>
      <div>
        <span>Style > </span> Selected Style
      </div> <br></br>

      <CircleContainer>
        {sampleStyles.results.map((product) => {
          return <img key={product.style_id} src={product.photos[0].thumbnail_url} />
        })}
      </CircleContainer>
    </Circle>
  )
}

export default StyleSelector;
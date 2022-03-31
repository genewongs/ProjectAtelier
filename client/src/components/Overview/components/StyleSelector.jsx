import React from 'react';
import sampleStyles from './sampleStyles.js';
import styled from 'styled-components';
import { SelectorContainer, CircleContainer } from './styles/StyledStyleSelector.js';
import { ProductInfo } from './styles/ProductInfoStyled.js';
import { SelectSize, SelectQuantity, AddCartButton } from './styles/SelectSizeStyled.js';

function StyleSelector({ styles }) {
  console.log(styles.results[0])
  return(
    <SelectorContainer>

      <ProductInfo>
        <h2> {styles.results[0].name} </h2>
        <span> $ {styles.results[0].original_price} </span>
        <br></br>
      </ProductInfo>

      <div>
        <span>STYLE > </span> SELECTED STYLE
      </div> <br></br>
      <CircleContainer>
        {sampleStyles.results.map((product) => {
          return <img key={product.style_id} src={product.photos[0].thumbnail_url} />
        })}
      </CircleContainer>

      <SelectSize>
        {Object.values(styles.results[0].skus).map((item, id) => {
          return (
            <button key={id}> {item.size} </button>
          )
        })}
      </SelectSize>

      <SelectQuantity>
        <select name="hello">
        <option value="" disabled selected>Select Quantity</option>
          {Object.values(styles.results[0].skus).map((item, id) => {
            return <option value={item.size}> {item.quantity} </option>
          })}
        </select>
      </SelectQuantity>

      <AddCartButton>
        <button>ADD TO CART</button>
      </AddCartButton>
    </SelectorContainer>
  )
}

export default StyleSelector;
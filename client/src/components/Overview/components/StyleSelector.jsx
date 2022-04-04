import React, { useState, useEffect } from 'react';
import sampleStyles from './sampleStyles.js';
import styled from 'styled-components';
import Socials from './Socials.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { SelectorContainer, ImageContainer, BadgeStyled } from './styles/StyledStyleSelector.js';
import { ProductInfo } from './styles/ProductInfoStyled.js';
import { SelectSize, SelectQuantity, AddCartButton } from './styles/SelectSizeStyled.js';

function StyleSelector({ styles, product, index, changeGallery, changeStyle }) {
  const [currentSku, setSku] = useState({});
  const [quantityArr, setQuantity] = useState([]);
  const [selectedSize, setSelectedSize] = useState(0);
  const [selectedStyle, setSelectedStyle] = useState(null);
  const [selectIndex, setSelectIndex] = useState(0);

  let prodSkus = styles[index].skus;

  useEffect(() => {
    generateOptions(currentSku.quantity)
    setSelectedStyle(Object.keys(styles[0].skus)[0])
  }, [currentSku]);

  function generateOptions(num) {
    let html = [];
    for(let i = 1; i <= num; i++) {
      html.push(i);
    }
    setQuantity(html);
  }

  return(
    <SelectorContainer>
      <ProductInfo>
        <i>CATEGORY: {product.category.toUpperCase()} </i>
        <h2> {product.name} </h2>
        <span style={{color: styles[index].sale_price ? 'red' : 'black' }}>
          ${styles[index].sale_price ? `${styles[index].sale_price}` : styles[index].original_price}
        </span>

        <span style={{textDecoration: 'line-through', display: 'block'}}>
            {styles[index].sale_price ? `$${styles[index].original_price}` : ''}
        </span>
      </ProductInfo>

      <div>
        <span style={{fontWeight: 'bold'}}>STYLE > </span> {styles[index].name}
      </div> <br></br>
      <ImageContainer>
        {/* <BadgeStyled>
          <FontAwesomeIcon icon={faCheck} />
        </BadgeStyled> */}
        {styles.map((product, index) => {
          return <img
            className={index === selectIndex ? 'selectedSize' : ''}
            key={product.style_id}
            src={product.photos[0].thumbnail_url}
            onClick={() => {
              changeGallery(product);
              // setSelectedStyle(product.style_id);
              setSelectIndex(index);
              changeStyle(product, index);
            }
          }/>
        })}
      </ImageContainer>

      <SelectSize>
        {Object.keys(prodSkus).map((sku, id) => {
          return (
            <button className={sku === selectedSize ? 'selected' : ''} key={id} onClick={(e) => {
              setSelectedSize(sku);
              setSku(prodSkus[sku]);
            }
          }> {prodSkus[sku].size} </button>
          )
        })}
      </SelectSize>

      <SelectQuantity>
        <select name="selectQuantity">
        <option value="" disabled selected>Select Quantity</option>
          {quantityArr.map((line, index) => {
            if(line <= 15) {
              return <option key={index} value="">{line}</option>
            }
          })}
          }
        </select>
      </SelectQuantity>

      <AddCartButton>
        <button>ADD TO CART</button>
      </AddCartButton>
    </SelectorContainer>
  )
}

export default StyleSelector;

//when i click a style button
//the goal is to apply a style to that circle

//
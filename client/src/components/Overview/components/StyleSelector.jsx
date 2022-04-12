import React, { useState, useEffect } from 'react';
import sampleStyles from './sampleStyles';
import styled from 'styled-components';
import Socials from './Socials';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { SelectorContainer, ImageContainer, BadgeStyled } from './styles/StyledStyleSelector';
import { ProductInfo } from './styles/ProductInfoStyled';
import { SelectSize, SelectQuantity, AddCartButton, ErrorMsgStyled } from './styles/SelectSizeStyled';
import { useNavigate, useParams } from 'react-router-dom';

function StyleSelector({ styles, product, index, changeGallery, changeStyle, addItem }) {
  const [currentSku, setSku] = useState({});
  const [quantityNum, setQuantityNum] = useState(0);
  const [quantity, setQuantity] = useState('Select Quantity');
  const [selectedSize, setSelectedSize] = useState(0);
  const [selectedStyle, setSelectedStyle] = useState(null);
  const [selectIndex, setSelectIndex] = useState(0);
  const [error, setError] = useState(false);
  const [hasBeenSelected, setHasBeenSelected] = useState(false);

  let navigate = useNavigate();
  let { styleId } = useParams();
  let prodSkus = styles[index].skus;


  useEffect(() => {
    setQuantityNum(currentSku.quantity || 0);
    setSelectedStyle(Object.keys(styles[0].skus)[0])
  }, [currentSku, selectedSize]);

  return(
    <SelectorContainer>
      <ProductInfo>
        <span className="category"> <i>CATEGORY: {product.category.toUpperCase()} </i> </span>
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
        {styles.map((product, index) => {
          return <img
            className={index === selectIndex ? 'selectedSize' : ''}
            key={product.style_id}
            src={product.photos[0].thumbnail_url || '/dist/images/NPA.jpeg'}
            onClick={() => {
              changeGallery(product);
              setSelectIndex(index);
              setSku([]);
              changeStyle(product, index);
              setHasBeenSelected(false);
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
              setHasBeenSelected(true);
            }
          }> {prodSkus[sku].size} </button>
          )
        })}
      </SelectSize>

      <ErrorMsgStyled className={error ? 'danger' : ''}>
        Please select a size and quantity before adding to cart.
      </ErrorMsgStyled>

      <SelectQuantity>
        <select name="selectQuantity" value={quantity} onChange={(e) => setQuantity(e.target.value)}>
        <option value="Select Quantity" disabled>Select Quantity</option>
          {[...Array(Math.min(quantityNum, 15)).keys()].map(num => {
            return <option key={num} value={num + 1}>{num + 1}</option>
          })}
        </select>
      </SelectQuantity>

      <AddCartButton data-testid="addCart">
        <button onClick={(selectedSize !== 0 && quantity > 0) ? () => {addItem(selectedSize, quantity)} : () => {
          setError(true);
          setTimeout(() => {setError(false)}, 3000);
        }}>{quantityNum === 0 && selectedSize !== 0 && hasBeenSelected ? 'OUT OF STOCK' : 'ADD TO CART'}</button>
      </AddCartButton>
    </SelectorContainer>
  )
}

export default StyleSelector;
import React, { useState, useEffect, useContext } from 'react';
import { ShoppingBagIcon, SearchIcon } from '@heroicons/react/outline';
import { useParams } from 'react-router-dom';
import StyleSelector from './components/StyleSelector';
import ProdDescription from './components/ProdDescription';
import Socials from './components/Socials';
import { Flex } from './components/styles/OverviewContainerStyled';
import { LordContainer } from './components/styles/LordContainerStyled';
import { RightFlex } from './components/styles/ProductInfoStyled';
import Gallery from './components/Gallery';
import { NavBar, NavButtonsStyled, CartBadgeStyled } from './components/styles/NavBarStyled';
import ContextStoreContext from '../../utils/ContextStore';

const axios = require('axios');

export default function Overview() {
  // const [style, setStyle] = useState(null);
  // const [product, setProduct] = useState(null);
  const [currentStyle, setCurrentStyle] = useState(null);
  const [index, setIndex] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const [cart, setCart] = useState([]);
  const { setProductName, setStyle, setProduct, productId, style, product } = useContext(ContextStoreContext);
  // let { productId } = useParams();
  // productId = productId || '65631';
  function fetchStyles(id) {
    return axios.get('/api', { params: { path: `products/${id}/styles` } });
  }

  function fetchProduct(id) {
    if (id) {
      return axios.get('/api', { params: { path: `products/${id}` } });
    }
  }

  function fetchCart() {
    return axios.get('/api', { params: { path: 'cart' } });
  }

  function changeGallery(object) {
    setCurrentStyle(object);
  }

  function changeStyle(object, ind) {
    setIndex(ind);
  }

  function handleExpand() {
    setExpanded(!expanded);
  }

  useEffect(() => {
    // fetchStyles(productId)
    //   .then((res) => {
    //     if (res.status === 200) {
    //       setStyle(res.data.results);
    //       setCurrentStyle(res.data.results[0]);
    //     }
    //   })
    //   .catch((err) => console.log(err));
    // fetchProduct(productId)
    //   .then((res) => {
    //     if (res.status === 200) {
    //       setProduct(res.data);
    //     }
    //   })
    //   .catch((err) => console.log(err));
    fetchCart()
      .then((res) => {
        if (res.status === 200) {
          setCart(res.data);
        }
      })
      .catch((err) => console.log(err));

    style && setCurrentStyle(style.results[index]);
  }, [style]);

  function addItem(skuId, quantity) {
    const data = { sku_id: skuId, count: quantity };
    const query = { path: 'cart', query: data };
    axios.post('api', query)
      .then((res) => {
        if (res.status === 201) {
          fetchCart()
            .then((res) => { setCart(res.data); })
            .catch((err) => console.log(err));
        }
      })
      .catch((err) => console.log(err));
  }

  return (
    <LordContainer data-testid="lordContainer">
      <NavBar>
        <img src="./dist/images/BACKLASH_LOGO_sml.png" />
        <NavButtonsStyled>
          <SearchIcon className="icon" />
          <ShoppingBagIcon className="icon" />
          <CartBadgeStyled>
            <span>{cart.length}</span>
          </CartBadgeStyled>
        </NavButtonsStyled>
      </NavBar>
      <Flex>
        {currentStyle && (
        <Gallery
          data-testid="carousel"
          style={currentStyle}
          expanded={expanded}
          handleExpand={handleExpand}
        />
        )}
        {!expanded && (
          <RightFlex>
            <Socials />
            {style && product && (
            <StyleSelector
              productId={productId}
              styles={style.results}
              index={index}
              product={product}
              fetchStyles={fetchStyles}
              changeGallery={changeGallery}
              changeStyle={changeStyle}
              addItem={addItem}
            />
            )}
          </RightFlex>
        )}
      </Flex>
      {product && <ProdDescription data-testid="productInfo" product={product} />}
    </LordContainer>
  );
}

import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ShoppingBagIcon, SearchIcon } from '@heroicons/react/outline';
import StyleSelector from './components/StyleSelector';
import ProdDescription from './components/ProdDescription';
import Socials from './components/Socials';
import { Flex } from './components/styles/OverviewContainerStyled';
import { LordContainer } from './components/styles/LordContainerStyled';
import { RightFlex } from './components/styles/ProductInfoStyled';
import Gallery from './components/Gallery';
import { NavBar, NavButtonsStyled, CartBadgeStyled } from './components/styles/NavBarStyled';

const axios = require('axios');

export default function Overview() {
  const [style, setStyle] = useState(null);
  const [product, setProduct] = useState(null);
  const [currentStyle, setCurrentStyle] = useState(null);
  const [index, setIndex] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const [cart, setCart] = useState([]);
  const productId = '65635';

  useEffect(() => {
    fetchStyles(productId)
      .then((res) => {
        if (res.status === 200) {
          setStyle(res.data.results);
          setCurrentStyle(res.data.results[0]);
        }
      })
      .catch((res) => res.sendStatus(500));
    fetchProduct(productId)
      .then((res) => {
        if (res.status === 200) {
          setProduct(res.data);
        }
      })
      .catch((res) => res.sendStatus(500));
    fetchCart()
      .then((res) => {
        if (res.status === 200) {
          setCart(res.data);
        }
      })
      .catch((res) => res.sendStatus(500));
  }, []);

  function fetchStyles(id) {
    return axios.get('api', { params: { path: `products/${id}/styles` } });
  }

  function fetchProduct(id) {
    return axios.get('api', { params: { path: `products/${id}` } });
  }

  function fetchCart() {
    return axios.get('api', { params: { path: 'cart' } });
  }

  function changeGallery(object) {
    setCurrentStyle(object);
  }

  function changeStyle(object, index) {
    setIndex(index);
  }

  function handleExpand() {
    setExpanded(!expanded);
  }

  function addItem(skuId, quantity) {
    const data = { sku_id: skuId, count: quantity };
    const query = { path: 'cart', query: data };
    axios.post('api', query)
      .then(res => {
        if(res.status === 201) {
          fetchCart()
            .then(res => {setCart(res.data)})
            .catch(err => console.log(err));
        };
      })
      .catch(err => console.log(err));
  }

  return (
    <LordContainer>
      <NavBar>
        <img src="./dist/images/BACKLASH_LOGO.png" />
        <NavButtonsStyled>
          <SearchIcon className="icon" />
          <ShoppingBagIcon className="icon" />
          <CartBadgeStyled>
            <span>{cart.length}</span>
          </CartBadgeStyled>
        </NavButtonsStyled>
      </NavBar>
      <Flex>
        {currentStyle && <Gallery style={currentStyle} handleExpand={handleExpand} />}
        {!expanded && (
          <RightFlex>
            <Socials />
            {style && product && (
            <StyleSelector
              styles={style}
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
      {product && <ProdDescription product={product} />}
    </LordContainer>
  );
}

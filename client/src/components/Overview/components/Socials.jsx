import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faPinterest } from '@fortawesome/free-brands-svg-icons';
import { SocialStyled } from './styles/ProductInfoStyled';

function Socials() {
  const url = 'http://localhost:8008';
  const params = 'menubar=no,toolbar=no,status=no,width=570,height=570';

  return (
    <SocialStyled>

      <FontAwesomeIcon
        icon={faFacebook}
        className="fbIcon icons"
        onClick={() => {
          const shareUrl = `http://www.facebook.com/sharer/sharer.phpu=${url}`;
          window.open(shareUrl, 'NewWindow', params);
        }}
      />

      <FontAwesomeIcon
        icon={faTwitter}
        className="twitterIcon icons"
        onClick={() => {
          const Shareurl = `https://twitter.com/intent/tweet?url=${url}`;
          window.open(Shareurl, 'NewWindow', params);
        }}
      />
      <FontAwesomeIcon
        icon={faPinterest}
        className="pinterestIcon icons"
        onClick={() => {
          const Shareurl = `http://pinterest.com/pin/create/link/?url=${url}`;
          window.open(Shareurl, 'NewWindow', params);
        }}

      />
    </SocialStyled>
  );
}

export default Socials;

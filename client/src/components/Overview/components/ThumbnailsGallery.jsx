import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import {
  ThumbnailsStyled, ThumbnailsImageStyled, ThumbnailsLeft, ThumbnailsRight,
} from './styles/GalleryStyled';

function ThumbnailsGallery({ style, img, navigateImage }) {
  const [display, setDisplay] = useState(0);
  const { length } = style.photos;

  const nextSlide = () => {
    if (display !== length - 7) {
      setDisplay(display === length - 7 ? 0 : display + 1);
    }
  };

  const prevSlide = () => {
    if (display !== 0) {
      setDisplay(display === 0 ? length - 7 : display - 1);
    }
  };

  return (
    <ThumbnailsStyled>

      <ThumbnailsLeft>
        <FontAwesomeIcon
          style={{ display: length <= 7 ? 'none' : '' }}
          className={display === 0 ? 'upButton disable' : 'upButton'}
          icon={faChevronUp}
          size="2x"
          onClick={() => {
            prevSlide();
          }}
        />
      </ThumbnailsLeft>

      {style.photos.map((photo, index) => (
        (index < display + 7 && index > display - 1)
          ? (
            <ThumbnailsImageStyled
              className={img === index ? 'selected' : ''}
              key={photo.thumbnail_url}
              img={photo.thumbnail_url || '/dist/images/NPA.jpeg'}
              onClick={() => {
                navigateImage(photo, index);
              }}
            />
          ) : null
      ))}

      <ThumbnailsRight>
        <FontAwesomeIcon
          style={{ display: length <= 7 ? 'none' : '' }}
          className={display === length - 7 ? 'downButton disable' : 'downButton'}
          icon={faChevronDown}
          size="2x"
          onClick={() => {
            nextSlide();
          }}
        />
      </ThumbnailsRight>

    </ThumbnailsStyled>
  );
}

export default ThumbnailsGallery;

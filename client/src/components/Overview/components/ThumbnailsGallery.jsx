import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import {
  ThumbnailsStyled, ThumbnailsImageStyled, ThumbnailsLeft, ThumbnailsRight,
} from './styles/GalleryStyled';

function ThumbnailsGallery({ style, img, navigateImage }) {
  const [current, setCurrent] = useState(0);
  const { length } = style.photos;

  const nextSlide = () => {
    if (current !== length - 7) {
      setCurrent(current === length - 7 ? 0 : current + 1);
    }
  };

  const prevSlide = () => {
    if (current !== 0) {
      setCurrent(current === 0 ? length - 7 : current - 1);
    }
  };

  return (
    <ThumbnailsStyled>

      <ThumbnailsLeft>
        <FontAwesomeIcon
          className={current === 0 ? 'upButton disable' : 'upButton'}
          icon={faChevronUp}
          size="2x"
          onClick={() => {
            prevSlide();
          }}
        />
      </ThumbnailsLeft>

      {style.photos.map((photo, index) => (
        (index < current + 7 && index > current - 1)
          ? (
            <ThumbnailsImageStyled
              className={img === index ? 'selected' : ''}
              key={index}
              img={photo.thumbnail_url}
              onClick={() => {
                navigateImage(photo, index);
              }}
            />
          ) : <></>
      ))}

      <ThumbnailsRight>
        <FontAwesomeIcon
          className={current === length - 7 ? 'downButton disable' : 'downButton'}
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

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronLeft, faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';
import {
  GalleryStyled, GalleryInnerStyled,
  GalleryInnerLeftStyled, GalleryInnerCenterStyled,
  GalleryInnerRightStyled, ThumbnailsStyled,
  ThumbnailsImageStyled,
} from './styles/GalleryStyled.js';

function Gallery({ style, handleExpand }) {
  const [img, setImg] = useState(0);
  const [expanded, setExpand] = useState(false);

  function navigateImage(photo, index) {
    setImg(index)
  }

  function expand() {
    console.log('click');
    setExpand(!expanded);
  }

  return (
    <GalleryStyled>
      <ThumbnailsStyled>
        {style.photos.map((photo, index) => (
          <ThumbnailsImageStyled
            className={img === index ? 'selected' : ''}
            key={index}
            img={photo.thumbnail_url}
            onClick={() => {
              navigateImage(photo, index);
            }}
          />
        ))}
      </ThumbnailsStyled>
      <GalleryInnerStyled img={style.photos[img].url}>
        <GalleryInnerLeftStyled>
          <FontAwesomeIcon
            className={img === 0 ? 'disable button' : 'button'}
            icon={faCircleChevronLeft}
            size="2x"
            onClick={() => {
              img > 0 && setImg(img - 1);
            }}
          />
        </GalleryInnerLeftStyled>

        <GalleryInnerCenterStyled />

        <GalleryInnerRightStyled onClick={handleExpand}>
          <FontAwesomeIcon
            className={img === style.photos.length - 1 ? 'disable button' : 'button'}
            icon={faCircleChevronRight}
            size="2x"
            onClick={() => {
              img < style.photos.length - 1 && setImg(img + 1);
            }}
          />
        </GalleryInnerRightStyled>

      </GalleryInnerStyled>
    </GalleryStyled>
  );
}

export default Gallery;

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronLeft, faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';
import {
  GalleryStyled, GalleryInnerStyled,
  GalleryInnerLeftStyled, GalleryInnerCenterStyled,
  GalleryInnerRightStyled, ThumbnailsStyled,
  ThumbnailsImageStyled,
} from './styles/GalleryStyled.js';

function Gallery({ style }) {
  const [img, setImg] = useState(0);

  function click(photo, index) {
    setImg(index)
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
              click(photo, index)
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

        <GalleryInnerRightStyled>
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

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronLeft, faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';
import {
  GalleryStyled, GalleryInnerStyled,
  GalleryInnerLeftStyled, GalleryInnerCenterStyled, GalleryInnerRightStyled,
} from './styles/GalleryStyled.js';

function Gallery({ styles }) {
  const [img, setImg] = useState(0);

  return (
    <GalleryStyled>
      <GalleryInnerStyled img={styles[0].photos[img].url}>

        <GalleryInnerLeftStyled>
          <FontAwesomeIcon icon={faCircleChevronLeft} size="2x" onClick={() => { img > 0 && setImg(img - 1); }} />
        </GalleryInnerLeftStyled>

        <GalleryInnerCenterStyled />

        <GalleryInnerRightStyled>
          <FontAwesomeIcon
            icon={faCircleChevronRight}
            size="2x"
            onClick={() => {
              img < styles[0].photos.length - 1 && setImg(img + 1);
            }}
          />
        </GalleryInnerRightStyled>

      </GalleryInnerStyled>
    </GalleryStyled>
  );
}

export default Gallery;

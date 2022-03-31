import React, { useState } from 'react';
import { GalleryStyled, GalleryInnerStyled } from './styles/GalleryStyled.js';

function Gallery({ styles }) {
  const [img, setImg] = useState(0);
  console.log(styles.results[0])
  return(
    <GalleryStyled>
      <GalleryInnerStyled img={styles.results[0].photos[img].url}>

      </GalleryInnerStyled>
    </GalleryStyled>
  )
}

export default Gallery;
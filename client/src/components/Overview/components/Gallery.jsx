import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronLeft, faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';
import {
  GalleryStyled, GalleryInnerStyled,
  GalleryInnerLeftStyled, GalleryInnerCenterStyled,
  GalleryInnerRightStyled, ThumbnailsStyled,
  ThumbnailsImageStyled,
} from './styles/GalleryStyled';

function Gallery({
  style, handleExpand, width,
  height, magnifierHeight = 400, magnifieWidth = 300, zoomLevel = 2.5,
}) {
  const [img, setImg] = useState(0);
  const [expanded, setExpand] = useState(false);
  const [[imgWidth, imgHeight], setSize] = useState([0, 0]);
  const [showMagnifier, setShowMagnifier] = useState(false);
  const [[x, y], setXY] = useState([0, 0]);
  const [preMagnify, setPreMagnify] = useState(true);

  function navigateImage(photo, index) {
    setImg(index);
  }

  function expand() {
    setExpand(!expanded);
  }

  return (
    <GalleryStyled>
      <ThumbnailsStyled>
        {style.photos.map((photo, index) => (
          <ThumbnailsImageStyled
            className={img === index ? 'selected' : 'overflow'}
            key={index}
            img={photo.thumbnail_url}
            onClick={() => {
              navigateImage(photo, index);
            }}
          />
        ))}
      </ThumbnailsStyled>
      <GalleryInnerStyled
        img={style.photos[img].url}
        className={preMagnify ? 'magnify' : ''}
        style={{ position: 'relative', height, width }}
        onClick={() => {
          setPreMagnify(!preMagnify);
        }}
        onMouseEnter={(e) => {
          const elem = e.currentTarget;
          const { width, height } = elem.getBoundingClientRect();
          setSize([width, height]);
          setShowMagnifier(true);
        }}
        onMouseLeave={() => {
          setShowMagnifier(false);
        }}
        onMouseMove={(e) => {
          // update cursor position
          const elem = e.currentTarget;
          const { top, left } = elem.getBoundingClientRect();

          // calculate cursor position on the image
          const x = e.pageX - left - window.pageXOffset;
          const y = e.pageY - top - window.pageYOffset;
          setXY([x, y]);
        }}
      >

        {!preMagnify
          ? (
            <div
              style={{
                display: showMagnifier ? '' : 'none',
                position: 'absolute',

                pointerEvents: 'none',
                height: `${magnifierHeight}px`,
                width: `${magnifieWidth}px`,
                // move element center to cursor pos
                top: `${y - magnifierHeight / 2}px`,
                left: `${x - magnifieWidth / 2}px`,
                opacity: '1', // reduce opacity so you can verify position
                border: '1px solid lightgray',
                backgroundColor: 'white',
                backgroundImage: `url('${style.photos[img].url}')`,
                backgroundRepeat: 'no-repeat',

                // calculate zoomed image size
                backgroundSize: `${imgWidth * zoomLevel}px ${
                  imgHeight * zoomLevel
                }px`,

                // calculate position of zoomed image.
                backgroundPositionX: `${-x * zoomLevel + magnifieWidth / 2}px`,
                backgroundPositionY: `${-y * zoomLevel + magnifierHeight / 2}px`,
              }}
            />
          ) : <></>}

        <GalleryInnerLeftStyled onClick={(e) => {e.stopPropagation()}}>
          <FontAwesomeIcon
            className={img === 0 ? 'disable button' : 'button'}
            icon={faCircleChevronLeft}
            size="2x"
            onClick={(e) => {
              e.stopPropagation();
              img > 0 && setImg(img - 1);
            }}
          />
        </GalleryInnerLeftStyled>

        <GalleryInnerCenterStyled />

        <GalleryInnerRightStyled onClick={(e) => {
          e.stopPropagation();
          handleExpand();
          }}>
          <FontAwesomeIcon
            className={img === style.photos.length - 1 ? 'disable button' : 'button'}
            icon={faCircleChevronRight}
            size="2x"
            onClick={(e) => {
              e.stopPropagation();
              img < style.photos.length - 1 && setImg(img + 1);
            }}
          />
        </GalleryInnerRightStyled>

      </GalleryInnerStyled>
    </GalleryStyled>
  );
}

export default Gallery;

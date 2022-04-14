import React, { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { ArrowsExpandIcon } from '@heroicons/react/outline';
import {
  GalleryStyled, GalleryInnerStyled,
  GalleryInnerLeftStyled, GalleryInnerCenterStyled,
  GalleryInnerRightStyled, GalleryMagnifiedStyled,
} from './styles/GalleryStyled';
import ThumbnailsGallery from './ThumbnailsGallery';

function Gallery({
  style, handleExpand, width, height, zoomLevel = 2.5,
}) {
  const [img, setImg] = useState(0);
  const [[imgWidth, imgHeight], setSize] = useState([0, 0]);
  const [showMagnifier, setShowMagnifier] = useState(false);
  const [[x, y], setXY] = useState([0, 0]);
  const [preMagnify, setPreMagnify] = useState(true);
  const imageContainerRef = useRef(null);

  function navigateImage(photo, index) {
    setImg(index);
  }

  return (
    <GalleryStyled>

      <ThumbnailsGallery style={style} img={img} navigateImage={navigateImage} />

      <GalleryInnerStyled
        ref={imageContainerRef}
        img={style.photos[img].url}
        height={height}
        width={width}
        className={preMagnify ? 'magnify' : ''}
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
            <GalleryMagnifiedStyled
              img={style.photos[img].url}
              imgHeight={imgHeight}
              imgWidth={imgWidth}
              style={{
                // calculate zoomed image size
                backgroundSize: `${imgWidth * zoomLevel}px ${
                  imgHeight * zoomLevel
                }px`,
                // calculate position of zoomed image.
                backgroundPositionX: `${-x * zoomLevel / (1.68)}px`,
                backgroundPositionY: `${-y * zoomLevel / (1.68)}px`,
              }}
            />
          ) : null}

        <GalleryInnerLeftStyled onClick={(e) => { e.stopPropagation(); }}>
          <FontAwesomeIcon
            className={img === 0 ? 'disable button' : 'button'}
            icon={faChevronLeft}
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
        }}
        >
          <ArrowsExpandIcon
            className="expandIcon"
            onClick={(e) => {
              handleExpand();
              const elem = e.currentTarget;
              const { width, height } = elem.getBoundingClientRect();
              setSize([width, height]);
            }}
          />
          <FontAwesomeIcon
            className={img === style.photos.length - 1 ? 'disable button2' : 'button2'}
            icon={faChevronRight}
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

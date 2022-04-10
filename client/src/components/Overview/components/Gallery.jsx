import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { ArrowsExpandIcon } from '@heroicons/react/outline';
import {
  GalleryStyled, GalleryInnerStyled,
  GalleryInnerLeftStyled, GalleryInnerCenterStyled,
  GalleryInnerRightStyled,
} from './styles/GalleryStyled';
import ThumbnailsGallery from './ThumbnailsGallery';

function Gallery({
  style, handleExpand, width,
  height, magnifierHeight = 800, magnifieWidth = 700, zoomLevel = 2.5,
}) {
  const [img, setImg] = useState(0);
  const [[imgWidth, imgHeight], setSize] = useState([0, 0]);
  const [showMagnifier, setShowMagnifier] = useState(false);
  const [[x, y], setXY] = useState([0, 0]);
  const [preMagnify, setPreMagnify] = useState(true);

  function navigateImage(photo, index) {
    setImg(index);
  }

  console.log(imgWidth, imgHeight);

  return (
    <GalleryStyled>

      <ThumbnailsGallery style={style} img={img} navigateImage={navigateImage} />

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
                height: `${imgHeight}px`,
                width: `${imgWidth}px`,
                // move element center to cursor pos
                // top: `${magnifierHeight}px`,
                // left: `${magnifieWidth}px`,
                opacity: '1',
                border: '1px solid lightgray',
                backgroundColor: 'white',
                backgroundImage: `url('${style.photos[img].url}')`,
                backgroundRepeat: 'no-repeat',

                // calculate zoomed image size
                backgroundSize: `${imgWidth * zoomLevel}px ${
                  imgHeight * zoomLevel
                }px`,

                // calculate position of zoomed image.
                backgroundPositionX: `${-x * zoomLevel / (1.68)}px`,
                backgroundPositionY: `${-y * zoomLevel / (1.68)}px`,
              }}
            />
          ) : <> </>}

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

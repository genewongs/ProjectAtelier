import React from 'react';
import PropTypes from 'prop-types';
import StyledPhoto from './styles/StyledPhoto';

function ReviewPhotos({ photoUrls, setCurrDisplay, setExpanded }) {
  function handleImageSelect(e) {
    setExpanded(true);
    setCurrDisplay(e.target.src);
  }

  return (
    <div className="photos">
      <StyledPhoto>
        {photoUrls.map((photo) => (
          <input
            key={photo.url}
            type="image"
            id="image"
            alt="thumbie"
            src={photo.url}
            onClick={(e) => handleImageSelect(e)}
          />
        ))}
      </StyledPhoto>
    </div>
  );
}

export default ReviewPhotos;

ReviewPhotos.propTypes = {
  photoUrls: PropTypes.arrayOf(PropTypes.string).isRequired,
  setCurrDisplay: PropTypes.func.isRequired,
  setExpanded: PropTypes.func.isRequired,
};

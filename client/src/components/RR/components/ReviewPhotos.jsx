import React from 'react';
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

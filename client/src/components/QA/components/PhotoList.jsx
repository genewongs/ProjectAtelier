import React from 'react';
import StyledPhotos from '../../RR/components/styles/StyledPhoto';

function PhotoList({ photos }) {
  return (
    <div className="photos">
      <StyledPhotos>
        {photos.map((photo) => (
          <input
            key={photo.id}
            type="image"
            id="image"
            alt="thumbnail"
            src={photo.url}
          />
        ))}
      </StyledPhotos>
    </div>
  );
}

export default PhotoList;

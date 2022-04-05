import React, { useState, useCallback } from 'react';
import StyledPhoto from './styles/StyledPhoto';
import ModalStyled from './styles/Modal';
import Modal from './Modal';

function ReviewPhotos({ photoUrls }) {
  const [expanded, setExpanded] = useState(false);
  const [currDisplay, setCurrDisplay] = useState('');

  function handleImageSelect(e) {
    setExpanded(true);
    setCurrDisplay(e.target.src);
  }

  const toggleModal = useCallback(() => setExpanded((prev) => !prev));

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
      <ModalStyled>
        <Modal show={expanded} toggleModal={toggleModal}>
          <img src={currDisplay} alt="bigboi" />
        </Modal>
      </ModalStyled>
    </div>
  );
}

export default ReviewPhotos;

import React, { useState, useCallback } from 'react';
import Review from './Review';
import ReviewListStyled from './styles/StyledReviewList';
import ModalStyled from './styles/StyledModal';
import Modal from './Modal';

export default function ReviewList({ reviews }) {
  const [expanded, setExpanded] = useState(false);
  const [currDisplay, setCurrDisplay] = useState('');

  const toggleModal = useCallback(() => setExpanded((prev) => !prev), []);

  return (
    <>
      <ReviewListStyled>
        {reviews
        && (
        <span>
          {reviews.map((review) => (
            <Review
              key={review.review_id}
              review={review}
              setExpanded={setExpanded}
              setCurrDisplay={setCurrDisplay}
            />
          ))}
        </span>
        )}
      </ReviewListStyled>
      <ModalStyled>
        <Modal
          show={expanded}
          toggleModal={toggleModal}
        >
          <img src={currDisplay} alt="bigboi" />
          <button type="button" className="photo-close-button" onClick={toggleModal}>✖</button>
        </Modal>
      </ModalStyled>
    </>
  );
}

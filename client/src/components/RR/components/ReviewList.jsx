import React, { useState, useContext, useCallback } from 'react';
import Review from './Review';
import ReviewStoreContext from '../utils/ReviewContext';
import ReviewListStyled from './styles/StyledReviewList';
import ModalStyled from './styles/Modal';
import Modal from './Modal';

export default function ReviewList() {
  const { reviews } = useContext(ReviewStoreContext);
  const [expanded, setExpanded] = useState(false);
  const [currDisplay, setCurrDisplay] = useState('');

  const toggleModal = useCallback(() => setExpanded((prev) => !prev));

  return (
    <>
      <ReviewListStyled>
        {reviews.results
        && (
        <span>
          {reviews.results.map((review) => (
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
        </Modal>
      </ModalStyled>
    </>
  );
}

import React from 'react';

function ReviewListButtons({ limitHit, incrementCount, toggleModal }) {
  return (
    <div className="review-buttons-container">
      {limitHit ? null
        : (
          <button
            type="button"
            className="more-reviews-button"
            onClick={incrementCount}
          >
            More Reviews
          </button>
        )}
      <button
        type="button"
        className="add-review-button"
        onClick={toggleModal}
      >
        Add Review +
      </button>
    </div>
  );
}

export default ReviewListButtons;

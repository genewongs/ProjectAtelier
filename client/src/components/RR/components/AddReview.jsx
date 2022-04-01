import React from 'react';
import axios from 'axios';

function AddReview() {
  function addReviewModal() {
    prompt('hello!');
  }

  return (
    <div>
      <button
        type="button"
        className="add-review-button"
        onClick={addReviewModal}
      >
        Add Review
      </button>
    </div>
  );
}

export default AddReview;

import React from 'react';

function RatingForm({ handleChange }) {
  const stars = {
    'star-e': 'Poor',
    'star-d': 'Fair',
    'star-c': 'Average',
    'star-b': 'Good',
    'star-a': 'Great',
  };

  return (
    <div className="form-container">
      <form className="star-rating" name="rating">
        <div>Rating</div>
        {Object.keys(stars).map((option, index) => (
          <label htmlFor={option} key={option} className="rating">
            <input type="radio" className="rating" name="rating" id={option} value={index + 1} onChange={handleChange} />
          </label>
        ))}
      </form>
    </div>
  );
}

export default RatingForm;

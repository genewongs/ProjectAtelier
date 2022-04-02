import React from 'react';

function RatingForm() {
  const stars = {
    'star-e': 'Poor',
    'star-d': 'Fair',
    'star-c': 'Average',
    'star-b': 'Good',
    'star-a': 'Great',
  };

  return (
    <div className="rating-container">
      <form className="form-rating">
        <div>Rating</div>
        {Object.entries(stars).map((option, index) => (
          <label htmlFor={option[0]} key={option[0]} className="rating">
            <input type="radio" className="rating" name={option[1]} id={option[0]} value={index + 1} />
          </label>
        ))}
      </form>
    </div>
  );
}

export default RatingForm;

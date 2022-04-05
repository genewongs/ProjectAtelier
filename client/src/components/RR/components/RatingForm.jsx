import React, { useState } from 'react';

function RatingForm({ handleChange }) {
  const [selected, setSelected] = useState('');
  const [rating, setRating] = useState(-1);
  const stars = {
    'star-e': 'Poor',
    'star-d': 'Fair',
    'star-c': 'Average',
    'star-b': 'Good',
    'star-a': 'Great',
  };

  function handleDisplay(e) {
    setSelected(e.target.id);
  }

  return (
    <div className="star-container">
      <form onChange={handleDisplay}>
        {Object.keys(stars).map((option, index) => {
          const val = index + 1;
          return (
            <button
              type="button"
              name="rating"
              key={option}
              id={option}
              className={index <= rating ? 'on' : 'off'}
              onClick={(e) => {
                setRating(index);
                handleDisplay(e);
                handleChange(e);
              }}
              value={val}
            >
              ★
            </button>
          );
        })}
        <span>{selected ? stars[selected] : null}</span>
      </form>
    </div>
  );
}

export default RatingForm;

import React, { useState } from 'react';

function RatingForm({ handleChange }) {
  const [selected, setSelected] = useState('');
  const [hover, setHover] = useState(0);
  const [rating, setRating] = useState(0);
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
    <div className="star-rating">
      <form>
        {Object.keys(stars).map((option, index) => {
          const val = index + 1;
          return (
            <button
              type="button"
              name="rating"
              key={option}
              id={option}
              className={val <= (hover || rating) ? 'on' : 'off'}
              onClick={(e) => {
                setRating(val);
                handleDisplay(e);
                handleChange(e);
              }}
              onMouseEnter={() => setHover(val)}
              onMouseLeave={() => setHover(rating)}
              value={val}
            >
              ★
            </button>
          );
        })}
        <div>{selected ? stars[selected] : null}</div>
      </form>
    </div>
  );
}

export default RatingForm;

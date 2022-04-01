import React from 'react';

function RatingForm() {
  return (
    <div className="form-rating">
      <form>
        Rating
        <label htmlFor="star-a" className="rating">
          <input type="radio" className="rating" name="Great" id="star-a" value="5" />
        </label>
        <label htmlFor="star-b" className="rating">
          <input type="radio" className="rating" name="Good" id="star-b" value="4" />
        </label>
        <label htmlFor="star-c" className="rating">
          <input type="radio" className="rating" name="Average" id="star-c" value="3" />
        </label>
        <label htmlFor="star-d" className="rating">
          <input type="radio" className="rating" name="Fair" id="star-d" value="2" />
        </label>
        <label htmlFor="star-e" className="rating">
          <input type="radio" className="rating" name="Poor" id="star-e" value="1" />
        </label>
      </form>
    </div>
  );
}

export default RatingForm;

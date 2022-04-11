import React from 'react';

function KeywordSearch({
  reviews, setSearched, filterState, filtered,
}) {
  function handleChange(e) {
    if (e.target.value.length > 3) {
      if (filterState) {
        setSearched(filtered.filter((review) => review.body.includes(e.target.value)
          || review.summary.includes(e.target.value)));
      } else {
        setSearched(reviews.filter((review) => review.body.includes(e.target.value)
        || review.summary.includes(e.target.value)));
      }
    } else {
      setSearched([]);
    }
  }

  return (
    <div>
      <label htmlFor="search">
        <input type="text" id="search" onChange={handleChange} />
      </label>
    </div>
  );
}

export default KeywordSearch;

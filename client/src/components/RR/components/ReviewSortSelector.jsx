import React from 'react';

function ReviewSortSelector({ reviewCount, setSort }) {
  return (
    <div className="review-sorted-by">
      {reviewCount}
      {reviewCount >= 2 || reviewCount === 0 ? ' reviews, ' : ' review, '}
      sorted by
      {' '}
      <select className="sort-selector" onChange={(e) => setSort(e.target.value)}>
        <option value="relevance">Relevance</option>
        <option value="newest">Newest</option>
        <option value="helpful">Helpfulness</option>
      </select>
    </div>
  );
}

export default ReviewSortSelector;

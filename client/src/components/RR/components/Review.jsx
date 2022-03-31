import React from 'react';

export default function Review({ review }) {
  return (
    <div>
      <span>{review.body}</span>
    </div>
  );
}

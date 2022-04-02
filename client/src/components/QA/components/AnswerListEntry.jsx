import React from 'react';

export default function AnswerListEntry({ answer }) {
  return (
    <div>
      <ul>
        <li>
          {answer.body}
        </li>
      </ul>
    </div>
  );
}

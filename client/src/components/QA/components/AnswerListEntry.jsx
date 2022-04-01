import React from 'react';

function AnswerListEntry({ answer }) {
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

export default AnswerListEntry;

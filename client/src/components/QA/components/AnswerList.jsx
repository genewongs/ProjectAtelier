import React from 'react';
// eslint-disable-next-line import/extensions
import AnswerListEntry from './AnswerListEntry.jsx';

function AnswerList({ answers }) {
  return (
    <div>
      {/* eslint-disable-next-line react/no-array-index-key */}
      {answers.map((answer, key) => <AnswerListEntry answer={answer} key={key} />)}
    </div>
  );
}

export default AnswerList;

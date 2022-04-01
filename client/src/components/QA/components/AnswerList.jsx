import React from 'react';
// eslint-disable-next-line import/extensions
import AnswerListEntry from './AnswerListEntry.jsx';

function AnswerList({ answers }) {
  return (
    <div>
      {answers.map((answer) => <AnswerListEntry answer={answer} key={answer.answer_id} />)}
    </div>
  );
}

export default AnswerList;

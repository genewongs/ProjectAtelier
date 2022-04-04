import React from 'react';
import AnswerListEntry from './AnswerListEntry';

function AnswerList({ answers }) {
  return (
    <div>
      {answers.map((answer) => <AnswerListEntry answer={answer} key={answer.answer_id} />)}
    </div>
  );
}

export default AnswerList;

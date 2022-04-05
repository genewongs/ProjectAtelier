import React from 'react';
import AnswerListEntry from './AnswerListEntry';

function AnswerList({ answers, getAnswers }) {
  return (
    <div>
      {/* eslint-disable-next-line max-len */}
      {answers.map((answer) => <AnswerListEntry answer={answer} key={answer.answer_id} getAnswers={getAnswers} />)}
    </div>
  );
}

export default AnswerList;

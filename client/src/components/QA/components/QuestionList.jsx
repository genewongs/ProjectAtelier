import React from 'react';
import QuestionListEntry from './QuestionListEntry';

function QuestionList({ questions }) {
  return (
    <div>
      {/* eslint-disable-next-line max-len */}
      {questions.map((question) => <QuestionListEntry question={question} key={question.question_id} />)}
    </div>
  );
}

export default QuestionList;

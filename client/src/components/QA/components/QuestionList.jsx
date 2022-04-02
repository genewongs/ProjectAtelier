import React from 'react';
// eslint-disable-next-line import/extensions
import QuestionListEntry from './QuestionListEntry.jsx';

function QuestionList({ questions }) {
  return (
    <div>
      {/* eslint-disable-next-line max-len */}
      {questions.map((question) => <QuestionListEntry question={question} key={question.question_id} />)}
    </div>
  );
}

export default QuestionList;

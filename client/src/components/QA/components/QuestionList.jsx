import React from 'react';
// eslint-disable-next-line import/extensions
import QuestionListEntry from './QuestionListEntry.jsx';

function QuestionList({ questions }) {
  return (
    <div>
      {/* eslint-disable-next-line react/no-array-index-key */}
      {questions.map((question, key) => <QuestionListEntry question={question} key={key} />)}
    </div>
  );
}

export default QuestionList;

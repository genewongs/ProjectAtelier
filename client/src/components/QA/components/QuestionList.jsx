import React from 'react';
import QuestionListEntry from './QuestionListEntry.jsx';

function QuestionList({ questions }) {
  return (
    <div>
      {questions.map((question, key) => <QuestionListEntry question={question} />)}
    </div>
  );
}

export default QuestionList;

import React from 'react';
import QuestionListEntry from './QuestionListEntry';

function QuestionList({ questions, getQuestions }) {
  return (
    <div>
      {/* eslint-disable-next-line max-len */}
      {questions.map((question) => <QuestionListEntry question={question} key={question.question_id} getQuestions={getQuestions} />)}
    </div>
  );
}

export default QuestionList;

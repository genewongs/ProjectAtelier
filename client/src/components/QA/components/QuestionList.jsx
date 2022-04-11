import React from 'react';
import QuestionListEntry from './QuestionListEntry';
import QuestionListStyled from './styles/StyledQuestionList';

function QuestionList({ questions, getQuestions }) {
  return (
    <QuestionListStyled>
      <div data-testid="questionList">
        {/* eslint-disable-next-line max-len */}
        {questions.map((question) => <QuestionListEntry question={question} key={question.question_id} getQuestions={getQuestions} />)}
      </div>
    </QuestionListStyled>
  );
}

export default QuestionList;

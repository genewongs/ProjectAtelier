import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

// eslint-disable-next-line import/extensions
import AnswerList from './AnswerList.jsx';

export default function QuestionListEntry({ question }) {
  const [answerData, setAnswerData] = useState([]);
  const [count, setCount] = useState(2);

  function getAnswers() {
    return axios.get('/api', { params: { path: `qa/questions/${question.question_id}/answers?count=${count}` } })
      .then((response) => setAnswerData(response.data.results))
      .catch((err) => err);
  }

  const incrementCount = useCallback(() => setCount((prevCount) => prevCount + 2), []);

  useEffect(() => {
    getAnswers();
  }, [count]);

  return (
    <div>
      <ul>
        <li>{question.question_body}</li>
        <span>
          {question.question_helpfulness}
          people found this question helpful
        </span>
        <div>
          <AnswerList answers={answerData} />
        </div>
        <button
          type="button"
          onClick={incrementCount}
        >
          Load More Answers
        </button>
      </ul>

    </div>
  );
}

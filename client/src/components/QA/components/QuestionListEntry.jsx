import React, { useState, useEffect } from 'react';
import axios from 'axios';

// import AnswerListEntry from './AnswerListEntry.jsx';
// eslint-disable-next-line import/extensions
import AnswerList from './AnswerList.jsx';

export default function QuestionListEntry({ question }) {
  const [answerData, setAnswerData] = useState([]);

  function getAllAnswers() {
    return axios.get('/api', { params: { path: `qa/questions/${question.question_id}/answers` } })
      .then((response) => setAnswerData(response.data.results))
      .catch((err) => err);
  }

  useEffect(() => {
    getAllAnswers();
  }, []);

  return (
    <div>
      <ul>
        <li>{question.question_body}</li>
        <span>
          {question.question_helpfulness} people found this question helpful
        </span>
        <div>
          <AnswerList answers={answerData} />
        </div>
      </ul>
    </div>
  );
}

import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function QuestionListEntry({ question }) {
  // const [answerData, setAnswerData] = useState([]);

  // function getAllAnswers() {
  //   return axios.get('/api', { params: { path: `qa/questions?question_id=${question.question_id}` } })
  //     .then((response) => setAnswerData(response))
  //     .catch((err) => console.error(err));
  // }

  // // https://app-hrsei-api.herokuapp.com/api/fec2/rfp/qa/questions?product_id=65631&question_id=573870/answers

  // console.log(answerData);

  // useEffect(() => {
  //   getAllAnswers();
  // }, []);

  return (
    <div>
      <ul>
        <li>{question.question_body}</li>
        <li>{question.question_helpfulness}</li>
      </ul>
    </div>
  );
}

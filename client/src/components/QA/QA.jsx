import React, { useState, useEffect } from 'react';
import axios from 'axios';
// eslint-disable-next-line import/extensions
import QuestionList from './components/QuestionList.jsx';

// require('dotenv').config();

// const id = process.env.id;

export default function QA() {
  const [questionData, setQuestionData] = useState([]);

  function getFirstFourQuestions() {
    return axios.get('/api', { params: { path: 'qa/questions?product_id=65631' } })
      .then((response) => setQuestionData(response.data.results.slice(0, 4)))
      .catch((err) => console.error(err));
  }

  function showAllQuestions() {
    return axios.get('/api', { params: { path: 'qa/questions?product_id=65631' } })
      .then((response) => setQuestionData(response.data.results))
      .catch((err) => console.error(err));
  }

  useEffect(() => {
    getFirstFourQuestions();
  }, []);

  return (
    <div>
      <QuestionList questions={questionData} />
      <input type="submit" value="More Answered Questions" onClick={() => showAllQuestions()} />
    </div>
  );
}

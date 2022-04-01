import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
// eslint-disable-next-line import/extensions
import QuestionList from './components/QuestionList.jsx';

// require('dotenv').config();

// const id = process.env.id;

export default function QA() {
  const [questionData, setQuestionData] = useState([]);
  const [allQuestionData, setAllQuestionData] = useState([]);
  const [count, setCount] = useState(2);

  const id = '65631';

  function getQuestions() {
    return axios.get('/api', { params: { path: `qa/questions?product_id=${id}&count=${count}` } })
      .then((response) => setQuestionData(response.data.results))
      .catch((err) => err);
  }

  function getAllQuestions() {
    return axios.get('/api', { params: { path: `qa/questions?product_id=${id}` } })
      .then((response) => setAllQuestionData(response.data.results))
      .catch((err) => err);
  }

  function filterQuestionsWithSearch(term) {
    const filteredList = [];
    if (term.length <= 3) {
      getQuestions();
      return;
    }
    allQuestionData.forEach((question) => {
      if (question.question_body.includes(term)) {
        filteredList.push(question);
      }
    });
    setQuestionData(filteredList);
  }

  const incrementQuestionCount = useCallback(() => setCount((prevCount) => prevCount + 2), []);

  useEffect(() => {
    getQuestions();
    getAllQuestions();
  }, [count]);

  return (
    <div>
      <input type="text" placeholder="Have a question? Search for answers…" onChange={(event) => filterQuestionsWithSearch(event.target.value)} />
      <QuestionList questions={questionData} />
      <input type="submit" value="More Answered Questions" onClick={() => incrementQuestionCount()} />
    </div>
  );
}

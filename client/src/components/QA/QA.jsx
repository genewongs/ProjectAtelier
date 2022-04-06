import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import QuestionList from './components/QuestionList';
import NewQuestion from './components/NewQuestion';
import StyledSearchBar from './components/styles/StyledSearchBar';

export default function QA() {
  const [questionData, setQuestionData] = useState([]);
  const [allQuestionData, setAllQuestionData] = useState([]);
  const [count, setCount] = useState(2);
  const [show, setShow] = useState(false);
  const [limitHit, setLimitHit] = useState(false);

  const id = 65654;
  let startingLimit = 5;

  if (allQuestionData.length > startingLimit) {
    startingLimit = allQuestionData.length;
  }

  function closeModal() {
    setShow(false);
  }

  function getQuestions() {
    return axios.get('/api', { params: { path: `qa/questions?product_id=${id}&count=${count}` } })
      .then((response) => setQuestionData(response.data.results))
      .catch((err) => err);
  }

  function getAllQuestions() {
    return axios.get('/api', { params: { path: `qa/questions?product_id=${id}&count=9999` } })
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
    getAllQuestions();
    getQuestions()
      .then(() => {
        if (count >= startingLimit) {
          setLimitHit(true);
        } else {
          setLimitHit(false);
        }
      });
  }, [count]);

  return (

    <div data-testid="questionList">
      <StyledSearchBar>
        <input type="text" placeholder="Have a question? Search for answers…" size="60" onChange={(event) => filterQuestionsWithSearch(event.target.value)} />
      </StyledSearchBar>
      <QuestionList questions={questionData} getQuestions={getQuestions} />
      <br />
      <div>
        {limitHit ? null : (
          <button
            type="button"
            onClick={() => incrementQuestionCount()}
          >
            More Answered Questions
          </button>
        )}
        <br />
      </div>
      <br />
      <div>
        <button
          type="button"
          onClick={() => setShow(true)}
        >
          Add A New Question +
        </button>
        <br />
      </div>
      <NewQuestion id={id} show={show} closeModal={closeModal} getQuestions={getQuestions} />
    </div>
  );
}

import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import NewAnswer from './NewAnswer';
import AnswerList from './AnswerList';

export default function QuestionListEntry({ question, getQuestions }) {
  const [answerData, setAnswerData] = useState([]);
  const [allAnswerData, setAllAnswerData] = useState([]);
  const [count, setCount] = useState(2);
  const [show, setShow] = useState(false);
  const [limitHit, setLimitHit] = useState(false);

  let startingLimit = 3;

  if (allAnswerData.length > startingLimit) {
    startingLimit = allAnswerData.length;
  }

  function getAnswers() {
    return axios.get('/api', { params: { path: `qa/questions/${question.question_id}/answers?count=${count}` } })
      .then((response) => setAnswerData(response.data.results))
      .catch((err) => err);
  }

  function getAllAnswers() {
    return axios.get('/api', { params: { path: `qa/questions/${question.question_id}/answers?count=9999` } })
      .then((response) => setAllAnswerData(response.data.results))
      .catch((err) => err);
  }

  function incrementHelpful() {
    return axios.put('/api', {
      path: `qa/questions/${question.question_id}/helpful`,
    })
      .then(getQuestions())
      .catch((err) => new Error(err));
  }

  function reportQuestion() {
    return axios.put('/api', {
      path: `qa/questions/${question.question_id}/report`,
    })
      .then(getQuestions())
      .catch((err) => new Error(err));
  }

  function closeModal() {
    setShow(false);
  }

  const incrementCount = useCallback(() => setCount((prevCount) => prevCount + 2), []);

  useEffect(() => {
    getAllAnswers();
    getAnswers()
      .then(() => {
        if (count >= startingLimit) {
          setLimitHit(true);
        } else {
          setLimitHit(false);
        }
      });
  }, [count]);

  return (
    <div>
      <ul>
        <li>{question.question_body}</li>
        <span>
          Helpful?
          <button type="submit" onClick={incrementHelpful}>
            Yes
          </button>
          {question.question_helpfulness}
        </span>
        <span>
          <button type="submit" onClick={reportQuestion}>
            Report
          </button>
        </span>
        <div>
          <AnswerList answers={answerData} getAnswers={getAnswers} />
          <div>
            {limitHit ? null : (
              <button
                type="button"
                onClick={incrementCount}
              >
                Load More Answers
              </button>
            )}
            <br />
          </div>
        </div>
        {/* <button
          type="button"
          onClick={incrementCount}
        >
          Load More Answers
        </button> */}
        <button
          type="button"
          onClick={() => setShow(true)}
        >
          Submit A New Answer
        </button>
      </ul>
      {/* eslint-disable-next-line max-len */}
      <NewAnswer show={show} questionID={question.question_id} closeModal={closeModal} getAnswers={getAnswers} />
    </div>
  );
}

import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import NewAnswer from './NewAnswer';
import AnswerList from './AnswerList';
import ButtonStyle from './styles/StyledButtons';

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
      <div>
        <div>

          <ButtonStyle>
            <b>Q: </b>
            {' '}
            {' '}
            {question.question_body}
            <span className="all-question-buttons">
              {' '}
              Helpful?
              {' '}
              {' '}
              <button type="submit" onClick={incrementHelpful} className="helpful-question-button">
                Yes
              </button>
              (
              {question.question_helpfulness}
              )
              |
              <button
                type="button"
                onClick={() => setShow(true)}
                className="add-answer-button"
              >
                Add Answer
              </button>
              {/* eslint-disable-next-line max-len */}
              <NewAnswer show={show} questionID={question.question_id} closeModal={closeModal} getAnswers={getAnswers} />
              |
              <button type="submit" onClick={reportQuestion} className="report-question-button">
                Report This Question
              </button>
            </span>
          </ButtonStyle>
          <br />
        </div>
      </div>
      <div>
        <AnswerList answers={answerData} getAnswers={getAnswers} />
        <ButtonStyle>
          <div>
            {limitHit ? null : (
              <button
                type="button"
                onClick={incrementCount}
                className="load-more-answer-button"
              >
                <b>LOAD MORE ANSWERS</b>
              </button>
            )}
            <br />
          </div>
        </ButtonStyle>
      </div>
    </div>
  );
}

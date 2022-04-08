import React, { useState } from 'react';
import axios from 'axios';
import StyledModalContainer from './styles/StyledModalContainer';
import StyledModal from './styles/StyledModal';

export default function NewAnswer({
  show, questionID, closeModal, getAnswers,
}) {
  const [answerBody, setAnswerBody] = useState([]);
  const [answerAuthorName, setAnswerAuthorName] = useState([]);
  const [answerAuthorEmail, setAnswerAuthorEmail] = useState([]);

  if (!show) {
    return null;
  }

  function getBody(userInput) {
    setAnswerBody(userInput);
  }

  function getAuthorName(userInput) {
    setAnswerAuthorName(userInput);
  }

  function getEmail(userInput) {
    setAnswerAuthorEmail(userInput);
  }

  function submitQuestion() {
    const answer = {
      body: answerBody,
      name: answerAuthorName,
      email: answerAuthorEmail,
    };
    const query = {
      path: `qa/questions/${questionID}/answers`,
      query: answer,
    };
    if (answer.body.length < 1 || answer.name.length < 1 || answer.email.length < 1) {
      alert('fix empty field(s)');
    } else {
      closeModal();
      console.log(answer);
      axios.post('/api', query)
        .then(() => getAnswers())
        .catch((err) => console.error(err));
      console.log(answer);
    }
  }

  return (
    <div>
      <StyledModalContainer>
        <StyledModal>
          <h2>Submit Your Answer:</h2>
          <span>Your Answer: * </span>
          <br />
          <textarea
            id="newAnswer"
            rows="4"
            cols="50"
            onChange={(event) => { getBody(event.target.value); }}
          />
          <br />
          <br />
          <span>What is your nickname? * </span>
          <br />
          <input
            type="text"
            id="nickname"
            placeholder="Example: jack543!"
            onChange={(event) => { getAuthorName(event.target.value); }}
          />
          <br />
          <span>For privacy reasons, do not use your full name or email address </span>
          <br />
          <br />
          <span>What is your email? * </span>
          <br />
          <input
            type="text"
            id="email"
            placeholder="Example: jack@email.com"
            onChange={(event) => { getEmail(event.target.value); }}
          />
          <br />
          <span>For authentication reasons, you will not be emailed </span>
          <div>
            <br />
            <button
              type="button"
              onClick={() => { submitQuestion(); }}
            >
              Submit Answer
            </button>
            <br />
            <br />
            <button
              type="button"
              onClick={() => { closeModal(); }}
            >
              Close
            </button>
          </div>
          <br />
        </StyledModal>
      </StyledModalContainer>

    </div>
  );
}

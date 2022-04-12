import React, { useState } from 'react';
import axios from 'axios';
import StyledModalContainer from './styles/StyledModalContainer';
import StyledModal from './styles/StyledModal';

export default function NewQuestion({
  id, show, toggleModal, getQuestions,
}) {
  if (!show) {
    return null;
  }

  const [questionBody, setQuestionBody] = useState([]);
  const [questionAuthorName, setQuestionAuthorName] = useState([]);
  const [questionAuthorEmail, setQuestionAuthorEmail] = useState([]);

  function getBody(userInput) {
    setQuestionBody(userInput);
  }

  function getAuthorName(userInput) {
    setQuestionAuthorName(userInput);
  }

  function getEmail(userInput) {
    setQuestionAuthorEmail(userInput);
  }

  function submitQuestion() {
    const question = {
      body: questionBody,
      name: questionAuthorName,
      email: questionAuthorEmail,
      product_id: id,
    };
    const query = {
      path: 'qa/questions',
      query: question,
    };
    if (question.body.length < 1 || question.name.length < 1 || question.email.length < 1) {
      alert('fix empty field(s)');
    } else {
      toggleModal();
      axios.post('/api', query)
        .then(() => getQuestions())
        .catch((err) => new Error(err));
    }
  }

  return (

    <div>
      <StyledModalContainer onClick={toggleModal}>
        <StyledModal onClick={(event) => { event.stopPropagation(); }}>
          <h2>Ask Your Question Here:</h2>
          <span>Your Question: * </span>
          <br />
          <textarea
            id="newQuestion"
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
            placeholder="Example: jackson11!"
            onChange={(event) => { getAuthorName(event.target.value); }}
          />
          <br />
          <br />
          <span>What is your email? * </span>
          <br />
          <input
            type="text"
            id="email"
            placeholder="Example: jackson11@email.com"
            onChange={(event) => { getEmail(event.target.value); }}
          />
          <div>
            <br />
            <button
              type="button"
              onClick={() => { submitQuestion(); }}
            >
              Submit Your Question!
            </button>
            <br />
            <br />
            <button
              type="button"
              onClick={() => { toggleModal(); }}
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

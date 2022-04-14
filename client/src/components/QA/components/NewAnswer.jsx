import React, { useState } from 'react';
import axios from 'axios';
import StyledModalContainer from './styles/StyledModalContainer';
import StyledModal from './styles/StyledModal';
import AddAnswerPhotos from './AddAnswerPhotos';

export default function NewAnswer({
  show, questionID, toggleModal, getAnswers,
}) {
  const [answerBody, setAnswerBody] = useState([]);
  const [answerAuthorName, setAnswerAuthorName] = useState([]);
  const [answerPhotos, setAnswerPhotos] = useState([]);
  const [answerAuthorEmail, setAnswerAuthorEmail] = useState([]);
  const [photoModalState, setPhotoModalState] = useState(true);

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

  function togglePhotoModal() {
    if (photoModalState) {
      setPhotoModalState(false);
    } else {
      setPhotoModalState(true);
    }
  }

  function getURLs() {
    const photoURLs = [];
    answerPhotos.forEach((photo) => {
      photoURLs.push(photo.secure_url);
    });
    return photoURLs;
  }

  function submitQuestion() {
    const answer = {
      body: answerBody,
      name: answerAuthorName,
      email: answerAuthorEmail,
      photos: getURLs(),
    };
    const query = {
      path: `qa/questions/${questionID}/answers`,
      query: answer,
    };
    if (answer.body.length < 1 || answer.name.length < 1 || answer.email.length < 1) {
      alert('fix empty field(s)');
    } else {
      toggleModal();
      axios.post('/api', query)
        .then(() => getAnswers())
        .catch((err) => new Error(err));
    }
  }

  return (
    <div>
      <StyledModalContainer onClick={toggleModal}>
        <StyledModal onClick={(e) => { e.stopPropagation(); }}>
          <div className="new-answer">
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
            <div className="new-answer-buttons">
              <br />
              <button
                type="button"
                className="add-photos-button"
                id="photos"
                onClick={togglePhotoModal}
              >
                {photoModalState ? null : (
                  // eslint-disable-next-line max-len
                  <AddAnswerPhotos togglePhotoModal={togglePhotoModal} setAnswerPhotos={setAnswerPhotos} />
                )}
                Add Photos
              </button>
              <br />
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
                onClick={() => { toggleModal(); }}
              >
                Close
              </button>
            </div>
            <br />
          </div>
        </StyledModal>
      </StyledModalContainer>
    </div>
  );
}

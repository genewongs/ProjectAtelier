import React, { useState } from 'react';
import axios from 'axios';
import dayjs from 'dayjs';
import ButtonStyle from './styles/StyledButtons';
import AnswerListStyle from './styles/StyledAnswerList';

export default function AnswerListEntry({ answer, getAnswers }) {
  const [helpClick, setHelpClick] = useState(false);

  function reportAnswer() {
    return axios.put('/api', {
      path: `qa/answers/${answer.answer_id}/report`,
    })
      .then(() => getAnswers())
      .catch((err) => new Error(err));
  }

  function incrementAnswerHelpful() {
    axios.put('/api', {
      path: `qa/answers/${answer.answer_id}/helpful`,
    })
      .then(answer.helpfulness += 1)
      .then(() => setHelpClick(true))
      .catch((err) => new Error(err));
  }

  return (
    <div>

      <b>A: </b>
      {' '}
      {' '}
      {answer.body}
      <br />
      <div>
        <AnswerListStyle>
          <ButtonStyle>
            <span className="answer-author-info">
              by:
              {' '}
              {answer.answerer_name}
              ,
              {' '}
              {dayjs(answer.date).format('MMMM D, YYYY')}
              {' '}
              {' '}
            </span>
            |
            {' '}
            {' '}
            <span className="answer-helpful-and-report">
              <span>
                Helpful?
                {helpClick ? null : (
                  <button type="submit" onClick={incrementAnswerHelpful} className="helpful-answer-button">
                    Yes
                  </button>
                )}
                (
                {answer.helpfulness}
                )
                |
              </span>
              <span>
                <button type="submit" onClick={reportAnswer} className="report-answer-button">
                  Report Answer
                </button>
              </span>
            </span>
          </ButtonStyle>
        </AnswerListStyle>
      </div>

      <br />
    </div>
  );
}

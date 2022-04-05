import React from 'react';
import axios from 'axios';
import moment from 'moment';

export default function AnswerListEntry({ answer, getAnswers }) {
  function reportAnswer() {
    return axios.put('/api', {
      path: `qa/answers/${answer.answer_id}/report`,
    })
      .then((response) => getAnswers())
      .catch((err) => new Error(err));
  }

  function incrementAnswerHelpful() {
    return axios.put('/api', {
      path: `qa/answers/${answer.answer_id}/helpful`,
    })
      .then((response) => getAnswers())
      .catch((err) => new Error(err));
  }

  return (
    <div>
      <ul>
        <li>
          {answer.body}
          <span>
            Helpful?
            <button type="submit" onClick={incrementAnswerHelpful}>
              Yes
            </button>
            {answer.helpfulness}
          </span>
          <span>
            <button type="submit" onClick={reportAnswer}>
              Report
            </button>
          </span>
          <br />
          {answer.answerer_name}
          <br />
          {moment(answer.date).format('MMMM Do YYYY')}
        </li>
      </ul>
    </div>
  );
}

import styled from 'styled-components';

const ButtonStyle = styled.div`

.all-question-buttons {
  float: right;
  padding-right: 15px;
  padding-left:15px;
  font-size: 13px;
}

.helpful-question-button {
  font-size: 13px;
  border: 0px;
  outline: 0px;
  text-decoration: underline;
  background: transparent;
}

.report-question-button {
  padding-right: 15px;
  padding-left:15px;
  font-size: 13px;
  border: 0px;
  outline: 0px;
  text-decoration: underline;
  background: transparent;
}

.report-answer-button {
  font-size: 13px;
  border: 0px;
  outline: 0px;
  text-decoration: underline;
  background: transparent;
}

.helpful-answer-button {
  font-size: 13px;
  border: 0px;
  outline: 0px;
  text-decoration: underline;
  background: transparent;
}

.add-answer-button {
  padding-right: 15px;
  padding-left:15px;
  font-size: 13px;
  border: 0px;
  outline: 0px;
  text-decoration: underline;
  background: transparent;
}

.load-more-answer-button {
  font-size: 14px;
  border: 0px;
  outline: 0px;
  background: transparent;
}

.button-container {
  display: flex;
  justify-content: left;
  align-items: left;
  gap: 10px;
}

.more-questions {
  height: 45px;
  width: 250px;
  border: 0px;
  outline: 0px;
  background: black;
  font-size: 15px;
  color: white;
  border-radius: 10px;
  transition: 0.3s;

  &:hover {
    background-color: red;
  }
}

.add-question {
  height: 45px;
  width: 250px;
  border: 0px;
  outline: 0px;
  background: black;
  font-size: 15px;
  color: white;
  border-radius: 10px;
  transition: 0.3s;

  &:hover {
    background-color: red;
  }
}

`;

export default ButtonStyle;

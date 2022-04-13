import React, {
  useState, useEffect, useCallback,
} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import QuestionList from './components/QuestionList';
import NewQuestion from './components/NewQuestion';
import StyledSearchBar from './components/styles/StyledSearchBar';
import ButtonStyle from './components/styles/StyledButtons';
import QuestionListStyled from './components/styles/StyledQuestionList';
import QuestionContainer from './components/styles/StyledContainer';

export default function QA() {
  const [questionData, setQuestionData] = useState([]);
  const [count, setCount] = useState(2);
  const [show, setShow] = useState(false);
  const [limitHit, setLimitHit] = useState(false);
  const [totalLength, setLength] = useState(3);

  const { productId } = useParams();

  const id = Number(productId) || 65654;

  function toggleModal() {
    if (show === true) {
      setShow(false);
    } else {
      setShow(true);
    }
  }

  function getQuestions() {
    return axios.get('/api', { params: { path: `qa/questions?product_id=${id}&count=${count}` } })
      .then((response) => setQuestionData(response.data.results))
      .catch((err) => err);
  }

  function getLength() {
    return axios.get('/api/length', { params: { path: `qa/questions?product_id=${id}&count=9999` } })
      .then((response) => setLength(response.data))
      .catch((err) => err);
  }

  function filterQuestionsWithSearch(term) {
    const filteredList = [];
    if (term.length <= 3) {
      getQuestions();
      return;
    }
    questionData.forEach((question) => {
      if (question.question_body.includes(term)) {
        filteredList.push(question);
      }
    });
    setQuestionData(filteredList);
  }

  const incrementQuestionCount = useCallback(() => setCount((prevCount) => prevCount + 2), []);

  useEffect(() => {
    getLength();
    getQuestions()
      .then(() => {
        if (count >= totalLength) {
          setLimitHit(true);
        } else {
          setLimitHit(false);
        }
      });
  }, [count]);

  return (
    <div className="questionList" data-testid="QA">
      <QuestionContainer>
        <h2>QUESTIONS AND ANSWERS</h2>
        <StyledSearchBar>
          <input type="text" placeholder="Have a question? Search for answers…" size="60" onChange={(event) => filterQuestionsWithSearch(event.target.value)} />
        </StyledSearchBar>
      </QuestionContainer>
      <QuestionList questions={questionData} getQuestions={getQuestions} />
      <QuestionContainer>
        <ButtonStyle>
          <div className="button-container">
            <div>
              {limitHit ? null : (
                <button
                  className="more-questions"
                  type="button"
                  onClick={() => incrementQuestionCount()}
                >
                  MORE ANSWERED QUESTIONS
                </button>
              )}
              <br />
            </div>
            <br />
            <div>
              <button
                className="add-question"
                type="button"
                onClick={() => setShow(true)}
              >
                ADD A NEW QUESTION +
              </button>
              <br />
            </div>
          </div>
        </ButtonStyle>
      </QuestionContainer>
      {/* <Suspense fallback={<div>Loading...</div>}> */}
      <NewQuestion id={id} show={show} toggleModal={toggleModal} getQuestions={getQuestions} />
      {/* </Suspense> */}
    </div>
  );
}

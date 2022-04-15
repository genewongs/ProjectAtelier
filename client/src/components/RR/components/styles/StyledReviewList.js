import styled from 'styled-components';

const ReviewListStyled = styled.div`
  max-height: 600px;
  width: 700px;
  overflow: scroll;
  margin: 10px;
  padding: 10px;

  &::-webkit-scrollbar {
    background-color: transparent;
    width: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: transparent;
  }

  &:hover {
    &::-webkit-scrollbar-thumb {
      background-color: red;
    }
  }

  .review {
    width: 90%;
    height: 90%;
    height: auto;
    border-bottom: 2px solid black;
    padding-top: 10px;
    padding-bottom: 10px;
  }

  .top-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .review-body {
    font-size: 17px;

    .show-more-button {
      font-size: 17px;
      border: 0px;
      outline: 0px;
      text-decoration: underline;
      background: transparent;

      &:hover {
        color: red;
      }
    }
  }

  .review-recommend {
    font-size: 15px;
  }

  .review-name {
    font-size: 15px;

    .review-date {
      font-size: 15px;
    }
  }

  .review-response {
    background: rgba(187,187,187,0.4);
    padding: 5px;
    width: 500px;
    font-size: 15px;
    overflow: auto;
  }

  .review-helpful {
    font-size: 14px;

    button {
      font-size: 13px;
      border: 0px;
      outline: 0px;
      text-decoration: underline;
      background: transparent;

      &:hover {
        color: red;
      }
    }
  }
  }
`;

export default ReviewListStyled;

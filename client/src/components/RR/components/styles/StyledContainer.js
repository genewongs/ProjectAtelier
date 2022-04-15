import styled from 'styled-components';

const ContainerStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;
  font-size: 20px;
  margin: 10px;
  padding: 5px;

  .review-left-container {
    display:flex;
    flex-direction: column;
    width: 500px;
    height: 600px;
    padding: 5px;

    .star-rating-container {
      display: flex;
      flex-direction: row;
      gap: 5px;

      .stars-rating {
        font-size: 50px;
      }

      .average {
        font-size: 60px;
      }
    }
  }

  .review-right-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    height: 600px;
    padding: 10px;

    .sort-selector {
      font-size: 19px;
      border: 0px;
      outline: 0px;
      text-decoration: underline;

      &:hover {
        color: red;
      }
    }

    .review-buttons-container {
      display: flex;
      justify-content: left;
      align-items: left;
      gap: 10px;

      > button {
        height: 45px;
        width: 150px;
        border: 0px;
        outline: 0px;
        background: black;
        font-size: 15px;
        color: white;
        border-radius: 10px;
        transition: 0.3s;

        &:hover {
          background: red;
        }
      }
    }
  }
`;

export default ContainerStyled;

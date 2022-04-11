import styled from 'styled-components';

const ContainerStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  font-family: Helvetica;
  gap: 20px;
  font-size: 20px;
  margin: 10px;
  padding: 5px;

  .review-left-container {
    display:flex;
    flex-direction: column;
    /* border: 2px solid black; */
    width: 500px;
    padding: 5px;
  }

  .review-right-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    /* border: 2px solid black; */
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

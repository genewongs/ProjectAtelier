import styled from 'styled-components';

const ContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: Helvetica;
  font-size: 20px;

  .sort-selector {
    font-size: 19px;
    border: 0px;
    outline: 0px;
    text-decoration: underline;
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
`;

export default ContainerStyled;

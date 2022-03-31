import styled from 'styled-components';

export const SelectorContainer = styled.div`
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  padding: 40px;
  &:span {
    font-weight: bold;
    font-size: 2em;
  }
`;

export const ImageContainer = styled.div`
  border: 1px solid darkgreen;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
  flex-flow: row wrap;

  > img {
    height: 70px;
    width: 70px;
    border-radius: 50%;
    border: 1px solid black;
    margin: 10px;

    &:hover {
    cursor: pointer;
    transform: scale(0.97);
    box-shadow: 5px 2px 2px rgba(0, 0, 0, 0.235);
    }
  }
`;

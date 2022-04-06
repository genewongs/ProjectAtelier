import styled from 'styled-components';

const StyledPhotos = styled.div`
  display: flex;
  flex-direction: row;
  padding: 3px;

  > input {
    position: relative;
    width: 125px;
    height: 100px;
    border: 1px solid rgba(0, 0, 0, 0);
    border-radius: 5%;
    margin: 5px;

    &:hover {
      cursor: pointer;
      border: 1px solid black;
      transform: all ease-in-out 0.05s;
    }
  }
`;

export default StyledPhotos;

import styled from 'styled-components';

export const SelectSize = styled.div`
  > button {
    border: none;
    width: 70px;
    height: 50px;
    margin: 20px 5px 0px 5px;
    transition: all ease-in-out 0.05s;
    &:hover {
      background-color: darkgray;
      transition: all ease-in-out 0.05s;
      cursor: pointer;
    }
  }
`;

export const SelectQuantity = styled.div`
  > select {
    margin-top: 20px;
    height: 40px;
    width: 100%;
  }
`;

export const AddCartButton = styled.div`
  padding: 20px 0px;
  > button {
    width: 100%;
    height: 40px;
  }
`
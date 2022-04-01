import styled from 'styled-components';

export const SelectSize = styled.div`
  > button {
    border: none;
    width: 70px;
    height: 50px;
    margin: 20px 5px 0px 5px;
    transition: all ease-in-out 0.5s;
    &:hover {
      background-color: rgb(210, 210, 210);
      transition: all ease-in-out 0.5s;
      cursor: pointer;
    }
  }
  >button.selected {
      background-color: rgb(247, 0, 0);
      color: white;
    }
`;

export const SelectQuantity = styled.div`
  > select {
    color: white;
    background-color: rgba(247, 0, 0, 0.8);
    border: none;
    margin-top: 20px;
    height: 40px;
    width: 100%;
  }
`;

export const AddCartButton = styled.div`
  padding: 20px 0px;
  > button {
    color: white;
    width: 100%;
    height: 40px;
    border: none;
    background-color: #f70000;
    transition: all ease-in-out 0.3s;

    &:hover {
      /* border: 1px solid black; */
      background-color: #df0000;
      cursor: pointer;
      transition: all ease-in-out 0.3s;
    }
  }
`;

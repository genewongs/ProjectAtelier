import styled from 'styled-components';

export const YourOutfitStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  .btn {
    cursor: pointer;
    height: 40px;
    border: 1px solid gray;
    border-radius: 5px;
    transition: all ease-in-out 0.05s;
    &:hover {
      transition: all ease-in-out 0.05s;
      background-color: #bababa;
      color: white;
    }
  }
`;

export const OutfitWrapper = styled.div`
  height: 335px;
  width: 225px;
  margin-right: 5px;
  display: flex;
  border: 1px solid;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  .add-curr-product{
    display: flex;
    padding: 30px;
  }
  .plus-icon{
    display: flex;
  }
`;

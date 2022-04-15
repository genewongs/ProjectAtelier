/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const RelatedProductsStyled = styled.div`
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

export const RelatedProductsTitle = styled.p`
  display: flex;
`;

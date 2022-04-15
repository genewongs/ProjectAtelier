/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const ModalWrapper = styled.div`
  .modal-container{
    z-index: 99;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: fixed;
    display: flex;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
  }
  .compare-container {
    display: flex;
    padding: 20px;
    flex-direction: column;
    align-items: center;
    border: 1px solid;
    background-color: rgba(255, 255, 255, 1);
  }
`;

export const BothWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  .check{
    font-size: 2px;
  }
`;

export const Title = styled.h1`
    display: flex;
    font-size: 15px;
    color: black;
`;
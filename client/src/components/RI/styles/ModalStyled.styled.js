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
`;

export const Title = styled.h1`
    display: flex;
    font-size: 15px;
    color: black;
`;

export const LeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LeftName = styled.p`
  display: flex;
`;

export const LeftFeat = styled.div`
  font-size: 15px;
  text-align: left;
  color: grey;
`;

export const RightWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RightName = styled.p`
  display: flex;
  justify-content: flex-end;
`;

export const RightFeat = styled.div`
  font-size: 15px;
  text-align: right;
  color: grey;
`;

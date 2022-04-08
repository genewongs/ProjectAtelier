/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const ModalWrapper = styled.div`
  .modal-container{
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .compare-container {
    background-color: rgba(255, 255, 255, 1);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    border: 1px solid;
    border-radius: 10px;
  }
`;

/* Going to be a container for the left side of the comparison modal */
export const LeftWrapper = styled.div`
  display: flex;
`;

/* Going to be a container for the right side of the comparison modal */
export const RightWrapper = styled.div`
  display: flex;
`;

export const LeftFeat = styled.div`
  font-size: 15px;
  text-align: center;
  color: grey;
`;

export const RightFeat = styled.div`
  font-size: 15px;
  text-align: center;
  color: grey;
`;
